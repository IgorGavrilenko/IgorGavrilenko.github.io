/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/scripts/tnetwork.js ***!
  \*********************************/
window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(CSSRulePlugin);
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
  function service4Func() {
    var service1 = gsap.timeline({
      defaults: {
        duration: .5
      },
      scrollTrigger: {
        trigger: '.section--service-4',
        start: 'top 50%',
        scrub: true
      }
    });
    service1.to('.section--service-4 .m-grid__item, .section--service-4 .section__title', {
      yPercent: -20
    });
  }

  // service4Func()

  // roundAnimFunc
  function roundAnimFunc(wh) {
    var roundAnimEl = document.querySelector('.round-anim');
    if (roundAnimEl) {
      var roundAnim = gsap.timeline({
        defaults: {
          duration: 1
        },
        scrollTrigger: {
          trigger: '.section--feature-3 .section__content',
          start: 'top',
          end: 'bottom 20%',
          scrub: true,
          pin: true,
          toggleClass: 'is-active'
        }
      });
      roundAnim.add('startAnim').to('.round-anim', {
        delay: 3,
        duration: 3,
        width: wh,
        height: wh
      }).to('.m-grid--feature-3', {
        autoAlpha: 0
      }).to('.section--case-1', {
        autoAlpha: 1
      }, '-=2').to('.section--case-1 .card__inner', {
        autoAlpha: 1,
        scale: 1
      }, 'startAnim').to('.card__icon', {
        autoAlpha: 1,
        scale: 1
      }, 'startAnim');
    }
  }

  // roundAnimFunc();

  // marqueeFunc
  function marqueeFunc(selector, repeat, paused, speed) {
    if (selector) {
      var loop = horizontalLoop("".concat(selector, " .marquee__item"), {
        repeat: repeat,
        paused: paused,
        speed: speed
      });
    }
  }

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
    marqueeFunc('.marquee--ticker', -1, false, 1.5);
  });
  mm.add('(min-width: 768px)', function () {
    // tab - desktop functions
    service4Func();
  });
  mm.add('(min-width: 1200px)', function () {
    // tab - desktop functions
    service4Func();
    setTimeout(function () {
      heroContentFunc();
    }, 4500);
    roundAnimFunc(4600);
    marqueeFunc('.marquee--ticker', -1, false, 1);
  });

  // DOMContentLoaded //
});
// DOMContentLoaded //
/******/ })()
;
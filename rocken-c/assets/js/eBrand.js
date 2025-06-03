/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/scripts/eBrand.js ***!
  \*******************************/
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
  function swiperScrollbarFunc(selector, scrollbarType, spaceMob, spaceDesk, slides) {
    var swiper;
    if (selector) {
      swiper = new Swiper(selector, {
        slidesPerView: slides,
        spaceBetween: spaceMob,
        freeMode: true,
        scrollbar: {
          el: "".concat(selector, " .swiper-scrollbar"),
          hide: scrollbarType
        },
        navigation: {
          nextEl: "".concat(selector, " .swiper-button-next"),
          prevEl: "".concat(selector, " .swiper-button-prev")
        },
        breakpoints: {
          576: {
            slidesPerView: 'auto',
            spaceBetween: spaceDesk
          }
        },
        resistance: true,
        resistanceRatio: 0,
        autoHeight: false
      });
    }
    var progressBar = document.querySelector("".concat(selector, " .swiper-scroll__line"));
    if (progressBar) {
      var updateProgressBar = function updateProgressBar() {
        var activeIndex = swiper.activeIndex;
        var widthPerSlide = 100 / swiper.slides.length;
        progressBar.style.width = widthPerSlide * (activeIndex + 1) + '%';
      };
      swiper.on('slideChange', function () {
        updateProgressBar();
      });
      updateProgressBar();
    }
  }
  swiperScrollbarFunc('.swiper-partner', false, 12, 20, 'auto');

  // cardFunc
  function cardFunc() {
    var stagger = 2;
    gsap.set('.card--effect', {
      y: function y(index) {
        return 10 * index;
      },
      zIndex: function zIndex(index, target, targets) {
        return targets.length - index;
      },
      scale: function scale(index) {
        return 1 - index * 0.01;
      }
    });
    var tlc = gsap.timeline({
      defaults: {
        ease: 'none',
        duration: 1
      },
      scrollTrigger: {
        trigger: '.section--effect',
        start: 'top',
        end: 'bottom',
        scrub: 1,
        pin: true,
        onRefresh: function onRefresh(self) {
          return self.progress && self.animation.progress(1);
        },
        invalidateOnRefresh: true
      }
    });
    tlc.to('.card--effect', {
      scale: 1,
      stagger: stagger
    });
    tlc.to('.card--effect', {
      yPercent: -300,
      opacity: .7,
      stagger: stagger,
      rotation: 20
    }, stagger);
  }
  cardFunc();

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

  // resizeFuncBrand
  function resizeFuncBrand() {
    var oldWidth = window.innerWidth;
    window.onresize = function () {
      var newWidth = window.innerWidth;
      if (newWidth !== oldWidth) {
        oldWidth = newWidth;
        setTimeout(function () {}, 200);
      }
    };
  }
  resizeFuncBrand();

  // orientationchangeFuncBrand
  function orientationchangeFuncBrand() {
    window.addEventListener('orientationchange', function () {
      setTimeout(function () {}, 200);
    }, false);
  }
  orientationchangeFuncBrand();

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
    service4Func('.section--effect', '.section--effect .section__title');
  });
  mm.add('(min-width: 1200px)', function () {
    // tab - desktop functions
    setTimeout(function () {
      heroContentFunc();
    }, 4500);
  });

  // DOMContentLoaded //
});
// DOMContentLoaded //
/******/ })()
;
/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./src/scripts/recruiting.js ***!
  \***********************************/
window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollToPlugin);
  ScrollTrigger.normalizeScroll(true);

  // swiperScrollbarFunc

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
  swiperScrollbarFunc('.swiper-partner', false, 12, 21, 'auto');

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

  // service3Func
  function service3Func(item, percent, start) {
    var sectionItem = gsap.utils.toArray(item);
    sectionItem === null || sectionItem === void 0 || sectionItem.forEach(function (sectionItem) {
      var tl = gsap.timeline({
        defaults: {
          duration: .5
        },
        scrollTrigger: {
          trigger: sectionItem,
          start: start,
          scrub: true
        }
      });
      tl.to(sectionItem, {
        xPercent: percent
      });
    });
  }

  // heroContentFunc
  function heroContentFunc() {
    var tl = gsap.timeline({
      defaults: {
        duration: .5
      },
      scrollTrigger: {
        trigger: '.section--hero-page',
        toggleActions: 'play none none none',
        start: 'top 100%',
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

  // tLineMark
  function tLineMark(item, tlStart) {
    var point = gsap.utils.toArray(item);
    point === null || point === void 0 || point.forEach(function (point) {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: point,
          scrub: true,
          start: tlStart,
          end: 'bottom',
          toggleClass: 'tl-point--active'
        }
      });
    });
  }
  tLineMark('.tl-point--hero-2', 'top 49%');
  tLineMark('.tl-point--service-3', 'top 50%');
  tLineMark('.tl-point--service-4', 'top 50%');

  // loadFunc
  function loadFunc() {
    var sectionLoader = document.querySelector('.section--loader');
    var timeLine = document.querySelector('.time-line');
    var sectionHide = 'section--hide';
    var timeLineHide = 'time-line--hide';
    setTimeout(function () {
      sectionLoader.classList.add(sectionHide);
    }, 3500);
    setTimeout(function () {
      timeLine.classList.remove(timeLineHide);
    }, 4700);
  }
  loadFunc();

  // resizeFuncRec
  function resizeFuncRec() {
    var oldWidth = window.innerWidth;
    window.onresize = function () {
      var newWidth = window.innerWidth;
      if (newWidth !== oldWidth) {
        oldWidth = newWidth;
        setTimeout(function () {
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
      setTimeout(function () {
        tLineMark('.tl-point--hero-2', 'top 49%');
        tLineMark('.tl-point--service-3', 'top 50%');
        tLineMark('.tl-point--service-4', 'top 50%');
      }, 200);
    }, false);
  }
  orientationchangeFuncRec();

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
  mm.add('(min-width: 768px)', function () {
    // tab - desktop functions
    service3Func('.m-grid--service-3 .m-grid__item:nth-child(odd) .card--service-3', 10, 'top 50%');
    service3Func('.m-grid--service-3 .m-grid__item:nth-child(even) .card--service-3', -10, 'top 50%');
    service4Func();
  });
  mm.add('(min-width: 1200px)', function () {
    // desktop functions
    setTimeout(function () {
      heroContentFunc();
    }, 4500);
  });

  // DOMContentLoaded //
});
// DOMContentLoaded //
/******/ })()
;
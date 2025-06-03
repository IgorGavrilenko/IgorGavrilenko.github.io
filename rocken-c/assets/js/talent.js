/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/scripts/talent.js ***!
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

  // serviceFunc
  function serviceFunc() {
    var service = gsap.timeline({
      defaults: {
        duration: .5,
        stagger: .2,
        autoAlpha: 1
      },
      scrollTrigger: {
        trigger: '.section--service-talent',
        toggleActions: 'play none none none',
        start: 'top 50%',
        onRefresh: function onRefresh(self) {
          return self.progress && self.animation.progress(1);
        }
      }
    });
    service.to('.m-grid--service-talent .m-grid__item, .section--service-talent .section__title, .section--service-talent .section__sub-text', {
      yPercent: -50,
      autoAlpha: 1
    });
  }

  // serviceFunc()

  var mquery = window.matchMedia('(max-width: 1199px)');
  var swiper;
  var enableSwiper = function enableSwiper() {
    if (true) {
      swiper = new Swiper('.swiper-talent', {
        slidesPerView: 'auto',
        spaceBetween: 12,
        freeMode: true,
        scrollbar: {
          el: '.swiper-talent .swiper-scrollbar',
          hide: false
        },
        resistance: true,
        resistanceRatio: 0,
        autoHeight: false,
        breakpoints: {
          992: {
            slidesPerView: 5
          }
        }
      });
    }
  };
  mquery.onchange = function (evt) {
    if (mquery.matches) {
      enableSwiper();
    }
  };
  mquery.onchange();
  function counterFunc() {
    var odometer = document.querySelectorAll('.odometer');
    var odometerParent = document.querySelector('.m-grid--counter');
    if (odometer) {
      odometer.forEach(function (odometer) {
        console.log(odometer.dataset.value);
        odometer.innerHTML = odometer.dataset.value;
      });
    }
  }

  // startCounterFunc
  function startCounterFunc() {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.m-grid--counter',
        start: 'top 50%',
        onEnter: counterFunc,
        onRefresh: function onRefresh(self) {
          return self.progress && self.animation.progress(1);
        }
      }
    });
    tl.to('.m-grid--counter .card__bar', {
      height: "4rem",
      duration: 2
    });
  }
  startCounterFunc();

  // telFunc
  function telFunc() {
    var large = document.querySelector(".section--feature-5 .swiper-talent");
    var tl = gsap.timeline({
      defaults: {
        duration: 2,
        ease: "none"
      },
      scrollTrigger: {
        trigger: ".section--feature-5",
        pin: true,
        start: "top top",
        end: function end() {
          return "+=2000";
        },
        scrub: 1,
        invalidateOnRefresh: true,
        onRefresh: function onRefresh(self) {
          return self.progress && self.animation.progress(1);
        }
      }
    });
    tl.add('start').to('.section--feature-5 .section__media', {
      xPercent: -50,
      left: '50%'
    }).to('.section--feature-5 .section__intro', {
      scale: .7,
      autoAlpha: 0
    }, 'start').to('.section--feature-5 .section__intro', {
      duration: .01,
      left: '1.25rem',
      top: '30%'
    }, ">").to('.section--feature-5 .section__media', {
      top: '50%',
      yPercent: -50,
      width: '25.2%',
      rotation: 0
    }, ">").to('.section--feature-5 .section__sub-text, .section--feature-5 .section__intro', {
      autoAlpha: 1
    }, ">").to('.section--feature-5 .swiper-talent', {
      autoAlpha: 1
    }, ">").to(large, {
      y: function y() {
        return window.innerHeight - large.clientHeight - 150;
      },
      ease: "none"
    }, ">");
  }

  // telFunc();

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
  mm.add('(min-width: 992px)', function () {
    serviceFunc();
  });
  mm.add('(min-width: 1200px)', function () {
    telFunc();
    setTimeout(function () {
      heroContentFunc();
    }, 4500);
  });

  // DOMContentLoaded //
});
// DOMContentLoaded //
/******/ })()
;
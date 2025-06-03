/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/scripts/careers.js ***!
  \********************************/
window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  var workingEnvironment = document.querySelector(".working-environment");
  if (workingEnvironment) {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.working-environment',
        toggleActions: 'play none none none',
        start: 'top top',
        end: 'bottom top',
        pin: true,
        scrub: true,
        onRefresh: function onRefresh(self) {
          return self.progress && self.animation.progress(1);
        }
      }
    });
    tl.from('.working__card__04', {
      yPercent: 300,
      duration: 3
    });
    tl.to('.working__card__04', {
      rotation: -12,
      duration: 1
    });
    tl.from('.working__card__03', {
      yPercent: 300,
      duration: 3
    });
    tl.to('.working__card__03', {
      rotation: -8,
      duration: 1
    });
    tl.from('.working__card__02', {
      yPercent: 300,
      duration: 3
    });
    tl.to('.working__card__02', {
      rotation: -4,
      duration: 1
    });
    tl.from('.working__card__01', {
      yPercent: 300,
      duration: 2,
      delay: 3
    });
    tl.to('.working-environment__head', {
      yPercent: -300,
      duration: 3
    });
    tl.to('.working__card__01', {
      xPercent: -252,
      duration: 3
    }, "-=3");
    tl.to('.working__card__02', {
      xPercent: -147,
      rotation: 0,
      duration: 3
    }, "-=3");
    tl.to('.working__card__03', {
      xPercent: -42,
      rotation: 0,
      duration: 3
    }, "-=3");
    tl.to('.working__card__04', {
      xPercent: 63,
      rotation: 0,
      duration: 3
    }, "-=3");
  }
  var yearsThumbs = new Swiper('.departments__slider__thumbs', {
    direction: "vertical",
    slidesPerView: 1,
    speed: 1000,
    simulateTouch: true,
    allowTouchMove: false
    // mousewheel: {
    // 	invert: false,
    // 	sensitivity: 3,
    // 	eventsTarget: '.about-years',
    // 	releaseOnEdges: true,
    // },
  });

  var yearsPictures = new Swiper('.departments__info', {
    slidesPerView: 1,
    effect: 'fade',
    speed: 1000,
    fadeEffect: {
      crossFade: true
    },
    simulateTouch: false
  });
  yearsThumbs.controller.control = yearsPictures;
  yearsThumbs.slides.forEach(function (slide, index) {
    slide.addEventListener('click', function () {
      yearsThumbs.slideTo(index);
      yearsPictures.slideTo(index);
    });
  });
  var section = document.querySelector('.departments');
  var totalSlides = yearsThumbs.slides.length;
  var triggerHeight = section.offsetHeight;
  console.log(section);
  console.log(totalSlides);
  console.log(triggerHeight);
  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: triggerHeight * totalSlides,
    pin: true,
    scrub: 1,
    onLeave: function onLeave() {
      yearsThumbs.slideTo(totalSlides - 1);
    },
    onUpdate: function onUpdate(self) {
      var slideIndex = Math.min(totalSlides - 1, Math.floor(self.progress * totalSlides));
      yearsThumbs.slideTo(slideIndex);
    }
  });

  // DOMContentLoaded //
});
/******/ })()
;
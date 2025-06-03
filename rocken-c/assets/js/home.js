/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/scripts/home.js ***!
  \*****************************/
window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger, SplitText);

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

  // swiperScrollbarFunc('.swiper-partner', false, 12, 21, 'auto');
  swiperScrollbarFunc('.swiper-review', false, 12, 21, 1);

  // function partnerFunc(selector) {
  function partnerFunc(selector) {
    var pinnedImageWrappers = document.querySelectorAll(selector);
    if (pinnedImageWrappers) {
      pinnedImageWrappers.forEach(function (wrapper) {
        var inner = wrapper.querySelector('.swiper-wrapper');
        gsap.to(inner, {
          x: function x() {
            return -(inner.scrollWidth - document.documentElement.clientWidth) + 'px';
          },
          ease: 'none',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top top',
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
            onLeave: function onLeave() {
              wrapper.classList.add('partner-end-scroll');
            },
            onEnterBack: function onEnterBack() {
              wrapper.classList.remove('partner-end-scroll');
            }
          }
        });
      });
    }
  }

  // partnerFunc('.section--partner');

  // partnerShowFunc
  function partnerShowFunc(selectorPartner) {
    var selectorParent = document.querySelectorAll(selectorPartner);
    if (selectorParent) {
      selectorParent.forEach(function (selectorParent) {
        var content = selectorParent.querySelector('.section__content');
        var tl = gsap.timeline({
          defaults: {
            duration: 2
          },
          scrollTrigger: {
            trigger: selectorPartner,
            toggleActions: 'play none none none',
            start: 'top 50%',
            onRefresh: function onRefresh(self) {
              return self.progress && self.animation.progress(1);
            }
          }
        });
        tl.to(content, {
          xPercent: -100,
          autoAlpha: 1
        });
      });
    }
  }

  // partnerShowFunc('.section--partner');

  function swiperRatingFunc(selector) {
    var swiper;
    if (selector) {
      swiper = new Swiper(selector, {
        slidesPerView: 'auto',
        spaceBetween: 12,
        freeMode: true,
        scrollbar: {
          el: "".concat(selector, " .swiper-scrollbar"),
          hide: false
        },
        navigation: {
          nextEl: "".concat(selector, " .swiper-button-next"),
          prevEl: "".concat(selector, " .swiper-button-prev")
        },
        breakpoints: {
          992: {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 21
          }
        },
        resistance: true,
        resistanceRatio: 0,
        autoHeight: false
      });
    }

    // const progressBar = document.querySelector(`${selector} .swiper-scroll__line`);
    // if (progressBar) {
    //     swiper.on('slideChange', function () {
    //         updateProgressBar();
    //     });
    //     updateProgressBar();
    //
    //     function updateProgressBar() {
    //         let activeIndex = swiper.activeIndex;
    //         let widthPerSlide = 100 / swiper.slides.length;
    //         progressBar.style.width = (widthPerSlide * (activeIndex + 1)) + '%';
    //     }
    // }
  }

  swiperRatingFunc('.swiper-rating');

  // marqueeFunc
  function marqueeFunc(selector, repeat, paused, speed) {
    var loop = horizontalLoop("".concat(selector, " .marquee__item"), {
      repeat: repeat,
      paused: paused,
      speed: speed
    });
  }
  marqueeFunc('.marquee--feedback', -1, false, 2);

  // feature1
  function feature1Func() {
    var feature1 = gsap.timeline({
      defaults: {
        duration: .5
      },
      scrollTrigger: {
        trigger: '.section--feature-1',
        toggleActions: 'play none none none',
        start: 'top 50%',
        onRefresh: function onRefresh(self) {
          return self.progress && self.animation.progress(1);
        }
      }
    });
    feature1.to('.m-grid--feature-1 .m-grid__item, .section--feature-1 .section__title', {
      yPercent: -50,
      stagger: .2,
      autoAlpha: 1
    });
  }

  // feature1Func();

  // bannerFunc
  function bannerFuncAll(bannerWrapper) {
    var selectorParent = document.querySelectorAll(bannerWrapper);
    if (selectorParent) {
      selectorParent.forEach(function (selectorParent) {
        // bannerFuncImg
        function bannerFuncImg() {
          var img = selectorParent.querySelector('.banner-pic img');
          var tl = gsap.timeline({
            defaults: {
              duration: 1
            }
          })
          // .to(img, {
          //     filter: 'brightness(1)',
          // }, '>')
          .to(img, {
            filter: 'grayscale(0)'
          }, '>');
        }

        // bannerFuncGrid
        function bannerFuncGrid() {
          var item = selectorParent.querySelectorAll('.m-grid__item');
          item.forEach(function (item) {
            var frame = item.querySelector('.m-grid__frame');
            var dividerH = item.querySelector('.m-grid__divider--h');
            var dividerV = item.querySelector('.m-grid__divider--v');
            var tl = gsap.timeline({
              defaults: {
                duration: 1
              }
            }).add('startGrid').to(dividerH, {
              autoAlpha: 0,
              zIndex: -1
            }, 'startGrid').to(dividerV, {
              autoAlpha: 0,
              zIndex: -1
            }, 'startGrid').to(frame, {
              borderTopWidth: 0,
              borderRightWidth: 0,
              borderBottomWidth: 0,
              borderLeftWidth: 0,
              zIndex: 1
            }, 'startGrid').to(item, {
              boxShadow: "inset 0 0 0 -.0625rem transparent"
            }, 'startGrid');
          });
        }

        // tlTotal
        var tlTotal = gsap.timeline({
          scrollTrigger: {
            trigger: selectorParent,
            toggleActions: 'play none none none',
            start: 'top 20%',
            invalidateOnRefresh: true,
            onRefresh: function onRefresh(self) {
              return self.progress && self.animation.progress(1);
            }
          }
        }).add(bannerFuncImg).add(bannerFuncGrid);
      });
    }
  }
  // bannerFuncAll('.section--banner-1');

  // service1
  function service1Func() {
    var service1 = gsap.timeline({
      defaults: {
        duration: .5,
        stagger: .2,
        autoAlpha: 1
      },
      scrollTrigger: {
        trigger: '.section--service-1',
        toggleActions: 'play none none none',
        start: 'top 50%',
        onRefresh: function onRefresh(self) {
          return self.progress && self.animation.progress(1);
        }
      }
    });
    service1.to('.m-grid--service-1 .m-grid__item, .section--service-1 .section__title, .section--service-1' + ' .section__sub-text', {
      yPercent: -50
    }).to('.m-grid--service-1 .m-grid__item:nth-child(odd) .btn', {
      xPercent: -35
    }, '-=1').to('.m-grid--service-1 .m-grid__item:nth-child(even) .btn', {
      xPercent: 35
    }, '-=1');
  }

  // service1Func()

  // service2

  function service2Func() {
    function service2_1() {
      var tl = gsap.timeline({
        defaults: {
          duration: 2,
          stagger: .2
        }
      });
      tl.add('start').to('.m-grid--service-2 .m-grid__item:nth-child(odd) .card-wrap-service-2', {
        yPercent: 130
      }, 'start').to('.m-grid--service-2 .m-grid__item:nth-child(even) .card-wrap-service-2', {
        yPercent: -130
      }, 'start').to('.section--service-2 .section__intro--1', {
        autoAlpha: 0
      }, 'start').to('.section--service-2 .section__control, .section--service-2 .section__bg', {
        autoAlpha: 0
      }, 'start');
      return tl;
    }
    function service2_2() {
      var tl = gsap.timeline({
        defaults: {
          duration: 2,
          stagger: .2
        }
      });
      tl.add('start').to('.m-grid--service-2 .m-grid__item:nth-child(odd) .card--service-2', {
        yPercent: 300
      }, 'start').to('.m-grid--service-2 .m-grid__item:nth-child(even) .card--service-2', {
        yPercent: -300
      }, 'start').to('.section--service-2 .section__intro--2, .section--service-2 .pattern', {
        autoAlpha: 1
      }, 'start');
      return tl;
    }
    function service2_3() {
      // platform
      var tl = gsap.timeline({
        defaults: {
          duration: 2
        }
      });
      tl.add('start').to('.section--platform .section__intro', {
        xPercent: -196.5
      }, 'start').to('.m-grid--platform .m-grid__item', {
        xPercent: -220,
        stagger: .2
      }, 'start').to('.section__intro-inner, .section--service-2 .pattern .pattern__item', {
        autoAlpha: 0
      });
      return tl;
    }
    var master = gsap.timeline({
      scrollTrigger: {
        trigger: '.section--service-2',
        start: 'top',
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        onRefresh: function onRefresh(self) {
          return self.progress && self.animation.progress(1);
        }
      }
    }).add(service2_1()).add(service2_2()).add(service2_3());
  }

  // feature2
  function feature2Func() {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section--feature-2',
        toggleActions: 'play none none none',
        start: 'top 50%',
        onRefresh: function onRefresh(self) {
          return self.progress && self.animation.progress(1);
        }
      }
    });
    tl.add('start1').to('.section--feature-2 .section__intro, .section--feature-2 .section__control', {
      duration: 3,
      autoAlpha: 1
    }, 'start1').to('.section--feature-2 .grid--feature-2-d', {
      duration: 1,
      scale: 1,
      xPercent: -94.5,
      yPercent: -60.2
    }, 'start1');
  }

  // feature2Func();

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
    // desktop functions
    feature1Func();
    service1Func();
    service2Func();
    feature2Func();
    partnerFunc('.section--partner');
    partnerShowFunc('.section--partner');
    bannerFuncAll('.section--banner-1');
    bannerFuncAll('.section--banner-2');
  });
  mm.add('(max-width: 991.98px)', function () {
    // mobile functions
  });

  // sticky Hero
  if (true) {
    gsap.utils.toArray('.section--hero-1').forEach(function (panel, i) {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: false
      });
    });
  }

  // heroReversFunc
  function heroReversFunc() {
    var hero = gsap.timeline({
      defaults: {
        duration: .5
      },
      scrollTrigger: {
        trigger: '.section--about',
        start: 'top 99%',
        scrub: true,
        onRefresh: function onRefresh(self) {
          return self.progress && self.animation.progress(1);
        }
      }
    });
    hero.add('hero1').to('.section--hero-1 .section-title > div', {
      yPercent: -100,
      stagger: .1,
      autoAlpha: 0
    }).to('.section--hero-1 .section-title-small span', {
      autoAlpha: 0
    }, 'hero1').to('.section--hero-1 .scroll-btn--hero', {
      autoAlpha: 0
    }, 'hero1').to('.section--hero-1 .btn--hero', {
      xPercent: -200
    }, 'hero1').to('.section--hero-1 .pattern img', {
      autoAlpha: 0
    }, 'hero1');
  }
  heroReversFunc();

  // DOMContentLoaded //
});
// DOMContentLoaded //
/******/ })()
;
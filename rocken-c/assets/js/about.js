/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/scripts/about.js ***!
  \******************************/
window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  function heroContentFunc() {
    var tl = gsap.timeline({
      defaults: {
        duration: .5
      },
      scrollTrigger: {
        trigger: '.about-hero',
        toggleActions: 'play none none none',
        start: 'top 100%',
        onRefresh: function onRefresh(self) {
          return self.progress && self.animation.progress(1);
        }
      }
    });
    tl.to('.about-hero .section-title-small', {
      duration: 1,
      autoAlpha: 1
    }).to('.about-hero .img--block__wrapper', {
      duration: 1,
      autoAlpha: 1
    }, "-=.5");
  }
  setTimeout(function () {
    heroContentFunc();
  }, 5000);
  function marqueeFunc(selector, repeat, paused, speed) {
    var loop = horizontalLoop("".concat(selector, " .marquee__item"), {
      repeat: repeat,
      paused: paused,
      speed: speed
    });
  }
  marqueeFunc('.marquee--ticker', -1, false, 1);
  var valueThat = document.querySelector(".value-that");
  if (valueThat) {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.value-that',
        toggleActions: 'play none none none',
        start: 'top 20%',
        onRefresh: function onRefresh(self) {
          return self.progress && self.animation.progress(1);
        }
      }
    });
    tl.from('.value-that__media', {
      duration: 1,
      yPercent: 200
    });
    tl.to('.value-that .section__title', {
      duration: .5,
      opacity: 1
    });
  }
  var tabLinks = document.querySelectorAll('.tabs a');
  if (tabLinks) {
    tabLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        var target = link.dataset.target;
        openTab(target);
        var parentLi = link.parentElement;
        var allLi = document.querySelectorAll('.tabs li');
        allLi.forEach(function (li) {
          li.classList.remove('active');
        });
        parentLi.classList.add('active');
      });
    });
  }
  var teamMembers = document.querySelectorAll('.team-member');
  if (teamMembers) {
    var removeActiveClass = function removeActiveClass() {
      teamMembers.forEach(function (member) {
        member.classList.remove('active');
      });
    };
    teamMembers.forEach(function (member) {
      member.addEventListener('click', function (event) {
        event.stopPropagation();
        var isActive = this.classList.contains('active');
        removeActiveClass();
        if (!isActive) {
          this.classList.add('active');
        }
      });
    });
    document.addEventListener('click', function (event) {
      if (!event.target.classList.contains('team-member')) {
        removeActiveClass();
      }
    });
  }
  (function () {
    var $universeSwiper = document.querySelectorAll('.universe-swiper');
    if ($universeSwiper) {
      $universeSwiper.forEach(function ($universeSwiper) {
        new Swiper($universeSwiper, {
          slidesPerView: 2,
          spaceBetween: 0,
          watchOverflow: true,
          loop: true,
          centeredSlides: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            575: {
              slidesPerView: 2,
              spaceBetween: 0
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            991: {
              slidesPerView: 5,
              spaceBetween: 30
            }
          }
        });
      });
    }
  })();

  // DOMContentLoaded //
});
// DOMContentLoaded //
function openTab(tabName) {
  var tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(function (tab) {
    tab.classList.remove('active');
  });
  document.getElementById(tabName).classList.add('active');
}
/******/ })()
;
/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/scripts/article.js ***!
  \********************************/
window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  var breadcrumbLastElement = document.querySelector('.breadcrumb_last');
  if (breadcrumbLastElement) {
    var parentSpan = breadcrumbLastElement.parentNode;
    parentSpan.classList.add('last__link__wrapper');
  }
  function heroContentFunc() {
    var tl = gsap.timeline({
      defaults: {
        duration: .5
      },
      scrollTrigger: {
        trigger: '.article-hero',
        toggleActions: 'play none none none',
        start: 'top 100%',
        onRefresh: function onRefresh(self) {
          return self.progress && self.animation.progress(1);
        }
      }
    });
    tl.to('.article-hero #breadcrumbs', {
      duration: 1,
      autoAlpha: 1
    }).to('.section--hero .article__head', {
      duration: 1,
      autoAlpha: 1
    }, "-=1").to('.section--hero .article-hero__subtitle', {
      duration: 1,
      autoAlpha: 1
    }, "-=1").to('.section--hero .article__author-block', {
      duration: 1,
      autoAlpha: 1
    }, "-=1");
  }

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
  setTimeout(function () {
    heroContentFunc();
  }, 4500);
  var contentEl = document.querySelectorAll('.content p, .content h1, .content h2, .content h3, .content h4, .content h5, .content h6, .content figure, .content ul li, .content table, .content-anchor__title, .content-anchor__list ');
  contentEl.forEach(function (el) {
    el.classList.add('fade-up');
  });

  // CREATE NAV LIST

  var webDesignsDiv = document.querySelector(".content-anchor__list");
  if (webDesignsDiv) {
    var headings = document.querySelectorAll(".content-anchor h3");
    var anchorList = document.createElement("ul");
    var headingCounter = 1;
    headings.forEach(function (heading) {
      var anchor = document.createElement("a");
      anchor.textContent = heading.textContent;
      anchor.setAttribute("data-scroll-to", "heading".concat(headingCounter));
      var listItem = document.createElement("li");
      listItem.appendChild(anchor);
      anchorList.appendChild(listItem);
      heading.id = "heading".concat(headingCounter);
      headingCounter++;
    });
    webDesignsDiv.appendChild(anchorList);
  }

  // Smooth Scroll

  var links = document.querySelectorAll('[data-scroll-to]');
  if (links) {
    links.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        var targetBlockId = link.dataset.scrollTo;
        var targetBlock = document.getElementById(targetBlockId);
        if (targetBlock) {
          var topPosition = targetBlock.getBoundingClientRect().top;
          window.scrollTo({
            top: topPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // marqueeFunc
  function marqueeFunc(selector, repeat, paused, speed) {
    var loop = horizontalLoop("".concat(selector, " .marquee__item"), {
      repeat: repeat,
      paused: paused,
      speed: speed
    });
  }
  marqueeFunc('.marquee--feedback', -1, false, 2);

  // DOMContentLoaded //
});
// DOMContentLoaded //
/******/ })()
;
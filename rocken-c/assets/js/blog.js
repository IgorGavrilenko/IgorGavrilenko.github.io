/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ui-library/components/modal/modal.js":
/*!**********************************************!*\
  !*** ./ui-library/components/modal/modal.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* binding */ Modal)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Provide selector for trigger elements.
 * You can trigger modal from several elements with a class selector, for example.
 * Takes transition-duration from provided selector css for overlay removal timeout.
 * */

var Modal = /*#__PURE__*/function () {
  function Modal(el, trigger) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, Modal);
    _defineProperty(this, "closeBtn", '[data-close]');
    if (!el) {
      throw new Error('Element selector not defined');
    }
    if (!trigger) {
      throw new Error('Trigger selector not defined');
    }
    var onOpen = options.onOpen,
      onClose = options.onClose,
      onInit = options.onInit,
      onDestroy = options.onDestroy;
    this.el = el;
    this.trigger = trigger;
    this.onOpen = onOpen;
    this.onClose = onClose;
    this.onInit = onInit;
    this.onDestroy = onDestroy;
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.init();
  }
  _createClass(Modal, [{
    key: "init",
    value: function init() {
      var _this = this,
        _this$$closeBtn,
        _this$onInit;
      this.$el = document.querySelector(this.el);
      if (!this.$el) return;
      this.createOverlay();
      this.delay = parseFloat(getComputedStyle(this.$el).transitionDuration.split(',')[0]);
      this.$triggers = document.querySelectorAll(this.trigger);
      this.$triggers.forEach(function ($trigger) {
        $trigger.addEventListener('click', function (ev) {
          ev.preventDefault();
          _this.open();
        });
      });
      this.$closeBtn = this.$el.querySelector(this.closeBtn);
      (_this$$closeBtn = this.$closeBtn) === null || _this$$closeBtn === void 0 || _this$$closeBtn.addEventListener('click', this.close);
      (_this$onInit = this.onInit) === null || _this$onInit === void 0 || _this$onInit.call(this, this);
    }
  }, {
    key: "open",
    value: function open() {
      var _this$onOpen;
      this.$el.classList.add('active');
      document.body.append(this.$overlay);
      (_this$onOpen = this.onOpen) === null || _this$onOpen === void 0 || _this$onOpen.call(this, this, this.$el);
    }
  }, {
    key: "close",
    value: function close() {
      var _this2 = this;
      this.$el.classList.remove('active');
      this.$overlay.dataset['fadingOut'] = 'true';
      setTimeout(function () {
        var _this2$onClose;
        _this2.$overlay.remove();
        delete _this2.$overlay.dataset['fadingOut'];
        (_this2$onClose = _this2.onClose) === null || _this2$onClose === void 0 || _this2$onClose.call(_this2, _this2, _this2.$el);
      }, this.delay * 1000);
    }
  }, {
    key: "createOverlay",
    value: function createOverlay() {
      var _this3 = this;
      this.$overlay = document.createElement('div');
      this.$overlay.dataset['modalOverlay'] = '';
      this.$overlay.addEventListener('click', function () {
        _this3.close();
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this$onDestroy;
      this.close();
      this.$triggers.forEach(function ($trigger) {
        $trigger.parentNode.replaceChild($trigger.cloneNode(true), $trigger);
      });
      (_this$onDestroy = this.onDestroy) === null || _this$onDestroy === void 0 || _this$onDestroy.call(this, this);
    }
  }]);
  return Modal;
}();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/scripts/blog.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_library_components_modal_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui-library/components/modal/modal */ "./ui-library/components/modal/modal.js");

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
        trigger: '.blog-hero',
        toggleActions: 'play none none none',
        start: 'top 100%',
        onRefresh: function onRefresh(self) {
          return self.progress && self.animation.progress(1);
        }
      }
    });
    tl.to('.blog-hero #breadcrumbs', {
      duration: 1,
      autoAlpha: 1
    }).to('.blog-hero .hor__card', {
      duration: 1,
      autoAlpha: 1
    }, "-=.5");
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

  // DOMContentLoaded //
});
// DOMContentLoaded //
})();

/******/ })()
;
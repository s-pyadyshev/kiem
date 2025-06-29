/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/accordion.js":
/*!****************************************!*\
  !*** ./src/js/components/accordion.js ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   accordion: function() { return /* binding */ accordion; }\n/* harmony export */ });\nconst accordion = (() => {\n  const init = () => {\n    const accordionToggles = document.querySelectorAll('.accordion__toggle');\n    if (!accordionToggles.length) return;\n    accordionToggles.forEach(toggle => {\n      toggle.addEventListener('click', () => {\n        const currentAccordion = toggle.closest('.accordion-vertical');\n        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';\n        const accordionList = toggle.closest('.accordions');\n        if (accordionList) {\n          const allToggles = accordionList.querySelectorAll('.accordion__toggle');\n          const allAccordions = accordionList.querySelectorAll('.accordion-vertical');\n          allToggles.forEach(t => t.setAttribute('aria-expanded', 'false'));\n          allAccordions.forEach(acc => acc.classList.remove('is-open'));\n        }\n        toggle.setAttribute('aria-expanded', !isExpanded);\n        if (isExpanded) {\n          currentAccordion.classList.remove('is-open');\n        } else {\n          currentAccordion.classList.add('is-open');\n        }\n      });\n    });\n  };\n  return {\n    init\n  };\n})();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/accordion.js?");

/***/ }),

/***/ "./src/js/components/accordionVertical.js":
/*!************************************************!*\
  !*** ./src/js/components/accordionVertical.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   accordionVertical: function() { return /* binding */ accordionVertical; }\n/* harmony export */ });\nconst accordionVertical = (() => {\n  const init = () => {\n    const accordionLists = document.querySelectorAll('.accordion-list');\n    accordionLists.forEach(accordionList => {\n      const accordions = Array.from(accordionList.querySelectorAll('.accordion'));\n      accordions.forEach(acc => {\n        const isOpen = acc.hasAttribute('open');\n        acc.setAttribute('data-open', isOpen);\n      });\n      accordionList.addEventListener('click', e => {\n        const summary = e.target.closest('.accordion__summary');\n        if (!summary) return;\n        e.preventDefault();\n        e.stopPropagation();\n        const currentAccordion = summary.parentElement;\n        const isOpen = currentAccordion.getAttribute('data-open') === 'true';\n        const currentIndex = accordions.indexOf(currentAccordion);\n        accordions.forEach(acc => {\n          acc.removeAttribute('open');\n          acc.setAttribute('data-open', 'false');\n        });\n        if (isOpen) {\n          if (currentIndex === accordions.length - 1) {\n            if (currentIndex > 0) {\n              accordions[currentIndex - 1].setAttribute('open', '');\n              accordions[currentIndex - 1].setAttribute('data-open', 'true');\n            }\n          } else {\n            accordions[currentIndex + 1].setAttribute('open', '');\n            accordions[currentIndex + 1].setAttribute('data-open', 'true');\n          }\n        } else {\n          currentAccordion.setAttribute('open', '');\n          currentAccordion.setAttribute('data-open', 'true');\n        }\n      });\n    });\n  };\n  return {\n    init\n  };\n})();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/accordionVertical.js?");

/***/ }),

/***/ "./src/js/components/mobile-menu.js":
/*!******************************************!*\
  !*** ./src/js/components/mobile-menu.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mobileMenu: function() { return /* binding */ mobileMenu; }\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers.js */ \"./src/js/helpers.js\");\n\nconst mobileMenu = (() => {\n  const init = () => {\n    const mobileMenuToggle = document.querySelector(\".js-toggle-menu\");\n    if (!mobileMenuToggle) {\n      return;\n    }\n    const menu = document.querySelector(\".menu\");\n    const body = document.querySelector(\"body\");\n    const openMenu = () => {\n      mobileMenuToggle.classList.add(\"active\");\n      body.classList.toggle(\"menu-active\");\n      menu.classList.add(\"menu--open\");\n    };\n    const closeMenu = () => {\n      mobileMenuToggle.classList.remove(\"active\");\n      body.classList.toggle(\"menu-active\");\n      menu.classList.remove(\"menu--open\");\n    };\n    mobileMenuToggle.addEventListener(\"click\", function () {\n      if (!mobileMenuToggle.classList.contains(\"active\")) {\n        openMenu();\n      } else {\n        closeMenu();\n      }\n    });\n    const handleResize = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.throttle)(() => {\n      if (window.matchMedia(\"(min-width: 1025px)\").matches && document.body.classList.contains(\"menu-active\")) {\n        closeMenu();\n      }\n    }, 200);\n    window.addEventListener(\"resize\", handleResize);\n  };\n  return {\n    init\n  };\n})();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/mobile-menu.js?");

/***/ }),

/***/ "./src/js/components/tabs.js":
/*!***********************************!*\
  !*** ./src/js/components/tabs.js ***!
  \***********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   tabs: function() { return /* binding */ tabs; }\n/* harmony export */ });\nconst tabs = (() => {\n  const init = () => {\n    const tabButtons = document.querySelectorAll('.tabs.hidden-desktop .tab-button');\n    const tabItemsLaptop = document.querySelectorAll('.tab-content-laptop .tab-content__item');\n    tabButtons.forEach((btn, index) => {\n      btn.addEventListener('click', () => {\n        tabButtons.forEach(b => b.setAttribute('aria-expanded', 'false'));\n        btn.setAttribute('aria-expanded', 'true');\n        tabItemsLaptop.forEach((tab, i) => {\n          if (i === index) {\n            tab.setAttribute('aria-expanded', 'true');\n          } else {\n            tab.setAttribute('aria-expanded', 'false');\n          }\n        });\n      });\n    });\n    if (tabButtons.length) {\n      tabButtons[0].click();\n    }\n  };\n  return {\n    init\n  };\n})();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/tabs.js?");

/***/ }),

/***/ "./src/js/growth-tabs-mobile.js":
/*!**************************************!*\
  !*** ./src/js/growth-tabs-mobile.js ***!
  \**************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   growthTabsMobile: function() { return /* binding */ growthTabsMobile; }\n/* harmony export */ });\nconst growthTabsMobile = (() => {\n  const init = () => {\n    const tabBlock = document.querySelector('.section-growth__tabs-mobile');\n    if (!tabBlock) return;\n    const toggles = tabBlock.querySelectorAll('.growth-toggle__item');\n    const contents = tabBlock.querySelectorAll('.growth-tabs__text');\n    if (!toggles.length || !contents.length) return;\n    const reset = () => {\n      toggles.forEach(toggle => toggle.classList.remove('is-active'));\n      contents.forEach(content => content.classList.remove('is-open'));\n    };\n    toggles.forEach((toggle, index) => {\n      toggle.addEventListener('click', () => {\n        reset();\n        toggle.classList.add('is-active');\n        if (contents[index]) contents[index].classList.add('is-open');\n      });\n    });\n    toggles[0].classList.add('is-active');\n    contents[0].classList.add('is-open');\n  };\n  return {\n    init\n  };\n})();\n\n//# sourceURL=webpack://ninelines-template/./src/js/growth-tabs-mobile.js?");

/***/ }),

/***/ "./src/js/growth-tabs.js":
/*!*******************************!*\
  !*** ./src/js/growth-tabs.js ***!
  \*******************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   growthTabs: function() { return /* binding */ growthTabs; }\n/* harmony export */ });\nconst growthTabs = (() => {\n  const init = () => {\n    const tabContainers = document.querySelectorAll('.growth__tabs');\n    if (!tabContainers.length) return;\n    tabContainers.forEach(container => {\n      const navItems = container.querySelectorAll('.growth__nav-item');\n      const contentItems = container.querySelectorAll('.growth__content-item');\n      const navArrows = container.querySelectorAll('.growth__nav-arrow');\n      const contentArrows = container.querySelectorAll('.growth__content-arrow');\n      let isOpen = false;\n      let activeIndex = null;\n      if (!navItems.length || !contentItems.length) return;\n      const deactivateAll = () => {\n        navItems.forEach(item => item.classList.remove('is-active'));\n        contentItems.forEach(item => item.classList.remove('is-visible'));\n      };\n      const activateTab = index => {\n        deactivateAll();\n        navItems[index]?.classList.add('is-active');\n        contentItems[index]?.classList.add('is-visible');\n        container.classList.add('is-active');\n        activeIndex = index;\n      };\n      const closeTab = () => {\n        deactivateAll();\n        container.classList.remove('is-active');\n        isOpen = false;\n        activeIndex = null;\n      };\n      const openTab = index => {\n        activateTab(index);\n        isOpen = true;\n      };\n      const handleResize = () => {\n        const isMobile = window.innerWidth < 1200;\n        deactivateAll();\n        container.classList.remove('is-active');\n        isOpen = false;\n        activeIndex = null;\n        if (isMobile) {\n          activateTab(0);\n        }\n      };\n      const setupListeners = () => {\n        navItems.forEach((navItem, index) => {\n          const navArrow = navItem.querySelector('.growth__nav-arrow');\n          navArrow?.addEventListener('click', e => {\n            if (window.innerWidth >= 1200) {\n              e.stopPropagation();\n              openTab(index);\n            }\n          });\n          navItem.addEventListener('click', () => {\n            if (window.innerWidth < 1200) {\n              activateTab(index);\n            } else if (isOpen) {\n              activateTab(index);\n            }\n          });\n        });\n        contentArrows.forEach(arrow => {\n          arrow.addEventListener('click', () => {\n            if (window.innerWidth >= 1200) {\n              closeTab();\n            }\n          });\n        });\n      };\n      setupListeners();\n      handleResize();\n      window.addEventListener('resize', handleResize);\n    });\n  };\n  return {\n    init\n  };\n})();\n\n//# sourceURL=webpack://ninelines-template/./src/js/growth-tabs.js?");

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   debounce: function() { return /* binding */ debounce; },\n/* harmony export */   isElementCompletelyInViewport: function() { return /* binding */ isElementCompletelyInViewport; },\n/* harmony export */   isElementInViewport: function() { return /* binding */ isElementInViewport; },\n/* harmony export */   throttle: function() { return /* binding */ throttle; }\n/* harmony export */ });\nfunction debounce(func, wait) {\n  let timeout;\n  return function () {\n    if (timeout) {\n      clearTimeout(timeout);\n    }\n    timeout = setTimeout(() => {\n      func.apply(this, arguments);\n    }, wait);\n  };\n}\n\n// const onType = debounce(() => {\n//   // send request\n// }, 500);\n\n// const searchField = document.querySelector(\"#searchField\");\n\n// searchField.addEventListener(\"keydown\", onType);\n\nfunction throttle(func, wait) {\n  let waiting = false;\n  return function () {\n    if (waiting) {\n      return;\n    }\n    waiting = true;\n    setTimeout(() => {\n      func.apply(this, arguments);\n      waiting = false;\n    }, wait);\n  };\n}\n\n// Usage\n// const onScroll = throttle(() => {}, 100);\n\n// document.addEventListener(\"scroll\", onScroll);\n\nfunction isElementInViewport(element) {\n  const rect = element.getBoundingClientRect();\n  const windowHeight = window.innerHeight || document.documentElement.clientHeight;\n  const windowWidth = window.innerWidth || document.documentElement.clientWidth;\n  const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;\n  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;\n  return vertInView && horInView;\n}\nfunction isElementCompletelyInViewport(element) {\n  const rect = element.getBoundingClientRect();\n  const html = document.documentElement;\n  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || html.clientHeight) && rect.right <= (window.innerWidth || html.clientWidth);\n}\n\n//# sourceURL=webpack://ninelines-template/./src/js/helpers.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/accordion.js */ \"./src/js/components/accordion.js\");\n/* harmony import */ var _components_accordionVertical_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/accordionVertical.js */ \"./src/js/components/accordionVertical.js\");\n/* harmony import */ var _components_mobile_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mobile-menu.js */ \"./src/js/components/mobile-menu.js\");\n/* harmony import */ var _components_tabs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tabs.js */ \"./src/js/components/tabs.js\");\n/* harmony import */ var _growth_tabs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./growth-tabs.js */ \"./src/js/growth-tabs.js\");\n/* harmony import */ var _team_tabs_mobile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team-tabs-mobile.js */ \"./src/js/team-tabs-mobile.js\");\n/* harmony import */ var _growth_tabs_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./growth-tabs-mobile.js */ \"./src/js/growth-tabs-mobile.js\");\n\n\n\n\n\n\n\nwindow.addEventListener('load', () => {\n  _components_mobile_menu_js__WEBPACK_IMPORTED_MODULE_2__.mobileMenu.init();\n  _components_tabs_js__WEBPACK_IMPORTED_MODULE_3__.tabs.init();\n  _components_accordion_js__WEBPACK_IMPORTED_MODULE_0__.accordion.init();\n  _components_accordionVertical_js__WEBPACK_IMPORTED_MODULE_1__.accordionVertical.init();\n  _growth_tabs_js__WEBPACK_IMPORTED_MODULE_4__.growthTabs.init();\n  _team_tabs_mobile_js__WEBPACK_IMPORTED_MODULE_5__.teamTabsMobile.init();\n  _growth_tabs_mobile_js__WEBPACK_IMPORTED_MODULE_6__.growthTabsMobile.init();\n  document.querySelector('body').classList.add('page-loaded');\n}, false);\n\n//# sourceURL=webpack://ninelines-template/./src/js/main.js?");

/***/ }),

/***/ "./src/js/team-tabs-mobile.js":
/*!************************************!*\
  !*** ./src/js/team-tabs-mobile.js ***!
  \************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   teamTabsMobile: function() { return /* binding */ teamTabsMobile; }\n/* harmony export */ });\nconst teamTabsMobile = (() => {\n  const init = () => {\n    const tabBlocks = document.querySelectorAll('.tabs-team');\n    tabBlocks.forEach(tabBlock => {\n      const buttons = tabBlock.querySelectorAll('.tabs__toggle-img');\n      const contents = tabBlock.querySelectorAll('.tab-content__text');\n      const names = tabBlock.querySelectorAll('.tabs__team-name');\n      buttons.forEach((btn, index) => {\n        btn.addEventListener('click', () => {\n          buttons.forEach(b => b.setAttribute('aria-expanded', 'false'));\n          names.forEach(n => n.classList.remove('active'));\n          contents.forEach((c, i) => {\n            c.setAttribute('aria-expanded', 'false');\n          });\n          btn.setAttribute('aria-expanded', 'true');\n          names[index].classList.add('active');\n          contents[index].setAttribute('aria-expanded', 'true');\n        });\n      });\n      if (buttons.length) {\n        buttons[0].click();\n      }\n    });\n  };\n  return {\n    init\n  };\n})();\n\n//# sourceURL=webpack://ninelines-template/./src/js/team-tabs-mobile.js?");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;
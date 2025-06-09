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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   accordion: function() { return /* binding */ accordion; }\n/* harmony export */ });\nconst accordion = (() => {\n  const init = () => {\n    // accordion\n    const toggles = document.querySelectorAll('[data-accordion]');\n    toggles.forEach(toggle => {\n      toggle.addEventListener('click', () => {\n        const currentAccordion = toggle.closest('.accordion-vertical');\n        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';\n        toggles.forEach(t => {\n          t.setAttribute('aria-expanded', 'false');\n          const acc = t.closest('.accordion-vertical');\n          acc?.classList.remove('is-open');\n        });\n        if (!isExpanded) {\n          toggle.setAttribute('aria-expanded', 'true');\n          currentAccordion?.classList.add('is-open');\n        }\n      });\n    });\n    if (toggles.length) {\n      toggles[0].setAttribute('aria-expanded', 'true');\n      const acc = toggles[0].closest('.accordion-vertical');\n      acc?.classList.add('is-open');\n    }\n\n    // accordion-native\n    const accordions = document.querySelectorAll('.accordion');\n    if (!accordions.length) return;\n    accordions.forEach(accordion => {\n      const summary = accordion.querySelector('summary');\n      summary.addEventListener('click', e => {\n        e.preventDefault();\n        const isOpen = accordion.hasAttribute('open');\n        if (!isOpen) {\n          accordions.forEach(item => item.removeAttribute('open'));\n          accordion.setAttribute('open', '');\n        }\n      });\n    });\n  };\n  return {\n    init\n  };\n})();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/accordion.js?");

/***/ }),

/***/ "./src/js/components/mobile-menu.js":
/*!******************************************!*\
  !*** ./src/js/components/mobile-menu.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mobileMenu: function() { return /* binding */ mobileMenu; }\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers.js */ \"./src/js/helpers.js\");\n\nconst mobileMenu = (() => {\n  const init = () => {\n    const mobileMenuToggle = document.querySelector(\".js-toggle-menu\");\n    if (!mobileMenuToggle) {\n      return;\n    }\n    const menu = document.querySelector(\".menu\");\n    const body = document.querySelector(\"body\");\n    // const menuItemContact = document.querySelector(\".menu__item-contact\");\n\n    const openMenu = () => {\n      mobileMenuToggle.classList.add(\"active\");\n      body.classList.toggle(\"menu-active\");\n      menu.classList.add(\"menu--open\");\n    };\n    const closeMenu = () => {\n      mobileMenuToggle.classList.remove(\"active\");\n      body.classList.toggle(\"menu-active\");\n      menu.classList.remove(\"menu--open\");\n    };\n    mobileMenuToggle.addEventListener(\"click\", function () {\n      if (!mobileMenuToggle.classList.contains(\"active\")) {\n        openMenu();\n      } else {\n        closeMenu();\n      }\n    });\n\n    // menuItemContact.addEventListener(\"click\", () => {\n    //   closeMenu();\n    // });\n\n    // const handleResize = throttle(() => {\n    //   if (\n    //     window.matchMedia(\"(min-width: 1200px)\").matches &&\n    //     document.body.classList.contains(\"menu-active\")\n    //   ) {\n    //     closeMenu();\n    //   }\n    // }, 200);\n\n    // window.addEventListener(\"resize\", handleResize);\n  };\n  return {\n    init\n  };\n})();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/mobile-menu.js?");

/***/ }),

/***/ "./src/js/components/tabs.js":
/*!***********************************!*\
  !*** ./src/js/components/tabs.js ***!
  \***********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   tabs: function() { return /* binding */ tabs; }\n/* harmony export */ });\n// export const tabs = (() => {\n//   const init = () => {\n//     const tabContainers = document.querySelectorAll(\"[data-tabs]\");\n\n//     if (!tabContainers.length) {\n//       return;\n//     }\n\n//     const dataTabsContent = document.querySelectorAll(\n//       `[data-tabs-content] > [data-tab-content]`\n//     );\n\n//     dataTabsContent.forEach((item) => {\n//       if (!item.classList.contains(\"is-active\")) {\n//         item.classList.add(\"visually-hidden\");\n//       }\n//     });\n\n//     tabContainers.forEach((tabContainer) => {\n//       const currentTab = tabContainer.getAttribute(\"data-tabs\");\n\n//       tabContainer.addEventListener(\"click\", (event) => {\n//         const target = event.target;\n\n//         if (!target.hasAttribute(\"data-tab\")) {\n//           return;\n//         }\n\n//         const tabButton = target;\n//         const tabId = tabButton.getAttribute(\"data-tab\");\n//         const matchingTabDataAll = document.querySelectorAll(\n//           `[data-tabs-content=\"${currentTab}\"] > [data-tab-content]`\n//         );\n//         const matchingTabData = document.querySelector(\n//           `[data-tabs-content=\"${currentTab}\"] > [data-tab-content=\"${tabId}\"]`\n//         );\n\n//         const activeTabContent = document.querySelector(\n//           `[data-tabs-content=\"${currentTab}\"] > [data-tab-content].is-active`\n//         );\n\n//         const activeTabButton = document.querySelector(\n//           `[data-tabs=${currentTab}] > button.is-active`\n//         );\n\n//         const tabButtonAll = document.querySelectorAll(\n//           `[data-tabs=${currentTab}] > button`\n//         );\n\n//         matchingTabDataAll.forEach((item) => {\n//           item.classList.add(\"visually-hidden\");\n//           item.classList.remove(\"is-active\");\n//         });\n//         activeTabContent.classList.remove(\"is-active\");\n//         activeTabButton.classList.remove(\"is-active\");\n\n//         tabButtonAll.forEach((item) => item.classList.remove(\"is-active\"));\n//         matchingTabData.classList.add(\"is-active\");\n//         matchingTabData.classList.remove(\"visually-hidden\");\n//         tabButton.classList.add(\"is-active\");\n//       });\n//     });\n//   };\n\n//   return {\n//     init,\n//   };\n// })();\n\nconst tabs = (() => {\n  const init = () => {\n    const tabButtons = document.querySelectorAll('.tabs.hidden-desktop .tab-button');\n    const tabItemsLaptop = document.querySelectorAll('.tab-content-laptop .tab-content__item');\n    tabButtons.forEach((btn, index) => {\n      btn.addEventListener('click', () => {\n        tabButtons.forEach(b => b.setAttribute('aria-expanded', 'false'));\n        btn.setAttribute('aria-expanded', 'true');\n        tabItemsLaptop.forEach((tab, i) => {\n          if (i === index) {\n            tab.setAttribute('aria-expanded', 'true');\n          } else {\n            tab.setAttribute('aria-expanded', 'false');\n          }\n        });\n      });\n    });\n    if (tabButtons.length) {\n      tabButtons[0].click();\n    }\n  };\n  return {\n    init\n  };\n})();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/tabs.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   growthTabs: function() { return /* binding */ growthTabs; }\n/* harmony export */ });\nconst growthTabs = (() => {\n  const init = () => {\n    const items = document.querySelectorAll('.growth-tabs__item');\n    if (!items.length) return;\n    const closeAll = () => {\n      items.forEach(item => item.classList.remove('is-open'));\n    };\n    const isAnyOpen = () => {\n      return [...items].some(item => item.classList.contains('is-open'));\n    };\n    document.querySelectorAll('.growth-tabs__arrow-open').forEach(arrow => {\n      arrow.addEventListener('click', e => {\n        e.stopPropagation();\n        closeAll();\n      });\n    });\n    document.querySelectorAll('.growth-tabs__arrow-close').forEach(arrow => {\n      arrow.addEventListener('click', e => {\n        e.stopPropagation();\n        if (!isAnyOpen()) {\n          const item = arrow.closest('.growth-tabs__item');\n          item?.classList.add('is-open');\n        }\n      });\n    });\n    document.querySelectorAll('.growth-tabs__item-close').forEach(closeBlock => {\n      closeBlock.addEventListener('click', e => {\n        const item = closeBlock.closest('.growth-tabs__item');\n        if (item.classList.contains('is-open')) {\n          return;\n        }\n        if (isAnyOpen()) {\n          closeAll();\n          item.classList.add('is-open');\n        }\n      });\n    });\n  };\n  return {\n    init\n  };\n})();\n\n//# sourceURL=webpack://ninelines-template/./src/js/growth-tabs.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/accordion.js */ \"./src/js/components/accordion.js\");\n/* harmony import */ var _components_mobile_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mobile-menu.js */ \"./src/js/components/mobile-menu.js\");\n/* harmony import */ var _components_tabs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tabs.js */ \"./src/js/components/tabs.js\");\n/* harmony import */ var _growth_tabs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./growth-tabs.js */ \"./src/js/growth-tabs.js\");\n/* harmony import */ var _team_tabs_mobile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team-tabs-mobile.js */ \"./src/js/team-tabs-mobile.js\");\n/* harmony import */ var _growth_tabs_mobile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./growth-tabs-mobile.js */ \"./src/js/growth-tabs-mobile.js\");\n\n\n\n\n\n\nwindow.addEventListener('load', () => {\n  _components_mobile_menu_js__WEBPACK_IMPORTED_MODULE_1__.mobileMenu.init();\n  _components_tabs_js__WEBPACK_IMPORTED_MODULE_2__.tabs.init();\n  _components_accordion_js__WEBPACK_IMPORTED_MODULE_0__.accordion.init();\n  _growth_tabs_js__WEBPACK_IMPORTED_MODULE_3__.growthTabs.init();\n  _team_tabs_mobile_js__WEBPACK_IMPORTED_MODULE_4__.teamTabsMobile.init();\n  _growth_tabs_mobile_js__WEBPACK_IMPORTED_MODULE_5__.growthTabsMobile.init();\n  document.querySelector('body').classList.add('page-loaded');\n}, false);\n\n//# sourceURL=webpack://ninelines-template/./src/js/main.js?");

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
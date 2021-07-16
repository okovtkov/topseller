/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/header/header.scss":
/*!***************************************!*\
  !*** ./components/header/header.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./components/header/header.scss?");

/***/ }),

/***/ "./components/navigation/navigation.scss":
/*!***********************************************!*\
  !*** ./components/navigation/navigation.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./components/navigation/navigation.scss?");

/***/ }),

/***/ "./components/navigation/navigation.js":
/*!*********************************************!*\
  !*** ./components/navigation/navigation.js ***!
  \*********************************************/
/***/ (() => {

eval("\n\nclass Menu {\n    constructor() {\n        this.burger = document.querySelector('.header__burger');\n        this.navigation = document.querySelector('.navigation');\n        this.closeButton = document.querySelector('.navigation__close');\n\n        this.burger.addEventListener('click', () => this.open());\n        this.closeButton.addEventListener('click', () => this.close());\n        document.addEventListener('click', (event) => {\n            if (!event.target.closest('.navigation') && event.target !== this.burger) \n                this.close();\n        });\n    }\n\n    close() {\n        this.navigation.classList.remove('navigation_open');\n    }\n\n    open() {\n        this.navigation.classList.add('navigation_open');\n    }\n}\n\nnew Menu();\n\n//# sourceURL=webpack:///./components/navigation/navigation.js?");

/***/ }),

/***/ "./javascript/main.js":
/*!****************************!*\
  !*** ./javascript/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header_header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header/header.scss */ \"./components/header/header.scss\");\n/* harmony import */ var _components_navigation_navigation_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navigation/navigation.scss */ \"./components/navigation/navigation.scss\");\n/* harmony import */ var _components_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navigation/navigation.js */ \"./components/navigation/navigation.js\");\n/* harmony import */ var _components_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack:///./javascript/main.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./javascript/main.js");
/******/ 	
/******/ })()
;
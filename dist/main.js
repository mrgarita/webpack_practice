/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/my.css":
/*!****************************!*\
  !*** ./src/modules/my.css ***!
  \****************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nTypeError: The 'compilation' argument must be an instance of Compilation\\n    at getCompilationHooks (C:\\\\Users\\\\mrgarita\\\\dev\\\\udemy\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\javascript\\\\JavascriptModulesPlugin.js:119:10)\\n    at C:\\\\Users\\\\mrgarita\\\\dev\\\\udemy\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\javascript\\\\CommonJsChunkFormatPlugin.js:30:19\\n    at Hook.eval [as call] (eval at create (C:\\\\Users\\\\mrgarita\\\\Dev\\\\Udemy\\\\Webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:19:10), <anonymous>:7:1)\\n    at Hook.CALL_DELEGATE [as _call] (C:\\\\Users\\\\mrgarita\\\\Dev\\\\Udemy\\\\Webpack\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:14:14)\\n    at Compiler.newCompilation (C:\\\\Users\\\\mrgarita\\\\Dev\\\\Udemy\\\\Webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:990:30)\\n    at C:\\\\Users\\\\mrgarita\\\\Dev\\\\Udemy\\\\Webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:1033:29\\n    at Hook.eval [as callAsync] (eval at create (C:\\\\Users\\\\mrgarita\\\\Dev\\\\Udemy\\\\Webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (C:\\\\Users\\\\mrgarita\\\\Dev\\\\Udemy\\\\Webpack\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:18:14)\\n    at Compiler.compile (C:\\\\Users\\\\mrgarita\\\\Dev\\\\Udemy\\\\Webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:1028:28)\\n    at Compiler.runAsChild (C:\\\\Users\\\\mrgarita\\\\Dev\\\\Udemy\\\\Webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:495:8)\");\n\n//# sourceURL=webpack://webpack-practice/./src/modules/my.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_my_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/my.js */ \"./src/modules/my.js\");\n/* harmony import */ var _modules_my_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/my.css */ \"./src/modules/my.css\");\n/* harmony import */ var _modules_my_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_my_css__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconsole.log(\"Webpack!\");\r\n\r\n(0,_modules_my_js__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\n\n//# sourceURL=webpack://webpack-practice/./src/index.js?");

/***/ }),

/***/ "./src/modules/my.js":
/*!***************************!*\
  !*** ./src/modules/my.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n\tconsole.log(\"This is module!\");\r\n});\r\n\n\n//# sourceURL=webpack://webpack-practice/./src/modules/my.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/boss.js":
/*!*********************!*\
  !*** ./src/boss.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Boss; }\n/* harmony export */ });\n/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ \"./src/character.js\");\n\nclass Boss extends _character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(options) {\n    super(options);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYm9zcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFtQztBQUVwQixNQUFNQyxJQUFJLFNBQVNELGtEQUFTLENBQUM7RUFDeENFLFdBQVdBLENBQUNDLE9BQU8sRUFBRTtJQUNqQixLQUFLLENBQUNBLE9BQU8sQ0FBQztFQUNsQjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlnaHQtZ2FtZS8uL3NyYy9ib3NzLmpzPzRlNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJhY3RlciBmcm9tIFwiLi9jaGFyYWN0ZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3NzIGV4dGVuZHMgQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgfVxufSJdLCJuYW1lcyI6WyJDaGFyYWN0ZXIiLCJCb3NzIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/boss.js\n");

/***/ }),

/***/ "./src/character.js":
/*!**************************!*\
  !*** ./src/character.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Character; }\n/* harmony export */ });\nconst CONSTANTS = {\n  GRAVITY: 0.2\n};\nclass Character {\n  constructor(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n  }\n  draw(ctx) {\n    ctx.fillStyle = \"red\";\n    ctx.fillRect(this.pos.x, this.pos.y, 50, 150);\n  }\n  move() {\n    this.draw;\n    this.pos.y += CONSTANTS.GRAVITY;\n  }\n\n  // animate() {\n  //     this.move()\n  //     this.draw(ctx)\n  // }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2hhcmFjdGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxTQUFTLEdBQUc7RUFDZEMsT0FBTyxFQUFFO0FBQ2IsQ0FBQztBQUVjLE1BQU1DLFNBQVMsQ0FBQztFQUMzQkMsV0FBV0EsQ0FBQ0MsT0FBTyxFQUFFO0lBQ2pCLElBQUksQ0FBQ0MsR0FBRyxHQUFHRCxPQUFPLENBQUNDLEdBQUc7SUFDdEIsSUFBSSxDQUFDQyxHQUFHLEdBQUdGLE9BQU8sQ0FBQ0UsR0FBRztFQUUxQjtFQUVBQyxJQUFJQSxDQUFDQyxHQUFHLEVBQUU7SUFDTkEsR0FBRyxDQUFDQyxTQUFTLEdBQUcsS0FBSztJQUNyQkQsR0FBRyxDQUFDRSxRQUFRLENBQUMsSUFBSSxDQUFDTCxHQUFHLENBQUNNLENBQUMsRUFBRSxJQUFJLENBQUNOLEdBQUcsQ0FBQ08sQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7RUFDakQ7RUFFQUMsSUFBSUEsQ0FBQSxFQUFHO0lBQ0gsSUFBSSxDQUFDTixJQUFJO0lBQ1QsSUFBSSxDQUFDRixHQUFHLENBQUNPLENBQUMsSUFBSVosU0FBUyxDQUFDQyxPQUFPO0VBQ25DOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWdodC1nYW1lLy4vc3JjL2NoYXJhY3Rlci5qcz81YjA4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBHUkFWSVRZOiAwLjJcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMucG9zID0gb3B0aW9ucy5wb3NcbiAgICAgICAgdGhpcy52ZWwgPSBvcHRpb25zLnZlbFxuXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCJcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zLngsIHRoaXMucG9zLnksIDUwLCAxNTApXG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgdGhpcy5kcmF3XG4gICAgICAgIHRoaXMucG9zLnkgKz0gQ09OU1RBTlRTLkdSQVZJVFlcbiAgICB9XG5cbiAgICAvLyBhbmltYXRlKCkge1xuICAgIC8vICAgICB0aGlzLm1vdmUoKVxuICAgIC8vICAgICB0aGlzLmRyYXcoY3R4KVxuICAgIC8vIH1cbn0iXSwibmFtZXMiOlsiQ09OU1RBTlRTIiwiR1JBVklUWSIsIkNoYXJhY3RlciIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsInBvcyIsInZlbCIsImRyYXciLCJjdHgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIngiLCJ5IiwibW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/character.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _boss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boss */ \"./src/boss.js\");\n\n\nconst canvas = document.getElementById(\"game-canvas\");\nconst ctx = canvas.getContext(\"2d\");\ncanvas.width = 1024; // Game.DIM_X;\ncanvas.height = 576; // Game.DIM_Y;\n\n// set background color\nctx.fillStyle = 'grey';\nctx.fillRect(0, 0, canvas.width, canvas.height);\n\n// for testing purposes, will be put into game.js\nconst player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  pos: {\n    x: 0,\n    y: 0\n  },\n  vel: {\n    x: 0,\n    y: 0\n  }\n});\nplayer.draw(ctx);\nconst boss = new _boss__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  pos: {\n    x: 250,\n    y: 0\n  },\n  vel: {\n    x: 0,\n    y: 0\n  }\n});\nboss.draw(ctx);\nfunction animate() {\n  window.requestAnimationFrame(animate);\n  // ctx.clearRect(0, 0, canvas.width, canvas.height)\n  player.move();\n  boss.move();\n}\nanimate();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQThCO0FBQ0o7QUFFMUIsTUFBTUUsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUM7QUFDckQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFFbkNKLE1BQU0sQ0FBQ0ssS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ3JCTCxNQUFNLENBQUNNLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQzs7QUFFckI7QUFDQUgsR0FBRyxDQUFDSSxTQUFTLEdBQUcsTUFBTTtBQUN0QkosR0FBRyxDQUFDSyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRVIsTUFBTSxDQUFDSyxLQUFLLEVBQUVMLE1BQU0sQ0FBQ00sTUFBTSxDQUFDOztBQUUvQztBQUNBLE1BQU1HLE1BQU0sR0FBRyxJQUFJWCwrQ0FBTSxDQUFDO0VBQ3RCWSxHQUFHLEVBQUU7SUFDREMsQ0FBQyxFQUFFLENBQUM7SUFDSkMsQ0FBQyxFQUFFO0VBQ1AsQ0FBQztFQUNEQyxHQUFHLEVBQUU7SUFDREYsQ0FBQyxFQUFFLENBQUM7SUFDSkMsQ0FBQyxFQUFFO0VBQ1A7QUFDSixDQUFDLENBQUM7QUFDRkgsTUFBTSxDQUFDSyxJQUFJLENBQUNYLEdBQUcsQ0FBQztBQUVoQixNQUFNWSxJQUFJLEdBQUcsSUFBSWhCLDZDQUFJLENBQUM7RUFDbEJXLEdBQUcsRUFBRTtJQUNEQyxDQUFDLEVBQUUsR0FBRztJQUNOQyxDQUFDLEVBQUU7RUFDUCxDQUFDO0VBQ0RDLEdBQUcsRUFBRTtJQUNERixDQUFDLEVBQUUsQ0FBQztJQUNKQyxDQUFDLEVBQUU7RUFDUDtBQUNKLENBQUMsQ0FBQztBQUNGRyxJQUFJLENBQUNELElBQUksQ0FBQ1gsR0FBRyxDQUFDO0FBRWQsU0FBU2EsT0FBT0EsQ0FBQSxFQUFHO0VBQ2ZDLE1BQU0sQ0FBQ0MscUJBQXFCLENBQUNGLE9BQU8sQ0FBQztFQUNyQztFQUNBUCxNQUFNLENBQUNVLElBQUksQ0FBQyxDQUFDO0VBQ2JKLElBQUksQ0FBQ0ksSUFBSSxDQUFDLENBQUM7QUFDZjtBQUNBSCxPQUFPLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpZ2h0LWdhbWUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IEJvc3MgZnJvbSBcIi4vYm9zc1wiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuY2FudmFzLndpZHRoID0gMTAyNDsgLy8gR2FtZS5ESU1fWDtcbmNhbnZhcy5oZWlnaHQgPSA1NzY7IC8vIEdhbWUuRElNX1k7XG5cbi8vIHNldCBiYWNrZ3JvdW5kIGNvbG9yXG5jdHguZmlsbFN0eWxlID0gJ2dyZXknO1xuY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbi8vIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3aWxsIGJlIHB1dCBpbnRvIGdhbWUuanNcbmNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoe1xuICAgIHBvczoge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwXG4gICAgfSxcbiAgICB2ZWw6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgIH1cbn0pXG5wbGF5ZXIuZHJhdyhjdHgpXG5cbmNvbnN0IGJvc3MgPSBuZXcgQm9zcyh7XG4gICAgcG9zOiB7XG4gICAgICAgIHg6IDI1MCxcbiAgICAgICAgeTogMFxuICAgIH0sXG4gICAgdmVsOiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDBcbiAgICB9XG59KVxuYm9zcy5kcmF3KGN0eClcblxuZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG4gICAgLy8gY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG4gICAgcGxheWVyLm1vdmUoKVxuICAgIGJvc3MubW92ZSgpXG59XG5hbmltYXRlKCkiXSwibmFtZXMiOlsiUGxheWVyIiwiQm9zcyIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInBsYXllciIsInBvcyIsIngiLCJ5IiwidmVsIiwiZHJhdyIsImJvc3MiLCJhbmltYXRlIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Player; }\n/* harmony export */ });\n/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ \"./src/character.js\");\n\nclass Player extends _character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(options) {\n    super(options);\n  }\n\n  // move() {\n\n  // }\n  // attack\n  // arrow keys movement\n  // jump\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGxheWVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW1DO0FBSXBCLE1BQU1DLE1BQU0sU0FBU0Qsa0RBQVM7RUFDekNFLFdBQVdBLENBQUNDLE9BQU8sRUFBRTtJQUNqQixLQUFLLENBQUNBLE9BQU8sQ0FBQztFQUNsQjs7RUFHQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlnaHQtZ2FtZS8uL3NyYy9wbGF5ZXIuanM/YThhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhcmFjdGVyIGZyb20gXCIuL2NoYXJhY3RlclwiXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDaGFyYWN0ZXJ7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKVxuICAgIH1cblxuICAgIFxuICAgIC8vIG1vdmUoKSB7XG5cbiAgICAvLyB9XG4gICAgLy8gYXR0YWNrXG4gICAgLy8gYXJyb3cga2V5cyBtb3ZlbWVudFxuICAgIC8vIGp1bXBcbn0iXSwibmFtZXMiOlsiQ2hhcmFjdGVyIiwiUGxheWVyIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/player.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWdodC1nYW1lLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;
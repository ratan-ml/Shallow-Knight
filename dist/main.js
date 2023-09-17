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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Boss; }\n/* harmony export */ });\n/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ \"./src/character.js\");\n\nclass Boss extends _character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(options) {\n    super(options);\n    this.height = 250;\n    this.width = 100;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYm9zcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFtQztBQUVwQixNQUFNQyxJQUFJLFNBQVNELGtEQUFTLENBQUM7RUFDeENFLFdBQVdBLENBQUNDLE9BQU8sRUFBRTtJQUNqQixLQUFLLENBQUNBLE9BQU8sQ0FBQztJQUNkLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEdBQUc7SUFDakIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsR0FBRztFQUNwQjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlnaHQtZ2FtZS8uL3NyYy9ib3NzLmpzPzRlNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJhY3RlciBmcm9tIFwiLi9jaGFyYWN0ZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3NzIGV4dGVuZHMgQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMjUwXG4gICAgICAgIHRoaXMud2lkdGggPSAxMDBcbiAgICB9XG59Il0sIm5hbWVzIjpbIkNoYXJhY3RlciIsIkJvc3MiLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJoZWlnaHQiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/boss.js\n");

/***/ }),

/***/ "./src/character.js":
/*!**************************!*\
  !*** ./src/character.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Character; }\n/* harmony export */ });\nconst CONSTANTS = {\n  GRAVITY: 0.2\n};\nclass Character {\n  constructor(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.height = options.height;\n    this.width = options.width;\n    this.game = options.game;\n  }\n  draw(ctx) {\n    ctx.fillStyle = \"red\";\n    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);\n  }\n  move() {\n    // apply gravity\n    this.pos.y += this.vel.y;\n    this.vel.y += CONSTANTS.GRAVITY;\n    const characterBase = this.pos.y + this.height + this.vel.y;\n    if (characterBase >= 576) {\n      this.vel.y = 0;\n    }\n  }\n\n  // equivalent to update\n  animate(ctx) {\n    this.move();\n    this.draw(ctx);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2hhcmFjdGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxTQUFTLEdBQUc7RUFDZEMsT0FBTyxFQUFFO0FBQ2IsQ0FBQztBQUVjLE1BQU1DLFNBQVMsQ0FBQztFQUMzQkMsV0FBV0EsQ0FBQ0MsT0FBTyxFQUFFO0lBQ2pCLElBQUksQ0FBQ0MsR0FBRyxHQUFHRCxPQUFPLENBQUNDLEdBQUc7SUFDdEIsSUFBSSxDQUFDQyxHQUFHLEdBQUdGLE9BQU8sQ0FBQ0UsR0FBRztJQUN0QixJQUFJLENBQUNDLE1BQU0sR0FBR0gsT0FBTyxDQUFDRyxNQUFNO0lBQzVCLElBQUksQ0FBQ0MsS0FBSyxHQUFHSixPQUFPLENBQUNJLEtBQUs7SUFDMUIsSUFBSSxDQUFDQyxJQUFJLEdBQUdMLE9BQU8sQ0FBQ0ssSUFBSTtFQUM1QjtFQUVBQyxJQUFJQSxDQUFDQyxHQUFHLEVBQUU7SUFDTkEsR0FBRyxDQUFDQyxTQUFTLEdBQUcsS0FBSztJQUNyQkQsR0FBRyxDQUFDRSxRQUFRLENBQUMsSUFBSSxDQUFDUixHQUFHLENBQUNTLENBQUMsRUFBRSxJQUFJLENBQUNULEdBQUcsQ0FBQ1UsQ0FBQyxFQUFFLElBQUksQ0FBQ1AsS0FBSyxFQUFFLElBQUksQ0FBQ0QsTUFBTSxDQUFDO0VBQ2pFO0VBRUFTLElBQUlBLENBQUEsRUFBRztJQUNIO0lBQ0EsSUFBSSxDQUFDWCxHQUFHLENBQUNVLENBQUMsSUFBSSxJQUFJLENBQUNULEdBQUcsQ0FBQ1MsQ0FBQztJQUN4QixJQUFJLENBQUNULEdBQUcsQ0FBQ1MsQ0FBQyxJQUFJZixTQUFTLENBQUNDLE9BQU87SUFFL0IsTUFBTWdCLGFBQWEsR0FBRyxJQUFJLENBQUNaLEdBQUcsQ0FBQ1UsQ0FBQyxHQUFHLElBQUksQ0FBQ1IsTUFBTSxHQUFHLElBQUksQ0FBQ0QsR0FBRyxDQUFDUyxDQUFDO0lBQzNELElBQUlFLGFBQWEsSUFBSSxHQUFHLEVBQUU7TUFDdEIsSUFBSSxDQUFDWCxHQUFHLENBQUNTLENBQUMsR0FBRyxDQUFDO0lBQ2xCO0VBQ0o7O0VBRUE7RUFDQUcsT0FBT0EsQ0FBQ1AsR0FBRyxFQUFFO0lBQ1QsSUFBSSxDQUFDSyxJQUFJLENBQUMsQ0FBQztJQUNYLElBQUksQ0FBQ04sSUFBSSxDQUFDQyxHQUFHLENBQUM7RUFDbEI7QUFHSiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpZ2h0LWdhbWUvLi9zcmMvY2hhcmFjdGVyLmpzPzViMDgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIEdSQVZJVFk6IDAuMlxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5wb3MgPSBvcHRpb25zLnBvc1xuICAgICAgICB0aGlzLnZlbCA9IG9wdGlvbnMudmVsXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHRcbiAgICAgICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGhcbiAgICAgICAgdGhpcy5nYW1lID0gb3B0aW9ucy5nYW1lXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCJcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zLngsIHRoaXMucG9zLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIC8vIGFwcGx5IGdyYXZpdHlcbiAgICAgICAgdGhpcy5wb3MueSArPSB0aGlzLnZlbC55XG4gICAgICAgIHRoaXMudmVsLnkgKz0gQ09OU1RBTlRTLkdSQVZJVFlcblxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJCYXNlID0gdGhpcy5wb3MueSArIHRoaXMuaGVpZ2h0ICsgdGhpcy52ZWwueVxuICAgICAgICBpZiAoY2hhcmFjdGVyQmFzZSA+PSA1NzYpIHtcbiAgICAgICAgICAgIHRoaXMudmVsLnkgPSAwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBlcXVpdmFsZW50IHRvIHVwZGF0ZVxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMubW92ZSgpXG4gICAgICAgIHRoaXMuZHJhdyhjdHgpXG4gICAgfVxuXG5cbn0iXSwibmFtZXMiOlsiQ09OU1RBTlRTIiwiR1JBVklUWSIsIkNoYXJhY3RlciIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsInBvcyIsInZlbCIsImhlaWdodCIsIndpZHRoIiwiZ2FtZSIsImRyYXciLCJjdHgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIngiLCJ5IiwibW92ZSIsImNoYXJhY3RlckJhc2UiLCJhbmltYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/character.js\n");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _boss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boss */ \"./src/boss.js\");\n\n\nclass Game {\n  constructor() {\n    this.player = [];\n    this.boss = [];\n    this.projectiles = [];\n  }\n\n  // static DIM_X = 1024\n  // static DIM_Y = 576\n\n  // isOutofBounds(pos) {\n  //     return (pos[0] < 0) || (pos[1] < 0) ||\n  //     (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);\n  // }\n\n  add(object) {}\n\n  // update() {\n\n  // }\n\n  // animate() {\n\n  //     requestAnimationFrame(this.animate.bind(this))\n  // }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEI7QUFDSjtBQUVYLE1BQU1FLElBQUksQ0FBQztFQUN0QkMsV0FBV0EsQ0FBQSxFQUFHO0lBQ1YsSUFBSSxDQUFDQyxNQUFNLEdBQUcsRUFBRTtJQUNoQixJQUFJLENBQUNDLElBQUksR0FBRyxFQUFFO0lBQ2QsSUFBSSxDQUFDQyxXQUFXLEdBQUcsRUFBRTtFQUV6Qjs7RUFFQTtFQUNBOztFQUdBO0VBQ0E7RUFDQTtFQUNBOztFQUVBQyxHQUFHQSxDQUFDQyxNQUFNLEVBQUUsQ0FFWjs7RUFNQTs7RUFFQTs7RUFFQTs7RUFFQTtFQUNBO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWdodC1nYW1lLy4vc3JjL2dhbWUuanM/N2RlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IEJvc3MgZnJvbSBcIi4vYm9zc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBbXTtcbiAgICAgICAgdGhpcy5ib3NzID0gW11cbiAgICAgICAgdGhpcy5wcm9qZWN0aWxlcyA9IFtdO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyBzdGF0aWMgRElNX1ggPSAxMDI0XG4gICAgLy8gc3RhdGljIERJTV9ZID0gNTc2XG5cbiAgICBcbiAgICAvLyBpc091dG9mQm91bmRzKHBvcykge1xuICAgIC8vICAgICByZXR1cm4gKHBvc1swXSA8IDApIHx8IChwb3NbMV0gPCAwKSB8fFxuICAgIC8vICAgICAocG9zWzBdID4gR2FtZS5ESU1fWCkgfHwgKHBvc1sxXSA+IEdhbWUuRElNX1kpO1xuICAgIC8vIH1cblxuICAgIGFkZChvYmplY3QpIHtcblxuICAgIH1cblxuXG5cblxuICAgIFxuICAgIC8vIHVwZGF0ZSgpIHtcblxuICAgIC8vIH1cblxuICAgIC8vIGFuaW1hdGUoKSB7XG5cbiAgICAvLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKVxuICAgIC8vIH1cbn0iXSwibmFtZXMiOlsiUGxheWVyIiwiQm9zcyIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsInBsYXllciIsImJvc3MiLCJwcm9qZWN0aWxlcyIsImFkZCIsIm9iamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _boss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boss */ \"./src/boss.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\nconst canvas = document.getElementById(\"game-canvas\");\nconst ctx = canvas.getContext(\"2d\");\ncanvas.width = 1024; // Game.DIM_X;\ncanvas.height = 576; // Game.DIM_Y;\n\n// set background color\nctx.fillStyle = 'grey';\nctx.fillRect(0, 0, canvas.width, canvas.height);\n\n// for testing purposes, will be put into game.js\nconst game = new _game__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  pos: {\n    x: 0,\n    y: 576 - 250\n  },\n  vel: {\n    x: 0,\n    y: 0\n  },\n  game: game\n});\nplayer.draw(ctx);\nconst boss = new _boss__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  pos: {\n    x: 800 / 2 + 100 / 2,\n    y: 0\n  },\n  vel: {\n    x: 0,\n    y: 0\n  },\n  game: game\n});\nboss.draw(ctx);\nconst running = true;\nfunction animate() {\n  ctx.fillStyle = 'grey';\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n  player.animate(ctx);\n  boss.animate(ctx);\n  requestAnimationFrame(() => {\n    if (running) return animate();\n  });\n}\nfunction play() {\n  animate();\n}\nplay();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUE4QjtBQUNKO0FBQ0E7QUFFMUIsTUFBTUcsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUM7QUFDckQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFFbkNKLE1BQU0sQ0FBQ0ssS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ3JCTCxNQUFNLENBQUNNLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQzs7QUFFckI7QUFDQUgsR0FBRyxDQUFDSSxTQUFTLEdBQUcsTUFBTTtBQUN0QkosR0FBRyxDQUFDSyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRVIsTUFBTSxDQUFDSyxLQUFLLEVBQUVMLE1BQU0sQ0FBQ00sTUFBTSxDQUFDOztBQUUvQztBQUNBLE1BQU1HLElBQUksR0FBRyxJQUFJViw2Q0FBSSxDQUFDLENBQUM7QUFFdkIsTUFBTVcsTUFBTSxHQUFHLElBQUliLCtDQUFNLENBQUM7RUFDdEJjLEdBQUcsRUFBRTtJQUNEQyxDQUFDLEVBQUUsQ0FBQztJQUNKQyxDQUFDLEVBQUUsR0FBRyxHQUFDO0VBQ1gsQ0FBQztFQUNEQyxHQUFHLEVBQUU7SUFDREYsQ0FBQyxFQUFFLENBQUM7SUFDSkMsQ0FBQyxFQUFFO0VBQ1AsQ0FBQztFQUNESixJQUFJLEVBQUVBO0FBQ1YsQ0FBQyxDQUFDO0FBQ0ZDLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDWixHQUFHLENBQUM7QUFFaEIsTUFBTWEsSUFBSSxHQUFHLElBQUlsQiw2Q0FBSSxDQUFDO0VBQ2xCYSxHQUFHLEVBQUU7SUFDREMsQ0FBQyxFQUFHLEdBQUcsR0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFDLENBQUU7SUFDbEJDLENBQUMsRUFBRTtFQUNQLENBQUM7RUFDREMsR0FBRyxFQUFFO0lBQ0RGLENBQUMsRUFBRSxDQUFDO0lBQ0pDLENBQUMsRUFBRTtFQUNQLENBQUM7RUFDREosSUFBSSxFQUFFQTtBQUVWLENBQUMsQ0FBQztBQUNGTyxJQUFJLENBQUNELElBQUksQ0FBQ1osR0FBRyxDQUFDO0FBSWQsTUFBTWMsT0FBTyxHQUFHLElBQUk7QUFFcEIsU0FBU0MsT0FBT0EsQ0FBQSxFQUFHO0VBQ2ZmLEdBQUcsQ0FBQ0ksU0FBUyxHQUFHLE1BQU07RUFDdEJKLEdBQUcsQ0FBQ0ssUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUVSLE1BQU0sQ0FBQ0ssS0FBSyxFQUFFTCxNQUFNLENBQUNNLE1BQU0sQ0FBQztFQUMvQ0ksTUFBTSxDQUFDUSxPQUFPLENBQUNmLEdBQUcsQ0FBQztFQUNuQmEsSUFBSSxDQUFDRSxPQUFPLENBQUNmLEdBQUcsQ0FBQztFQUNqQmdCLHFCQUFxQixDQUFDLE1BQU07SUFBQyxJQUFJRixPQUFPLEVBQUUsT0FBT0MsT0FBTyxDQUFDLENBQUM7RUFBQSxDQUFDLENBQUM7QUFDaEU7QUFFQSxTQUFTRSxJQUFJQSxDQUFBLEVBQUc7RUFFWkYsT0FBTyxDQUFDLENBQUM7QUFDYjtBQUVBRSxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpZ2h0LWdhbWUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IEJvc3MgZnJvbSBcIi4vYm9zc1wiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuY2FudmFzLndpZHRoID0gMTAyNDsgLy8gR2FtZS5ESU1fWDtcbmNhbnZhcy5oZWlnaHQgPSA1NzY7IC8vIEdhbWUuRElNX1k7XG5cbi8vIHNldCBiYWNrZ3JvdW5kIGNvbG9yXG5jdHguZmlsbFN0eWxlID0gJ2dyZXknO1xuY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbi8vIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3aWxsIGJlIHB1dCBpbnRvIGdhbWUuanNcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpXG5cbmNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoe1xuICAgIHBvczoge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiA1NzYtMjUwXG4gICAgfSxcbiAgICB2ZWw6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgIH0sXG4gICAgZ2FtZTogZ2FtZVxufSlcbnBsYXllci5kcmF3KGN0eClcblxuY29uc3QgYm9zcyA9IG5ldyBCb3NzKHtcbiAgICBwb3M6IHtcbiAgICAgICAgeDogKDgwMC8yKSsoMTAwLzIpLFxuICAgICAgICB5OiAwXG4gICAgfSxcbiAgICB2ZWw6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgIH0sXG4gICAgZ2FtZTogZ2FtZVxuXG59KVxuYm9zcy5kcmF3KGN0eClcblxuXG5cbmNvbnN0IHJ1bm5pbmcgPSB0cnVlXG5cbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdncmV5JztcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBwbGF5ZXIuYW5pbWF0ZShjdHgpXG4gICAgYm9zcy5hbmltYXRlKGN0eClcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge2lmIChydW5uaW5nKSByZXR1cm4gYW5pbWF0ZSgpfSlcbn1cblxuZnVuY3Rpb24gcGxheSgpIHtcbiAgICBcbiAgICBhbmltYXRlKClcbn1cblxucGxheSgpXG4iXSwibmFtZXMiOlsiUGxheWVyIiwiQm9zcyIsIkdhbWUiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJnYW1lIiwicGxheWVyIiwicG9zIiwieCIsInkiLCJ2ZWwiLCJkcmF3IiwiYm9zcyIsInJ1bm5pbmciLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicGxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Player; }\n/* harmony export */ });\n/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ \"./src/character.js\");\n\nclass Player extends _character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(options) {\n    super(options);\n    this.height = 150;\n    this.width = 50;\n    this.movement();\n  }\n  movement() {\n    document.addEventListener(\"keydown\", this.handleKeyDown.bind(this));\n  }\n  handleKeyDown(event) {\n    switch (event.key) {\n      case \"ArrowLeft\":\n        if (this.pos.x > 0) {\n          this.pos.x -= 20;\n        }\n        break;\n      case \"ArrowRight\":\n        const rightSide = 1024 - this.width;\n        if (this.pos.x < rightSide) {\n          this.pos.x += 20;\n        }\n        break;\n    }\n  }\n  // attack\n  // arrow keys movement\n  // jump\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGxheWVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW1DO0FBSXBCLE1BQU1DLE1BQU0sU0FBU0Qsa0RBQVM7RUFDekNFLFdBQVdBLENBQUNDLE9BQU8sRUFBRTtJQUNqQixLQUFLLENBQUNBLE9BQU8sQ0FBQztJQUNkLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEdBQUc7SUFDakIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUM7RUFDbkI7RUFJQUEsUUFBUUEsQ0FBQSxFQUFHO0lBQ1BDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQ0MsYUFBYSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDdkU7RUFFQUQsYUFBYUEsQ0FBQ0UsS0FBSyxFQUFFO0lBQ2pCLFFBQVFBLEtBQUssQ0FBQ0MsR0FBRztNQUNiLEtBQUssV0FBVztRQUNaLElBQUksSUFBSSxDQUFDQyxHQUFHLENBQUNDLENBQUMsR0FBRyxDQUFDLEVBQUU7VUFDaEIsSUFBSSxDQUFDRCxHQUFHLENBQUNDLENBQUMsSUFBSSxFQUFFO1FBQ3BCO1FBQ0E7TUFDSixLQUFLLFlBQVk7UUFDYixNQUFNQyxTQUFTLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQ1YsS0FBSztRQUNuQyxJQUFJLElBQUksQ0FBQ1EsR0FBRyxDQUFDQyxDQUFDLEdBQUdDLFNBQVMsRUFBRTtVQUN4QixJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsQ0FBQyxJQUFJLEVBQUU7UUFDcEI7UUFDQTtJQUNSO0VBQ0o7RUFDQTtFQUNBO0VBQ0E7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpZ2h0LWdhbWUvLi9zcmMvcGxheWVyLmpzP2E4YTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJhY3RlciBmcm9tIFwiLi9jaGFyYWN0ZXJcIlxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ2hhcmFjdGVye1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucylcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxNTBcbiAgICAgICAgdGhpcy53aWR0aCA9IDUwXG4gICAgICAgIHRoaXMubW92ZW1lbnQoKVxuICAgIH1cblxuXG5cbiAgICBtb3ZlbWVudCgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcykpXG4gICAgfVxuXG4gICAgaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvcy54ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcy54IC09IDIwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0U2lkZSA9IDEwMjQgLSB0aGlzLndpZHRoXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zLnggPCByaWdodFNpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3MueCArPSAyMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGF0dGFja1xuICAgIC8vIGFycm93IGtleXMgbW92ZW1lbnRcbiAgICAvLyBqdW1wXG59Il0sIm5hbWVzIjpbIkNoYXJhY3RlciIsIlBsYXllciIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsImhlaWdodCIsIndpZHRoIiwibW92ZW1lbnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVLZXlEb3duIiwiYmluZCIsImV2ZW50Iiwia2V5IiwicG9zIiwieCIsInJpZ2h0U2lkZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/player.js\n");

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
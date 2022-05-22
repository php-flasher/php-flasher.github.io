(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ "./assets/js/_clipboard.js":
/*!*********************************!*\
  !*** ./assets/js/_clipboard.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_clipboard_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/_clipboard.pcss */ "./assets/css/_clipboard.pcss");

var codeBlocks = document.querySelectorAll("pre.highlight");
codeBlocks.forEach(function (codeBlock) {
  var copyButton = document.createElement("button");
  copyButton.className = "copy";
  copyButton.type = "button";
  copyButton.ariaLabel = "Copy code to clipboard";
  copyButton.innerText = "Copy";
  codeBlock.append(copyButton);
  copyButton.addEventListener("click", function () {
    var code = codeBlock.querySelector("code").innerText.trim();
    window.navigator.clipboard.writeText(code);
    copyButton.innerText = "Copied";
    setTimeout(function () {
      copyButton.innerText = "Copy";
    }, 1000);
  });
});

/***/ }),

/***/ "./assets/js/_menu.js":
/*!****************************!*\
  !*** ./assets/js/_menu.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_menu_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/_menu.pcss */ "./assets/css/_menu.pcss");

var menuBtn = document.getElementById("menu-toggle");
var navigation = document.getElementById("main-navigation");
var article = document.getElementById("main-article");

function toggleClassName(el, className) {
  if (el.classList.contains(className)) {
    el.classList.remove(className);
  } else {
    el.classList.add(className);
  }
}

menuBtn.addEventListener("click", function (e) {
  e.preventDefault();
  toggleClassName(menuBtn, "menu-closed");
  toggleClassName(navigation, "hidden");
  toggleClassName(article, "hidden");
});

/***/ }),

/***/ "./assets/js/_prev-next.js":
/*!*********************************!*\
  !*** ./assets/js/_prev-next.js ***!
  \*********************************/
/***/ (function() {

var prevNext = document.querySelectorAll(".prev-next");
var navigation = document.getElementById("main-navigation");
var navigationLinks = navigation.querySelectorAll("a");
var previous = undefined;
var next = undefined;
var active = undefined;

function renderPreviousNext(which, originalLink) {
  var links = document.querySelectorAll(which);
  links.forEach(function (link) {
    var label = link.querySelector("span");
    label.innerHTML = originalLink.innerHTML.replace(/\d+\. /, "").replace(/<(\S*?)[^>]*>.*?<\/\1>|<.*?\/>/, "");
    link.href = originalLink.href;
    link.classList.remove("hidden");
    link.classList.remove("sm:hidden");
  });
}

navigationLinks.forEach(function (link) {
  if (next !== undefined || link.href.includes("/docs/") === false) {
    return;
  }

  if (link.classList.contains("text-white")) {
    active = link;
  } else if (active === undefined) {
    previous = link;
  } else if (next === undefined) {
    next = link;
  }
});

if (active !== undefined) {
  prevNext.forEach(function (p) {
    p.classList.remove("hidden");
  });
  previous && renderPreviousNext(".link-previous", previous);
  next && renderPreviousNext(".link-next", next);
}

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_common_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/_common.pcss */ "./assets/css/_common.pcss");
/* harmony import */ var _css_main_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.pcss */ "./assets/css/main.pcss");
/* harmony import */ var _css_highlighter_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/_highlighter.pcss */ "./assets/css/_highlighter.pcss");
/* harmony import */ var _css_monokai_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/_monokai.css */ "./assets/css/_monokai.css");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_menu.js */ "./assets/js/_menu.js");
/* harmony import */ var _prev_next_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_prev-next.js */ "./assets/js/_prev-next.js");
/* harmony import */ var _prev_next_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_prev_next_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _clipboard_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_clipboard.js */ "./assets/js/_clipboard.js");








/***/ }),

/***/ "./assets/css/_clipboard.pcss":
/*!************************************!*\
  !*** ./assets/css/_clipboard.pcss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/css/_common.pcss":
/*!*********************************!*\
  !*** ./assets/css/_common.pcss ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/css/_highlighter.pcss":
/*!**************************************!*\
  !*** ./assets/css/_highlighter.pcss ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/css/_menu.pcss":
/*!*******************************!*\
  !*** ./assets/css/_menu.pcss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/css/_monokai.css":
/*!*********************************!*\
  !*** ./assets/css/_monokai.css ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/css/main.pcss":
/*!******************************!*\
  !*** ./assets/css/main.pcss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["assets_css__common_pcss"], function() { return __webpack_exec__("./assets/js/main.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBa0IsQ0FBQyxZQUFELEVBQWVGLElBQWYsQ0FBMUI7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0Q7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTkE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL19jbGlwYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL19tZW51LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9fcHJldi1uZXh0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvX2NsaXBib2FyZC5wY3NzPzE1YmQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9fY29tbW9uLnBjc3M/NDJkNSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL19oaWdobGlnaHRlci5wY3NzP2YwMWMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9fbWVudS5wY3NzP2IyMTUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9fbW9ub2thaS5jc3M/NmQ1ZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL21haW4ucGNzcz85YTIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL2Nzcy9fY2xpcGJvYXJkLnBjc3NcIjtcblxuY29uc3QgY29kZUJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJwcmUuaGlnaGxpZ2h0XCIpO1xuXG5jb2RlQmxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGNvZGVCbG9jaykge1xuICAgIGNvbnN0IGNvcHlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvcHlCdXR0b24uY2xhc3NOYW1lID0gXCJjb3B5XCI7XG4gICAgY29weUJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBjb3B5QnV0dG9uLmFyaWFMYWJlbCA9IFwiQ29weSBjb2RlIHRvIGNsaXBib2FyZFwiO1xuICAgIGNvcHlCdXR0b24uaW5uZXJUZXh0ID0gXCJDb3B5XCI7XG5cbiAgICBjb2RlQmxvY2suYXBwZW5kKGNvcHlCdXR0b24pO1xuXG4gICAgY29weUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjb2RlID0gY29kZUJsb2NrLnF1ZXJ5U2VsZWN0b3IoXCJjb2RlXCIpLmlubmVyVGV4dC50cmltKCk7XG4gICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb2RlKTtcblxuICAgICAgICBjb3B5QnV0dG9uLmlubmVyVGV4dCA9IFwiQ29waWVkXCI7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb3B5QnV0dG9uLmlubmVyVGV4dCA9IFwiQ29weVwiO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9KTtcbn0pO1xuIiwiaW1wb3J0IFwiLi4vY3NzL19tZW51LnBjc3NcIjtcblxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS10b2dnbGVcIik7XG5jb25zdCBuYXZpZ2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLW5hdmlnYXRpb25cIik7XG5jb25zdCBhcnRpY2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWFydGljbGVcIik7XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzTmFtZShlbCwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxufVxuXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0b2dnbGVDbGFzc05hbWUobWVudUJ0biwgXCJtZW51LWNsb3NlZFwiKTtcbiAgICB0b2dnbGVDbGFzc05hbWUobmF2aWdhdGlvbiwgXCJoaWRkZW5cIik7XG4gICAgdG9nZ2xlQ2xhc3NOYW1lKGFydGljbGUsIFwiaGlkZGVuXCIpO1xufSk7XG4iLCJjb25zdCBwcmV2TmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJldi1uZXh0XCIpO1xuY29uc3QgbmF2aWdhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1uYXZpZ2F0aW9uXCIpO1xuY29uc3QgbmF2aWdhdGlvbkxpbmtzID0gbmF2aWdhdGlvbi5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcblxubGV0IHByZXZpb3VzID0gdW5kZWZpbmVkO1xubGV0IG5leHQgPSB1bmRlZmluZWQ7XG5sZXQgYWN0aXZlID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiByZW5kZXJQcmV2aW91c05leHQod2hpY2gsIG9yaWdpbmFsTGluaykge1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh3aGljaCk7XG5cbiAgICBsaW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChsaW5rKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gbGluay5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcbiAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gb3JpZ2luYWxMaW5rLmlubmVySFRNTC5yZXBsYWNlKC9cXGQrXFwuIC8sIFwiXCIpLnJlcGxhY2UoLzwoXFxTKj8pW14+XSo+Lio/PFxcL1xcMT58PC4qP1xcLz4vLCBcIlwiKTtcbiAgICAgICAgbGluay5ocmVmID0gb3JpZ2luYWxMaW5rLmhyZWY7XG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKFwic206aGlkZGVuXCIpO1xuICAgIH0pO1xufVxuXG5uYXZpZ2F0aW9uTGlua3MuZm9yRWFjaChmdW5jdGlvbiAobGluaykge1xuICAgIGlmIChuZXh0ICE9PSB1bmRlZmluZWQgfHwgbGluay5ocmVmLmluY2x1ZGVzKFwiL2RvY3MvXCIpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChsaW5rLmNsYXNzTGlzdC5jb250YWlucyhcInRleHQtd2hpdGVcIikpIHtcbiAgICAgICAgYWN0aXZlID0gbGluaztcbiAgICB9IGVsc2UgaWYgKGFjdGl2ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByZXZpb3VzID0gbGluaztcbiAgICB9IGVsc2UgaWYgKG5leHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBuZXh0ID0gbGluaztcbiAgICB9XG59KTtcblxuaWYgKGFjdGl2ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcHJldk5leHQuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgICBwLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfSk7XG4gICAgcHJldmlvdXMgJiYgcmVuZGVyUHJldmlvdXNOZXh0KFwiLmxpbmstcHJldmlvdXNcIiwgcHJldmlvdXMpO1xuICAgIG5leHQgJiYgcmVuZGVyUHJldmlvdXNOZXh0KFwiLmxpbmstbmV4dFwiLCBuZXh0KTtcbn1cbiIsImltcG9ydCBcIi4uL2Nzcy9fY29tbW9uLnBjc3NcIjtcbmltcG9ydCBcIi4uL2Nzcy9tYWluLnBjc3NcIjtcbmltcG9ydCBcIi4uL2Nzcy9faGlnaGxpZ2h0ZXIucGNzc1wiO1xuaW1wb3J0IFwiLi4vY3NzL19tb25va2FpLmNzc1wiO1xuXG5pbXBvcnQgXCIuL19tZW51LmpzXCI7XG5pbXBvcnQgXCIuL19wcmV2LW5leHQuanNcIjtcbmltcG9ydCBcIi4vX2NsaXBib2FyZC5qc1wiO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImNvZGVCbG9ja3MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY29kZUJsb2NrIiwiY29weUJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0eXBlIiwiYXJpYUxhYmVsIiwiaW5uZXJUZXh0IiwiYXBwZW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvZGUiLCJxdWVyeVNlbGVjdG9yIiwidHJpbSIsIndpbmRvdyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNldFRpbWVvdXQiLCJtZW51QnRuIiwiZ2V0RWxlbWVudEJ5SWQiLCJuYXZpZ2F0aW9uIiwiYXJ0aWNsZSIsInRvZ2dsZUNsYXNzTmFtZSIsImVsIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwcmV2TmV4dCIsIm5hdmlnYXRpb25MaW5rcyIsInByZXZpb3VzIiwidW5kZWZpbmVkIiwibmV4dCIsImFjdGl2ZSIsInJlbmRlclByZXZpb3VzTmV4dCIsIndoaWNoIiwib3JpZ2luYWxMaW5rIiwibGlua3MiLCJsaW5rIiwibGFiZWwiLCJpbm5lckhUTUwiLCJyZXBsYWNlIiwiaHJlZiIsImluY2x1ZGVzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=
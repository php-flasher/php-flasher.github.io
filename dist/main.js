(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ "./assets/js/_clipboard.js":
/*!*********************************!*\
  !*** ./assets/js/_clipboard.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_clipboard_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/_clipboard.pcss */ "./assets/css/_clipboard.pcss");

var codeBlocks = document.querySelectorAll('pre.highlight');
codeBlocks.forEach(function (codeBlock) {
  var copyButton = document.createElement('button');
  copyButton.className = 'copy';
  copyButton.type = 'button';
  copyButton.ariaLabel = 'Copy code to clipboard';
  copyButton.innerText = 'Copy';
  codeBlock.append(copyButton);
  copyButton.addEventListener('click', function () {
    var code = codeBlock.querySelector('code').innerText.trim();
    window.navigator.clipboard.writeText(code);
    copyButton.innerText = 'Copied';
    setTimeout(function () {
      copyButton.innerText = 'Copy';
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

var menuBtn = document.getElementById('menu-toggle');
var navigation = document.getElementById('main-navigation');
var article = document.getElementById('main-article');

function toggleClassName(el, className) {
  if (el.classList.contains(className)) {
    el.classList.remove(className);
  } else {
    el.classList.add(className);
  }
}

menuBtn.addEventListener('click', function (e) {
  e.preventDefault();
  toggleClassName(menuBtn, 'menu-closed');
  toggleClassName(navigation, 'hidden');
  toggleClassName(article, 'hidden');
});

/***/ }),

/***/ "./assets/js/_prev-next.js":
/*!*********************************!*\
  !*** ./assets/js/_prev-next.js ***!
  \*********************************/
/***/ (function() {

var prevNext = document.querySelectorAll('.prev-next');
var navigation = document.getElementById('main-navigation');
var navigationLinks = navigation.querySelectorAll('a');
var previous = undefined;
var next = undefined;
var active = undefined;

function renderPreviousNext(which, originalLink) {
  var links = document.querySelectorAll(which);
  links.forEach(function (link) {
    var label = link.querySelector('span');
    label.innerHTML = originalLink.innerHTML.replace(/\d+\. /, '').replace(/<(\S*?)[^>]*>.*?<\/\1>|<.*?\/>/, '');
    link.href = originalLink.href;
    link.classList.remove('hidden');
    link.classList.remove('sm:hidden');
  });
}

navigationLinks.forEach(function (link) {
  if (next !== undefined || link.href.includes('/docs/') === false) {
    return;
  }

  if (link.classList.contains('text-white')) {
    active = link;
  } else if (active === undefined) {
    previous = link;
  } else if (next === undefined) {
    next = link;
  }
});

if (active !== undefined) {
  prevNext.forEach(function (p) {
    p.classList.remove('hidden');
  });
  previous && renderPreviousNext('.link-previous', previous);
  next && renderPreviousNext('.link-next', next);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBa0IsQ0FBQyxZQUFELEVBQWVGLElBQWYsQ0FBMUI7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTkE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL19jbGlwYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL19tZW51LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9fcHJldi1uZXh0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvX2NsaXBib2FyZC5wY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvX2NvbW1vbi5wY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvX2hpZ2hsaWdodGVyLnBjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9fbWVudS5wY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvX21vbm9rYWkuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvbWFpbi5wY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vY3NzL19jbGlwYm9hcmQucGNzcyc7XG5cbmNvbnN0IGNvZGVCbG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwcmUuaGlnaGxpZ2h0Jyk7XG5cbmNvZGVCbG9ja3MuZm9yRWFjaChmdW5jdGlvbiAoY29kZUJsb2NrKSB7XG4gICAgY29uc3QgY29weUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvcHlCdXR0b24uY2xhc3NOYW1lID0gJ2NvcHknO1xuICAgIGNvcHlCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGNvcHlCdXR0b24uYXJpYUxhYmVsID0gJ0NvcHkgY29kZSB0byBjbGlwYm9hcmQnO1xuICAgIGNvcHlCdXR0b24uaW5uZXJUZXh0ID0gJ0NvcHknO1xuXG4gICAgY29kZUJsb2NrLmFwcGVuZChjb3B5QnV0dG9uKTtcblxuICAgIGNvcHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBjb2RlQmxvY2sucXVlcnlTZWxlY3RvcignY29kZScpLmlubmVyVGV4dC50cmltKCk7XG4gICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb2RlKTtcblxuICAgICAgICBjb3B5QnV0dG9uLmlubmVyVGV4dCA9ICdDb3BpZWQnO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29weUJ1dHRvbi5pbm5lclRleHQgPSAnQ29weSc7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xufSk7XG4iLCJpbXBvcnQgJy4uL2Nzcy9fbWVudS5wY3NzJztcblxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LXRvZ2dsZScpO1xuY29uc3QgbmF2aWdhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLW5hdmlnYXRpb24nKTtcbmNvbnN0IGFydGljbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1hcnRpY2xlJyk7XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzTmFtZShlbCwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxufVxuXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdG9nZ2xlQ2xhc3NOYW1lKG1lbnVCdG4sICdtZW51LWNsb3NlZCcpO1xuICAgIHRvZ2dsZUNsYXNzTmFtZShuYXZpZ2F0aW9uLCAnaGlkZGVuJyk7XG4gICAgdG9nZ2xlQ2xhc3NOYW1lKGFydGljbGUsICdoaWRkZW4nKTtcbn0pO1xuIiwiY29uc3QgcHJldk5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJldi1uZXh0Jyk7XG5jb25zdCBuYXZpZ2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tbmF2aWdhdGlvbicpO1xuY29uc3QgbmF2aWdhdGlvbkxpbmtzID0gbmF2aWdhdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XG5cbmxldCBwcmV2aW91cyA9IHVuZGVmaW5lZDtcbmxldCBuZXh0ID0gdW5kZWZpbmVkO1xubGV0IGFjdGl2ZSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcmVuZGVyUHJldmlvdXNOZXh0KHdoaWNoLCBvcmlnaW5hbExpbmspIHtcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwod2hpY2gpO1xuXG4gICAgbGlua3MuZm9yRWFjaChmdW5jdGlvbiAobGluaykge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGxpbmsucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBvcmlnaW5hbExpbmsuaW5uZXJIVE1MLnJlcGxhY2UoL1xcZCtcXC4gLywgJycpLnJlcGxhY2UoLzwoXFxTKj8pW14+XSo+Lio/PFxcL1xcMT58PC4qP1xcLz4vLCAnJyk7XG4gICAgICAgIGxpbmsuaHJlZiA9IG9yaWdpbmFsTGluay5ocmVmO1xuICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ3NtOmhpZGRlbicpO1xuICAgIH0pO1xufVxuXG5uYXZpZ2F0aW9uTGlua3MuZm9yRWFjaChmdW5jdGlvbihsaW5rKSB7XG4gICAgaWYgKG5leHQgIT09IHVuZGVmaW5lZCB8fCBsaW5rLmhyZWYuaW5jbHVkZXMoJy9kb2NzLycpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChsaW5rLmNsYXNzTGlzdC5jb250YWlucygndGV4dC13aGl0ZScpKSB7XG4gICAgICAgIGFjdGl2ZSA9IGxpbms7XG4gICAgfSBlbHNlIGlmIChhY3RpdmUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcmV2aW91cyA9IGxpbms7XG4gICAgfSBlbHNlIGlmIChuZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmV4dCA9IGxpbms7XG4gICAgfVxufSk7XG5cbmlmIChhY3RpdmUgIT09IHVuZGVmaW5lZCkge1xuICAgIHByZXZOZXh0LmZvckVhY2goZnVuY3Rpb24ocCkgeyBwLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpOyB9KTtcbiAgICBwcmV2aW91cyAmJiByZW5kZXJQcmV2aW91c05leHQoJy5saW5rLXByZXZpb3VzJywgcHJldmlvdXMpO1xuICAgIG5leHQgJiYgcmVuZGVyUHJldmlvdXNOZXh0KCcubGluay1uZXh0JywgbmV4dCk7XG59XG4iLCJpbXBvcnQgJy4uL2Nzcy9fY29tbW9uLnBjc3MnO1xuaW1wb3J0ICcuLi9jc3MvbWFpbi5wY3NzJztcbmltcG9ydCAnLi4vY3NzL19oaWdobGlnaHRlci5wY3NzJztcbmltcG9ydCAnLi4vY3NzL19tb25va2FpLmNzcyc7XG5cbmltcG9ydCAnLi9fbWVudS5qcyc7XG5pbXBvcnQgJy4vX3ByZXYtbmV4dC5qcyc7XG5pbXBvcnQgJy4vX2NsaXBib2FyZC5qcyc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiY29kZUJsb2NrcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJjb2RlQmxvY2siLCJjb3B5QnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInR5cGUiLCJhcmlhTGFiZWwiLCJpbm5lclRleHQiLCJhcHBlbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29kZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0cmltIiwid2luZG93IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic2V0VGltZW91dCIsIm1lbnVCdG4iLCJnZXRFbGVtZW50QnlJZCIsIm5hdmlnYXRpb24iLCJhcnRpY2xlIiwidG9nZ2xlQ2xhc3NOYW1lIiwiZWwiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImFkZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByZXZOZXh0IiwibmF2aWdhdGlvbkxpbmtzIiwicHJldmlvdXMiLCJ1bmRlZmluZWQiLCJuZXh0IiwiYWN0aXZlIiwicmVuZGVyUHJldmlvdXNOZXh0Iiwid2hpY2giLCJvcmlnaW5hbExpbmsiLCJsaW5rcyIsImxpbmsiLCJsYWJlbCIsImlubmVySFRNTCIsInJlcGxhY2UiLCJocmVmIiwiaW5jbHVkZXMiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==
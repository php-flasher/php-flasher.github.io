"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["adapter/sweetalert"],{

/***/ "./assets/js/adapter/_notification.js":
/*!********************************************!*\
  !*** ./assets/js/adapter/_notification.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showNotificationsForHandler": function() { return /* binding */ showNotificationsForHandler; }
/* harmony export */ });
/* harmony import */ var _flasher_flasher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @flasher/flasher */ "./node_modules/@flasher/flasher/dist/index.js");
/* harmony import */ var _flasher_flasher__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_flasher_flasher__WEBPACK_IMPORTED_MODULE_0__);


function showNotifications(notifications) {
  if (notifications.length === 0) {
    return;
  }

  setTimeout(function () {
    notifications[0]();
    showNotifications(notifications.slice(1));
  }, 1500);
}

function showNotificationsForHandler(handler) {
  var factory = _flasher_flasher__WEBPACK_IMPORTED_MODULE_0___default().create(handler);
  factory.info('Welcome back');

  if (['sweetalert', 'pnotify'].includes(handler)) {
    return;
  }

  showNotifications([function () {
    return factory.error('Oops! Something went wrong!');
  }, function () {
    return factory.warning('Are you sure you want to proceed ?');
  }, function () {
    return factory.success('Data has been saved successfully!');
  }]);
}

/***/ }),

/***/ "./assets/js/adapter/sweetalert.js":
/*!*****************************************!*\
  !*** ./assets/js/adapter/sweetalert.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flasher_flasher_sweetalert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @flasher/flasher-sweetalert */ "./node_modules/@flasher/flasher-sweetalert/dist/index.js");
/* harmony import */ var _flasher_flasher_sweetalert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_flasher_flasher_sweetalert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _notification_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_notification.js */ "./assets/js/adapter/_notification.js");


(0,_notification_js__WEBPACK_IMPORTED_MODULE_1__.showNotificationsForHandler)('sweetalert');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_flasher_flasher_dist_index_js","vendors-node_modules_flasher_flasher-sweetalert_dist_index_js"], function() { return __webpack_exec__("./assets/js/adapter/sweetalert.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRhcHRlci9zd2VldGFsZXJ0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNDLGlCQUFULENBQTJCQyxhQUEzQixFQUEwQztFQUN0QyxJQUFJQSxhQUFhLENBQUNDLE1BQWQsS0FBeUIsQ0FBN0IsRUFBZ0M7SUFDNUI7RUFDSDs7RUFFREMsVUFBVSxDQUFDLFlBQU07SUFDYkYsYUFBYSxDQUFDLENBQUQsQ0FBYjtJQUNBRCxpQkFBaUIsQ0FBQ0MsYUFBYSxDQUFDRyxLQUFkLENBQW9CLENBQXBCLENBQUQsQ0FBakI7RUFDSCxDQUhTLEVBR1AsSUFITyxDQUFWO0FBSUg7O0FBRU0sU0FBU0MsMkJBQVQsQ0FBcUNDLE9BQXJDLEVBQThDO0VBQ2pELElBQU1DLE9BQU8sR0FBR1IsOERBQUEsQ0FBZU8sT0FBZixDQUFoQjtFQUVBQyxPQUFPLENBQUNFLElBQVIsQ0FBYSxjQUFiOztFQUVBLElBQUksQ0FBQyxZQUFELEVBQWUsU0FBZixFQUEwQkMsUUFBMUIsQ0FBbUNKLE9BQW5DLENBQUosRUFBaUQ7SUFDN0M7RUFDSDs7RUFFRE4saUJBQWlCLENBQUMsQ0FDZDtJQUFBLE9BQU1PLE9BQU8sQ0FBQ0ksS0FBUixDQUFjLDZCQUFkLENBQU47RUFBQSxDQURjLEVBRWQ7SUFBQSxPQUFNSixPQUFPLENBQUNLLE9BQVIsQ0FBZ0Isb0NBQWhCLENBQU47RUFBQSxDQUZjLEVBR2Q7SUFBQSxPQUFNTCxPQUFPLENBQUNNLE9BQVIsQ0FBZ0IsbUNBQWhCLENBQU47RUFBQSxDQUhjLENBQUQsQ0FBakI7QUFLSDs7Ozs7Ozs7Ozs7Ozs7QUMzQkQ7QUFDQTtBQUVBUiw2RUFBMkIsQ0FBQyxZQUFELENBQTNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkYXB0ZXIvX25vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRhcHRlci9zd2VldGFsZXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmbGFzaGVyIGZyb20gJ0BmbGFzaGVyL2ZsYXNoZXInO1xuXG5mdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9ucyhub3RpZmljYXRpb25zKSB7XG4gICAgaWYgKG5vdGlmaWNhdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbm90aWZpY2F0aW9uc1swXSgpO1xuICAgICAgICBzaG93Tm90aWZpY2F0aW9ucyhub3RpZmljYXRpb25zLnNsaWNlKDEpKTtcbiAgICB9LCAxNTAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb25zRm9ySGFuZGxlcihoYW5kbGVyKSB7XG4gICAgY29uc3QgZmFjdG9yeSA9IGZsYXNoZXIuY3JlYXRlKGhhbmRsZXIpO1xuXG4gICAgZmFjdG9yeS5pbmZvKCdXZWxjb21lIGJhY2snKTtcblxuICAgIGlmIChbJ3N3ZWV0YWxlcnQnLCAncG5vdGlmeSddLmluY2x1ZGVzKGhhbmRsZXIpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzaG93Tm90aWZpY2F0aW9ucyhbXG4gICAgICAgICgpID0+IGZhY3RvcnkuZXJyb3IoJ09vcHMhIFNvbWV0aGluZyB3ZW50IHdyb25nIScpLFxuICAgICAgICAoKSA9PiBmYWN0b3J5Lndhcm5pbmcoJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBwcm9jZWVkID8nKSxcbiAgICAgICAgKCkgPT4gZmFjdG9yeS5zdWNjZXNzKCdEYXRhIGhhcyBiZWVuIHNhdmVkIHN1Y2Nlc3NmdWxseSEnKSxcbiAgICBdKTtcbn1cbiIsImltcG9ydCAnQGZsYXNoZXIvZmxhc2hlci1zd2VldGFsZXJ0JztcbmltcG9ydCB7IHNob3dOb3RpZmljYXRpb25zRm9ySGFuZGxlciB9IGZyb20gJy4vX25vdGlmaWNhdGlvbi5qcyc7XG5cbnNob3dOb3RpZmljYXRpb25zRm9ySGFuZGxlcignc3dlZXRhbGVydCcpO1xuIl0sIm5hbWVzIjpbImZsYXNoZXIiLCJzaG93Tm90aWZpY2F0aW9ucyIsIm5vdGlmaWNhdGlvbnMiLCJsZW5ndGgiLCJzZXRUaW1lb3V0Iiwic2xpY2UiLCJzaG93Tm90aWZpY2F0aW9uc0ZvckhhbmRsZXIiLCJoYW5kbGVyIiwiZmFjdG9yeSIsImNyZWF0ZSIsImluZm8iLCJpbmNsdWRlcyIsImVycm9yIiwid2FybmluZyIsInN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9
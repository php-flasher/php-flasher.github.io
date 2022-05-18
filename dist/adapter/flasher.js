"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["adapter/flasher"],{

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

/***/ "./assets/js/adapter/flasher.js":
/*!**************************************!*\
  !*** ./assets/js/adapter/flasher.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notification_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_notification.js */ "./assets/js/adapter/_notification.js");

(0,_notification_js__WEBPACK_IMPORTED_MODULE_0__.showNotificationsForHandler)('flasher');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_flasher_flasher_dist_index_js"], function() { return __webpack_exec__("./assets/js/adapter/flasher.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRhcHRlci9mbGFzaGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNDLGlCQUFULENBQTJCQyxhQUEzQixFQUEwQztFQUN0QyxJQUFJQSxhQUFhLENBQUNDLE1BQWQsS0FBeUIsQ0FBN0IsRUFBZ0M7SUFDNUI7RUFDSDs7RUFFREMsVUFBVSxDQUFDLFlBQU07SUFDYkYsYUFBYSxDQUFDLENBQUQsQ0FBYjtJQUNBRCxpQkFBaUIsQ0FBQ0MsYUFBYSxDQUFDRyxLQUFkLENBQW9CLENBQXBCLENBQUQsQ0FBakI7RUFDSCxDQUhTLEVBR1AsSUFITyxDQUFWO0FBSUg7O0FBRU0sU0FBU0MsMkJBQVQsQ0FBcUNDLE9BQXJDLEVBQThDO0VBQ2pELElBQU1DLE9BQU8sR0FBR1IsOERBQUEsQ0FBZU8sT0FBZixDQUFoQjtFQUVBQyxPQUFPLENBQUNFLElBQVIsQ0FBYSxjQUFiOztFQUVBLElBQUksQ0FBQyxZQUFELEVBQWUsU0FBZixFQUEwQkMsUUFBMUIsQ0FBbUNKLE9BQW5DLENBQUosRUFBaUQ7SUFDN0M7RUFDSDs7RUFFRE4saUJBQWlCLENBQUMsQ0FDZDtJQUFBLE9BQU1PLE9BQU8sQ0FBQ0ksS0FBUixDQUFjLDZCQUFkLENBQU47RUFBQSxDQURjLEVBRWQ7SUFBQSxPQUFNSixPQUFPLENBQUNLLE9BQVIsQ0FBZ0Isb0NBQWhCLENBQU47RUFBQSxDQUZjLEVBR2Q7SUFBQSxPQUFNTCxPQUFPLENBQUNNLE9BQVIsQ0FBZ0IsbUNBQWhCLENBQU47RUFBQSxDQUhjLENBQUQsQ0FBakI7QUFLSDs7Ozs7Ozs7Ozs7O0FDM0JEO0FBRUFSLDZFQUEyQixDQUFDLFNBQUQsQ0FBM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRhcHRlci9fbm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZGFwdGVyL2ZsYXNoZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZsYXNoZXIgZnJvbSAnQGZsYXNoZXIvZmxhc2hlcic7XG5cbmZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb25zKG5vdGlmaWNhdGlvbnMpIHtcbiAgICBpZiAobm90aWZpY2F0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBub3RpZmljYXRpb25zWzBdKCk7XG4gICAgICAgIHNob3dOb3RpZmljYXRpb25zKG5vdGlmaWNhdGlvbnMuc2xpY2UoMSkpO1xuICAgIH0sIDE1MDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbnNGb3JIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gZmxhc2hlci5jcmVhdGUoaGFuZGxlcik7XG5cbiAgICBmYWN0b3J5LmluZm8oJ1dlbGNvbWUgYmFjaycpO1xuXG4gICAgaWYgKFsnc3dlZXRhbGVydCcsICdwbm90aWZ5J10uaW5jbHVkZXMoaGFuZGxlcikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNob3dOb3RpZmljYXRpb25zKFtcbiAgICAgICAgKCkgPT4gZmFjdG9yeS5lcnJvcignT29wcyEgU29tZXRoaW5nIHdlbnQgd3JvbmchJyksXG4gICAgICAgICgpID0+IGZhY3Rvcnkud2FybmluZygnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHByb2NlZWQgPycpLFxuICAgICAgICAoKSA9PiBmYWN0b3J5LnN1Y2Nlc3MoJ0RhdGEgaGFzIGJlZW4gc2F2ZWQgc3VjY2Vzc2Z1bGx5IScpLFxuICAgIF0pO1xufVxuIiwiaW1wb3J0IHsgc2hvd05vdGlmaWNhdGlvbnNGb3JIYW5kbGVyIH0gZnJvbSAnLi9fbm90aWZpY2F0aW9uLmpzJztcblxuc2hvd05vdGlmaWNhdGlvbnNGb3JIYW5kbGVyKCdmbGFzaGVyJylcbiJdLCJuYW1lcyI6WyJmbGFzaGVyIiwic2hvd05vdGlmaWNhdGlvbnMiLCJub3RpZmljYXRpb25zIiwibGVuZ3RoIiwic2V0VGltZW91dCIsInNsaWNlIiwic2hvd05vdGlmaWNhdGlvbnNGb3JIYW5kbGVyIiwiaGFuZGxlciIsImZhY3RvcnkiLCJjcmVhdGUiLCJpbmZvIiwiaW5jbHVkZXMiLCJlcnJvciIsIndhcm5pbmciLCJzdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==
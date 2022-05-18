"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["adapter/notyf"],{

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

/***/ "./assets/js/adapter/notyf.js":
/*!************************************!*\
  !*** ./assets/js/adapter/notyf.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flasher_flasher_notyf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @flasher/flasher-notyf */ "./node_modules/@flasher/flasher-notyf/dist/index.js");
/* harmony import */ var _flasher_flasher_notyf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_flasher_flasher_notyf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _notification_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_notification.js */ "./assets/js/adapter/_notification.js");


(0,_notification_js__WEBPACK_IMPORTED_MODULE_1__.showNotificationsForHandler)('notyf');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_flasher_flasher_dist_index_js","vendors-node_modules_flasher_flasher-notyf_dist_index_js"], function() { return __webpack_exec__("./assets/js/adapter/notyf.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRhcHRlci9ub3R5Zi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQyxpQkFBVCxDQUEyQkMsYUFBM0IsRUFBMEM7RUFDdEMsSUFBSUEsYUFBYSxDQUFDQyxNQUFkLEtBQXlCLENBQTdCLEVBQWdDO0lBQzVCO0VBQ0g7O0VBRURDLFVBQVUsQ0FBQyxZQUFNO0lBQ2JGLGFBQWEsQ0FBQyxDQUFELENBQWI7SUFDQUQsaUJBQWlCLENBQUNDLGFBQWEsQ0FBQ0csS0FBZCxDQUFvQixDQUFwQixDQUFELENBQWpCO0VBQ0gsQ0FIUyxFQUdQLElBSE8sQ0FBVjtBQUlIOztBQUVNLFNBQVNDLDJCQUFULENBQXFDQyxPQUFyQyxFQUE4QztFQUNqRCxJQUFNQyxPQUFPLEdBQUdSLDhEQUFBLENBQWVPLE9BQWYsQ0FBaEI7RUFFQUMsT0FBTyxDQUFDRSxJQUFSLENBQWEsY0FBYjs7RUFFQSxJQUFJLENBQUMsWUFBRCxFQUFlLFNBQWYsRUFBMEJDLFFBQTFCLENBQW1DSixPQUFuQyxDQUFKLEVBQWlEO0lBQzdDO0VBQ0g7O0VBRUROLGlCQUFpQixDQUFDLENBQ2Q7SUFBQSxPQUFNTyxPQUFPLENBQUNJLEtBQVIsQ0FBYyw2QkFBZCxDQUFOO0VBQUEsQ0FEYyxFQUVkO0lBQUEsT0FBTUosT0FBTyxDQUFDSyxPQUFSLENBQWdCLG9DQUFoQixDQUFOO0VBQUEsQ0FGYyxFQUdkO0lBQUEsT0FBTUwsT0FBTyxDQUFDTSxPQUFSLENBQWdCLG1DQUFoQixDQUFOO0VBQUEsQ0FIYyxDQUFELENBQWpCO0FBS0g7Ozs7Ozs7Ozs7Ozs7O0FDM0JEO0FBQ0E7QUFFQVIsNkVBQTJCLENBQUMsT0FBRCxDQUEzQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZGFwdGVyL19ub3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkYXB0ZXIvbm90eWYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZsYXNoZXIgZnJvbSAnQGZsYXNoZXIvZmxhc2hlcic7XG5cbmZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb25zKG5vdGlmaWNhdGlvbnMpIHtcbiAgICBpZiAobm90aWZpY2F0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBub3RpZmljYXRpb25zWzBdKCk7XG4gICAgICAgIHNob3dOb3RpZmljYXRpb25zKG5vdGlmaWNhdGlvbnMuc2xpY2UoMSkpO1xuICAgIH0sIDE1MDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbnNGb3JIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gZmxhc2hlci5jcmVhdGUoaGFuZGxlcik7XG5cbiAgICBmYWN0b3J5LmluZm8oJ1dlbGNvbWUgYmFjaycpO1xuXG4gICAgaWYgKFsnc3dlZXRhbGVydCcsICdwbm90aWZ5J10uaW5jbHVkZXMoaGFuZGxlcikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNob3dOb3RpZmljYXRpb25zKFtcbiAgICAgICAgKCkgPT4gZmFjdG9yeS5lcnJvcignT29wcyEgU29tZXRoaW5nIHdlbnQgd3JvbmchJyksXG4gICAgICAgICgpID0+IGZhY3Rvcnkud2FybmluZygnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHByb2NlZWQgPycpLFxuICAgICAgICAoKSA9PiBmYWN0b3J5LnN1Y2Nlc3MoJ0RhdGEgaGFzIGJlZW4gc2F2ZWQgc3VjY2Vzc2Z1bGx5IScpLFxuICAgIF0pO1xufVxuIiwiaW1wb3J0ICdAZmxhc2hlci9mbGFzaGVyLW5vdHlmJztcbmltcG9ydCB7IHNob3dOb3RpZmljYXRpb25zRm9ySGFuZGxlciB9IGZyb20gJy4vX25vdGlmaWNhdGlvbi5qcyc7XG5cbnNob3dOb3RpZmljYXRpb25zRm9ySGFuZGxlcignbm90eWYnKTtcbiJdLCJuYW1lcyI6WyJmbGFzaGVyIiwic2hvd05vdGlmaWNhdGlvbnMiLCJub3RpZmljYXRpb25zIiwibGVuZ3RoIiwic2V0VGltZW91dCIsInNsaWNlIiwic2hvd05vdGlmaWNhdGlvbnNGb3JIYW5kbGVyIiwiaGFuZGxlciIsImZhY3RvcnkiLCJjcmVhdGUiLCJpbmZvIiwiaW5jbHVkZXMiLCJlcnJvciIsIndhcm5pbmciLCJzdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==
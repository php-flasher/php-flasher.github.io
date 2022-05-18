"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["adapter/toastr"],{

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

/***/ "./assets/js/adapter/toastr.js":
/*!*************************************!*\
  !*** ./assets/js/adapter/toastr.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flasher_flasher_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @flasher/flasher-toastr */ "./node_modules/@flasher/flasher-toastr/dist/index.js");
/* harmony import */ var _flasher_flasher_toastr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_flasher_flasher_toastr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _notification_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_notification.js */ "./assets/js/adapter/_notification.js");


(0,_notification_js__WEBPACK_IMPORTED_MODULE_1__.showNotificationsForHandler)('toastr');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_flasher_flasher_dist_index_js","vendors-node_modules_flasher_flasher-toastr_dist_index_js"], function() { return __webpack_exec__("./assets/js/adapter/toastr.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRhcHRlci90b2FzdHIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0MsaUJBQVQsQ0FBMkJDLGFBQTNCLEVBQTBDO0VBQ3RDLElBQUlBLGFBQWEsQ0FBQ0MsTUFBZCxLQUF5QixDQUE3QixFQUFnQztJQUM1QjtFQUNIOztFQUVEQyxVQUFVLENBQUMsWUFBTTtJQUNiRixhQUFhLENBQUMsQ0FBRCxDQUFiO0lBQ0FELGlCQUFpQixDQUFDQyxhQUFhLENBQUNHLEtBQWQsQ0FBb0IsQ0FBcEIsQ0FBRCxDQUFqQjtFQUNILENBSFMsRUFHUCxJQUhPLENBQVY7QUFJSDs7QUFFTSxTQUFTQywyQkFBVCxDQUFxQ0MsT0FBckMsRUFBOEM7RUFDakQsSUFBTUMsT0FBTyxHQUFHUiw4REFBQSxDQUFlTyxPQUFmLENBQWhCO0VBRUFDLE9BQU8sQ0FBQ0UsSUFBUixDQUFhLGNBQWI7O0VBRUEsSUFBSSxDQUFDLFlBQUQsRUFBZSxTQUFmLEVBQTBCQyxRQUExQixDQUFtQ0osT0FBbkMsQ0FBSixFQUFpRDtJQUM3QztFQUNIOztFQUVETixpQkFBaUIsQ0FBQyxDQUNkO0lBQUEsT0FBTU8sT0FBTyxDQUFDSSxLQUFSLENBQWMsNkJBQWQsQ0FBTjtFQUFBLENBRGMsRUFFZDtJQUFBLE9BQU1KLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQixvQ0FBaEIsQ0FBTjtFQUFBLENBRmMsRUFHZDtJQUFBLE9BQU1MLE9BQU8sQ0FBQ00sT0FBUixDQUFnQixtQ0FBaEIsQ0FBTjtFQUFBLENBSGMsQ0FBRCxDQUFqQjtBQUtIOzs7Ozs7Ozs7Ozs7OztBQzNCRDtBQUNBO0FBRUFSLDZFQUEyQixDQUFDLFFBQUQsQ0FBM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRhcHRlci9fbm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZGFwdGVyL3RvYXN0ci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmxhc2hlciBmcm9tICdAZmxhc2hlci9mbGFzaGVyJztcblxuZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbnMobm90aWZpY2F0aW9ucykge1xuICAgIGlmIChub3RpZmljYXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG5vdGlmaWNhdGlvbnNbMF0oKTtcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbnMobm90aWZpY2F0aW9ucy5zbGljZSgxKSk7XG4gICAgfSwgMTUwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uc0ZvckhhbmRsZXIoaGFuZGxlcikge1xuICAgIGNvbnN0IGZhY3RvcnkgPSBmbGFzaGVyLmNyZWF0ZShoYW5kbGVyKTtcblxuICAgIGZhY3RvcnkuaW5mbygnV2VsY29tZSBiYWNrJyk7XG5cbiAgICBpZiAoWydzd2VldGFsZXJ0JywgJ3Bub3RpZnknXS5pbmNsdWRlcyhoYW5kbGVyKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2hvd05vdGlmaWNhdGlvbnMoW1xuICAgICAgICAoKSA9PiBmYWN0b3J5LmVycm9yKCdPb3BzISBTb21ldGhpbmcgd2VudCB3cm9uZyEnKSxcbiAgICAgICAgKCkgPT4gZmFjdG9yeS53YXJuaW5nKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcHJvY2VlZCA/JyksXG4gICAgICAgICgpID0+IGZhY3Rvcnkuc3VjY2VzcygnRGF0YSBoYXMgYmVlbiBzYXZlZCBzdWNjZXNzZnVsbHkhJyksXG4gICAgXSk7XG59XG4iLCJpbXBvcnQgJ0BmbGFzaGVyL2ZsYXNoZXItdG9hc3RyJztcbmltcG9ydCB7IHNob3dOb3RpZmljYXRpb25zRm9ySGFuZGxlciB9IGZyb20gJy4vX25vdGlmaWNhdGlvbi5qcyc7XG5cbnNob3dOb3RpZmljYXRpb25zRm9ySGFuZGxlcigndG9hc3RyJyk7XG4iXSwibmFtZXMiOlsiZmxhc2hlciIsInNob3dOb3RpZmljYXRpb25zIiwibm90aWZpY2F0aW9ucyIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJzbGljZSIsInNob3dOb3RpZmljYXRpb25zRm9ySGFuZGxlciIsImhhbmRsZXIiLCJmYWN0b3J5IiwiY3JlYXRlIiwiaW5mbyIsImluY2x1ZGVzIiwiZXJyb3IiLCJ3YXJuaW5nIiwic3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=
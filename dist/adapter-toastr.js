"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["adapter-toastr"],{

/***/ "./assets/js/adapter/_notification.js":
/*!********************************************!*\
  !*** ./assets/js/adapter/_notification.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showNotificationsForHandler": function() { return /* binding */ showNotificationsForHandler; }
/* harmony export */ });
/* harmony import */ var _flasher_flasher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @flasher/flasher */ "./node_modules/.pnpm/@flasher+flasher@1.0.11/node_modules/@flasher/flasher/dist/index.js");
/* harmony import */ var _flasher_flasher__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_flasher_flasher__WEBPACK_IMPORTED_MODULE_0__);

window.flasher = (_flasher_flasher__WEBPACK_IMPORTED_MODULE_0___default());

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
  console.warn(handler); // factory.info("Welcome back");
  // factory.error("Oops! Something went wrong!");
  // factory.warning("Are you sure you want to proceed ?");
  // factory.success("Data has been saved successfully!");

  if (["sweetalert", "pnotify"].includes(handler)) {
    return;
  }

  showNotifications([function () {
    return factory.info("Welcome back");
  }, function () {
    return factory.error("Oops! Something went wrong!");
  }, function () {
    return factory.warning("Are you sure you want to proceed ?");
  }, function () {
    return factory.success("Data has been saved successfully!");
  }]);
}

/***/ }),

/***/ "./assets/js/adapter/toastr.js":
/*!*************************************!*\
  !*** ./assets/js/adapter/toastr.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flasher_flasher_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @flasher/flasher-toastr */ "./node_modules/.pnpm/@flasher+flasher-toastr@1.0.11/node_modules/@flasher/flasher-toastr/dist/index.js");
/* harmony import */ var _flasher_flasher_toastr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_flasher_flasher_toastr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _notification_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_notification.js */ "./assets/js/adapter/_notification.js");


(0,_notification_js__WEBPACK_IMPORTED_MODULE_1__.showNotificationsForHandler)("toastr");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_pnpm_flasher_flasher_1_0_11_node_modules_flasher_flasher_dist_index_js","vendors-node_modules_pnpm_flasher_flasher-toastr_1_0_11_node_modules_flasher_flasher-toastr_d-0533f1"], function() { return __webpack_exec__("./assets/js/adapter/toastr.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRhcHRlci10b2FzdHIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQUMsTUFBTSxDQUFDRCxPQUFQLEdBQWlCQSx5REFBakI7O0FBRUEsU0FBU0UsaUJBQVQsQ0FBMkJDLGFBQTNCLEVBQTBDO0VBQ3RDLElBQUlBLGFBQWEsQ0FBQ0MsTUFBZCxLQUF5QixDQUE3QixFQUFnQztJQUM1QjtFQUNIOztFQUVEQyxVQUFVLENBQUMsWUFBTTtJQUNiRixhQUFhLENBQUMsQ0FBRCxDQUFiO0lBQ0FELGlCQUFpQixDQUFDQyxhQUFhLENBQUNHLEtBQWQsQ0FBb0IsQ0FBcEIsQ0FBRCxDQUFqQjtFQUNILENBSFMsRUFHUCxJQUhPLENBQVY7QUFJSDs7QUFFTSxTQUFTQywyQkFBVCxDQUFxQ0MsT0FBckMsRUFBOEM7RUFDakQsSUFBTUMsT0FBTyxHQUFHVCw4REFBQSxDQUFlUSxPQUFmLENBQWhCO0VBRUFHLE9BQU8sQ0FBQ0MsSUFBUixDQUFhSixPQUFiLEVBSGlELENBSWpEO0VBQ0E7RUFDQTtFQUNBOztFQUVBLElBQUksQ0FBQyxZQUFELEVBQWUsU0FBZixFQUEwQkssUUFBMUIsQ0FBbUNMLE9BQW5DLENBQUosRUFBaUQ7SUFDN0M7RUFDSDs7RUFFRE4saUJBQWlCLENBQUMsQ0FDZDtJQUFBLE9BQU1PLE9BQU8sQ0FBQ0ssSUFBUixDQUFhLGNBQWIsQ0FBTjtFQUFBLENBRGMsRUFFZDtJQUFBLE9BQU1MLE9BQU8sQ0FBQ00sS0FBUixDQUFjLDZCQUFkLENBQU47RUFBQSxDQUZjLEVBR2Q7SUFBQSxPQUFNTixPQUFPLENBQUNPLE9BQVIsQ0FBZ0Isb0NBQWhCLENBQU47RUFBQSxDQUhjLEVBSWQ7SUFBQSxPQUFNUCxPQUFPLENBQUNRLE9BQVIsQ0FBZ0IsbUNBQWhCLENBQU47RUFBQSxDQUpjLENBQUQsQ0FBakI7QUFNSDs7Ozs7Ozs7Ozs7Ozs7QUNsQ0Q7QUFDQTtBQUVBViw2RUFBMkIsQ0FBQyxRQUFELENBQTNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkYXB0ZXIvX25vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRhcHRlci90b2FzdHIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZsYXNoZXIgZnJvbSBcIkBmbGFzaGVyL2ZsYXNoZXJcIjtcblxud2luZG93LmZsYXNoZXIgPSBmbGFzaGVyO1xuXG5mdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9ucyhub3RpZmljYXRpb25zKSB7XG4gICAgaWYgKG5vdGlmaWNhdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbm90aWZpY2F0aW9uc1swXSgpO1xuICAgICAgICBzaG93Tm90aWZpY2F0aW9ucyhub3RpZmljYXRpb25zLnNsaWNlKDEpKTtcbiAgICB9LCAxNTAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb25zRm9ySGFuZGxlcihoYW5kbGVyKSB7XG4gICAgY29uc3QgZmFjdG9yeSA9IGZsYXNoZXIuY3JlYXRlKGhhbmRsZXIpO1xuXG4gICAgY29uc29sZS53YXJuKGhhbmRsZXIpXG4gICAgLy8gZmFjdG9yeS5pbmZvKFwiV2VsY29tZSBiYWNrXCIpO1xuICAgIC8vIGZhY3RvcnkuZXJyb3IoXCJPb3BzISBTb21ldGhpbmcgd2VudCB3cm9uZyFcIik7XG4gICAgLy8gZmFjdG9yeS53YXJuaW5nKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHByb2NlZWQgP1wiKTtcbiAgICAvLyBmYWN0b3J5LnN1Y2Nlc3MoXCJEYXRhIGhhcyBiZWVuIHNhdmVkIHN1Y2Nlc3NmdWxseSFcIik7XG5cbiAgICBpZiAoW1wic3dlZXRhbGVydFwiLCBcInBub3RpZnlcIl0uaW5jbHVkZXMoaGFuZGxlcikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNob3dOb3RpZmljYXRpb25zKFtcbiAgICAgICAgKCkgPT4gZmFjdG9yeS5pbmZvKFwiV2VsY29tZSBiYWNrXCIpLFxuICAgICAgICAoKSA9PiBmYWN0b3J5LmVycm9yKFwiT29wcyEgU29tZXRoaW5nIHdlbnQgd3JvbmchXCIpLFxuICAgICAgICAoKSA9PiBmYWN0b3J5Lndhcm5pbmcoXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcHJvY2VlZCA/XCIpLFxuICAgICAgICAoKSA9PiBmYWN0b3J5LnN1Y2Nlc3MoXCJEYXRhIGhhcyBiZWVuIHNhdmVkIHN1Y2Nlc3NmdWxseSFcIiksXG4gICAgXSk7XG59XG4iLCJpbXBvcnQgXCJAZmxhc2hlci9mbGFzaGVyLXRvYXN0clwiO1xuaW1wb3J0IHsgc2hvd05vdGlmaWNhdGlvbnNGb3JIYW5kbGVyIH0gZnJvbSBcIi4vX25vdGlmaWNhdGlvbi5qc1wiO1xuXG5zaG93Tm90aWZpY2F0aW9uc0ZvckhhbmRsZXIoXCJ0b2FzdHJcIik7XG4iXSwibmFtZXMiOlsiZmxhc2hlciIsIndpbmRvdyIsInNob3dOb3RpZmljYXRpb25zIiwibm90aWZpY2F0aW9ucyIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJzbGljZSIsInNob3dOb3RpZmljYXRpb25zRm9ySGFuZGxlciIsImhhbmRsZXIiLCJmYWN0b3J5IiwiY3JlYXRlIiwiY29uc29sZSIsIndhcm4iLCJpbmNsdWRlcyIsImluZm8iLCJlcnJvciIsIndhcm5pbmciLCJzdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==
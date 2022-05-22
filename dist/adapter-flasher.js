"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["adapter-flasher"],{

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

/***/ "./assets/js/adapter/flasher.js":
/*!**************************************!*\
  !*** ./assets/js/adapter/flasher.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notification_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_notification.js */ "./assets/js/adapter/_notification.js");

(0,_notification_js__WEBPACK_IMPORTED_MODULE_0__.showNotificationsForHandler)("flasher");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_pnpm_flasher_flasher_1_0_11_node_modules_flasher_flasher_dist_index_js"], function() { return __webpack_exec__("./assets/js/adapter/flasher.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRhcHRlci1mbGFzaGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUFDLE1BQU0sQ0FBQ0QsT0FBUCxHQUFpQkEseURBQWpCOztBQUVBLFNBQVNFLGlCQUFULENBQTJCQyxhQUEzQixFQUEwQztFQUN0QyxJQUFJQSxhQUFhLENBQUNDLE1BQWQsS0FBeUIsQ0FBN0IsRUFBZ0M7SUFDNUI7RUFDSDs7RUFFREMsVUFBVSxDQUFDLFlBQU07SUFDYkYsYUFBYSxDQUFDLENBQUQsQ0FBYjtJQUNBRCxpQkFBaUIsQ0FBQ0MsYUFBYSxDQUFDRyxLQUFkLENBQW9CLENBQXBCLENBQUQsQ0FBakI7RUFDSCxDQUhTLEVBR1AsSUFITyxDQUFWO0FBSUg7O0FBRU0sU0FBU0MsMkJBQVQsQ0FBcUNDLE9BQXJDLEVBQThDO0VBQ2pELElBQU1DLE9BQU8sR0FBR1QsOERBQUEsQ0FBZVEsT0FBZixDQUFoQjtFQUVBRyxPQUFPLENBQUNDLElBQVIsQ0FBYUosT0FBYixFQUhpRCxDQUlqRDtFQUNBO0VBQ0E7RUFDQTs7RUFFQSxJQUFJLENBQUMsWUFBRCxFQUFlLFNBQWYsRUFBMEJLLFFBQTFCLENBQW1DTCxPQUFuQyxDQUFKLEVBQWlEO0lBQzdDO0VBQ0g7O0VBRUROLGlCQUFpQixDQUFDLENBQ2Q7SUFBQSxPQUFNTyxPQUFPLENBQUNLLElBQVIsQ0FBYSxjQUFiLENBQU47RUFBQSxDQURjLEVBRWQ7SUFBQSxPQUFNTCxPQUFPLENBQUNNLEtBQVIsQ0FBYyw2QkFBZCxDQUFOO0VBQUEsQ0FGYyxFQUdkO0lBQUEsT0FBTU4sT0FBTyxDQUFDTyxPQUFSLENBQWdCLG9DQUFoQixDQUFOO0VBQUEsQ0FIYyxFQUlkO0lBQUEsT0FBTVAsT0FBTyxDQUFDUSxPQUFSLENBQWdCLG1DQUFoQixDQUFOO0VBQUEsQ0FKYyxDQUFELENBQWpCO0FBTUg7Ozs7Ozs7Ozs7OztBQ2xDRDtBQUVBViw2RUFBMkIsQ0FBQyxTQUFELENBQTNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkYXB0ZXIvX25vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRhcHRlci9mbGFzaGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmbGFzaGVyIGZyb20gXCJAZmxhc2hlci9mbGFzaGVyXCI7XG5cbndpbmRvdy5mbGFzaGVyID0gZmxhc2hlcjtcblxuZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbnMobm90aWZpY2F0aW9ucykge1xuICAgIGlmIChub3RpZmljYXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG5vdGlmaWNhdGlvbnNbMF0oKTtcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbnMobm90aWZpY2F0aW9ucy5zbGljZSgxKSk7XG4gICAgfSwgMTUwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uc0ZvckhhbmRsZXIoaGFuZGxlcikge1xuICAgIGNvbnN0IGZhY3RvcnkgPSBmbGFzaGVyLmNyZWF0ZShoYW5kbGVyKTtcblxuICAgIGNvbnNvbGUud2FybihoYW5kbGVyKVxuICAgIC8vIGZhY3RvcnkuaW5mbyhcIldlbGNvbWUgYmFja1wiKTtcbiAgICAvLyBmYWN0b3J5LmVycm9yKFwiT29wcyEgU29tZXRoaW5nIHdlbnQgd3JvbmchXCIpO1xuICAgIC8vIGZhY3Rvcnkud2FybmluZyhcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBwcm9jZWVkID9cIik7XG4gICAgLy8gZmFjdG9yeS5zdWNjZXNzKFwiRGF0YSBoYXMgYmVlbiBzYXZlZCBzdWNjZXNzZnVsbHkhXCIpO1xuXG4gICAgaWYgKFtcInN3ZWV0YWxlcnRcIiwgXCJwbm90aWZ5XCJdLmluY2x1ZGVzKGhhbmRsZXIpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzaG93Tm90aWZpY2F0aW9ucyhbXG4gICAgICAgICgpID0+IGZhY3RvcnkuaW5mbyhcIldlbGNvbWUgYmFja1wiKSxcbiAgICAgICAgKCkgPT4gZmFjdG9yeS5lcnJvcihcIk9vcHMhIFNvbWV0aGluZyB3ZW50IHdyb25nIVwiKSxcbiAgICAgICAgKCkgPT4gZmFjdG9yeS53YXJuaW5nKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHByb2NlZWQgP1wiKSxcbiAgICAgICAgKCkgPT4gZmFjdG9yeS5zdWNjZXNzKFwiRGF0YSBoYXMgYmVlbiBzYXZlZCBzdWNjZXNzZnVsbHkhXCIpLFxuICAgIF0pO1xufVxuIiwiaW1wb3J0IHsgc2hvd05vdGlmaWNhdGlvbnNGb3JIYW5kbGVyIH0gZnJvbSBcIi4vX25vdGlmaWNhdGlvbi5qc1wiO1xuXG5zaG93Tm90aWZpY2F0aW9uc0ZvckhhbmRsZXIoXCJmbGFzaGVyXCIpO1xuIl0sIm5hbWVzIjpbImZsYXNoZXIiLCJ3aW5kb3ciLCJzaG93Tm90aWZpY2F0aW9ucyIsIm5vdGlmaWNhdGlvbnMiLCJsZW5ndGgiLCJzZXRUaW1lb3V0Iiwic2xpY2UiLCJzaG93Tm90aWZpY2F0aW9uc0ZvckhhbmRsZXIiLCJoYW5kbGVyIiwiZmFjdG9yeSIsImNyZWF0ZSIsImNvbnNvbGUiLCJ3YXJuIiwiaW5jbHVkZXMiLCJpbmZvIiwiZXJyb3IiLCJ3YXJuaW5nIiwic3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=
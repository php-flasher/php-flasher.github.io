"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["adapter-notyf"],{

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

/***/ "./assets/js/adapter/notyf.js":
/*!************************************!*\
  !*** ./assets/js/adapter/notyf.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flasher_flasher_notyf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @flasher/flasher-notyf */ "./node_modules/.pnpm/@flasher+flasher-notyf@1.0.11/node_modules/@flasher/flasher-notyf/dist/index.js");
/* harmony import */ var _flasher_flasher_notyf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_flasher_flasher_notyf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _notification_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_notification.js */ "./assets/js/adapter/_notification.js");


(0,_notification_js__WEBPACK_IMPORTED_MODULE_1__.showNotificationsForHandler)("notyf");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_pnpm_flasher_flasher_1_0_11_node_modules_flasher_flasher_dist_index_js","vendors-node_modules_pnpm_flasher_flasher-notyf_1_0_11_node_modules_flasher_flasher-notyf_dis-138fd7"], function() { return __webpack_exec__("./assets/js/adapter/notyf.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRhcHRlci1ub3R5Zi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBQyxNQUFNLENBQUNELE9BQVAsR0FBaUJBLHlEQUFqQjs7QUFFQSxTQUFTRSxpQkFBVCxDQUEyQkMsYUFBM0IsRUFBMEM7RUFDdEMsSUFBSUEsYUFBYSxDQUFDQyxNQUFkLEtBQXlCLENBQTdCLEVBQWdDO0lBQzVCO0VBQ0g7O0VBRURDLFVBQVUsQ0FBQyxZQUFNO0lBQ2JGLGFBQWEsQ0FBQyxDQUFELENBQWI7SUFDQUQsaUJBQWlCLENBQUNDLGFBQWEsQ0FBQ0csS0FBZCxDQUFvQixDQUFwQixDQUFELENBQWpCO0VBQ0gsQ0FIUyxFQUdQLElBSE8sQ0FBVjtBQUlIOztBQUVNLFNBQVNDLDJCQUFULENBQXFDQyxPQUFyQyxFQUE4QztFQUNqRCxJQUFNQyxPQUFPLEdBQUdULDhEQUFBLENBQWVRLE9BQWYsQ0FBaEI7RUFFQUcsT0FBTyxDQUFDQyxJQUFSLENBQWFKLE9BQWIsRUFIaUQsQ0FJakQ7RUFDQTtFQUNBO0VBQ0E7O0VBRUEsSUFBSSxDQUFDLFlBQUQsRUFBZSxTQUFmLEVBQTBCSyxRQUExQixDQUFtQ0wsT0FBbkMsQ0FBSixFQUFpRDtJQUM3QztFQUNIOztFQUVETixpQkFBaUIsQ0FBQyxDQUNkO0lBQUEsT0FBTU8sT0FBTyxDQUFDSyxJQUFSLENBQWEsY0FBYixDQUFOO0VBQUEsQ0FEYyxFQUVkO0lBQUEsT0FBTUwsT0FBTyxDQUFDTSxLQUFSLENBQWMsNkJBQWQsQ0FBTjtFQUFBLENBRmMsRUFHZDtJQUFBLE9BQU1OLE9BQU8sQ0FBQ08sT0FBUixDQUFnQixvQ0FBaEIsQ0FBTjtFQUFBLENBSGMsRUFJZDtJQUFBLE9BQU1QLE9BQU8sQ0FBQ1EsT0FBUixDQUFnQixtQ0FBaEIsQ0FBTjtFQUFBLENBSmMsQ0FBRCxDQUFqQjtBQU1IOzs7Ozs7Ozs7Ozs7OztBQ2xDRDtBQUNBO0FBRUFWLDZFQUEyQixDQUFDLE9BQUQsQ0FBM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRhcHRlci9fbm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZGFwdGVyL25vdHlmLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmbGFzaGVyIGZyb20gXCJAZmxhc2hlci9mbGFzaGVyXCI7XG5cbndpbmRvdy5mbGFzaGVyID0gZmxhc2hlcjtcblxuZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbnMobm90aWZpY2F0aW9ucykge1xuICAgIGlmIChub3RpZmljYXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG5vdGlmaWNhdGlvbnNbMF0oKTtcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbnMobm90aWZpY2F0aW9ucy5zbGljZSgxKSk7XG4gICAgfSwgMTUwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uc0ZvckhhbmRsZXIoaGFuZGxlcikge1xuICAgIGNvbnN0IGZhY3RvcnkgPSBmbGFzaGVyLmNyZWF0ZShoYW5kbGVyKTtcblxuICAgIGNvbnNvbGUud2FybihoYW5kbGVyKVxuICAgIC8vIGZhY3RvcnkuaW5mbyhcIldlbGNvbWUgYmFja1wiKTtcbiAgICAvLyBmYWN0b3J5LmVycm9yKFwiT29wcyEgU29tZXRoaW5nIHdlbnQgd3JvbmchXCIpO1xuICAgIC8vIGZhY3Rvcnkud2FybmluZyhcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBwcm9jZWVkID9cIik7XG4gICAgLy8gZmFjdG9yeS5zdWNjZXNzKFwiRGF0YSBoYXMgYmVlbiBzYXZlZCBzdWNjZXNzZnVsbHkhXCIpO1xuXG4gICAgaWYgKFtcInN3ZWV0YWxlcnRcIiwgXCJwbm90aWZ5XCJdLmluY2x1ZGVzKGhhbmRsZXIpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzaG93Tm90aWZpY2F0aW9ucyhbXG4gICAgICAgICgpID0+IGZhY3RvcnkuaW5mbyhcIldlbGNvbWUgYmFja1wiKSxcbiAgICAgICAgKCkgPT4gZmFjdG9yeS5lcnJvcihcIk9vcHMhIFNvbWV0aGluZyB3ZW50IHdyb25nIVwiKSxcbiAgICAgICAgKCkgPT4gZmFjdG9yeS53YXJuaW5nKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHByb2NlZWQgP1wiKSxcbiAgICAgICAgKCkgPT4gZmFjdG9yeS5zdWNjZXNzKFwiRGF0YSBoYXMgYmVlbiBzYXZlZCBzdWNjZXNzZnVsbHkhXCIpLFxuICAgIF0pO1xufVxuIiwiaW1wb3J0IFwiQGZsYXNoZXIvZmxhc2hlci1ub3R5ZlwiO1xuaW1wb3J0IHsgc2hvd05vdGlmaWNhdGlvbnNGb3JIYW5kbGVyIH0gZnJvbSBcIi4vX25vdGlmaWNhdGlvbi5qc1wiO1xuXG5zaG93Tm90aWZpY2F0aW9uc0ZvckhhbmRsZXIoXCJub3R5ZlwiKTtcbiJdLCJuYW1lcyI6WyJmbGFzaGVyIiwid2luZG93Iiwic2hvd05vdGlmaWNhdGlvbnMiLCJub3RpZmljYXRpb25zIiwibGVuZ3RoIiwic2V0VGltZW91dCIsInNsaWNlIiwic2hvd05vdGlmaWNhdGlvbnNGb3JIYW5kbGVyIiwiaGFuZGxlciIsImZhY3RvcnkiLCJjcmVhdGUiLCJjb25zb2xlIiwid2FybiIsImluY2x1ZGVzIiwiaW5mbyIsImVycm9yIiwid2FybmluZyIsInN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9
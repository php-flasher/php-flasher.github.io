"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["adapter-noty"],{

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

/***/ "./assets/js/adapter/noty.js":
/*!***********************************!*\
  !*** ./assets/js/adapter/noty.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flasher_flasher_noty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @flasher/flasher-noty */ "./node_modules/.pnpm/@flasher+flasher-noty@1.0.11/node_modules/@flasher/flasher-noty/dist/index.js");
/* harmony import */ var _flasher_flasher_noty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_flasher_flasher_noty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _notification_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_notification.js */ "./assets/js/adapter/_notification.js");


(0,_notification_js__WEBPACK_IMPORTED_MODULE_1__.showNotificationsForHandler)("noty");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_pnpm_flasher_flasher_1_0_11_node_modules_flasher_flasher_dist_index_js","vendors-node_modules_pnpm_flasher_flasher-noty_1_0_11_node_modules_flasher_flasher-noty_dist_-b97ce6"], function() { return __webpack_exec__("./assets/js/adapter/noty.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRhcHRlci1ub3R5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUFDLE1BQU0sQ0FBQ0QsT0FBUCxHQUFpQkEseURBQWpCOztBQUVBLFNBQVNFLGlCQUFULENBQTJCQyxhQUEzQixFQUEwQztFQUN0QyxJQUFJQSxhQUFhLENBQUNDLE1BQWQsS0FBeUIsQ0FBN0IsRUFBZ0M7SUFDNUI7RUFDSDs7RUFFREMsVUFBVSxDQUFDLFlBQU07SUFDYkYsYUFBYSxDQUFDLENBQUQsQ0FBYjtJQUNBRCxpQkFBaUIsQ0FBQ0MsYUFBYSxDQUFDRyxLQUFkLENBQW9CLENBQXBCLENBQUQsQ0FBakI7RUFDSCxDQUhTLEVBR1AsSUFITyxDQUFWO0FBSUg7O0FBRU0sU0FBU0MsMkJBQVQsQ0FBcUNDLE9BQXJDLEVBQThDO0VBQ2pELElBQU1DLE9BQU8sR0FBR1QsOERBQUEsQ0FBZVEsT0FBZixDQUFoQjtFQUVBRyxPQUFPLENBQUNDLElBQVIsQ0FBYUosT0FBYixFQUhpRCxDQUlqRDtFQUNBO0VBQ0E7RUFDQTs7RUFFQSxJQUFJLENBQUMsWUFBRCxFQUFlLFNBQWYsRUFBMEJLLFFBQTFCLENBQW1DTCxPQUFuQyxDQUFKLEVBQWlEO0lBQzdDO0VBQ0g7O0VBRUROLGlCQUFpQixDQUFDLENBQ2Q7SUFBQSxPQUFNTyxPQUFPLENBQUNLLElBQVIsQ0FBYSxjQUFiLENBQU47RUFBQSxDQURjLEVBRWQ7SUFBQSxPQUFNTCxPQUFPLENBQUNNLEtBQVIsQ0FBYyw2QkFBZCxDQUFOO0VBQUEsQ0FGYyxFQUdkO0lBQUEsT0FBTU4sT0FBTyxDQUFDTyxPQUFSLENBQWdCLG9DQUFoQixDQUFOO0VBQUEsQ0FIYyxFQUlkO0lBQUEsT0FBTVAsT0FBTyxDQUFDUSxPQUFSLENBQWdCLG1DQUFoQixDQUFOO0VBQUEsQ0FKYyxDQUFELENBQWpCO0FBTUg7Ozs7Ozs7Ozs7Ozs7O0FDbENEO0FBQ0E7QUFFQVYsNkVBQTJCLENBQUMsTUFBRCxDQUEzQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZGFwdGVyL19ub3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkYXB0ZXIvbm90eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmxhc2hlciBmcm9tIFwiQGZsYXNoZXIvZmxhc2hlclwiO1xuXG53aW5kb3cuZmxhc2hlciA9IGZsYXNoZXI7XG5cbmZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb25zKG5vdGlmaWNhdGlvbnMpIHtcbiAgICBpZiAobm90aWZpY2F0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBub3RpZmljYXRpb25zWzBdKCk7XG4gICAgICAgIHNob3dOb3RpZmljYXRpb25zKG5vdGlmaWNhdGlvbnMuc2xpY2UoMSkpO1xuICAgIH0sIDE1MDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbnNGb3JIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gZmxhc2hlci5jcmVhdGUoaGFuZGxlcik7XG5cbiAgICBjb25zb2xlLndhcm4oaGFuZGxlcilcbiAgICAvLyBmYWN0b3J5LmluZm8oXCJXZWxjb21lIGJhY2tcIik7XG4gICAgLy8gZmFjdG9yeS5lcnJvcihcIk9vcHMhIFNvbWV0aGluZyB3ZW50IHdyb25nIVwiKTtcbiAgICAvLyBmYWN0b3J5Lndhcm5pbmcoXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcHJvY2VlZCA/XCIpO1xuICAgIC8vIGZhY3Rvcnkuc3VjY2VzcyhcIkRhdGEgaGFzIGJlZW4gc2F2ZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcblxuICAgIGlmIChbXCJzd2VldGFsZXJ0XCIsIFwicG5vdGlmeVwiXS5pbmNsdWRlcyhoYW5kbGVyKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2hvd05vdGlmaWNhdGlvbnMoW1xuICAgICAgICAoKSA9PiBmYWN0b3J5LmluZm8oXCJXZWxjb21lIGJhY2tcIiksXG4gICAgICAgICgpID0+IGZhY3RvcnkuZXJyb3IoXCJPb3BzISBTb21ldGhpbmcgd2VudCB3cm9uZyFcIiksXG4gICAgICAgICgpID0+IGZhY3Rvcnkud2FybmluZyhcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBwcm9jZWVkID9cIiksXG4gICAgICAgICgpID0+IGZhY3Rvcnkuc3VjY2VzcyhcIkRhdGEgaGFzIGJlZW4gc2F2ZWQgc3VjY2Vzc2Z1bGx5IVwiKSxcbiAgICBdKTtcbn1cbiIsImltcG9ydCBcIkBmbGFzaGVyL2ZsYXNoZXItbm90eVwiO1xuaW1wb3J0IHsgc2hvd05vdGlmaWNhdGlvbnNGb3JIYW5kbGVyIH0gZnJvbSBcIi4vX25vdGlmaWNhdGlvbi5qc1wiO1xuXG5zaG93Tm90aWZpY2F0aW9uc0ZvckhhbmRsZXIoXCJub3R5XCIpO1xuIl0sIm5hbWVzIjpbImZsYXNoZXIiLCJ3aW5kb3ciLCJzaG93Tm90aWZpY2F0aW9ucyIsIm5vdGlmaWNhdGlvbnMiLCJsZW5ndGgiLCJzZXRUaW1lb3V0Iiwic2xpY2UiLCJzaG93Tm90aWZpY2F0aW9uc0ZvckhhbmRsZXIiLCJoYW5kbGVyIiwiZmFjdG9yeSIsImNyZWF0ZSIsImNvbnNvbGUiLCJ3YXJuIiwiaW5jbHVkZXMiLCJpbmZvIiwiZXJyb3IiLCJ3YXJuaW5nIiwic3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=
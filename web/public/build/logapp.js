"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["logapp"],{

/***/ "./assets/pages/LogIn.js":
/*!*******************************!*\
  !*** ./assets/pages/LogIn.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // import css from "../styles/login.module.css";

function LogIn() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("body", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container",
    id: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-container log-in-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    action: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    placeholder: "User name/Email"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    placeholder: "Password"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#"
  }, "If you are new Please signup?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Log In"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "overlay-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "overlay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "overlay-panel overlay-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Farmer login from here"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "So we can put some instruction for the farmer bls bla bla . . ."))))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogIn);

/***/ }),

/***/ "./assets/pages/LoginFunct.js":
/*!************************************!*\
  !*** ./assets/pages/LoginFunct.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _LogIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LogIn */ "./assets/pages/LogIn.js");
/* harmony import */ var _LoginTwig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoginTwig */ "./assets/pages/LoginTwig.js");

 // import "../bootstrap";
// import "../Main";


 // function LoginFunct() {
//   return (
//     <body>
//       <div>
//         <h1>From LoginFunct</h1>
//       </div>
//     </body>
//   );
// }
// export default LoginFunct;
// const root = ReactDOM.createRoot(document.getElementById("logapp"));

var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("logapp"));
root.render(
/*#__PURE__*/
//   <LoginFunct />
react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LoginTwig__WEBPACK_IMPORTED_MODULE_3__["default"], null))); // const loginlogin = ReactDOM.createRoot(document.getElementById("loginlogin"));
// loginlogin.render(<LoginFunct />);

/***/ }),

/***/ "./assets/pages/LoginTwig.js":
/*!***********************************!*\
  !*** ./assets/pages/LoginTwig.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function LoginTwig() {
  return (
    /*#__PURE__*/
    // <body>
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "loginbody"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "logincontainer",
      id: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "loginform-container log-in-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
      className: "loginform",
      action: "#"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      className: "logininput",
      type: "email",
      placeholder: "User name/Email"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      className: "logininput",
      type: "password",
      placeholder: "Password"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "#"
    }, "If you are new Please signup?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Log In"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "loginoverlay-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "loginoverlay"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "loginoverlay-panel loginoverlay-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Farmer login from here"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "So we can put some instruction for the farmer bls bla bla . . .")))))) // </body>

  );
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginTwig);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-dom_client_js"], () => (__webpack_exec__("./assets/pages/LoginFunct.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUVBLFNBQVNDLEtBQVQsR0FBaUI7RUFDZixvQkFDRSxzRkFDRTtJQUFLLFNBQVMsRUFBQyxXQUFmO0lBQTJCLEVBQUUsRUFBQztFQUE5QixnQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFO0lBQU0sTUFBTSxFQUFDO0VBQWIsZ0JBQ0UsK0VBREYsZUFHRTtJQUFPLElBQUksRUFBQyxPQUFaO0lBQW9CLFdBQVcsRUFBQztFQUFoQyxFQUhGLGVBSUU7SUFBTyxJQUFJLEVBQUMsVUFBWjtJQUF1QixXQUFXLEVBQUM7RUFBbkMsRUFKRixlQUtFO0lBQUcsSUFBSSxFQUFDO0VBQVIsbUNBTEYsZUFNRSxvRkFORixDQURGLENBREYsZUFXRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0U7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDRSxnR0FERixlQUVFLHdJQUZGLENBREYsQ0FERixDQVhGLENBREYsQ0FERjtBQXdCRDs7QUFFRCxpRUFBZUEsS0FBZjs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtDQUVBO0FBQ0E7O0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUNBLElBQU1HLElBQUksR0FBR0Ysd0RBQUEsQ0FBb0JJLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFwQixDQUFiO0FBQ0FILElBQUksQ0FBQ0ksTUFBTDtBQUFBO0FBQ0U7QUFDQSwyREFBQyx5REFBRCxxQkFFRSwyREFBQyxrREFBRCxPQUZGLENBRkYsR0FTQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBOztBQUVBLFNBQVNMLFNBQVQsR0FBcUI7RUFDbkI7SUFBQTtJQUNFO0lBQ0E7TUFBSyxTQUFTLEVBQUM7SUFBZixnQkFDRTtNQUFLLFNBQVMsRUFBQyxnQkFBZjtNQUFnQyxFQUFFLEVBQUM7SUFBbkMsZ0JBQ0U7TUFBSyxTQUFTLEVBQUM7SUFBZixnQkFDRTtNQUFNLFNBQVMsRUFBQyxXQUFoQjtNQUE0QixNQUFNLEVBQUM7SUFBbkMsZ0JBQ0UsK0VBREYsZUFHRTtNQUFPLFNBQVMsRUFBQyxZQUFqQjtNQUE4QixJQUFJLEVBQUMsT0FBbkM7TUFBMkMsV0FBVyxFQUFDO0lBQXZELEVBSEYsZUFJRTtNQUFPLFNBQVMsRUFBQyxZQUFqQjtNQUE4QixJQUFJLEVBQUMsVUFBbkM7TUFBOEMsV0FBVyxFQUFDO0lBQTFELEVBSkYsZUFLRTtNQUFHLElBQUksRUFBQztJQUFSLG1DQUxGLGVBTUUsb0ZBTkYsQ0FERixDQURGLGVBV0U7TUFBSyxTQUFTLEVBQUM7SUFBZixnQkFDRTtNQUFLLFNBQVMsRUFBQztJQUFmLGdCQUNFO01BQUssU0FBUyxFQUFDO0lBQWYsZ0JBQ0UsZ0dBREYsZUFFRSx3SUFGRixDQURGLENBREYsQ0FYRixDQURGLENBRkYsQ0F3QkU7O0VBeEJGO0FBMEJEOztBQUVELGlFQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0xvZ0luLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Mb2dpbkZ1bmN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Mb2dpblR3aWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3R5bGVzL2xvZ2luLm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gTG9nSW4oKSB7XG4gIHJldHVybiAoXG4gICAgPGJvZHk+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIGlkPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXIgbG9nLWluLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIj5cbiAgICAgICAgICAgIDxoMT5Mb2dpbjwvaDE+XG5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIlVzZXIgbmFtZS9FbWFpbFwiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIC8+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPklmIHlvdSBhcmUgbmV3IFBsZWFzZSBzaWdudXA/PC9hPlxuICAgICAgICAgICAgPGJ1dHRvbj5Mb2cgSW48L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXktY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXktcGFuZWwgb3ZlcmxheS1yaWdodFwiPlxuICAgICAgICAgICAgICA8aDE+RmFybWVyIGxvZ2luIGZyb20gaGVyZTwvaDE+XG4gICAgICAgICAgICAgIDxwPlNvIHdlIGNhbiBwdXQgc29tZSBpbnN0cnVjdGlvbiBmb3IgdGhlIGZhcm1lciBibHMgYmxhIGJsYSAuIC4gLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvYm9keT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9nSW47XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbi8vIGltcG9ydCBcIi4uL2Jvb3RzdHJhcFwiO1xuLy8gaW1wb3J0IFwiLi4vTWFpblwiO1xuaW1wb3J0IExvZ0luIGZyb20gXCIuL0xvZ0luXCI7XG5pbXBvcnQgTG9naW5Ud2lnIGZyb20gXCIuL0xvZ2luVHdpZ1wiO1xuXG4vLyBmdW5jdGlvbiBMb2dpbkZ1bmN0KCkge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxib2R5PlxuLy8gICAgICAgPGRpdj5cbi8vICAgICAgICAgPGgxPkZyb20gTG9naW5GdW5jdDwvaDE+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8L2JvZHk+XG4vLyAgICk7XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IExvZ2luRnVuY3Q7XG5cbi8vIGNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nYXBwXCIpKTtcbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nYXBwXCIpKTtcbnJvb3QucmVuZGVyKFxuICAvLyAgIDxMb2dpbkZ1bmN0IC8+XG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIHsvKiA8TWFpbiAvPiAqL31cbiAgICA8TG9naW5Ud2lnIC8+XG4gICAgey8qIDw+VEVTVDwvPiAqL31cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuKTtcblxuLy8gY29uc3QgbG9naW5sb2dpbiA9IFJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbmxvZ2luXCIpKTtcbi8vIGxvZ2lubG9naW4ucmVuZGVyKDxMb2dpbkZ1bmN0IC8+KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gTG9naW5Ud2lnKCkge1xuICByZXR1cm4gKFxuICAgIC8vIDxib2R5PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5ib2R5XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luY29udGFpbmVyXCIgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbmZvcm0tY29udGFpbmVyIGxvZy1pbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJsb2dpbmZvcm1cIiBhY3Rpb249XCIjXCI+XG4gICAgICAgICAgICA8aDE+TG9naW48L2gxPlxuXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibG9naW5pbnB1dFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiVXNlciBuYW1lL0VtYWlsXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJsb2dpbmlucHV0XCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIC8+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPklmIHlvdSBhcmUgbmV3IFBsZWFzZSBzaWdudXA/PC9hPlxuICAgICAgICAgICAgPGJ1dHRvbj5Mb2cgSW48L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2lub3ZlcmxheS1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2lub3ZlcmxheVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbm92ZXJsYXktcGFuZWwgbG9naW5vdmVybGF5LXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxoMT5GYXJtZXIgbG9naW4gZnJvbSBoZXJlPC9oMT5cbiAgICAgICAgICAgICAgPHA+U28gd2UgY2FuIHB1dCBzb21lIGluc3RydWN0aW9uIGZvciB0aGUgZmFybWVyIGJscyBibGEgYmxhIC4gLiAuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgLy8gPC9ib2R5PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpblR3aWc7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMb2dJbiIsIlJlYWN0RE9NIiwiTG9naW5Ud2lnIiwicm9vdCIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);



/***/ }),

/***/ "./assets/Main.js":
/*!************************!*\
  !*** ./assets/Main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Home */ "./assets/pages/Home.js");
/* harmony import */ var _assets_components_ui_components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/components/ui_components/Navbar */ "./assets/components/ui_components/Navbar.js");
/* harmony import */ var _assets_pages_SingleProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/pages/SingleProduct */ "./assets/pages/SingleProduct.js");
/* harmony import */ var _assets_pages_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/pages/Profile */ "./assets/pages/Profile.js");
/* harmony import */ var _assets_pages_Cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/pages/Cart */ "./assets/pages/Cart.js");
/* harmony import */ var _assets_pages_CheckOut__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/pages/CheckOut */ "./assets/pages/CheckOut.js");
/* harmony import */ var _assets_components_ui_components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/components/ui_components/Footer */ "./assets/components/ui_components/Footer.js");
/* harmony import */ var _pages_LogIn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/LogIn */ "./assets/pages/LogIn.js");
/* harmony import */ var _pages_SignUp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/SignUp */ "./assets/pages/SignUp.js");



 // import css from "./styles/main.module.css";










function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_components_ui_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/:productId",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_SingleProduct__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/profile",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_Profile__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/cart",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_Cart__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/cart/checkout",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_CheckOut__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_LogIn__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/login/signup",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_SignUp__WEBPACK_IMPORTED_MODULE_10__["default"], null)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_components_ui_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], null));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);
var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("app"));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Main, null), ","));

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main */ "./assets/Main.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // import "./styles/main.module.css";
// import "./styles/pages.module.css";
// import "./styles/footer.module.css";
// import "./styles/navbar.module.css";
// import "./styles/producCard.module.css";
// start the Stimulus application




/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/components/ui_components/Footer.js":
/*!***************************************************!*\
  !*** ./assets/components/ui_components/Footer.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // import css from "./footer.module.css";

function Footer() {
  // return <div className={css.footerContainer}>legal stuf and conctact links</div>;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footerContainer"
  }, "legal stuf and conctact links");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./assets/components/ui_components/Navbar.js":
/*!***************************************************!*\
  !*** ./assets/components/ui_components/Navbar.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");

 // import css from './navbar.module.css';

function Navbar() {
  return (
    /*#__PURE__*/
    // <div className={css.navContainer}>
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "navContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "logoContainer"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
      className: "navPanel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/"
    }, " Home ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/profile"
    }, " Profile ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/cart"
    }, " Cart ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/login"
    }, " Log in ")))))
  );
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./assets/components/ui_components/ProductCard.js":
/*!********************************************************!*\
  !*** ./assets/components/ui_components/ProductCard.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
 // import css from './producCard.module.css';



function ProductCard(_ref) {
  var productName = _ref.productName,
      shortDescription = _ref.shortDescription,
      totalAmount = _ref.totalAmount,
      units = _ref.units,
      productPrice = _ref.productPrice,
      _ref$imageUrl = _ref.imageUrl,
      imageUrl = _ref$imageUrl === void 0 ? null : _ref$imageUrl;
  var image = imageUrl ? imageUrl : "no image available";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "productCard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "productImage"
  }, image), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "productBodyContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "productName"
  }, " ", productName, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "shortDescription"
  }, shortDescription, ". ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "In storage:", totalAmount, units), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cardFooter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/:productId"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "seeMore"
  }, "see more")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "addToCartBtn"
  }, " ", "add", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "productPrice"
  }, productPrice, "\u20AC/", units))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard); //productName
//shortDescription
//description
//totalAmount
//units
//image
//id

/***/ }),

/***/ "./assets/pages/Cart.js":
/*!******************************!*\
  !*** ./assets/pages/Cart.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // import css from "../styles/pages.module.css";

function Cart() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pageContainer"
  }, "Cart");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

/***/ }),

/***/ "./assets/pages/CheckOut.js":
/*!**********************************!*\
  !*** ./assets/pages/CheckOut.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CheckOut() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "CheckOut");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckOut);

/***/ }),

/***/ "./assets/pages/Home.js":
/*!******************************!*\
  !*** ./assets/pages/Home.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_ui_components_ProductCard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/ui_components/ProductCard */ "./assets/components/ui_components/ProductCard.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // import css from "../styles/pages.module.css";



function Home() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      products = _useState2[0],
      setProducts = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      search = _useState4[0],
      setSearch = _useState4[1]; //dummy axios
  //const getProducts = () => axios.get('http://localhost:3001/products');


  var getProducts = function getProducts() {
    return [{
      productName: "RICE",
      shortDescription: "a very good rice",
      description: "this product was seeded and farmed in the local farms of helsinki, the minimun tu buy is 1kg",
      totalAmount: 100,
      units: "kg",
      productPrice: 1.55,
      image: null,
      id: 1
    }, {
      productName: "potatoes",
      shortDescription: "this potatos are the best",
      description: "try my potatoes and you will fall inlove for first time with a potato",
      totalAmount: 20,
      units: "kg",
      productPrice: 2.25,
      image: null,
      id: 2
    }, {
      productName: "zuccini",
      shortDescription: "the perfect size of a zuccini",
      description: "combine this zuccini with vaseline, condom and a bottle of wine then find out what climax is",
      totalAmount: 10,
      units: "unit",
      productPrice: 0.99,
      image: null,
      id: 3
    }, {
      productName: "carrots",
      shortDescription: "very good for eyes health",
      description: "Have you ever seen a bunny with glasses?! if you are not a doctor or a biologist dont comment",
      totalAmount: 200,
      units: "bunch",
      productPrice: 5.99,
      image: null,
      id: 4
    }, {
      productName: "punkin",
      shortDescription: "try my punkin",
      description: "just dont be a coward an buy my punkin",
      totalAmount: 1,
      units: "unit",
      productPrice: 100,
      image: null,
      id: 5
    }, {
      productName: "tomatoes",
      shortDescription: "in red and yellow",
      description: "a salad witout tomatoes is like a a battle cruise armada ship without serial number",
      totalAmount: 50,
      units: "pound",
      productPrice: 0.65,
      image: null,
      id: 6
    }, {
      productName: "eggplant",
      shortDescription: "funny name but tasty veggy",
      description: "make the best jokes about eggplants with this beauties of vegetables",
      totalAmount: 20,
      units: "unit",
      productPrice: 2,
      image: null,
      id: 7
    }, {
      productName: "faba beans",
      shortDescription: "get this organic jewels",
      description: "get the beans and grow a magic tree in your back yard",
      totalAmount: 3,
      units: "bean",
      productPrice: 99.99,
      image: null,
      id: 8
    }, {
      productName: "cucumber",
      shortDescription: "the perfect size of a cucumber",
      description: "combine this cucumber with vaseline, condom and a bottle of wine then find out what climax is",
      totalAmount: 10,
      units: "unit",
      productPrice: 10.99,
      image: null,
      id: 9
    }, {
      productName: "lettuce",
      shortDescription: "fres as a lettuce",
      description: "is so fresh you cant say no ",
      totalAmount: 10,
      units: "unit",
      productPrice: 10.99,
      image: null,
      id: 10
    }, {
      productName: "couliflower",
      shortDescription: "weird and delicious",
      description: "you bet they are the weirdest",
      totalAmount: 10,
      units: "unit",
      productPrice: 10.99,
      image: null,
      id: 11
    }, {
      productName: "onions",
      shortDescription: "wanna cry.. of happiness",
      description: "with more crying power that the competitors's",
      totalAmount: 10,
      units: "kg",
      productPrice: 10.99,
      image: null,
      id: 12
    }, {
      productName: "chilli",
      shortDescription: "feel the pain",
      description: "garantee: you will taste it today and tomorrow morning",
      totalAmount: 10,
      units: "g",
      productPrice: 10.99,
      image: null,
      id: 13
    }, {
      productName: "beetroot",
      shortDescription: "very purple",
      description: "if purpleness is the messure this are the kings",
      totalAmount: 15,
      units: "3 units",
      productPrice: 0.99,
      image: null,
      id: 14
    }, {
      productName: "chick peas",
      shortDescription: "already cooked",
      description: "you only need to serve them",
      totalAmount: 10,
      units: "kg",
      productPrice: 20.99,
      image: null,
      id: 15
    }, {
      productName: "brussel sprows",
      shortDescription: "terrible taste but very healthy",
      description: "Trivia: did you know that brussels sprows are not from brussels",
      totalAmount: 10,
      units: "kg",
      productPrice: 10.99,
      image: null,
      id: 16
    }, {
      productName: "brocoli",
      shortDescription: "a tree looking veggie",
      description: "this are brought from the far far mellumaki",
      totalAmount: 10,
      units: "kg",
      productPrice: 10.99,
      image: null,
      id: 17
    }, {
      productName: "spinach",
      shortDescription: "popeye food",
      description: "if you want to rescue your lady from brutus you gotta eat this",
      totalAmount: 10,
      units: "g",
      productPrice: 10.99,
      image: null,
      id: 18
    }, {
      productName: "garlic",
      shortDescription: "ideal vs vampires",
      description: "its known that vampires dont eat garlic cause the bad breath it leaves after",
      totalAmount: 10,
      units: "g",
      productPrice: 1.99,
      image: null,
      id: 19
    }];
  };

  var productFilter = products.filter(function (res) {
    return res.productName.toLowerCase().includes(search.toLowerCase());
  });

  var searchHandler = function searchHandler(e) {
    setSearch(e.target.value);
    console.log(search);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    setProducts(getProducts()); //use axios to get the data from database:
  }, []);
  return (
    /*#__PURE__*/
    // <div className={css.pageContainer}>
    react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
      className: "pageContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h1", null, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
      className: "search"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("input", {
      type: "text",
      placeholder: "\uD83D\uDD0D",
      onChange: searchHandler
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
      className: "browser"
    }, productFilter.map(function (product) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_components_ui_components_ProductCard__WEBPACK_IMPORTED_MODULE_19__["default"], _extends({
        key: product.id
      }, product));
    })))
  );
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./assets/pages/LogIn.js":
/*!*******************************!*\
  !*** ./assets/pages/LogIn.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/login.module.css */ "./assets/styles/login.module.css");



function LogIn() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].container,
    id: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-container log-in-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    action: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    placeholder: "Email"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    placeholder: "Password"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#"
  }, "Forgot your password?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Log In"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "overlay-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "overlay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "overlay-panel overlay-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Seller or Farmer login/signup from here"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "So we can put some instruction for the sellers.")))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogIn);

/***/ }),

/***/ "./assets/pages/Profile.js":
/*!*********************************!*\
  !*** ./assets/pages/Profile.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // import css from "../styles/pages.module.css";

function Profile() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pageContainer"
  }, "Profile");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

/***/ }),

/***/ "./assets/pages/SignUp.js":
/*!********************************!*\
  !*** ./assets/pages/SignUp.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function SignUp() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "SignUp");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);

/***/ }),

/***/ "./assets/pages/SingleProduct.js":
/*!***************************************!*\
  !*** ./assets/pages/SingleProduct.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");

 // import css from "../styles/pages.module.css";

function SingleProduct() {
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  var product = location.state.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pageContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, product.productName), "SingleProduct Name");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleProduct);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/login.module.css":
/*!****************************************!*\
  !*** ./assets/styles/login.module.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-2a1692"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxFQUFDO0VBQWYsZ0JBQ0UsaUhBREYsZUFFRSx3SEFGRixDQURGLENBREYsQ0FYRixDQURGO0FBc0JEOztBQUVELGlFQUFlM0MsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0MzQkE7O0FBQ0EsU0FBU0osT0FBVCxHQUFtQjtFQUNqQixvQkFBTztJQUFLLFNBQVMsRUFBQztFQUFmLGFBQVA7QUFDRDs7QUFFRCxpRUFBZUEsT0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQSxTQUFTSyxNQUFULEdBQWtCO0VBQ2hCLG9CQUNFLGlGQURGO0FBR0Q7O0FBRUQsaUVBQWVBLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0NBRUE7O0FBRUEsU0FBU04sYUFBVCxHQUF5QjtFQUN2QixJQUFNbUQsUUFBUSxHQUFHRCw2REFBVyxFQUE1QjtFQUNBLElBQU1ILE9BQU8sR0FBR0ksUUFBUSxDQUFDQyxLQUFULENBQWVDLElBQS9CO0VBQ0Esb0JBQ0U7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDRSx1RUFBS04sT0FBTyxDQUFDNUIsV0FBYixDQURGLHVCQURGO0FBTUQ7O0FBRUQsaUVBQWVuQixhQUFmOzs7Ozs7Ozs7Ozs7QUNmQTs7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvTmF2YmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvUHJvZHVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0NoZWNrT3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Ib21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Mb2dJbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvUHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvU2lnblVwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9TaW5nbGVQcm9kdWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2xvZ2luLm1vZHVsZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZXMsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL3BhZ2VzL0hvbWVcIjtcbi8vIGltcG9ydCBjc3MgZnJvbSBcIi4vc3R5bGVzL21haW4ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vYXNzZXRzL2NvbXBvbmVudHMvdWlfY29tcG9uZW50cy9OYXZiYXJcIjtcblxuaW1wb3J0IFNpbmdsZVByb2R1Y3QgZnJvbSBcIi4uL2Fzc2V0cy9wYWdlcy9TaW5nbGVQcm9kdWN0XCI7XG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vYXNzZXRzL3BhZ2VzL1Byb2ZpbGVcIjtcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9hc3NldHMvcGFnZXMvQ2FydFwiO1xuaW1wb3J0IENoZWNrT3V0IGZyb20gXCIuLi9hc3NldHMvcGFnZXMvQ2hlY2tPdXRcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgTG9nSW4gZnJvbSBcIi4vcGFnZXMvTG9nSW5cIjtcbmltcG9ydCBTaWduVXAgZnJvbSBcIi4vcGFnZXMvU2lnblVwXCI7XG5cbmZ1bmN0aW9uIE1haW4oKSB7XG4gIHJldHVybiAoXG4gICAgPFJvdXRlcj5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxSb3V0ZXM+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lIC8+fT5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgIDwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiLzpwcm9kdWN0SWRcIiBlbGVtZW50PXs8U2luZ2xlUHJvZHVjdCAvPn0+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9maWxlXCIgZWxlbWVudD17PFByb2ZpbGUgLz59PlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvY2FydFwiIGVsZW1lbnQ9ezxDYXJ0IC8+fT5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgIDwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NhcnQvY2hlY2tvdXRcIiBlbGVtZW50PXs8Q2hlY2tPdXQgLz59PlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBlbGVtZW50PXs8TG9nSW4vPn0+PC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW4vc2lnbnVwXCIgZWxlbWVudD17PFNpZ25VcC8+fT48L1JvdXRlPlxuICAgICAgPC9Sb3V0ZXM+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9Sb3V0ZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG5cbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcbnJvb3QucmVuZGVyKFxuICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICA8TWFpbiAvPixcbiAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuKTtcbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgXCIuL3N0eWxlcy9hcHAuY3NzXCI7XG4vLyBpbXBvcnQgXCIuL3N0eWxlcy9tYWluLm1vZHVsZS5jc3NcIjtcbi8vIGltcG9ydCBcIi4vc3R5bGVzL3BhZ2VzLm1vZHVsZS5jc3NcIjtcbi8vIGltcG9ydCBcIi4vc3R5bGVzL2Zvb3Rlci5tb2R1bGUuY3NzXCI7XG4vLyBpbXBvcnQgXCIuL3N0eWxlcy9uYXZiYXIubW9kdWxlLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9zdHlsZXMvcHJvZHVjQ2FyZC5tb2R1bGUuY3NzXCI7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0IFwiLi9ib290c3RyYXBcIjtcblxuaW1wb3J0IFwiLi9NYWluXCI7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBjc3MgZnJvbSBcIi4vZm9vdGVyLm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gRm9vdGVyKCkge1xuICAvLyByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2Nzcy5mb290ZXJDb250YWluZXJ9PmxlZ2FsIHN0dWYgYW5kIGNvbmN0YWN0IGxpbmtzPC9kaXY+O1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb290ZXJDb250YWluZXJcIj5sZWdhbCBzdHVmIGFuZCBjb25jdGFjdCBsaW5rczwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbi8vIGltcG9ydCBjc3MgZnJvbSAnLi9uYXZiYXIubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgcmV0dXJuIChcbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT17Y3NzLm5hdkNvbnRhaW5lcn0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZDb250YWluZXJcIj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17Y3NzLmxvZ29Db250YWluZXJ9PjwvZGl2PiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb0NvbnRhaW5lclwiPjwvZGl2PlxuICAgICAgey8qIDxuYXYgY2xhc3NOYW1lPXtjc3MubmF2UGFuZWx9PiAqL31cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2UGFuZWxcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPiBIb21lIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2ZpbGVcIj4gUHJvZmlsZSA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9jYXJ0XCI+IENhcnQgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIj4gTG9nIGluIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIHsvKiA8YSBocmVmPVwiL1wiPiBTaWduIG91dCA8L2E+ICovfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBjc3MgZnJvbSAnLi9wcm9kdWNDYXJkLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmZ1bmN0aW9uIFByb2R1Y3RDYXJkKHsgcHJvZHVjdE5hbWUsIHNob3J0RGVzY3JpcHRpb24sIHRvdGFsQW1vdW50LCB1bml0cywgcHJvZHVjdFByaWNlLCBpbWFnZVVybCA9IG51bGwgfSkge1xuICBjb25zdCBpbWFnZSA9IGltYWdlVXJsID8gaW1hZ2VVcmwgOiBcIm5vIGltYWdlIGF2YWlsYWJsZVwiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0Q2FyZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0SW1hZ2VcIj57aW1hZ2V9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RCb2R5Q29udGFpbmVyXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0TmFtZVwiPiB7cHJvZHVjdE5hbWV9IDwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcnREZXNjcmlwdGlvblwiPlxuICAgICAgICAgIHtzaG9ydERlc2NyaXB0aW9ufS4gPGJyIC8+XG4gICAgICAgICAgSW4gc3RvcmFnZTp7dG90YWxBbW91bnR9XG4gICAgICAgICAge3VuaXRzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkRm9vdGVyXCI+XG4gICAgICAgICAgPExpbmsgdG89XCIvOnByb2R1Y3RJZFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2VlTW9yZVwiPnNlZSBtb3JlPC9wPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJhZGRUb0NhcnRCdG5cIj5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIGFkZHtcIiBcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RQcmljZVwiPlxuICAgICAgICAgICAge3Byb2R1Y3RQcmljZX3igqwve3VuaXRzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZDtcblxuLy9wcm9kdWN0TmFtZVxuLy9zaG9ydERlc2NyaXB0aW9uXG4vL2Rlc2NyaXB0aW9uXG4vL3RvdGFsQW1vdW50XG4vL3VuaXRzXG4vL2ltYWdlXG4vL2lkXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgY3NzIGZyb20gXCIuLi9zdHlsZXMvcGFnZXMubW9kdWxlLmNzc1wiO1xuZnVuY3Rpb24gQ2FydCgpIHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicGFnZUNvbnRhaW5lclwiPkNhcnQ8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBDaGVja091dCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PkNoZWNrT3V0PC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tPdXQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBjc3MgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy91aV9jb21wb25lbnRzL1Byb2R1Y3RDYXJkXCI7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgLy9kdW1teSBheGlvc1xuICAvL2NvbnN0IGdldFByb2R1Y3RzID0gKCkgPT4gYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvcHJvZHVjdHMnKTtcbiAgY29uc3QgZ2V0UHJvZHVjdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwiUklDRVwiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcImEgdmVyeSBnb29kIHJpY2VcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwidGhpcyBwcm9kdWN0IHdhcyBzZWVkZWQgYW5kIGZhcm1lZCBpbiB0aGUgbG9jYWwgZmFybXMgb2YgaGVsc2lua2ksIHRoZSBtaW5pbXVuIHR1IGJ1eSBpcyAxa2dcIixcbiAgICAgICAgdG90YWxBbW91bnQ6IDEwMCxcbiAgICAgICAgdW5pdHM6IFwia2dcIixcbiAgICAgICAgcHJvZHVjdFByaWNlOiAxLjU1LFxuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgaWQ6IDEsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm9kdWN0TmFtZTogXCJwb3RhdG9lc1wiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcInRoaXMgcG90YXRvcyBhcmUgdGhlIGJlc3RcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwidHJ5IG15IHBvdGF0b2VzIGFuZCB5b3Ugd2lsbCBmYWxsIGlubG92ZSBmb3IgZmlyc3QgdGltZSB3aXRoIGEgcG90YXRvXCIsXG4gICAgICAgIHRvdGFsQW1vdW50OiAyMCxcbiAgICAgICAgdW5pdHM6IFwia2dcIixcbiAgICAgICAgcHJvZHVjdFByaWNlOiAyLjI1LFxuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgaWQ6IDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm9kdWN0TmFtZTogXCJ6dWNjaW5pXCIsXG4gICAgICAgIHNob3J0RGVzY3JpcHRpb246IFwidGhlIHBlcmZlY3Qgc2l6ZSBvZiBhIHp1Y2NpbmlcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiY29tYmluZSB0aGlzIHp1Y2Npbmkgd2l0aCB2YXNlbGluZSwgY29uZG9tIGFuZCBhIGJvdHRsZSBvZiB3aW5lIHRoZW4gZmluZCBvdXQgd2hhdCBjbGltYXggaXNcIixcbiAgICAgICAgdG90YWxBbW91bnQ6IDEwLFxuICAgICAgICB1bml0czogXCJ1bml0XCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogMC45OSxcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIGlkOiAzLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwiY2Fycm90c1wiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcInZlcnkgZ29vZCBmb3IgZXllcyBoZWFsdGhcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiSGF2ZSB5b3UgZXZlciBzZWVuIGEgYnVubnkgd2l0aCBnbGFzc2VzPyEgaWYgeW91IGFyZSBub3QgYSBkb2N0b3Igb3IgYSBiaW9sb2dpc3QgZG9udCBjb21tZW50XCIsXG4gICAgICAgIHRvdGFsQW1vdW50OiAyMDAsXG4gICAgICAgIHVuaXRzOiBcImJ1bmNoXCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogNS45OSxcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIGlkOiA0LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwicHVua2luXCIsXG4gICAgICAgIHNob3J0RGVzY3JpcHRpb246IFwidHJ5IG15IHB1bmtpblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJqdXN0IGRvbnQgYmUgYSBjb3dhcmQgYW4gYnV5IG15IHB1bmtpblwiLFxuICAgICAgICB0b3RhbEFtb3VudDogMSxcbiAgICAgICAgdW5pdHM6IFwidW5pdFwiLFxuICAgICAgICBwcm9kdWN0UHJpY2U6IDEwMCxcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIGlkOiA1LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwidG9tYXRvZXNcIixcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCJpbiByZWQgYW5kIHllbGxvd1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJhIHNhbGFkIHdpdG91dCB0b21hdG9lcyBpcyBsaWtlIGEgYSBiYXR0bGUgY3J1aXNlIGFybWFkYSBzaGlwIHdpdGhvdXQgc2VyaWFsIG51bWJlclwiLFxuICAgICAgICB0b3RhbEFtb3VudDogNTAsXG4gICAgICAgIHVuaXRzOiBcInBvdW5kXCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogMC42NSxcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIGlkOiA2LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwiZWdncGxhbnRcIixcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCJmdW5ueSBuYW1lIGJ1dCB0YXN0eSB2ZWdneVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJtYWtlIHRoZSBiZXN0IGpva2VzIGFib3V0IGVnZ3BsYW50cyB3aXRoIHRoaXMgYmVhdXRpZXMgb2YgdmVnZXRhYmxlc1wiLFxuICAgICAgICB0b3RhbEFtb3VudDogMjAsXG4gICAgICAgIHVuaXRzOiBcInVuaXRcIixcbiAgICAgICAgcHJvZHVjdFByaWNlOiAyLFxuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgaWQ6IDcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm9kdWN0TmFtZTogXCJmYWJhIGJlYW5zXCIsXG4gICAgICAgIHNob3J0RGVzY3JpcHRpb246IFwiZ2V0IHRoaXMgb3JnYW5pYyBqZXdlbHNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiZ2V0IHRoZSBiZWFucyBhbmQgZ3JvdyBhIG1hZ2ljIHRyZWUgaW4geW91ciBiYWNrIHlhcmRcIixcbiAgICAgICAgdG90YWxBbW91bnQ6IDMsXG4gICAgICAgIHVuaXRzOiBcImJlYW5cIixcbiAgICAgICAgcHJvZHVjdFByaWNlOiA5OS45OSxcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIGlkOiA4LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwiY3VjdW1iZXJcIixcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCJ0aGUgcGVyZmVjdCBzaXplIG9mIGEgY3VjdW1iZXJcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiY29tYmluZSB0aGlzIGN1Y3VtYmVyIHdpdGggdmFzZWxpbmUsIGNvbmRvbSBhbmQgYSBib3R0bGUgb2Ygd2luZSB0aGVuIGZpbmQgb3V0IHdoYXQgY2xpbWF4IGlzXCIsXG4gICAgICAgIHRvdGFsQW1vdW50OiAxMCxcbiAgICAgICAgdW5pdHM6IFwidW5pdFwiLFxuICAgICAgICBwcm9kdWN0UHJpY2U6IDEwLjk5LFxuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgaWQ6IDksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm9kdWN0TmFtZTogXCJsZXR0dWNlXCIsXG4gICAgICAgIHNob3J0RGVzY3JpcHRpb246IFwiZnJlcyBhcyBhIGxldHR1Y2VcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiaXMgc28gZnJlc2ggeW91IGNhbnQgc2F5IG5vIFwiLFxuICAgICAgICB0b3RhbEFtb3VudDogMTAsXG4gICAgICAgIHVuaXRzOiBcInVuaXRcIixcbiAgICAgICAgcHJvZHVjdFByaWNlOiAxMC45OSxcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIGlkOiAxMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcImNvdWxpZmxvd2VyXCIsXG4gICAgICAgIHNob3J0RGVzY3JpcHRpb246IFwid2VpcmQgYW5kIGRlbGljaW91c1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJ5b3UgYmV0IHRoZXkgYXJlIHRoZSB3ZWlyZGVzdFwiLFxuICAgICAgICB0b3RhbEFtb3VudDogMTAsXG4gICAgICAgIHVuaXRzOiBcInVuaXRcIixcbiAgICAgICAgcHJvZHVjdFByaWNlOiAxMC45OSxcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIGlkOiAxMSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcIm9uaW9uc1wiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcIndhbm5hIGNyeS4uIG9mIGhhcHBpbmVzc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJ3aXRoIG1vcmUgY3J5aW5nIHBvd2VyIHRoYXQgdGhlIGNvbXBldGl0b3JzJ3NcIixcbiAgICAgICAgdG90YWxBbW91bnQ6IDEwLFxuICAgICAgICB1bml0czogXCJrZ1wiLFxuICAgICAgICBwcm9kdWN0UHJpY2U6IDEwLjk5LFxuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgaWQ6IDEyLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwiY2hpbGxpXCIsXG4gICAgICAgIHNob3J0RGVzY3JpcHRpb246IFwiZmVlbCB0aGUgcGFpblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJnYXJhbnRlZTogeW91IHdpbGwgdGFzdGUgaXQgdG9kYXkgYW5kIHRvbW9ycm93IG1vcm5pbmdcIixcbiAgICAgICAgdG90YWxBbW91bnQ6IDEwLFxuICAgICAgICB1bml0czogXCJnXCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogMTAuOTksXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogMTMsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm9kdWN0TmFtZTogXCJiZWV0cm9vdFwiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcInZlcnkgcHVycGxlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcImlmIHB1cnBsZW5lc3MgaXMgdGhlIG1lc3N1cmUgdGhpcyBhcmUgdGhlIGtpbmdzXCIsXG4gICAgICAgIHRvdGFsQW1vdW50OiAxNSxcbiAgICAgICAgdW5pdHM6IFwiMyB1bml0c1wiLFxuICAgICAgICBwcm9kdWN0UHJpY2U6IDAuOTksXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogMTQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm9kdWN0TmFtZTogXCJjaGljayBwZWFzXCIsXG4gICAgICAgIHNob3J0RGVzY3JpcHRpb246IFwiYWxyZWFkeSBjb29rZWRcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwieW91IG9ubHkgbmVlZCB0byBzZXJ2ZSB0aGVtXCIsXG4gICAgICAgIHRvdGFsQW1vdW50OiAxMCxcbiAgICAgICAgdW5pdHM6IFwia2dcIixcbiAgICAgICAgcHJvZHVjdFByaWNlOiAyMC45OSxcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIGlkOiAxNSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcImJydXNzZWwgc3Byb3dzXCIsXG4gICAgICAgIHNob3J0RGVzY3JpcHRpb246IFwidGVycmlibGUgdGFzdGUgYnV0IHZlcnkgaGVhbHRoeVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUcml2aWE6IGRpZCB5b3Uga25vdyB0aGF0IGJydXNzZWxzIHNwcm93cyBhcmUgbm90IGZyb20gYnJ1c3NlbHNcIixcbiAgICAgICAgdG90YWxBbW91bnQ6IDEwLFxuICAgICAgICB1bml0czogXCJrZ1wiLFxuICAgICAgICBwcm9kdWN0UHJpY2U6IDEwLjk5LFxuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgaWQ6IDE2LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwiYnJvY29saVwiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcImEgdHJlZSBsb29raW5nIHZlZ2dpZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJ0aGlzIGFyZSBicm91Z2h0IGZyb20gdGhlIGZhciBmYXIgbWVsbHVtYWtpXCIsXG4gICAgICAgIHRvdGFsQW1vdW50OiAxMCxcbiAgICAgICAgdW5pdHM6IFwia2dcIixcbiAgICAgICAgcHJvZHVjdFByaWNlOiAxMC45OSxcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIGlkOiAxNyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcInNwaW5hY2hcIixcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCJwb3BleWUgZm9vZFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJpZiB5b3Ugd2FudCB0byByZXNjdWUgeW91ciBsYWR5IGZyb20gYnJ1dHVzIHlvdSBnb3R0YSBlYXQgdGhpc1wiLFxuICAgICAgICB0b3RhbEFtb3VudDogMTAsXG4gICAgICAgIHVuaXRzOiBcImdcIixcbiAgICAgICAgcHJvZHVjdFByaWNlOiAxMC45OSxcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIGlkOiAxOCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcImdhcmxpY1wiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcImlkZWFsIHZzIHZhbXBpcmVzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIml0cyBrbm93biB0aGF0IHZhbXBpcmVzIGRvbnQgZWF0IGdhcmxpYyBjYXVzZSB0aGUgYmFkIGJyZWF0aCBpdCBsZWF2ZXMgYWZ0ZXJcIixcbiAgICAgICAgdG90YWxBbW91bnQ6IDEwLFxuICAgICAgICB1bml0czogXCJnXCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogMS45OSxcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIGlkOiAxOSxcbiAgICAgIH0sXG4gICAgXTtcbiAgfTtcblxuICBjb25zdCBwcm9kdWN0RmlsdGVyID0gcHJvZHVjdHMuZmlsdGVyKChyZXMpID0+IHtcbiAgICByZXR1cm4gcmVzLnByb2R1Y3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpO1xuICB9KTtcblxuICBjb25zdCBzZWFyY2hIYW5kbGVyID0gKGUpID0+IHtcbiAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKHNlYXJjaCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQcm9kdWN0cyhnZXRQcm9kdWN0cygpKTtcbiAgICAvL3VzZSBheGlvcyB0byBnZXQgdGhlIGRhdGEgZnJvbSBkYXRhYmFzZTpcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgLy8gPGRpdiBjbGFzc05hbWU9e2Nzcy5wYWdlQ29udGFpbmVyfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VDb250YWluZXJcIj5cbiAgICAgIDxoMT5Ib21lPC9oMT5cbiAgICAgIDxkaXY+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17Y3NzLnNlYXJjaH0+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi8J+UjVwiIG9uQ2hhbmdlPXtzZWFyY2hIYW5kbGVyfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9e2Nzcy5icm93c2VyfT4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyb3dzZXJcIj5cbiAgICAgICAge3Byb2R1Y3RGaWx0ZXIubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgPFByb2R1Y3RDYXJkIGtleT17cHJvZHVjdC5pZH0gey4uLnByb2R1Y3R9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuLi9zdHlsZXMvbG9naW4ubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBMb2dJbigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmNvbnRhaW5lcn0gaWQ9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXIgbG9nLWluLWNvbnRhaW5lclwiPlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XG4gICAgICAgICAgPGgxPkxvZ2luPC9oMT5cblxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIC8+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5Gb3Jnb3QgeW91ciBwYXNzd29yZD88L2E+XG4gICAgICAgICAgPGJ1dHRvbj5Mb2cgSW48L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXktY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheS1wYW5lbCBvdmVybGF5LXJpZ2h0XCI+XG4gICAgICAgICAgICA8aDE+U2VsbGVyIG9yIEZhcm1lciBsb2dpbi9zaWdudXAgZnJvbSBoZXJlPC9oMT5cbiAgICAgICAgICAgIDxwPlNvIHdlIGNhbiBwdXQgc29tZSBpbnN0cnVjdGlvbiBmb3IgdGhlIHNlbGxlcnMuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dJbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBjc3MgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy5tb2R1bGUuY3NzXCI7XG5mdW5jdGlvbiBQcm9maWxlKCkge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYWdlQ29udGFpbmVyXCI+UHJvZmlsZTwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIFNpZ25VcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlNpZ25VcDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25VcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG4vLyBpbXBvcnQgY3NzIGZyb20gXCIuLi9zdHlsZXMvcGFnZXMubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBTaW5nbGVQcm9kdWN0KCkge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IHByb2R1Y3QgPSBsb2NhdGlvbi5zdGF0ZS5kYXRhO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZUNvbnRhaW5lclwiPlxuICAgICAgPGgxPntwcm9kdWN0LnByb2R1Y3ROYW1lfTwvaDE+XG4gICAgICBTaW5nbGVQcm9kdWN0IE5hbWVcbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUHJvZHVjdDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiUmVhY3QiLCJSZWFjdERPTSIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIkhvbWUiLCJOYXZiYXIiLCJTaW5nbGVQcm9kdWN0IiwiUHJvZmlsZSIsIkNhcnQiLCJDaGVja091dCIsIkZvb3RlciIsIkxvZ0luIiwiU2lnblVwIiwiTWFpbiIsInJvb3QiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsIkxpbmsiLCJQcm9kdWN0Q2FyZCIsInByb2R1Y3ROYW1lIiwic2hvcnREZXNjcmlwdGlvbiIsInRvdGFsQW1vdW50IiwidW5pdHMiLCJwcm9kdWN0UHJpY2UiLCJpbWFnZVVybCIsImltYWdlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiZ2V0UHJvZHVjdHMiLCJkZXNjcmlwdGlvbiIsImlkIiwicHJvZHVjdEZpbHRlciIsImZpbHRlciIsInJlcyIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzZWFyY2hIYW5kbGVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInByb2R1Y3QiLCJjc3MiLCJjb250YWluZXIiLCJ1c2VMb2NhdGlvbiIsImxvY2F0aW9uIiwic3RhdGUiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==
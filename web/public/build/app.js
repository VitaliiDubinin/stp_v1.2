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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Home */ "./assets/pages/Home.js");
/* harmony import */ var _assets_components_ui_components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/components/ui_components/Navbar */ "./assets/components/ui_components/Navbar.js");
/* harmony import */ var _assets_pages_SingleProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/pages/SingleProduct */ "./assets/pages/SingleProduct.js");
/* harmony import */ var _assets_pages_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/pages/Profile */ "./assets/pages/Profile.js");
/* harmony import */ var _assets_pages_Cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/pages/Cart */ "./assets/pages/Cart.js");
/* harmony import */ var _assets_pages_CheckOut__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/pages/CheckOut */ "./assets/pages/CheckOut.js");
/* harmony import */ var _pages_LogIn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/LogIn */ "./assets/pages/LogIn.js");
/* harmony import */ var _pages_SignUp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/SignUp */ "./assets/pages/SignUp.js");
/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-use-cart */ "./node_modules/react-use-cart/dist/react-use-cart.esm.js");
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");



 // import css from "./styles/main.module.css";





 //import Footer from "../assets/components/ui_components/Footer";






function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_use_cart__WEBPACK_IMPORTED_MODULE_10__.CartProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_components_ui_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/api/product/find/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_SingleProduct__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/profile",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_Profile__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/cart",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_Cart__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/cart/checkout",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_CheckOut__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/loginN",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_LogIn__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/loginN/signup",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_SignUp__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  })))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);
var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("app"));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Main, null)));

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
 // start the Stimulus application


 // import "../assets/pages/LoginFunct";

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-use-cart */ "./node_modules/react-use-cart/dist/react-use-cart.esm.js");




function Navbar() {
  var _useCart = (0,react_use_cart__WEBPACK_IMPORTED_MODULE_1__.useCart)(),
      totalItems = _useCart.totalItems;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#",
    className: "nav-a"
  }, "F4rm3r")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "nav-links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/"
  }, " Home ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/profile"
  }, " Profile ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/cart"
  }, "Cart: ", totalItems, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/login"
  }, " Log in "))))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);
/*
    */

/***/ }),

/***/ "./assets/components/ui_components/ProdCart.js":
/*!*****************************************************!*\
  !*** ./assets/components/ui_components/ProdCart.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-use-cart */ "./node_modules/react-use-cart/dist/react-use-cart.esm.js");



 // const ProdCart = ({ product: { id, productName, shortDescription, productPrice, imageUrl } }) => {

var ProdCart = function ProdCart(_ref) {
  var data = _ref.data,
      product_name = _ref.product_name,
      description = _ref.description,
      units = _ref.units,
      price = _ref.price,
      id = _ref.id,
      _ref$image = _ref.image,
      image = _ref$image === void 0 ? null : _ref$image;
  c; // function ProductCard({ data, product_name, description, units, price, image = null }) {

  var _useCart = (0,react_use_cart__WEBPACK_IMPORTED_MODULE_3__.useCart)(),
      addItem = _useCart.addItem;

  var pic = image ? image : "no image available";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "col-11 col-md-6 col-lg-3 mx-0 mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "card p-0 overflow-hidden h-100 shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "card-body text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h5", {
    className: "card-title"
  }, "$ ", data.product_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "card-text"
  }, data.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "card-text"
  }, data.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "card-text"
  }, pic), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    className: "btn btn-success",
    onClick: function onClick() {
      return addItem({
        id: id,
        product_name: product_name,
        description: description,
        price: price,
        pic: pic
      });
    }
  }, "Add to cart"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProdCart);

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
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-use-cart */ "./node_modules/react-use-cart/dist/react-use-cart.esm.js");












var apiHead = 'https://source.unsplash.com/';
var randApiHead = 'https://source.unsplash.com/500x400/?';

var count_words = function count_words(word_array) {
  var total = 0;
  word_array.forEach(function () {
    total++;
  });
  return total;
};

function ProductCard(_ref) {
  var data = _ref.data,
      product_name = _ref.product_name,
      description = _ref.description,
      price = _ref.price,
      id = _ref.id,
      _ref$units = _ref.units,
      units = _ref$units === void 0 ? null : _ref$units,
      _ref$image = _ref.image,
      image = _ref$image === void 0 ? null : _ref$image;
  var randImage = randApiHead;
  units = units ? units : 'kg';

  if (!image) {
    if (count_words(product_name.split()) > 1) {
      var name_array = product_name.split();
      console.log(count_words(name_array));
      var total_words = count_words(name_array);
      var noun = name_array[total_words - 1];
      randImage += noun;
    } else {
      randImage += product_name;
    }

    image = randImage;
  } else if (!image.includes('https://')) {
    image = apiHead + image;
  }

  var _useCart = (0,react_use_cart__WEBPACK_IMPORTED_MODULE_10__.useCart)(),
      addItem = _useCart.addItem;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "card-container "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "card front-face"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("img", {
    src: image
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "card back-face"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "remove"
  }, "element"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("img", {
    src: image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "title"
  }, product_name, " ", price, "\u20AC/", units), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("p", null, description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link, {
    className: "card-link",
    to: "/api/product/find/".concat(id)
  }, "See more"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("button", {
    className: "btn btn-success",
    onClick: function onClick() {
      return (//console.log('hello')          
        addItem({
          id: id,
          product_name: product_name,
          description: description,
          price: price,
          image: image
        })
      );
    }
  }, "Add to cart")))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);

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
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use-cart */ "./node_modules/react-use-cart/dist/react-use-cart.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");






var Cart = function Cart() {
  var _useCart = (0,react_use_cart__WEBPACK_IMPORTED_MODULE_2__.useCart)(),
      isEmpty = _useCart.isEmpty,
      cartTotal = _useCart.cartTotal,
      totalUniqueItems = _useCart.totalUniqueItems,
      items = _useCart.items,
      totalItems = _useCart.totalItems,
      updateItemQuantity = _useCart.updateItemQuantity,
      removeItem = _useCart.removeItem,
      emptyCart = _useCart.emptyCart; // console.log("items", items);
  // const [totalAmount, setTotalAmount] = useState();


  if (isEmpty) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "text-center alert alert-info",
    role: "alert"
  }, "Your cart is empty");

  var handleCheckout = function handleCheckout() {
    alert("Thanks for purchasing our products!");
    emptyCart();
  }; // console.log(cartTotal);


  var totalam = cartTotal; // console.log(totalam);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
    className: "py-4 container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h1", null, "Cart"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h5", null, "Cart (", totalUniqueItems, ") Total Items: ", totalItems), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("table", {
    className: "table table-light table-hover m-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", null, "Product"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", null, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", null, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", null, "Remove"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tbody", null, items.map(function (item) {
    // setTotalAmount(item.quantity * item.price);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", {
      key: item.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
      src: item.pic,
      alt: item.product_name,
      style: {
        height: "6rem"
      }
    }), " ", item.product_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "$", item.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
      type: "number",
      value: item.quantity,
      onChange: function onChange(e) {
        return updateItemQuantity(item.id, e.target.value);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, "$", item.quantity * item.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
      className: "btn btn-danger",
      onClick: function onClick() {
        return removeItem(item.id);
      }
    }, "Remove")));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "col-auto ms-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, "Total price: $", cartTotal)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "col-auto "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    className: "btn btn-danger m-2",
    onClick: emptyCart
  }, "Empty Cart"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    className: "btn btn-success m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/cart/checkout",
    totalam: totalam
  }, "Checkout ", totalam))))));
};

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
/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-use-cart */ "./node_modules/react-use-cart/dist/react-use-cart.esm.js");

 // function CheckOut({ totalam }) {

function CheckOut() {
  var _useCart = (0,react_use_cart__WEBPACK_IMPORTED_MODULE_1__.useCart)(),
      cartTotal = _useCart.cartTotal;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "CheckOut"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    action: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Total Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    className: "form-control",
    placeholder: cartTotal
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Payment Method"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    className: "form-control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "Credit Card"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "Debit Card"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "Net Banking"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "Cash on Delivery"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Card Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Expiry Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "date",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "CVV"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Name on Card"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Submit")));
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
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _components_ui_components_Navbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/ui_components/Navbar */ "./assets/components/ui_components/Navbar.js");
/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-use-cart */ "./node_modules/react-use-cart/dist/react-use-cart.esm.js");
/* harmony import */ var _components_ui_components_ProductCard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/ui_components/ProductCard */ "./assets/components/ui_components/ProductCard.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _components_ui_components_ProdCart__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/ui_components/ProdCart */ "./assets/components/ui_components/ProdCart.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function Home() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      products = _useState2[0],
      setProducts = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      search = _useState4[0],
      setSearch = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var getProducts = function getProducts() {
    return axios__WEBPACK_IMPORTED_MODULE_20___default().get("/api/products/all");
  };

  (0,react__WEBPACK_IMPORTED_MODULE_19__.useEffect)(function () {
    setLoading(true);
    Promise.all([getProducts()]).then(function (results) {
      // console.log(results[0]);
      var productsData = results[0];
      setProducts(productsData.data);
      setLoading(false);
    });
  }, []);

  var _useCart = (0,react_use_cart__WEBPACK_IMPORTED_MODULE_22__.useCart)(),
      totalItems = _useCart.totalItems; // console.log(totalItems, "totalItems");


  var productFilter = products.filter(function (res) {
    return res.product_name.toLowerCase().includes(search.toLowerCase());
  });

  var searchHandler = function searchHandler(e) {
    setSearch(e.target.value);
    console.log(search);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("form", {
    className: "container-search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("input", {
    type: "text",
    name: "search",
    placeholder: " \uD83D\uDD0D Search..",
    className: "search",
    onChange: searchHandler
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
    className: "browser"
  }, productFilter.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_components_ui_components_ProductCard__WEBPACK_IMPORTED_MODULE_23__["default"], _extends({
      key: product.id,
      data: product
    }, product));
  })));
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("body", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "container",
    id: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "form-container log-in-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    action: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Signup"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "Userame"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    placeholder: "Email"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    placeholder: "Password"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "repeatpassword",
    placeholder: " RepeatPassword"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "Real name"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "Company-company"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "Bank account"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "Visa"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "Delevery method"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "Address"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "Pay method"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#"
  }, "Forgot your password?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Cancle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Signup"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "overlay-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "overlay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "overlay-panel overlay-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "New Farmer signup from here"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "So we can put some instruction for the farmer something here somthing here."))))));
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, product.product_name), "SingleProduct Name", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "test test"));
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-dom_client_js","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_axios_index_js-node_m-984943"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSxpRUFBZTtBQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0REO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7V0FFSSxtQkFBVTtNQUNOLEtBQUtDLE9BQUwsQ0FBYUMsV0FBYixHQUEyQixtRUFBM0I7SUFDSDs7OztFQUh3QkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDdCO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU2tCLElBQVQsR0FBZ0I7RUFDZCxvQkFDRSx1SUFFRSwyREFBQyx5REFBRCxxQkFDRSwyREFBQyw0REFBRCxxQkFDRSwyREFBQywrRUFBRCxPQURGLGVBRUUsMkRBQUMscURBQUQscUJBQ0UsMkRBQUMsb0RBQUQ7SUFBTyxJQUFJLEVBQUMsR0FBWjtJQUFnQixPQUFPLGVBQUUsMkRBQUMsbURBQUQ7RUFBekIsRUFERixlQUVFLDJEQUFDLG9EQUFEO0lBQU8sSUFBSSxFQUFDLHVCQUFaO0lBQW9DLE9BQU8sZUFBRSwyREFBQyxtRUFBRDtFQUE3QyxFQUZGLGVBR0UsMkRBQUMsb0RBQUQ7SUFBTyxJQUFJLEVBQUMsVUFBWjtJQUF1QixPQUFPLGVBQUUsMkRBQUMsNkRBQUQ7RUFBaEMsRUFIRixlQUlFLDJEQUFDLG9EQUFEO0lBQU8sSUFBSSxFQUFDLE9BQVo7SUFBb0IsT0FBTyxlQUFFLDJEQUFDLDBEQUFEO0VBQTdCLEVBSkYsZUFLRSwyREFBQyxvREFBRDtJQUFPLElBQUksRUFBQyxnQkFBWjtJQUE2QixPQUFPLGVBQUUsMkRBQUMsOERBQUQ7RUFBdEMsRUFMRixlQU1FLDJEQUFDLG9EQUFEO0lBQU8sSUFBSSxFQUFDLFNBQVo7SUFBc0IsT0FBTyxlQUFFLDJEQUFDLG9EQUFEO0VBQS9CLEVBTkYsZUFPRSwyREFBQyxvREFBRDtJQUFPLElBQUksRUFBQyxnQkFBWjtJQUE2QixPQUFPLGVBQUUsMkRBQUMscURBQUQ7RUFBdEMsRUFQRixDQUZGLENBREYsQ0FGRixDQURGO0FBb0JEOztBQUVELGlFQUFlQSxJQUFmO0FBRUEsSUFBTUMsSUFBSSxHQUFHZix3REFBQSxDQUFvQmlCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUFwQixDQUFiO0FBQ0FILElBQUksQ0FBQ0ksTUFBTCxlQUNFLDJEQUFDLHlEQUFELHFCQUNFLDJEQUFDLElBQUQsT0FERixDQURGOzs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Q0FLQTs7QUFDQTtDQUlBOzs7Ozs7Ozs7Ozs7Ozs7O0NDZkE7O0FBQ08sSUFBTUUsR0FBRyxHQUFHRCwwRUFBZ0IsQ0FBQ0UseUlBQUQsQ0FBNUIsRUFNUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBOztBQUVBLFNBQVNoQixNQUFULEdBQWtCO0VBQ2hCLGVBQXVCbUIsdURBQU8sRUFBOUI7RUFBQSxJQUFRQyxVQUFSLFlBQVFBLFVBQVI7O0VBQ0Esb0JBRUUscUZBQ0UscUZBQ0U7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFO0lBQUcsSUFBSSxFQUFDLEdBQVI7SUFBWSxTQUFTLEVBQUM7RUFBdEIsWUFERixDQURGLGVBTUU7SUFBSSxTQUFTLEVBQUM7RUFBZCxnQkFFQSxvRkFDRSwyREFBQyxrREFBRDtJQUFNLEVBQUUsRUFBQztFQUFULFlBREYsQ0FGQSxlQUtBLG9GQUNFLDJEQUFDLGtEQUFEO0lBQU0sRUFBRSxFQUFDO0VBQVQsZUFERixDQUxBLGVBUUEsb0ZBQ0UsMkRBQUMsa0RBQUQ7SUFBTSxFQUFFLEVBQUM7RUFBVCxhQUF3QkEsVUFBeEIsTUFERixDQVJBLGVBV0Esb0ZBRUUsMkRBQUMsa0RBQUQ7SUFBTSxFQUFFLEVBQUM7RUFBVCxjQUZGLENBWEEsQ0FORixDQURGLENBREYsQ0FGRjtBQStCRDs7QUFFRCxpRUFBZXBCLE1BQWY7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7Q0FHQTs7QUFDQSxJQUFNcUIsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBeUU7RUFBQSxJQUF0RUMsSUFBc0UsUUFBdEVBLElBQXNFO0VBQUEsSUFBaEVDLFlBQWdFLFFBQWhFQSxZQUFnRTtFQUFBLElBQWxEQyxXQUFrRCxRQUFsREEsV0FBa0Q7RUFBQSxJQUFyQ0MsS0FBcUMsUUFBckNBLEtBQXFDO0VBQUEsSUFBOUJDLEtBQThCLFFBQTlCQSxLQUE4QjtFQUFBLElBQXZCQyxFQUF1QixRQUF2QkEsRUFBdUI7RUFBQSxzQkFBbkJDLEtBQW1CO0VBQUEsSUFBbkJBLEtBQW1CLDJCQUFYLElBQVc7RUFDeEZDLENBQUMsQ0FEdUYsQ0FDckY7O0VBQ0gsZUFBb0JWLHVEQUFPLEVBQTNCO0VBQUEsSUFBUVcsT0FBUixZQUFRQSxPQUFSOztFQUNBLElBQU1DLEdBQUcsR0FBR0gsS0FBSyxHQUFHQSxLQUFILEdBQVcsb0JBQTVCO0VBQ0Esb0JBQ0U7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0U7SUFBSSxTQUFTLEVBQUM7RUFBZCxTQUE4Qk4sSUFBSSxDQUFDQyxZQUFuQyxDQURGLGVBRUU7SUFBRyxTQUFTLEVBQUM7RUFBYixHQUEwQkQsSUFBSSxDQUFDRSxXQUEvQixDQUZGLGVBR0U7SUFBRyxTQUFTLEVBQUM7RUFBYixHQUEwQkYsSUFBSSxDQUFDSSxLQUEvQixDQUhGLGVBSUU7SUFBRyxTQUFTLEVBQUM7RUFBYixHQUEwQkssR0FBMUIsQ0FKRixlQU1FO0lBQ0UsU0FBUyxFQUFDLGlCQURaO0lBRUUsT0FBTyxFQUFFO01BQUEsT0FDUEQsT0FBTyxDQUFDO1FBQ05ILEVBQUUsRUFBRkEsRUFETTtRQUVOSixZQUFZLEVBQVpBLFlBRk07UUFHTkMsV0FBVyxFQUFYQSxXQUhNO1FBSU5FLEtBQUssRUFBTEEsS0FKTTtRQUtOSyxHQUFHLEVBQUhBO01BTE0sQ0FBRCxDQURBO0lBQUE7RUFGWCxpQkFORixDQURGLENBREYsQ0FERjtBQTJCRCxDQS9CRDs7QUFpQ0EsaUVBQWVWLFFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTVcsT0FBTyxHQUFHLDhCQUFoQjtBQUNBLElBQU1DLFdBQVcsR0FBRyx1Q0FBcEI7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsVUFBRCxFQUFnQjtFQUNsQyxJQUFJQyxLQUFLLEdBQUcsQ0FBWjtFQUNBRCxVQUFVLENBQUNFLE9BQVgsQ0FBbUIsWUFBTTtJQUN2QkQsS0FBSztFQUNOLENBRkQ7RUFHQSxPQUFPQSxLQUFQO0FBQ0QsQ0FORDs7QUFRQSxTQUFTRSxXQUFULE9BQStGO0VBQUEsSUFBeEVoQixJQUF3RSxRQUF4RUEsSUFBd0U7RUFBQSxJQUFsRUMsWUFBa0UsUUFBbEVBLFlBQWtFO0VBQUEsSUFBcERDLFdBQW9ELFFBQXBEQSxXQUFvRDtFQUFBLElBQXZDRSxLQUF1QyxRQUF2Q0EsS0FBdUM7RUFBQSxJQUFoQ0MsRUFBZ0MsUUFBaENBLEVBQWdDO0VBQUEsc0JBQTVCRixLQUE0QjtFQUFBLElBQTVCQSxLQUE0QiwyQkFBdEIsSUFBc0I7RUFBQSxzQkFBaEJHLEtBQWdCO0VBQUEsSUFBaEJBLEtBQWdCLDJCQUFSLElBQVE7RUFDN0YsSUFBSVcsU0FBUyxHQUFHTixXQUFoQjtFQUVBUixLQUFLLEdBQUdBLEtBQUssR0FBR0EsS0FBSCxHQUFVLElBQXZCOztFQUVBLElBQUcsQ0FBQ0csS0FBSixFQUFVO0lBRVIsSUFBSU0sV0FBVyxDQUFDWCxZQUFZLENBQUNpQixLQUFiLEVBQUQsQ0FBWCxHQUFvQyxDQUF4QyxFQUEwQztNQUN4QyxJQUFNQyxVQUFVLEdBQUdsQixZQUFZLENBQUNpQixLQUFiLEVBQW5CO01BQ0FFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVCxXQUFXLENBQUNPLFVBQUQsQ0FBdkI7TUFDQSxJQUFNRyxXQUFXLEdBQUdWLFdBQVcsQ0FBQ08sVUFBRCxDQUEvQjtNQUNBLElBQU1JLElBQUksR0FBR0osVUFBVSxDQUFDRyxXQUFXLEdBQUcsQ0FBZixDQUF2QjtNQUNBTCxTQUFTLElBQUlNLElBQWI7SUFFRCxDQVBELE1BUUk7TUFDRk4sU0FBUyxJQUFJaEIsWUFBYjtJQUNEOztJQUNESyxLQUFLLEdBQUdXLFNBQVI7RUFDRCxDQWRELE1BY00sSUFBRyxDQUFDWCxLQUFLLENBQUNrQixRQUFOLENBQWUsVUFBZixDQUFKLEVBQStCO0lBQ25DbEIsS0FBSyxHQUFHSSxPQUFPLEdBQUdKLEtBQWxCO0VBQ0Q7O0VBRUQsZUFBb0JULHdEQUFPLEVBQTNCO0VBQUEsSUFBUVcsT0FBUixZQUFRQSxPQUFSOztFQUNBLG9CQUNRO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ047SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDTTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0U7SUFBSyxHQUFHLEVBQUVGO0VBQVYsRUFERixDQURGLGVBSUU7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFmLGFBREYsZUFRRTtJQUFLLEdBQUcsRUFBRUE7RUFBVixFQVJGLGVBU0U7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFmLEdBQXdCTCxZQUF4QixPQUF1Q0csS0FBdkMsYUFBZ0RELEtBQWhELENBREYsZUFFRSxzRUFBSUQsV0FBSixDQUZGLENBVEYsZUFhRSwyREFBQyxtREFBRDtJQUFNLFNBQVMsRUFBQyxXQUFoQjtJQUE0QixFQUFFLDhCQUF1QkcsRUFBdkI7RUFBOUIsY0FiRixlQWdCRTtJQUNGLFNBQVMsRUFBQyxpQkFEUjtJQUVGLE9BQU8sRUFBRTtNQUFBLE9BQVE7UUFDZEcsT0FBTyxDQUFDO1VBQUVILEVBQUUsRUFBRUEsRUFBTjtVQUFVSixZQUFZLEVBQVpBLFlBQVY7VUFBd0JDLFdBQVcsRUFBWEEsV0FBeEI7VUFBcUNFLEtBQUssRUFBTEEsS0FBckM7VUFBNENFLEtBQUssRUFBTEE7UUFBNUMsQ0FBRDtNQUREO0lBQUE7RUFGUCxpQkFoQkYsQ0FKRixDQUROLENBRE0sQ0FEUjtBQXFDRDs7QUFFRCxpRUFBZVUsV0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNbkMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtFQUNqQixlQUErR2dCLHVEQUFPLEVBQXRIO0VBQUEsSUFBUTZCLE9BQVIsWUFBUUEsT0FBUjtFQUFBLElBQWlCQyxTQUFqQixZQUFpQkEsU0FBakI7RUFBQSxJQUE0QkMsZ0JBQTVCLFlBQTRCQSxnQkFBNUI7RUFBQSxJQUE4Q0MsS0FBOUMsWUFBOENBLEtBQTlDO0VBQUEsSUFBcUQvQixVQUFyRCxZQUFxREEsVUFBckQ7RUFBQSxJQUFpRWdDLGtCQUFqRSxZQUFpRUEsa0JBQWpFO0VBQUEsSUFBcUZDLFVBQXJGLFlBQXFGQSxVQUFyRjtFQUFBLElBQWlHQyxTQUFqRyxZQUFpR0EsU0FBakcsQ0FEaUIsQ0FFakI7RUFDQTs7O0VBRUEsSUFBSU4sT0FBSixFQUNFLG9CQUNFO0lBQUssU0FBUyxFQUFDLDhCQUFmO0lBQThDLElBQUksRUFBQztFQUFuRCx3QkFERjs7RUFNRixJQUFNTyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07SUFDM0JDLEtBQUssQ0FBQyxxQ0FBRCxDQUFMO0lBQ0FGLFNBQVM7RUFDVixDQUhELENBWmlCLENBZ0JqQjs7O0VBQ0EsSUFBTUcsT0FBTyxHQUFHUixTQUFoQixDQWpCaUIsQ0FrQmpCOztFQUNBLG9CQUNFO0lBQVMsU0FBUyxFQUFDO0VBQW5CLGdCQUNFO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0U7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDRSw4RUFERixlQUVFLGlGQUNTQyxnQkFEVCxxQkFDMEM5QixVQUQxQyxDQUZGLGVBS0U7SUFBTyxTQUFTLEVBQUM7RUFBakIsZ0JBQ0UsdUZBQ0Usb0ZBQ0UsaUZBREYsZUFFRSwrRUFGRixlQUdFLGtGQUhGLGVBSUUsK0VBSkYsZUFLRSxnRkFMRixDQURGLENBREYsZUFVRSwwRUFDRytCLEtBQUssQ0FBQ08sR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBVTtJQUNuQjtJQUVBLG9CQUNFO01BQUksR0FBRyxFQUFFQSxJQUFJLENBQUNoQztJQUFkLGdCQUNFLHVFQUNHLEdBREgsZUFFRTtNQUFLLEdBQUcsRUFBRWdDLElBQUksQ0FBQzVCLEdBQWY7TUFBb0IsR0FBRyxFQUFFNEIsSUFBSSxDQUFDcEMsWUFBOUI7TUFBNEMsS0FBSyxFQUFFO1FBQUVxQyxNQUFNLEVBQUU7TUFBVjtJQUFuRCxFQUZGLE9BRTZFRCxJQUFJLENBQUNwQyxZQUZsRixDQURGLGVBS0UsNEVBQU1vQyxJQUFJLENBQUNqQyxLQUFYLENBTEYsZUFNRSxvRkFDRTtNQUFPLElBQUksRUFBQyxRQUFaO01BQXFCLEtBQUssRUFBRWlDLElBQUksQ0FBQ0UsUUFBakM7TUFBMkMsUUFBUSxFQUFFLGtCQUFDQyxDQUFEO1FBQUEsT0FBT1Ysa0JBQWtCLENBQUNPLElBQUksQ0FBQ2hDLEVBQU4sRUFBVW1DLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFuQixDQUF6QjtNQUFBO0lBQXJELEVBREYsQ0FORixlQVNFLDRFQUFNTCxJQUFJLENBQUNFLFFBQUwsR0FBZ0JGLElBQUksQ0FBQ2pDLEtBQTNCLENBVEYsZUFXRSxvRkFDRTtNQUFRLFNBQVMsRUFBQyxnQkFBbEI7TUFBbUMsT0FBTyxFQUFFO1FBQUEsT0FBTTJCLFVBQVUsQ0FBQ00sSUFBSSxDQUFDaEMsRUFBTixDQUFoQjtNQUFBO0lBQTVDLFlBREYsQ0FYRixDQURGO0VBbUJELENBdEJBLENBREgsQ0FWRixDQUxGLGVBeUNFO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0UseUZBQW1Cc0IsU0FBbkIsQ0FERixDQXpDRixlQTRDRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFO0lBQVEsU0FBUyxFQUFDLG9CQUFsQjtJQUF1QyxPQUFPLEVBQUVLO0VBQWhELGdCQURGLGVBS0U7SUFBUSxTQUFTLEVBQUM7RUFBbEIsZ0JBQ0UsMkRBQUMsa0RBQUQ7SUFBTSxFQUFFLEVBQUMsZ0JBQVQ7SUFBMEIsT0FBTyxFQUFFRztFQUFuQyxnQkFHWUEsT0FIWixDQURGLENBTEYsQ0E1Q0YsQ0FERixDQURGLENBREY7QUFnRUQsQ0FuRkQ7O0FBcUZBLGlFQUFldEQsSUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZBO0NBR0E7O0FBQ0EsU0FBU0MsUUFBVCxHQUFvQjtFQUNsQixlQUFzQmUsdURBQU8sRUFBN0I7RUFBQSxJQUFROEIsU0FBUixZQUFRQSxTQUFSOztFQUVBLG9CQUNFLHVJQUNFLGtGQURGLGVBRUU7SUFBTSxNQUFNLEVBQUM7RUFBYixnQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFLHlGQURGLGVBR0U7SUFBTyxJQUFJLEVBQUMsUUFBWjtJQUFxQixTQUFTLEVBQUMsY0FBL0I7SUFBOEMsV0FBVyxFQUFFQTtFQUEzRCxFQUhGLENBREYsZUFNRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFLDJGQURGLGVBRUU7SUFBUSxTQUFTLEVBQUM7RUFBbEIsZ0JBQ0UseUZBREYsZUFFRSx3RkFGRixlQUdFLHlGQUhGLGVBSUUsOEZBSkYsQ0FGRixDQU5GLGVBZUU7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDRSx3RkFERixlQUVFO0lBQU8sSUFBSSxFQUFDLFFBQVo7SUFBcUIsU0FBUyxFQUFDO0VBQS9CLEVBRkYsQ0FmRixlQW1CRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFLHdGQURGLGVBRUU7SUFBTyxJQUFJLEVBQUMsTUFBWjtJQUFtQixTQUFTLEVBQUM7RUFBN0IsRUFGRixDQW5CRixlQXVCRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFLGdGQURGLGVBRUU7SUFBTyxJQUFJLEVBQUMsUUFBWjtJQUFxQixTQUFTLEVBQUM7RUFBL0IsRUFGRixDQXZCRixlQTJCRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFLHlGQURGLGVBRUU7SUFBTyxJQUFJLEVBQUMsTUFBWjtJQUFtQixTQUFTLEVBQUM7RUFBN0IsRUFGRixDQTNCRixlQStCRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFLG9GQURGLGVBRUU7SUFBTyxJQUFJLEVBQUMsTUFBWjtJQUFtQixTQUFTLEVBQUM7RUFBN0IsRUFGRixDQS9CRixlQW9DRTtJQUFRLElBQUksRUFBQyxRQUFiO0lBQXNCLFNBQVMsRUFBQztFQUFoQyxZQXBDRixDQUZGLENBREY7QUE2Q0Q7O0FBRUQsaUVBQWU3QyxRQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTTCxJQUFULEdBQWdCO0VBQ2QsZ0JBQWdDZ0QsZ0RBQVEsQ0FBQyxFQUFELENBQXhDO0VBQUE7RUFBQSxJQUFPb0IsUUFBUDtFQUFBLElBQWlCQyxXQUFqQjs7RUFDQSxpQkFBNEJyQixnREFBUSxDQUFDLEVBQUQsQ0FBcEM7RUFBQTtFQUFBLElBQU9zQixNQUFQO0VBQUEsSUFBZUMsU0FBZjs7RUFDQSxpQkFBOEJ2QixnREFBUSxDQUFDLEtBQUQsQ0FBdEM7RUFBQTtFQUFBLElBQU93QixPQUFQO0VBQUEsSUFBZ0JDLFVBQWhCOztFQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0lBQUEsT0FBTVAsaURBQUEsQ0FBVSxtQkFBVixDQUFOO0VBQUEsQ0FBcEI7O0VBRUFELGlEQUFTLENBQUMsWUFBTTtJQUNkTyxVQUFVLENBQUMsSUFBRCxDQUFWO0lBRUFHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLENBQUNILFdBQVcsRUFBWixDQUFaLEVBQTZCSSxJQUE3QixDQUFrQyxVQUFVQyxPQUFWLEVBQW1CO01BQ25EO01BRUEsSUFBTUMsWUFBWSxHQUFHRCxPQUFPLENBQUMsQ0FBRCxDQUE1QjtNQUVBVixXQUFXLENBQUNXLFlBQVksQ0FBQ3pELElBQWQsQ0FBWDtNQUNBa0QsVUFBVSxDQUFDLEtBQUQsQ0FBVjtJQUNELENBUEQ7RUFRRCxDQVhRLEVBV04sRUFYTSxDQUFUOztFQWFBLGVBQXVCckQsd0RBQU8sRUFBOUI7RUFBQSxJQUFRQyxVQUFSLFlBQVFBLFVBQVIsQ0FwQmMsQ0FxQmQ7OztFQUVBLElBQU00RCxhQUFhLEdBQUdiLFFBQVEsQ0FBQ2MsTUFBVCxDQUFnQixVQUFDQyxHQUFELEVBQVM7SUFDN0MsT0FBT0EsR0FBRyxDQUFDM0QsWUFBSixDQUFpQjRELFdBQWpCLEdBQStCckMsUUFBL0IsQ0FBd0N1QixNQUFNLENBQUNjLFdBQVAsRUFBeEMsQ0FBUDtFQUNELENBRnFCLENBQXRCOztFQUlBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ3RCLENBQUQsRUFBTztJQUMzQlEsU0FBUyxDQUFDUixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFUO0lBQ0F0QixPQUFPLENBQUNDLEdBQVIsQ0FBWTBCLE1BQVo7RUFDRCxDQUhEOztFQUtBLG9CQUNFLHNGQUdJO0lBQU0sU0FBUyxFQUFDO0VBQWhCLGdCQUNFO0lBQ0UsSUFBSSxFQUFDLE1BRFA7SUFFRSxJQUFJLEVBQUMsUUFGUDtJQUdFLFdBQVcsRUFBQyx3QkFIZDtJQUlFLFNBQVMsRUFBQyxRQUpaO0lBS0UsUUFBUSxFQUFFZTtFQUxaLEVBREYsQ0FISixlQWdCRTtJQUFLLFNBQVMsRUFBQztFQUFmLEdBQ0dKLGFBQWEsQ0FBQ3RCLEdBQWQsQ0FBa0IsVUFBQzJCLE9BQUQ7SUFBQSxvQkFDakIsNERBQUMsOEVBQUQ7TUFBYSxHQUFHLEVBQUVBLE9BQU8sQ0FBQzFELEVBQTFCO01BQThCLElBQUksRUFBRTBEO0lBQXBDLEdBQWlEQSxPQUFqRCxFQURpQjtFQUFBLENBQWxCLENBREgsQ0FoQkYsQ0FERjtBQXdCRDs7QUFFRCxpRUFBZXRGLElBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDbEVBOztBQUVBLFNBQVNNLEtBQVQsR0FBaUI7RUFDZixvQkFDRSxzRkFDRTtJQUFLLFNBQVMsRUFBQyxXQUFmO0lBQTJCLEVBQUUsRUFBQztFQUE5QixnQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFO0lBQU0sTUFBTSxFQUFDO0VBQWIsZ0JBQ0UsK0VBREYsZUFHRTtJQUFPLElBQUksRUFBQyxPQUFaO0lBQW9CLFdBQVcsRUFBQztFQUFoQyxFQUhGLGVBSUU7SUFBTyxJQUFJLEVBQUMsVUFBWjtJQUF1QixXQUFXLEVBQUM7RUFBbkMsRUFKRixlQUtFO0lBQUcsSUFBSSxFQUFDO0VBQVIsbUNBTEYsZUFNRSxvRkFORixDQURGLENBREYsZUFXRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0U7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDRSxnR0FERixlQUVFLHdJQUZGLENBREYsQ0FERixDQVhGLENBREYsQ0FERjtBQXdCRDs7QUFFRCxpRUFBZUEsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0M3QkE7O0FBQ0EsU0FBU0gsT0FBVCxHQUFtQjtFQUNqQixvQkFBTztJQUFLLFNBQVMsRUFBQztFQUFmLGFBQVA7QUFDRDs7QUFFRCxpRUFBZUEsT0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQSxTQUFTSSxNQUFULEdBQWtCO0VBQ2hCLG9CQUNFLHNGQUNFO0lBQUssU0FBTSxXQUFYO0lBQXVCLEVBQUUsRUFBQztFQUExQixnQkFDRTtJQUFLLFNBQU07RUFBWCxnQkFDRTtJQUFNLE1BQU0sRUFBQztFQUFiLGdCQUNFLGdGQURGLGVBR0U7SUFBTyxJQUFJLEVBQUMsTUFBWjtJQUFtQixXQUFXLEVBQUM7RUFBL0IsRUFIRixlQUlFO0lBQU8sSUFBSSxFQUFDLE9BQVo7SUFBb0IsV0FBVyxFQUFDO0VBQWhDLEVBSkYsZUFLRTtJQUFPLElBQUksRUFBQyxVQUFaO0lBQXVCLFdBQVcsRUFBQztFQUFuQyxFQUxGLGVBTUU7SUFBTyxJQUFJLEVBQUMsZ0JBQVo7SUFBNkIsV0FBVyxFQUFDO0VBQXpDLEVBTkYsZUFRRTtJQUFPLElBQUksRUFBQyxNQUFaO0lBQW1CLFdBQVcsRUFBQztFQUEvQixFQVJGLGVBU0U7SUFBTyxJQUFJLEVBQUMsTUFBWjtJQUFtQixXQUFXLEVBQUM7RUFBL0IsRUFURixlQVVFO0lBQU8sSUFBSSxFQUFDLE1BQVo7SUFBbUIsV0FBVyxFQUFDO0VBQS9CLEVBVkYsZUFXRTtJQUFPLElBQUksRUFBQyxNQUFaO0lBQW1CLFdBQVcsRUFBQztFQUEvQixFQVhGLGVBWUU7SUFBTyxJQUFJLEVBQUMsTUFBWjtJQUFtQixXQUFXLEVBQUM7RUFBL0IsRUFaRixlQWFFO0lBQU8sSUFBSSxFQUFDLE1BQVo7SUFBbUIsV0FBVyxFQUFDO0VBQS9CLEVBYkYsZUFjRTtJQUFPLElBQUksRUFBQyxNQUFaO0lBQW1CLFdBQVcsRUFBQztFQUEvQixFQWRGLGVBZ0JFO0lBQUcsSUFBSSxFQUFDO0VBQVIsMkJBaEJGLGVBaUJFLG9GQWpCRixlQWtCRSxvRkFsQkYsQ0FERixDQURGLGVBdUJFO0lBQUssU0FBTTtFQUFYLGdCQUNFO0lBQUssU0FBTTtFQUFYLGdCQUNFO0lBQUssU0FBTTtFQUFYLGdCQUNFLHFHQURGLGVBRUUsb0pBRkYsQ0FERixDQURGLENBdkJGLENBREYsQ0FERjtBQXVDRDs7QUFFRCxpRUFBZUEsTUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0NBRUE7O0FBRUEsU0FBU0wsYUFBVCxHQUF5QjtFQUN2QixJQUFNc0YsUUFBUSxHQUFHRCw2REFBVyxFQUE1QjtFQUNBLElBQU1ELE9BQU8sR0FBR0UsUUFBUSxDQUFDQyxLQUFULENBQWVsRSxJQUEvQjtFQUVBLG9CQUNFO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0UsdUVBQUsrRCxPQUFPLENBQUM5RCxZQUFiLENBREYscUNBR0Usb0ZBSEYsQ0FERjtBQU9EOztBQUVELGlFQUFldEIsYUFBZjs7Ozs7Ozs7Ozs7O0FDakJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvTmF2YmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvUHJvZENhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWlfY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvQ2FydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvQ2hlY2tPdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0xvZ0luLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Qcm9maWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9TaWduVXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL1NpbmdsZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzNmYmEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZXMsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL3BhZ2VzL0hvbWVcIjtcbi8vIGltcG9ydCBjc3MgZnJvbSBcIi4vc3R5bGVzL21haW4ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vYXNzZXRzL2NvbXBvbmVudHMvdWlfY29tcG9uZW50cy9OYXZiYXJcIjtcblxuaW1wb3J0IFNpbmdsZVByb2R1Y3QgZnJvbSBcIi4uL2Fzc2V0cy9wYWdlcy9TaW5nbGVQcm9kdWN0XCI7XG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vYXNzZXRzL3BhZ2VzL1Byb2ZpbGVcIjtcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9hc3NldHMvcGFnZXMvQ2FydFwiO1xuaW1wb3J0IENoZWNrT3V0IGZyb20gXCIuLi9hc3NldHMvcGFnZXMvQ2hlY2tPdXRcIjtcbi8vaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vYXNzZXRzL2NvbXBvbmVudHMvdWlfY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBMb2dJbiBmcm9tIFwiLi9wYWdlcy9Mb2dJblwiO1xuaW1wb3J0IFNpZ25VcCBmcm9tIFwiLi9wYWdlcy9TaWduVXBcIjtcbmltcG9ydCB7IENhcnRQcm92aWRlciB9IGZyb20gXCJyZWFjdC11c2UtY2FydFwiO1xuXG5pbXBvcnQgXCIuLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XG5cbmZ1bmN0aW9uIE1haW4oKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiA8TmF2YmFyIC8+ICovfVxuICAgICAgPENhcnRQcm92aWRlcj5cbiAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lIC8+fT48L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXBpL3Byb2R1Y3QvZmluZC86aWRcIiBlbGVtZW50PXs8U2luZ2xlUHJvZHVjdCAvPn0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2ZpbGVcIiBlbGVtZW50PXs8UHJvZmlsZSAvPn0+PC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NhcnRcIiBlbGVtZW50PXs8Q2FydCAvPn0+PC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NhcnQvY2hlY2tvdXRcIiBlbGVtZW50PXs8Q2hlY2tPdXQgLz59PjwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpbk5cIiBlbGVtZW50PXs8TG9nSW4gLz59PjwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpbk4vc2lnbnVwXCIgZWxlbWVudD17PFNpZ25VcCAvPn0+PC9Sb3V0ZT5cbiAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICA8L0NhcnRQcm92aWRlcj5cbiAgICAgIFxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG5yb290LnJlbmRlcihcbiAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgPE1haW4gLz5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuKTtcbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgXCIuL3N0eWxlcy9hcHAuY3NzXCI7XG5cblxuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCBcIi4vYm9vdHN0cmFwXCI7XG5cbmltcG9ydCBcIi4vTWFpblwiO1xuXG4vLyBpbXBvcnQgXCIuLi9hc3NldHMvcGFnZXMvTG9naW5GdW5jdFwiO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tIFwicmVhY3QtdXNlLWNhcnRcIjtcblxuZnVuY3Rpb24gTmF2YmFyKCkge1xuICBjb25zdCB7IHRvdGFsSXRlbXMgfSA9IHVzZUNhcnQoKTtcbiAgcmV0dXJuIChcblxuICAgIDxkaXY+XG4gICAgICA8bmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm5hdi1hXCI+XG4gICAgICAgICAgICAgIEY0cm0zclxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYtbGlua3NcIj5cbiAgXG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+IEhvbWUgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvZmlsZVwiPiBQcm9maWxlIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NhcnRcIj5DYXJ0OiB7dG90YWxJdGVtc30gPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgey8qIDxMaW5rIHRvPVwiL2xvZ2luXCI+IExvZyBpbiA8L0xpbms+ICovfVxuICAgICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIj4gTG9nIGluIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuIFxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcblxuLypcbiAgICAqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tIFwicmVhY3QtdXNlLWNhcnRcIjtcblxuLy8gY29uc3QgUHJvZENhcnQgPSAoeyBwcm9kdWN0OiB7IGlkLCBwcm9kdWN0TmFtZSwgc2hvcnREZXNjcmlwdGlvbiwgcHJvZHVjdFByaWNlLCBpbWFnZVVybCB9IH0pID0+IHtcbmNvbnN0IFByb2RDYXJ0ID0gKHsgZGF0YSwgcHJvZHVjdF9uYW1lLCBkZXNjcmlwdGlvbiwgdW5pdHMsIHByaWNlLCBpZCwgaW1hZ2UgPSBudWxsIH0pID0+IHtcbiAgYzsgLy8gZnVuY3Rpb24gUHJvZHVjdENhcmQoeyBkYXRhLCBwcm9kdWN0X25hbWUsIGRlc2NyaXB0aW9uLCB1bml0cywgcHJpY2UsIGltYWdlID0gbnVsbCB9KSB7XG4gIGNvbnN0IHsgYWRkSXRlbSB9ID0gdXNlQ2FydCgpO1xuICBjb25zdCBwaWMgPSBpbWFnZSA/IGltYWdlIDogXCJubyBpbWFnZSBhdmFpbGFibGVcIjtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMSBjb2wtbWQtNiBjb2wtbGctMyBteC0wIG1iLTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBwLTAgb3ZlcmZsb3ctaGlkZGVuIGgtMTAwIHNoYWRvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+JCB7ZGF0YS5wcm9kdWN0X25hbWV9PC9oNT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e2RhdGEucHJpY2V9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntwaWN9PC9wPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgIGFkZEl0ZW0oe1xuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RfbmFtZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBwcmljZSxcbiAgICAgICAgICAgICAgICBwaWMsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWRkIHRvIGNhcnRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2RDYXJ0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tIFwicmVhY3QtdXNlLWNhcnRcIjtcblxuY29uc3QgYXBpSGVhZCA9ICdodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vJztcbmNvbnN0IHJhbmRBcGlIZWFkID0gJ2h0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS81MDB4NDAwLz8nO1xuY29uc3QgY291bnRfd29yZHMgPSAod29yZF9hcnJheSkgPT4ge1xuICBsZXQgdG90YWwgPSAwO1xuICB3b3JkX2FycmF5LmZvckVhY2goKCkgPT4ge1xuICAgIHRvdGFsKys7XG4gIH0pO1xuICByZXR1cm4gdG90YWw7XG59XG5cbmZ1bmN0aW9uIFByb2R1Y3RDYXJkKHsgZGF0YSwgcHJvZHVjdF9uYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGlkLCB1bml0cz1udWxsLCBpbWFnZSA9IG51bGwgfSkge1xuICBsZXQgcmFuZEltYWdlID0gcmFuZEFwaUhlYWQ7XG4gIFxuICB1bml0cyA9IHVuaXRzID8gdW5pdHM6ICdrZyc7XG5cbiAgaWYoIWltYWdlKXtcblxuICAgIGlmIChjb3VudF93b3Jkcyhwcm9kdWN0X25hbWUuc3BsaXQoKSkgPiAxKXtcbiAgICAgIGNvbnN0IG5hbWVfYXJyYXkgPSBwcm9kdWN0X25hbWUuc3BsaXQoKTtcbiAgICAgIGNvbnNvbGUubG9nKGNvdW50X3dvcmRzKG5hbWVfYXJyYXkpKVxuICAgICAgY29uc3QgdG90YWxfd29yZHMgPSBjb3VudF93b3JkcyhuYW1lX2FycmF5KTtcbiAgICAgIGNvbnN0IG5vdW4gPSBuYW1lX2FycmF5W3RvdGFsX3dvcmRzIC0gMV07XG4gICAgICByYW5kSW1hZ2UgKz0gbm91bjtcbiAgICAgIFxuICAgIH1cbiAgICBlbHNle1xuICAgICAgcmFuZEltYWdlICs9IHByb2R1Y3RfbmFtZVxuICAgIH1cbiAgICBpbWFnZSA9IHJhbmRJbWFnZTtcbiAgfWVsc2UgaWYoIWltYWdlLmluY2x1ZGVzKCdodHRwczovLycpKXtcbiAgICBpbWFnZSA9IGFwaUhlYWQgKyBpbWFnZTtcbiAgfVxuXG4gIGNvbnN0IHsgYWRkSXRlbSB9ID0gdXNlQ2FydCgpO1xuICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250YWluZXIgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgZnJvbnQtZmFjZVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiYWNrLWZhY2VcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZW1vdmVcIj5cbiAgICAgICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJyZW1vdmVcIiBvbkNsaWNrPXsoKSA9PiByZW1vdmVSZWNpcGUocmVjaXBlLmlkKX0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAge2VsZW1lbnR9XG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e3Byb2R1Y3RfbmFtZX0ge3ByaWNlfeKCrC97dW5pdHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImNhcmQtbGlua1wiIHRvPXtgL2FwaS9wcm9kdWN0L2ZpbmQvJHtpZH1gfT5cbiAgICAgICAgICAgICAgICBTZWUgbW9yZVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiAgIC8vY29uc29sZS5sb2coJ2hlbGxvJykgICAgICAgICAgXG4gICAgICAgICAgICAgICBhZGRJdGVtKHsgaWQ6IGlkLCBwcm9kdWN0X25hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgaW1hZ2UgfSlcbiAgICAgICAgICAgIH0gPlxuICAgICAgICAgICAgICBBZGQgdG8gY2FydFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZDtcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gXCJyZWFjdC11c2UtY2FydFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDYXJ0ID0gKCkgPT4ge1xuICBjb25zdCB7IGlzRW1wdHksIGNhcnRUb3RhbCwgdG90YWxVbmlxdWVJdGVtcywgaXRlbXMsIHRvdGFsSXRlbXMsIHVwZGF0ZUl0ZW1RdWFudGl0eSwgcmVtb3ZlSXRlbSwgZW1wdHlDYXJ0IH0gPSB1c2VDYXJ0KCk7XG4gIC8vIGNvbnNvbGUubG9nKFwiaXRlbXNcIiwgaXRlbXMpO1xuICAvLyBjb25zdCBbdG90YWxBbW91bnQsIHNldFRvdGFsQW1vdW50XSA9IHVzZVN0YXRlKCk7XG5cbiAgaWYgKGlzRW1wdHkpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYWxlcnQgYWxlcnQtaW5mb1wiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICBZb3VyIGNhcnQgaXMgZW1wdHlcbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgY29uc3QgaGFuZGxlQ2hlY2tvdXQgPSAoKSA9PiB7XG4gICAgYWxlcnQoXCJUaGFua3MgZm9yIHB1cmNoYXNpbmcgb3VyIHByb2R1Y3RzIVwiKTtcbiAgICBlbXB0eUNhcnQoKTtcbiAgfTtcbiAgLy8gY29uc29sZS5sb2coY2FydFRvdGFsKTtcbiAgY29uc3QgdG90YWxhbSA9IGNhcnRUb3RhbDtcbiAgLy8gY29uc29sZS5sb2codG90YWxhbSk7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktNCBjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICA8aDE+Q2FydDwvaDE+XG4gICAgICAgICAgPGg1PlxuICAgICAgICAgICAgQ2FydCAoe3RvdGFsVW5pcXVlSXRlbXN9KSBUb3RhbCBJdGVtczoge3RvdGFsSXRlbXN9XG4gICAgICAgICAgPC9oNT5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtbGlnaHQgdGFibGUtaG92ZXIgbS0wXCI+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGg+UHJvZHVjdDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+UXVhbnRpdHk8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5Ub3RhbDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPlJlbW92ZTwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gc2V0VG90YWxBbW91bnQoaXRlbS5xdWFudGl0eSAqIGl0ZW0ucHJpY2UpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLnBpY30gYWx0PXtpdGVtLnByb2R1Y3RfbmFtZX0gc3R5bGU9e3sgaGVpZ2h0OiBcIjZyZW1cIiB9fSAvPiB7aXRlbS5wcm9kdWN0X25hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4ke2l0ZW0ucHJpY2V9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e2l0ZW0ucXVhbnRpdHl9IG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlSXRlbVF1YW50aXR5KGl0ZW0uaWQsIGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPiR7aXRlbS5xdWFudGl0eSAqIGl0ZW0ucHJpY2V9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgey8qIDx0ZD57dG90YWxBbW91bnR9PC90ZD4gKi99XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlSXRlbShpdGVtLmlkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZW1vdmVcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBtcy1hdXRvXCI+XG4gICAgICAgICAgICA8aDI+VG90YWwgcHJpY2U6ICR7Y2FydFRvdGFsfTwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgbS0yXCIgb25DbGljaz17ZW1wdHlDYXJ0fT5cbiAgICAgICAgICAgICAgRW1wdHkgQ2FydFxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIG0tMlwiPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9jYXJ0L2NoZWNrb3V0XCIgdG90YWxhbT17dG90YWxhbX0+XG4gICAgICAgICAgICAgICAgey8qIENoZWNrb3V0IHtjYXJ0VG90YWx9ICovfVxuICAgICAgICAgICAgICAgIHsvKiBDaGVja291dCB7dG90YWxhbX0gKi99XG4gICAgICAgICAgICAgICAgQ2hlY2tvdXQge3RvdGFsYW19XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSBcInJlYWN0LXVzZS1jYXJ0XCI7XG5cbi8vIGZ1bmN0aW9uIENoZWNrT3V0KHsgdG90YWxhbSB9KSB7XG5mdW5jdGlvbiBDaGVja091dCgpIHtcbiAgY29uc3QgeyBjYXJ0VG90YWwgfSA9IHVzZUNhcnQoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+Q2hlY2tPdXQ8L2gxPlxuICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWw+VG90YWwgQW1vdW50PC9sYWJlbD5cblxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9e2NhcnRUb3RhbH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbD5QYXltZW50IE1ldGhvZDwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgIDxvcHRpb24+Q3JlZGl0IENhcmQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24+RGViaXQgQ2FyZDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbj5OZXQgQmFua2luZzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbj5DYXNoIG9uIERlbGl2ZXJ5PC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgXCI+XG4gICAgICAgICAgPGxhYmVsPkNhcmQgTnVtYmVyPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWw+RXhwaXJ5IERhdGU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWw+Q1ZWPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWw+TmFtZSBvbiBDYXJkPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsPkFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgIFN1Ym1pdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tPdXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy91aV9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gXCJyZWFjdC11c2UtY2FydFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdWlfY29tcG9uZW50cy9Qcm9kdWN0Q2FyZFwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2FwcC5jc3NcIjtcbmltcG9ydCBQcm9kQ2FydCBmcm9tIFwiLi4vY29tcG9uZW50cy91aV9jb21wb25lbnRzL1Byb2RDYXJ0XCI7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBnZXRQcm9kdWN0cyA9ICgpID0+IGF4aW9zLmdldChcIi9hcGkvcHJvZHVjdHMvYWxsXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIFByb21pc2UuYWxsKFtnZXRQcm9kdWN0cygpXSkudGhlbihmdW5jdGlvbiAocmVzdWx0cykge1xuICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0c1swXSk7XG5cbiAgICAgIGNvbnN0IHByb2R1Y3RzRGF0YSA9IHJlc3VsdHNbMF07XG5cbiAgICAgIHNldFByb2R1Y3RzKHByb2R1Y3RzRGF0YS5kYXRhKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgeyB0b3RhbEl0ZW1zIH0gPSB1c2VDYXJ0KCk7XG4gIC8vIGNvbnNvbGUubG9nKHRvdGFsSXRlbXMsIFwidG90YWxJdGVtc1wiKTtcblxuICBjb25zdCBwcm9kdWN0RmlsdGVyID0gcHJvZHVjdHMuZmlsdGVyKChyZXMpID0+IHtcbiAgICByZXR1cm4gcmVzLnByb2R1Y3RfbmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKTtcbiAgfSk7XG5cbiAgY29uc3Qgc2VhcmNoSGFuZGxlciA9IChlKSA9PiB7XG4gICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhzZWFyY2gpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgXG5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiY29udGFpbmVyLXNlYXJjaFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cInNlYXJjaFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiDwn5SNIFNlYXJjaC4uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17c2VhcmNoSGFuZGxlcn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLwn5SNXCIgb25DaGFuZ2U9e3NlYXJjaEhhbmRsZXJ9IC8+XG4gICAgICA8L2Rpdj4gKi99XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJvd3NlclwiPlxuICAgICAgICB7cHJvZHVjdEZpbHRlci5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICA8UHJvZHVjdENhcmQga2V5PXtwcm9kdWN0LmlkfSBkYXRhPXtwcm9kdWN0fSB7Li4ucHJvZHVjdH0gLz4gICAgICAgICBcbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBjc3MgZnJvbSBcIi4uL3N0eWxlcy9sb2dpbi5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIExvZ0luKCkge1xuICByZXR1cm4gKFxuICAgIDxib2R5PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBpZD1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udGFpbmVyIGxvZy1pbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XG4gICAgICAgICAgICA8aDE+TG9naW48L2gxPlxuXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJVc2VyIG5hbWUvRW1haWxcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5JZiB5b3UgYXJlIG5ldyBQbGVhc2Ugc2lnbnVwPzwvYT5cbiAgICAgICAgICAgIDxidXR0b24+TG9nIEluPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5LXBhbmVsIG92ZXJsYXktcmlnaHRcIj5cbiAgICAgICAgICAgICAgPGgxPkZhcm1lciBsb2dpbiBmcm9tIGhlcmU8L2gxPlxuICAgICAgICAgICAgICA8cD5TbyB3ZSBjYW4gcHV0IHNvbWUgaW5zdHJ1Y3Rpb24gZm9yIHRoZSBmYXJtZXIgYmxzIGJsYSBibGEgLiAuIC48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2JvZHk+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ0luO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzLm1vZHVsZS5jc3NcIjtcbmZ1bmN0aW9uIFByb2ZpbGUoKSB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VDb250YWluZXJcIj5Qcm9maWxlPC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTaWduVXAoKSB7XG4gIHJldHVybiAoXG4gICAgPGJvZHk+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udGFpbmVyIGxvZy1pbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XG4gICAgICAgICAgICA8aDI+U2lnbnVwPC9oMj5cblxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJVc2VyYW1lXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmVwZWF0cGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIiBSZXBlYXRQYXNzd29yZFwiIC8+XG5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUmVhbCBuYW1lXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQ29tcGFueS1jb21wYW55XCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQmFuayBhY2NvdW50XCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVmlzYVwiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkRlbGV2ZXJ5IG1ldGhvZFwiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZHJlc3NcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQYXkgbWV0aG9kXCIgLz5cblxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Gb3Jnb3QgeW91ciBwYXNzd29yZD88L2E+XG4gICAgICAgICAgICA8YnV0dG9uPkNhbmNsZTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbj5TaWdudXA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheS1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXktcGFuZWwgb3ZlcmxheS1yaWdodFwiPlxuICAgICAgICAgICAgICA8aDI+TmV3IEZhcm1lciBzaWdudXAgZnJvbSBoZXJlPC9oMj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgU28gd2UgY2FuIHB1dCBzb21lIGluc3RydWN0aW9uIGZvciB0aGUgZmFybWVyIHNvbWV0aGluZyBoZXJlXG4gICAgICAgICAgICAgICAgc29tdGhpbmcgaGVyZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9ib2R5PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG4vLyBpbXBvcnQgY3NzIGZyb20gXCIuLi9zdHlsZXMvcGFnZXMubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBTaW5nbGVQcm9kdWN0KCkge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IHByb2R1Y3QgPSBsb2NhdGlvbi5zdGF0ZS5kYXRhO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlQ29udGFpbmVyXCI+XG4gICAgICA8aDE+e3Byb2R1Y3QucHJvZHVjdF9uYW1lfTwvaDE+XG4gICAgICBTaW5nbGVQcm9kdWN0IE5hbWVcbiAgICAgIDxkaXY+dGVzdCB0ZXN0PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVByb2R1Y3Q7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIlJlYWN0IiwiUmVhY3RET00iLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJIb21lIiwiTmF2YmFyIiwiU2luZ2xlUHJvZHVjdCIsIlByb2ZpbGUiLCJDYXJ0IiwiQ2hlY2tPdXQiLCJMb2dJbiIsIlNpZ25VcCIsIkNhcnRQcm92aWRlciIsIk1haW4iLCJyb290IiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJMaW5rIiwidXNlQ2FydCIsInRvdGFsSXRlbXMiLCJQcm9kQ2FydCIsImRhdGEiLCJwcm9kdWN0X25hbWUiLCJkZXNjcmlwdGlvbiIsInVuaXRzIiwicHJpY2UiLCJpZCIsImltYWdlIiwiYyIsImFkZEl0ZW0iLCJwaWMiLCJhcGlIZWFkIiwicmFuZEFwaUhlYWQiLCJjb3VudF93b3JkcyIsIndvcmRfYXJyYXkiLCJ0b3RhbCIsImZvckVhY2giLCJQcm9kdWN0Q2FyZCIsInJhbmRJbWFnZSIsInNwbGl0IiwibmFtZV9hcnJheSIsImNvbnNvbGUiLCJsb2ciLCJ0b3RhbF93b3JkcyIsIm5vdW4iLCJpbmNsdWRlcyIsInVzZVN0YXRlIiwiaXNFbXB0eSIsImNhcnRUb3RhbCIsInRvdGFsVW5pcXVlSXRlbXMiLCJpdGVtcyIsInVwZGF0ZUl0ZW1RdWFudGl0eSIsInJlbW92ZUl0ZW0iLCJlbXB0eUNhcnQiLCJoYW5kbGVDaGVja291dCIsImFsZXJ0IiwidG90YWxhbSIsIm1hcCIsIml0ZW0iLCJoZWlnaHQiLCJxdWFudGl0eSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsInNlYXJjaCIsInNldFNlYXJjaCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZ2V0UHJvZHVjdHMiLCJnZXQiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsInJlc3VsdHMiLCJwcm9kdWN0c0RhdGEiLCJwcm9kdWN0RmlsdGVyIiwiZmlsdGVyIiwicmVzIiwidG9Mb3dlckNhc2UiLCJzZWFyY2hIYW5kbGVyIiwicHJvZHVjdCIsInVzZUxvY2F0aW9uIiwibG9jYXRpb24iLCJzdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=
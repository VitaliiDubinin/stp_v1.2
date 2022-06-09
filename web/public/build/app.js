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
/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/Login */ "./assets/pages/Login.js");
/* harmony import */ var _pages_SignUpFirst__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/SignUpFirst */ "./assets/pages/SignUpFirst.js");
/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-use-cart */ "./node_modules/react-use-cart/dist/react-use-cart.esm.js");
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");



 // import css from "./styles/main.module.css";





 //import Footer from "../assets/components/ui_components/Footer";






function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_use_cart__WEBPACK_IMPORTED_MODULE_10__.CartProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_components_ui_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/profile",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_Profile__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "products/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_SingleProduct__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/cart",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_Cart__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/cart/checkout",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_CheckOut__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Login__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/loginN/signup",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_SignUpFirst__WEBPACK_IMPORTED_MODULE_9__["default"], null)
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












var apiHead = "https://source.unsplash.com/";
var randApiHead = "https://source.unsplash.com/500x400/?";

var count_words = function count_words(word_array) {
  var total = 0;
  word_array.forEach(function () {
    total++;
  });
  return total;
}; // function ProductCard({ data, product_name, description, price, id, units = null, image = null }) {


function ProductCard(_ref) {
  var data = _ref.data,
      product_name = _ref.product_name,
      description = _ref.description,
      price = _ref.price,
      id = _ref.id;
  var randImage = randApiHead; // const [picimage, setPicimage] = useState();

  data.units = data.units ? data.units : "kg";

  if (!data.image) {
    if (count_words(product_name.split()) > 1) {
      var name_array = product_name.split();
      console.log(count_words(name_array));
      var total_words = count_words(name_array);
      var noun = name_array[total_words - 1];
      randImage += noun;
    } else {
      randImage += product_name;
    }

    data.image = randImage;
  } else if (!data.image.includes("https://")) {
    data.image = apiHead + image;
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
    src: data.image
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "card back-face"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "remove"
  }, "element"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("img", {
    src: data.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "title"
  }, product_name, " ", price, "\u20AC/", data.units), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("p", null, description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link, {
    to: "products/".concat(id),
    state: {
      data: data
    }
  }, " ", "See more"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("button", {
    className: "btn btn-success",
    onClick: function onClick() {
      return (//console.log('hello')
        addItem({
          id: id,
          product_name: product_name,
          description: description,
          price: price,
          image: data.image
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
      src: item.image,
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
  }, "Checkout"))))));
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

/***/ "./assets/pages/Login.js":
/*!*******************************!*\
  !*** ./assets/pages/Login.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _firebaseCon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./firebaseCon */ "./assets/pages/firebaseCon.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


























function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Login() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      registerEmail = _useState2[0],
      setRegisterEmail = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      registerPassword = _useState4[0],
      setRegisterPassword = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      loginEmail = _useState6[0],
      setLoginEmail = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      loginPassword = _useState8[0],
      setLoginPassword = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)("login"),
      _useState10 = _slicedToArray(_useState9, 2),
      currentForm = _useState10[0],
      setCurrentForm = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)({}),
      _useState12 = _slicedToArray(_useState11, 2),
      user = _useState12[0],
      setUser = _useState12[1];

  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_27__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_24__.useEffect)(function () {
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_25__.onAuthStateChanged)(_firebaseCon__WEBPACK_IMPORTED_MODULE_26__.auth, function (currentUser) {
      setUser(currentUser);
    });
  }, []);

  var register = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _user;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_25__.createUserWithEmailAndPassword)(_firebaseCon__WEBPACK_IMPORTED_MODULE_26__.auth, registerEmail, registerPassword);

            case 3:
              _user = _context.sent;
              console.log(_user);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0.message);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function register() {
      return _ref.apply(this, arguments);
    };
  }();

  var login = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _user2;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_25__.signInWithEmailAndPassword)(_firebaseCon__WEBPACK_IMPORTED_MODULE_26__.auth, loginEmail, loginPassword);

            case 3:
              _user2 = _context2.sent;
              navigate("/profile");
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0.message);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    return function login() {
      return _ref2.apply(this, arguments);
    };
  }();

  var logout = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_25__.signOut)(_firebaseCon__WEBPACK_IMPORTED_MODULE_26__.auth);

            case 2:
              setUser({});

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function logout() {
      return _ref3.apply(this, arguments);
    };
  }();

  var toggleCurrentForm = function toggleCurrentForm() {
    var nextForm = currentForm === "login" ? "signup" : "login";
    setCurrentForm(nextForm);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "App"
  }, currentForm === "signup" && (!user || !user.email) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("h3", null, " Register User "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("input", {
    placeholder: "Email...",
    onChange: function onChange(event) {
      setRegisterEmail(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("input", {
    placeholder: "Password...",
    onChange: function onChange(event) {
      setRegisterPassword(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("button", {
    onClick: register
  }, " Create User"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("a", {
    href: "#",
    onClick: toggleCurrentForm
  }, "Have account?")), currentForm === "login" && !(user !== null && user !== void 0 && user.email) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("h3", null, " Login "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("input", {
    placeholder: "Email...",
    onChange: function onChange(event) {
      setLoginEmail(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("input", {
    placeholder: "Password...",
    onChange: function onChange(event) {
      setLoginPassword(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("button", {
    onClick: login
  }, " Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("a", {
    href: "#",
    onClick: toggleCurrentForm
  }, "Have no account?")), (user === null || user === void 0 ? void 0 : user.email) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("h4", null, " User Logged In: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("button", {
    onClick: logout
  }, " Sign Out ")));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

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
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


























function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Profile() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_25__.getAuth)();
  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_25__.onAuthStateChanged)(auth, function (user) {
    if (user) {
      setUser(user);
    } else {
      setUser({});
    }
  });

  var logout = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_25__.signOut)(auth);

            case 2:
              setUser({});

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function logout() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement((react__WEBPACK_IMPORTED_MODULE_24___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "pageContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("h4", null, user.email, " Logged In "), (!user || !user.email) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("button", null, "Login"), (user === null || user === void 0 ? void 0 : user.email) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("button", {
    onClick: logout
  }, " Sign Out "))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

/***/ }),

/***/ "./assets/pages/SignUpFirst.js":
/*!*************************************!*\
  !*** ./assets/pages/SignUpFirst.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function SignUpFirst() {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpFirst);

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
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-use-cart */ "./node_modules/react-use-cart/dist/react-use-cart.esm.js");






var SingleProduct = function SingleProduct() {
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useLocation)();
  var product = location.state.data;
  console.log(product);

  var _useCart = (0,react_use_cart__WEBPACK_IMPORTED_MODULE_3__.useCart)(),
      addItem = _useCart.addItem;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "col-10 mx-auto m-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "card p-0 overflow-hidden h-100 shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "card-body text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", {
    src: product.image,
    alt: product.product_name,
    className: "card-image-top img-fluid mb-3",
    style: {
      width: "15rem",
      marginBottom: "1rem"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h5", {
    className: "card-title"
  }, product.product_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "card-text"
  }, product.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "card-text"
  }, product.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    className: "btn btn-success",
    onClick: function onClick() {
      return addItem(product);
    }
  }, "Add to cart"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    className: "btn btn-success m-2",
    href: "/"
  }, "Return to Home"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleProduct);

/***/ }),

/***/ "./assets/pages/firebaseCon.js":
/*!*************************************!*\
  !*** ./assets/pages/firebaseCon.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auth": () => (/* binding */ auth)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");


var firebaseConfig = {
  apiKey: "AIzaSyCndxYl0vtS2LagHm5DNuwU8jUQvYCLE-0",
  authDomain: "login-farmer.firebaseapp.com",
  projectId: "login-farmer",
  storageBucket: "login-farmer.appspot.com",
  messagingSenderId: "386671425852",
  appId: "1:386671425852:web:2c31fe499ddc555e300639"
};
var app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_fu-042f30","vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_filter_js-node_modu-64f693"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0VBQWIsR0FBMEI4RCxPQUFPLENBQUM3RCxXQUFsQyxDQVJGLGVBU0U7SUFBRyxTQUFTLEVBQUM7RUFBYixHQUEwQjZELE9BQU8sQ0FBQzNELEtBQWxDLENBVEYsZUFXRTtJQUFRLFNBQVMsRUFBQyxpQkFBbEI7SUFBb0MsT0FBTyxFQUFFO01BQUEsT0FBTUksT0FBTyxDQUFDdUQsT0FBRCxDQUFiO0lBQUE7RUFBN0MsaUJBWEYsZUFjRTtJQUFHLFNBQVMsRUFBQyxxQkFBYjtJQUFtQyxJQUFJLEVBQUM7RUFBeEMsb0JBZEYsQ0FERixDQURGLENBREY7QUF3QkQsQ0E5QkQ7O0FBZ0NBLGlFQUFlcEYsYUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUVBLElBQU15SCxjQUFjLEdBQUc7RUFDckJDLE1BQU0sRUFBRSx5Q0FEYTtFQUVyQkMsVUFBVSxFQUFFLDhCQUZTO0VBR3JCQyxTQUFTLEVBQUUsY0FIVTtFQUlyQkMsYUFBYSxFQUFFLDBCQUpNO0VBS3JCQyxpQkFBaUIsRUFBRSxjQUxFO0VBTXJCQyxLQUFLLEVBQUU7QUFOYyxDQUF2QjtBQVNBLElBQU1qSCxHQUFHLEdBQUcwRywyREFBYSxDQUFDQyxjQUFELENBQXpCO0FBRU8sSUFBTS9CLElBQUksR0FBR3VCLHNEQUFPLENBQUNuRyxHQUFELENBQXBCOzs7Ozs7Ozs7Ozs7QUNkUCIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9NYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aV9jb21wb25lbnRzL05hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aV9jb21wb25lbnRzL1Byb2RDYXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvUHJvZHVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0NoZWNrT3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Ib21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvUHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvU2lnblVwRmlyc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL1NpbmdsZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL2ZpcmViYXNlQ29uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz8zZmJhIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9Ib21lXCI7XG4vLyBpbXBvcnQgY3NzIGZyb20gXCIuL3N0eWxlcy9tYWluLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvTmF2YmFyXCI7XG5cbmltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gXCIuLi9hc3NldHMvcGFnZXMvU2luZ2xlUHJvZHVjdFwiO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uL2Fzc2V0cy9wYWdlcy9Qcm9maWxlXCI7XG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vYXNzZXRzL3BhZ2VzL0NhcnRcIjtcbmltcG9ydCBDaGVja091dCBmcm9tIFwiLi4vYXNzZXRzL3BhZ2VzL0NoZWNrT3V0XCI7XG4vL2ltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vcGFnZXMvTG9naW5cIjtcbmltcG9ydCBTaWduVXAgZnJvbSBcIi4vcGFnZXMvU2lnblVwRmlyc3RcIjtcbmltcG9ydCB7IENhcnRQcm92aWRlciB9IGZyb20gXCJyZWFjdC11c2UtY2FydFwiO1xuXG5pbXBvcnQgXCIuLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XG5cbmZ1bmN0aW9uIE1haW4oKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiA8TmF2YmFyIC8+ICovfVxuICAgICAgPENhcnRQcm92aWRlcj5cbiAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lIC8+fT48L1JvdXRlPlxuICAgICAgICAgICAgey8qIDxSb3V0ZSBwYXRoPVwiL2FwaS9wcm9kdWN0L2ZpbmQvOmlkXCIgZWxlbWVudD17PFNpbmdsZVByb2R1Y3QgLz59IC8+ICovfVxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZmlsZVwiIGVsZW1lbnQ9ezxQcm9maWxlIC8+fT48L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJwcm9kdWN0cy86aWRcIiBlbGVtZW50PXs8U2luZ2xlUHJvZHVjdCAvPn0+PC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NhcnRcIiBlbGVtZW50PXs8Q2FydCAvPn0+PC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NhcnQvY2hlY2tvdXRcIiBlbGVtZW50PXs8Q2hlY2tPdXQgLz59PjwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGVsZW1lbnQ9ezxMb2dpbiAvPn0+PC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luTi9zaWdudXBcIiBlbGVtZW50PXs8U2lnblVwIC8+fT48L1JvdXRlPlxuICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICA8L1JvdXRlcj5cbiAgICAgIDwvQ2FydFByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG5yb290LnJlbmRlcihcbiAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgPE1haW4gLz5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuKTtcbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgXCIuL3N0eWxlcy9hcHAuY3NzXCI7XG5cblxuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCBcIi4vYm9vdHN0cmFwXCI7XG5cbmltcG9ydCBcIi4vTWFpblwiO1xuXG4vLyBpbXBvcnQgXCIuLi9hc3NldHMvcGFnZXMvTG9naW5GdW5jdFwiO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tIFwicmVhY3QtdXNlLWNhcnRcIjtcblxuZnVuY3Rpb24gTmF2YmFyKCkge1xuICBjb25zdCB7IHRvdGFsSXRlbXMgfSA9IHVzZUNhcnQoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPG5hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJuYXYtYVwiPlxuICAgICAgICAgICAgICBGNHJtM3JcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPiBIb21lIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICB7LyogPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvZmlsZVwiPiBQcm9maWxlIDwvTGluaz5cbiAgICAgICAgICA8L2xpPiAqL31cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvY2FydFwiPkNhcnQ6IHt0b3RhbEl0ZW1zfSA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICB7LyogPExpbmsgdG89XCIvbG9naW5cIj4gTG9nIGluIDwvTGluaz4gKi99XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCI+IExvZyBpbiA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcblxuLypcbiAqL1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gXCJyZWFjdC11c2UtY2FydFwiO1xuXG4vLyBjb25zdCBQcm9kQ2FydCA9ICh7IHByb2R1Y3Q6IHsgaWQsIHByb2R1Y3ROYW1lLCBzaG9ydERlc2NyaXB0aW9uLCBwcm9kdWN0UHJpY2UsIGltYWdlVXJsIH0gfSkgPT4ge1xuY29uc3QgUHJvZENhcnQgPSAoeyBkYXRhLCBwcm9kdWN0X25hbWUsIGRlc2NyaXB0aW9uLCB1bml0cywgcHJpY2UsIGlkLCBpbWFnZSA9IG51bGwgfSkgPT4ge1xuICBjOyAvLyBmdW5jdGlvbiBQcm9kdWN0Q2FyZCh7IGRhdGEsIHByb2R1Y3RfbmFtZSwgZGVzY3JpcHRpb24sIHVuaXRzLCBwcmljZSwgaW1hZ2UgPSBudWxsIH0pIHtcbiAgY29uc3QgeyBhZGRJdGVtIH0gPSB1c2VDYXJ0KCk7XG4gIGNvbnN0IHBpYyA9IGltYWdlID8gaW1hZ2UgOiBcIm5vIGltYWdlIGF2YWlsYWJsZVwiO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTExIGNvbC1tZC02IGNvbC1sZy0zIG14LTAgbWItNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHAtMCBvdmVyZmxvdy1oaWRkZW4gaC0xMDAgc2hhZG93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj4kIHtkYXRhLnByb2R1Y3RfbmFtZX08L2g1PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57ZGF0YS5wcmljZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3BpY308L3A+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgYWRkSXRlbSh7XG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgcHJvZHVjdF9uYW1lLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIHByaWNlLFxuICAgICAgICAgICAgICAgIHBpYyxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBZGQgdG8gY2FydFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZENhcnQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSBcInJlYWN0LXVzZS1jYXJ0XCI7XG5cbmNvbnN0IGFwaUhlYWQgPSBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9cIjtcbmNvbnN0IHJhbmRBcGlIZWFkID0gXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vNTAweDQwMC8/XCI7XG5jb25zdCBjb3VudF93b3JkcyA9ICh3b3JkX2FycmF5KSA9PiB7XG4gIGxldCB0b3RhbCA9IDA7XG4gIHdvcmRfYXJyYXkuZm9yRWFjaCgoKSA9PiB7XG4gICAgdG90YWwrKztcbiAgfSk7XG4gIHJldHVybiB0b3RhbDtcbn07XG5cbi8vIGZ1bmN0aW9uIFByb2R1Y3RDYXJkKHsgZGF0YSwgcHJvZHVjdF9uYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGlkLCB1bml0cyA9IG51bGwsIGltYWdlID0gbnVsbCB9KSB7XG5mdW5jdGlvbiBQcm9kdWN0Q2FyZCh7IGRhdGEsIHByb2R1Y3RfbmFtZSwgZGVzY3JpcHRpb24sIHByaWNlLCBpZCB9KSB7XG4gIGxldCByYW5kSW1hZ2UgPSByYW5kQXBpSGVhZDtcbiAgLy8gY29uc3QgW3BpY2ltYWdlLCBzZXRQaWNpbWFnZV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGRhdGEudW5pdHMgPSBkYXRhLnVuaXRzID8gZGF0YS51bml0cyA6IFwia2dcIjtcblxuICBpZiAoIWRhdGEuaW1hZ2UpIHtcbiAgICBpZiAoY291bnRfd29yZHMocHJvZHVjdF9uYW1lLnNwbGl0KCkpID4gMSkge1xuICAgICAgY29uc3QgbmFtZV9hcnJheSA9IHByb2R1Y3RfbmFtZS5zcGxpdCgpO1xuICAgICAgY29uc29sZS5sb2coY291bnRfd29yZHMobmFtZV9hcnJheSkpO1xuICAgICAgY29uc3QgdG90YWxfd29yZHMgPSBjb3VudF93b3JkcyhuYW1lX2FycmF5KTtcbiAgICAgIGNvbnN0IG5vdW4gPSBuYW1lX2FycmF5W3RvdGFsX3dvcmRzIC0gMV07XG4gICAgICByYW5kSW1hZ2UgKz0gbm91bjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmFuZEltYWdlICs9IHByb2R1Y3RfbmFtZTtcbiAgICB9XG4gICAgZGF0YS5pbWFnZSA9IHJhbmRJbWFnZTtcbiAgfSBlbHNlIGlmICghZGF0YS5pbWFnZS5pbmNsdWRlcyhcImh0dHBzOi8vXCIpKSB7XG4gICAgZGF0YS5pbWFnZSA9IGFwaUhlYWQgKyBpbWFnZTtcbiAgfVxuXG4gIGNvbnN0IHsgYWRkSXRlbSB9ID0gdXNlQ2FydCgpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRhaW5lciBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGZyb250LWZhY2VcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmltYWdlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiYWNrLWZhY2VcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtb3ZlXCI+ZWxlbWVudDwvZGl2PlxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicmVtb3ZlXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlUmVjaXBlKHJlY2lwZS5pZCl9PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHtlbGVtZW50fVxuICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5pbWFnZX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3RfbmFtZX0ge3ByaWNlfeKCrC97ZGF0YS51bml0c31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiA8TGluayBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIiB0bz17YC9hcGkvcHJvZHVjdC9maW5kLyR7aWR9YH0+ICovfVxuICAgICAgICAgICAgey8qIDxMaW5rIHRvPXtgcHJvZHVjdHMvJHtpZH1gfSBkYXRhPXtkYXRhfT5cbiAgICAgICAgICAgICAgU2VlIG1vcmVcbiAgICAgICAgICAgIDwvTGluaz4gKi99XG4gICAgICAgICAgICA8TGluayB0bz17YHByb2R1Y3RzLyR7aWR9YH0gc3RhdGU9e3sgZGF0YTogZGF0YSB9fT5cbiAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICBTZWUgbW9yZVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2hlbGxvJylcbiAgICAgICAgICAgICAgICBhZGRJdGVtKHsgaWQ6IGlkLCBwcm9kdWN0X25hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgaW1hZ2U6IGRhdGEuaW1hZ2UgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBZGQgdG8gY2FydFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gXCJyZWFjdC11c2UtY2FydFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDYXJ0ID0gKCkgPT4ge1xuICBjb25zdCB7IGlzRW1wdHksIGNhcnRUb3RhbCwgdG90YWxVbmlxdWVJdGVtcywgaXRlbXMsIHRvdGFsSXRlbXMsIHVwZGF0ZUl0ZW1RdWFudGl0eSwgcmVtb3ZlSXRlbSwgZW1wdHlDYXJ0IH0gPSB1c2VDYXJ0KCk7XG4gIC8vIGNvbnNvbGUubG9nKFwiaXRlbXNcIiwgaXRlbXMpO1xuICAvLyBjb25zdCBbdG90YWxBbW91bnQsIHNldFRvdGFsQW1vdW50XSA9IHVzZVN0YXRlKCk7XG5cbiAgaWYgKGlzRW1wdHkpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYWxlcnQgYWxlcnQtaW5mb1wiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICBZb3VyIGNhcnQgaXMgZW1wdHlcbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgY29uc3QgaGFuZGxlQ2hlY2tvdXQgPSAoKSA9PiB7XG4gICAgYWxlcnQoXCJUaGFua3MgZm9yIHB1cmNoYXNpbmcgb3VyIHByb2R1Y3RzIVwiKTtcbiAgICBlbXB0eUNhcnQoKTtcbiAgfTtcbiAgLy8gY29uc29sZS5sb2coY2FydFRvdGFsKTtcbiAgY29uc3QgdG90YWxhbSA9IGNhcnRUb3RhbDtcbiAgLy8gY29uc29sZS5sb2codG90YWxhbSk7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktNCBjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICA8aDE+Q2FydDwvaDE+XG4gICAgICAgICAgPGg1PlxuICAgICAgICAgICAgQ2FydCAoe3RvdGFsVW5pcXVlSXRlbXN9KSBUb3RhbCBJdGVtczoge3RvdGFsSXRlbXN9XG4gICAgICAgICAgPC9oNT5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtbGlnaHQgdGFibGUtaG92ZXIgbS0wXCI+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGg+UHJvZHVjdDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+UXVhbnRpdHk8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5Ub3RhbDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPlJlbW92ZTwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gc2V0VG90YWxBbW91bnQoaXRlbS5xdWFudGl0eSAqIGl0ZW0ucHJpY2UpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlfSBhbHQ9e2l0ZW0ucHJvZHVjdF9uYW1lfSBzdHlsZT17eyBoZWlnaHQ6IFwiNnJlbVwiIH19IC8+IHtpdGVtLnByb2R1Y3RfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPiR7aXRlbS5wcmljZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17aXRlbS5xdWFudGl0eX0gb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVJdGVtUXVhbnRpdHkoaXRlbS5pZCwgZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+JHtpdGVtLnF1YW50aXR5ICogaXRlbS5wcmljZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICB7LyogPHRkPnt0b3RhbEFtb3VudH08L3RkPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiByZW1vdmVJdGVtKGl0ZW0uaWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJlbW92ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIG1zLWF1dG9cIj5cbiAgICAgICAgICAgIDxoMj5Ub3RhbCBwcmljZTogJHtjYXJ0VG90YWx9PC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBtLTJcIiBvbkNsaWNrPXtlbXB0eUNhcnR9PlxuICAgICAgICAgICAgICBFbXB0eSBDYXJ0XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgbS0yXCI+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NhcnQvY2hlY2tvdXRcIiB0b3RhbGFtPXt0b3RhbGFtfT5cbiAgICAgICAgICAgICAgICB7LyogQ2hlY2tvdXQge2NhcnRUb3RhbH0gKi99XG4gICAgICAgICAgICAgICAgey8qIENoZWNrb3V0IHt0b3RhbGFtfSAqL31cbiAgICAgICAgICAgICAgICBDaGVja291dFxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gXCJyZWFjdC11c2UtY2FydFwiO1xuXG4vLyBmdW5jdGlvbiBDaGVja091dCh7IHRvdGFsYW0gfSkge1xuZnVuY3Rpb24gQ2hlY2tPdXQoKSB7XG4gIGNvbnN0IHsgY2FydFRvdGFsIH0gPSB1c2VDYXJ0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPkNoZWNrT3V0PC9oMT5cbiAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsPlRvdGFsIEFtb3VudDwvbGFiZWw+XG5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPXtjYXJ0VG90YWx9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWw+UGF5bWVudCBNZXRob2Q8L2xhYmVsPlxuICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICA8b3B0aW9uPkNyZWRpdCBDYXJkPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uPkRlYml0IENhcmQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24+TmV0IEJhbmtpbmc8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24+Q2FzaCBvbiBEZWxpdmVyeTwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIFwiPlxuICAgICAgICAgIDxsYWJlbD5DYXJkIE51bWJlcjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsPkV4cGlyeSBEYXRlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsPkNWVjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsPk5hbWUgb24gQ2FyZDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbD5BZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICBTdWJtaXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrT3V0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvdWlfY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tIFwicmVhY3QtdXNlLWNhcnRcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvUHJvZHVjdENhcmRcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9hcHAuY3NzXCI7XG5pbXBvcnQgUHJvZENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdWlfY29tcG9uZW50cy9Qcm9kQ2FydFwiO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZ2V0UHJvZHVjdHMgPSAoKSA9PiBheGlvcy5nZXQoXCIvYXBpL3Byb2R1Y3RzL2FsbFwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICBQcm9taXNlLmFsbChbZ2V0UHJvZHVjdHMoKV0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdHNbMF0pO1xuXG4gICAgICBjb25zdCBwcm9kdWN0c0RhdGEgPSByZXN1bHRzWzBdO1xuXG4gICAgICBzZXRQcm9kdWN0cyhwcm9kdWN0c0RhdGEuZGF0YSk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHsgdG90YWxJdGVtcyB9ID0gdXNlQ2FydCgpO1xuICAvLyBjb25zb2xlLmxvZyh0b3RhbEl0ZW1zLCBcInRvdGFsSXRlbXNcIik7XG5cbiAgY29uc3QgcHJvZHVjdEZpbHRlciA9IHByb2R1Y3RzLmZpbHRlcigocmVzKSA9PiB7XG4gICAgcmV0dXJuIHJlcy5wcm9kdWN0X25hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSk7XG4gIH0pO1xuXG4gIGNvbnN0IHNlYXJjaEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XG4gICAgY29uc29sZS5sb2coc2VhcmNoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIFxuXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNvbnRhaW5lci1zZWFyY2hcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIg8J+UjSBTZWFyY2guLlwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3NlYXJjaEhhbmRsZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi8J+UjVwiIG9uQ2hhbmdlPXtzZWFyY2hIYW5kbGVyfSAvPlxuICAgICAgPC9kaXY+ICovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyb3dzZXJcIj5cbiAgICAgICAge3Byb2R1Y3RGaWx0ZXIubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgPFByb2R1Y3RDYXJkIGtleT17cHJvZHVjdC5pZH0gZGF0YT17cHJvZHVjdH0gey4uLnByb2R1Y3R9IC8+ICAgICAgICAgXG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCwgb25BdXRoU3RhdGVDaGFuZ2VkLCBzaWduT3V0IH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi9maXJlYmFzZUNvblwiO1xuXG5mdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgW3JlZ2lzdGVyRW1haWwsIHNldFJlZ2lzdGVyRW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtyZWdpc3RlclBhc3N3b3JkLCBzZXRSZWdpc3RlclBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbG9naW5FbWFpbCwgc2V0TG9naW5FbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvZ2luUGFzc3dvcmQsIHNldExvZ2luUGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjdXJyZW50Rm9ybSwgc2V0Q3VycmVudEZvcm1dID0gdXNlU3RhdGUoXCJsb2dpblwiKTtcblxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAoY3VycmVudFVzZXIpID0+IHtcbiAgICAgIHNldFVzZXIoY3VycmVudFVzZXIpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgcmVnaXN0ZXJFbWFpbCwgcmVnaXN0ZXJQYXNzd29yZCk7XG4gICAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgbG9naW5FbWFpbCwgbG9naW5QYXNzd29yZCk7XG4gICAgICBuYXZpZ2F0ZShcIi9wcm9maWxlXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHNpZ25PdXQoYXV0aCk7XG4gICAgc2V0VXNlcih7fSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlQ3VycmVudEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgbmV4dEZvcm0gPSBjdXJyZW50Rm9ybSA9PT0gXCJsb2dpblwiID8gXCJzaWdudXBcIiA6IFwibG9naW5cIjtcbiAgICBzZXRDdXJyZW50Rm9ybShuZXh0Rm9ybSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAge2N1cnJlbnRGb3JtID09PSBcInNpZ251cFwiICYmICghdXNlciB8fCAhdXNlci5lbWFpbCkgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMz4gUmVnaXN0ZXIgVXNlciA8L2gzPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbC4uLlwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHNldFJlZ2lzdGVyRW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmQuLi5cIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICBzZXRSZWdpc3RlclBhc3N3b3JkKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JlZ2lzdGVyfT4gQ3JlYXRlIFVzZXI8L2J1dHRvbj5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RvZ2dsZUN1cnJlbnRGb3JtfT5cbiAgICAgICAgICAgIEhhdmUgYWNjb3VudD9cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtjdXJyZW50Rm9ybSA9PT0gXCJsb2dpblwiICYmICF1c2VyPy5lbWFpbCAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzPiBMb2dpbiA8L2gzPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbC4uLlwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHNldExvZ2luRW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmQuLi5cIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICBzZXRMb2dpblBhc3N3b3JkKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ2lufT4gTG9naW48L2J1dHRvbj5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RvZ2dsZUN1cnJlbnRGb3JtfT5cbiAgICAgICAgICAgIEhhdmUgbm8gYWNjb3VudD9cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAge3VzZXI/LmVtYWlsICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDQ+IFVzZXIgTG9nZ2VkIEluOiA8L2g0PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9nb3V0fT4gU2lnbiBPdXQgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcblxuaW1wb3J0IHsgc2lnbk91dCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5cbmZ1bmN0aW9uIFByb2ZpbGUoKSB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcbiAgb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsICh1c2VyKSA9PiB7XG4gICAgaWYgKHVzZXIpIHtcbiAgICAgIHNldFVzZXIodXNlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFVzZXIoe30pO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBzaWduT3V0KGF1dGgpO1xuICAgIHNldFVzZXIoe30pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VDb250YWluZXJcIj5cbiAgICAgICAgPGg0Pnt1c2VyLmVtYWlsfSBMb2dnZWQgSW4gPC9oND5cblxuICAgICAgICB7KCF1c2VyIHx8ICF1c2VyLmVtYWlsKSAmJiA8YnV0dG9uPkxvZ2luPC9idXR0b24+fVxuXG4gICAgICAgIHt1c2VyPy5lbWFpbCAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9nb3V0fT4gU2lnbiBPdXQgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU2lnblVwRmlyc3QoKSB7XG4gIHJldHVybiAoXG4gICAgPGJvZHk+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udGFpbmVyIGxvZy1pbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XG4gICAgICAgICAgICA8aDI+U2lnbnVwPC9oMj5cblxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJVc2VyYW1lXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmVwZWF0cGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIiBSZXBlYXRQYXNzd29yZFwiIC8+XG5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUmVhbCBuYW1lXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQ29tcGFueS1jb21wYW55XCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQmFuayBhY2NvdW50XCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVmlzYVwiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkRlbGV2ZXJ5IG1ldGhvZFwiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZHJlc3NcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQYXkgbWV0aG9kXCIgLz5cblxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Gb3Jnb3QgeW91ciBwYXNzd29yZD88L2E+XG4gICAgICAgICAgICA8YnV0dG9uPkNhbmNsZTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbj5TaWdudXA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheS1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXktcGFuZWwgb3ZlcmxheS1yaWdodFwiPlxuICAgICAgICAgICAgICA8aDI+TmV3IEZhcm1lciBzaWdudXAgZnJvbSBoZXJlPC9oMj5cbiAgICAgICAgICAgICAgPHA+U28gd2UgY2FuIHB1dCBzb21lIGluc3RydWN0aW9uIGZvciB0aGUgZmFybWVyIHNvbWV0aGluZyBoZXJlIHNvbXRoaW5nIGhlcmUuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9ib2R5PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduVXBGaXJzdDtcbiIsImltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSBcInJlYWN0LXVzZS1jYXJ0XCI7XG5cbmNvbnN0IFNpbmdsZVByb2R1Y3QgPSAoKSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgY29uc3QgcHJvZHVjdCA9IGxvY2F0aW9uLnN0YXRlLmRhdGE7XG4gIGNvbnNvbGUubG9nKHByb2R1Y3QpO1xuXG4gIGNvbnN0IHsgYWRkSXRlbSB9ID0gdXNlQ2FydCgpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIG14LWF1dG8gbS00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgcC0wIG92ZXJmbG93LWhpZGRlbiBoLTEwMCBzaGFkb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1hZ2V9XG4gICAgICAgICAgICBhbHQ9e3Byb2R1Y3QucHJvZHVjdF9uYW1lfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZS10b3AgaW1nLWZsdWlkIG1iLTNcIlxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTVyZW1cIiwgbWFyZ2luQm90dG9tOiBcIjFyZW1cIiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cHJvZHVjdC5wcm9kdWN0X25hbWV9PC9oNT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3Byb2R1Y3QucHJpY2V9PC9wPlxuXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKHByb2R1Y3QpfT5cbiAgICAgICAgICAgIEFkZCB0byBjYXJ0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIG0tMlwiIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICBSZXR1cm4gdG8gSG9tZVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVByb2R1Y3Q7XG4iLCJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5Q25keFlsMHZ0UzJMYWdIbTVETnV3VThqVVF2WUNMRS0wXCIsXG4gIGF1dGhEb21haW46IFwibG9naW4tZmFybWVyLmZpcmViYXNlYXBwLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwibG9naW4tZmFybWVyXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwibG9naW4tZmFybWVyLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjM4NjY3MTQyNTg1MlwiLFxuICBhcHBJZDogXCIxOjM4NjY3MTQyNTg1Mjp3ZWI6MmMzMWZlNDk5ZGRjNTU1ZTMwMDYzOVwiLFxufTtcblxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5cbmV4cG9ydCBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJSZWFjdCIsIlJlYWN0RE9NIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwiSG9tZSIsIk5hdmJhciIsIlNpbmdsZVByb2R1Y3QiLCJQcm9maWxlIiwiQ2FydCIsIkNoZWNrT3V0IiwiTG9naW4iLCJTaWduVXAiLCJDYXJ0UHJvdmlkZXIiLCJNYWluIiwicm9vdCIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiTGluayIsInVzZUNhcnQiLCJ0b3RhbEl0ZW1zIiwiUHJvZENhcnQiLCJkYXRhIiwicHJvZHVjdF9uYW1lIiwiZGVzY3JpcHRpb24iLCJ1bml0cyIsInByaWNlIiwiaWQiLCJpbWFnZSIsImMiLCJhZGRJdGVtIiwicGljIiwidXNlU3RhdGUiLCJhcGlIZWFkIiwicmFuZEFwaUhlYWQiLCJjb3VudF93b3JkcyIsIndvcmRfYXJyYXkiLCJ0b3RhbCIsImZvckVhY2giLCJQcm9kdWN0Q2FyZCIsInJhbmRJbWFnZSIsInNwbGl0IiwibmFtZV9hcnJheSIsImNvbnNvbGUiLCJsb2ciLCJ0b3RhbF93b3JkcyIsIm5vdW4iLCJpbmNsdWRlcyIsImlzRW1wdHkiLCJjYXJ0VG90YWwiLCJ0b3RhbFVuaXF1ZUl0ZW1zIiwiaXRlbXMiLCJ1cGRhdGVJdGVtUXVhbnRpdHkiLCJyZW1vdmVJdGVtIiwiZW1wdHlDYXJ0IiwiaGFuZGxlQ2hlY2tvdXQiLCJhbGVydCIsInRvdGFsYW0iLCJtYXAiLCJpdGVtIiwiaGVpZ2h0IiwicXVhbnRpdHkiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImdldFByb2R1Y3RzIiwiZ2V0IiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJyZXN1bHRzIiwicHJvZHVjdHNEYXRhIiwicHJvZHVjdEZpbHRlciIsImZpbHRlciIsInJlcyIsInRvTG93ZXJDYXNlIiwic2VhcmNoSGFuZGxlciIsInByb2R1Y3QiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInNpZ25PdXQiLCJ1c2VOYXZpZ2F0ZSIsImF1dGgiLCJyZWdpc3RlckVtYWlsIiwic2V0UmVnaXN0ZXJFbWFpbCIsInJlZ2lzdGVyUGFzc3dvcmQiLCJzZXRSZWdpc3RlclBhc3N3b3JkIiwibG9naW5FbWFpbCIsInNldExvZ2luRW1haWwiLCJsb2dpblBhc3N3b3JkIiwic2V0TG9naW5QYXNzd29yZCIsImN1cnJlbnRGb3JtIiwic2V0Q3VycmVudEZvcm0iLCJ1c2VyIiwic2V0VXNlciIsIm5hdmlnYXRlIiwiY3VycmVudFVzZXIiLCJyZWdpc3RlciIsIm1lc3NhZ2UiLCJsb2dpbiIsImxvZ291dCIsInRvZ2dsZUN1cnJlbnRGb3JtIiwibmV4dEZvcm0iLCJlbWFpbCIsImV2ZW50IiwiZ2V0QXV0aCIsIlNpZ25VcEZpcnN0IiwidXNlTG9jYXRpb24iLCJsb2NhdGlvbiIsInN0YXRlIiwid2lkdGgiLCJtYXJnaW5Cb3R0b20iLCJpbml0aWFsaXplQXBwIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiXSwic291cmNlUm9vdCI6IiJ9
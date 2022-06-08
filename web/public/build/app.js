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


function CheckOut(_ref) {
  var totalam = _ref.totalam;
  console.log(totalam);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "CheckOut"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    action: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Total Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    className: "form-control",
    placeholder: totalam
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
    "class": "overlay-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "overlay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "overlay-panel overlay-right"
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_axios_index_js-node_m-189e14"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQztFQUFmLGdCQUNFLHVFQUFLK0QsT0FBTyxDQUFDOUQsWUFBYixDQURGLHFDQUdFLG9GQUhGLENBREY7QUFPRDs7QUFFRCxpRUFBZXRCLGFBQWY7Ozs7Ozs7Ozs7OztBQ2pCQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9NYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aV9jb21wb25lbnRzL05hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aV9jb21wb25lbnRzL1Byb2RDYXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvUHJvZHVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0NoZWNrT3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Ib21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Mb2dJbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvUHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvU2lnblVwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9TaW5nbGVQcm9kdWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlcywgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vcGFnZXMvSG9tZVwiO1xuLy8gaW1wb3J0IGNzcyBmcm9tIFwiLi9zdHlsZXMvbWFpbi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9hc3NldHMvY29tcG9uZW50cy91aV9jb21wb25lbnRzL05hdmJhclwiO1xuXG5pbXBvcnQgU2luZ2xlUHJvZHVjdCBmcm9tIFwiLi4vYXNzZXRzL3BhZ2VzL1NpbmdsZVByb2R1Y3RcIjtcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi9hc3NldHMvcGFnZXMvUHJvZmlsZVwiO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2Fzc2V0cy9wYWdlcy9DYXJ0XCI7XG5pbXBvcnQgQ2hlY2tPdXQgZnJvbSBcIi4uL2Fzc2V0cy9wYWdlcy9DaGVja091dFwiO1xuLy9pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9hc3NldHMvY29tcG9uZW50cy91aV9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IExvZ0luIGZyb20gXCIuL3BhZ2VzL0xvZ0luXCI7XG5pbXBvcnQgU2lnblVwIGZyb20gXCIuL3BhZ2VzL1NpZ25VcFwiO1xuaW1wb3J0IHsgQ2FydFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXVzZS1jYXJ0XCI7XG5cbmltcG9ydCBcIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcblxuZnVuY3Rpb24gTWFpbigpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENhcnRQcm92aWRlcj5cbiAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lIC8+fT48L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXBpL3Byb2R1Y3QvZmluZC86aWRcIiBlbGVtZW50PXs8U2luZ2xlUHJvZHVjdCAvPn0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2ZpbGVcIiBlbGVtZW50PXs8UHJvZmlsZSAvPn0+PC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NhcnRcIiBlbGVtZW50PXs8Q2FydCAvPn0+PC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NhcnQvY2hlY2tvdXRcIiBlbGVtZW50PXs8Q2hlY2tPdXQgLz59PjwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpbk5cIiBlbGVtZW50PXs8TG9nSW4gLz59PjwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpbk4vc2lnbnVwXCIgZWxlbWVudD17PFNpZ25VcCAvPn0+PC9Sb3V0ZT5cbiAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICA8L0NhcnRQcm92aWRlcj5cbiAgICAgIFxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG5yb290LnJlbmRlcihcbiAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgPE1haW4gLz5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuKTtcbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgXCIuL3N0eWxlcy9hcHAuY3NzXCI7XG5cblxuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCBcIi4vYm9vdHN0cmFwXCI7XG5cbmltcG9ydCBcIi4vTWFpblwiO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tIFwicmVhY3QtdXNlLWNhcnRcIjtcblxuZnVuY3Rpb24gTmF2YmFyKCkge1xuICBjb25zdCB7IHRvdGFsSXRlbXMgfSA9IHVzZUNhcnQoKTtcbiAgcmV0dXJuIChcblxuICAgIDxkaXY+XG4gICAgICA8bmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm5hdi1hXCI+XG4gICAgICAgICAgICAgIEY0cm0zclxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYtbGlua3NcIj5cbiAgXG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+IEhvbWUgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvZmlsZVwiPiBQcm9maWxlIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NhcnRcIj5DYXJ0OiB7dG90YWxJdGVtc30gPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIj4gTG9nIGluIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuIFxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcblxuLypcbiAgICAqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tIFwicmVhY3QtdXNlLWNhcnRcIjtcblxuLy8gY29uc3QgUHJvZENhcnQgPSAoeyBwcm9kdWN0OiB7IGlkLCBwcm9kdWN0TmFtZSwgc2hvcnREZXNjcmlwdGlvbiwgcHJvZHVjdFByaWNlLCBpbWFnZVVybCB9IH0pID0+IHtcbmNvbnN0IFByb2RDYXJ0ID0gKHsgZGF0YSwgcHJvZHVjdF9uYW1lLCBkZXNjcmlwdGlvbiwgdW5pdHMsIHByaWNlLCBpZCwgaW1hZ2UgPSBudWxsIH0pID0+IHtcbiAgYzsgLy8gZnVuY3Rpb24gUHJvZHVjdENhcmQoeyBkYXRhLCBwcm9kdWN0X25hbWUsIGRlc2NyaXB0aW9uLCB1bml0cywgcHJpY2UsIGltYWdlID0gbnVsbCB9KSB7XG4gIGNvbnN0IHsgYWRkSXRlbSB9ID0gdXNlQ2FydCgpO1xuICBjb25zdCBwaWMgPSBpbWFnZSA/IGltYWdlIDogXCJubyBpbWFnZSBhdmFpbGFibGVcIjtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMSBjb2wtbWQtNiBjb2wtbGctMyBteC0wIG1iLTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBwLTAgb3ZlcmZsb3ctaGlkZGVuIGgtMTAwIHNoYWRvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+JCB7ZGF0YS5wcm9kdWN0X25hbWV9PC9oNT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e2RhdGEucHJpY2V9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntwaWN9PC9wPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgIGFkZEl0ZW0oe1xuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RfbmFtZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBwcmljZSxcbiAgICAgICAgICAgICAgICBwaWMsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWRkIHRvIGNhcnRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2RDYXJ0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tIFwicmVhY3QtdXNlLWNhcnRcIjtcblxuY29uc3QgYXBpSGVhZCA9ICdodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vJztcbmNvbnN0IHJhbmRBcGlIZWFkID0gJ2h0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS81MDB4NDAwLz8nO1xuY29uc3QgY291bnRfd29yZHMgPSAod29yZF9hcnJheSkgPT4ge1xuICBsZXQgdG90YWwgPSAwO1xuICB3b3JkX2FycmF5LmZvckVhY2goKCkgPT4ge1xuICAgIHRvdGFsKys7XG4gIH0pO1xuICByZXR1cm4gdG90YWw7XG59XG5cbmZ1bmN0aW9uIFByb2R1Y3RDYXJkKHsgZGF0YSwgcHJvZHVjdF9uYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGlkLCB1bml0cz1udWxsLCBpbWFnZSA9IG51bGwgfSkge1xuICBsZXQgcmFuZEltYWdlID0gcmFuZEFwaUhlYWQ7XG4gIFxuICB1bml0cyA9IHVuaXRzID8gdW5pdHM6ICdrZyc7XG5cbiAgaWYoIWltYWdlKXtcblxuICAgIGlmIChjb3VudF93b3Jkcyhwcm9kdWN0X25hbWUuc3BsaXQoKSkgPiAxKXtcbiAgICAgIGNvbnN0IG5hbWVfYXJyYXkgPSBwcm9kdWN0X25hbWUuc3BsaXQoKTtcbiAgICAgIGNvbnNvbGUubG9nKGNvdW50X3dvcmRzKG5hbWVfYXJyYXkpKVxuICAgICAgY29uc3QgdG90YWxfd29yZHMgPSBjb3VudF93b3JkcyhuYW1lX2FycmF5KTtcbiAgICAgIGNvbnN0IG5vdW4gPSBuYW1lX2FycmF5W3RvdGFsX3dvcmRzIC0gMV07XG4gICAgICByYW5kSW1hZ2UgKz0gbm91bjtcbiAgICAgIFxuICAgIH1cbiAgICBlbHNle1xuICAgICAgcmFuZEltYWdlICs9IHByb2R1Y3RfbmFtZVxuICAgIH1cbiAgICBpbWFnZSA9IHJhbmRJbWFnZTtcbiAgfWVsc2UgaWYoIWltYWdlLmluY2x1ZGVzKCdodHRwczovLycpKXtcbiAgICBpbWFnZSA9IGFwaUhlYWQgKyBpbWFnZTtcbiAgfVxuXG4gIGNvbnN0IHsgYWRkSXRlbSB9ID0gdXNlQ2FydCgpO1xuICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250YWluZXIgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgZnJvbnQtZmFjZVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiYWNrLWZhY2VcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZW1vdmVcIj5cbiAgICAgICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJyZW1vdmVcIiBvbkNsaWNrPXsoKSA9PiByZW1vdmVSZWNpcGUocmVjaXBlLmlkKX0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAge2VsZW1lbnR9XG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e3Byb2R1Y3RfbmFtZX0ge3ByaWNlfeKCrC97dW5pdHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImNhcmQtbGlua1wiIHRvPXtgL2FwaS9wcm9kdWN0L2ZpbmQvJHtpZH1gfT5cbiAgICAgICAgICAgICAgICBTZWUgbW9yZVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiAgIC8vY29uc29sZS5sb2coJ2hlbGxvJykgICAgICAgICAgXG4gICAgICAgICAgICAgICBhZGRJdGVtKHsgaWQ6IGlkLCBwcm9kdWN0X25hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgaW1hZ2UgfSlcbiAgICAgICAgICAgIH0gPlxuICAgICAgICAgICAgICBBZGQgdG8gY2FydFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZDtcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gXCJyZWFjdC11c2UtY2FydFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDYXJ0ID0gKCkgPT4ge1xuICBjb25zdCB7IGlzRW1wdHksIGNhcnRUb3RhbCwgdG90YWxVbmlxdWVJdGVtcywgaXRlbXMsIHRvdGFsSXRlbXMsIHVwZGF0ZUl0ZW1RdWFudGl0eSwgcmVtb3ZlSXRlbSwgZW1wdHlDYXJ0IH0gPSB1c2VDYXJ0KCk7XG4gIC8vIGNvbnNvbGUubG9nKFwiaXRlbXNcIiwgaXRlbXMpO1xuICAvLyBjb25zdCBbdG90YWxBbW91bnQsIHNldFRvdGFsQW1vdW50XSA9IHVzZVN0YXRlKCk7XG5cbiAgaWYgKGlzRW1wdHkpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYWxlcnQgYWxlcnQtaW5mb1wiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICBZb3VyIGNhcnQgaXMgZW1wdHlcbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgY29uc3QgaGFuZGxlQ2hlY2tvdXQgPSAoKSA9PiB7XG4gICAgYWxlcnQoXCJUaGFua3MgZm9yIHB1cmNoYXNpbmcgb3VyIHByb2R1Y3RzIVwiKTtcbiAgICBlbXB0eUNhcnQoKTtcbiAgfTtcbiAgLy8gY29uc29sZS5sb2coY2FydFRvdGFsKTtcbiAgY29uc3QgdG90YWxhbSA9IGNhcnRUb3RhbDtcbiAgLy8gY29uc29sZS5sb2codG90YWxhbSk7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktNCBjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICA8aDE+Q2FydDwvaDE+XG4gICAgICAgICAgPGg1PlxuICAgICAgICAgICAgQ2FydCAoe3RvdGFsVW5pcXVlSXRlbXN9KSBUb3RhbCBJdGVtczoge3RvdGFsSXRlbXN9XG4gICAgICAgICAgPC9oNT5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtbGlnaHQgdGFibGUtaG92ZXIgbS0wXCI+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGg+UHJvZHVjdDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+UXVhbnRpdHk8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5Ub3RhbDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPlJlbW92ZTwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gc2V0VG90YWxBbW91bnQoaXRlbS5xdWFudGl0eSAqIGl0ZW0ucHJpY2UpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLnBpY30gYWx0PXtpdGVtLnByb2R1Y3RfbmFtZX0gc3R5bGU9e3sgaGVpZ2h0OiBcIjZyZW1cIiB9fSAvPiB7aXRlbS5wcm9kdWN0X25hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4ke2l0ZW0ucHJpY2V9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e2l0ZW0ucXVhbnRpdHl9IG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlSXRlbVF1YW50aXR5KGl0ZW0uaWQsIGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPiR7aXRlbS5xdWFudGl0eSAqIGl0ZW0ucHJpY2V9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgey8qIDx0ZD57dG90YWxBbW91bnR9PC90ZD4gKi99XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlSXRlbShpdGVtLmlkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZW1vdmVcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBtcy1hdXRvXCI+XG4gICAgICAgICAgICA8aDI+VG90YWwgcHJpY2U6ICR7Y2FydFRvdGFsfTwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgbS0yXCIgb25DbGljaz17ZW1wdHlDYXJ0fT5cbiAgICAgICAgICAgICAgRW1wdHkgQ2FydFxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIG0tMlwiPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9jYXJ0L2NoZWNrb3V0XCIgdG90YWxhbT17dG90YWxhbX0+XG4gICAgICAgICAgICAgICAgey8qIENoZWNrb3V0IHtjYXJ0VG90YWx9ICovfVxuICAgICAgICAgICAgICAgIHsvKiBDaGVja291dCB7dG90YWxhbX0gKi99XG4gICAgICAgICAgICAgICAgQ2hlY2tvdXQge3RvdGFsYW19XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIENoZWNrT3V0KHsgdG90YWxhbSB9KSB7XG4gIGNvbnNvbGUubG9nKHRvdGFsYW0pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+Q2hlY2tPdXQ8L2gxPlxuICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWw+VG90YWwgQW1vdW50PC9sYWJlbD5cblxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9e3RvdGFsYW19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWw+UGF5bWVudCBNZXRob2Q8L2xhYmVsPlxuICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICA8b3B0aW9uPkNyZWRpdCBDYXJkPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uPkRlYml0IENhcmQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24+TmV0IEJhbmtpbmc8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24+Q2FzaCBvbiBEZWxpdmVyeTwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIFwiPlxuICAgICAgICAgIDxsYWJlbD5DYXJkIE51bWJlcjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsPkV4cGlyeSBEYXRlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsPkNWVjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsPk5hbWUgb24gQ2FyZDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbD5BZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICBTdWJtaXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrT3V0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvdWlfY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tIFwicmVhY3QtdXNlLWNhcnRcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvUHJvZHVjdENhcmRcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9hcHAuY3NzXCI7XG5pbXBvcnQgUHJvZENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdWlfY29tcG9uZW50cy9Qcm9kQ2FydFwiO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZ2V0UHJvZHVjdHMgPSAoKSA9PiBheGlvcy5nZXQoXCIvYXBpL3Byb2R1Y3RzL2FsbFwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICBQcm9taXNlLmFsbChbZ2V0UHJvZHVjdHMoKV0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdHNbMF0pO1xuXG4gICAgICBjb25zdCBwcm9kdWN0c0RhdGEgPSByZXN1bHRzWzBdO1xuXG4gICAgICBzZXRQcm9kdWN0cyhwcm9kdWN0c0RhdGEuZGF0YSk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHsgdG90YWxJdGVtcyB9ID0gdXNlQ2FydCgpO1xuICAvLyBjb25zb2xlLmxvZyh0b3RhbEl0ZW1zLCBcInRvdGFsSXRlbXNcIik7XG5cbiAgY29uc3QgcHJvZHVjdEZpbHRlciA9IHByb2R1Y3RzLmZpbHRlcigocmVzKSA9PiB7XG4gICAgcmV0dXJuIHJlcy5wcm9kdWN0X25hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSk7XG4gIH0pO1xuXG4gIGNvbnN0IHNlYXJjaEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XG4gICAgY29uc29sZS5sb2coc2VhcmNoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIFxuXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNvbnRhaW5lci1zZWFyY2hcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIg8J+UjSBTZWFyY2guLlwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3NlYXJjaEhhbmRsZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi8J+UjVwiIG9uQ2hhbmdlPXtzZWFyY2hIYW5kbGVyfSAvPlxuICAgICAgPC9kaXY+ICovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyb3dzZXJcIj5cbiAgICAgICAge3Byb2R1Y3RGaWx0ZXIubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgPFByb2R1Y3RDYXJkIGtleT17cHJvZHVjdC5pZH0gZGF0YT17cHJvZHVjdH0gey4uLnByb2R1Y3R9IC8+ICAgICAgICAgXG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgY3NzIGZyb20gXCIuLi9zdHlsZXMvbG9naW4ubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBMb2dJbigpIHtcbiAgcmV0dXJuIChcbiAgICA8Ym9keT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lciBsb2ctaW4tY29udGFpbmVyXCI+XG4gICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiPlxuICAgICAgICAgICAgPGgxPkxvZ2luPC9oMT5cblxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiVXNlciBuYW1lL0VtYWlsXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+SWYgeW91IGFyZSBuZXcgUGxlYXNlIHNpZ251cD88L2E+XG4gICAgICAgICAgICA8YnV0dG9uPkxvZyBJbjwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheS1wYW5lbCBvdmVybGF5LXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxoMT5GYXJtZXIgbG9naW4gZnJvbSBoZXJlPC9oMT5cbiAgICAgICAgICAgICAgPHA+U28gd2UgY2FuIHB1dCBzb21lIGluc3RydWN0aW9uIGZvciB0aGUgZmFybWVyIGJscyBibGEgYmxhIC4gLiAuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9ib2R5PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dJbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBjc3MgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy5tb2R1bGUuY3NzXCI7XG5mdW5jdGlvbiBQcm9maWxlKCkge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYWdlQ29udGFpbmVyXCI+UHJvZmlsZTwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU2lnblVwKCkge1xuICByZXR1cm4gKFxuICAgIDxib2R5PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIGlkPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRhaW5lciBsb2ctaW4tY29udGFpbmVyXCI+XG4gICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiPlxuICAgICAgICAgICAgPGgyPlNpZ251cDwvaDI+XG5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVXNlcmFtZVwiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJlcGVhdHBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCIgUmVwZWF0UGFzc3dvcmRcIiAvPlxuXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlJlYWwgbmFtZVwiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkNvbXBhbnktY29tcGFueVwiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkJhbmsgYWNjb3VudFwiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlZpc2FcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJEZWxldmVyeSBtZXRob2RcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBZGRyZXNzXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUGF5IG1ldGhvZFwiIC8+XG5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Rm9yZ290IHlvdXIgcGFzc3dvcmQ/PC9hPlxuICAgICAgICAgICAgPGJ1dHRvbj5DYW5jbGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24+U2lnbnVwPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXktY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5LXBhbmVsIG92ZXJsYXktcmlnaHRcIj5cbiAgICAgICAgICAgICAgPGgyPk5ldyBGYXJtZXIgc2lnbnVwIGZyb20gaGVyZTwvaDI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFNvIHdlIGNhbiBwdXQgc29tZSBpbnN0cnVjdGlvbiBmb3IgdGhlIGZhcm1lciBzb21ldGhpbmcgaGVyZVxuICAgICAgICAgICAgICAgIHNvbXRoaW5nIGhlcmUuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvYm9keT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnblVwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuLy8gaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzLm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gU2luZ2xlUHJvZHVjdCgpIHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBjb25zdCBwcm9kdWN0ID0gbG9jYXRpb24uc3RhdGUuZGF0YTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZUNvbnRhaW5lclwiPlxuICAgICAgPGgxPntwcm9kdWN0LnByb2R1Y3RfbmFtZX08L2gxPlxuICAgICAgU2luZ2xlUHJvZHVjdCBOYW1lXG4gICAgICA8ZGl2PnRlc3QgdGVzdDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQcm9kdWN0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJSZWFjdCIsIlJlYWN0RE9NIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwiSG9tZSIsIk5hdmJhciIsIlNpbmdsZVByb2R1Y3QiLCJQcm9maWxlIiwiQ2FydCIsIkNoZWNrT3V0IiwiTG9nSW4iLCJTaWduVXAiLCJDYXJ0UHJvdmlkZXIiLCJNYWluIiwicm9vdCIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiTGluayIsInVzZUNhcnQiLCJ0b3RhbEl0ZW1zIiwiUHJvZENhcnQiLCJkYXRhIiwicHJvZHVjdF9uYW1lIiwiZGVzY3JpcHRpb24iLCJ1bml0cyIsInByaWNlIiwiaWQiLCJpbWFnZSIsImMiLCJhZGRJdGVtIiwicGljIiwiYXBpSGVhZCIsInJhbmRBcGlIZWFkIiwiY291bnRfd29yZHMiLCJ3b3JkX2FycmF5IiwidG90YWwiLCJmb3JFYWNoIiwiUHJvZHVjdENhcmQiLCJyYW5kSW1hZ2UiLCJzcGxpdCIsIm5hbWVfYXJyYXkiLCJjb25zb2xlIiwibG9nIiwidG90YWxfd29yZHMiLCJub3VuIiwiaW5jbHVkZXMiLCJ1c2VTdGF0ZSIsImlzRW1wdHkiLCJjYXJ0VG90YWwiLCJ0b3RhbFVuaXF1ZUl0ZW1zIiwiaXRlbXMiLCJ1cGRhdGVJdGVtUXVhbnRpdHkiLCJyZW1vdmVJdGVtIiwiZW1wdHlDYXJ0IiwiaGFuZGxlQ2hlY2tvdXQiLCJhbGVydCIsInRvdGFsYW0iLCJtYXAiLCJpdGVtIiwiaGVpZ2h0IiwicXVhbnRpdHkiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImdldFByb2R1Y3RzIiwiZ2V0IiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJyZXN1bHRzIiwicHJvZHVjdHNEYXRhIiwicHJvZHVjdEZpbHRlciIsImZpbHRlciIsInJlcyIsInRvTG93ZXJDYXNlIiwic2VhcmNoSGFuZGxlciIsInByb2R1Y3QiLCJ1c2VMb2NhdGlvbiIsImxvY2F0aW9uIiwic3RhdGUiXSwic291cmNlUm9vdCI6IiJ9
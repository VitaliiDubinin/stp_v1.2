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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQztFQUFmLGdCQUNFLHVFQUFLK0QsT0FBTyxDQUFDOUQsWUFBYixDQURGLHFDQUdFLG9GQUhGLENBREY7QUFPRDs7QUFFRCxpRUFBZXRCLGFBQWY7Ozs7Ozs7Ozs7OztBQ2pCQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9NYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aV9jb21wb25lbnRzL05hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aV9jb21wb25lbnRzL1Byb2RDYXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvUHJvZHVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0NoZWNrT3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Ib21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Mb2dJbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvUHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvU2lnblVwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9TaW5nbGVQcm9kdWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz8zZmJhIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9Ib21lXCI7XG4vLyBpbXBvcnQgY3NzIGZyb20gXCIuL3N0eWxlcy9tYWluLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvTmF2YmFyXCI7XG5cbmltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gXCIuLi9hc3NldHMvcGFnZXMvU2luZ2xlUHJvZHVjdFwiO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uL2Fzc2V0cy9wYWdlcy9Qcm9maWxlXCI7XG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vYXNzZXRzL3BhZ2VzL0NhcnRcIjtcbmltcG9ydCBDaGVja091dCBmcm9tIFwiLi4vYXNzZXRzL3BhZ2VzL0NoZWNrT3V0XCI7XG4vL2ltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgTG9nSW4gZnJvbSBcIi4vcGFnZXMvTG9nSW5cIjtcbmltcG9ydCBTaWduVXAgZnJvbSBcIi4vcGFnZXMvU2lnblVwXCI7XG5pbXBvcnQgeyBDYXJ0UHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtdXNlLWNhcnRcIjtcblxuaW1wb3J0IFwiLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuXG5mdW5jdGlvbiBNYWluKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q2FydFByb3ZpZGVyPlxuICAgICAgICA8Um91dGVyPlxuICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59PjwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcGkvcHJvZHVjdC9maW5kLzppZFwiIGVsZW1lbnQ9ezxTaW5nbGVQcm9kdWN0IC8+fSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZmlsZVwiIGVsZW1lbnQ9ezxQcm9maWxlIC8+fT48L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY2FydFwiIGVsZW1lbnQ9ezxDYXJ0IC8+fT48L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY2FydC9jaGVja291dFwiIGVsZW1lbnQ9ezxDaGVja091dCAvPn0+PC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luTlwiIGVsZW1lbnQ9ezxMb2dJbiAvPn0+PC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luTi9zaWdudXBcIiBlbGVtZW50PXs8U2lnblVwIC8+fT48L1JvdXRlPlxuICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICA8L1JvdXRlcj5cbiAgICAgIDwvQ2FydFByb3ZpZGVyPlxuICAgICAgXG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG5cbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcbnJvb3QucmVuZGVyKFxuICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICA8TWFpbiAvPlxuICA8L1JlYWN0LlN0cmljdE1vZGU+XG4pO1xuIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCBcIi4vc3R5bGVzL2FwcC5jc3NcIjtcblxuXG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0IFwiLi9ib290c3RyYXBcIjtcblxuaW1wb3J0IFwiLi9NYWluXCI7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gXCJyZWFjdC11c2UtY2FydFwiO1xuXG5mdW5jdGlvbiBOYXZiYXIoKSB7XG4gIGNvbnN0IHsgdG90YWxJdGVtcyB9ID0gdXNlQ2FydCgpO1xuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibmF2LWFcIj5cbiAgICAgICAgICAgICAgRjRybTNyXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdi1saW5rc1wiPlxuICBcbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9cIj4gSG9tZSA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9wcm9maWxlXCI+IFByb2ZpbGUgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvY2FydFwiPkNhcnQ6IHt0b3RhbEl0ZW1zfSA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPiBMb2cgaW4gPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gXG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuXG4vKlxuICAgICovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gXCJyZWFjdC11c2UtY2FydFwiO1xuXG4vLyBjb25zdCBQcm9kQ2FydCA9ICh7IHByb2R1Y3Q6IHsgaWQsIHByb2R1Y3ROYW1lLCBzaG9ydERlc2NyaXB0aW9uLCBwcm9kdWN0UHJpY2UsIGltYWdlVXJsIH0gfSkgPT4ge1xuY29uc3QgUHJvZENhcnQgPSAoeyBkYXRhLCBwcm9kdWN0X25hbWUsIGRlc2NyaXB0aW9uLCB1bml0cywgcHJpY2UsIGlkLCBpbWFnZSA9IG51bGwgfSkgPT4ge1xuICBjOyAvLyBmdW5jdGlvbiBQcm9kdWN0Q2FyZCh7IGRhdGEsIHByb2R1Y3RfbmFtZSwgZGVzY3JpcHRpb24sIHVuaXRzLCBwcmljZSwgaW1hZ2UgPSBudWxsIH0pIHtcbiAgY29uc3QgeyBhZGRJdGVtIH0gPSB1c2VDYXJ0KCk7XG4gIGNvbnN0IHBpYyA9IGltYWdlID8gaW1hZ2UgOiBcIm5vIGltYWdlIGF2YWlsYWJsZVwiO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTExIGNvbC1tZC02IGNvbC1sZy0zIG14LTAgbWItNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHAtMCBvdmVyZmxvdy1oaWRkZW4gaC0xMDAgc2hhZG93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj4kIHtkYXRhLnByb2R1Y3RfbmFtZX08L2g1PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57ZGF0YS5wcmljZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3BpY308L3A+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgYWRkSXRlbSh7XG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgcHJvZHVjdF9uYW1lLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIHByaWNlLFxuICAgICAgICAgICAgICAgIHBpYyxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBZGQgdG8gY2FydFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZENhcnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gXCJyZWFjdC11c2UtY2FydFwiO1xuXG5jb25zdCBhcGlIZWFkID0gJ2h0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS8nO1xuY29uc3QgcmFuZEFwaUhlYWQgPSAnaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tLzUwMHg0MDAvPyc7XG5jb25zdCBjb3VudF93b3JkcyA9ICh3b3JkX2FycmF5KSA9PiB7XG4gIGxldCB0b3RhbCA9IDA7XG4gIHdvcmRfYXJyYXkuZm9yRWFjaCgoKSA9PiB7XG4gICAgdG90YWwrKztcbiAgfSk7XG4gIHJldHVybiB0b3RhbDtcbn1cblxuZnVuY3Rpb24gUHJvZHVjdENhcmQoeyBkYXRhLCBwcm9kdWN0X25hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgaWQsIHVuaXRzPW51bGwsIGltYWdlID0gbnVsbCB9KSB7XG4gIGxldCByYW5kSW1hZ2UgPSByYW5kQXBpSGVhZDtcbiAgXG4gIHVuaXRzID0gdW5pdHMgPyB1bml0czogJ2tnJztcblxuICBpZighaW1hZ2Upe1xuXG4gICAgaWYgKGNvdW50X3dvcmRzKHByb2R1Y3RfbmFtZS5zcGxpdCgpKSA+IDEpe1xuICAgICAgY29uc3QgbmFtZV9hcnJheSA9IHByb2R1Y3RfbmFtZS5zcGxpdCgpO1xuICAgICAgY29uc29sZS5sb2coY291bnRfd29yZHMobmFtZV9hcnJheSkpXG4gICAgICBjb25zdCB0b3RhbF93b3JkcyA9IGNvdW50X3dvcmRzKG5hbWVfYXJyYXkpO1xuICAgICAgY29uc3Qgbm91biA9IG5hbWVfYXJyYXlbdG90YWxfd29yZHMgLSAxXTtcbiAgICAgIHJhbmRJbWFnZSArPSBub3VuO1xuICAgICAgXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICByYW5kSW1hZ2UgKz0gcHJvZHVjdF9uYW1lXG4gICAgfVxuICAgIGltYWdlID0gcmFuZEltYWdlO1xuICB9ZWxzZSBpZighaW1hZ2UuaW5jbHVkZXMoJ2h0dHBzOi8vJykpe1xuICAgIGltYWdlID0gYXBpSGVhZCArIGltYWdlO1xuICB9XG5cbiAgY29uc3QgeyBhZGRJdGVtIH0gPSB1c2VDYXJ0KCk7XG4gIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRhaW5lciBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBmcm9udC1mYWNlXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJhY2stZmFjZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbW92ZVwiPlxuICAgICAgICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInJlbW92ZVwiIG9uQ2xpY2s9eygpID0+IHJlbW92ZVJlY2lwZShyZWNpcGUuaWQpfT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7ZWxlbWVudH1cbiAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57cHJvZHVjdF9uYW1lfSB7cHJpY2V94oKsL3t1bml0c308L2Rpdj5cbiAgICAgICAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiY2FyZC1saW5rXCIgdG89e2AvYXBpL3Byb2R1Y3QvZmluZC8ke2lkfWB9PlxuICAgICAgICAgICAgICAgIFNlZSBtb3JlXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+ICAgLy9jb25zb2xlLmxvZygnaGVsbG8nKSAgICAgICAgICBcbiAgICAgICAgICAgICAgIGFkZEl0ZW0oeyBpZDogaWQsIHByb2R1Y3RfbmFtZSwgZGVzY3JpcHRpb24sIHByaWNlLCBpbWFnZSB9KVxuICAgICAgICAgICAgfSA+XG4gICAgICAgICAgICAgIEFkZCB0byBjYXJ0XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkO1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSBcInJlYWN0LXVzZS1jYXJ0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENhcnQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaXNFbXB0eSwgY2FydFRvdGFsLCB0b3RhbFVuaXF1ZUl0ZW1zLCBpdGVtcywgdG90YWxJdGVtcywgdXBkYXRlSXRlbVF1YW50aXR5LCByZW1vdmVJdGVtLCBlbXB0eUNhcnQgfSA9IHVzZUNhcnQoKTtcbiAgLy8gY29uc29sZS5sb2coXCJpdGVtc1wiLCBpdGVtcyk7XG4gIC8vIGNvbnN0IFt0b3RhbEFtb3VudCwgc2V0VG90YWxBbW91bnRdID0gdXNlU3RhdGUoKTtcblxuICBpZiAoaXNFbXB0eSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBhbGVydCBhbGVydC1pbmZvXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgIFlvdXIgY2FydCBpcyBlbXB0eVxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICBjb25zdCBoYW5kbGVDaGVja291dCA9ICgpID0+IHtcbiAgICBhbGVydChcIlRoYW5rcyBmb3IgcHVyY2hhc2luZyBvdXIgcHJvZHVjdHMhXCIpO1xuICAgIGVtcHR5Q2FydCgpO1xuICB9O1xuICAvLyBjb25zb2xlLmxvZyhjYXJ0VG90YWwpO1xuICBjb25zdCB0b3RhbGFtID0gY2FydFRvdGFsO1xuICAvLyBjb25zb2xlLmxvZyh0b3RhbGFtKTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS00IGNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgIDxoMT5DYXJ0PC9oMT5cbiAgICAgICAgICA8aDU+XG4gICAgICAgICAgICBDYXJ0ICh7dG90YWxVbmlxdWVJdGVtc30pIFRvdGFsIEl0ZW1zOiB7dG90YWxJdGVtc31cbiAgICAgICAgICA8L2g1PlxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1saWdodCB0YWJsZS1ob3ZlciBtLTBcIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aD5Qcm9kdWN0PC90aD5cbiAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5RdWFudGl0eTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPlRvdGFsPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+UmVtb3ZlPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAvLyBzZXRUb3RhbEFtb3VudChpdGVtLnF1YW50aXR5ICogaXRlbS5wcmljZSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0ucGljfSBhbHQ9e2l0ZW0ucHJvZHVjdF9uYW1lfSBzdHlsZT17eyBoZWlnaHQ6IFwiNnJlbVwiIH19IC8+IHtpdGVtLnByb2R1Y3RfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPiR7aXRlbS5wcmljZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17aXRlbS5xdWFudGl0eX0gb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVJdGVtUXVhbnRpdHkoaXRlbS5pZCwgZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+JHtpdGVtLnF1YW50aXR5ICogaXRlbS5wcmljZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICB7LyogPHRkPnt0b3RhbEFtb3VudH08L3RkPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiByZW1vdmVJdGVtKGl0ZW0uaWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJlbW92ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIG1zLWF1dG9cIj5cbiAgICAgICAgICAgIDxoMj5Ub3RhbCBwcmljZTogJHtjYXJ0VG90YWx9PC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBtLTJcIiBvbkNsaWNrPXtlbXB0eUNhcnR9PlxuICAgICAgICAgICAgICBFbXB0eSBDYXJ0XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgbS0yXCI+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NhcnQvY2hlY2tvdXRcIiB0b3RhbGFtPXt0b3RhbGFtfT5cbiAgICAgICAgICAgICAgICB7LyogQ2hlY2tvdXQge2NhcnRUb3RhbH0gKi99XG4gICAgICAgICAgICAgICAgey8qIENoZWNrb3V0IHt0b3RhbGFtfSAqL31cbiAgICAgICAgICAgICAgICBDaGVja291dCB7dG90YWxhbX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gQ2hlY2tPdXQoeyB0b3RhbGFtIH0pIHtcbiAgY29uc29sZS5sb2codG90YWxhbSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5DaGVja091dDwvaDE+XG4gICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbD5Ub3RhbCBBbW91bnQ8L2xhYmVsPlxuXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj17dG90YWxhbX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbD5QYXltZW50IE1ldGhvZDwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgIDxvcHRpb24+Q3JlZGl0IENhcmQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24+RGViaXQgQ2FyZDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbj5OZXQgQmFua2luZzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbj5DYXNoIG9uIERlbGl2ZXJ5PC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgXCI+XG4gICAgICAgICAgPGxhYmVsPkNhcmQgTnVtYmVyPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWw+RXhwaXJ5IERhdGU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWw+Q1ZWPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWw+TmFtZSBvbiBDYXJkPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsPkFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgIFN1Ym1pdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tPdXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy91aV9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gXCJyZWFjdC11c2UtY2FydFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdWlfY29tcG9uZW50cy9Qcm9kdWN0Q2FyZFwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2FwcC5jc3NcIjtcbmltcG9ydCBQcm9kQ2FydCBmcm9tIFwiLi4vY29tcG9uZW50cy91aV9jb21wb25lbnRzL1Byb2RDYXJ0XCI7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBnZXRQcm9kdWN0cyA9ICgpID0+IGF4aW9zLmdldChcIi9hcGkvcHJvZHVjdHMvYWxsXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIFByb21pc2UuYWxsKFtnZXRQcm9kdWN0cygpXSkudGhlbihmdW5jdGlvbiAocmVzdWx0cykge1xuICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0c1swXSk7XG5cbiAgICAgIGNvbnN0IHByb2R1Y3RzRGF0YSA9IHJlc3VsdHNbMF07XG5cbiAgICAgIHNldFByb2R1Y3RzKHByb2R1Y3RzRGF0YS5kYXRhKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgeyB0b3RhbEl0ZW1zIH0gPSB1c2VDYXJ0KCk7XG4gIC8vIGNvbnNvbGUubG9nKHRvdGFsSXRlbXMsIFwidG90YWxJdGVtc1wiKTtcblxuICBjb25zdCBwcm9kdWN0RmlsdGVyID0gcHJvZHVjdHMuZmlsdGVyKChyZXMpID0+IHtcbiAgICByZXR1cm4gcmVzLnByb2R1Y3RfbmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKTtcbiAgfSk7XG5cbiAgY29uc3Qgc2VhcmNoSGFuZGxlciA9IChlKSA9PiB7XG4gICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhzZWFyY2gpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgXG5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiY29udGFpbmVyLXNlYXJjaFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cInNlYXJjaFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiDwn5SNIFNlYXJjaC4uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17c2VhcmNoSGFuZGxlcn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLwn5SNXCIgb25DaGFuZ2U9e3NlYXJjaEhhbmRsZXJ9IC8+XG4gICAgICA8L2Rpdj4gKi99XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJvd3NlclwiPlxuICAgICAgICB7cHJvZHVjdEZpbHRlci5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICA8UHJvZHVjdENhcmQga2V5PXtwcm9kdWN0LmlkfSBkYXRhPXtwcm9kdWN0fSB7Li4ucHJvZHVjdH0gLz4gICAgICAgICBcbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBjc3MgZnJvbSBcIi4uL3N0eWxlcy9sb2dpbi5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIExvZ0luKCkge1xuICByZXR1cm4gKFxuICAgIDxib2R5PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBpZD1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udGFpbmVyIGxvZy1pbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XG4gICAgICAgICAgICA8aDE+TG9naW48L2gxPlxuXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJVc2VyIG5hbWUvRW1haWxcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5JZiB5b3UgYXJlIG5ldyBQbGVhc2Ugc2lnbnVwPzwvYT5cbiAgICAgICAgICAgIDxidXR0b24+TG9nIEluPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXktY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5LXBhbmVsIG92ZXJsYXktcmlnaHRcIj5cbiAgICAgICAgICAgICAgPGgxPkZhcm1lciBsb2dpbiBmcm9tIGhlcmU8L2gxPlxuICAgICAgICAgICAgICA8cD5TbyB3ZSBjYW4gcHV0IHNvbWUgaW5zdHJ1Y3Rpb24gZm9yIHRoZSBmYXJtZXIgYmxzIGJsYSBibGEgLiAuIC48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2JvZHk+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ0luO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzLm1vZHVsZS5jc3NcIjtcbmZ1bmN0aW9uIFByb2ZpbGUoKSB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VDb250YWluZXJcIj5Qcm9maWxlPC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTaWduVXAoKSB7XG4gIHJldHVybiAoXG4gICAgPGJvZHk+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udGFpbmVyIGxvZy1pbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XG4gICAgICAgICAgICA8aDI+U2lnbnVwPC9oMj5cblxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJVc2VyYW1lXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmVwZWF0cGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIiBSZXBlYXRQYXNzd29yZFwiIC8+XG5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUmVhbCBuYW1lXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQ29tcGFueS1jb21wYW55XCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQmFuayBhY2NvdW50XCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVmlzYVwiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkRlbGV2ZXJ5IG1ldGhvZFwiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZHJlc3NcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQYXkgbWV0aG9kXCIgLz5cblxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Gb3Jnb3QgeW91ciBwYXNzd29yZD88L2E+XG4gICAgICAgICAgICA8YnV0dG9uPkNhbmNsZTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbj5TaWdudXA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheS1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXktcGFuZWwgb3ZlcmxheS1yaWdodFwiPlxuICAgICAgICAgICAgICA8aDI+TmV3IEZhcm1lciBzaWdudXAgZnJvbSBoZXJlPC9oMj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgU28gd2UgY2FuIHB1dCBzb21lIGluc3RydWN0aW9uIGZvciB0aGUgZmFybWVyIHNvbWV0aGluZyBoZXJlXG4gICAgICAgICAgICAgICAgc29tdGhpbmcgaGVyZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9ib2R5PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG4vLyBpbXBvcnQgY3NzIGZyb20gXCIuLi9zdHlsZXMvcGFnZXMubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBTaW5nbGVQcm9kdWN0KCkge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IHByb2R1Y3QgPSBsb2NhdGlvbi5zdGF0ZS5kYXRhO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlQ29udGFpbmVyXCI+XG4gICAgICA8aDE+e3Byb2R1Y3QucHJvZHVjdF9uYW1lfTwvaDE+XG4gICAgICBTaW5nbGVQcm9kdWN0IE5hbWVcbiAgICAgIDxkaXY+dGVzdCB0ZXN0PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVByb2R1Y3Q7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIlJlYWN0IiwiUmVhY3RET00iLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJIb21lIiwiTmF2YmFyIiwiU2luZ2xlUHJvZHVjdCIsIlByb2ZpbGUiLCJDYXJ0IiwiQ2hlY2tPdXQiLCJMb2dJbiIsIlNpZ25VcCIsIkNhcnRQcm92aWRlciIsIk1haW4iLCJyb290IiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJMaW5rIiwidXNlQ2FydCIsInRvdGFsSXRlbXMiLCJQcm9kQ2FydCIsImRhdGEiLCJwcm9kdWN0X25hbWUiLCJkZXNjcmlwdGlvbiIsInVuaXRzIiwicHJpY2UiLCJpZCIsImltYWdlIiwiYyIsImFkZEl0ZW0iLCJwaWMiLCJhcGlIZWFkIiwicmFuZEFwaUhlYWQiLCJjb3VudF93b3JkcyIsIndvcmRfYXJyYXkiLCJ0b3RhbCIsImZvckVhY2giLCJQcm9kdWN0Q2FyZCIsInJhbmRJbWFnZSIsInNwbGl0IiwibmFtZV9hcnJheSIsImNvbnNvbGUiLCJsb2ciLCJ0b3RhbF93b3JkcyIsIm5vdW4iLCJpbmNsdWRlcyIsInVzZVN0YXRlIiwiaXNFbXB0eSIsImNhcnRUb3RhbCIsInRvdGFsVW5pcXVlSXRlbXMiLCJpdGVtcyIsInVwZGF0ZUl0ZW1RdWFudGl0eSIsInJlbW92ZUl0ZW0iLCJlbXB0eUNhcnQiLCJoYW5kbGVDaGVja291dCIsImFsZXJ0IiwidG90YWxhbSIsIm1hcCIsIml0ZW0iLCJoZWlnaHQiLCJxdWFudGl0eSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsInNlYXJjaCIsInNldFNlYXJjaCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZ2V0UHJvZHVjdHMiLCJnZXQiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsInJlc3VsdHMiLCJwcm9kdWN0c0RhdGEiLCJwcm9kdWN0RmlsdGVyIiwiZmlsdGVyIiwicmVzIiwidG9Mb3dlckNhc2UiLCJzZWFyY2hIYW5kbGVyIiwicHJvZHVjdCIsInVzZUxvY2F0aW9uIiwibG9jYXRpb24iLCJzdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=
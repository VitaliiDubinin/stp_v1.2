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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/api/product/find/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_SingleProduct__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/profile",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_Profile__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/cart",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_Cart__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/cart/checkout",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_CheckOut__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
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
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main */ "./assets/Main.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
// import "./styles/app.css";
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
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");


 // import css from './producCard.module.css';



function ProductCard(_ref) {
  var data = _ref.data,
      product_name = _ref.product_name,
      description = _ref.description,
      units = _ref.units,
      price = _ref.price,
      _ref$image = _ref.image,
      image = _ref$image === void 0 ? null : _ref$image;
  var pic = image ? image : "no image available";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "productCard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "productImage"
  }, pic), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "productBodyContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h3", {
    className: "productName"
  }, " ", product_name, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "shortDescription"
  }, description, ". ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "cardFooter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/api/product/find/".concat(data.id),
    state: {
      data: data
    }
  }, "See more"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    type: "submit",
    className: "addToCartBtn"
  }, " ", "add", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "productPrice"
  }, price, "\u20AC/", units))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard); //productName
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
/* harmony import */ var _components_ui_components_ProductCard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/ui_components/ProductCard */ "./assets/components/ui_components/ProductCard.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../styles/app.css */ "./assets/styles/app.css");
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
      setLoading = _useState6[1]; //const getProducts = () => axios.get("/api/products/all");


  var getProducts = function getProducts() {
    return axios__WEBPACK_IMPORTED_MODULE_20___default().get("/api/products/all");
  };

  (0,react__WEBPACK_IMPORTED_MODULE_19__.useEffect)(function () {
    setLoading(true);
    Promise.all([getProducts()]).then(function (results) {
      console.log(results[0]);
      var productsData = results[0];
      setProducts(productsData.data);
      setLoading(false);
    });
  }, []);
  var productFilter = products.filter(function (res) {
    return res.product_name.toLowerCase().includes(search.toLowerCase());
  });

  var searchHandler = function searchHandler(e) {
    setSearch(e.target.value);
    console.log(search);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
    className: "search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("input", {
    type: "text",
    placeholder: "\uD83D\uDD0D",
    onChange: searchHandler
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
    className: "browser"
  }, productFilter.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_components_ui_components_ProductCard__WEBPACK_IMPORTED_MODULE_21__["default"], _extends({
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_axios_index_js-node_m-dbf9a6"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBbUIsV0FBVyxFQUFDO0VBQS9CLEVBUkYsZUFTRTtJQUFPLElBQUksRUFBQyxNQUFaO0lBQW1CLFdBQVcsRUFBQztFQUEvQixFQVRGLGVBVUU7SUFBTyxJQUFJLEVBQUMsTUFBWjtJQUFtQixXQUFXLEVBQUM7RUFBL0IsRUFWRixlQVdFO0lBQU8sSUFBSSxFQUFDLE1BQVo7SUFBbUIsV0FBVyxFQUFDO0VBQS9CLEVBWEYsZUFZRTtJQUFPLElBQUksRUFBQyxNQUFaO0lBQW1CLFdBQVcsRUFBQztFQUEvQixFQVpGLGVBYUU7SUFBTyxJQUFJLEVBQUMsTUFBWjtJQUFtQixXQUFXLEVBQUM7RUFBL0IsRUFiRixlQWNFO0lBQU8sSUFBSSxFQUFDLE1BQVo7SUFBbUIsV0FBVyxFQUFDO0VBQS9CLEVBZEYsZUFnQkU7SUFBRyxJQUFJLEVBQUM7RUFBUiwyQkFoQkYsZUFpQkUsb0ZBakJGLGVBa0JFLG9GQWxCRixDQURGLENBREYsZUF1QkU7SUFBSyxTQUFNO0VBQVgsZ0JBQ0U7SUFBSyxTQUFNO0VBQVgsZ0JBQ0U7SUFBSyxTQUFNO0VBQVgsZ0JBQ0UscUdBREYsZUFFRSxvSkFGRixDQURGLENBREYsQ0F2QkYsQ0FERixDQURGO0FBdUNEOztBQUVELGlFQUFlQSxNQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7Q0FFQTs7QUFFQSxTQUFTTixhQUFULEdBQXlCO0VBQ3ZCLElBQU15RCxRQUFRLEdBQUdELDZEQUFXLEVBQTVCO0VBQ0EsSUFBTUQsT0FBTyxHQUFHRSxRQUFRLENBQUNDLEtBQVQsQ0FBZXZDLElBQS9CO0VBRUEsb0JBQ0U7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDRSx1RUFBS29DLE9BQU8sQ0FBQ25DLFlBQWIsQ0FERixxQ0FHRSxvRkFIRixDQURGO0FBT0Q7O0FBRUQsaUVBQWVwQixhQUFmOzs7Ozs7Ozs7Ozs7QUNqQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWlfY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWlfY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWlfY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvQ2FydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvQ2hlY2tPdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0xvZ0luLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Qcm9maWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9TaWduVXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL1NpbmdsZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9Ib21lXCI7XG4vLyBpbXBvcnQgY3NzIGZyb20gXCIuL3N0eWxlcy9tYWluLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvTmF2YmFyXCI7XG5cbmltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gXCIuLi9hc3NldHMvcGFnZXMvU2luZ2xlUHJvZHVjdFwiO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uL2Fzc2V0cy9wYWdlcy9Qcm9maWxlXCI7XG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vYXNzZXRzL3BhZ2VzL0NhcnRcIjtcbmltcG9ydCBDaGVja091dCBmcm9tIFwiLi4vYXNzZXRzL3BhZ2VzL0NoZWNrT3V0XCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9hc3NldHMvY29tcG9uZW50cy91aV9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IExvZ0luIGZyb20gXCIuL3BhZ2VzL0xvZ0luXCI7XG5pbXBvcnQgU2lnblVwIGZyb20gXCIuL3BhZ2VzL1NpZ25VcFwiO1xuXG5mdW5jdGlvbiBNYWluKCkge1xuICByZXR1cm4gKFxuICAgIDxSb3V0ZXI+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8Um91dGVzPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0+PC9Sb3V0ZT5cbiAgICAgICAgey8qPFJvdXRlIHBhdGg9XCIvOnByb2R1Y3RJZFwiIGVsZW1lbnQ9ezxTaW5nbGVQcm9kdWN0IC8+fT48L1JvdXRlPiovfVxuICAgICAgICA8Um91dGUgcGF0aD1cIi9hcGkvcHJvZHVjdC9maW5kLzppZFwiIGVsZW1lbnQ9ezxTaW5nbGVQcm9kdWN0IC8+fSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9maWxlXCIgZWxlbWVudD17PFByb2ZpbGUgLz59PjwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NhcnRcIiBlbGVtZW50PXs8Q2FydCAvPn0+PC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvY2FydC9jaGVja291dFwiIGVsZW1lbnQ9ezxDaGVja091dCAvPn0+PC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBlbGVtZW50PXs8TG9nSW4gLz59PjwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luL3NpZ251cFwiIGVsZW1lbnQ9ezxTaWduVXAgLz59PjwvUm91dGU+XG4gICAgICA8L1JvdXRlcz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L1JvdXRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcblxuY29uc3Qgcm9vdCA9IFJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xucm9vdC5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxNYWluIC8+LFxuICA8L1JlYWN0LlN0cmljdE1vZGU+XG4pO1xuIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbi8vIGltcG9ydCBcIi4vc3R5bGVzL2FwcC5jc3NcIjtcbi8vIGltcG9ydCBcIi4vc3R5bGVzL21haW4ubW9kdWxlLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9zdHlsZXMvcGFnZXMubW9kdWxlLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9zdHlsZXMvZm9vdGVyLm1vZHVsZS5jc3NcIjtcbi8vIGltcG9ydCBcIi4vc3R5bGVzL25hdmJhci5tb2R1bGUuY3NzXCI7XG4vLyBpbXBvcnQgXCIuL3N0eWxlcy9wcm9kdWNDYXJkLm1vZHVsZS5jc3NcIjtcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgXCIuL2Jvb3RzdHJhcFwiO1xuXG5pbXBvcnQgXCIuL01haW5cIjtcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IGNzcyBmcm9tIFwiLi9mb290ZXIubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBGb290ZXIoKSB7XG4gIC8vIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y3NzLmZvb3RlckNvbnRhaW5lcn0+bGVnYWwgc3R1ZiBhbmQgY29uY3RhY3QgbGlua3M8L2Rpdj47XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlckNvbnRhaW5lclwiPmxlZ2FsIHN0dWYgYW5kIGNvbmN0YWN0IGxpbmtzPC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuLy8gaW1wb3J0IGNzcyBmcm9tICcuL25hdmJhci5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gTmF2YmFyKCkge1xuICByZXR1cm4gKFxuICAgIC8vIDxkaXYgY2xhc3NOYW1lPXtjc3MubmF2Q29udGFpbmVyfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdkNvbnRhaW5lclwiPlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtjc3MubG9nb0NvbnRhaW5lcn0+PC9kaXY+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvQ29udGFpbmVyXCI+PC9kaXY+XG4gICAgICB7LyogPG5hdiBjbGFzc05hbWU9e2Nzcy5uYXZQYW5lbH0+ICovfVxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZQYW5lbFwiPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+IEhvbWUgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvZmlsZVwiPiBQcm9maWxlIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NhcnRcIj4gQ2FydCA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPiBMb2cgaW4gPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgey8qIDxhIGhyZWY9XCIvXCI+IFNpZ24gb3V0IDwvYT4gKi99XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IGNzcyBmcm9tICcuL3Byb2R1Y0NhcmQubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuZnVuY3Rpb24gUHJvZHVjdENhcmQoe2RhdGEsIHByb2R1Y3RfbmFtZSwgZGVzY3JpcHRpb24sIHVuaXRzLCBwcmljZSwgaW1hZ2UgPSBudWxsIH0pIHtcblxuICBjb25zdCBwaWMgPSBpbWFnZSA/IGltYWdlIDogXCJubyBpbWFnZSBhdmFpbGFibGVcIjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdENhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdEltYWdlXCI+e3BpY308L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdEJvZHlDb250YWluZXJcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3ROYW1lXCI+IHtwcm9kdWN0X25hbWV9IDwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcnREZXNjcmlwdGlvblwiPlxuICAgICAgICAgIHtkZXNjcmlwdGlvbn0uIDxiciAvPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRGb290ZXJcIj5cblxuICAgICAgICA8TGluayB0bz17YC9hcGkvcHJvZHVjdC9maW5kLyR7ZGF0YS5pZH1gfSBzdGF0ZT17eyBkYXRhOiBkYXRhfX0+XG4gICAgICAgICAgU2VlIG1vcmVcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgey8qIDxMaW5rIHRvPVwiLzpwcm9kdWN0SWRcIiBkYXRhPXtkYXRhfT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNlZU1vcmVcIj5zZWUgbW9yZTwvcD5cbiAgICAgICAgICA8L0xpbms+ICovfVxuXG4gICAgICAgIHsvKiA8TGluayB0bz17YC9hcGkvcHJvZHVjdHMvJHtkYXRhLmlkfWB9IFxuICAgICAgICAgICAgcHJvZHVjdF9uYW1lPXsgcHJvZHVjdF9uYW1lIH1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXsgZGVzY3JpcHRpb24gfVxuICAgICAgICAgICAgdW5pdHM9e3VuaXRzfSAgXG4gICAgICAgICAgICBwcmljZT17cHJpY2V9IFxuICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfT5cbiAgICAgICAgICBTZWUgbW9yZVxuICAgICAgICAgIDwvTGluaz4gKi99XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYWRkVG9DYXJ0QnRuXCI+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICBhZGR7XCIgXCJ9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0UHJpY2VcIj5cbiAgICAgICAgICAgIHtwcmljZX3igqwve3VuaXRzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZDtcblxuLy9wcm9kdWN0TmFtZVxuLy9kZXNjcmlwdGlvblxuLy90b3RhbEFtb3VudFxuLy91bml0c1xuLy9pbWFnZVxuLy9pZFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzLm1vZHVsZS5jc3NcIjtcbmZ1bmN0aW9uIENhcnQoKSB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VDb250YWluZXJcIj5DYXJ0PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gQ2hlY2tPdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5DaGVja091dDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrT3V0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdWlfY29tcG9uZW50cy9Qcm9kdWN0Q2FyZFwiO1xuaW1wb3J0ICcuLi9zdHlsZXMvYXBwLmNzcyc7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vY29uc3QgZ2V0UHJvZHVjdHMgPSAoKSA9PiBheGlvcy5nZXQoXCIvYXBpL3Byb2R1Y3RzL2FsbFwiKTtcbiAgY29uc3QgZ2V0UHJvZHVjdHMgPSAoKSA9PiBheGlvcy5nZXQoXCIvYXBpL3Byb2R1Y3RzL2FsbFwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICBQcm9taXNlLmFsbChbZ2V0UHJvZHVjdHMoKV0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHNbMF0pO1xuXG4gICAgICBjb25zdCBwcm9kdWN0c0RhdGEgPSByZXN1bHRzWzBdO1xuXG4gICAgICBzZXRQcm9kdWN0cyhwcm9kdWN0c0RhdGEuZGF0YSk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHByb2R1Y3RGaWx0ZXIgPSBwcm9kdWN0cy5maWx0ZXIoKHJlcykgPT4ge1xuICAgIFxuICAgIHJldHVybiByZXMucHJvZHVjdF9uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpO1xuICB9KTtcblxuICBjb25zdCBzZWFyY2hIYW5kbGVyID0gKGUpID0+IHtcbiAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKHNlYXJjaCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIvCflI1cIiBvbkNoYW5nZT17c2VhcmNoSGFuZGxlcn0gLz5cbiAgICAgIDwvZGl2PlxuICAgIFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyb3dzZXJcIj5cbiAgICAgICAge3Byb2R1Y3RGaWx0ZXIubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgIDxQcm9kdWN0Q2FyZCBcbiAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9IFxuICAgICAgICAgIGRhdGE9e3Byb2R1Y3R9IFxuICAgICAgICAgIHsuLi5wcm9kdWN0fS8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgY3NzIGZyb20gXCIuLi9zdHlsZXMvbG9naW4ubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBMb2dJbigpIHtcbiAgcmV0dXJuIChcbiAgICA8Ym9keT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lciBsb2ctaW4tY29udGFpbmVyXCI+XG4gICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiPlxuICAgICAgICAgICAgPGgxPkxvZ2luPC9oMT5cblxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiVXNlciBuYW1lL0VtYWlsXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+SWYgeW91IGFyZSBuZXcgUGxlYXNlIHNpZ251cD88L2E+XG4gICAgICAgICAgICA8YnV0dG9uPkxvZyBJbjwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheS1wYW5lbCBvdmVybGF5LXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxoMT5GYXJtZXIgbG9naW4gZnJvbSBoZXJlPC9oMT5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgU28gd2UgY2FuIHB1dCBzb21lIGluc3RydWN0aW9uIGZvciB0aGUgZmFybWVyIGJscyBibGEgYmxhIC4gLiAuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvYm9keT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9nSW47XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgY3NzIGZyb20gXCIuLi9zdHlsZXMvcGFnZXMubW9kdWxlLmNzc1wiO1xuZnVuY3Rpb24gUHJvZmlsZSgpIHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicGFnZUNvbnRhaW5lclwiPlByb2ZpbGU8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFNpZ25VcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8Ym9keT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBpZD1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250YWluZXIgbG9nLWluLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIj5cbiAgICAgICAgICAgIDxoMj5TaWdudXA8L2gyPlxuXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlVzZXJhbWVcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyZXBlYXRwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiIFJlcGVhdFBhc3N3b3JkXCIgLz5cblxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJSZWFsIG5hbWVcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJDb21wYW55LWNvbXBhbnlcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJCYW5rIGFjY291bnRcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJWaXNhXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRGVsZXZlcnkgbWV0aG9kXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQWRkcmVzc1wiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlBheSBtZXRob2RcIiAvPlxuXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPkZvcmdvdCB5b3VyIHBhc3N3b3JkPzwvYT5cbiAgICAgICAgICAgIDxidXR0b24+Q2FuY2xlPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uPlNpZ251cDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheS1wYW5lbCBvdmVybGF5LXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxoMj5OZXcgRmFybWVyIHNpZ251cCBmcm9tIGhlcmU8L2gyPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBTbyB3ZSBjYW4gcHV0IHNvbWUgaW5zdHJ1Y3Rpb24gZm9yIHRoZSBmYXJtZXIgc29tZXRoaW5nIGhlcmVcbiAgICAgICAgICAgICAgICBzb210aGluZyBoZXJlLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2JvZHk+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25VcDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbi8vIGltcG9ydCBjc3MgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIFNpbmdsZVByb2R1Y3QoKSB7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgY29uc3QgcHJvZHVjdCA9IGxvY2F0aW9uLnN0YXRlLmRhdGE7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VDb250YWluZXJcIj5cbiAgICAgIDxoMT57cHJvZHVjdC5wcm9kdWN0X25hbWV9PC9oMT5cbiAgICAgIFNpbmdsZVByb2R1Y3QgTmFtZVxuICAgICAgPGRpdj50ZXN0IHRlc3Q8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUHJvZHVjdDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiUmVhY3QiLCJSZWFjdERPTSIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIkhvbWUiLCJOYXZiYXIiLCJTaW5nbGVQcm9kdWN0IiwiUHJvZmlsZSIsIkNhcnQiLCJDaGVja091dCIsIkZvb3RlciIsIkxvZ0luIiwiU2lnblVwIiwiTWFpbiIsInJvb3QiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsIkxpbmsiLCJQcm9kdWN0Q2FyZCIsImRhdGEiLCJwcm9kdWN0X25hbWUiLCJkZXNjcmlwdGlvbiIsInVuaXRzIiwicHJpY2UiLCJpbWFnZSIsInBpYyIsImlkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImdldFByb2R1Y3RzIiwiZ2V0IiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJyZXN1bHRzIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RzRGF0YSIsInByb2R1Y3RGaWx0ZXIiLCJmaWx0ZXIiLCJyZXMiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2VhcmNoSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsInByb2R1Y3QiLCJ1c2VMb2NhdGlvbiIsImxvY2F0aW9uIiwic3RhdGUiXSwic291cmNlUm9vdCI6IiJ9
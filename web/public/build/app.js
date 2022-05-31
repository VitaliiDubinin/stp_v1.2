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
 // import css from "../styles/login.module.css";

function LogIn() {
<<<<<<< HEAD
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("body", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": _styles_login_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].container,
=======
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container",
>>>>>>> 1edcc4a9461eb340083b2b1450a4d47044a2ae46
    id: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "form-container log-in-container"
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
/* harmony import */ var _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/signup.module.css */ "./assets/styles/signup.module.css");



function SignUp() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("body", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].container,
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


<<<<<<< HEAD
/***/ }),

/***/ "./assets/styles/login.module.css":
/*!****************************************!*\
  !*** ./assets/styles/login.module.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/signup.module.css":
/*!*****************************************!*\
  !*** ./assets/styles/signup.module.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


=======
>>>>>>> 1edcc4a9461eb340083b2b1450a4d47044a2ae46
/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-2a1692"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkYsZUFrQkUsb0ZBbEJGLENBREYsQ0FERixlQXVCRTtJQUFLLFNBQU07RUFBWCxnQkFDRTtJQUFLLFNBQU07RUFBWCxnQkFDRTtJQUFLLFNBQU07RUFBWCxnQkFDRSxxR0FERixlQUVFLG9KQUZGLENBREYsQ0FERixDQXZCRixDQURGLENBREY7QUF1Q0Q7O0FBRUQsaUVBQWUxQyxNQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7Q0FFQTs7QUFFQSxTQUFTTixhQUFULEdBQXlCO0VBQ3ZCLElBQU1tRCxRQUFRLEdBQUdELDZEQUFXLEVBQTVCO0VBQ0EsSUFBTUgsT0FBTyxHQUFHSSxRQUFRLENBQUNDLEtBQVQsQ0FBZUMsSUFBL0I7RUFDQSxvQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFLHVFQUFLTixPQUFPLENBQUM1QixXQUFiLENBREYsdUJBREY7QUFNRDs7QUFFRCxpRUFBZW5CLGFBQWY7Ozs7Ozs7Ozs7OztBQ2ZBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9NYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aV9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aV9jb21wb25lbnRzL05hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aV9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9DYXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9DaGVja091dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvTG9nSW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL1Byb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL1NpZ25VcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvU2luZ2xlUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9sb2dpbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvc2lnbnVwLm1vZHVsZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZXMsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL3BhZ2VzL0hvbWVcIjtcbi8vIGltcG9ydCBjc3MgZnJvbSBcIi4vc3R5bGVzL21haW4ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vYXNzZXRzL2NvbXBvbmVudHMvdWlfY29tcG9uZW50cy9OYXZiYXJcIjtcblxuaW1wb3J0IFNpbmdsZVByb2R1Y3QgZnJvbSBcIi4uL2Fzc2V0cy9wYWdlcy9TaW5nbGVQcm9kdWN0XCI7XG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vYXNzZXRzL3BhZ2VzL1Byb2ZpbGVcIjtcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9hc3NldHMvcGFnZXMvQ2FydFwiO1xuaW1wb3J0IENoZWNrT3V0IGZyb20gXCIuLi9hc3NldHMvcGFnZXMvQ2hlY2tPdXRcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgTG9nSW4gZnJvbSBcIi4vcGFnZXMvTG9nSW5cIjtcbmltcG9ydCBTaWduVXAgZnJvbSBcIi4vcGFnZXMvU2lnblVwXCI7XG5cbmZ1bmN0aW9uIE1haW4oKSB7XG4gIHJldHVybiAoXG4gICAgPFJvdXRlcj5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxSb3V0ZXM+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lIC8+fT5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgIDwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiLzpwcm9kdWN0SWRcIiBlbGVtZW50PXs8U2luZ2xlUHJvZHVjdCAvPn0+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9maWxlXCIgZWxlbWVudD17PFByb2ZpbGUgLz59PlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvY2FydFwiIGVsZW1lbnQ9ezxDYXJ0IC8+fT5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgIDwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NhcnQvY2hlY2tvdXRcIiBlbGVtZW50PXs8Q2hlY2tPdXQgLz59PlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBlbGVtZW50PXs8TG9nSW4vPn0+PC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW4vc2lnbnVwXCIgZWxlbWVudD17PFNpZ25VcC8+fT48L1JvdXRlPlxuICAgICAgPC9Sb3V0ZXM+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9Sb3V0ZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG5cbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcbnJvb3QucmVuZGVyKFxuICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICA8TWFpbiAvPixcbiAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuKTtcbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgXCIuL3N0eWxlcy9hcHAuY3NzXCI7XG4vLyBpbXBvcnQgXCIuL3N0eWxlcy9tYWluLm1vZHVsZS5jc3NcIjtcbi8vIGltcG9ydCBcIi4vc3R5bGVzL3BhZ2VzLm1vZHVsZS5jc3NcIjtcbi8vIGltcG9ydCBcIi4vc3R5bGVzL2Zvb3Rlci5tb2R1bGUuY3NzXCI7XG4vLyBpbXBvcnQgXCIuL3N0eWxlcy9uYXZiYXIubW9kdWxlLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9zdHlsZXMvcHJvZHVjQ2FyZC5tb2R1bGUuY3NzXCI7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0IFwiLi9ib290c3RyYXBcIjtcblxuaW1wb3J0IFwiLi9NYWluXCI7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBjc3MgZnJvbSBcIi4vZm9vdGVyLm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gRm9vdGVyKCkge1xuICAvLyByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2Nzcy5mb290ZXJDb250YWluZXJ9PmxlZ2FsIHN0dWYgYW5kIGNvbmN0YWN0IGxpbmtzPC9kaXY+O1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb290ZXJDb250YWluZXJcIj5sZWdhbCBzdHVmIGFuZCBjb25jdGFjdCBsaW5rczwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbi8vIGltcG9ydCBjc3MgZnJvbSAnLi9uYXZiYXIubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgcmV0dXJuIChcbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT17Y3NzLm5hdkNvbnRhaW5lcn0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZDb250YWluZXJcIj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17Y3NzLmxvZ29Db250YWluZXJ9PjwvZGl2PiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb0NvbnRhaW5lclwiPjwvZGl2PlxuICAgICAgey8qIDxuYXYgY2xhc3NOYW1lPXtjc3MubmF2UGFuZWx9PiAqL31cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2UGFuZWxcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPiBIb21lIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2ZpbGVcIj4gUHJvZmlsZSA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9jYXJ0XCI+IENhcnQgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgey8qIDxhIGhyZWY9XCIvXCI+IFNpZ24gb3V0IDwvYT4gKi99XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IGNzcyBmcm9tICcuL3Byb2R1Y0NhcmQubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuZnVuY3Rpb24gUHJvZHVjdENhcmQoeyBwcm9kdWN0TmFtZSwgc2hvcnREZXNjcmlwdGlvbiwgdG90YWxBbW91bnQsIHVuaXRzLCBwcm9kdWN0UHJpY2UsIGltYWdlVXJsID0gbnVsbCB9KSB7XG4gIGNvbnN0IGltYWdlID0gaW1hZ2VVcmwgPyBpbWFnZVVybCA6IFwibm8gaW1hZ2UgYXZhaWxhYmxlXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RDYXJkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RJbWFnZVwiPntpbWFnZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdEJvZHlDb250YWluZXJcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3ROYW1lXCI+IHtwcm9kdWN0TmFtZX0gPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9ydERlc2NyaXB0aW9uXCI+XG4gICAgICAgICAge3Nob3J0RGVzY3JpcHRpb259LiA8YnIgLz5cbiAgICAgICAgICBJbiBzdG9yYWdlOnt0b3RhbEFtb3VudH1cbiAgICAgICAgICB7dW5pdHN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRGb290ZXJcIj5cbiAgICAgICAgICA8TGluayB0bz1cIi86cHJvZHVjdElkXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzZWVNb3JlXCI+c2VlIG1vcmU8L3A+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImFkZFRvQ2FydEJ0blwiPlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgYWRke1wiIFwifVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdFByaWNlXCI+XG4gICAgICAgICAgICB7cHJvZHVjdFByaWNlfeKCrC97dW5pdHN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkO1xuXG4vL3Byb2R1Y3ROYW1lXG4vL3Nob3J0RGVzY3JpcHRpb25cbi8vZGVzY3JpcHRpb25cbi8vdG90YWxBbW91bnRcbi8vdW5pdHNcbi8vaW1hZ2Vcbi8vaWRcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBjc3MgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy5tb2R1bGUuY3NzXCI7XG5mdW5jdGlvbiBDYXJ0KCkge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYWdlQ29udGFpbmVyXCI+Q2FydDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIENoZWNrT3V0KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+Q2hlY2tPdXQ8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja091dDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzLm1vZHVsZS5jc3NcIjtcblxuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvUHJvZHVjdENhcmRcIjtcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAvL2R1bW15IGF4aW9zXG4gIC8vY29uc3QgZ2V0UHJvZHVjdHMgPSAoKSA9PiBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9wcm9kdWN0cycpO1xuICBjb25zdCBnZXRQcm9kdWN0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBwcm9kdWN0TmFtZTogXCJSSUNFXCIsXG4gICAgICAgIHNob3J0RGVzY3JpcHRpb246IFwiYSB2ZXJ5IGdvb2QgcmljZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJ0aGlzIHByb2R1Y3Qgd2FzIHNlZWRlZCBhbmQgZmFybWVkIGluIHRoZSBsb2NhbCBmYXJtcyBvZiBoZWxzaW5raSwgdGhlIG1pbmltdW4gdHUgYnV5IGlzIDFrZ1wiLFxuICAgICAgICB0b3RhbEFtb3VudDogMTAwLFxuICAgICAgICB1bml0czogXCJrZ1wiLFxuICAgICAgICBwcm9kdWN0UHJpY2U6IDEuNTUsXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogMSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcInBvdGF0b2VzXCIsXG4gICAgICAgIHNob3J0RGVzY3JpcHRpb246IFwidGhpcyBwb3RhdG9zIGFyZSB0aGUgYmVzdFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJ0cnkgbXkgcG90YXRvZXMgYW5kIHlvdSB3aWxsIGZhbGwgaW5sb3ZlIGZvciBmaXJzdCB0aW1lIHdpdGggYSBwb3RhdG9cIixcbiAgICAgICAgdG90YWxBbW91bnQ6IDIwLFxuICAgICAgICB1bml0czogXCJrZ1wiLFxuICAgICAgICBwcm9kdWN0UHJpY2U6IDIuMjUsXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogMixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcInp1Y2NpbmlcIixcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCJ0aGUgcGVyZmVjdCBzaXplIG9mIGEgenVjY2luaVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJjb21iaW5lIHRoaXMgenVjY2luaSB3aXRoIHZhc2VsaW5lLCBjb25kb20gYW5kIGEgYm90dGxlIG9mIHdpbmUgdGhlbiBmaW5kIG91dCB3aGF0IGNsaW1heCBpc1wiLFxuICAgICAgICB0b3RhbEFtb3VudDogMTAsXG4gICAgICAgIHVuaXRzOiBcInVuaXRcIixcbiAgICAgICAgcHJvZHVjdFByaWNlOiAwLjk5LFxuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgaWQ6IDMsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm9kdWN0TmFtZTogXCJjYXJyb3RzXCIsXG4gICAgICAgIHNob3J0RGVzY3JpcHRpb246IFwidmVyeSBnb29kIGZvciBleWVzIGhlYWx0aFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJIYXZlIHlvdSBldmVyIHNlZW4gYSBidW5ueSB3aXRoIGdsYXNzZXM/ISBpZiB5b3UgYXJlIG5vdCBhIGRvY3RvciBvciBhIGJpb2xvZ2lzdCBkb250IGNvbW1lbnRcIixcbiAgICAgICAgdG90YWxBbW91bnQ6IDIwMCxcbiAgICAgICAgdW5pdHM6IFwiYnVuY2hcIixcbiAgICAgICAgcHJvZHVjdFByaWNlOiA1Ljk5LFxuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgaWQ6IDQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm9kdWN0TmFtZTogXCJwdW5raW5cIixcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCJ0cnkgbXkgcHVua2luXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcImp1c3QgZG9udCBiZSBhIGNvd2FyZCBhbiBidXkgbXkgcHVua2luXCIsXG4gICAgICAgIHRvdGFsQW1vdW50OiAxLFxuICAgICAgICB1bml0czogXCJ1bml0XCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogMTAwLFxuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgaWQ6IDUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm9kdWN0TmFtZTogXCJ0b21hdG9lc1wiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcImluIHJlZCBhbmQgeWVsbG93XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcImEgc2FsYWQgd2l0b3V0IHRvbWF0b2VzIGlzIGxpa2UgYSBhIGJhdHRsZSBjcnVpc2UgYXJtYWRhIHNoaXAgd2l0aG91dCBzZXJpYWwgbnVtYmVyXCIsXG4gICAgICAgIHRvdGFsQW1vdW50OiA1MCxcbiAgICAgICAgdW5pdHM6IFwicG91bmRcIixcbiAgICAgICAgcHJvZHVjdFByaWNlOiAwLjY1LFxuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgaWQ6IDYsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm9kdWN0TmFtZTogXCJlZ2dwbGFudFwiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcImZ1bm55IG5hbWUgYnV0IHRhc3R5IHZlZ2d5XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIm1ha2UgdGhlIGJlc3Qgam9rZXMgYWJvdXQgZWdncGxhbnRzIHdpdGggdGhpcyBiZWF1dGllcyBvZiB2ZWdldGFibGVzXCIsXG4gICAgICAgIHRvdGFsQW1vdW50OiAyMCxcbiAgICAgICAgdW5pdHM6IFwidW5pdFwiLFxuICAgICAgICBwcm9kdWN0UHJpY2U6IDIsXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogNyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcImZhYmEgYmVhbnNcIixcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCJnZXQgdGhpcyBvcmdhbmljIGpld2Vsc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJnZXQgdGhlIGJlYW5zIGFuZCBncm93IGEgbWFnaWMgdHJlZSBpbiB5b3VyIGJhY2sgeWFyZFwiLFxuICAgICAgICB0b3RhbEFtb3VudDogMyxcbiAgICAgICAgdW5pdHM6IFwiYmVhblwiLFxuICAgICAgICBwcm9kdWN0UHJpY2U6IDk5Ljk5LFxuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgaWQ6IDgsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm9kdWN0TmFtZTogXCJjdWN1bWJlclwiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcInRoZSBwZXJmZWN0IHNpemUgb2YgYSBjdWN1bWJlclwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJjb21iaW5lIHRoaXMgY3VjdW1iZXIgd2l0aCB2YXNlbGluZSwgY29uZG9tIGFuZCBhIGJvdHRsZSBvZiB3aW5lIHRoZW4gZmluZCBvdXQgd2hhdCBjbGltYXggaXNcIixcbiAgICAgICAgdG90YWxBbW91bnQ6IDEwLFxuICAgICAgICB1bml0czogXCJ1bml0XCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogMTAuOTksXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogOSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcImxldHR1Y2VcIixcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCJmcmVzIGFzIGEgbGV0dHVjZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJpcyBzbyBmcmVzaCB5b3UgY2FudCBzYXkgbm8gXCIsXG4gICAgICAgIHRvdGFsQW1vdW50OiAxMCxcbiAgICAgICAgdW5pdHM6IFwidW5pdFwiLFxuICAgICAgICBwcm9kdWN0UHJpY2U6IDEwLjk5LFxuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgaWQ6IDEwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwiY291bGlmbG93ZXJcIixcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCJ3ZWlyZCBhbmQgZGVsaWNpb3VzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcInlvdSBiZXQgdGhleSBhcmUgdGhlIHdlaXJkZXN0XCIsXG4gICAgICAgIHRvdGFsQW1vdW50OiAxMCxcbiAgICAgICAgdW5pdHM6IFwidW5pdFwiLFxuICAgICAgICBwcm9kdWN0UHJpY2U6IDEwLjk5LFxuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgaWQ6IDExLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwib25pb25zXCIsXG4gICAgICAgIHNob3J0RGVzY3JpcHRpb246IFwid2FubmEgY3J5Li4gb2YgaGFwcGluZXNzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIndpdGggbW9yZSBjcnlpbmcgcG93ZXIgdGhhdCB0aGUgY29tcGV0aXRvcnMnc1wiLFxuICAgICAgICB0b3RhbEFtb3VudDogMTAsXG4gICAgICAgIHVuaXRzOiBcImtnXCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogMTAuOTksXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogMTIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm9kdWN0TmFtZTogXCJjaGlsbGlcIixcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCJmZWVsIHRoZSBwYWluXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcImdhcmFudGVlOiB5b3Ugd2lsbCB0YXN0ZSBpdCB0b2RheSBhbmQgdG9tb3Jyb3cgbW9ybmluZ1wiLFxuICAgICAgICB0b3RhbEFtb3VudDogMTAsXG4gICAgICAgIHVuaXRzOiBcImdcIixcbiAgICAgICAgcHJvZHVjdFByaWNlOiAxMC45OSxcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIGlkOiAxMyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcImJlZXRyb290XCIsXG4gICAgICAgIHNob3J0RGVzY3JpcHRpb246IFwidmVyeSBwdXJwbGVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiaWYgcHVycGxlbmVzcyBpcyB0aGUgbWVzc3VyZSB0aGlzIGFyZSB0aGUga2luZ3NcIixcbiAgICAgICAgdG90YWxBbW91bnQ6IDE1LFxuICAgICAgICB1bml0czogXCIzIHVuaXRzXCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogMC45OSxcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIGlkOiAxNCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcImNoaWNrIHBlYXNcIixcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCJhbHJlYWR5IGNvb2tlZFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJ5b3Ugb25seSBuZWVkIHRvIHNlcnZlIHRoZW1cIixcbiAgICAgICAgdG90YWxBbW91bnQ6IDEwLFxuICAgICAgICB1bml0czogXCJrZ1wiLFxuICAgICAgICBwcm9kdWN0UHJpY2U6IDIwLjk5LFxuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgaWQ6IDE1LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwiYnJ1c3NlbCBzcHJvd3NcIixcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCJ0ZXJyaWJsZSB0YXN0ZSBidXQgdmVyeSBoZWFsdGh5XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRyaXZpYTogZGlkIHlvdSBrbm93IHRoYXQgYnJ1c3NlbHMgc3Byb3dzIGFyZSBub3QgZnJvbSBicnVzc2Vsc1wiLFxuICAgICAgICB0b3RhbEFtb3VudDogMTAsXG4gICAgICAgIHVuaXRzOiBcImtnXCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogMTAuOTksXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogMTYsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm9kdWN0TmFtZTogXCJicm9jb2xpXCIsXG4gICAgICAgIHNob3J0RGVzY3JpcHRpb246IFwiYSB0cmVlIGxvb2tpbmcgdmVnZ2llXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcInRoaXMgYXJlIGJyb3VnaHQgZnJvbSB0aGUgZmFyIGZhciBtZWxsdW1ha2lcIixcbiAgICAgICAgdG90YWxBbW91bnQ6IDEwLFxuICAgICAgICB1bml0czogXCJrZ1wiLFxuICAgICAgICBwcm9kdWN0UHJpY2U6IDEwLjk5LFxuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgaWQ6IDE3LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwic3BpbmFjaFwiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcInBvcGV5ZSBmb29kXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcImlmIHlvdSB3YW50IHRvIHJlc2N1ZSB5b3VyIGxhZHkgZnJvbSBicnV0dXMgeW91IGdvdHRhIGVhdCB0aGlzXCIsXG4gICAgICAgIHRvdGFsQW1vdW50OiAxMCxcbiAgICAgICAgdW5pdHM6IFwiZ1wiLFxuICAgICAgICBwcm9kdWN0UHJpY2U6IDEwLjk5LFxuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgaWQ6IDE4LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwiZ2FybGljXCIsXG4gICAgICAgIHNob3J0RGVzY3JpcHRpb246IFwiaWRlYWwgdnMgdmFtcGlyZXNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiaXRzIGtub3duIHRoYXQgdmFtcGlyZXMgZG9udCBlYXQgZ2FybGljIGNhdXNlIHRoZSBiYWQgYnJlYXRoIGl0IGxlYXZlcyBhZnRlclwiLFxuICAgICAgICB0b3RhbEFtb3VudDogMTAsXG4gICAgICAgIHVuaXRzOiBcImdcIixcbiAgICAgICAgcHJvZHVjdFByaWNlOiAxLjk5LFxuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgaWQ6IDE5LFxuICAgICAgfSxcbiAgICBdO1xuICB9O1xuXG4gIGNvbnN0IHByb2R1Y3RGaWx0ZXIgPSBwcm9kdWN0cy5maWx0ZXIoKHJlcykgPT4ge1xuICAgIHJldHVybiByZXMucHJvZHVjdE5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSk7XG4gIH0pO1xuXG4gIGNvbnN0IHNlYXJjaEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XG4gICAgY29uc29sZS5sb2coc2VhcmNoKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFByb2R1Y3RzKGdldFByb2R1Y3RzKCkpO1xuICAgIC8vdXNlIGF4aW9zIHRvIGdldCB0aGUgZGF0YSBmcm9tIGRhdGFiYXNlOlxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT17Y3NzLnBhZ2VDb250YWluZXJ9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZUNvbnRhaW5lclwiPlxuICAgICAgPGgxPkhvbWU8L2gxPlxuICAgICAgPGRpdj5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtjc3Muc2VhcmNofT4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLwn5SNXCIgb25DaGFuZ2U9e3NlYXJjaEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17Y3NzLmJyb3dzZXJ9PiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJvd3NlclwiPlxuICAgICAgICB7cHJvZHVjdEZpbHRlci5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICA8UHJvZHVjdENhcmQga2V5PXtwcm9kdWN0LmlkfSB7Li4ucHJvZHVjdH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjc3MgZnJvbSBcIi4uL3N0eWxlcy9sb2dpbi5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIExvZ0luKCkge1xuICByZXR1cm4gKFxuICAgIDxib2R5PlxuICAgICAgPGRpdiBjbGFzcz17Y3NzLmNvbnRhaW5lcn0gaWQ9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udGFpbmVyIGxvZy1pbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XG4gICAgICAgICAgICA8aDE+TG9naW48L2gxPlxuXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJVc2VyIG5hbWUvRW1haWxcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5JZiB5b3UgYXJlIG5ldyBQbGVhc2Ugc2lnbnVwPzwvYT5cbiAgICAgICAgICAgIDxidXR0b24+TG9nIEluPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXktY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5LXBhbmVsIG92ZXJsYXktcmlnaHRcIj5cbiAgICAgICAgICAgICAgPGgxPkZhcm1lciBsb2dpbiBmcm9tIGhlcmU8L2gxPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBTbyB3ZSBjYW4gcHV0IHNvbWUgaW5zdHJ1Y3Rpb24gZm9yIHRoZSBmYXJtZXIgYmxzIGJsYSBibGEgLiAuIC5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9ib2R5PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dJbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBjc3MgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy5tb2R1bGUuY3NzXCI7XG5mdW5jdGlvbiBQcm9maWxlKCkge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYWdlQ29udGFpbmVyXCI+UHJvZmlsZTwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjc3MgZnJvbSBcIi4uL3N0eWxlcy9zaWdudXAubW9kdWxlLmNzc1wiO1xuZnVuY3Rpb24gU2lnblVwKCkge1xuICByZXR1cm4gKFxuICAgIDxib2R5PlxuICAgICAgPGRpdiBjbGFzcz17Y3NzLmNvbnRhaW5lcn0gaWQ9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udGFpbmVyIGxvZy1pbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XG4gICAgICAgICAgICA8aDI+U2lnbnVwPC9oMj5cblxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJVc2VyYW1lXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmVwZWF0cGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIiBSZXBlYXRQYXNzd29yZFwiIC8+XG5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUmVhbCBuYW1lXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQ29tcGFueS1jb21wYW55XCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQmFuayBhY2NvdW50XCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVmlzYVwiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkRlbGV2ZXJ5IG1ldGhvZFwiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZHJlc3NcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQYXkgbWV0aG9kXCIgLz5cblxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Gb3Jnb3QgeW91ciBwYXNzd29yZD88L2E+XG4gICAgICAgICAgICA8YnV0dG9uPkNhbmNsZTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbj5TaWdudXA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheS1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXktcGFuZWwgb3ZlcmxheS1yaWdodFwiPlxuICAgICAgICAgICAgICA8aDI+TmV3IEZhcm1lciBzaWdudXAgZnJvbSBoZXJlPC9oMj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgU28gd2UgY2FuIHB1dCBzb21lIGluc3RydWN0aW9uIGZvciB0aGUgZmFybWVyIHNvbWV0aGluZyBoZXJlXG4gICAgICAgICAgICAgICAgc29tdGhpbmcgaGVyZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9ib2R5PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG4vLyBpbXBvcnQgY3NzIGZyb20gXCIuLi9zdHlsZXMvcGFnZXMubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBTaW5nbGVQcm9kdWN0KCkge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IHByb2R1Y3QgPSBsb2NhdGlvbi5zdGF0ZS5kYXRhO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZUNvbnRhaW5lclwiPlxuICAgICAgPGgxPntwcm9kdWN0LnByb2R1Y3ROYW1lfTwvaDE+XG4gICAgICBTaW5nbGVQcm9kdWN0IE5hbWVcbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUHJvZHVjdDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiUmVhY3QiLCJSZWFjdERPTSIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIkhvbWUiLCJOYXZiYXIiLCJTaW5nbGVQcm9kdWN0IiwiUHJvZmlsZSIsIkNhcnQiLCJDaGVja091dCIsIkZvb3RlciIsIkxvZ0luIiwiU2lnblVwIiwiTWFpbiIsInJvb3QiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsIkxpbmsiLCJQcm9kdWN0Q2FyZCIsInByb2R1Y3ROYW1lIiwic2hvcnREZXNjcmlwdGlvbiIsInRvdGFsQW1vdW50IiwidW5pdHMiLCJwcm9kdWN0UHJpY2UiLCJpbWFnZVVybCIsImltYWdlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiZ2V0UHJvZHVjdHMiLCJkZXNjcmlwdGlvbiIsImlkIiwicHJvZHVjdEZpbHRlciIsImZpbHRlciIsInJlcyIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzZWFyY2hIYW5kbGVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInByb2R1Y3QiLCJjc3MiLCJjb250YWluZXIiLCJ1c2VMb2NhdGlvbiIsImxvY2F0aW9uIiwic3RhdGUiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZixnQkFDRSxpSEFERixlQUVFLHdIQUZGLENBREYsQ0FERixDQVhGLENBREY7QUFzQkQ7O0FBRUQsaUVBQWVBLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDM0JBOztBQUNBLFNBQVNKLE9BQVQsR0FBbUI7RUFDakIsb0JBQU87SUFBSyxTQUFTLEVBQUM7RUFBZixhQUFQO0FBQ0Q7O0FBRUQsaUVBQWVBLE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUEsU0FBU0ssTUFBVCxHQUFrQjtFQUNoQixvQkFDRSxpRkFERjtBQUdEOztBQUVELGlFQUFlQSxNQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtDQUVBOztBQUVBLFNBQVNOLGFBQVQsR0FBeUI7RUFDdkIsSUFBTWlELFFBQVEsR0FBR0QsNkRBQVcsRUFBNUI7RUFDQSxJQUFNRCxPQUFPLEdBQUdFLFFBQVEsQ0FBQ0MsS0FBVCxDQUFlQyxJQUEvQjtFQUNBLG9CQUNFO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0UsdUVBQUtKLE9BQU8sQ0FBQzVCLFdBQWIsQ0FERix1QkFERjtBQU1EOztBQUVELGlFQUFlbkIsYUFBZjs7Ozs7Ozs7Ozs7O0FDZkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWlfY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWlfY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWlfY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvQ2FydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvQ2hlY2tPdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0xvZ0luLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Qcm9maWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9TaWduVXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL1NpbmdsZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9Ib21lXCI7XG4vLyBpbXBvcnQgY3NzIGZyb20gXCIuL3N0eWxlcy9tYWluLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvTmF2YmFyXCI7XG5cbmltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gXCIuLi9hc3NldHMvcGFnZXMvU2luZ2xlUHJvZHVjdFwiO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uL2Fzc2V0cy9wYWdlcy9Qcm9maWxlXCI7XG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vYXNzZXRzL3BhZ2VzL0NhcnRcIjtcbmltcG9ydCBDaGVja091dCBmcm9tIFwiLi4vYXNzZXRzL3BhZ2VzL0NoZWNrT3V0XCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9hc3NldHMvY29tcG9uZW50cy91aV9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IExvZ0luIGZyb20gXCIuL3BhZ2VzL0xvZ0luXCI7XG5pbXBvcnQgU2lnblVwIGZyb20gXCIuL3BhZ2VzL1NpZ25VcFwiO1xuXG5mdW5jdGlvbiBNYWluKCkge1xuICByZXR1cm4gKFxuICAgIDxSb3V0ZXI+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8Um91dGVzPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi86cHJvZHVjdElkXCIgZWxlbWVudD17PFNpbmdsZVByb2R1Y3QgLz59PlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZmlsZVwiIGVsZW1lbnQ9ezxQcm9maWxlIC8+fT5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgIDwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NhcnRcIiBlbGVtZW50PXs8Q2FydCAvPn0+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9jYXJ0L2NoZWNrb3V0XCIgZWxlbWVudD17PENoZWNrT3V0IC8+fT5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgIDwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgZWxlbWVudD17PExvZ0luLz59PjwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luL3NpZ251cFwiIGVsZW1lbnQ9ezxTaWduVXAvPn0+PC9Sb3V0ZT5cbiAgICAgIDwvUm91dGVzPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvUm91dGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG5yb290LnJlbmRlcihcbiAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgPE1haW4gLz4sXG4gIDwvUmVhY3QuU3RyaWN0TW9kZT5cbik7XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0IFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9zdHlsZXMvbWFpbi5tb2R1bGUuY3NzXCI7XG4vLyBpbXBvcnQgXCIuL3N0eWxlcy9wYWdlcy5tb2R1bGUuY3NzXCI7XG4vLyBpbXBvcnQgXCIuL3N0eWxlcy9mb290ZXIubW9kdWxlLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9zdHlsZXMvbmF2YmFyLm1vZHVsZS5jc3NcIjtcbi8vIGltcG9ydCBcIi4vc3R5bGVzL3Byb2R1Y0NhcmQubW9kdWxlLmNzc1wiO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCBcIi4vYm9vdHN0cmFwXCI7XG5cbmltcG9ydCBcIi4vTWFpblwiO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgY3NzIGZyb20gXCIuL2Zvb3Rlci5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgLy8gcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjc3MuZm9vdGVyQ29udGFpbmVyfT5sZWdhbCBzdHVmIGFuZCBjb25jdGFjdCBsaW5rczwvZGl2PjtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyQ29udGFpbmVyXCI+bGVnYWwgc3R1ZiBhbmQgY29uY3RhY3QgbGlua3M8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG4vLyBpbXBvcnQgY3NzIGZyb20gJy4vbmF2YmFyLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBOYXZiYXIoKSB7XG4gIHJldHVybiAoXG4gICAgLy8gPGRpdiBjbGFzc05hbWU9e2Nzcy5uYXZDb250YWluZXJ9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2Q29udGFpbmVyXCI+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9e2Nzcy5sb2dvQ29udGFpbmVyfT48L2Rpdj4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29Db250YWluZXJcIj48L2Rpdj5cbiAgICAgIHsvKiA8bmF2IGNsYXNzTmFtZT17Y3NzLm5hdlBhbmVsfT4gKi99XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdlBhbmVsXCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9cIj4gSG9tZSA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9wcm9maWxlXCI+IFByb2ZpbGUgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvY2FydFwiPiBDYXJ0IDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCI+IExvZyBpbiA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICB7LyogPGEgaHJlZj1cIi9cIj4gU2lnbiBvdXQgPC9hPiAqL31cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgY3NzIGZyb20gJy4vcHJvZHVjQ2FyZC5tb2R1bGUuY3NzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5mdW5jdGlvbiBQcm9kdWN0Q2FyZCh7IHByb2R1Y3ROYW1lLCBzaG9ydERlc2NyaXB0aW9uLCB0b3RhbEFtb3VudCwgdW5pdHMsIHByb2R1Y3RQcmljZSwgaW1hZ2VVcmwgPSBudWxsIH0pIHtcbiAgY29uc3QgaW1hZ2UgPSBpbWFnZVVybCA/IGltYWdlVXJsIDogXCJubyBpbWFnZSBhdmFpbGFibGVcIjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdENhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdEltYWdlXCI+e2ltYWdlfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0Qm9keUNvbnRhaW5lclwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdE5hbWVcIj4ge3Byb2R1Y3ROYW1lfSA8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3J0RGVzY3JpcHRpb25cIj5cbiAgICAgICAgICB7c2hvcnREZXNjcmlwdGlvbn0uIDxiciAvPlxuICAgICAgICAgIEluIHN0b3JhZ2U6e3RvdGFsQW1vdW50fVxuICAgICAgICAgIHt1bml0c31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZEZvb3RlclwiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiLzpwcm9kdWN0SWRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNlZU1vcmVcIj5zZWUgbW9yZTwvcD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYWRkVG9DYXJ0QnRuXCI+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICBhZGR7XCIgXCJ9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0UHJpY2VcIj5cbiAgICAgICAgICAgIHtwcm9kdWN0UHJpY2V94oKsL3t1bml0c31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmQ7XG5cbi8vcHJvZHVjdE5hbWVcbi8vc2hvcnREZXNjcmlwdGlvblxuLy9kZXNjcmlwdGlvblxuLy90b3RhbEFtb3VudFxuLy91bml0c1xuLy9pbWFnZVxuLy9pZFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzLm1vZHVsZS5jc3NcIjtcbmZ1bmN0aW9uIENhcnQoKSB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VDb250YWluZXJcIj5DYXJ0PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gQ2hlY2tPdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5DaGVja091dDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrT3V0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgY3NzIGZyb20gXCIuLi9zdHlsZXMvcGFnZXMubW9kdWxlLmNzc1wiO1xuXG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdWlfY29tcG9uZW50cy9Qcm9kdWN0Q2FyZFwiO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIC8vZHVtbXkgYXhpb3NcbiAgLy9jb25zdCBnZXRQcm9kdWN0cyA9ICgpID0+IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3Byb2R1Y3RzJyk7XG4gIGNvbnN0IGdldFByb2R1Y3RzID0gKCkgPT4ge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcIlJJQ0VcIixcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCJhIHZlcnkgZ29vZCByaWNlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcInRoaXMgcHJvZHVjdCB3YXMgc2VlZGVkIGFuZCBmYXJtZWQgaW4gdGhlIGxvY2FsIGZhcm1zIG9mIGhlbHNpbmtpLCB0aGUgbWluaW11biB0dSBidXkgaXMgMWtnXCIsXG4gICAgICAgIHRvdGFsQW1vdW50OiAxMDAsXG4gICAgICAgIHVuaXRzOiBcImtnXCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogMS41NSxcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIGlkOiAxLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwicG90YXRvZXNcIixcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCJ0aGlzIHBvdGF0b3MgYXJlIHRoZSBiZXN0XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcInRyeSBteSBwb3RhdG9lcyBhbmQgeW91IHdpbGwgZmFsbCBpbmxvdmUgZm9yIGZpcnN0IHRpbWUgd2l0aCBhIHBvdGF0b1wiLFxuICAgICAgICB0b3RhbEFtb3VudDogMjAsXG4gICAgICAgIHVuaXRzOiBcImtnXCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogMi4yNSxcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIGlkOiAyLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwienVjY2luaVwiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcInRoZSBwZXJmZWN0IHNpemUgb2YgYSB6dWNjaW5pXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcImNvbWJpbmUgdGhpcyB6dWNjaW5pIHdpdGggdmFzZWxpbmUsIGNvbmRvbSBhbmQgYSBib3R0bGUgb2Ygd2luZSB0aGVuIGZpbmQgb3V0IHdoYXQgY2xpbWF4IGlzXCIsXG4gICAgICAgIHRvdGFsQW1vdW50OiAxMCxcbiAgICAgICAgdW5pdHM6IFwidW5pdFwiLFxuICAgICAgICBwcm9kdWN0UHJpY2U6IDAuOTksXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogMyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcImNhcnJvdHNcIixcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCJ2ZXJ5IGdvb2QgZm9yIGV5ZXMgaGVhbHRoXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkhhdmUgeW91IGV2ZXIgc2VlbiBhIGJ1bm55IHdpdGggZ2xhc3Nlcz8hIGlmIHlvdSBhcmUgbm90IGEgZG9jdG9yIG9yIGEgYmlvbG9naXN0IGRvbnQgY29tbWVudFwiLFxuICAgICAgICB0b3RhbEFtb3VudDogMjAwLFxuICAgICAgICB1bml0czogXCJidW5jaFwiLFxuICAgICAgICBwcm9kdWN0UHJpY2U6IDUuOTksXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogNCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcInB1bmtpblwiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcInRyeSBteSBwdW5raW5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwianVzdCBkb250IGJlIGEgY293YXJkIGFuIGJ1eSBteSBwdW5raW5cIixcbiAgICAgICAgdG90YWxBbW91bnQ6IDEsXG4gICAgICAgIHVuaXRzOiBcInVuaXRcIixcbiAgICAgICAgcHJvZHVjdFByaWNlOiAxMDAsXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogNSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcInRvbWF0b2VzXCIsXG4gICAgICAgIHNob3J0RGVzY3JpcHRpb246IFwiaW4gcmVkIGFuZCB5ZWxsb3dcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiYSBzYWxhZCB3aXRvdXQgdG9tYXRvZXMgaXMgbGlrZSBhIGEgYmF0dGxlIGNydWlzZSBhcm1hZGEgc2hpcCB3aXRob3V0IHNlcmlhbCBudW1iZXJcIixcbiAgICAgICAgdG90YWxBbW91bnQ6IDUwLFxuICAgICAgICB1bml0czogXCJwb3VuZFwiLFxuICAgICAgICBwcm9kdWN0UHJpY2U6IDAuNjUsXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogNixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcImVnZ3BsYW50XCIsXG4gICAgICAgIHNob3J0RGVzY3JpcHRpb246IFwiZnVubnkgbmFtZSBidXQgdGFzdHkgdmVnZ3lcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwibWFrZSB0aGUgYmVzdCBqb2tlcyBhYm91dCBlZ2dwbGFudHMgd2l0aCB0aGlzIGJlYXV0aWVzIG9mIHZlZ2V0YWJsZXNcIixcbiAgICAgICAgdG90YWxBbW91bnQ6IDIwLFxuICAgICAgICB1bml0czogXCJ1bml0XCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogMixcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIGlkOiA3LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwiZmFiYSBiZWFuc1wiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcImdldCB0aGlzIG9yZ2FuaWMgamV3ZWxzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcImdldCB0aGUgYmVhbnMgYW5kIGdyb3cgYSBtYWdpYyB0cmVlIGluIHlvdXIgYmFjayB5YXJkXCIsXG4gICAgICAgIHRvdGFsQW1vdW50OiAzLFxuICAgICAgICB1bml0czogXCJiZWFuXCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogOTkuOTksXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogOCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcImN1Y3VtYmVyXCIsXG4gICAgICAgIHNob3J0RGVzY3JpcHRpb246IFwidGhlIHBlcmZlY3Qgc2l6ZSBvZiBhIGN1Y3VtYmVyXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcImNvbWJpbmUgdGhpcyBjdWN1bWJlciB3aXRoIHZhc2VsaW5lLCBjb25kb20gYW5kIGEgYm90dGxlIG9mIHdpbmUgdGhlbiBmaW5kIG91dCB3aGF0IGNsaW1heCBpc1wiLFxuICAgICAgICB0b3RhbEFtb3VudDogMTAsXG4gICAgICAgIHVuaXRzOiBcInVuaXRcIixcbiAgICAgICAgcHJvZHVjdFByaWNlOiAxMC45OSxcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIGlkOiA5LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwibGV0dHVjZVwiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcImZyZXMgYXMgYSBsZXR0dWNlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcImlzIHNvIGZyZXNoIHlvdSBjYW50IHNheSBubyBcIixcbiAgICAgICAgdG90YWxBbW91bnQ6IDEwLFxuICAgICAgICB1bml0czogXCJ1bml0XCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogMTAuOTksXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogMTAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm9kdWN0TmFtZTogXCJjb3VsaWZsb3dlclwiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcIndlaXJkIGFuZCBkZWxpY2lvdXNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwieW91IGJldCB0aGV5IGFyZSB0aGUgd2VpcmRlc3RcIixcbiAgICAgICAgdG90YWxBbW91bnQ6IDEwLFxuICAgICAgICB1bml0czogXCJ1bml0XCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogMTAuOTksXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogMTEsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm9kdWN0TmFtZTogXCJvbmlvbnNcIixcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCJ3YW5uYSBjcnkuLiBvZiBoYXBwaW5lc3NcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwid2l0aCBtb3JlIGNyeWluZyBwb3dlciB0aGF0IHRoZSBjb21wZXRpdG9ycydzXCIsXG4gICAgICAgIHRvdGFsQW1vdW50OiAxMCxcbiAgICAgICAgdW5pdHM6IFwia2dcIixcbiAgICAgICAgcHJvZHVjdFByaWNlOiAxMC45OSxcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIGlkOiAxMixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcImNoaWxsaVwiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcImZlZWwgdGhlIHBhaW5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiZ2FyYW50ZWU6IHlvdSB3aWxsIHRhc3RlIGl0IHRvZGF5IGFuZCB0b21vcnJvdyBtb3JuaW5nXCIsXG4gICAgICAgIHRvdGFsQW1vdW50OiAxMCxcbiAgICAgICAgdW5pdHM6IFwiZ1wiLFxuICAgICAgICBwcm9kdWN0UHJpY2U6IDEwLjk5LFxuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgaWQ6IDEzLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwiYmVldHJvb3RcIixcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCJ2ZXJ5IHB1cnBsZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJpZiBwdXJwbGVuZXNzIGlzIHRoZSBtZXNzdXJlIHRoaXMgYXJlIHRoZSBraW5nc1wiLFxuICAgICAgICB0b3RhbEFtb3VudDogMTUsXG4gICAgICAgIHVuaXRzOiBcIjMgdW5pdHNcIixcbiAgICAgICAgcHJvZHVjdFByaWNlOiAwLjk5LFxuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgaWQ6IDE0LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwiY2hpY2sgcGVhc1wiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcImFscmVhZHkgY29va2VkXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcInlvdSBvbmx5IG5lZWQgdG8gc2VydmUgdGhlbVwiLFxuICAgICAgICB0b3RhbEFtb3VudDogMTAsXG4gICAgICAgIHVuaXRzOiBcImtnXCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogMjAuOTksXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogMTUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm9kdWN0TmFtZTogXCJicnVzc2VsIHNwcm93c1wiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcInRlcnJpYmxlIHRhc3RlIGJ1dCB2ZXJ5IGhlYWx0aHlcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVHJpdmlhOiBkaWQgeW91IGtub3cgdGhhdCBicnVzc2VscyBzcHJvd3MgYXJlIG5vdCBmcm9tIGJydXNzZWxzXCIsXG4gICAgICAgIHRvdGFsQW1vdW50OiAxMCxcbiAgICAgICAgdW5pdHM6IFwia2dcIixcbiAgICAgICAgcHJvZHVjdFByaWNlOiAxMC45OSxcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIGlkOiAxNixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcImJyb2NvbGlcIixcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCJhIHRyZWUgbG9va2luZyB2ZWdnaWVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwidGhpcyBhcmUgYnJvdWdodCBmcm9tIHRoZSBmYXIgZmFyIG1lbGx1bWFraVwiLFxuICAgICAgICB0b3RhbEFtb3VudDogMTAsXG4gICAgICAgIHVuaXRzOiBcImtnXCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogMTAuOTksXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogMTcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm9kdWN0TmFtZTogXCJzcGluYWNoXCIsXG4gICAgICAgIHNob3J0RGVzY3JpcHRpb246IFwicG9wZXllIGZvb2RcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiaWYgeW91IHdhbnQgdG8gcmVzY3VlIHlvdXIgbGFkeSBmcm9tIGJydXR1cyB5b3UgZ290dGEgZWF0IHRoaXNcIixcbiAgICAgICAgdG90YWxBbW91bnQ6IDEwLFxuICAgICAgICB1bml0czogXCJnXCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogMTAuOTksXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogMTgsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm9kdWN0TmFtZTogXCJnYXJsaWNcIixcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCJpZGVhbCB2cyB2YW1waXJlc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJpdHMga25vd24gdGhhdCB2YW1waXJlcyBkb250IGVhdCBnYXJsaWMgY2F1c2UgdGhlIGJhZCBicmVhdGggaXQgbGVhdmVzIGFmdGVyXCIsXG4gICAgICAgIHRvdGFsQW1vdW50OiAxMCxcbiAgICAgICAgdW5pdHM6IFwiZ1wiLFxuICAgICAgICBwcm9kdWN0UHJpY2U6IDEuOTksXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogMTksXG4gICAgICB9LFxuICAgIF07XG4gIH07XG5cbiAgY29uc3QgcHJvZHVjdEZpbHRlciA9IHByb2R1Y3RzLmZpbHRlcigocmVzKSA9PiB7XG4gICAgcmV0dXJuIHJlcy5wcm9kdWN0TmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKTtcbiAgfSk7XG5cbiAgY29uc3Qgc2VhcmNoSGFuZGxlciA9IChlKSA9PiB7XG4gICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhzZWFyY2gpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UHJvZHVjdHMoZ2V0UHJvZHVjdHMoKSk7XG4gICAgLy91c2UgYXhpb3MgdG8gZ2V0IHRoZSBkYXRhIGZyb20gZGF0YWJhc2U6XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIC8vIDxkaXYgY2xhc3NOYW1lPXtjc3MucGFnZUNvbnRhaW5lcn0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlQ29udGFpbmVyXCI+XG4gICAgICA8aDE+SG9tZTwvaDE+XG4gICAgICA8ZGl2PlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e2Nzcy5zZWFyY2h9PiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIvCflI1cIiBvbkNoYW5nZT17c2VhcmNoSGFuZGxlcn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtjc3MuYnJvd3Nlcn0+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJicm93c2VyXCI+XG4gICAgICAgIHtwcm9kdWN0RmlsdGVyLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgIDxQcm9kdWN0Q2FyZCBrZXk9e3Byb2R1Y3QuaWR9IHsuLi5wcm9kdWN0fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3R5bGVzL2xvZ2luLm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gTG9nSW4oKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBpZD1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lciBsb2ctaW4tY29udGFpbmVyXCI+XG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIj5cbiAgICAgICAgICA8aDE+TG9naW48L2gxPlxuXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiPkZvcmdvdCB5b3VyIHBhc3N3b3JkPzwvYT5cbiAgICAgICAgICA8YnV0dG9uPkxvZyBJbjwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheS1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5LXBhbmVsIG92ZXJsYXktcmlnaHRcIj5cbiAgICAgICAgICAgIDxoMT5TZWxsZXIgb3IgRmFybWVyIGxvZ2luL3NpZ251cCBmcm9tIGhlcmU8L2gxPlxuICAgICAgICAgICAgPHA+U28gd2UgY2FuIHB1dCBzb21lIGluc3RydWN0aW9uIGZvciB0aGUgc2VsbGVycy48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ0luO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzLm1vZHVsZS5jc3NcIjtcbmZ1bmN0aW9uIFByb2ZpbGUoKSB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VDb250YWluZXJcIj5Qcm9maWxlPC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gU2lnblVwKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+U2lnblVwPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnblVwOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbi8vIGltcG9ydCBjc3MgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIFNpbmdsZVByb2R1Y3QoKSB7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgY29uc3QgcHJvZHVjdCA9IGxvY2F0aW9uLnN0YXRlLmRhdGE7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlQ29udGFpbmVyXCI+XG4gICAgICA8aDE+e3Byb2R1Y3QucHJvZHVjdE5hbWV9PC9oMT5cbiAgICAgIFNpbmdsZVByb2R1Y3QgTmFtZVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQcm9kdWN0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJSZWFjdCIsIlJlYWN0RE9NIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwiSG9tZSIsIk5hdmJhciIsIlNpbmdsZVByb2R1Y3QiLCJQcm9maWxlIiwiQ2FydCIsIkNoZWNrT3V0IiwiRm9vdGVyIiwiTG9nSW4iLCJTaWduVXAiLCJNYWluIiwicm9vdCIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiTGluayIsIlByb2R1Y3RDYXJkIiwicHJvZHVjdE5hbWUiLCJzaG9ydERlc2NyaXB0aW9uIiwidG90YWxBbW91bnQiLCJ1bml0cyIsInByb2R1Y3RQcmljZSIsImltYWdlVXJsIiwiaW1hZ2UiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJnZXRQcm9kdWN0cyIsImRlc2NyaXB0aW9uIiwiaWQiLCJwcm9kdWN0RmlsdGVyIiwiZmlsdGVyIiwicmVzIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNlYXJjaEhhbmRsZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwibWFwIiwicHJvZHVjdCIsInVzZUxvY2F0aW9uIiwibG9jYXRpb24iLCJzdGF0ZSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9
>>>>>>> 1edcc4a9461eb340083b2b1450a4d47044a2ae46

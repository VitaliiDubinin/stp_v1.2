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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Home */ "./assets/pages/Home.js");
/* harmony import */ var _assets_components_ui_components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/components/ui_components/Navbar */ "./assets/components/ui_components/Navbar.js");
/* harmony import */ var _assets_pages_SingleProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/pages/SingleProduct */ "./assets/pages/SingleProduct.js");
/* harmony import */ var _assets_pages_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/pages/Profile */ "./assets/pages/Profile.js");
/* harmony import */ var _assets_pages_Cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/pages/Cart */ "./assets/pages/Cart.js");
/* harmony import */ var _assets_pages_CheckOut__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/pages/CheckOut */ "./assets/pages/CheckOut.js");
/* harmony import */ var _assets_components_ui_components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/components/ui_components/Footer */ "./assets/components/ui_components/Footer.js");



 // import css from "./styles/main.module.css";








function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_components_ui_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/:productId",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_SingleProduct__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/profile",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_Profile__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/cart",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_Cart__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/cart/checkout",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_CheckOut__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_components_ui_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], null));
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
    }, " Cart ")))))
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-2a1692"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztJQUFmLGdCQUNFO01BQU8sSUFBSSxFQUFDLE1BQVo7TUFBbUIsV0FBVyxFQUFDLGNBQS9CO01BQW9DLFFBQVEsRUFBRVE7SUFBOUMsRUFERixDQUZGLENBRkYsZUFVRTtNQUFLLFNBQVMsRUFBQztJQUFmLEdBQ0dMLGFBQWEsQ0FBQ1csR0FBZCxDQUFrQixVQUFDQyxPQUFEO01BQUEsb0JBQ2pCLDREQUFDLDhFQUFEO1FBQWEsR0FBRyxFQUFFQSxPQUFPLENBQUNiO01BQTFCLEdBQWtDYSxPQUFsQyxFQURpQjtJQUFBLENBQWxCLENBREgsQ0FWRjtFQUZGO0FBbUJEOztBQUVELGlFQUFlL0MsSUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NoUEE7O0FBQ0EsU0FBU0csT0FBVCxHQUFtQjtFQUNqQixvQkFBTztJQUFLLFNBQVMsRUFBQztFQUFmLGFBQVA7QUFDRDs7QUFFRCxpRUFBZUEsT0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7Q0FFQTs7QUFFQSxTQUFTRCxhQUFULEdBQXlCO0VBQ3ZCLElBQU0rQyxRQUFRLEdBQUdELDZEQUFXLEVBQTVCO0VBQ0EsSUFBTUQsT0FBTyxHQUFHRSxRQUFRLENBQUNDLEtBQVQsQ0FBZUMsSUFBL0I7RUFDQSxvQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFLHVFQUFLSixPQUFPLENBQUM1QixXQUFiLENBREYsdUJBREY7QUFNRDs7QUFFRCxpRUFBZWpCLGFBQWY7Ozs7Ozs7Ozs7OztBQ2ZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvTmF2YmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvUHJvZHVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0NoZWNrT3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Ib21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Qcm9maWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9TaW5nbGVQcm9kdWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz8zZmJhIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9Ib21lXCI7XG4vLyBpbXBvcnQgY3NzIGZyb20gXCIuL3N0eWxlcy9tYWluLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvTmF2YmFyXCI7XG5cbmltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gXCIuLi9hc3NldHMvcGFnZXMvU2luZ2xlUHJvZHVjdFwiO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uL2Fzc2V0cy9wYWdlcy9Qcm9maWxlXCI7XG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vYXNzZXRzL3BhZ2VzL0NhcnRcIjtcbmltcG9ydCBDaGVja091dCBmcm9tIFwiLi4vYXNzZXRzL3BhZ2VzL0NoZWNrT3V0XCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9hc3NldHMvY29tcG9uZW50cy91aV9jb21wb25lbnRzL0Zvb3RlclwiO1xuXG5mdW5jdGlvbiBNYWluKCkge1xuICByZXR1cm4gKFxuICAgIDxSb3V0ZXI+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8Um91dGVzPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi86cHJvZHVjdElkXCIgZWxlbWVudD17PFNpbmdsZVByb2R1Y3QgLz59PlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZmlsZVwiIGVsZW1lbnQ9ezxQcm9maWxlIC8+fT5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgIDwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NhcnRcIiBlbGVtZW50PXs8Q2FydCAvPn0+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9jYXJ0L2NoZWNrb3V0XCIgZWxlbWVudD17PENoZWNrT3V0IC8+fT5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgIDwvUm91dGU+XG4gICAgICA8L1JvdXRlcz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L1JvdXRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcblxuY29uc3Qgcm9vdCA9IFJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xucm9vdC5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxNYWluIC8+LFxuICA8L1JlYWN0LlN0cmljdE1vZGU+XG4pO1xuIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCBcIi4vc3R5bGVzL2FwcC5jc3NcIjtcbi8vIGltcG9ydCBcIi4vc3R5bGVzL21haW4ubW9kdWxlLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9zdHlsZXMvcGFnZXMubW9kdWxlLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9zdHlsZXMvZm9vdGVyLm1vZHVsZS5jc3NcIjtcbi8vIGltcG9ydCBcIi4vc3R5bGVzL25hdmJhci5tb2R1bGUuY3NzXCI7XG4vLyBpbXBvcnQgXCIuL3N0eWxlcy9wcm9kdWNDYXJkLm1vZHVsZS5jc3NcIjtcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgXCIuL2Jvb3RzdHJhcFwiO1xuXG5pbXBvcnQgXCIuL01haW5cIjtcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IGNzcyBmcm9tIFwiLi9mb290ZXIubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBGb290ZXIoKSB7XG4gIC8vIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y3NzLmZvb3RlckNvbnRhaW5lcn0+bGVnYWwgc3R1ZiBhbmQgY29uY3RhY3QgbGlua3M8L2Rpdj47XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlckNvbnRhaW5lclwiPmxlZ2FsIHN0dWYgYW5kIGNvbmN0YWN0IGxpbmtzPC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuLy8gaW1wb3J0IGNzcyBmcm9tICcuL25hdmJhci5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gTmF2YmFyKCkge1xuICByZXR1cm4gKFxuICAgIC8vIDxkaXYgY2xhc3NOYW1lPXtjc3MubmF2Q29udGFpbmVyfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdkNvbnRhaW5lclwiPlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtjc3MubG9nb0NvbnRhaW5lcn0+PC9kaXY+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvQ29udGFpbmVyXCI+PC9kaXY+XG4gICAgICB7LyogPG5hdiBjbGFzc05hbWU9e2Nzcy5uYXZQYW5lbH0+ICovfVxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZQYW5lbFwiPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+IEhvbWUgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvZmlsZVwiPiBQcm9maWxlIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NhcnRcIj4gQ2FydCA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICB7LyogPGEgaHJlZj1cIi9cIj4gU2lnbiBvdXQgPC9hPiAqL31cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgY3NzIGZyb20gJy4vcHJvZHVjQ2FyZC5tb2R1bGUuY3NzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5mdW5jdGlvbiBQcm9kdWN0Q2FyZCh7IHByb2R1Y3ROYW1lLCBzaG9ydERlc2NyaXB0aW9uLCB0b3RhbEFtb3VudCwgdW5pdHMsIHByb2R1Y3RQcmljZSwgaW1hZ2VVcmwgPSBudWxsIH0pIHtcbiAgY29uc3QgaW1hZ2UgPSBpbWFnZVVybCA/IGltYWdlVXJsIDogXCJubyBpbWFnZSBhdmFpbGFibGVcIjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdENhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdEltYWdlXCI+e2ltYWdlfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0Qm9keUNvbnRhaW5lclwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdE5hbWVcIj4ge3Byb2R1Y3ROYW1lfSA8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3J0RGVzY3JpcHRpb25cIj5cbiAgICAgICAgICB7c2hvcnREZXNjcmlwdGlvbn0uIDxiciAvPlxuICAgICAgICAgIEluIHN0b3JhZ2U6e3RvdGFsQW1vdW50fVxuICAgICAgICAgIHt1bml0c31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZEZvb3RlclwiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiLzpwcm9kdWN0SWRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNlZU1vcmVcIj5zZWUgbW9yZTwvcD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYWRkVG9DYXJ0QnRuXCI+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICBhZGR7XCIgXCJ9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0UHJpY2VcIj5cbiAgICAgICAgICAgIHtwcm9kdWN0UHJpY2V94oKsL3t1bml0c31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmQ7XG5cbi8vcHJvZHVjdE5hbWVcbi8vc2hvcnREZXNjcmlwdGlvblxuLy9kZXNjcmlwdGlvblxuLy90b3RhbEFtb3VudFxuLy91bml0c1xuLy9pbWFnZVxuLy9pZFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzLm1vZHVsZS5jc3NcIjtcbmZ1bmN0aW9uIENhcnQoKSB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VDb250YWluZXJcIj5DYXJ0PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gQ2hlY2tPdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5DaGVja091dDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrT3V0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgY3NzIGZyb20gXCIuLi9zdHlsZXMvcGFnZXMubW9kdWxlLmNzc1wiO1xuXG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdWlfY29tcG9uZW50cy9Qcm9kdWN0Q2FyZFwiO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIC8vZHVtbXkgYXhpb3NcbiAgLy9jb25zdCBnZXRQcm9kdWN0cyA9ICgpID0+IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3Byb2R1Y3RzJyk7XG4gIGNvbnN0IGdldFByb2R1Y3RzID0gKCkgPT4ge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcIlJJQ0VcIixcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCJhIHZlcnkgZ29vZCByaWNlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcInRoaXMgcHJvZHVjdCB3YXMgc2VlZGVkIGFuZCBmYXJtZWQgaW4gdGhlIGxvY2FsIGZhcm1zIG9mIGhlbHNpbmtpLCB0aGUgbWluaW11biB0dSBidXkgaXMgMWtnXCIsXG4gICAgICAgIHRvdGFsQW1vdW50OiAxMDAsXG4gICAgICAgIHVuaXRzOiBcImtnXCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogMS41NSxcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIGlkOiAxLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwicG90YXRvZXNcIixcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCJ0aGlzIHBvdGF0b3MgYXJlIHRoZSBiZXN0XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcInRyeSBteSBwb3RhdG9lcyBhbmQgeW91IHdpbGwgZmFsbCBpbmxvdmUgZm9yIGZpcnN0IHRpbWUgd2l0aCBhIHBvdGF0b1wiLFxuICAgICAgICB0b3RhbEFtb3VudDogMjAsXG4gICAgICAgIHVuaXRzOiBcImtnXCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogMi4yNSxcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIGlkOiAyLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwienVjY2luaVwiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcInRoZSBwZXJmZWN0IHNpemUgb2YgYSB6dWNjaW5pXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcImNvbWJpbmUgdGhpcyB6dWNjaW5pIHdpdGggdmFzZWxpbmUsIGNvbmRvbSBhbmQgYSBib3R0bGUgb2Ygd2luZSB0aGVuIGZpbmQgb3V0IHdoYXQgY2xpbWF4IGlzXCIsXG4gICAgICAgIHRvdGFsQW1vdW50OiAxMCxcbiAgICAgICAgdW5pdHM6IFwidW5pdFwiLFxuICAgICAgICBwcm9kdWN0UHJpY2U6IDAuOTksXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogMyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcImNhcnJvdHNcIixcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCJ2ZXJ5IGdvb2QgZm9yIGV5ZXMgaGVhbHRoXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkhhdmUgeW91IGV2ZXIgc2VlbiBhIGJ1bm55IHdpdGggZ2xhc3Nlcz8hIGlmIHlvdSBhcmUgbm90IGEgZG9jdG9yIG9yIGEgYmlvbG9naXN0IGRvbnQgY29tbWVudFwiLFxuICAgICAgICB0b3RhbEFtb3VudDogMjAwLFxuICAgICAgICB1bml0czogXCJidW5jaFwiLFxuICAgICAgICBwcm9kdWN0UHJpY2U6IDUuOTksXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogNCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcInB1bmtpblwiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcInRyeSBteSBwdW5raW5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwianVzdCBkb250IGJlIGEgY293YXJkIGFuIGJ1eSBteSBwdW5raW5cIixcbiAgICAgICAgdG90YWxBbW91bnQ6IDEsXG4gICAgICAgIHVuaXRzOiBcInVuaXRcIixcbiAgICAgICAgcHJvZHVjdFByaWNlOiAxMDAsXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogNSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcInRvbWF0b2VzXCIsXG4gICAgICAgIHNob3J0RGVzY3JpcHRpb246IFwiaW4gcmVkIGFuZCB5ZWxsb3dcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiYSBzYWxhZCB3aXRvdXQgdG9tYXRvZXMgaXMgbGlrZSBhIGEgYmF0dGxlIGNydWlzZSBhcm1hZGEgc2hpcCB3aXRob3V0IHNlcmlhbCBudW1iZXJcIixcbiAgICAgICAgdG90YWxBbW91bnQ6IDUwLFxuICAgICAgICB1bml0czogXCJwb3VuZFwiLFxuICAgICAgICBwcm9kdWN0UHJpY2U6IDAuNjUsXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogNixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcImVnZ3BsYW50XCIsXG4gICAgICAgIHNob3J0RGVzY3JpcHRpb246IFwiZnVubnkgbmFtZSBidXQgdGFzdHkgdmVnZ3lcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwibWFrZSB0aGUgYmVzdCBqb2tlcyBhYm91dCBlZ2dwbGFudHMgd2l0aCB0aGlzIGJlYXV0aWVzIG9mIHZlZ2V0YWJsZXNcIixcbiAgICAgICAgdG90YWxBbW91bnQ6IDIwLFxuICAgICAgICB1bml0czogXCJ1bml0XCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogMixcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIGlkOiA3LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwiZmFiYSBiZWFuc1wiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcImdldCB0aGlzIG9yZ2FuaWMgamV3ZWxzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcImdldCB0aGUgYmVhbnMgYW5kIGdyb3cgYSBtYWdpYyB0cmVlIGluIHlvdXIgYmFjayB5YXJkXCIsXG4gICAgICAgIHRvdGFsQW1vdW50OiAzLFxuICAgICAgICB1bml0czogXCJiZWFuXCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogOTkuOTksXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogOCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcImN1Y3VtYmVyXCIsXG4gICAgICAgIHNob3J0RGVzY3JpcHRpb246IFwidGhlIHBlcmZlY3Qgc2l6ZSBvZiBhIGN1Y3VtYmVyXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcImNvbWJpbmUgdGhpcyBjdWN1bWJlciB3aXRoIHZhc2VsaW5lLCBjb25kb20gYW5kIGEgYm90dGxlIG9mIHdpbmUgdGhlbiBmaW5kIG91dCB3aGF0IGNsaW1heCBpc1wiLFxuICAgICAgICB0b3RhbEFtb3VudDogMTAsXG4gICAgICAgIHVuaXRzOiBcInVuaXRcIixcbiAgICAgICAgcHJvZHVjdFByaWNlOiAxMC45OSxcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIGlkOiA5LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwibGV0dHVjZVwiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcImZyZXMgYXMgYSBsZXR0dWNlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcImlzIHNvIGZyZXNoIHlvdSBjYW50IHNheSBubyBcIixcbiAgICAgICAgdG90YWxBbW91bnQ6IDEwLFxuICAgICAgICB1bml0czogXCJ1bml0XCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogMTAuOTksXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogMTAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm9kdWN0TmFtZTogXCJjb3VsaWZsb3dlclwiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcIndlaXJkIGFuZCBkZWxpY2lvdXNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwieW91IGJldCB0aGV5IGFyZSB0aGUgd2VpcmRlc3RcIixcbiAgICAgICAgdG90YWxBbW91bnQ6IDEwLFxuICAgICAgICB1bml0czogXCJ1bml0XCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogMTAuOTksXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogMTEsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm9kdWN0TmFtZTogXCJvbmlvbnNcIixcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCJ3YW5uYSBjcnkuLiBvZiBoYXBwaW5lc3NcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwid2l0aCBtb3JlIGNyeWluZyBwb3dlciB0aGF0IHRoZSBjb21wZXRpdG9ycydzXCIsXG4gICAgICAgIHRvdGFsQW1vdW50OiAxMCxcbiAgICAgICAgdW5pdHM6IFwia2dcIixcbiAgICAgICAgcHJvZHVjdFByaWNlOiAxMC45OSxcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIGlkOiAxMixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcImNoaWxsaVwiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcImZlZWwgdGhlIHBhaW5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiZ2FyYW50ZWU6IHlvdSB3aWxsIHRhc3RlIGl0IHRvZGF5IGFuZCB0b21vcnJvdyBtb3JuaW5nXCIsXG4gICAgICAgIHRvdGFsQW1vdW50OiAxMCxcbiAgICAgICAgdW5pdHM6IFwiZ1wiLFxuICAgICAgICBwcm9kdWN0UHJpY2U6IDEwLjk5LFxuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgaWQ6IDEzLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwiYmVldHJvb3RcIixcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCJ2ZXJ5IHB1cnBsZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJpZiBwdXJwbGVuZXNzIGlzIHRoZSBtZXNzdXJlIHRoaXMgYXJlIHRoZSBraW5nc1wiLFxuICAgICAgICB0b3RhbEFtb3VudDogMTUsXG4gICAgICAgIHVuaXRzOiBcIjMgdW5pdHNcIixcbiAgICAgICAgcHJvZHVjdFByaWNlOiAwLjk5LFxuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgaWQ6IDE0LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwiY2hpY2sgcGVhc1wiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcImFscmVhZHkgY29va2VkXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcInlvdSBvbmx5IG5lZWQgdG8gc2VydmUgdGhlbVwiLFxuICAgICAgICB0b3RhbEFtb3VudDogMTAsXG4gICAgICAgIHVuaXRzOiBcImtnXCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogMjAuOTksXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogMTUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm9kdWN0TmFtZTogXCJicnVzc2VsIHNwcm93c1wiLFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBcInRlcnJpYmxlIHRhc3RlIGJ1dCB2ZXJ5IGhlYWx0aHlcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVHJpdmlhOiBkaWQgeW91IGtub3cgdGhhdCBicnVzc2VscyBzcHJvd3MgYXJlIG5vdCBmcm9tIGJydXNzZWxzXCIsXG4gICAgICAgIHRvdGFsQW1vdW50OiAxMCxcbiAgICAgICAgdW5pdHM6IFwia2dcIixcbiAgICAgICAgcHJvZHVjdFByaWNlOiAxMC45OSxcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIGlkOiAxNixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2R1Y3ROYW1lOiBcImJyb2NvbGlcIixcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCJhIHRyZWUgbG9va2luZyB2ZWdnaWVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwidGhpcyBhcmUgYnJvdWdodCBmcm9tIHRoZSBmYXIgZmFyIG1lbGx1bWFraVwiLFxuICAgICAgICB0b3RhbEFtb3VudDogMTAsXG4gICAgICAgIHVuaXRzOiBcImtnXCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogMTAuOTksXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogMTcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm9kdWN0TmFtZTogXCJzcGluYWNoXCIsXG4gICAgICAgIHNob3J0RGVzY3JpcHRpb246IFwicG9wZXllIGZvb2RcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiaWYgeW91IHdhbnQgdG8gcmVzY3VlIHlvdXIgbGFkeSBmcm9tIGJydXR1cyB5b3UgZ290dGEgZWF0IHRoaXNcIixcbiAgICAgICAgdG90YWxBbW91bnQ6IDEwLFxuICAgICAgICB1bml0czogXCJnXCIsXG4gICAgICAgIHByb2R1Y3RQcmljZTogMTAuOTksXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogMTgsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm9kdWN0TmFtZTogXCJnYXJsaWNcIixcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCJpZGVhbCB2cyB2YW1waXJlc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJpdHMga25vd24gdGhhdCB2YW1waXJlcyBkb250IGVhdCBnYXJsaWMgY2F1c2UgdGhlIGJhZCBicmVhdGggaXQgbGVhdmVzIGFmdGVyXCIsXG4gICAgICAgIHRvdGFsQW1vdW50OiAxMCxcbiAgICAgICAgdW5pdHM6IFwiZ1wiLFxuICAgICAgICBwcm9kdWN0UHJpY2U6IDEuOTksXG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBpZDogMTksXG4gICAgICB9LFxuICAgIF07XG4gIH07XG5cbiAgY29uc3QgcHJvZHVjdEZpbHRlciA9IHByb2R1Y3RzLmZpbHRlcigocmVzKSA9PiB7XG4gICAgcmV0dXJuIHJlcy5wcm9kdWN0TmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKTtcbiAgfSk7XG5cbiAgY29uc3Qgc2VhcmNoSGFuZGxlciA9IChlKSA9PiB7XG4gICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhzZWFyY2gpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UHJvZHVjdHMoZ2V0UHJvZHVjdHMoKSk7XG4gICAgLy91c2UgYXhpb3MgdG8gZ2V0IHRoZSBkYXRhIGZyb20gZGF0YWJhc2U6XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIC8vIDxkaXYgY2xhc3NOYW1lPXtjc3MucGFnZUNvbnRhaW5lcn0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlQ29udGFpbmVyXCI+XG4gICAgICA8aDE+SG9tZTwvaDE+XG4gICAgICA8ZGl2PlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e2Nzcy5zZWFyY2h9PiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIvCflI1cIiBvbkNoYW5nZT17c2VhcmNoSGFuZGxlcn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtjc3MuYnJvd3Nlcn0+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJicm93c2VyXCI+XG4gICAgICAgIHtwcm9kdWN0RmlsdGVyLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgIDxQcm9kdWN0Q2FyZCBrZXk9e3Byb2R1Y3QuaWR9IHsuLi5wcm9kdWN0fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzLm1vZHVsZS5jc3NcIjtcbmZ1bmN0aW9uIFByb2ZpbGUoKSB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VDb250YWluZXJcIj5Qcm9maWxlPC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuLy8gaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzLm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gU2luZ2xlUHJvZHVjdCgpIHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBjb25zdCBwcm9kdWN0ID0gbG9jYXRpb24uc3RhdGUuZGF0YTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VDb250YWluZXJcIj5cbiAgICAgIDxoMT57cHJvZHVjdC5wcm9kdWN0TmFtZX08L2gxPlxuICAgICAgU2luZ2xlUHJvZHVjdCBOYW1lXG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVByb2R1Y3Q7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIlJlYWN0IiwiUmVhY3RET00iLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJIb21lIiwiTmF2YmFyIiwiU2luZ2xlUHJvZHVjdCIsIlByb2ZpbGUiLCJDYXJ0IiwiQ2hlY2tPdXQiLCJGb290ZXIiLCJNYWluIiwicm9vdCIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiTGluayIsIlByb2R1Y3RDYXJkIiwicHJvZHVjdE5hbWUiLCJzaG9ydERlc2NyaXB0aW9uIiwidG90YWxBbW91bnQiLCJ1bml0cyIsInByb2R1Y3RQcmljZSIsImltYWdlVXJsIiwiaW1hZ2UiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJnZXRQcm9kdWN0cyIsImRlc2NyaXB0aW9uIiwiaWQiLCJwcm9kdWN0RmlsdGVyIiwiZmlsdGVyIiwicmVzIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNlYXJjaEhhbmRsZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwibWFwIiwicHJvZHVjdCIsInVzZUxvY2F0aW9uIiwibG9jYXRpb24iLCJzdGF0ZSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9
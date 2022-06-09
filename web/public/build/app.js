(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";
module.exports = webpackEmptyContext;

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
/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/Login */ "./assets/pages/Login.js");
/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-use-cart */ "./node_modules/react-use-cart/dist/react-use-cart.esm.js");
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");








 //import Footer from "../assets/components/ui_components/Footer";





function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_use_cart__WEBPACK_IMPORTED_MODULE_9__.CartProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_components_ui_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/profile",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_Profile__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "products/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_SingleProduct__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/cart",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_Cart__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/cart/checkout",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_pages_CheckOut__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Login__WEBPACK_IMPORTED_MODULE_8__["default"], null)
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
    className: "cart py-4 container"
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
/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-use-cart */ "./node_modules/react-use-cart/dist/react-use-cart.esm.js");
/* harmony import */ var _components_ui_components_ProductCard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/ui_components/ProductCard */ "./assets/components/ui_components/ProductCard.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../styles/app.css */ "./assets/styles/app.css");
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

  var _useCart = (0,react_use_cart__WEBPACK_IMPORTED_MODULE_21__.useCart)(),
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_components_ui_components_ProductCard__WEBPACK_IMPORTED_MODULE_22__["default"], _extends({
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
    className: "cart p-0 overflow-hidden h-100 shadow"
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_axios_index_js-node_m-ad7b84"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBTTdHLEdBQUcsR0FBR3NHLDJEQUFhLENBQUNDLGNBQUQsQ0FBekI7QUFFTyxJQUFNOUIsSUFBSSxHQUFHdUIsc0RBQU8sQ0FBQ2hHLEdBQUQsQ0FBcEI7Ozs7Ozs7Ozs7OztBQ2RQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvTmF2YmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvUHJvZHVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0NoZWNrT3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Ib21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvUHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvU2luZ2xlUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvZmlyZWJhc2VDb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzNmYmEiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSAoKSA9PiAoW10pO1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZXMsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL3BhZ2VzL0hvbWVcIjtcblxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vYXNzZXRzL2NvbXBvbmVudHMvdWlfY29tcG9uZW50cy9OYXZiYXJcIjtcblxuaW1wb3J0IFNpbmdsZVByb2R1Y3QgZnJvbSBcIi4uL2Fzc2V0cy9wYWdlcy9TaW5nbGVQcm9kdWN0XCI7XG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vYXNzZXRzL3BhZ2VzL1Byb2ZpbGVcIjtcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9hc3NldHMvcGFnZXMvQ2FydFwiO1xuaW1wb3J0IENoZWNrT3V0IGZyb20gXCIuLi9hc3NldHMvcGFnZXMvQ2hlY2tPdXRcIjtcbi8vaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vYXNzZXRzL2NvbXBvbmVudHMvdWlfY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9wYWdlcy9Mb2dpblwiO1xuXG5pbXBvcnQgeyBDYXJ0UHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtdXNlLWNhcnRcIjtcblxuaW1wb3J0IFwiLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuXG5mdW5jdGlvbiBNYWluKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogPE5hdmJhciAvPiAqL31cbiAgICAgIDxDYXJ0UHJvdmlkZXI+XG4gICAgICAgIDxSb3V0ZXI+XG4gICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0+PC9Sb3V0ZT5cbiAgICAgICAgICAgIHsvKiA8Um91dGUgcGF0aD1cIi9hcGkvcHJvZHVjdC9maW5kLzppZFwiIGVsZW1lbnQ9ezxTaW5nbGVQcm9kdWN0IC8+fSAvPiAqL31cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2ZpbGVcIiBlbGVtZW50PXs8UHJvZmlsZSAvPn0+PC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwicHJvZHVjdHMvOmlkXCIgZWxlbWVudD17PFNpbmdsZVByb2R1Y3QgLz59PjwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jYXJ0XCIgZWxlbWVudD17PENhcnQgLz59PjwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jYXJ0L2NoZWNrb3V0XCIgZWxlbWVudD17PENoZWNrT3V0IC8+fT48L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBlbGVtZW50PXs8TG9naW4gLz59PjwvUm91dGU+XG4gICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgIDwvUm91dGVyPlxuICAgICAgPC9DYXJ0UHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG5cbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcbnJvb3QucmVuZGVyKFxuICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICA8TWFpbiAvPlxuICA8L1JlYWN0LlN0cmljdE1vZGU+XG4pO1xuIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCBcIi4vc3R5bGVzL2FwcC5jc3NcIjtcblxuXG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0IFwiLi9ib290c3RyYXBcIjtcblxuaW1wb3J0IFwiLi9NYWluXCI7XG5cbi8vIGltcG9ydCBcIi4uL2Fzc2V0cy9wYWdlcy9Mb2dpbkZ1bmN0XCI7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gXCJyZWFjdC11c2UtY2FydFwiO1xuXG5mdW5jdGlvbiBOYXZiYXIoKSB7XG4gIGNvbnN0IHsgdG90YWxJdGVtcyB9ID0gdXNlQ2FydCgpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm5hdi1hXCI+XG4gICAgICAgICAgICAgIEY0cm0zclxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYtbGlua3NcIj5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+IEhvbWUgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIHsvKiA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9wcm9maWxlXCI+IFByb2ZpbGUgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+ICovfVxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9jYXJ0XCI+Q2FydDoge3RvdGFsSXRlbXN9IDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIHsvKiA8TGluayB0bz1cIi9sb2dpblwiPiBMb2cgaW4gPC9MaW5rPiAqL31cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIj4gTG9nIGluIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuXG4vKlxuICovXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSBcInJlYWN0LXVzZS1jYXJ0XCI7XG5cbmNvbnN0IGFwaUhlYWQgPSBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9cIjtcbmNvbnN0IHJhbmRBcGlIZWFkID0gXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vNTAweDQwMC8/XCI7XG5jb25zdCBjb3VudF93b3JkcyA9ICh3b3JkX2FycmF5KSA9PiB7XG4gIGxldCB0b3RhbCA9IDA7XG4gIHdvcmRfYXJyYXkuZm9yRWFjaCgoKSA9PiB7XG4gICAgdG90YWwrKztcbiAgfSk7XG4gIHJldHVybiB0b3RhbDtcbn07XG5cbi8vIGZ1bmN0aW9uIFByb2R1Y3RDYXJkKHsgZGF0YSwgcHJvZHVjdF9uYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGlkLCB1bml0cyA9IG51bGwsIGltYWdlID0gbnVsbCB9KSB7XG5mdW5jdGlvbiBQcm9kdWN0Q2FyZCh7IGRhdGEsIHByb2R1Y3RfbmFtZSwgZGVzY3JpcHRpb24sIHByaWNlLCBpZCB9KSB7XG4gIGxldCByYW5kSW1hZ2UgPSByYW5kQXBpSGVhZDtcbiAgLy8gY29uc3QgW3BpY2ltYWdlLCBzZXRQaWNpbWFnZV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGRhdGEudW5pdHMgPSBkYXRhLnVuaXRzID8gZGF0YS51bml0cyA6IFwia2dcIjtcblxuICBpZiAoIWRhdGEuaW1hZ2UpIHtcbiAgICBpZiAoY291bnRfd29yZHMocHJvZHVjdF9uYW1lLnNwbGl0KCkpID4gMSkge1xuICAgICAgY29uc3QgbmFtZV9hcnJheSA9IHByb2R1Y3RfbmFtZS5zcGxpdCgpO1xuICAgICAgY29uc29sZS5sb2coY291bnRfd29yZHMobmFtZV9hcnJheSkpO1xuICAgICAgY29uc3QgdG90YWxfd29yZHMgPSBjb3VudF93b3JkcyhuYW1lX2FycmF5KTtcbiAgICAgIGNvbnN0IG5vdW4gPSBuYW1lX2FycmF5W3RvdGFsX3dvcmRzIC0gMV07XG4gICAgICByYW5kSW1hZ2UgKz0gbm91bjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmFuZEltYWdlICs9IHByb2R1Y3RfbmFtZTtcbiAgICB9XG4gICAgZGF0YS5pbWFnZSA9IHJhbmRJbWFnZTtcbiAgfSBlbHNlIGlmICghZGF0YS5pbWFnZS5pbmNsdWRlcyhcImh0dHBzOi8vXCIpKSB7XG4gICAgZGF0YS5pbWFnZSA9IGFwaUhlYWQgKyBpbWFnZTtcbiAgfVxuXG4gIGNvbnN0IHsgYWRkSXRlbSB9ID0gdXNlQ2FydCgpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRhaW5lciBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGZyb250LWZhY2VcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmltYWdlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiYWNrLWZhY2VcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtb3ZlXCI+ZWxlbWVudDwvZGl2PlxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicmVtb3ZlXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlUmVjaXBlKHJlY2lwZS5pZCl9PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHtlbGVtZW50fVxuICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5pbWFnZX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3RfbmFtZX0ge3ByaWNlfeKCrC97ZGF0YS51bml0c31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiA8TGluayBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIiB0bz17YC9hcGkvcHJvZHVjdC9maW5kLyR7aWR9YH0+ICovfVxuICAgICAgICAgICAgey8qIDxMaW5rIHRvPXtgcHJvZHVjdHMvJHtpZH1gfSBkYXRhPXtkYXRhfT5cbiAgICAgICAgICAgICAgU2VlIG1vcmVcbiAgICAgICAgICAgIDwvTGluaz4gKi99XG4gICAgICAgICAgICA8TGluayB0bz17YHByb2R1Y3RzLyR7aWR9YH0gc3RhdGU9e3sgZGF0YTogZGF0YSB9fT5cbiAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICBTZWUgbW9yZVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2hlbGxvJylcbiAgICAgICAgICAgICAgICBhZGRJdGVtKHsgaWQ6IGlkLCBwcm9kdWN0X25hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgaW1hZ2U6IGRhdGEuaW1hZ2UgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBZGQgdG8gY2FydFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gXCJyZWFjdC11c2UtY2FydFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDYXJ0ID0gKCkgPT4ge1xuICBjb25zdCB7IGlzRW1wdHksIGNhcnRUb3RhbCwgdG90YWxVbmlxdWVJdGVtcywgaXRlbXMsIHRvdGFsSXRlbXMsIHVwZGF0ZUl0ZW1RdWFudGl0eSwgcmVtb3ZlSXRlbSwgZW1wdHlDYXJ0IH0gPSB1c2VDYXJ0KCk7XG4gIC8vIGNvbnNvbGUubG9nKFwiaXRlbXNcIiwgaXRlbXMpO1xuICAvLyBjb25zdCBbdG90YWxBbW91bnQsIHNldFRvdGFsQW1vdW50XSA9IHVzZVN0YXRlKCk7XG5cbiAgaWYgKGlzRW1wdHkpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYWxlcnQgYWxlcnQtaW5mb1wiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICBZb3VyIGNhcnQgaXMgZW1wdHlcbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgY29uc3QgaGFuZGxlQ2hlY2tvdXQgPSAoKSA9PiB7XG4gICAgYWxlcnQoXCJUaGFua3MgZm9yIHB1cmNoYXNpbmcgb3VyIHByb2R1Y3RzIVwiKTtcbiAgICBlbXB0eUNhcnQoKTtcbiAgfTtcbiAgLy8gY29uc29sZS5sb2coY2FydFRvdGFsKTtcbiAgY29uc3QgdG90YWxhbSA9IGNhcnRUb3RhbDtcbiAgLy8gY29uc29sZS5sb2codG90YWxhbSk7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FydCBweS00IGNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgIDxoMT5DYXJ0PC9oMT5cbiAgICAgICAgICA8aDU+XG4gICAgICAgICAgICBDYXJ0ICh7dG90YWxVbmlxdWVJdGVtc30pIFRvdGFsIEl0ZW1zOiB7dG90YWxJdGVtc31cbiAgICAgICAgICA8L2g1PlxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1saWdodCB0YWJsZS1ob3ZlciBtLTBcIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aD5Qcm9kdWN0PC90aD5cbiAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5RdWFudGl0eTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPlRvdGFsPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+UmVtb3ZlPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAvLyBzZXRUb3RhbEFtb3VudChpdGVtLnF1YW50aXR5ICogaXRlbS5wcmljZSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2V9IGFsdD17aXRlbS5wcm9kdWN0X25hbWV9IHN0eWxlPXt7IGhlaWdodDogXCI2cmVtXCIgfX0gLz4ge2l0ZW0ucHJvZHVjdF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+JHtpdGVtLnByaWNlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtpdGVtLnF1YW50aXR5fSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUl0ZW1RdWFudGl0eShpdGVtLmlkLCBlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4ke2l0ZW0ucXVhbnRpdHkgKiBpdGVtLnByaWNlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8dGQ+e3RvdGFsQW1vdW50fTwvdGQ+ICovfVxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9eygpID0+IHJlbW92ZUl0ZW0oaXRlbS5pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gbXMtYXV0b1wiPlxuICAgICAgICAgICAgPGgyPlRvdGFsIHByaWNlOiAke2NhcnRUb3RhbH08L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIG0tMlwiIG9uQ2xpY2s9e2VtcHR5Q2FydH0+XG4gICAgICAgICAgICAgIEVtcHR5IENhcnRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBtLTJcIj5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvY2FydC9jaGVja291dFwiIHRvdGFsYW09e3RvdGFsYW19PlxuICAgICAgICAgICAgICAgIHsvKiBDaGVja291dCB7Y2FydFRvdGFsfSAqL31cbiAgICAgICAgICAgICAgICB7LyogQ2hlY2tvdXQge3RvdGFsYW19ICovfVxuICAgICAgICAgICAgICAgIENoZWNrb3V0XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSBcInJlYWN0LXVzZS1jYXJ0XCI7XG5cbi8vIGZ1bmN0aW9uIENoZWNrT3V0KHsgdG90YWxhbSB9KSB7XG5mdW5jdGlvbiBDaGVja091dCgpIHtcbiAgY29uc3QgeyBjYXJ0VG90YWwgfSA9IHVzZUNhcnQoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+Q2hlY2tPdXQ8L2gxPlxuICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWw+VG90YWwgQW1vdW50PC9sYWJlbD5cblxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9e2NhcnRUb3RhbH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbD5QYXltZW50IE1ldGhvZDwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgIDxvcHRpb24+Q3JlZGl0IENhcmQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24+RGViaXQgQ2FyZDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbj5OZXQgQmFua2luZzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbj5DYXNoIG9uIERlbGl2ZXJ5PC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgXCI+XG4gICAgICAgICAgPGxhYmVsPkNhcmQgTnVtYmVyPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWw+RXhwaXJ5IERhdGU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWw+Q1ZWPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWw+TmFtZSBvbiBDYXJkPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsPkFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgIFN1Ym1pdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tPdXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSBcInJlYWN0LXVzZS1jYXJ0XCI7XG5cbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy91aV9jb21wb25lbnRzL1Byb2R1Y3RDYXJkXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvYXBwLmNzc1wiO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZ2V0UHJvZHVjdHMgPSAoKSA9PiBheGlvcy5nZXQoXCIvYXBpL3Byb2R1Y3RzL2FsbFwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICBQcm9taXNlLmFsbChbZ2V0UHJvZHVjdHMoKV0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdHNbMF0pO1xuXG4gICAgICBjb25zdCBwcm9kdWN0c0RhdGEgPSByZXN1bHRzWzBdO1xuXG4gICAgICBzZXRQcm9kdWN0cyhwcm9kdWN0c0RhdGEuZGF0YSk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHsgdG90YWxJdGVtcyB9ID0gdXNlQ2FydCgpO1xuICAvLyBjb25zb2xlLmxvZyh0b3RhbEl0ZW1zLCBcInRvdGFsSXRlbXNcIik7XG5cbiAgY29uc3QgcHJvZHVjdEZpbHRlciA9IHByb2R1Y3RzLmZpbHRlcigocmVzKSA9PiB7XG4gICAgcmV0dXJuIHJlcy5wcm9kdWN0X25hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSk7XG4gIH0pO1xuXG4gIGNvbnN0IHNlYXJjaEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XG4gICAgY29uc29sZS5sb2coc2VhcmNoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjb250YWluZXItc2VhcmNoXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIiDwn5SNIFNlYXJjaC4uXCIgY2xhc3NOYW1lPVwic2VhcmNoXCIgb25DaGFuZ2U9e3NlYXJjaEhhbmRsZXJ9IC8+XG4gICAgICA8L2Zvcm0+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJvd3NlclwiPlxuICAgICAgICB7cHJvZHVjdEZpbHRlci5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICA8UHJvZHVjdENhcmQga2V5PXtwcm9kdWN0LmlkfSBkYXRhPXtwcm9kdWN0fSB7Li4ucHJvZHVjdH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLCBvbkF1dGhTdGF0ZUNoYW5nZWQsIHNpZ25PdXQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuL2ZpcmViYXNlQ29uXCI7XG5cbmZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCBbcmVnaXN0ZXJFbWFpbCwgc2V0UmVnaXN0ZXJFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3JlZ2lzdGVyUGFzc3dvcmQsIHNldFJlZ2lzdGVyUGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2dpbkVtYWlsLCBzZXRMb2dpbkVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbG9naW5QYXNzd29yZCwgc2V0TG9naW5QYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2N1cnJlbnRGb3JtLCBzZXRDdXJyZW50Rm9ybV0gPSB1c2VTdGF0ZShcImxvZ2luXCIpO1xuXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsIChjdXJyZW50VXNlcikgPT4ge1xuICAgICAgc2V0VXNlcihjdXJyZW50VXNlcik7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCByZWdpc3RlciA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCByZWdpc3RlckVtYWlsLCByZWdpc3RlclBhc3N3b3JkKTtcbiAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbG9naW4gPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBsb2dpbkVtYWlsLCBsb2dpblBhc3N3b3JkKTtcbiAgICAgIG5hdmlnYXRlKFwiL3Byb2ZpbGVcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgc2lnbk91dChhdXRoKTtcbiAgICBzZXRVc2VyKHt9KTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVDdXJyZW50Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBuZXh0Rm9ybSA9IGN1cnJlbnRGb3JtID09PSBcImxvZ2luXCIgPyBcInNpZ251cFwiIDogXCJsb2dpblwiO1xuICAgIHNldEN1cnJlbnRGb3JtKG5leHRGb3JtKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICB7Y3VycmVudEZvcm0gPT09IFwic2lnbnVwXCIgJiYgKCF1c2VyIHx8ICF1c2VyLmVtYWlsKSAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzPiBSZWdpc3RlciBVc2VyIDwvaDM+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsLi4uXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgc2V0UmVnaXN0ZXJFbWFpbChldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZC4uLlwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHNldFJlZ2lzdGVyUGFzc3dvcmQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVnaXN0ZXJ9PiBDcmVhdGUgVXNlcjwvYnV0dG9uPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17dG9nZ2xlQ3VycmVudEZvcm19PlxuICAgICAgICAgICAgSGF2ZSBhY2NvdW50P1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge2N1cnJlbnRGb3JtID09PSBcImxvZ2luXCIgJiYgIXVzZXI/LmVtYWlsICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDM+IExvZ2luIDwvaDM+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsLi4uXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgc2V0TG9naW5FbWFpbChldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZC4uLlwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHNldExvZ2luUGFzc3dvcmQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9naW59PiBMb2dpbjwvYnV0dG9uPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17dG9nZ2xlQ3VycmVudEZvcm19PlxuICAgICAgICAgICAgSGF2ZSBubyBhY2NvdW50P1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7dXNlcj8uZW1haWwgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoND4gVXNlciBMb2dnZWQgSW46IDwvaDQ+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dvdXR9PiBTaWduIE91dCA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuXG5pbXBvcnQgeyBzaWduT3V0IH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcblxuZnVuY3Rpb24gUHJvZmlsZSgpIHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xuICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcbiAgICBpZiAodXNlcikge1xuICAgICAgc2V0VXNlcih1c2VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VXNlcih7fSk7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHNpZ25PdXQoYXV0aCk7XG4gICAgc2V0VXNlcih7fSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZUNvbnRhaW5lclwiPlxuICAgICAgICA8aDQ+e3VzZXIuZW1haWx9IExvZ2dlZCBJbiA8L2g0PlxuXG4gICAgICAgIHsoIXVzZXIgfHwgIXVzZXIuZW1haWwpICYmIDxidXR0b24+TG9naW48L2J1dHRvbj59XG5cbiAgICAgICAge3VzZXI/LmVtYWlsICYmIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dvdXR9PiBTaWduIE91dCA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuIiwiaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tIFwicmVhY3QtdXNlLWNhcnRcIjtcblxuY29uc3QgU2luZ2xlUHJvZHVjdCA9ICgpID0+IHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBjb25zdCBwcm9kdWN0ID0gbG9jYXRpb24uc3RhdGUuZGF0YTtcbiAgY29uc29sZS5sb2cocHJvZHVjdCk7XG5cbiAgY29uc3QgeyBhZGRJdGVtIH0gPSB1c2VDYXJ0KCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgbXgtYXV0byBtLTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydCBwLTAgb3ZlcmZsb3ctaGlkZGVuIGgtMTAwIHNoYWRvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZX1cbiAgICAgICAgICAgIGFsdD17cHJvZHVjdC5wcm9kdWN0X25hbWV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWltYWdlLXRvcCBpbWctZmx1aWQgbWItM1wiXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNXJlbVwiLCBtYXJnaW5Cb3R0b206IFwiMXJlbVwiIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntwcm9kdWN0LnByb2R1Y3RfbmFtZX08L2g1PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57cHJvZHVjdC5wcmljZX08L3A+XG5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9eygpID0+IGFkZEl0ZW0ocHJvZHVjdCl9PlxuICAgICAgICAgICAgQWRkIHRvIGNhcnRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgbS0yXCIgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIFJldHVybiB0byBIb21lXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUHJvZHVjdDtcbiIsImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lDbmR4WWwwdnRTMkxhZ0htNUROdXdVOGpVUXZZQ0xFLTBcIixcbiAgYXV0aERvbWFpbjogXCJsb2dpbi1mYXJtZXIuZmlyZWJhc2VhcHAuY29tXCIsXG4gIHByb2plY3RJZDogXCJsb2dpbi1mYXJtZXJcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJsb2dpbi1mYXJtZXIuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMzg2NjcxNDI1ODUyXCIsXG4gIGFwcElkOiBcIjE6Mzg2NjcxNDI1ODUyOndlYjoyYzMxZmU0OTlkZGM1NTVlMzAwNjM5XCIsXG59O1xuXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcblxuZXhwb3J0IGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIkhvbWUiLCJOYXZiYXIiLCJTaW5nbGVQcm9kdWN0IiwiUHJvZmlsZSIsIkNhcnQiLCJDaGVja091dCIsIkxvZ2luIiwiQ2FydFByb3ZpZGVyIiwiTWFpbiIsInJvb3QiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsIkxpbmsiLCJ1c2VDYXJ0IiwidG90YWxJdGVtcyIsInVzZVN0YXRlIiwiYXBpSGVhZCIsInJhbmRBcGlIZWFkIiwiY291bnRfd29yZHMiLCJ3b3JkX2FycmF5IiwidG90YWwiLCJmb3JFYWNoIiwiUHJvZHVjdENhcmQiLCJkYXRhIiwicHJvZHVjdF9uYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImlkIiwicmFuZEltYWdlIiwidW5pdHMiLCJpbWFnZSIsInNwbGl0IiwibmFtZV9hcnJheSIsImNvbnNvbGUiLCJsb2ciLCJ0b3RhbF93b3JkcyIsIm5vdW4iLCJpbmNsdWRlcyIsImFkZEl0ZW0iLCJpc0VtcHR5IiwiY2FydFRvdGFsIiwidG90YWxVbmlxdWVJdGVtcyIsIml0ZW1zIiwidXBkYXRlSXRlbVF1YW50aXR5IiwicmVtb3ZlSXRlbSIsImVtcHR5Q2FydCIsImhhbmRsZUNoZWNrb3V0IiwiYWxlcnQiLCJ0b3RhbGFtIiwibWFwIiwiaXRlbSIsImhlaWdodCIsInF1YW50aXR5IiwiZSIsInRhcmdldCIsInZhbHVlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwic2VhcmNoIiwic2V0U2VhcmNoIiwibG9hZGluZyIsInNldExvYWRpbmciLCJnZXRQcm9kdWN0cyIsImdldCIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwicmVzdWx0cyIsInByb2R1Y3RzRGF0YSIsInByb2R1Y3RGaWx0ZXIiLCJmaWx0ZXIiLCJyZXMiLCJ0b0xvd2VyQ2FzZSIsInNlYXJjaEhhbmRsZXIiLCJwcm9kdWN0IiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJzaWduT3V0IiwidXNlTmF2aWdhdGUiLCJhdXRoIiwicmVnaXN0ZXJFbWFpbCIsInNldFJlZ2lzdGVyRW1haWwiLCJyZWdpc3RlclBhc3N3b3JkIiwic2V0UmVnaXN0ZXJQYXNzd29yZCIsImxvZ2luRW1haWwiLCJzZXRMb2dpbkVtYWlsIiwibG9naW5QYXNzd29yZCIsInNldExvZ2luUGFzc3dvcmQiLCJjdXJyZW50Rm9ybSIsInNldEN1cnJlbnRGb3JtIiwidXNlciIsInNldFVzZXIiLCJuYXZpZ2F0ZSIsImN1cnJlbnRVc2VyIiwicmVnaXN0ZXIiLCJtZXNzYWdlIiwibG9naW4iLCJsb2dvdXQiLCJ0b2dnbGVDdXJyZW50Rm9ybSIsIm5leHRGb3JtIiwiZW1haWwiLCJldmVudCIsImdldEF1dGgiLCJ1c2VMb2NhdGlvbiIsImxvY2F0aW9uIiwic3RhdGUiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsImluaXRpYWxpemVBcHAiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCJdLCJzb3VyY2VSb290IjoiIn0=
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
  }, "KernelTeam Summer Project")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
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
  }, "Have no account?")), (user === null || user === void 0 ? void 0 : user.email) &&
  /*#__PURE__*/
  // <div>
  //   <h4> User Logged In: </h4>
  //   <button onClick={logout}> Sign Out </button>
  // </div>
  react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("h3", null, " Login "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("input", {
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
  }, " Login")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHFCQUFiO0lBQW1DLElBQUksRUFBQztFQUF4QyxvQkFkRixDQURGLENBREYsQ0FERjtBQXdCRCxDQTlCRDs7QUFnQ0EsaUVBQWVoRixhQUFmOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBRUEsSUFBTW9ILGNBQWMsR0FBRztFQUNyQkMsTUFBTSxFQUFFLHlDQURhO0VBRXJCQyxVQUFVLEVBQUUsOEJBRlM7RUFHckJDLFNBQVMsRUFBRSxjQUhVO0VBSXJCQyxhQUFhLEVBQUUsMEJBSk07RUFLckJDLGlCQUFpQixFQUFFLGNBTEU7RUFNckJDLEtBQUssRUFBRTtBQU5jLENBQXZCO0FBU0EsSUFBTTdHLEdBQUcsR0FBR3NHLDJEQUFhLENBQUNDLGNBQUQsQ0FBekI7QUFFTyxJQUFNOUIsSUFBSSxHQUFHdUIsc0RBQU8sQ0FBQ2hHLEdBQUQsQ0FBcEI7Ozs7Ozs7Ozs7OztBQ2RQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvTmF2YmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvUHJvZHVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL0NoZWNrT3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Ib21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvUHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvU2luZ2xlUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvZmlyZWJhc2VDb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gKCkgPT4gKFtdKTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0OyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9Ib21lXCI7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvTmF2YmFyXCI7XG5cbmltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gXCIuLi9hc3NldHMvcGFnZXMvU2luZ2xlUHJvZHVjdFwiO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uL2Fzc2V0cy9wYWdlcy9Qcm9maWxlXCI7XG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vYXNzZXRzL3BhZ2VzL0NhcnRcIjtcbmltcG9ydCBDaGVja091dCBmcm9tIFwiLi4vYXNzZXRzL3BhZ2VzL0NoZWNrT3V0XCI7XG4vL2ltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2Fzc2V0cy9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vcGFnZXMvTG9naW5cIjtcblxuaW1wb3J0IHsgQ2FydFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXVzZS1jYXJ0XCI7XG5cbmltcG9ydCBcIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcblxuZnVuY3Rpb24gTWFpbigpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIDxOYXZiYXIgLz4gKi99XG4gICAgICA8Q2FydFByb3ZpZGVyPlxuICAgICAgICA8Um91dGVyPlxuICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59PjwvUm91dGU+XG4gICAgICAgICAgICB7LyogPFJvdXRlIHBhdGg9XCIvYXBpL3Byb2R1Y3QvZmluZC86aWRcIiBlbGVtZW50PXs8U2luZ2xlUHJvZHVjdCAvPn0gLz4gKi99XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9maWxlXCIgZWxlbWVudD17PFByb2ZpbGUgLz59PjwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cInByb2R1Y3RzLzppZFwiIGVsZW1lbnQ9ezxTaW5nbGVQcm9kdWN0IC8+fT48L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY2FydFwiIGVsZW1lbnQ9ezxDYXJ0IC8+fT48L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY2FydC9jaGVja291dFwiIGVsZW1lbnQ9ezxDaGVja091dCAvPn0+PC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgZWxlbWVudD17PExvZ2luIC8+fT48L1JvdXRlPlxuICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICA8L1JvdXRlcj5cbiAgICAgIDwvQ2FydFByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG5yb290LnJlbmRlcihcbiAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgPE1haW4gLz5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuKTtcbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgXCIuL3N0eWxlcy9hcHAuY3NzXCI7XG5cblxuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCBcIi4vYm9vdHN0cmFwXCI7XG5cbmltcG9ydCBcIi4vTWFpblwiO1xuXG4vLyBpbXBvcnQgXCIuLi9hc3NldHMvcGFnZXMvTG9naW5GdW5jdFwiO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tIFwicmVhY3QtdXNlLWNhcnRcIjtcblxuZnVuY3Rpb24gTmF2YmFyKCkge1xuICBjb25zdCB7IHRvdGFsSXRlbXMgfSA9IHVzZUNhcnQoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPG5hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJuYXYtYVwiPlxuICAgICAgICAgICAgICBLZXJuZWxUZWFtIFN1bW1lciBQcm9qZWN0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdi1saW5rc1wiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj4gSG9tZSA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgey8qIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2ZpbGVcIj4gUHJvZmlsZSA8L0xpbms+XG4gICAgICAgICAgPC9saT4gKi99XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NhcnRcIj5DYXJ0OiB7dG90YWxJdGVtc30gPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgey8qIDxMaW5rIHRvPVwiL2xvZ2luXCI+IExvZyBpbiA8L0xpbms+ICovfVxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPiBMb2cgaW4gPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG5cbi8qXG4gKi9cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tIFwicmVhY3QtdXNlLWNhcnRcIjtcblxuY29uc3QgYXBpSGVhZCA9IFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL1wiO1xuY29uc3QgcmFuZEFwaUhlYWQgPSBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS81MDB4NDAwLz9cIjtcbmNvbnN0IGNvdW50X3dvcmRzID0gKHdvcmRfYXJyYXkpID0+IHtcbiAgbGV0IHRvdGFsID0gMDtcbiAgd29yZF9hcnJheS5mb3JFYWNoKCgpID0+IHtcbiAgICB0b3RhbCsrO1xuICB9KTtcbiAgcmV0dXJuIHRvdGFsO1xufTtcblxuLy8gZnVuY3Rpb24gUHJvZHVjdENhcmQoeyBkYXRhLCBwcm9kdWN0X25hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgaWQsIHVuaXRzID0gbnVsbCwgaW1hZ2UgPSBudWxsIH0pIHtcbmZ1bmN0aW9uIFByb2R1Y3RDYXJkKHsgZGF0YSwgcHJvZHVjdF9uYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGlkIH0pIHtcbiAgbGV0IHJhbmRJbWFnZSA9IHJhbmRBcGlIZWFkO1xuICAvLyBjb25zdCBbcGljaW1hZ2UsIHNldFBpY2ltYWdlXSA9IHVzZVN0YXRlKCk7XG5cbiAgZGF0YS51bml0cyA9IGRhdGEudW5pdHMgPyBkYXRhLnVuaXRzIDogXCJrZ1wiO1xuXG4gIGlmICghZGF0YS5pbWFnZSkge1xuICAgIGlmIChjb3VudF93b3Jkcyhwcm9kdWN0X25hbWUuc3BsaXQoKSkgPiAxKSB7XG4gICAgICBjb25zdCBuYW1lX2FycmF5ID0gcHJvZHVjdF9uYW1lLnNwbGl0KCk7XG4gICAgICBjb25zb2xlLmxvZyhjb3VudF93b3JkcyhuYW1lX2FycmF5KSk7XG4gICAgICBjb25zdCB0b3RhbF93b3JkcyA9IGNvdW50X3dvcmRzKG5hbWVfYXJyYXkpO1xuICAgICAgY29uc3Qgbm91biA9IG5hbWVfYXJyYXlbdG90YWxfd29yZHMgLSAxXTtcbiAgICAgIHJhbmRJbWFnZSArPSBub3VuO1xuICAgIH0gZWxzZSB7XG4gICAgICByYW5kSW1hZ2UgKz0gcHJvZHVjdF9uYW1lO1xuICAgIH1cbiAgICBkYXRhLmltYWdlID0gcmFuZEltYWdlO1xuICB9IGVsc2UgaWYgKCFkYXRhLmltYWdlLmluY2x1ZGVzKFwiaHR0cHM6Ly9cIikpIHtcbiAgICBkYXRhLmltYWdlID0gYXBpSGVhZCArIGltYWdlO1xuICB9XG5cbiAgY29uc3QgeyBhZGRJdGVtIH0gPSB1c2VDYXJ0KCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGFpbmVyIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgZnJvbnQtZmFjZVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuaW1hZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJhY2stZmFjZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZW1vdmVcIj5lbGVtZW50PC9kaXY+XG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJyZW1vdmVcIiBvbkNsaWNrPXsoKSA9PiByZW1vdmVSZWNpcGUocmVjaXBlLmlkKX0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAge2VsZW1lbnR9XG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmltYWdlfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdF9uYW1lfSB7cHJpY2V94oKsL3tkYXRhLnVuaXRzfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIDxMaW5rIGNsYXNzTmFtZT1cImNhcmQtbGlua1wiIHRvPXtgL2FwaS9wcm9kdWN0L2ZpbmQvJHtpZH1gfT4gKi99XG4gICAgICAgICAgICB7LyogPExpbmsgdG89e2Bwcm9kdWN0cy8ke2lkfWB9IGRhdGE9e2RhdGF9PlxuICAgICAgICAgICAgICBTZWUgbW9yZVxuICAgICAgICAgICAgPC9MaW5rPiAqL31cbiAgICAgICAgICAgIDxMaW5rIHRvPXtgcHJvZHVjdHMvJHtpZH1gfSBzdGF0ZT17eyBkYXRhOiBkYXRhIH19PlxuICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgIFNlZSBtb3JlXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnaGVsbG8nKVxuICAgICAgICAgICAgICAgIGFkZEl0ZW0oeyBpZDogaWQsIHByb2R1Y3RfbmFtZSwgZGVzY3JpcHRpb24sIHByaWNlLCBpbWFnZTogZGF0YS5pbWFnZSB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFkZCB0byBjYXJ0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSBcInJlYWN0LXVzZS1jYXJ0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENhcnQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaXNFbXB0eSwgY2FydFRvdGFsLCB0b3RhbFVuaXF1ZUl0ZW1zLCBpdGVtcywgdG90YWxJdGVtcywgdXBkYXRlSXRlbVF1YW50aXR5LCByZW1vdmVJdGVtLCBlbXB0eUNhcnQgfSA9IHVzZUNhcnQoKTtcbiAgLy8gY29uc29sZS5sb2coXCJpdGVtc1wiLCBpdGVtcyk7XG4gIC8vIGNvbnN0IFt0b3RhbEFtb3VudCwgc2V0VG90YWxBbW91bnRdID0gdXNlU3RhdGUoKTtcblxuICBpZiAoaXNFbXB0eSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBhbGVydCBhbGVydC1pbmZvXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgIFlvdXIgY2FydCBpcyBlbXB0eVxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICBjb25zdCBoYW5kbGVDaGVja291dCA9ICgpID0+IHtcbiAgICBhbGVydChcIlRoYW5rcyBmb3IgcHVyY2hhc2luZyBvdXIgcHJvZHVjdHMhXCIpO1xuICAgIGVtcHR5Q2FydCgpO1xuICB9O1xuICAvLyBjb25zb2xlLmxvZyhjYXJ0VG90YWwpO1xuICBjb25zdCB0b3RhbGFtID0gY2FydFRvdGFsO1xuICAvLyBjb25zb2xlLmxvZyh0b3RhbGFtKTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXJ0IHB5LTQgY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgPGgxPkNhcnQ8L2gxPlxuICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgIENhcnQgKHt0b3RhbFVuaXF1ZUl0ZW1zfSkgVG90YWwgSXRlbXM6IHt0b3RhbEl0ZW1zfVxuICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWxpZ2h0IHRhYmxlLWhvdmVyIG0tMFwiPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPlByb2R1Y3Q8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPlF1YW50aXR5PC90aD5cbiAgICAgICAgICAgICAgICA8dGg+VG90YWw8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5SZW1vdmU8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHNldFRvdGFsQW1vdW50KGl0ZW0ucXVhbnRpdHkgKiBpdGVtLnByaWNlKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8dHIga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZX0gYWx0PXtpdGVtLnByb2R1Y3RfbmFtZX0gc3R5bGU9e3sgaGVpZ2h0OiBcIjZyZW1cIiB9fSAvPiB7aXRlbS5wcm9kdWN0X25hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4ke2l0ZW0ucHJpY2V9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e2l0ZW0ucXVhbnRpdHl9IG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlSXRlbVF1YW50aXR5KGl0ZW0uaWQsIGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPiR7aXRlbS5xdWFudGl0eSAqIGl0ZW0ucHJpY2V9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgey8qIDx0ZD57dG90YWxBbW91bnR9PC90ZD4gKi99XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlSXRlbShpdGVtLmlkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZW1vdmVcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBtcy1hdXRvXCI+XG4gICAgICAgICAgICA8aDI+VG90YWwgcHJpY2U6ICR7Y2FydFRvdGFsfTwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgbS0yXCIgb25DbGljaz17ZW1wdHlDYXJ0fT5cbiAgICAgICAgICAgICAgRW1wdHkgQ2FydFxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIG0tMlwiPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9jYXJ0L2NoZWNrb3V0XCIgdG90YWxhbT17dG90YWxhbX0+XG4gICAgICAgICAgICAgICAgey8qIENoZWNrb3V0IHtjYXJ0VG90YWx9ICovfVxuICAgICAgICAgICAgICAgIHsvKiBDaGVja291dCB7dG90YWxhbX0gKi99XG4gICAgICAgICAgICAgICAgQ2hlY2tvdXRcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tIFwicmVhY3QtdXNlLWNhcnRcIjtcblxuLy8gZnVuY3Rpb24gQ2hlY2tPdXQoeyB0b3RhbGFtIH0pIHtcbmZ1bmN0aW9uIENoZWNrT3V0KCkge1xuICBjb25zdCB7IGNhcnRUb3RhbCB9ID0gdXNlQ2FydCgpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5DaGVja091dDwvaDE+XG4gICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbD5Ub3RhbCBBbW91bnQ8L2xhYmVsPlxuXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj17Y2FydFRvdGFsfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsPlBheW1lbnQgTWV0aG9kPC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgPG9wdGlvbj5DcmVkaXQgQ2FyZDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbj5EZWJpdCBDYXJkPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uPk5ldCBCYW5raW5nPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uPkNhc2ggb24gRGVsaXZlcnk8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBcIj5cbiAgICAgICAgICA8bGFiZWw+Q2FyZCBOdW1iZXI8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbD5FeHBpcnkgRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbD5DVlY8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbD5OYW1lIG9uIENhcmQ8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWw+QWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgU3VibWl0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja091dDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tIFwicmVhY3QtdXNlLWNhcnRcIjtcblxuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3VpX2NvbXBvbmVudHMvUHJvZHVjdENhcmRcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9hcHAuY3NzXCI7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBnZXRQcm9kdWN0cyA9ICgpID0+IGF4aW9zLmdldChcIi9hcGkvcHJvZHVjdHMvYWxsXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIFByb21pc2UuYWxsKFtnZXRQcm9kdWN0cygpXSkudGhlbihmdW5jdGlvbiAocmVzdWx0cykge1xuICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0c1swXSk7XG5cbiAgICAgIGNvbnN0IHByb2R1Y3RzRGF0YSA9IHJlc3VsdHNbMF07XG5cbiAgICAgIHNldFByb2R1Y3RzKHByb2R1Y3RzRGF0YS5kYXRhKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgeyB0b3RhbEl0ZW1zIH0gPSB1c2VDYXJ0KCk7XG4gIC8vIGNvbnNvbGUubG9nKHRvdGFsSXRlbXMsIFwidG90YWxJdGVtc1wiKTtcblxuICBjb25zdCBwcm9kdWN0RmlsdGVyID0gcHJvZHVjdHMuZmlsdGVyKChyZXMpID0+IHtcbiAgICByZXR1cm4gcmVzLnByb2R1Y3RfbmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKTtcbiAgfSk7XG5cbiAgY29uc3Qgc2VhcmNoSGFuZGxlciA9IChlKSA9PiB7XG4gICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhzZWFyY2gpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNvbnRhaW5lci1zZWFyY2hcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiIPCflI0gU2VhcmNoLi5cIiBjbGFzc05hbWU9XCJzZWFyY2hcIiBvbkNoYW5nZT17c2VhcmNoSGFuZGxlcn0gLz5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJicm93c2VyXCI+XG4gICAgICAgIHtwcm9kdWN0RmlsdGVyLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgIDxQcm9kdWN0Q2FyZCBrZXk9e3Byb2R1Y3QuaWR9IGRhdGE9e3Byb2R1Y3R9IHsuLi5wcm9kdWN0fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCwgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsIG9uQXV0aFN0YXRlQ2hhbmdlZCwgc2lnbk91dCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4vZmlyZWJhc2VDb25cIjtcblxuZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IFtyZWdpc3RlckVtYWlsLCBzZXRSZWdpc3RlckVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcmVnaXN0ZXJQYXNzd29yZCwgc2V0UmVnaXN0ZXJQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvZ2luRW1haWwsIHNldExvZ2luRW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2dpblBhc3N3b3JkLCBzZXRMb2dpblBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY3VycmVudEZvcm0sIHNldEN1cnJlbnRGb3JtXSA9IHVzZVN0YXRlKFwibG9naW5cIik7XG5cbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKGN1cnJlbnRVc2VyKSA9PiB7XG4gICAgICBzZXRVc2VyKGN1cnJlbnRVc2VyKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIHJlZ2lzdGVyRW1haWwsIHJlZ2lzdGVyUGFzc3dvcmQpO1xuICAgICAgY29uc29sZS5sb2codXNlcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBsb2dpbiA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGxvZ2luRW1haWwsIGxvZ2luUGFzc3dvcmQpO1xuICAgICAgbmF2aWdhdGUoXCIvcHJvZmlsZVwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBzaWduT3V0KGF1dGgpO1xuICAgIHNldFVzZXIoe30pO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUN1cnJlbnRGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IG5leHRGb3JtID0gY3VycmVudEZvcm0gPT09IFwibG9naW5cIiA/IFwic2lnbnVwXCIgOiBcImxvZ2luXCI7XG4gICAgc2V0Q3VycmVudEZvcm0obmV4dEZvcm0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIHtjdXJyZW50Rm9ybSA9PT0gXCJzaWdudXBcIiAmJiAoIXVzZXIgfHwgIXVzZXIuZW1haWwpICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDM+IFJlZ2lzdGVyIFVzZXIgPC9oMz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwuLi5cIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICBzZXRSZWdpc3RlckVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkLi4uXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgc2V0UmVnaXN0ZXJQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZWdpc3Rlcn0+IENyZWF0ZSBVc2VyPC9idXR0b24+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0b2dnbGVDdXJyZW50Rm9ybX0+XG4gICAgICAgICAgICBIYXZlIGFjY291bnQ/XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7Y3VycmVudEZvcm0gPT09IFwibG9naW5cIiAmJiAhdXNlcj8uZW1haWwgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMz4gTG9naW4gPC9oMz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwuLi5cIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICBzZXRMb2dpbkVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkLi4uXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgc2V0TG9naW5QYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dpbn0+IExvZ2luPC9idXR0b24+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0b2dnbGVDdXJyZW50Rm9ybX0+XG4gICAgICAgICAgICBIYXZlIG5vIGFjY291bnQ/XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHt1c2VyPy5lbWFpbCAmJiAoXG4gICAgICAgIC8vIDxkaXY+XG4gICAgICAgIC8vICAgPGg0PiBVc2VyIExvZ2dlZCBJbjogPC9oND5cbiAgICAgICAgLy8gICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ291dH0+IFNpZ24gT3V0IDwvYnV0dG9uPlxuICAgICAgICAvLyA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMz4gTG9naW4gPC9oMz5cblxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbC4uLlwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHNldExvZ2luRW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmQuLi5cIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICBzZXRMb2dpblBhc3N3b3JkKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ2lufT4gTG9naW48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuXG5pbXBvcnQgeyBzaWduT3V0IH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcblxuZnVuY3Rpb24gUHJvZmlsZSgpIHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xuICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcbiAgICBpZiAodXNlcikge1xuICAgICAgc2V0VXNlcih1c2VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VXNlcih7fSk7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHNpZ25PdXQoYXV0aCk7XG4gICAgc2V0VXNlcih7fSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZUNvbnRhaW5lclwiPlxuICAgICAgICA8aDQ+e3VzZXIuZW1haWx9IExvZ2dlZCBJbiA8L2g0PlxuXG4gICAgICAgIHsoIXVzZXIgfHwgIXVzZXIuZW1haWwpICYmIDxidXR0b24+TG9naW48L2J1dHRvbj59XG5cbiAgICAgICAge3VzZXI/LmVtYWlsICYmIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dvdXR9PiBTaWduIE91dCA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuIiwiaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tIFwicmVhY3QtdXNlLWNhcnRcIjtcblxuY29uc3QgU2luZ2xlUHJvZHVjdCA9ICgpID0+IHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBjb25zdCBwcm9kdWN0ID0gbG9jYXRpb24uc3RhdGUuZGF0YTtcbiAgY29uc29sZS5sb2cocHJvZHVjdCk7XG5cbiAgY29uc3QgeyBhZGRJdGVtIH0gPSB1c2VDYXJ0KCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgbXgtYXV0byBtLTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydCBwLTAgb3ZlcmZsb3ctaGlkZGVuIGgtMTAwIHNoYWRvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZX1cbiAgICAgICAgICAgIGFsdD17cHJvZHVjdC5wcm9kdWN0X25hbWV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWltYWdlLXRvcCBpbWctZmx1aWQgbWItM1wiXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNXJlbVwiLCBtYXJnaW5Cb3R0b206IFwiMXJlbVwiIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntwcm9kdWN0LnByb2R1Y3RfbmFtZX08L2g1PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57cHJvZHVjdC5wcmljZX08L3A+XG5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9eygpID0+IGFkZEl0ZW0ocHJvZHVjdCl9PlxuICAgICAgICAgICAgQWRkIHRvIGNhcnRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgbS0yXCIgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIFJldHVybiB0byBIb21lXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUHJvZHVjdDtcbiIsImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lDbmR4WWwwdnRTMkxhZ0htNUROdXdVOGpVUXZZQ0xFLTBcIixcbiAgYXV0aERvbWFpbjogXCJsb2dpbi1mYXJtZXIuZmlyZWJhc2VhcHAuY29tXCIsXG4gIHByb2plY3RJZDogXCJsb2dpbi1mYXJtZXJcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJsb2dpbi1mYXJtZXIuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMzg2NjcxNDI1ODUyXCIsXG4gIGFwcElkOiBcIjE6Mzg2NjcxNDI1ODUyOndlYjoyYzMxZmU0OTlkZGM1NTVlMzAwNjM5XCIsXG59O1xuXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcblxuZXhwb3J0IGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIkhvbWUiLCJOYXZiYXIiLCJTaW5nbGVQcm9kdWN0IiwiUHJvZmlsZSIsIkNhcnQiLCJDaGVja091dCIsIkxvZ2luIiwiQ2FydFByb3ZpZGVyIiwiTWFpbiIsInJvb3QiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsIkxpbmsiLCJ1c2VDYXJ0IiwidG90YWxJdGVtcyIsInVzZVN0YXRlIiwiYXBpSGVhZCIsInJhbmRBcGlIZWFkIiwiY291bnRfd29yZHMiLCJ3b3JkX2FycmF5IiwidG90YWwiLCJmb3JFYWNoIiwiUHJvZHVjdENhcmQiLCJkYXRhIiwicHJvZHVjdF9uYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImlkIiwicmFuZEltYWdlIiwidW5pdHMiLCJpbWFnZSIsInNwbGl0IiwibmFtZV9hcnJheSIsImNvbnNvbGUiLCJsb2ciLCJ0b3RhbF93b3JkcyIsIm5vdW4iLCJpbmNsdWRlcyIsImFkZEl0ZW0iLCJpc0VtcHR5IiwiY2FydFRvdGFsIiwidG90YWxVbmlxdWVJdGVtcyIsIml0ZW1zIiwidXBkYXRlSXRlbVF1YW50aXR5IiwicmVtb3ZlSXRlbSIsImVtcHR5Q2FydCIsImhhbmRsZUNoZWNrb3V0IiwiYWxlcnQiLCJ0b3RhbGFtIiwibWFwIiwiaXRlbSIsImhlaWdodCIsInF1YW50aXR5IiwiZSIsInRhcmdldCIsInZhbHVlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwic2VhcmNoIiwic2V0U2VhcmNoIiwibG9hZGluZyIsInNldExvYWRpbmciLCJnZXRQcm9kdWN0cyIsImdldCIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwicmVzdWx0cyIsInByb2R1Y3RzRGF0YSIsInByb2R1Y3RGaWx0ZXIiLCJmaWx0ZXIiLCJyZXMiLCJ0b0xvd2VyQ2FzZSIsInNlYXJjaEhhbmRsZXIiLCJwcm9kdWN0IiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJzaWduT3V0IiwidXNlTmF2aWdhdGUiLCJhdXRoIiwicmVnaXN0ZXJFbWFpbCIsInNldFJlZ2lzdGVyRW1haWwiLCJyZWdpc3RlclBhc3N3b3JkIiwic2V0UmVnaXN0ZXJQYXNzd29yZCIsImxvZ2luRW1haWwiLCJzZXRMb2dpbkVtYWlsIiwibG9naW5QYXNzd29yZCIsInNldExvZ2luUGFzc3dvcmQiLCJjdXJyZW50Rm9ybSIsInNldEN1cnJlbnRGb3JtIiwidXNlciIsInNldFVzZXIiLCJuYXZpZ2F0ZSIsImN1cnJlbnRVc2VyIiwicmVnaXN0ZXIiLCJtZXNzYWdlIiwibG9naW4iLCJsb2dvdXQiLCJ0b2dnbGVDdXJyZW50Rm9ybSIsIm5leHRGb3JtIiwiZW1haWwiLCJldmVudCIsImdldEF1dGgiLCJ1c2VMb2NhdGlvbiIsImxvY2F0aW9uIiwic3RhdGUiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsImluaXRpYWxpemVBcHAiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCJdLCJzb3VyY2VSb290IjoiIn0=
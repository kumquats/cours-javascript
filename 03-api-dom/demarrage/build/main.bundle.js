/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/Component.js":
/*!*************************!*\
  !*** ./js/Component.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Component =
/*#__PURE__*/
function () {
  function Component() {
    var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
    var attribute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    _classCallCheck(this, Component);

    _defineProperty(this, "tagName", void 0);

    _defineProperty(this, "children", void 0);

    _defineProperty(this, "attribute", void 0);

    this.tagName = tagName;
    this.attribute = attribute;
    this.children = children;
  }

  _createClass(Component, [{
    key: "render",
    value: function render() {
      var html = "<".concat(this.tagName, " ").concat(this.renderAttribute());

      if (this.children) {
        html += ">\n\t\t\t\t".concat(this.renderChildren(), "\n\t\t\t</").concat(this.tagName, ">");
      } else {
        html += " />";
      }

      return html;
    }
  }, {
    key: "renderAttribute",
    value: function renderAttribute() {
      if (this.attribute) {
        return "".concat(this.attribute.name, "=\"").concat(this.attribute.value, "\"");
      }

      return '';
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      if (this.children instanceof Array) {
        var html = '';
        this.children.forEach(function (child) {
          html += child instanceof Component ? child.render() : child;
        });
        return html;
      } else {
        return this.children;
      }
    }
  }]);

  return Component;
}();



/***/ }),

/***/ "./js/HomePage.js":
/*!************************!*\
  !*** ./js/HomePage.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ "./js/Component.js");
/* harmony import */ var _PizzaThumbnail_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PizzaThumbnail.js */ "./js/PizzaThumbnail.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var HomePage =
/*#__PURE__*/
function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage(data) {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, _getPrototypeOf(HomePage).call(this, 'section', null, data.map(function (pizza) {
      return new _PizzaThumbnail_js__WEBPACK_IMPORTED_MODULE_1__["default"](pizza);
    })));
  }

  return HomePage;
}(_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./js/Img.js":
/*!*******************!*\
  !*** ./js/Img.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Img; });
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ "./js/Component.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Img =
/*#__PURE__*/
function (_Component) {
  _inherits(Img, _Component);

  function Img(url) {
    _classCallCheck(this, Img);

    return _possibleConstructorReturn(this, _getPrototypeOf(Img).call(this, 'img', {
      name: 'src',
      value: url
    }));
  }

  return Img;
}(_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./js/PizzaThumbnail.js":
/*!******************************!*\
  !*** ./js/PizzaThumbnail.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PizzaThumbnail; });
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ "./js/Component.js");
/* harmony import */ var _Img_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Img.js */ "./js/Img.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var PizzaThumbnail =
/*#__PURE__*/
function (_Component) {
  _inherits(PizzaThumbnail, _Component);

  function PizzaThumbnail(pizza) {
    var _this;

    _classCallCheck(this, PizzaThumbnail);

    var imageUrl = "images/".concat(pizza.nom.toLowerCase(), ".jpg");
    _this = _possibleConstructorReturn(this, _getPrototypeOf(PizzaThumbnail).call(this, 'article', {
      name: 'class',
      value: 'media'
    }, [new _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]('a', {
      name: 'href',
      value: imageUrl
    }, [new _Img_js__WEBPACK_IMPORTED_MODULE_1__["default"](imageUrl), new _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]('section', {
      name: 'class',
      value: 'infos'
    }, [new _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]('h4', null, pizza.nom), new _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]('ul', null, [new _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]('li', null, "Prix petit format : ".concat(pizza.prix_petite.toFixed(2), " \u20AC")), new _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]('li', null, "Prix grand format : ".concat(pizza.prix_grande.toFixed(2), " \u20AC"))])])])]));
    _this.pizza = pizza;
    return _this;
  }

  return PizzaThumbnail;
}(_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./js/data.js":
/*!********************!*\
  !*** ./js/data.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var data = [{
  nom: 'Regina',
  base: 'tomate',
  prix_petite: 5.5,
  prix_grande: 7.5
}, {
  nom: 'Napolitaine',
  base: 'tomate',
  prix_petite: 6.2,
  prix_grande: 8
}, {
  nom: 'Spicy',
  base: 'crème',
  prix_petite: 6.5,
  prix_grande: 9.95
}];
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ "./js/Component.js");
/* harmony import */ var _HomePage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage.js */ "./js/HomePage.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.js */ "./js/data.js");



var title = new _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]('h1', null, ['La', ' ', 'carte']);
document.querySelector('.pageTitle').innerHTML = title.render();
var homePage = new _HomePage_js__WEBPACK_IMPORTED_MODULE_1__["default"](_data_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
document.querySelector('.pizzasContainer').innerHTML = homePage.render();

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map
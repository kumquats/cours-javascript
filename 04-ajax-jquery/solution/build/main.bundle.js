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

/***/ "./js/AddPizzaPage.js":
/*!****************************!*\
  !*** ./js/AddPizzaPage.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddPizzaPage; });
/* harmony import */ var _Page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page.js */ "./js/Page.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var AddPizzaPage =
/*#__PURE__*/
function (_Page) {
  _inherits(AddPizzaPage, _Page);

  function AddPizzaPage() {
    var _this;

    _classCallCheck(this, AddPizzaPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AddPizzaPage).call(this, 'Ajouter une pizza')); // $FlowFixMe

    _this.submit = _this.submit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(AddPizzaPage, [{
    key: "render",
    value: function render() {
      return "<form class=\"addPizzaPage\">\n\t\t<label>\n\t\t\tNom :\n\t\t\t<input type=\"text\" name=\"nom\" class=\"form-control\">\n\t\t</label>\n\t\t<label>\n\t\t\tBase :\n\t\t\t<select name=\"base\" class=\"form-control\">\n\t\t\t\t<option>Tomate</option>\n\t\t\t\t<option>Cr\xE8me</option>\n\t\t\t</select>\n\t\t</label>\n\t\t<label>\n\t\t\tPrix petit format :\n\t\t\t<input type=\"number\" name=\"prix_petite\" class=\"form-control\" step=\"0.05\">\n\t\t</label>\n\t\t<label>\n\t\t\tPrix grand format :\n\t\t\t<input type=\"number\" name=\"prix_grande\" class=\"form-control\" step=\"0.05\">\n\t\t</label>\n\t\t<label>\n\t\t\tIngr\xE9dients :\n\t\t\t<select name=\"ingredients\" multiple=\"true\" class=\"form-control\">\n\t\t\t\t<option value=\"1\">Mozzarella</option>\n\t\t\t\t<option value=\"2\">Jambon</option>\n\t\t\t\t<option value=\"3\">Champignon</option>\n\t\t\t\t<option value=\"4\">Olives</option>\n\t\t\t</select>\n\t\t</label>\n\t\t<button type=\"submit\" class=\"btn btn-default\">Ajouter</button>\n\t</form>";
    }
  }, {
    key: "mount",
    value: function mount() {
      var form = document.querySelector('form.addPizzaPage');

      if (!form) {
        return;
      }

      form.addEventListener('submit', this.submit);
    }
  }, {
    key: "submit",
    value: function submit(event) {
      var _this2 = this;

      event.preventDefault();
      var fieldNames = ['nom', 'base', 'prix_petite', 'prix_grande', 'ingredients']; // on vérifie tous les champs à l'aide de la méthode validateField

      var values = {};
      var errors = [];
      fieldNames.forEach(function (fieldName) {
        var value = _this2.getFieldValue(fieldName);

        if (!value) {
          errors.push("Le champ ".concat(fieldName, " ne peut \xEAtre vide !"));
        }

        values[fieldName] = value;
      });

      if (errors.length) {
        // si des erreurs sont détectées, on les affiche
        alert(errors.join('\n'));
      } else {
        // si il n'y a pas d'erreur on envoie les données
        var pizza = {
          nom: values.nom,
          base: values.base[0],
          prix_petite: Number(values.prix_petite),
          prix_grande: Number(values.prix_grande),
          ingredients: values.ingredients
        };
        fetch('http://localhost:8080/api/v1/pizzas', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(pizza)
        }).then(function (response) {
          if (!response.ok) {
            throw new Error("".concat(response.status, " : ").concat(response.statusText));
          }

          return response.json();
        }).then(function (newPizza) {
          alert("Pizza \"".concat(newPizza.nom, "\" enregistr\xE9e avec succ\xE8s ! (id ").concat(newPizza.id, ")")); // puis on vide le formulaire

          var form = document.querySelector('form.addPizzaPage');

          if (form && form instanceof HTMLFormElement) {
            form.reset();
          }
        }).catch(function (error) {
          return alert("Enregistrement impossible : ".concat(error.message));
        });
      }
    }
  }, {
    key: "getFieldValue",
    value: function getFieldValue(fieldName) {
      var field = document.querySelector("[name=".concat(fieldName, "]"));

      if (field instanceof HTMLInputElement) {
        return field.value != '' ? field.value : null;
      } else if (field instanceof HTMLSelectElement) {
        var values = [];

        for (var i = 0; i < field.selectedOptions.length; i++) {
          var option = field.selectedOptions[i];
          values.push(option.value);
        }

        return values.length ? values : null;
      }

      return null;
    }
  }]);

  return AddPizzaPage;
}(_Page_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

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
      }

      return this.children || '';
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
/* harmony import */ var _Page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page.js */ "./js/Page.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _classPrivateFieldGet(receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }





var HomePage =
/*#__PURE__*/
function (_Page) {
  _inherits(HomePage, _Page);

  function HomePage(_data2) {
    var _this;

    _classCallCheck(this, HomePage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HomePage).call(this, 'La carte'));

    _data.set(_assertThisInitialized(_assertThisInitialized(_this)), {
      writable: true,
      value: void 0
    });

    _this.data = _data2;
    return _this;
  }

  _createClass(HomePage, [{
    key: "data",
    set: function set(value) {
      _classPrivateFieldSet(this, _data, value);

      this.children = _classPrivateFieldGet(this, _data).map(function (pizza) {
        return new _PizzaThumbnail_js__WEBPACK_IMPORTED_MODULE_1__["default"](pizza);
      });
    }
  }]);

  return HomePage;
}(_Page_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

var _data = new WeakMap();



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

/***/ "./js/Page.js":
/*!********************!*\
  !*** ./js/Page.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ "./js/Component.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _classPrivateFieldGet(receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }



var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page(_title2, children) {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, 'section', null, children));

    _title.set(_assertThisInitialized(_assertThisInitialized(_this)), {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_assertThisInitialized(_this)), _title, _title2);

    return _this;
  }

  _createClass(Page, [{
    key: "renderTitle",
    value: function renderTitle() {
      return "<h1>".concat(_classPrivateFieldGet(this, _title), "</h1>");
    }
  }, {
    key: "mount",
    value: function mount() {//
    }
  }]);

  return Page;
}(_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

var _title = new WeakMap();



/***/ }),

/***/ "./js/PageRenderer.js":
/*!****************************!*\
  !*** ./js/PageRenderer.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageRenderer; });
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page */ "./js/Page.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var PageRenderer =
/*#__PURE__*/
function () {
  function PageRenderer() {
    _classCallCheck(this, PageRenderer);
  }

  _createClass(PageRenderer, null, [{
    key: "renderPage",
    value: function renderPage(page) {
      if (this.titleElement) {
        // $FlowFixMe
        this.titleElement.innerHTML = page.renderTitle();
      }

      if (this.contentElement) {
        // $FlowFixMe
        this.contentElement.innerHTML = page.render();
      }

      page.mount();
    }
  }]);

  return PageRenderer;
}();

_defineProperty(PageRenderer, "titleElement", void 0);

_defineProperty(PageRenderer, "contentElement", void 0);



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
    _classCallCheck(this, PizzaThumbnail);

    var imageUrl = "images/".concat(pizza.nom.toLowerCase(), ".jpg");
    return _possibleConstructorReturn(this, _getPrototypeOf(PizzaThumbnail).call(this, 'article', {
      name: 'class',
      value: 'media'
    }, [new _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]('a', {
      name: 'href',
      value: imageUrl
    }, [new _Img_js__WEBPACK_IMPORTED_MODULE_1__["default"](imageUrl), new _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]('section', {
      name: 'class',
      value: 'infos'
    }, [new _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]('h4', null, pizza.nom), new _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]('ul', null, [new _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]('li', null, "Prix petit format : ".concat(pizza.prix_petite.toFixed(2), " \u20AC")), new _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]('li', null, "Prix grand format : ".concat(pizza.prix_grande.toFixed(2), " \u20AC"))])])])]));
  }

  return PizzaThumbnail;
}(_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.js */ "./js/HomePage.js");
/* harmony import */ var _PageRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageRenderer.js */ "./js/PageRenderer.js");
/* harmony import */ var _AddPizzaPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddPizzaPage.js */ "./js/AddPizzaPage.js");



_PageRenderer_js__WEBPACK_IMPORTED_MODULE_1__["default"].titleElement = document.querySelector('.pageTitle');
_PageRenderer_js__WEBPACK_IMPORTED_MODULE_1__["default"].contentElement = document.querySelector('.pizzasContainer');
var homePage = new _HomePage_js__WEBPACK_IMPORTED_MODULE_0__["default"]([]);
_PageRenderer_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderPage(homePage); // page vide
// ajout de la baseline "les pizzas c'est la vie" au logo

var logoContainer = document.querySelector('.navbar-brand');

if (logoContainer) {
  logoContainer.innerHTML += '<small class="label label-success">les pizzas c\'est la vie</small>';
} // Activation du lien "La carte" dans le menu


var homeLink = document.querySelector('.navbar-right li');

if (homeLink) {
  homeLink.setAttribute('class', 'active');
} // Gestion du click sur les liens du menu


function handleNavClick(event) {
  event.preventDefault();
  var activeLink = event.currentTarget;

  if (activeLink instanceof HTMLElement) {
    var activeLi = activeLink.parentElement,
        prevActiveLi = document.querySelector('.navbar-right li.active');

    if (prevActiveLi) {
      prevActiveLi.setAttribute('class', '');
    }

    if (activeLi) {
      activeLi.setAttribute('class', 'active');
    }
  }
}

var navLinks = document.querySelectorAll('.navbar-right a');
navLinks.forEach(function (element) {
  return element.addEventListener('click', handleNavClick);
}); // Gestion du clic sur le lien du menu "Ajouter une pizza"

var addPizzaPage = new _AddPizzaPage_js__WEBPACK_IMPORTED_MODULE_2__["default"](),
    addPizzaLink = document.querySelector('.pizzaFormButton');

if (addPizzaLink) {
  addPizzaLink.addEventListener('click', function (event) {
    event.preventDefault();
    _PageRenderer_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderPage(addPizzaPage);
  });
} // A.3. Charger un fichier statique


function displayNews(html) {
  var newsContainer = document.querySelector('.newsContainer');

  if (newsContainer) {
    newsContainer.innerHTML = html;
  }
}

fetch('./news.html').then(function (response) {
  return response.text();
}).then(displayNews);

function renderHome(data) {
  homePage.data = data;
  _PageRenderer_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderPage(homePage);
}

fetch('http://localhost:8080/api/v1/pizzas').then(function (response) {
  return response.json();
}).then(renderHome);

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map
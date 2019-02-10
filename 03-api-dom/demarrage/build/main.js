"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _classPrivateFieldGet(receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
}]; // class Component {
// 	tag/*:string*/;
// 	attribute/*:?{name:string, value:string}*/;
// 	children/*:Array<Component|string>*/;
// 	constructor( tag/*:string*/, attribute/*:?{name:string, value:string}*/, children/*:Array<Component|string>*/=[] ){
// 		this.tag = tag;
// 		this.attribute = attribute;
// 		this.children = children;
// 	}
// 	render()/*:string*/{
// 		return `<${this.tag} ${this.renderAttribute()} ${
// 			this.children.length ?
// 			`>${this.renderChildren()}</${this.tag}>` :
// 			`/>`
// 		}`;
// 	}
// 	renderAttribute()/*:string*/{
// 		if ( this.attribute ){
// 			return `${this.attribute.name}="${this.attribute.value}"`
// 		}
// 		return '';
// 	}
// 	renderChildren()/*:string*/{
// 		return this.children.map( (child/*:Component|string*/) => (
// 			child instanceof Component ? child.render() : child
// 		)).join('');
// 	}
// }
// class Img extends Component {
// 	constructor(url/*:string*/){
// 		super('img', {name:'src', value:url} );
// 	}
// }
// attributes peut contenir plusieurs valeurs

var Component =
/*#__PURE__*/
function () {
  /*:string*/

  /*:?{}*/
  function Component(tag
  /*:string*/
  , attributes
  /*:?{}*/
  ) {
    var children
    /*:Array<Component|string>*/
    = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, Component);

    _defineProperty(this, "tag", void 0);

    _defineProperty(this, "attributes", void 0);

    _defineProperty(this, "children", void 0);

    this.tag = tag;
    this.attributes = attributes;
    this.children = children;
  }

  _createClass(Component, [{
    key: "render",
    value: function render()
    /*:string*/
    {
      return "<".concat(this.tag, " ").concat(this.renderAttributes(), " ").concat(this.children.length ? ">".concat(this.renderChildren(), "</").concat(this.tag, ">") : "/>");
    }
  }, {
    key: "renderAttributes",
    value: function renderAttributes()
    /*:string*/
    {
      var attributesHTML = '';

      if (this.attributes) {
        for (var attribute in this.attributes) {
          attributesHTML += "".concat(attribute, "=\"").concat(this.attributes[attribute], "\" ");
        }
      }

      return attributesHTML;
    }
  }, {
    key: "renderChildren",
    value: function renderChildren()
    /*:string*/
    {
      return this.children.map(function (child
      /*:Component|string*/
      ) {
        return child instanceof Component ? child.render() : child;
      }).join('');
    }
  }]);

  return Component;
}();

var Img =
/*#__PURE__*/
function (_Component) {
  _inherits(Img, _Component);

  function Img(url
  /*:string*/
  ) {
    _classCallCheck(this, Img);

    return _possibleConstructorReturn(this, _getPrototypeOf(Img).call(this, 'img', {
      src: url
    }));
  }

  return Img;
}(Component);

var PizzaThumbnail =
/*#__PURE__*/
function (_Component2) {
  _inherits(PizzaThumbnail, _Component2);

  function PizzaThumbnail(pizza
  /*:{title:string, thumbnail:string}*/
  ) {
    var _this;

    _classCallCheck(this, PizzaThumbnail);

    var imageUrl
    /*:string*/
    = "images/".concat(pizza.nom.toLowerCase(), ".jpg");
    _this = _possibleConstructorReturn(this, _getPrototypeOf(PizzaThumbnail).call(this, 'article', {
      class: 'media'
    }, [new Component('a', {
      href: imageUrl
    }, [new Img(imageUrl), new Component('section', {
      class: 'infos'
    }, [new Component('h4', null, [pizza.nom]), new Component('ul', null, [new Component('li', null, ["Prix petit format : ".concat(pizza.prix_petite.toFixed(2), " \u20AC")]), new Component('li', null, ["Prix grand format : ".concat(pizza.prix_grande.toFixed(2), " \u20AC")])])])])]));
    _this.pizza = pizza;
    return _this;
  }

  return PizzaThumbnail;
}(Component); // const title/*:Component*/ = new Component('h1', null, ['La carte']);
// const pageTitleElement/*:?Element*/ = document.querySelector('.pageTitle')
// if ( pageTitleElement ) {
// 	pageTitleElement.innerHTML = title.render();
// }


var pizzasHtml
/*:Array<string>*/
= data.map(function (pizza
/*:{title:string,thumbnail:string,pizza:string}*/
) {
  var v
  /*:PizzaThumbnail*/
  = new PizzaThumbnail(pizza);
  return v.render();
}); // const pizzasContainerElement/*:?Element*/ = document.querySelector( '.pizzasContainer' );
// if ( pizzasContainerElement ){
// 	pizzasContainerElement.innerHTML = pizzasHtml.join('');
// }

var Page =
/*#__PURE__*/
function (_Component3) {
  _inherits(Page, _Component3);

  function Page(title, cssClass, children) {
    var _this2;

    _classCallCheck(this, Page);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, 'section', {
      name: 'class',
      value: cssClass
    }, children));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "title", void 0);

    _this2.title = title;
    return _this2;
  }

  _createClass(Page, [{
    key: "renderTitle",
    value: function renderTitle() {
      return "<h1>".concat(this.title, "</h1>");
    }
  }]);

  return Page;
}(Component); // const homePage = new Page( 'La carte', 'homePage', ['lol']);
// const pageTitleElement/*:?Element*/ = document.querySelector('.pageTitle')
// if ( pageTitleElement ) {
// 	pageTitleElement.innerHTML = homePage.renderTitle();
// }
// const pizzasContainerElement/*:?Element*/ = document.querySelector( '.pizzasContainer' );
// if ( pizzasContainerElement ){
// 	pizzasContainerElement.innerHTML = homePage.render();
// }


var HomePage =
/*#__PURE__*/
function (_Page) {
  _inherits(HomePage, _Page);

  function HomePage(_data2) {
    var _this3;

    _classCallCheck(this, HomePage);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(HomePage).call(this, 'La carte', 'homePage'));

    _data.set(_assertThisInitialized(_assertThisInitialized(_this3)), {
      writable: true,
      value: []
    });

    _this3.data = _data2;
    return _this3;
  }

  _createClass(HomePage, [{
    key: "data",
    set: function set(value) {
      _classPrivateFieldSet(this, _data, value);

      this.children = _classPrivateFieldGet(this, _data).map(function (pizza) {
        return new PizzaThumbnail(pizza);
      });
    }
  }]);

  return HomePage;
}(Page);

var _data = new WeakMap();

var homePage = new HomePage(data); // const pageTitleElement/*:?Element*/ = document.querySelector('.pageTitle')
// if ( pageTitleElement ) {
// 	pageTitleElement.innerHTML = homePage.renderTitle();
// }
// const pizzasContainerElement/*:?Element*/ = document.querySelector( '.pizzasContainer' );
// if ( pizzasContainerElement ){
// 	pizzasContainerElement.innerHTML = homePage.render();
// }

homePage.data = [{
  nom: '4fromages',
  base: 'tomate',
  prix_petite: 5.5,
  prix_grande: 7.5
}, {
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
}]; // if ( pizzasContainerElement ){
// 	pizzasContainerElement.innerHTML = homePage.render();
// }

var PageRenderer =
/*#__PURE__*/
function () {
  function PageRenderer() {
    _classCallCheck(this, PageRenderer);
  }

  _createClass(PageRenderer, null, [{
    key: "renderPage",
    value: function renderPage(page
    /*:Page*/
    ) {
      if (this.titleElement) {
        this.titleElement.innerHTML = page.renderTitle();
      }

      if (this.contentElement) {
        this.contentElement.innerHTML = page.render();
      }
    }
  }]);

  return PageRenderer;
}();

_defineProperty(PageRenderer, "titleElement", document.querySelector('.pageTitle'));

_defineProperty(PageRenderer, "contentElement", document.querySelector('.pizzasContainer'));

PageRenderer.renderPage(homePage);

var Input =
/*#__PURE__*/
function (_Component4) {
  _inherits(Input, _Component4);

  function Input(type, name, label, attributes) {
    var _this4;

    _classCallCheck(this, Input);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, 'input', _objectSpread({}, attributes, {
      type: type,
      name: name
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this4)), "name", void 0);

    _this4.name = name;
    _this4.label = label;
    return _this4;
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      return "<label>\n\t\t\t".concat(this.label, "\n\t\t\t").concat(_get(_getPrototypeOf(Input.prototype), "render", this).call(this), "\n\t\t</label>");
    }
  }]);

  return Input;
}(Component);

var Select =
/*#__PURE__*/
function (_Component5) {
  _inherits(Select, _Component5);

  function Select(name) {
    var _this5;

    var _options2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var attributes = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, Select);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, 'select', _objectSpread({}, attributes, {
      name: name
    })));

    _options.set(_assertThisInitialized(_assertThisInitialized(_this5)), {
      writable: true,
      value: []
    });

    _this5.options = _options2;
    return _this5;
  }

  _createClass(Select, [{
    key: "options",
    set: function set(value) {
      _classPrivateFieldSet(this, _options, value);

      this.children = _classPrivateFieldGet(this, _options).map(function (option) {
        return new Component('option', {
          value: option.value || option
        }, [option.label || option]);
      });
    }
  }]);

  return Select;
}(Component);

var _options = new WeakMap();

var AddPizzaPage =
/*#__PURE__*/
function (_Page2) {
  _inherits(AddPizzaPage, _Page2);

  function AddPizzaPage(_ingredients2) {
    var _this6;

    _classCallCheck(this, AddPizzaPage);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(AddPizzaPage).call(this, 'Ajouter une pizza', 'addPizzaPage', ['form']));

    _ingredients.set(_assertThisInitialized(_assertThisInitialized(_this6)), {
      writable: true,
      value: []
    });

    _this6.ingredients = _ingredients2;
    return _this6;
  }

  _createClass(AddPizzaPage, [{
    key: "computeChildren",
    value: function computeChildren() {
      this.children = [new Component('form', null, [new Input('text', 'nom', 'Nom de la pizza'), new Select('base', ['tomate', 'crème']), new Input('number', 'prix_petite', 'Prix petite taille :', {
        step: 0.05,
        min: 0,
        max: 20
      }), new Input('number', 'prix_grande', 'Prix grande taille :', {
        step: 0.05,
        min: 0,
        max: 20
      }), new Select('ingredients', _classPrivateFieldGet(this, _ingredients).map(function (ingredient) {
        return {
          value: ingredient.id,
          label: ingredient.nom
        };
      }), {
        multiple: true
      }), new Component('button', null, ['Ajouter'])])];
    }
  }, {
    key: "ingredients",
    set: function set(value) {
      _classPrivateFieldSet(this, _ingredients, value);

      this.computeChildren();
    }
  }]);

  return AddPizzaPage;
}(Page);

var _ingredients = new WeakMap();

var addPizzaPage = new AddPizzaPage([{
  id: 1,
  nom: 'Mozarella'
}, {
  id: 2,
  nom: 'Jambon'
}, {
  id: 3,
  nom: 'Champignon'
}, {
  id: 4,
  nom: 'Olives'
}]);
PageRenderer.renderPage(addPizzaPage);
//# sourceMappingURL=main.js.map
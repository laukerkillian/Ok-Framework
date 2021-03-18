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
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./framework/Components/ok-tr.ts":
/*!***************************************!*\
  !*** ./framework/Components/ok-tr.ts ***!
  \***************************************/
/*! exports provided: OkTr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkTr", function() { return OkTr; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./framework/global.ts");

class OkTr extends HTMLElement {
    constructor() {
        super();
        this.myApp = Object(_global__WEBPACK_IMPORTED_MODULE_0__["currApp"])();
    }
    connectedCallback() {
        let val = this.innerText;
        let el = this;
        this.myApp.on('ready', () => {
            let newVal = this.myApp.tr(val);
            el.innerText = newVal;
            el.setAttribute("old", val);
        });
    }
}


/***/ }),

/***/ "./framework/Components/second-timer.ts":
/*!**********************************************!*\
  !*** ./framework/Components/second-timer.ts ***!
  \**********************************************/
/*! exports provided: SecondTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondTimer", function() { return SecondTimer; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./framework/global.ts");

class SecondTimer extends HTMLElement {
    constructor() {
        super();
        this.myApp = Object(_global__WEBPACK_IMPORTED_MODULE_0__["currApp"])();
        console.log(Object(_global__WEBPACK_IMPORTED_MODULE_0__["currApp"])());
    }
    connectedCallback() {
        let btn = document.createElement("button");
        btn.innerText = this.myApp.tr("add", "Petit description");
        let number = 0;
        let counter = document.createElement("div");
        counter.innerText = `Compteur : ${number.toString()}`;
        btn.addEventListener('click', () => {
            number += 1;
            counter.innerText = `Compteur : ${number.toString()}`;
        });
        this.appendChild(btn);
        this.appendChild(counter);
    }
}


/***/ }),

/***/ "./framework/Ok-tr-attribute.ts":
/*!**************************************!*\
  !*** ./framework/Ok-tr-attribute.ts ***!
  \**************************************/
/*! exports provided: OkTrAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkTrAttrs", function() { return OkTrAttrs; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./framework/global.ts");

function OkTrAttrs() {
    let myApp = Object(_global__WEBPACK_IMPORTED_MODULE_0__["currApp"])();
    let allEl = document.querySelectorAll("*");
    for (let el of allEl) {
        let attrs = el.getAttributeNames();
        for (let attrName of attrs) {
            let attrValue = el.getAttribute(attrName);
            if (attrValue.match(/^oktr\(.*\)$/)) {
                let val = attrValue.slice(5, (attrValue.length - 1));
                let newVal = myApp.tr(val);
                el.setAttribute(attrName, newVal);
            }
        }
    }
}


/***/ }),

/***/ "./framework/Ok.ts":
/*!*************************!*\
  !*** ./framework/Ok.ts ***!
  \*************************/
/*! exports provided: Ok */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ok", function() { return Ok; });
/* harmony import */ var _stylesheet_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheet.scss */ "./framework/stylesheet.scss");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./framework/global.ts");


class Ok {
    constructor(options) {
        this.m_translate = false;
        this.m_language = navigator.language.toUpperCase() || "EN";
        this.m_translateFile = "";
        this.m_ready = true;
        this.m_translateContent = {};
        Object(_global__WEBPACK_IMPORTED_MODULE_1__["setApp"])(this);
        if (options.translate) {
            this.setTranslate(options.translate);
            this.m_ready = false;
        }
        if (options === null || options === void 0 ? void 0 : options.widget) {
            if (options.widget !== null) {
                this.setWidget(options.widget);
            }
            else {
                throw Error("Widget sent wasn't found ( widget == null )");
            }
        }
        if (options === null || options === void 0 ? void 0 : options.icon) {
            this.setIcon(options.icon);
        }
        else {
            this.setIcon("./assets/icon.png");
        }
        if (options === null || options === void 0 ? void 0 : options.title) {
            this.setTitle(options.title);
        }
        if (options === null || options === void 0 ? void 0 : options.charset) {
            this.setCharset(options.charset);
        }
        if (!document.querySelector("meta[name='viewport']")) {
            let metaViewportEl = document.createElement("meta");
            metaViewportEl.setAttribute("name", "viewport");
            metaViewportEl.setAttribute("content", "width=device-width, initial-scale=1");
            document.head.appendChild(metaViewportEl);
        }
    }
    // EVENT
    on(event, callback) {
        switch (event) {
            case 'ready':
                if (this.ready()) {
                    callback();
                    if (this.m_interval) {
                        clearInterval(this.m_interval);
                        this.m_interval = undefined;
                    }
                }
                else {
                    if (!this.m_interval) {
                        this.m_interval = setInterval(() => this.on('ready', callback), 100);
                    }
                }
                break;
            default:
                throw Error('An unknown event was sent.');
        }
    }
    charset() {
        return this.m_charset;
    }
    setCharset(charset) {
        let charsetEl = document.querySelector("meta[charset]");
        this.m_charset = charset.toUpperCase();
        if (!charsetEl) { // si la balise meta pour définir le charset n'existe pas on la créer
            charsetEl = document.createElement("meta");
            document.head.appendChild(charsetEl);
        }
        charsetEl.setAttribute("charset", this.m_charset); // on lui mets la nouvelle valeur du charset
    }
    // widget element
    menuBar() {
        return this.m_menuBar;
    }
    setMenuBar(menuBar) {
        this.m_menuBar = menuBar;
    }
    // translate system
    translate() {
        return this.m_translate;
    }
    setTranslate(value) {
        this.m_translate = value;
    }
    translateFile() {
        return this.m_translateFile;
    }
    setTranslateFile(translateFile) {
        this.setReady(false);
        fetch(translateFile).then(res => {
            if (res.ok) {
                this.m_translateFile = translateFile;
                let App = this;
                res.text().then(function (text) {
                    App.setTranslateContent(JSON.parse(text));
                    App.setReady(true);
                });
            }
            else {
                throw Error("The translate file wasn't found!");
            }
        });
    }
    translateContent() {
        return this.m_translateContent;
    }
    setTranslateContent(value) {
        this.m_translateContent = value;
    }
    tr(str = "", description = "") {
        if (this.translate()) {
            if (this.translateContent()[str]) {
                return this.translateContent()[str];
            }
            return str;
        }
        else {
            return str;
        }
    }
    // language
    setLanguage(language) {
        if (language.length == 2) {
            this.m_language = language;
        }
    }
    language() {
        return this.m_language;
    }
    // widget management
    widget() {
        return this.m_widget;
    }
    setWidget(widget) {
        this.m_widget = widget;
    }
    // website icon
    icon() {
        return this.m_icon;
    }
    setIcon(icon) {
        fetch(icon).then((res) => {
            if (res.ok) {
                let App = this;
                let iconEl = document.querySelector("link[rel='icon']");
                if (!iconEl) {
                    iconEl = document.createElement("link");
                    iconEl.setAttribute("rel", "icon");
                    document.head.appendChild(iconEl);
                }
                if (icon.match(/\.png$/)) {
                    iconEl.setAttribute("type", "image/png");
                }
                else {
                    iconEl.setAttribute("type", "");
                }
                iconEl.setAttribute("href", icon);
            }
            else {
                throw Error("The icon file wasn't found!");
            }
        });
        this.m_icon = icon;
    }
    // website title
    title() {
        return document.title;
    }
    setTitle(title) {
        document.title = title;
    }
    // private for events
    ready() {
        return this.m_ready;
    }
    setReady(value) {
        this.m_ready = value;
    }
}


/***/ }),

/***/ "./framework/global.ts":
/*!*****************************!*\
  !*** ./framework/global.ts ***!
  \*****************************/
/*! exports provided: setApp, currApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setApp", function() { return setApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currApp", function() { return currApp; });
let m_app;
function setApp(app) {
    m_app = app;
}
function currApp() {
    return m_app;
}


/***/ }),

/***/ "./framework/stylesheet.scss":
/*!***********************************!*\
  !*** ./framework/stylesheet.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_stylesheet_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./stylesheet.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./framework/stylesheet.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_stylesheet_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_stylesheet_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./framework/stylesheet.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./framework/stylesheet.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html, body {\n  background: white;\n  margin: 0px;\n  padding: 0px;\n  width: 100%;\n  height: 100%;\n}\n\n* {\n  box-sizing: border-box;\n}", "",{"version":3,"sources":["webpack://./framework/stylesheet.scss"],"names":[],"mappings":"AAAA;EACE,iBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AACF;;AAEA;EACE,sBAAA;AACF","sourcesContent":["html, body {\r\n  background: white;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./test/stylesheets/stylesheet.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./test/stylesheets/stylesheet.scss ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  background: white;\n}", "",{"version":3,"sources":["webpack://./test/stylesheets/stylesheet.scss"],"names":[],"mappings":"AAAA;EACE,iBAAA;AACF","sourcesContent":["body {\r\n  background: white;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./test/index.ts":
/*!***********************!*\
  !*** ./test/index.ts ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _framework_Ok__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../framework/Ok */ "./framework/Ok.ts");
/* harmony import */ var _stylesheets_stylesheet_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylesheets/stylesheet.scss */ "./test/stylesheets/stylesheet.scss");
/* harmony import */ var _framework_Components_second_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../framework/Components/second-timer */ "./framework/Components/second-timer.ts");
/* harmony import */ var _framework_Components_ok_tr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../framework/Components/ok-tr */ "./framework/Components/ok-tr.ts");
/* harmony import */ var _framework_Ok_tr_attribute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../framework/Ok-tr-attribute */ "./framework/Ok-tr-attribute.ts");





const myApp = new _framework_Ok__WEBPACK_IMPORTED_MODULE_0__["Ok"]({
    translate: true,
    widget: document.getElementById("App"),
    charset: "UTF-8",
    title: "Test OK framework"
});
myApp.setTranslateFile("https://raw.githubusercontent.com/laukerkillian/Ok-Framework/main/test/Languages/TR_" + myApp.language() + ".json");
myApp.on('ready', (arg) => {
    customElements.define("second-timer", _framework_Components_second_timer__WEBPACK_IMPORTED_MODULE_2__["SecondTimer"]);
    customElements.define("ok-tr", _framework_Components_ok_tr__WEBPACK_IMPORTED_MODULE_3__["OkTr"]);
    Object(_framework_Ok_tr_attribute__WEBPACK_IMPORTED_MODULE_4__["OkTrAttrs"])();
});


/***/ }),

/***/ "./test/stylesheets/stylesheet.scss":
/*!******************************************!*\
  !*** ./test/stylesheets/stylesheet.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_stylesheet_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./stylesheet.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./test/stylesheets/stylesheet.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_stylesheet_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_stylesheet_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL0NvbXBvbmVudHMvb2stdHIudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL0NvbXBvbmVudHMvc2Vjb25kLXRpbWVyLnRzIiwid2VicGFjazovLy8uL2ZyYW1ld29yay9Pay10ci1hdHRyaWJ1dGUudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL09rLnRzIiwid2VicGFjazovLy8uL2ZyYW1ld29yay9nbG9iYWwudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL3N0eWxlc2hlZXQuc2Nzcz9iMmM0Iiwid2VicGFjazovLy8uL2ZyYW1ld29yay9zdHlsZXNoZWV0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9zdHlsZXNoZWV0cy9zdHlsZXNoZWV0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi90ZXN0L3N0eWxlc2hlZXRzL3N0eWxlc2hlZXQuc2Nzcz8zMTYxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFBQTtBQUFBO0FBQWtDO0FBRTNCLE1BQU0sSUFBSyxTQUFRLFdBQVc7SUFFakM7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsdURBQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxpQkFBaUI7UUFDYixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3pCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDeEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEMsRUFBRSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7WUFDdEIsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNsQkQ7QUFBQTtBQUFBO0FBQWtDO0FBRTNCLE1BQU0sV0FBWSxTQUFRLFdBQVc7SUFFeEM7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsdURBQU8sRUFBRSxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdURBQU8sRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxpQkFBaUI7UUFDYixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTNDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFFMUQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxPQUFPLENBQUMsU0FBUyxHQUFHLGNBQWMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7UUFFdEQsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDL0IsTUFBTSxJQUFJLENBQUMsQ0FBQztZQUNaLE9BQU8sQ0FBQyxTQUFTLEdBQUcsY0FBYyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztRQUMxRCxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDNUJEO0FBQUE7QUFBQTtBQUFpQztBQUUxQixTQUFTLFNBQVM7SUFDckIsSUFBSSxLQUFLLEdBQUcsdURBQU8sRUFBRSxDQUFDO0lBQ3RCLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQyxLQUFLLElBQUksRUFBRSxJQUFJLEtBQUssRUFBQztRQUNqQixJQUFJLEtBQUssR0FBa0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFbEQsS0FBSyxJQUFJLFFBQVEsSUFBSSxLQUFLLEVBQUU7WUFDeEIsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUUxQyxJQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQUM7Z0JBRS9CLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQixFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBQyxNQUFNLENBQUMsQ0FBQzthQUNwQztTQUNKO0tBQ0o7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDbkJEO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ2U7QUFXbEMsTUFBTSxFQUFFO0lBWVgsWUFBWSxPQUFnQjtRQVhwQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixlQUFVLEdBQVcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUM7UUFDOUQsb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFFN0IsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4Qix1QkFBa0IsR0FBMEIsRUFBRSxDQUFDO1FBT25ELHNEQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDYixJQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDeEI7UUFDRCxJQUFHLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxNQUFNLEVBQUM7WUFDZixJQUFHLE9BQU8sQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO2dCQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNsQztpQkFBSztnQkFDRixNQUFNLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO2FBQzlEO1NBQ0o7UUFDRCxJQUFHLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxJQUFJLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QjthQUFJO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsSUFBRyxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsS0FBSyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7UUFDRCxJQUFHLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxPQUFPLEVBQUU7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEM7UUFHRCxJQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO1lBQ2pELElBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsY0FBYyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDaEQsY0FBYyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUscUNBQXFDLENBQUM7WUFDN0UsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDN0M7SUFDTCxDQUFDO0lBRUQsUUFBUTtJQUVELEVBQUUsQ0FBQyxLQUFhLEVBQUUsUUFBMkI7UUFDaEQsUUFBUSxLQUFLLEVBQUU7WUFDWCxLQUFLLE9BQU87Z0JBQ1IsSUFBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ2IsUUFBUSxFQUFFLENBQUM7b0JBQ1gsSUFBRyxJQUFJLENBQUMsVUFBVSxFQUFDO3dCQUNmLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO3FCQUMvQjtpQkFDSjtxQkFBSTtvQkFDRCxJQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTt3QkFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7cUJBQ3hFO2lCQUNKO2dCQUVELE1BQU07WUFDVjtnQkFDSSxNQUFNLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0wsQ0FBQztJQUVNLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVNLFVBQVUsQ0FBQyxPQUFlO1FBQzdCLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsRUFBRyxFQUFFLHFFQUFxRTtZQUNwRixTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN4QztRQUNELFNBQVMsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLDRDQUE0QztJQUVuRyxDQUFDO0lBRUQsaUJBQWlCO0lBRVYsT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRU0sVUFBVSxDQUFDLE9BQWtCO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO0lBQzdCLENBQUM7SUFFRCxtQkFBbUI7SUFFWixTQUFTO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFTSxZQUFZLENBQUMsS0FBYztRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRU0sYUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDaEMsQ0FBQztJQUVNLGdCQUFnQixDQUFDLGFBQXFCO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM1QixJQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLGVBQWUsR0FBRyxhQUFhLENBQUM7Z0JBQ3JDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQztnQkFDZixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtvQkFDMUIsR0FBRyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDMUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLENBQUM7YUFDTjtpQkFBSTtnQkFDRCxNQUFNLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO2FBQ25EO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sZ0JBQWdCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ25DLENBQUM7SUFFTSxtQkFBbUIsQ0FBQyxLQUFhO1FBQ3BDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUVNLEVBQUUsQ0FBQyxNQUFjLEVBQUUsRUFBRSxjQUFzQixFQUFFO1FBQ2hELElBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ2pCLElBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUM7Z0JBQzVCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkM7WUFDRCxPQUFPLEdBQUcsQ0FBQztTQUNkO2FBQUk7WUFDRCxPQUFPLEdBQUcsQ0FBQztTQUNkO0lBRUwsQ0FBQztJQUVELFdBQVc7SUFFSixXQUFXLENBQUMsUUFBZ0I7UUFDL0IsSUFBRyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFFRCxvQkFBb0I7SUFFYixNQUFNO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxTQUFTLENBQUMsTUFBbUI7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7SUFDM0IsQ0FBQztJQUVELGVBQWU7SUFFUixJQUFJO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxPQUFPLENBQUMsSUFBWTtRQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDckIsSUFBRyxHQUFHLENBQUMsRUFBRSxFQUFFO2dCQUNQLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQztnQkFDZixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQ3hELElBQUcsQ0FBQyxNQUFNLEVBQUU7b0JBQ1IsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3hDLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNsQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDckM7Z0JBQ0QsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNyQixNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUM7aUJBQzNDO3FCQUFLO29CQUNGLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztpQkFDbEM7Z0JBQ0QsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDckM7aUJBQUk7Z0JBQ0QsTUFBTSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQzthQUM5QztRQUNMLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxnQkFBZ0I7SUFFVCxLQUFLO1FBQ1IsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFTSxRQUFRLENBQUMsS0FBYTtRQUN6QixRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQscUJBQXFCO0lBRWIsS0FBSztRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRU8sUUFBUSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDak9EO0FBQUE7QUFBQTtBQUFBLElBQUksS0FBUyxDQUFDO0FBQ1AsU0FBUyxNQUFNLENBQUMsR0FBTztJQUMxQixLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ2hCLENBQUM7QUFDTSxTQUFTLE9BQU87SUFDbkIsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1BEO0FBQUE7QUFBQTtBQUFBO0FBQXlGO0FBQ3pGLFlBQXFJOztBQUVySTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyxpSUFBTzs7OztBQUlULGdNQUFPLGFBQWEsRTs7Ozs7Ozs7Ozs7O0FDWm5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsc0dBQXFDO0FBQy9GO0FBQ0EsOEJBQThCLFFBQVMsZUFBZSxzQkFBc0IsZ0JBQWdCLGlCQUFpQixnQkFBZ0IsaUJBQWlCLEdBQUcsT0FBTywyQkFBMkIsR0FBRyxPQUFPLDRGQUE0RixXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcscUNBQXFDLHdCQUF3QixrQkFBa0IsbUJBQW1CLGtCQUFrQixtQkFBbUIsS0FBSyxXQUFXLDZCQUE2QixLQUFLLG1CQUFtQjtBQUM5aUI7QUFDZSxzRkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUg7QUFDN0I7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHNHQUFxQztBQUMvRjtBQUNBLDhCQUE4QixRQUFTLFNBQVMsc0JBQXNCLEdBQUcsT0FBTyxtR0FBbUcsV0FBVywrQkFBK0Isd0JBQXdCLEtBQUssbUJBQW1CO0FBQzdRO0FBQ2Usc0ZBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixpQ0FBaUMsMkhBQTJIOztBQUU1Siw2QkFBNkIsa0tBQWtLOztBQUUvTCxpREFBaUQsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRCxrSEFBa0g7O0FBRTlaLHNDQUFzQyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxrQkFBa0IsRUFBRSxhQUFhOztBQUVyTCx3Q0FBd0MsZ0ZBQWdGLGVBQWUsZUFBZSxnQkFBZ0Isb0JBQW9CLE1BQU0sMENBQTBDLCtCQUErQixhQUFhLHFCQUFxQixtQ0FBbUMsRUFBRSxFQUFFLGNBQWMsV0FBVyxVQUFVLEVBQUUsVUFBVSxNQUFNLGlEQUFpRCxFQUFFLFVBQVUsa0JBQWtCLEVBQUUsRUFBRSxhQUFhOztBQUV2ZSwrQkFBK0Isb0NBQW9DOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQy9CYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsU0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQzVRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUM7QUFDQztBQUMyQjtBQUNkO0FBQ0c7QUFFdEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxnREFBRSxDQUFDO0lBQ2pCLFNBQVMsRUFBRSxJQUFJO0lBQ2YsTUFBTSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO0lBQ3RDLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLEtBQUssRUFBRSxtQkFBbUI7Q0FDN0IsQ0FBQyxDQUFDO0FBRUgsS0FBSyxDQUFDLGdCQUFnQixDQUFDLHNGQUFzRixHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQztBQUU1SSxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQVMsRUFBRSxFQUFFO0lBRTVCLGNBQWMsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLDhFQUFXLENBQUM7SUFDbEQsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsZ0VBQUksQ0FBQztJQUNwQyw0RUFBUyxFQUFFLENBQUM7QUFFaEIsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNyQkg7QUFBQTtBQUFBO0FBQUE7QUFBNEY7QUFDNUYsWUFBMkk7O0FBRTNJOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLGlJQUFPOzs7O0FBSVQsZ01BQU8sYUFBYSxFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi90ZXN0L2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgT2sgfSBmcm9tICcuLi9Payc7XHJcbmltcG9ydCB7Y3VyckFwcH0gZnJvbSAnLi4vZ2xvYmFsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBPa1RyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgcHJpdmF0ZSBteUFwcDogT2s7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubXlBcHAgPSBjdXJyQXBwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgbGV0IHZhbCA9IHRoaXMuaW5uZXJUZXh0O1xyXG4gICAgICAgIGxldCBlbCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5teUFwcC5vbigncmVhZHknLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuZXdWYWwgPSB0aGlzLm15QXBwLnRyKHZhbCk7XHJcbiAgICAgICAgICAgIGVsLmlubmVyVGV4dCA9IG5ld1ZhbDtcclxuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwib2xkXCIsIHZhbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBPayB9IGZyb20gJy4uL09rJztcclxuaW1wb3J0IHtjdXJyQXBwfSBmcm9tICcuLi9nbG9iYWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlY29uZFRpbWVyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgcHJpdmF0ZSBteUFwcDogT2s7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubXlBcHAgPSBjdXJyQXBwKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY3VyckFwcCgpKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cclxuICAgICAgICBidG4uaW5uZXJUZXh0ID0gdGhpcy5teUFwcC50cihcImFkZFwiLCBcIlBldGl0IGRlc2NyaXB0aW9uXCIpO1xyXG5cclxuICAgICAgICBsZXQgbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgY291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY291bnRlci5pbm5lclRleHQgPSBgQ29tcHRldXIgOiAke251bWJlci50b1N0cmluZygpfWA7XHJcblxyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbnVtYmVyICs9IDE7XHJcbiAgICAgICAgICAgIGNvdW50ZXIuaW5uZXJUZXh0ID0gYENvbXB0ZXVyIDogJHtudW1iZXIudG9TdHJpbmcoKX1gO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKGNvdW50ZXIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtjdXJyQXBwfSBmcm9tICcuL2dsb2JhbCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gT2tUckF0dHJzKCkge1xyXG4gICAgbGV0IG15QXBwID0gY3VyckFwcCgpO1xyXG4gICAgbGV0IGFsbEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipcIik7XHJcbiAgICBmb3IoIGxldCBlbCBvZiBhbGxFbCl7XHJcbiAgICAgICAgbGV0IGF0dHJzOiBBcnJheTxzdHJpbmc+ID0gZWwuZ2V0QXR0cmlidXRlTmFtZXMoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgYXR0ck5hbWUgb2YgYXR0cnMpIHtcclxuICAgICAgICAgICAgbGV0IGF0dHJWYWx1ZSA9IGVsLmdldEF0dHJpYnV0ZShhdHRyTmFtZSk7XHJcblxyXG4gICAgICAgICAgICBpZihhdHRyVmFsdWUubWF0Y2goL15va3RyXFwoLipcXCkkLykpe1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB2YWwgPSBhdHRyVmFsdWUuc2xpY2UoNSwgKGF0dHJWYWx1ZS5sZW5ndGgtMSkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1ZhbCA9IG15QXBwLnRyKHZhbCk7XHJcbiAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsbmV3VmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBcIi4vc3R5bGVzaGVldC5zY3NzXCJcclxuaW1wb3J0IHtzZXRBcHAsIGN1cnJBcHB9IGZyb20gJy4vZ2xvYmFsJztcclxuaW1wb3J0IHtPa01lbnVCYXJ9IGZyb20gXCIuL0NvbXBvbmVudHMvT2tNZW51QmFyXCI7XHJcblxyXG5pbnRlcmZhY2UgT3B0aW9ucyB7XHJcbiAgICB0cmFuc2xhdGU/OmJvb2xlYW47XHJcbiAgICB3aWRnZXQ/OiBIVE1MRWxlbWVudDtcclxuICAgIGljb24/OiBzdHJpbmc7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIGNoYXJzZXQ/OnN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9rIHtcclxuICAgIHByaXZhdGUgbV90cmFuc2xhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgbV9sYW5ndWFnZTogc3RyaW5nID0gbmF2aWdhdG9yLmxhbmd1YWdlLnRvVXBwZXJDYXNlKCkgfHwgXCJFTlwiO1xyXG4gICAgcHJpdmF0ZSBtX3RyYW5zbGF0ZUZpbGU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIG1fd2lkZ2V0OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgbV9yZWFkeTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIG1fdHJhbnNsYXRlQ29udGVudDoge1tpbmRleDogc3RyaW5nXTphbnl9ID0ge307XHJcbiAgICBwcml2YXRlIG1faW50ZXJ2YWw6IGFueTtcclxuICAgIHByaXZhdGUgbV9pY29uOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIG1fY2hhcnNldDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBtX21lbnVCYXI6IE9rTWVudUJhcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBPcHRpb25zKSB7XHJcbiAgICAgICAgc2V0QXBwKHRoaXMpO1xyXG4gICAgICAgIGlmKG9wdGlvbnMudHJhbnNsYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VHJhbnNsYXRlKG9wdGlvbnMudHJhbnNsYXRlKTtcclxuICAgICAgICAgICAgdGhpcy5tX3JlYWR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG9wdGlvbnM/LndpZGdldCl7XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMud2lkZ2V0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFdpZGdldChvcHRpb25zLndpZGdldCk7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiV2lkZ2V0IHNlbnQgd2Fzbid0IGZvdW5kICggd2lkZ2V0ID09IG51bGwgKVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihvcHRpb25zPy5pY29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SWNvbihvcHRpb25zLmljb24pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnNldEljb24oXCIuL2Fzc2V0cy9pY29uLnBuZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYob3B0aW9ucz8udGl0bGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRUaXRsZShvcHRpb25zLnRpdGxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYob3B0aW9ucz8uY2hhcnNldCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldENoYXJzZXQob3B0aW9ucy5jaGFyc2V0KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZighZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1ldGFbbmFtZT0ndmlld3BvcnQnXVwiKSkge1xyXG4gICAgICAgICAgICBsZXQgbWV0YVZpZXdwb3J0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWV0YVwiKTtcclxuICAgICAgICAgICAgbWV0YVZpZXdwb3J0RWwuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInZpZXdwb3J0XCIpO1xyXG4gICAgICAgICAgICBtZXRhVmlld3BvcnRFbC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIsIFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIilcclxuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhVmlld3BvcnRFbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEVWRU5UXHJcblxyXG4gICAgcHVibGljIG9uKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiAoYXJnPzphbnkpID0+IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQpIHtcclxuICAgICAgICAgICAgY2FzZSAncmVhZHknOlxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5yZWFkeSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLm1faW50ZXJ2YWwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMubV9pbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubV9pbnRlcnZhbCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5tX2ludGVydmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubV9pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHRoaXMub24oJ3JlYWR5JywgY2FsbGJhY2spLCAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdBbiB1bmtub3duIGV2ZW50IHdhcyBzZW50LicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhcnNldCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fY2hhcnNldDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q2hhcnNldChjaGFyc2V0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBsZXQgY2hhcnNldEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1ldGFbY2hhcnNldF1cIik7XHJcbiAgICAgICAgdGhpcy5tX2NoYXJzZXQgPSBjaGFyc2V0LnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgaWYoICFjaGFyc2V0RWwgKSB7IC8vIHNpIGxhIGJhbGlzZSBtZXRhIHBvdXIgZMOpZmluaXIgbGUgY2hhcnNldCBuJ2V4aXN0ZSBwYXMgb24gbGEgY3LDqWVyXHJcbiAgICAgICAgICAgIGNoYXJzZXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGNoYXJzZXRFbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoYXJzZXRFbC5zZXRBdHRyaWJ1dGUoXCJjaGFyc2V0XCIsIHRoaXMubV9jaGFyc2V0KTsgLy8gb24gbHVpIG1ldHMgbGEgbm91dmVsbGUgdmFsZXVyIGR1IGNoYXJzZXRcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2lkZ2V0IGVsZW1lbnRcclxuXHJcbiAgICBwdWJsaWMgbWVudUJhcigpOiBPa01lbnVCYXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fbWVudUJhcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TWVudUJhcihtZW51QmFyOiBPa01lbnVCYXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1fbWVudUJhciA9IG1lbnVCYXI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdHJhbnNsYXRlIHN5c3RlbVxyXG5cclxuICAgIHB1YmxpYyB0cmFuc2xhdGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV90cmFuc2xhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRyYW5zbGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubV90cmFuc2xhdGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJhbnNsYXRlRmlsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fdHJhbnNsYXRlRmlsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VHJhbnNsYXRlRmlsZSh0cmFuc2xhdGVGaWxlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldFJlYWR5KGZhbHNlKTtcclxuICAgICAgICBmZXRjaCh0cmFuc2xhdGVGaWxlKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3RyYW5zbGF0ZUZpbGUgPSB0cmFuc2xhdGVGaWxlO1xyXG4gICAgICAgICAgICAgICAgbGV0IEFwcCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICByZXMudGV4dCgpLnRoZW4oZnVuY3Rpb24gKHRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBBcHAuc2V0VHJhbnNsYXRlQ29udGVudChKU09OLnBhcnNlKHRleHQpKTtcclxuICAgICAgICAgICAgICAgICAgICBBcHAuc2V0UmVhZHkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlRoZSB0cmFuc2xhdGUgZmlsZSB3YXNuJ3QgZm91bmQhXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyYW5zbGF0ZUNvbnRlbnQoKToge1tpbmRleDogc3RyaW5nXTphbnl9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3RyYW5zbGF0ZUNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRyYW5zbGF0ZUNvbnRlbnQodmFsdWU6IG9iamVjdCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubV90cmFuc2xhdGVDb250ZW50ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyKHN0cjogc3RyaW5nID0gXCJcIiwgZGVzY3JpcHRpb246IHN0cmluZyA9IFwiXCIpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmKHRoaXMudHJhbnNsYXRlKCkpIHtcclxuICAgICAgICAgICAgaWYodGhpcy50cmFuc2xhdGVDb250ZW50KClbc3RyXSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVDb250ZW50KClbc3RyXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGFuZ3VhZ2VcclxuXHJcbiAgICBwdWJsaWMgc2V0TGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmKGxhbmd1YWdlLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9sYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbGFuZ3VhZ2UoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2xhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHdpZGdldCBtYW5hZ2VtZW50XHJcblxyXG4gICAgcHVibGljIHdpZGdldCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV93aWRnZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFdpZGdldCh3aWRnZXQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tX3dpZGdldCA9IHdpZGdldDtcclxuICAgIH1cclxuXHJcbiAgICAvLyB3ZWJzaXRlIGljb25cclxuXHJcbiAgICBwdWJsaWMgaWNvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1faWNvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SWNvbihpY29uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBmZXRjaChpY29uKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgQXBwID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGxldCBpY29uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibGlua1tyZWw9J2ljb24nXVwiKTtcclxuICAgICAgICAgICAgICAgIGlmKCFpY29uRWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBpY29uRWwuc2V0QXR0cmlidXRlKFwicmVsXCIsXCJpY29uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoaWNvbkVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGljb24ubWF0Y2goL1xcLnBuZyQvKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGljb25FbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaW1hZ2UvcG5nXCIpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbkVsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGljb25FbC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGljb24pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiVGhlIGljb24gZmlsZSB3YXNuJ3QgZm91bmQhXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm1faWNvbiA9IGljb247XHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2Vic2l0ZSB0aXRsZVxyXG5cclxuICAgIHB1YmxpYyB0aXRsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC50aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VGl0bGUodGl0bGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBmb3IgZXZlbnRzXHJcblxyXG4gICAgcHJpdmF0ZSByZWFkeSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3JlYWR5O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0UmVhZHkodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1fcmVhZHkgPSB2YWx1ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IE9rIH0gZnJvbSAnLi9Payc7XHJcbmxldCBtX2FwcDogT2s7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBcHAoYXBwOiBPayk6IHZvaWQge1xyXG4gICAgbV9hcHAgPSBhcHA7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGN1cnJBcHAoKTogT2sge1xyXG4gICAgcmV0dXJuIG1fYXBwO1xyXG59IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzaGVldC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5IHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9mcmFtZXdvcmsvc3R5bGVzaGVldC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHkge1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Rlc3Qvc3R5bGVzaGVldHMvc3R5bGVzaGVldC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBPayB9IGZyb20gJy4uL2ZyYW1ld29yay9Payc7XHJcbmltcG9ydCBcIi4vc3R5bGVzaGVldHMvc3R5bGVzaGVldC5zY3NzXCJcclxuaW1wb3J0IHtTZWNvbmRUaW1lcn0gZnJvbSAnLi4vZnJhbWV3b3JrL0NvbXBvbmVudHMvc2Vjb25kLXRpbWVyJztcclxuaW1wb3J0IHtPa1RyfSBmcm9tIFwiLi4vZnJhbWV3b3JrL0NvbXBvbmVudHMvb2stdHJcIjtcclxuaW1wb3J0IHtPa1RyQXR0cnN9IGZyb20gXCIuLi9mcmFtZXdvcmsvT2stdHItYXR0cmlidXRlXCJcclxuXHJcbmNvbnN0IG15QXBwID0gbmV3IE9rKHtcclxuICAgIHRyYW5zbGF0ZTogdHJ1ZSxcclxuICAgIHdpZGdldDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJBcHBcIiksXHJcbiAgICBjaGFyc2V0OiBcIlVURi04XCIsXHJcbiAgICB0aXRsZTogXCJUZXN0IE9LIGZyYW1ld29ya1wiXHJcbn0pO1xyXG5cclxubXlBcHAuc2V0VHJhbnNsYXRlRmlsZShcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sYXVrZXJraWxsaWFuL09rLUZyYW1ld29yay9tYWluL3Rlc3QvTGFuZ3VhZ2VzL1RSX1wiICsgbXlBcHAubGFuZ3VhZ2UoKSArIFwiLmpzb25cIik7XHJcblxyXG5teUFwcC5vbigncmVhZHknLCAoYXJnPzogYW55KSA9PiB7XHJcblxyXG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic2Vjb25kLXRpbWVyXCIsIFNlY29uZFRpbWVyKVxyXG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib2stdHJcIiwgT2tUcilcclxuICAgIE9rVHJBdHRycygpO1xyXG5cclxufSk7IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzaGVldC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==
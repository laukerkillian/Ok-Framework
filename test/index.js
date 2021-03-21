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
/* harmony import */ var _private_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../private/global */ "./framework/private/global.ts");

class OkTr extends HTMLElement {
    constructor() {
        super();
        this.myApp = Object(_private_global__WEBPACK_IMPORTED_MODULE_0__["currApp"])();
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
/* harmony import */ var _private_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../private/global */ "./framework/private/global.ts");

class SecondTimer extends HTMLElement {
    constructor() {
        super();
        this.myApp = Object(_private_global__WEBPACK_IMPORTED_MODULE_0__["currApp"])();
        console.log(Object(_private_global__WEBPACK_IMPORTED_MODULE_0__["currApp"])());
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
/* harmony import */ var _private_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/global */ "./framework/private/global.ts");

function OkTrAttrs() {
    let myApp = Object(_private_global__WEBPACK_IMPORTED_MODULE_0__["currApp"])();
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
/* harmony import */ var _private_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./private/global */ "./framework/private/global.ts");
/* harmony import */ var _OkRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OkRequest */ "./framework/OkRequest.ts");
/* harmony import */ var _OkUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OkUrl */ "./framework/OkUrl.ts");
/*
 * Author : KILLIAN KERLAU
 * Title : Ok
 * Description : Ok is class which contains all of your app
 */




class Ok {
    constructor(options) {
        this.m_translate = false;
        this.m_language = navigator.language.toUpperCase() || "EN";
        this.m_translateFile = "";
        this.m_ready = true;
        this.m_translateContent = {};
        Object(_private_global__WEBPACK_IMPORTED_MODULE_1__["setApp"])(this);
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
            this.setIcon("https://raw.githubusercontent.com/laukerkillian/Ok-Framework/main/framework/assets/icon.png");
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
        Object(_OkRequest__WEBPACK_IMPORTED_MODULE_2__["OkRequest"])({
            url: Object(_OkUrl__WEBPACK_IMPORTED_MODULE_3__["OkUrl"])(translateFile),
            callback: (res) => {
                if (res.status === 200) {
                    this.m_translateFile = translateFile;
                    this.setTranslateContent(JSON.parse(res.text));
                    this.setReady(true);
                }
                else {
                    throw Error("The translate file wasn't found!");
                }
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

/***/ "./framework/OkEventsEmitter.ts":
/*!**************************************!*\
  !*** ./framework/OkEventsEmitter.ts ***!
  \**************************************/
/*! exports provided: OkEventsEmitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkEventsEmitter", function() { return OkEventsEmitter; });
/*
 * Author : KILLIAN KERLAU
 * Title : OkRequest
 * Description : OkRequest is a function to make http request
 */
class OkEventsEmitter {
    /**
     * This class contains all you need to made event emitter
     */
    constructor() {
        /**
         * @hidden
         * @private
         */
        this.m_events = {}; // contains all events
    }
    /**
     * this method register an event
     * @param event
     * @param listener
     * @public
     */
    on(event, listener) {
        if (!this.m_events[event]) {
            this.m_events[event] = [];
        }
        this.m_events[event].push(listener);
    }
    /**
     * this method remove an event registered if this event doesn't exist that throw an error
     * @param event
     * @param listenerToRemove
     * @public
     */
    removeListener(event, listenerToRemove) {
        if (!this.m_events[event]) {
            throw new Error(`Can't remove a listener. Event "${event}" doesn't exits.`);
        }
        const filterListeners = (listener) => listener !== listenerToRemove;
        this.m_events[event] = this.m_events[event].filter(filterListeners);
    }
    /**
     * This method is used to emit an event if this event doesn't exist that throw an error
     * @param event
     * @param data
     * @protected
     */
    emit(event, data) {
        if (!this.m_events[event]) {
            throw new Error(`Can't emit an event. Event "${event}" doesn't exits.`);
        }
        const fireCallbacks = (callback) => {
            callback(data);
        };
        this.m_events[event].forEach(fireCallbacks);
    }
}


/***/ }),

/***/ "./framework/OkRequest.ts":
/*!********************************!*\
  !*** ./framework/OkRequest.ts ***!
  \********************************/
/*! exports provided: HttpMethod, Events, OkRequest, OkRequestClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpMethod", function() { return HttpMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkRequest", function() { return OkRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkRequestClass", function() { return OkRequestClass; });
/* harmony import */ var _OkEventsEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OkEventsEmitter */ "./framework/OkEventsEmitter.ts");
/* harmony import */ var _OkUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OkUrl */ "./framework/OkUrl.ts");
/*
 * Author : KILLIAN KERLAU
 * Title : OkRequest
 * Description : OkRequest is a function to make http request
 */


var HttpMethod;
(function (HttpMethod) {
    /**
     * The GET method is used to retrieve information from the given server using a given URI. Requests using GET should only retrieve data and should have no other effect on the data.
     */
    HttpMethod["GET"] = "GET";
    /**
     * A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms.
     */
    HttpMethod["POST"] = "POST";
    /**
     * Same as GET, but transfers the status line and header section only.
     */
    HttpMethod["HEAD"] = "HEAD";
    /**
     * Replaces all current representations of the target resource with the uploaded content.
     */
    HttpMethod["PUT"] = "PUT";
    /**
     * Removes all current representations of the target resource given by a URI.
     */
    HttpMethod["DELETE"] = "DELETE";
    /**
     * Establishes a tunnel to the server identified by a given URI.
     */
    HttpMethod["CONNECT"] = "CONNECT";
    /**
     * Describes the communication options for the target resource.
     */
    HttpMethod["OPTIONS"] = "OPTIONS";
    /**
     * Performs a message loop-back test along the path to the target resource.
     */
    HttpMethod["TRACE"] = "TRACE";
})(HttpMethod || (HttpMethod = {}));
var Events;
(function (Events) {
    /**
     * When OkRequest is loaded
     */
    Events["Loaded"] = "Loaded";
    /**
     * during loading
     */
    Events["Loading"] = "Loading";
})(Events || (Events = {}));
/**
 * this method made and return OkRequestClass
 * @param options
 * @constructor
 */
function OkRequest(options) {
    return new OkRequestClass(options);
}
class OkRequestClass extends _OkEventsEmitter__WEBPACK_IMPORTED_MODULE_0__["OkEventsEmitter"] {
    /**
     * This class contains all you need to made http request easily and quickly
     * @param options
     */
    constructor(options) {
        var _a, _b;
        super();
        this.m_async = true;
        this.registerEvents();
        this.m_method = ((_a = options === null || options === void 0 ? void 0 : options.options) === null || _a === void 0 ? void 0 : _a.method) || HttpMethod.GET;
        this.m_async = ((_b = options === null || options === void 0 ? void 0 : options.options) === null || _b === void 0 ? void 0 : _b.async) || true;
        this.m_options = options;
        if (options.callback) {
            this.on(Events.Loaded, options.callback);
        }
        this.makeHttp();
    }
    /**
     * This method make the http request
     * @private
     * @hidden
     */
    makeHttp() {
        const request = new XMLHttpRequest();
        request.open(this.m_method, this.m_options.url.url(), this.m_async);
        request.addEventListener("load", () => {
            if (request.readyState === request.DONE) {
                this.emit(Events.Loaded, {
                    response: request.response,
                    text: request.responseText,
                    status: request.status,
                    responseURL: Object(_OkUrl__WEBPACK_IMPORTED_MODULE_1__["OkUrl"])(request.responseURL)
                });
            }
        });
        request.send();
    }
    /**
     * This method register default events
     * @private
     * @hidden
     */
    registerEvents() {
        this.on(Events.Loaded, () => { });
        this.on(Events.Loading, () => { });
    }
}


/***/ }),

/***/ "./framework/OkUrl.ts":
/*!****************************!*\
  !*** ./framework/OkUrl.ts ***!
  \****************************/
/*! exports provided: OkUrlClass, OkUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkUrlClass", function() { return OkUrlClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkUrl", function() { return OkUrl; });
/* harmony import */ var _OkRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OkRequest */ "./framework/OkRequest.ts");
/* harmony import */ var _OkEventsEmitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OkEventsEmitter */ "./framework/OkEventsEmitter.ts");


class OkUrlClass extends _OkEventsEmitter__WEBPACK_IMPORTED_MODULE_1__["OkEventsEmitter"] {
    /**
     * create Url from string
     * @param url
     */
    constructor(url) {
        super();
        /**
         * @hidden
         * @private
         */
        this.m_url = "";
        this.setUrl(url);
    }
    /**
     * return if file exist or not
     * @param callback
     */
    exist(callback) {
        Object(_OkRequest__WEBPACK_IMPORTED_MODULE_0__["OkRequest"])({
            url: this,
            callback: (res) => {
                callback(res.status == 200);
            }
        });
    }
    /**
     * return url as string
     */
    url() {
        return this.m_url;
    }
    /**
     * set url as string
     * @param url
     */
    setUrl(url) {
        this.m_url = url;
    }
}
/**
 * create and return a OkUrlClass
 * @param url
 */
function OkUrl(url) {
    return new OkUrlClass(url);
}


/***/ }),

/***/ "./framework/private/global.ts":
/*!*************************************!*\
  !*** ./framework/private/global.ts ***!
  \*************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL0NvbXBvbmVudHMvb2stdHIudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL0NvbXBvbmVudHMvc2Vjb25kLXRpbWVyLnRzIiwid2VicGFjazovLy8uL2ZyYW1ld29yay9Pay10ci1hdHRyaWJ1dGUudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL09rLnRzIiwid2VicGFjazovLy8uL2ZyYW1ld29yay9Pa0V2ZW50c0VtaXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL09rUmVxdWVzdC50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvT2tVcmwudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL3ByaXZhdGUvZ2xvYmFsLnRzIiwid2VicGFjazovLy8uL2ZyYW1ld29yay9zdHlsZXNoZWV0LnNjc3M/YjJjNCIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvc3R5bGVzaGVldC5zY3NzIiwid2VicGFjazovLy8uL3Rlc3Qvc3R5bGVzaGVldHMvc3R5bGVzaGVldC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3Rlc3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9zdHlsZXNoZWV0cy9zdHlsZXNoZWV0LnNjc3M/MzE2MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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TSxDQUFDLGNBQWMsRUFBRSw4RUFBVyxDQUFDO0lBQ2xELGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLGdFQUFJLENBQUM7SUFDcEMsNEVBQVMsRUFBRSxDQUFDO0FBRWhCLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDdEJIO0FBQUE7QUFBQTtBQUFBO0FBQTRGO0FBQzVGLFlBQTJJOztBQUUzSTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyxpSUFBTzs7OztBQUlULGdNQUFPLGFBQWEsRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdGVzdC9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IE9rIH0gZnJvbSAnLi4vT2snO1xyXG5pbXBvcnQge2N1cnJBcHB9IGZyb20gJy4uL3ByaXZhdGUvZ2xvYmFsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBPa1RyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgcHJpdmF0ZSBteUFwcDogT2s7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubXlBcHAgPSBjdXJyQXBwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgbGV0IHZhbCA9IHRoaXMuaW5uZXJUZXh0O1xyXG4gICAgICAgIGxldCBlbCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5teUFwcC5vbigncmVhZHknLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuZXdWYWwgPSB0aGlzLm15QXBwLnRyKHZhbCk7XHJcbiAgICAgICAgICAgIGVsLmlubmVyVGV4dCA9IG5ld1ZhbDtcclxuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwib2xkXCIsIHZhbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBPayB9IGZyb20gJy4uL09rJztcclxuaW1wb3J0IHtjdXJyQXBwfSBmcm9tICcuLi9wcml2YXRlL2dsb2JhbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2Vjb25kVGltZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICBwcml2YXRlIG15QXBwOiBPaztcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5teUFwcCA9IGN1cnJBcHAoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyQXBwKCkpXHJcbiAgICB9XHJcblxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblxyXG4gICAgICAgIGJ0bi5pbm5lclRleHQgPSB0aGlzLm15QXBwLnRyKFwiYWRkXCIsIFwiUGV0aXQgZGVzY3JpcHRpb25cIik7XHJcblxyXG4gICAgICAgIGxldCBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb3VudGVyLmlubmVyVGV4dCA9IGBDb21wdGV1ciA6ICR7bnVtYmVyLnRvU3RyaW5nKCl9YDtcclxuXHJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBudW1iZXIgKz0gMTtcclxuICAgICAgICAgICAgY291bnRlci5pbm5lclRleHQgPSBgQ29tcHRldXIgOiAke251bWJlci50b1N0cmluZygpfWA7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoY291bnRlcik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge2N1cnJBcHB9IGZyb20gJy4vcHJpdmF0ZS9nbG9iYWwnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE9rVHJBdHRycygpIHtcclxuICAgIGxldCBteUFwcCA9IGN1cnJBcHAoKTtcclxuICAgIGxldCBhbGxFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpO1xyXG4gICAgZm9yKCBsZXQgZWwgb2YgYWxsRWwpe1xyXG4gICAgICAgIGxldCBhdHRyczogQXJyYXk8c3RyaW5nPiA9IGVsLmdldEF0dHJpYnV0ZU5hbWVzKCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGF0dHJOYW1lIG9mIGF0dHJzKSB7XHJcbiAgICAgICAgICAgIGxldCBhdHRyVmFsdWUgPSBlbC5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpO1xyXG5cclxuICAgICAgICAgICAgaWYoYXR0clZhbHVlLm1hdGNoKC9eb2t0clxcKC4qXFwpJC8pKXtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsID0gYXR0clZhbHVlLnNsaWNlKDUsIChhdHRyVmFsdWUubGVuZ3RoLTEpKTtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdWYWwgPSBteUFwcC50cih2YWwpO1xyXG4gICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHJOYW1lLG5ld1ZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvKlxyXG4gKiBBdXRob3IgOiBLSUxMSUFOIEtFUkxBVVxyXG4gKiBUaXRsZSA6IE9rXHJcbiAqIERlc2NyaXB0aW9uIDogT2sgaXMgY2xhc3Mgd2hpY2ggY29udGFpbnMgYWxsIG9mIHlvdXIgYXBwXHJcbiAqL1xyXG5cclxuXHJcbmltcG9ydCBcIi4vc3R5bGVzaGVldC5zY3NzXCJcclxuaW1wb3J0IHtzZXRBcHAsIGN1cnJBcHB9IGZyb20gJy4vcHJpdmF0ZS9nbG9iYWwnO1xyXG5pbXBvcnQge09rUmVxdWVzdH0gZnJvbSBcIi4vT2tSZXF1ZXN0XCI7XHJcbmltcG9ydCB7T2tVcmx9IGZyb20gXCIuL09rVXJsXCI7XHJcblxyXG5pbnRlcmZhY2UgT3B0aW9ucyB7XHJcbiAgICB0cmFuc2xhdGU/OmJvb2xlYW47XHJcbiAgICB3aWRnZXQ/OiBIVE1MRWxlbWVudDtcclxuICAgIGljb24/OiBzdHJpbmc7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIGNoYXJzZXQ/OnN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9rIHtcclxuICAgIHByaXZhdGUgbV90cmFuc2xhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgbV9sYW5ndWFnZTogc3RyaW5nID0gbmF2aWdhdG9yLmxhbmd1YWdlLnRvVXBwZXJDYXNlKCkgfHwgXCJFTlwiO1xyXG4gICAgcHJpdmF0ZSBtX3RyYW5zbGF0ZUZpbGU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIG1fd2lkZ2V0OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgbV9yZWFkeTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIG1fdHJhbnNsYXRlQ29udGVudDoge1tpbmRleDogc3RyaW5nXTphbnl9ID0ge307XHJcbiAgICBwcml2YXRlIG1faW50ZXJ2YWw6IGFueTtcclxuICAgIHByaXZhdGUgbV9pY29uOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIG1fY2hhcnNldDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE9wdGlvbnMpIHtcclxuICAgICAgICBzZXRBcHAodGhpcyk7XHJcbiAgICAgICAgaWYob3B0aW9ucy50cmFuc2xhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRUcmFuc2xhdGUob3B0aW9ucy50cmFuc2xhdGUpO1xyXG4gICAgICAgICAgICB0aGlzLm1fcmVhZHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYob3B0aW9ucz8ud2lkZ2V0KXtcclxuICAgICAgICAgICAgaWYob3B0aW9ucy53aWRnZXQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0V2lkZ2V0KG9wdGlvbnMud2lkZ2V0KTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJXaWRnZXQgc2VudCB3YXNuJ3QgZm91bmQgKCB3aWRnZXQgPT0gbnVsbCApXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG9wdGlvbnM/Lmljb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRJY29uKG9wdGlvbnMuaWNvbik7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SWNvbihcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sYXVrZXJraWxsaWFuL09rLUZyYW1ld29yay9tYWluL2ZyYW1ld29yay9hc3NldHMvaWNvbi5wbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG9wdGlvbnM/LnRpdGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGl0bGUob3B0aW9ucy50aXRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG9wdGlvbnM/LmNoYXJzZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDaGFyc2V0KG9wdGlvbnMuY2hhcnNldCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtZXRhW25hbWU9J3ZpZXdwb3J0J11cIikpIHtcclxuICAgICAgICAgICAgbGV0IG1ldGFWaWV3cG9ydEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1ldGFcIik7XHJcbiAgICAgICAgICAgIG1ldGFWaWV3cG9ydEVsLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ2aWV3cG9ydFwiKTtcclxuICAgICAgICAgICAgbWV0YVZpZXdwb3J0RWwuc2V0QXR0cmlidXRlKFwiY29udGVudFwiLCBcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIpXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YVZpZXdwb3J0RWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBFVkVOVFxyXG5cclxuICAgIHB1YmxpYyBvbihldmVudDogc3RyaW5nLCBjYWxsYmFjazogKGFyZz86YW55KSA9PiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JlYWR5JzpcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMucmVhZHkoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5tX2ludGVydmFsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLm1faW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1faW50ZXJ2YWwgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMubV9pbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLm9uKCdyZWFkeScsIGNhbGxiYWNrKSwgMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignQW4gdW5rbm93biBldmVudCB3YXMgc2VudC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYXJzZXQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2NoYXJzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldENoYXJzZXQoY2hhcnNldDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGNoYXJzZXRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtZXRhW2NoYXJzZXRdXCIpO1xyXG4gICAgICAgIHRoaXMubV9jaGFyc2V0ID0gY2hhcnNldC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIGlmKCAhY2hhcnNldEVsICkgeyAvLyBzaSBsYSBiYWxpc2UgbWV0YSBwb3VyIGTDqWZpbmlyIGxlIGNoYXJzZXQgbidleGlzdGUgcGFzIG9uIGxhIGNyw6llclxyXG4gICAgICAgICAgICBjaGFyc2V0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWV0YVwiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChjaGFyc2V0RWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGFyc2V0RWwuc2V0QXR0cmlidXRlKFwiY2hhcnNldFwiLCB0aGlzLm1fY2hhcnNldCk7IC8vIG9uIGx1aSBtZXRzIGxhIG5vdXZlbGxlIHZhbGV1ciBkdSBjaGFyc2V0XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHRyYW5zbGF0ZSBzeXN0ZW1cclxuXHJcbiAgICBwdWJsaWMgdHJhbnNsYXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fdHJhbnNsYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRUcmFuc2xhdGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1fdHJhbnNsYXRlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyYW5zbGF0ZUZpbGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3RyYW5zbGF0ZUZpbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRyYW5zbGF0ZUZpbGUodHJhbnNsYXRlRmlsZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRSZWFkeShmYWxzZSk7XHJcbiAgICAgICAgT2tSZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiBPa1VybCh0cmFuc2xhdGVGaWxlKSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1fdHJhbnNsYXRlRmlsZSA9IHRyYW5zbGF0ZUZpbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRUcmFuc2xhdGVDb250ZW50KEpTT04ucGFyc2UocmVzLnRleHQpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFJlYWR5KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJUaGUgdHJhbnNsYXRlIGZpbGUgd2Fzbid0IGZvdW5kIVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyYW5zbGF0ZUNvbnRlbnQoKToge1tpbmRleDogc3RyaW5nXTphbnl9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3RyYW5zbGF0ZUNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRyYW5zbGF0ZUNvbnRlbnQodmFsdWU6IG9iamVjdCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubV90cmFuc2xhdGVDb250ZW50ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyKHN0cjogc3RyaW5nID0gXCJcIiwgZGVzY3JpcHRpb246IHN0cmluZyA9IFwiXCIpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmKHRoaXMudHJhbnNsYXRlKCkpIHtcclxuICAgICAgICAgICAgaWYodGhpcy50cmFuc2xhdGVDb250ZW50KClbc3RyXSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVDb250ZW50KClbc3RyXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGFuZ3VhZ2VcclxuXHJcbiAgICBwdWJsaWMgc2V0TGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmKGxhbmd1YWdlLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9sYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbGFuZ3VhZ2UoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2xhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHdpZGdldCBtYW5hZ2VtZW50XHJcblxyXG4gICAgcHVibGljIHdpZGdldCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV93aWRnZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFdpZGdldCh3aWRnZXQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tX3dpZGdldCA9IHdpZGdldDtcclxuICAgIH1cclxuXHJcbiAgICAvLyB3ZWJzaXRlIGljb25cclxuXHJcbiAgICBwdWJsaWMgaWNvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1faWNvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SWNvbihpY29uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBmZXRjaChpY29uKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgQXBwID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGxldCBpY29uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibGlua1tyZWw9J2ljb24nXVwiKTtcclxuICAgICAgICAgICAgICAgIGlmKCFpY29uRWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBpY29uRWwuc2V0QXR0cmlidXRlKFwicmVsXCIsXCJpY29uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoaWNvbkVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGljb24ubWF0Y2goL1xcLnBuZyQvKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGljb25FbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaW1hZ2UvcG5nXCIpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbkVsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGljb25FbC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGljb24pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiVGhlIGljb24gZmlsZSB3YXNuJ3QgZm91bmQhXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm1faWNvbiA9IGljb247XHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2Vic2l0ZSB0aXRsZVxyXG5cclxuICAgIHB1YmxpYyB0aXRsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC50aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VGl0bGUodGl0bGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBmb3IgZXZlbnRzXHJcblxyXG4gICAgcHJpdmF0ZSByZWFkeSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3JlYWR5O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0UmVhZHkodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1fcmVhZHkgPSB2YWx1ZTtcclxuICAgIH1cclxufSIsIi8qXHJcbiAqIEF1dGhvciA6IEtJTExJQU4gS0VSTEFVXHJcbiAqIFRpdGxlIDogT2tSZXF1ZXN0XHJcbiAqIERlc2NyaXB0aW9uIDogT2tSZXF1ZXN0IGlzIGEgZnVuY3Rpb24gdG8gbWFrZSBodHRwIHJlcXVlc3RcclxuICovXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE9rRXZlbnRzRW1pdHRlciB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1fZXZlbnRzOiB7W2luZGV4OiBzdHJpbmddOmFueX0gPSB7fTsgLy8gY29udGFpbnMgYWxsIGV2ZW50c1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGNsYXNzIGNvbnRhaW5zIGFsbCB5b3UgbmVlZCB0byBtYWRlIGV2ZW50IGVtaXR0ZXJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdGhpcyBtZXRob2QgcmVnaXN0ZXIgYW4gZXZlbnRcclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbihldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogKGFyZz86YW55KSA9PiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMubV9ldmVudHNbZXZlbnRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9ldmVudHNbZXZlbnRdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubV9ldmVudHNbZXZlbnRdLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdGhpcyBtZXRob2QgcmVtb3ZlIGFuIGV2ZW50IHJlZ2lzdGVyZWQgaWYgdGhpcyBldmVudCBkb2Vzbid0IGV4aXN0IHRoYXQgdGhyb3cgYW4gZXJyb3JcclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICogQHBhcmFtIGxpc3RlbmVyVG9SZW1vdmVcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZUxpc3RlbmVyKGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyVG9SZW1vdmU6IChhcmc/OmFueSkgPT4gYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1fZXZlbnRzW2V2ZW50XSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IHJlbW92ZSBhIGxpc3RlbmVyLiBFdmVudCBcIiR7ZXZlbnR9XCIgZG9lc24ndCBleGl0cy5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZpbHRlckxpc3RlbmVycyA9IChsaXN0ZW5lcjogKGFyZz86YW55KSA9PiBhbnkpID0+IGxpc3RlbmVyICE9PSBsaXN0ZW5lclRvUmVtb3ZlO1xyXG5cclxuICAgICAgICB0aGlzLm1fZXZlbnRzW2V2ZW50XSA9IHRoaXMubV9ldmVudHNbZXZlbnRdLmZpbHRlcihmaWx0ZXJMaXN0ZW5lcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBlbWl0IGFuIGV2ZW50IGlmIHRoaXMgZXZlbnQgZG9lc24ndCBleGlzdCB0aGF0IHRocm93IGFuIGVycm9yXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqIEBwYXJhbSBkYXRhXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBlbWl0KGV2ZW50OiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgICAgIGlmICghdGhpcy5tX2V2ZW50c1tldmVudF0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBlbWl0IGFuIGV2ZW50LiBFdmVudCBcIiR7ZXZlbnR9XCIgZG9lc24ndCBleGl0cy5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZpcmVDYWxsYmFja3MgPSAoY2FsbGJhY2s6IChhcmc/OmFueSkgPT4gYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubV9ldmVudHNbZXZlbnRdLmZvckVhY2goZmlyZUNhbGxiYWNrcyk7XHJcbiAgICB9XHJcbn0iLCIvKlxyXG4gKiBBdXRob3IgOiBLSUxMSUFOIEtFUkxBVVxyXG4gKiBUaXRsZSA6IE9rUmVxdWVzdFxyXG4gKiBEZXNjcmlwdGlvbiA6IE9rUmVxdWVzdCBpcyBhIGZ1bmN0aW9uIHRvIG1ha2UgaHR0cCByZXF1ZXN0XHJcbiAqL1xyXG5cclxuaW1wb3J0IHtPa0V2ZW50c0VtaXR0ZXJ9IGZyb20gXCIuL09rRXZlbnRzRW1pdHRlclwiO1xyXG5pbXBvcnQge09rVXJsLCBPa1VybENsYXNzfSBmcm9tIFwiLi9Pa1VybFwiO1xyXG5cclxuZXhwb3J0IGVudW0gSHR0cE1ldGhvZCB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBHRVQgbWV0aG9kIGlzIHVzZWQgdG8gcmV0cmlldmUgaW5mb3JtYXRpb24gZnJvbSB0aGUgZ2l2ZW4gc2VydmVyIHVzaW5nIGEgZ2l2ZW4gVVJJLiBSZXF1ZXN0cyB1c2luZyBHRVQgc2hvdWxkIG9ubHkgcmV0cmlldmUgZGF0YSBhbmQgc2hvdWxkIGhhdmUgbm8gb3RoZXIgZWZmZWN0IG9uIHRoZSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBHRVQgPSBcIkdFVFwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiBBIFBPU1QgcmVxdWVzdCBpcyB1c2VkIHRvIHNlbmQgZGF0YSB0byB0aGUgc2VydmVyLCBmb3IgZXhhbXBsZSwgY3VzdG9tZXIgaW5mb3JtYXRpb24sIGZpbGUgdXBsb2FkLCBldGMuIHVzaW5nIEhUTUwgZm9ybXMuXHJcbiAgICAgKi9cclxuICAgIFBPU1QgPVwiUE9TVFwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiBTYW1lIGFzIEdFVCwgYnV0IHRyYW5zZmVycyB0aGUgc3RhdHVzIGxpbmUgYW5kIGhlYWRlciBzZWN0aW9uIG9ubHkuXHJcbiAgICAgKi9cclxuICAgIEhFQUQgPVwiSEVBRFwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXBsYWNlcyBhbGwgY3VycmVudCByZXByZXNlbnRhdGlvbnMgb2YgdGhlIHRhcmdldCByZXNvdXJjZSB3aXRoIHRoZSB1cGxvYWRlZCBjb250ZW50LlxyXG4gICAgICovXHJcbiAgICBQVVQgPVwiUFVUXCIsXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYWxsIGN1cnJlbnQgcmVwcmVzZW50YXRpb25zIG9mIHRoZSB0YXJnZXQgcmVzb3VyY2UgZ2l2ZW4gYnkgYSBVUkkuXHJcbiAgICAgKi9cclxuICAgIERFTEVURSA9IFwiREVMRVRFXCIsXHJcbiAgICAvKipcclxuICAgICAqIEVzdGFibGlzaGVzIGEgdHVubmVsIHRvIHRoZSBzZXJ2ZXIgaWRlbnRpZmllZCBieSBhIGdpdmVuIFVSSS5cclxuICAgICAqL1xyXG4gICAgQ09OTkVDVCA9IFwiQ09OTkVDVFwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXNjcmliZXMgdGhlIGNvbW11bmljYXRpb24gb3B0aW9ucyBmb3IgdGhlIHRhcmdldCByZXNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgT1BUSU9OUyA9IFwiT1BUSU9OU1wiLFxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtcyBhIG1lc3NhZ2UgbG9vcC1iYWNrIHRlc3QgYWxvbmcgdGhlIHBhdGggdG8gdGhlIHRhcmdldCByZXNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgVFJBQ0UgPSBcIlRSQUNFXCJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPcHRpb25zWE1MIHtcclxuICAgIC8qKlxyXG4gICAgICogbWV0aG9kIDogZ2V0LCBwb3N0LCAuLi5cclxuICAgICAqL1xyXG4gICAgbWV0aG9kPzogSHR0cE1ldGhvZCxcclxuICAgIC8qKlxyXG4gICAgICogYXN5bmMgcnVuIGFzIGFzeW5jIG9yIHN5bmNcclxuICAgICAqL1xyXG4gICAgYXN5bmM/OiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9ucyB7XHJcbiAgICAvKipcclxuICAgICAqIHVybCB0byB0aGUgZG9jdW1lbnRcclxuICAgICAqL1xyXG4gICAgdXJsOiBPa1VybENsYXNzO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPcHRpb25zWE1MIDogbWV0aG9kLCBhc3luY1xyXG4gICAgICovXHJcbiAgICBvcHRpb25zPzpPcHRpb25zWE1MO1xyXG4gICAgLyoqXHJcbiAgICAgKiBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIGFyZ1xyXG4gICAgICovXHJcbiAgICBjYWxsYmFjaz86IChhcmc/OlJlc3BvbnNlKSA9PiBhbnlcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZSB7XHJcbiAgICAvKipcclxuICAgICAqIFJlc3BvbnNlIHR5cGVcclxuICAgICAqL1xyXG4gICAgcmVzcG9uc2U6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogcmVzcG9uc2UgdGV4dFxyXG4gICAgICovXHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIHJlc3BvbnNlIHN0YXR1ZVxyXG4gICAgICovXHJcbiAgICBzdGF0dXM6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogcmVzcG9uc2UgdXJsXHJcbiAgICAgKi9cclxuICAgIHJlc3BvbnNlVXJsOiBPa1VybENsYXNzO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBFdmVudHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIE9rUmVxdWVzdCBpcyBsb2FkZWRcclxuICAgICAqL1xyXG4gICAgTG9hZGVkPSBcIkxvYWRlZFwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiBkdXJpbmcgbG9hZGluZ1xyXG4gICAgICovXHJcbiAgICBMb2FkaW5nPVwiTG9hZGluZ1wiLFxyXG59XHJcblxyXG4vKipcclxuICogdGhpcyBtZXRob2QgbWFkZSBhbmQgcmV0dXJuIE9rUmVxdWVzdENsYXNzXHJcbiAqIEBwYXJhbSBvcHRpb25zXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIE9rUmVxdWVzdChvcHRpb25zOiBPcHRpb25zKTogT2tSZXF1ZXN0Q2xhc3Ncclxue1xyXG4gICAgcmV0dXJuIG5ldyBPa1JlcXVlc3RDbGFzcyhvcHRpb25zKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9rUmVxdWVzdENsYXNzIGV4dGVuZHMgT2tFdmVudHNFbWl0dGVyIHtcclxuXHJcbiAgICBwcml2YXRlIG1fbWV0aG9kOiBIdHRwTWV0aG9kO1xyXG4gICAgcHJpdmF0ZSBtX2FzeW5jOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgbV9vcHRpb25zOiBPcHRpb25zO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBjbGFzcyBjb250YWlucyBhbGwgeW91IG5lZWQgdG8gbWFkZSBodHRwIHJlcXVlc3QgZWFzaWx5IGFuZCBxdWlja2x5XHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBPcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLm1fbWV0aG9kID0gb3B0aW9ucz8ub3B0aW9ucz8ubWV0aG9kIHx8IEh0dHBNZXRob2QuR0VUO1xyXG4gICAgICAgIHRoaXMubV9hc3luYyA9IG9wdGlvbnM/Lm9wdGlvbnM/LmFzeW5jIHx8IHRydWU7XHJcbiAgICAgICAgdGhpcy5tX29wdGlvbnMgPSBvcHRpb25zO1xyXG5cclxuICAgICAgICBpZihvcHRpb25zLmNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMub24oRXZlbnRzLkxvYWRlZCwgb3B0aW9ucy5jYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1ha2VIdHRwKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgbWFrZSB0aGUgaHR0cCByZXF1ZXN0XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1ha2VIdHRwKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICByZXF1ZXN0Lm9wZW4odGhpcy5tX21ldGhvZCwgdGhpcy5tX29wdGlvbnMudXJsLnVybCgpLCB0aGlzLm1fYXN5bmMpO1xyXG5cclxuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gcmVxdWVzdC5ET05FKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KEV2ZW50cy5Mb2FkZWQsIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZTogcmVxdWVzdC5yZXNwb25zZSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXF1ZXN0LnJlc3BvbnNlVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVVJMOiBPa1VybChyZXF1ZXN0LnJlc3BvbnNlVVJMKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVnaXN0ZXIgZGVmYXVsdCBldmVudHNcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJFdmVudHMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbihFdmVudHMuTG9hZGVkLCAoKSA9PiB7fSlcclxuICAgICAgICB0aGlzLm9uKEV2ZW50cy5Mb2FkaW5nLCAoKSA9PiB7fSlcclxuICAgIH1cclxufSIsImltcG9ydCB7T2tSZXF1ZXN0fSBmcm9tIFwiLi9Pa1JlcXVlc3RcIjtcclxuaW1wb3J0IHtPa0V2ZW50c0VtaXR0ZXJ9IGZyb20gXCIuL09rRXZlbnRzRW1pdHRlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9rVXJsQ2xhc3MgZXh0ZW5kcyBPa0V2ZW50c0VtaXR0ZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1fdXJsOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIFVybCBmcm9tIHN0cmluZ1xyXG4gICAgICogQHBhcmFtIHVybFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih1cmw6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zZXRVcmwodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybiBpZiBmaWxlIGV4aXN0IG9yIG5vdFxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGlzdChjYWxsYmFjazogKGFyZz86Ym9vbGVhbik9PmFueSkge1xyXG4gICAgICAgIE9rUmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogdGhpcyxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlcy5zdGF0dXMgPT0gMjAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybiB1cmwgYXMgc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1cmwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3VybDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCB1cmwgYXMgc3RyaW5nXHJcbiAgICAgKiBAcGFyYW0gdXJsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRVcmwodXJsOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1fdXJsID0gdXJsO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogY3JlYXRlIGFuZCByZXR1cm4gYSBPa1VybENsYXNzXHJcbiAqIEBwYXJhbSB1cmxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBPa1VybCh1cmw6IHN0cmluZyk6IE9rVXJsQ2xhc3Mge1xyXG4gICAgcmV0dXJuIG5ldyBPa1VybENsYXNzKHVybCk7XHJcbn0iLCJpbXBvcnQgeyBPayB9IGZyb20gJy4uL09rJztcclxubGV0IG1fYXBwOiBPaztcclxuZXhwb3J0IGZ1bmN0aW9uIHNldEFwcChhcHA6IE9rKTogdm9pZCB7XHJcbiAgICBtX2FwcCA9IGFwcDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3VyckFwcCgpOiBPayB7XHJcbiAgICByZXR1cm4gbV9hcHA7XHJcbn0iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXNoZWV0LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHkge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2ZyYW1ld29yay9zdHlsZXNoZWV0LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbiAgcGFkZGluZzogMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vdGVzdC9zdHlsZXNoZWV0cy9zdHlsZXNoZWV0LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7IE9rIH0gZnJvbSAnLi4vZnJhbWV3b3JrL09rJztcclxuaW1wb3J0IFwiLi9zdHlsZXNoZWV0cy9zdHlsZXNoZWV0LnNjc3NcIlxyXG5pbXBvcnQge1NlY29uZFRpbWVyfSBmcm9tICcuLi9mcmFtZXdvcmsvQ29tcG9uZW50cy9zZWNvbmQtdGltZXInO1xyXG5pbXBvcnQge09rVHJ9IGZyb20gXCIuLi9mcmFtZXdvcmsvQ29tcG9uZW50cy9vay10clwiO1xyXG5pbXBvcnQge09rVHJBdHRyc30gZnJvbSBcIi4uL2ZyYW1ld29yay9Pay10ci1hdHRyaWJ1dGVcIjtcclxuaW1wb3J0IHtPa1VybH0gZnJvbSBcIi4uL2ZyYW1ld29yay9Pa1VybFwiO1xyXG5cclxuY29uc3QgbXlBcHAgPSBuZXcgT2soe1xyXG4gICAgdHJhbnNsYXRlOiB0cnVlLFxyXG4gICAgd2lkZ2V0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFwcFwiKSxcclxuICAgIGNoYXJzZXQ6IFwiVVRGLThcIixcclxuICAgIHRpdGxlOiBcIlRlc3QgT0sgZnJhbWV3b3JrXCJcclxufSk7XHJcblxyXG5teUFwcC5zZXRUcmFuc2xhdGVGaWxlKFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2xhdWtlcmtpbGxpYW4vT2stRnJhbWV3b3JrL21haW4vdGVzdC9MYW5ndWFnZXMvVFJfXCIgKyBteUFwcC5sYW5ndWFnZSgpICsgXCIuanNvblwiKTtcclxuXHJcbm15QXBwLm9uKCdyZWFkeScsIChhcmc/OiBhbnkpID0+IHtcclxuXHJcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzZWNvbmQtdGltZXJcIiwgU2Vjb25kVGltZXIpXHJcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvay10clwiLCBPa1RyKVxyXG4gICAgT2tUckF0dHJzKCk7XHJcblxyXG59KTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXNoZWV0LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9
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

/***/ "./framework/Components/ok-components.ts":
/*!***********************************************!*\
  !*** ./framework/Components/ok-components.ts ***!
  \***********************************************/
/*! exports provided: OkTr, OkWidget, OkDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ok_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ok-dialog */ "./framework/Components/ok-dialog.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OkDialog", function() { return _ok_dialog__WEBPACK_IMPORTED_MODULE_0__["OkDialog"]; });

/* harmony import */ var _ok_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ok-widget */ "./framework/Components/ok-widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OkWidget", function() { return _ok_widget__WEBPACK_IMPORTED_MODULE_1__["OkWidget"]; });

/* harmony import */ var _ok_tr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ok-tr */ "./framework/Components/ok-tr.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OkTr", function() { return _ok_tr__WEBPACK_IMPORTED_MODULE_2__["OkTr"]; });







/***/ }),

/***/ "./framework/Components/ok-dialog.ts":
/*!*******************************************!*\
  !*** ./framework/Components/ok-dialog.ts ***!
  \*******************************************/
/*! exports provided: OkDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkDialog", function() { return OkDialog; });
/* harmony import */ var _ok_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ok-widget */ "./framework/Components/ok-widget.ts");
/* harmony import */ var _OkSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OkSize */ "./framework/OkSize.ts");


class OkDialog extends _ok_widget__WEBPACK_IMPORTED_MODULE_0__["OkWidget"] {
    /**
     * OkDialog enable to create a small window inside the navigator's window
     * @category Components
     * @param options
     */
    constructor(options) {
        var _a, _b;
        super();
        /**
         * m_size contains Dialog size
         * @hidden
         * @private
         */
        this.m_size = new _OkSize__WEBPACK_IMPORTED_MODULE_1__["OkSize"]({ width: 300, height: 200 });
        if (options === null || options === void 0 ? void 0 : options.size) {
            if (options.size instanceof _OkSize__WEBPACK_IMPORTED_MODULE_1__["OkSize"]) {
                this.m_size = options.size;
            }
            else {
                if ((_a = options.size) === null || _a === void 0 ? void 0 : _a.width) {
                    this.m_size.setWidth(options.size.width);
                }
                if ((_b = options.size) === null || _b === void 0 ? void 0 : _b.height) {
                    this.m_size.setHeight(options.size.height);
                }
            }
        }
    }
    /**
     * size function return you the current size of the OkDialog
     */
    size() {
        return this.m_size;
    }
    /**
     * setSize function enable you to edit the size of the OkDialog
     * @param size
     */
    setSize(size) {
        this.m_size = size;
    }
}



/***/ }),

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
/* harmony import */ var _ok_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ok-widget */ "./framework/Components/ok-widget.ts");


class OkTr extends _ok_widget__WEBPACK_IMPORTED_MODULE_1__["OkWidget"] {
    /**
     * Translate the text defined in <ok-tr>TEXT</ok-tr>
     * @category Components
     */
    constructor() {
        super();
        this.App = Object(_private_global__WEBPACK_IMPORTED_MODULE_0__["currApp"])();
    }
    /**
     * @private
     * @hidden
     */
    connectedCallback() {
        let el = this;
        this.m_text = this.innerText;
        this.App.translator().on("translated", () => {
            el.innerText = this.App.translator().translate(this.m_text);
        });
    }
}



/***/ }),

/***/ "./framework/Components/ok-widget.ts":
/*!*******************************************!*\
  !*** ./framework/Components/ok-widget.ts ***!
  \*******************************************/
/*! exports provided: OkWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkWidget", function() { return OkWidget; });
class OkWidget extends HTMLElement {
    /**
     * @category Components
     */
    constructor() {
        super();
    }
}



/***/ }),

/***/ "./framework/Ok.ts":
/*!*************************!*\
  !*** ./framework/Ok.ts ***!
  \*************************/
/*! exports provided: Ok, OkImage, OkUrl, currApp, OkEventsEmitter, OkWait */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ok", function() { return Ok; });
/* harmony import */ var _OkImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OkImage */ "./framework/OkImage.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OkImage", function() { return _OkImage__WEBPACK_IMPORTED_MODULE_0__["OkImage"]; });

/* harmony import */ var _OkTranslator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OkTranslator */ "./framework/OkTranslator.ts");
/* harmony import */ var _OkLanguage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OkLanguage */ "./framework/OkLanguage.ts");
/* harmony import */ var _private_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./private/global */ "./framework/private/global.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "currApp", function() { return _private_global__WEBPACK_IMPORTED_MODULE_3__["currApp"]; });

/* harmony import */ var _OkUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OkUrl */ "./framework/OkUrl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OkUrl", function() { return _OkUrl__WEBPACK_IMPORTED_MODULE_4__["OkUrl"]; });

/* harmony import */ var _OkEventsEmitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OkEventsEmitter */ "./framework/OkEventsEmitter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OkEventsEmitter", function() { return _OkEventsEmitter__WEBPACK_IMPORTED_MODULE_5__["OkEventsEmitter"]; });

/* harmony import */ var _framework_OkWait__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../framework/OkWait */ "./framework/OkWait.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OkWait", function() { return _framework_OkWait__WEBPACK_IMPORTED_MODULE_6__["OkWait"]; });








class Ok {
    constructor(options) {
        this.m_title = "";
        this.m_icon = new _OkImage__WEBPACK_IMPORTED_MODULE_0__["OkImage"]({ url: new _OkUrl__WEBPACK_IMPORTED_MODULE_4__["OkUrl"]("") });
        this.m_translator = new _OkTranslator__WEBPACK_IMPORTED_MODULE_1__["OkTranslator"]();
        this.m_language = new _OkLanguage__WEBPACK_IMPORTED_MODULE_2__["OkLanguage"]();
        Object(_private_global__WEBPACK_IMPORTED_MODULE_3__["setApp"])(this);
        this.setConfiguration(options);
    }
    setConfiguration(options) {
        if (options.urlTranslator) {
            this.m_translator.setUrl(options.urlTranslator);
        }
    }
    title() {
        return this.m_title;
    }
    setTitle(title) {
        this.m_title = title;
    }
    icon() {
        return this.m_icon;
    }
    setIcon(icon) {
        const content = icon.getImage();
        this.m_icon = icon;
    }
    translator() {
        return this.m_translator;
    }
    language() {
        return this.m_language;
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

/***/ "./framework/OkImage.ts":
/*!******************************!*\
  !*** ./framework/OkImage.ts ***!
  \******************************/
/*! exports provided: OkImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkImage", function() { return OkImage; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class OkImage {
    constructor(options) {
        this.setUrl(options.url);
    }
    url() {
        return this.m_url;
    }
    setUrl(url) {
        this.m_url = url;
    }
    getImage() {
        return new Promise(function (resolve) {
            return __awaiter(this, void 0, void 0, function* () {
                const data = yield (yield this.m_url.request()).blob();
                const fileReader = new FileReader();
                fileReader.onload = function (fileLoadedEvent) {
                    let srcData = fileLoadedEvent.target.result.toString(); // <--- data: base64
                    resolve(srcData);
                };
                fileReader.readAsDataURL(data);
            });
        }.bind(this));
    }
}



/***/ }),

/***/ "./framework/OkLanguage.ts":
/*!*********************************!*\
  !*** ./framework/OkLanguage.ts ***!
  \*********************************/
/*! exports provided: OkLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkLanguage", function() { return OkLanguage; });
class OkLanguage {
    constructor(options) {
        this.m_language = navigator.language;
        if (options === null || options === void 0 ? void 0 : options.language) {
            this.m_language = options.language;
        }
    }
    setLanguage(language) {
        this.m_language = language;
    }
    getLanguage(preferences) {
        if (typeof preferences != "object") {
            preferences = [preferences];
        }
        let preference = this.getLanguagePref(preferences);
        return preference.slice(0, 2).toUpperCase();
    }
    getLanguagePref(preferences) {
        for (const preference of preferences) {
            switch (preference) {
                case "navigator":
                    if (window.navigator.language) {
                        return window.navigator.language;
                    }
                    break;
                case "interne":
                    if (this.m_language) {
                        return this.m_language;
                    }
                    break;
                case "html":
                    if (document.querySelector("html").getAttribute("lang")) {
                        return document.querySelector("html").getAttribute("lang");
                    }
                    break;
                default:
                    if (window.navigator.language) {
                        return window.navigator.language;
                    }
                    break;
            }
        }
    }
}



/***/ }),

/***/ "./framework/OkSize.ts":
/*!*****************************!*\
  !*** ./framework/OkSize.ts ***!
  \*****************************/
/*! exports provided: OkSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkSize", function() { return OkSize; });
class OkSize {
    /**
     * OkSize contains 3 variables which could be edit
     * @param options
     */
    constructor(options) {
        /**
         * current width
         * @hidden
         * @private
         */
        this.m_width = 0;
        /**
         * current height
         * @hidden
         * @private
         */
        this.m_height = 0;
        /**
         * current depth
         * @hidden
         * @private
         */
        this.m_depth = 0;
        if (options === null || options === void 0 ? void 0 : options.width) {
            this.setWidth(options.width);
        }
        if (options === null || options === void 0 ? void 0 : options.height) {
            this.setHeight(options.height);
        }
        if (options === null || options === void 0 ? void 0 : options.depth) {
            this.setDepth(options.depth);
        }
    }
    /**
     * return the current width
     */
    width() {
        return this.m_depth;
    }
    /**
     * enable to set width
     * @param width
     */
    setWidth(width) {
        this.m_width = width;
    }
    /**
     * return the current height
     */
    height() {
        return this.m_height;
    }
    /**
     *
     * @param height
     */
    setHeight(height) {
        this.m_height = height;
    }
    depth() {
        return this.m_depth;
    }
    setDepth(depth) {
        this.m_depth = depth;
    }
}



/***/ }),

/***/ "./framework/OkTranslator.ts":
/*!***********************************!*\
  !*** ./framework/OkTranslator.ts ***!
  \***********************************/
/*! exports provided: OkTranslator, Events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkTranslator", function() { return OkTranslator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony import */ var _OkUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OkUrl */ "./framework/OkUrl.ts");
/* harmony import */ var _OkEventsEmitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OkEventsEmitter */ "./framework/OkEventsEmitter.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


var Events;
(function (Events) {
    /**
     * When Translated file is loaded
     */
    Events["translated"] = "translated";
})(Events || (Events = {}));
class OkTranslator extends _OkEventsEmitter__WEBPACK_IMPORTED_MODULE_1__["OkEventsEmitter"] {
    constructor(options) {
        super();
        this.m_url = new _OkUrl__WEBPACK_IMPORTED_MODULE_0__["OkUrl"]("");
        this.m_content = {};
        this.registerEvents();
        if (options === null || options === void 0 ? void 0 : options.url) {
            this.setUrl(options.url);
        }
    }
    translate(keyword) {
        if (this.m_content[keyword]) {
            return this.m_content[keyword];
        }
        return keyword;
    }
    url() {
        return this.m_url;
    }
    setUrl(url) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield url.exist()) {
                this.m_url = url;
                const content = yield (yield this.m_url.request()).json();
                this.m_content = content;
                this.emit(Events.translated, {});
            }
            else {
                throw "Url not found";
            }
        });
    }
    registerEvents() {
        this.on(Events.translated, () => { });
    }
}



/***/ }),

/***/ "./framework/OkUrl.ts":
/*!****************************!*\
  !*** ./framework/OkUrl.ts ***!
  \****************************/
/*! exports provided: OkUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkUrl", function() { return OkUrl; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class OkUrl {
    constructor(url) {
        this.setUrl(url);
    }
    toString() {
        return this.m_url;
    }
    setUrl(url) {
        this.m_url = url;
        this.m_request = undefined;
    }
    exist() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.m_request) {
                const request = yield fetch(this.m_url);
                this.m_request = request;
            }
            const res = this.m_request.ok;
            return res;
        });
    }
    getContent() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.m_request) {
                const request = yield fetch(this.m_url);
                this.m_request = request;
            }
            const res = yield this.m_request.text();
            return res;
        });
    }
    request() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.m_request) {
                const request = yield fetch(this.m_url);
                this.m_request = request;
            }
            return this.m_request;
        });
    }
}



/***/ }),

/***/ "./framework/OkWait.ts":
/*!*****************************!*\
  !*** ./framework/OkWait.ts ***!
  \*****************************/
/*! exports provided: OkWait */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkWait", function() { return OkWait; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * pause during a time
 * @param time
 * time in ms
 */
function OkWait(time) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (success) {
            setTimeout(() => {
                success();
            }, time);
        });
    });
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

/***/ "./test/index.ts":
/*!***********************!*\
  !*** ./test/index.ts ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _framework_Ok__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../framework/Ok */ "./framework/Ok.ts");
/* harmony import */ var _framework_Components_ok_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../framework/Components/ok-components */ "./framework/Components/ok-components.ts");
/**
 * Autheur : Killian Kerlau
 * Contexte : ok est un framework, ainsi la classe Ok controle toute l'app et les sous-parties
 * Ok+Img sont des sous classes qui permettent de manipuler l'application facilement
 * Description : Ici nous allons créer une image et l'afficher au bout de 500ms.
 * Mais encore nous allons aussi traduire la page, mais aussi au bout de 500ms
 */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const App = new _framework_Ok__WEBPACK_IMPORTED_MODULE_0__["Ok"]({ // déclaration de mon application Ok
});
customElements.define("ok-tr", _framework_Components_ok_components__WEBPACK_IMPORTED_MODULE_1__["OkTr"]); // déclaration du composants personnalisé Ok
customElements.define("ok-dialog", _framework_Components_ok_components__WEBPACK_IMPORTED_MODULE_1__["OkDialog"]);
function createImg() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Object(_framework_Ok__WEBPACK_IMPORTED_MODULE_0__["OkWait"])(500); // attrendre 500 ms
        const content = yield (new _framework_Ok__WEBPACK_IMPORTED_MODULE_0__["OkImage"]({ url: new _framework_Ok__WEBPACK_IMPORTED_MODULE_0__["OkUrl"]("https://raw.githubusercontent.com/laukerkillian/Ok-Framework/main/framework/assets/icon.png") })).getImage();
        // récupère le contenue d'une image :
        // D'abord on déclare une classe image qui a besoin d'un url qui doit être une instance de OkUrl.
        // Puis on utilises la méthode getImage qui retourne une promesse du contenue en base64 de l'image
        let img = document.createElement("img"); // créer une image
        img.setAttribute("src", content); // dit que la source est le contenue en base64 de l'image
        document.body.append(img); // importe l'élément sur le corps de la page
    });
}
function translate() {
    return __awaiter(this, void 0, void 0, function* () {
        const lang = App.language().getLanguage(); // récupère la langue de l'utilisateur, étant donné que nous avons pas mis une priorité
        // cela va choisir par défaut le langage du navigateur
        yield Object(_framework_Ok__WEBPACK_IMPORTED_MODULE_0__["OkWait"])(500); // attendre 500 ms
        yield App.translator().setUrl(new _framework_Ok__WEBPACK_IMPORTED_MODULE_0__["OkUrl"](`https://raw.githubusercontent.com/laukerkillian/Ok-Framework/main/test/Languages/TR_${lang}.json`));
        // dans le traducteur incorporé dans l'instance App, on précise l'url qu'il doit adopté
    });
}
function main() {
    createImg(); // appele la fonction précédemment définis ( créer et importe une image sur le dom )
    translate(); // appele la fonction précédemment définis  ( traduit la page )
}
App.translator().on("translated", () => {
});
let isPressed = false;
document.getElementById("coucou").addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    // si le button n'a pas été précé il y a moins de 1s, attends une seconde et affiche salut les copains
    if (!isPressed) { // vérifie que le button n'a pas été précé depuis 1s
        isPressed = true; // dit que le button à été précé, il y a moins 1s
        yield Object(_framework_Ok__WEBPACK_IMPORTED_MODULE_0__["OkWait"])(1000); // attends 1s ou 1000ms
        //alert("Salut les copains"); // affiche "Salut les copains"x
        isPressed = false; // dit que le button n'a pas été précé depuis 1s
    }
}));
let dialog = new _framework_Components_ok_components__WEBPACK_IMPORTED_MODULE_1__["OkDialog"]({});
document.body.append(dialog);
main(); // appel la fonction principale


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL0NvbXBvbmVudHMvb2stY29tcG9uZW50cy50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvQ29tcG9uZW50cy9vay1kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL0NvbXBvbmVudHMvb2stdHIudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL0NvbXBvbmVudHMvb2std2lkZ2V0LnRzIiwid2VicGFjazovLy8uL2ZyYW1ld29yay9Pay50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvT2tFdmVudHNFbWl0dGVyLnRzIiwid2VicGFjazovLy8uL2ZyYW1ld29yay9Pa0ltYWdlLnRzIiwid2VicGFjazovLy8uL2ZyYW1ld29yay9Pa0xhbmd1YWdlLnRzIiwid2VicGFjazovLy8uL2ZyYW1ld29yay9Pa1NpemUudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL09rVHJhbnNsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvT2tVcmwudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL09rV2FpdC50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvcHJpdmF0ZS9nbG9iYWwudHMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFD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RywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQzZEO0FBQ1U7QUFDdkUsZ0JBQWdCLGdEQUFFLEVBQUU7QUFDcEIsQ0FBQztBQUNELCtCQUErQix3RUFBSSxFQUFFO0FBQ3JDLG1DQUFtQyw0RUFBUTtBQUMzQztBQUNBO0FBQ0EsY0FBYyw0REFBTSxNQUFNO0FBQzFCLG1DQUFtQyxxREFBTyxFQUFFLFVBQVUsbURBQUssaUdBQWlHO0FBQzVKO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRCx5Q0FBeUM7QUFDekMsa0NBQWtDO0FBQ2xDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQSxjQUFjLDREQUFNLE1BQU07QUFDMUIsMENBQTBDLG1EQUFLLHdGQUF3RixLQUFLO0FBQzVJO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLHlCQUF5QjtBQUN6QixjQUFjLDREQUFNLE9BQU87QUFDM0IscUNBQXFDO0FBQ3JDLDBCQUEwQjtBQUMxQjtBQUNBLENBQUM7QUFDRCxpQkFBaUIsNEVBQVEsR0FBRztBQUM1QjtBQUNBLE9BQU8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3Rlc3QvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQge09rRGlhbG9nLCBPcHRpb25zIGFzIE9rRGlhbG9nT3B0aW9uc30gZnJvbSBcIi4vb2stZGlhbG9nXCI7XHJcbmltcG9ydCB7T2tXaWRnZXR9IGZyb20gXCIuL29rLXdpZGdldFwiO1xyXG5pbXBvcnQge09rVHJ9IGZyb20gXCIuL29rLXRyXCI7XHJcblxyXG5leHBvcnQge09rVHIsIE9rV2lkZ2V0LCBPa0RpYWxvZywgT2tEaWFsb2dPcHRpb25zfTsiLCJpbXBvcnQge09rV2lkZ2V0fSBmcm9tIFwiLi9vay13aWRnZXRcIjtcclxuaW1wb3J0IHtPa1NpemV9IGZyb20gXCIuLi9Pa1NpemVcIjtcclxuXHJcbmludGVyZmFjZSBPcHRpb25zIHtcclxuICAgIC8qKlxyXG4gICAgICogc2l6ZSBvZiB0aGUgT2tEaWFsb2dcclxuICAgICAqL1xyXG4gICAgc2l6ZT86IE9rU2l6ZSB8IHt3aWR0aD86IG51bWJlciwgaGVpZ2h0PzogbnVtYmVyfTtcclxufVxyXG5jbGFzcyBPa0RpYWxvZyBleHRlbmRzIE9rV2lkZ2V0e1xyXG4gICAgLyoqXHJcbiAgICAgKiBtX3NpemUgY29udGFpbnMgRGlhbG9nIHNpemVcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbV9zaXplOiBPa1NpemUgPSBuZXcgT2tTaXplKHt3aWR0aDogMzAwLCBoZWlnaHQ6IDIwMH0pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2tEaWFsb2cgZW5hYmxlIHRvIGNyZWF0ZSBhIHNtYWxsIHdpbmRvdyBpbnNpZGUgdGhlIG5hdmlnYXRvcidzIHdpbmRvd1xyXG4gICAgICogQGNhdGVnb3J5IENvbXBvbmVudHNcclxuICAgICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBPcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBpZihvcHRpb25zPy5zaXplKSB7XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuc2l6ZSBpbnN0YW5jZW9mIE9rU2l6ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fc2l6ZSA9IG9wdGlvbnMuc2l6ZTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5zaXplPy53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV9zaXplLnNldFdpZHRoKG9wdGlvbnMuc2l6ZS53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5zaXplPy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1fc2l6ZS5zZXRIZWlnaHQob3B0aW9ucy5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzaXplIGZ1bmN0aW9uIHJldHVybiB5b3UgdGhlIGN1cnJlbnQgc2l6ZSBvZiB0aGUgT2tEaWFsb2dcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNpemUoKTogT2tTaXplIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3NpemU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRTaXplIGZ1bmN0aW9uIGVuYWJsZSB5b3UgdG8gZWRpdCB0aGUgc2l6ZSBvZiB0aGUgT2tEaWFsb2dcclxuICAgICAqIEBwYXJhbSBzaXplXHJcbiAgICAgKi9cclxuICAgIHNldFNpemUoc2l6ZTogT2tTaXplKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tX3NpemUgPSBzaXplO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge09rRGlhbG9nLCBPcHRpb25zfSIsImltcG9ydCB7T2t9IGZyb20gJy4uL09rJztcclxuaW1wb3J0IHtjdXJyQXBwfSBmcm9tICcuLi9wcml2YXRlL2dsb2JhbCc7XHJcbmltcG9ydCB7T2tXaWRnZXR9IGZyb20gXCIuL29rLXdpZGdldFwiO1xyXG5cclxuY2xhc3MgT2tUciBleHRlbmRzIE9rV2lkZ2V0IHtcclxuICAgIC8qKlxyXG4gICAgICogY3VycmVudCBhcHBcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgQXBwOiBPaztcclxuICAgIC8qKlxyXG4gICAgICogZGVmYXVsdCB0ZXh0IGRlZmluZWQgaW4gPG9rLXRyPlRFWFQ8L29rLXRyPlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBtX3RleHQ6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyYW5zbGF0ZSB0aGUgdGV4dCBkZWZpbmVkIGluIDxvay10cj5URVhUPC9vay10cj5cclxuICAgICAqIEBjYXRlZ29yeSBDb21wb25lbnRzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5BcHAgPSBjdXJyQXBwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIGxldCBlbCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5tX3RleHQgPSB0aGlzLmlubmVyVGV4dDtcclxuICAgICAgICB0aGlzLkFwcC50cmFuc2xhdG9yKCkub24oXCJ0cmFuc2xhdGVkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZWwuaW5uZXJUZXh0ID0gdGhpcy5BcHAudHJhbnNsYXRvcigpLnRyYW5zbGF0ZSh0aGlzLm1fdGV4dCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtPa1RyfSIsImNsYXNzIE9rV2lkZ2V0IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAY2F0ZWdvcnkgQ29tcG9uZW50c1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge09rV2lkZ2V0fSIsImltcG9ydCB7T2tJbWFnZX0gZnJvbSAnLi9Pa0ltYWdlJ1xyXG5pbXBvcnQge09rVHJhbnNsYXRvcn0gZnJvbSBcIi4vT2tUcmFuc2xhdG9yXCI7XHJcbmltcG9ydCB7T2tMYW5ndWFnZSwgT3B0aW9ucyBhcyBPa0xhbmd1YWdlT3B0aW9uc30gZnJvbSBcIi4vT2tMYW5ndWFnZVwiO1xyXG5pbXBvcnQge3NldEFwcCwgY3VyckFwcH0gZnJvbSBcIi4vcHJpdmF0ZS9nbG9iYWxcIjtcclxuaW1wb3J0IHtPa1VybH0gZnJvbSBcIi4vT2tVcmxcIjtcclxuaW1wb3J0IHtPa0V2ZW50c0VtaXR0ZXJ9IGZyb20gXCIuL09rRXZlbnRzRW1pdHRlclwiO1xyXG5pbXBvcnQge09rV2FpdH0gZnJvbSBcIi4uL2ZyYW1ld29yay9Pa1dhaXRcIlxyXG5cclxuaW50ZXJmYWNlIE9wdGlvbnMge1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICBpY29uPzogT2tJbWFnZTtcclxuICAgIHVybFRyYW5zbGF0b3I/OiBPa1VybFxyXG59XHJcblxyXG5jbGFzcyBPayB7XHJcbiAgICBwcml2YXRlIG1fdGl0bGU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIG1faWNvbjogT2tJbWFnZSA9IG5ldyBPa0ltYWdlKHt1cmw6IG5ldyBPa1VybChcIlwiKX0pO1xyXG4gICAgcHJpdmF0ZSBtX3RyYW5zbGF0b3I6IE9rVHJhbnNsYXRvciA9IG5ldyBPa1RyYW5zbGF0b3IoKTtcclxuICAgIHByaXZhdGUgbV9sYW5ndWFnZTogT2tMYW5ndWFnZSA9IG5ldyBPa0xhbmd1YWdlKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucz86IE9wdGlvbnMpIHtcclxuICAgICAgICBzZXRBcHAodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZXRDb25maWd1cmF0aW9uKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDb25maWd1cmF0aW9uKG9wdGlvbnM6IE9wdGlvbnMpOiB2b2lkIHtcclxuICAgICAgICBpZihvcHRpb25zLnVybFRyYW5zbGF0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy5tX3RyYW5zbGF0b3Iuc2V0VXJsKG9wdGlvbnMudXJsVHJhbnNsYXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0aXRsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1fdGl0bGUgPSB0aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaWNvbigpOiBPa0ltYWdlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2ljb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEljb24oaWNvbjogT2tJbWFnZSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBpY29uLmdldEltYWdlKCk7XHJcblxyXG4gICAgICAgIHRoaXMubV9pY29uID0gaWNvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJhbnNsYXRvcigpOiBPa1RyYW5zbGF0b3Ige1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fdHJhbnNsYXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbGFuZ3VhZ2UoKTogT2tMYW5ndWFnZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9sYW5ndWFnZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtPaywgT3B0aW9ucyBhcyBPa09wdGlvbnMsIE9rSW1hZ2UsIE9rVXJsLCBjdXJyQXBwLCBPa0V2ZW50c0VtaXR0ZXIsIE9rV2FpdH07IiwiLypcclxuKiBBdXRob3IgOiBLSUxMSUFOIEtFUkxBVVxyXG4qIFRpdGxlIDogT2tSZXF1ZXN0XHJcbiogRGVzY3JpcHRpb24gOiBPa1JlcXVlc3QgaXMgYSBmdW5jdGlvbiB0byBtYWtlIGh0dHAgcmVxdWVzdFxyXG4qL1xyXG5cclxuXHJcbmNsYXNzIE9rRXZlbnRzRW1pdHRlciB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1fZXZlbnRzOiB7W2luZGV4OiBzdHJpbmddOmFueX0gPSB7fTsgLy8gY29udGFpbnMgYWxsIGV2ZW50c1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGNsYXNzIGNvbnRhaW5zIGFsbCB5b3UgbmVlZCB0byBtYWRlIGV2ZW50IGVtaXR0ZXJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdGhpcyBtZXRob2QgcmVnaXN0ZXIgYW4gZXZlbnRcclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbihldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogKGFyZz86YW55KSA9PiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMubV9ldmVudHNbZXZlbnRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9ldmVudHNbZXZlbnRdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubV9ldmVudHNbZXZlbnRdLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdGhpcyBtZXRob2QgcmVtb3ZlIGFuIGV2ZW50IHJlZ2lzdGVyZWQgaWYgdGhpcyBldmVudCBkb2Vzbid0IGV4aXN0IHRoYXQgdGhyb3cgYW4gZXJyb3JcclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICogQHBhcmFtIGxpc3RlbmVyVG9SZW1vdmVcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZUxpc3RlbmVyKGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyVG9SZW1vdmU6IChhcmc/OmFueSkgPT4gYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1fZXZlbnRzW2V2ZW50XSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IHJlbW92ZSBhIGxpc3RlbmVyLiBFdmVudCBcIiR7ZXZlbnR9XCIgZG9lc24ndCBleGl0cy5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZpbHRlckxpc3RlbmVycyA9IChsaXN0ZW5lcjogKGFyZz86YW55KSA9PiBhbnkpID0+IGxpc3RlbmVyICE9PSBsaXN0ZW5lclRvUmVtb3ZlO1xyXG5cclxuICAgICAgICB0aGlzLm1fZXZlbnRzW2V2ZW50XSA9IHRoaXMubV9ldmVudHNbZXZlbnRdLmZpbHRlcihmaWx0ZXJMaXN0ZW5lcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBlbWl0IGFuIGV2ZW50IGlmIHRoaXMgZXZlbnQgZG9lc24ndCBleGlzdCB0aGF0IHRocm93IGFuIGVycm9yXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqIEBwYXJhbSBkYXRhXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBlbWl0KGV2ZW50OiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgICAgIGlmICghdGhpcy5tX2V2ZW50c1tldmVudF0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBlbWl0IGFuIGV2ZW50LiBFdmVudCBcIiR7ZXZlbnR9XCIgZG9lc24ndCBleGl0cy5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZpcmVDYWxsYmFja3MgPSAoY2FsbGJhY2s6IChhcmc/OmFueSkgPT4gYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubV9ldmVudHNbZXZlbnRdLmZvckVhY2goZmlyZUNhbGxiYWNrcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7T2tFdmVudHNFbWl0dGVyfSIsImltcG9ydCB7T2tVcmx9IGZyb20gXCIuL09rVXJsXCI7XHJcblxyXG5pbnRlcmZhY2UgT3B0aW9ucyB7XHJcbiAgICB1cmw6IE9rVXJsXHJcbn1cclxuXHJcbmNsYXNzIE9rSW1hZ2Uge1xyXG4gICAgcHJpdmF0ZSBtX3VybDogT2tVcmw7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuc2V0VXJsKG9wdGlvbnMudXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXJsKCk6IE9rVXJsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3VybFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRVcmwodXJsOiBPa1VybCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubV91cmwgPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEltYWdlKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyBmdW5jdGlvbiAocmVzb2x2ZTogKGFyZzA6IHN0cmluZykgPT4gdm9pZCkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgKGF3YWl0IHRoaXMubV91cmwucmVxdWVzdCgpKS5ibG9iKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihmaWxlTG9hZGVkRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzcmNEYXRhID0gZmlsZUxvYWRlZEV2ZW50LnRhcmdldC5yZXN1bHQudG9TdHJpbmcoKTsgLy8gPC0tLSBkYXRhOiBiYXNlNjRcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoc3JjRGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGRhdGEpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7T2tJbWFnZSwgT3B0aW9uc30iLCJpbnRlcmZhY2UgT3B0aW9ucyB7XHJcbiAgICBsYW5ndWFnZT86IHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgT2tMYW5ndWFnZSB7XHJcbiAgICBwcml2YXRlIG1fbGFuZ3VhZ2U6IHN0cmluZyA9IG5hdmlnYXRvci5sYW5ndWFnZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zPzogT3B0aW9ucykge1xyXG4gICAgICAgIGlmKG9wdGlvbnM/Lmxhbmd1YWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9sYW5ndWFnZSA9IG9wdGlvbnMubGFuZ3VhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tX2xhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExhbmd1YWdlKHByZWZlcmVuY2VzPzogQXJyYXk8c3RyaW5nPnxzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmKHR5cGVvZiBwcmVmZXJlbmNlcyAhPSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIHByZWZlcmVuY2VzID0gW3ByZWZlcmVuY2VzXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHByZWZlcmVuY2UgPSB0aGlzLmdldExhbmd1YWdlUHJlZihwcmVmZXJlbmNlcyk7XHJcbiAgICAgICAgcmV0dXJuIHByZWZlcmVuY2Uuc2xpY2UoMCwgMikudG9VcHBlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldExhbmd1YWdlUHJlZihwcmVmZXJlbmNlczogQXJyYXk8c3RyaW5nPik6IHN0cmluZyB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcmVmZXJlbmNlIG9mIHByZWZlcmVuY2VzKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocHJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm5hdmlnYXRvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImludGVybmVcIjpcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLm1fbGFuZ3VhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9sYW5ndWFnZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiaHRtbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLmdldEF0dHJpYnV0ZShcImxhbmdcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLmdldEF0dHJpYnV0ZShcImxhbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtPa0xhbmd1YWdlLCBPcHRpb25zfSIsImludGVyZmFjZSBPcHRpb25zIHtcclxuICAgIC8qKlxyXG4gICAgICogd2lkdGgsIHdoaWNoIHdpbGwgYmUgY29udGFpbnMgaW4gT2tTaXplXHJcbiAgICAgKi9cclxuICAgIHdpZHRoPzogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBoZWlnaHQsIHdoaWNoIHdpbGwgYmUgY29udGFpbnMgaW4gT2tTaXplXHJcbiAgICAgKi9cclxuICAgIGhlaWdodD86IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogZGVwdGgsIHdoaWNoIHdpbGwgYmUgY29udGFpbnMgaW4gT2tTaXplXHJcbiAgICAgKi9cclxuICAgIGRlcHRoPzogbnVtYmVyO1xyXG59XHJcblxyXG5jbGFzcyBPa1NpemUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBjdXJyZW50IHdpZHRoXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1fd2lkdGg6IG51bWJlciA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIGN1cnJlbnQgaGVpZ2h0XHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1faGVpZ2h0OiBudW1iZXIgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiBjdXJyZW50IGRlcHRoXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1fZGVwdGg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPa1NpemUgY29udGFpbnMgMyB2YXJpYWJsZXMgd2hpY2ggY291bGQgYmUgZWRpdFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogT3B0aW9ucykge1xyXG4gICAgICAgIGlmKG9wdGlvbnM/LndpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0V2lkdGgob3B0aW9ucy53aWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG9wdGlvbnM/LmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEhlaWdodChvcHRpb25zLmhlaWdodClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYob3B0aW9ucz8uZGVwdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREZXB0aChvcHRpb25zLmRlcHRoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm4gdGhlIGN1cnJlbnQgd2lkdGhcclxuICAgICAqL1xyXG4gICAgcHVibGljIHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9kZXB0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGVuYWJsZSB0byBzZXQgd2lkdGhcclxuICAgICAqIEBwYXJhbSB3aWR0aFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0V2lkdGgod2lkdGg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubV93aWR0aCA9IHdpZHRoXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm4gdGhlIGN1cnJlbnQgaGVpZ2h0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2hlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaGVpZ2h0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1faGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXB0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fZGVwdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldERlcHRoKGRlcHRoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1fZGVwdGggPSBkZXB0aDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtPa1NpemV9OyIsImltcG9ydCB7T2tVcmx9IGZyb20gXCIuL09rVXJsXCI7XHJcbmltcG9ydCB7T2tMYW5ndWFnZX0gZnJvbSBcIi4vT2tMYW5ndWFnZVwiO1xyXG5pbXBvcnQge09rRXZlbnRzRW1pdHRlcn0gZnJvbSBcIi4vT2tFdmVudHNFbWl0dGVyXCI7XHJcblxyXG5pbnRlcmZhY2UgT3B0aW9ucyB7XHJcbiAgICB1cmw/OiBPa1VybFxyXG59XHJcblxyXG5lbnVtIEV2ZW50cyB7XHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gVHJhbnNsYXRlZCBmaWxlIGlzIGxvYWRlZFxyXG4gICAgICovXHJcbiAgICB0cmFuc2xhdGVkPSBcInRyYW5zbGF0ZWRcIixcclxufVxyXG5cclxuY2xhc3MgT2tUcmFuc2xhdG9yIGV4dGVuZHMgT2tFdmVudHNFbWl0dGVyIHtcclxuICAgIHByaXZhdGUgbV91cmw6IE9rVXJsID0gbmV3IE9rVXJsKFwiXCIpO1xyXG4gICAgcHJpdmF0ZSBtX2NvbnRlbnQ6IHtbaW5kZXg6IHN0cmluZ106YW55fSA9IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBPcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIGlmKG9wdGlvbnM/LnVybCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFVybChvcHRpb25zLnVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cmFuc2xhdGUoa2V5d29yZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZih0aGlzLm1fY29udGVudFtrZXl3b3JkXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2NvbnRlbnRba2V5d29yZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBrZXl3b3JkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cmwoKTogT2tVcmwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fdXJsXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHNldFVybCh1cmw6IE9rVXJsKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYoYXdhaXQgdXJsLmV4aXN0KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5tX3VybCA9IHVybDtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IChhd2FpdCB0aGlzLm1fdXJsLnJlcXVlc3QoKSkuanNvbigpXHJcbiAgICAgICAgICAgIHRoaXMubV9jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KEV2ZW50cy50cmFuc2xhdGVkLCB7fSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBcIlVybCBub3QgZm91bmRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlckV2ZW50cygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uKEV2ZW50cy50cmFuc2xhdGVkLCAoKSA9PiB7fSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtPa1RyYW5zbGF0b3IsIE9wdGlvbnMsIEV2ZW50c307IiwiY2xhc3MgT2tVcmwge1xyXG4gICAgcHJpdmF0ZSBtX3VybDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBtX3JlcXVlc3Q6IFJlc3BvbnNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zZXRVcmwodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3VybDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VXJsKHVybDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tX3VybCA9IHVybDtcclxuICAgICAgICB0aGlzLm1fcmVxdWVzdCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZXhpc3QoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgaWYoIXRoaXMubV9yZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCh0aGlzLm1fdXJsKTtcclxuICAgICAgICAgICAgdGhpcy5tX3JlcXVlc3QgPSByZXF1ZXN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gdGhpcy5tX3JlcXVlc3Qub2s7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0Q29udGVudCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIGlmKCF0aGlzLm1fcmVxdWVzdCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2godGhpcy5tX3VybCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9yZXF1ZXN0ID0gcmVxdWVzdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMubV9yZXF1ZXN0LnRleHQoKTtcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyByZXF1ZXN0KCk6IFByb21pc2U8UmVzcG9uc2U+IHtcclxuICAgICAgICBpZighdGhpcy5tX3JlcXVlc3QpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKHRoaXMubV91cmwpO1xyXG4gICAgICAgICAgICB0aGlzLm1fcmVxdWVzdCA9IHJlcXVlc3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5tX3JlcXVlc3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7T2tVcmx9IiwiLyoqXHJcbiAqIHBhdXNlIGR1cmluZyBhIHRpbWVcclxuICogQHBhcmFtIHRpbWVcclxuICogdGltZSBpbiBtc1xyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gT2tXYWl0KHRpbWU6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChzdWNjZXNzKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3MoKTtcclxuICAgICAgICB9LCB0aW1lKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQge09rV2FpdH07IiwiaW1wb3J0IHsgT2sgfSBmcm9tICcuLi9Payc7XHJcbmxldCBtX2FwcDogT2s7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBcHAoYXBwOiBPayk6IHZvaWQge1xyXG4gICAgbV9hcHAgPSBhcHA7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGN1cnJBcHAoKTogT2sge1xyXG4gICAgcmV0dXJuIG1fYXBwO1xyXG59IiwiLyoqXHJcbiAqIEF1dGhldXIgOiBLaWxsaWFuIEtlcmxhdVxyXG4gKiBDb250ZXh0ZSA6IG9rIGVzdCB1biBmcmFtZXdvcmssIGFpbnNpIGxhIGNsYXNzZSBPayBjb250cm9sZSB0b3V0ZSBsJ2FwcCBldCBsZXMgc291cy1wYXJ0aWVzXHJcbiAqIE9rK0ltZyBzb250IGRlcyBzb3VzIGNsYXNzZXMgcXVpIHBlcm1ldHRlbnQgZGUgbWFuaXB1bGVyIGwnYXBwbGljYXRpb24gZmFjaWxlbWVudFxyXG4gKiBEZXNjcmlwdGlvbiA6IEljaSBub3VzIGFsbG9ucyBjcsOpZXIgdW5lIGltYWdlIGV0IGwnYWZmaWNoZXIgYXUgYm91dCBkZSA1MDBtcy5cclxuICogTWFpcyBlbmNvcmUgbm91cyBhbGxvbnMgYXVzc2kgdHJhZHVpcmUgbGEgcGFnZSwgbWFpcyBhdXNzaSBhdSBib3V0IGRlIDUwMG1zXHJcbiAqL1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IE9rLCBPa0ltYWdlLCBPa1VybCwgT2tXYWl0IH0gZnJvbSAnLi4vZnJhbWV3b3JrL09rJztcclxuaW1wb3J0IHsgT2tUciwgT2tEaWFsb2cgfSBmcm9tIFwiLi4vZnJhbWV3b3JrL0NvbXBvbmVudHMvb2stY29tcG9uZW50c1wiO1xyXG5jb25zdCBBcHAgPSBuZXcgT2soeyAvLyBkw6ljbGFyYXRpb24gZGUgbW9uIGFwcGxpY2F0aW9uIE9rXHJcbn0pO1xyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvay10clwiLCBPa1RyKTsgLy8gZMOpY2xhcmF0aW9uIGR1IGNvbXBvc2FudHMgcGVyc29ubmFsaXPDqSBPa1xyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvay1kaWFsb2dcIiwgT2tEaWFsb2cpO1xyXG5mdW5jdGlvbiBjcmVhdGVJbWcoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIHlpZWxkIE9rV2FpdCg1MDApOyAvLyBhdHRyZW5kcmUgNTAwIG1zXHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IHlpZWxkIChuZXcgT2tJbWFnZSh7IHVybDogbmV3IE9rVXJsKFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2xhdWtlcmtpbGxpYW4vT2stRnJhbWV3b3JrL21haW4vZnJhbWV3b3JrL2Fzc2V0cy9pY29uLnBuZ1wiKSB9KSkuZ2V0SW1hZ2UoKTtcclxuICAgICAgICAvLyByw6ljdXDDqHJlIGxlIGNvbnRlbnVlIGQndW5lIGltYWdlIDpcclxuICAgICAgICAvLyBEJ2Fib3JkIG9uIGTDqWNsYXJlIHVuZSBjbGFzc2UgaW1hZ2UgcXVpIGEgYmVzb2luIGQndW4gdXJsIHF1aSBkb2l0IMOqdHJlIHVuZSBpbnN0YW5jZSBkZSBPa1VybC5cclxuICAgICAgICAvLyBQdWlzIG9uIHV0aWxpc2VzIGxhIG3DqXRob2RlIGdldEltYWdlIHF1aSByZXRvdXJuZSB1bmUgcHJvbWVzc2UgZHUgY29udGVudWUgZW4gYmFzZTY0IGRlIGwnaW1hZ2VcclxuICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgLy8gY3LDqWVyIHVuZSBpbWFnZVxyXG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgY29udGVudCk7IC8vIGRpdCBxdWUgbGEgc291cmNlIGVzdCBsZSBjb250ZW51ZSBlbiBiYXNlNjQgZGUgbCdpbWFnZVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGltZyk7IC8vIGltcG9ydGUgbCfDqWzDqW1lbnQgc3VyIGxlIGNvcnBzIGRlIGxhIHBhZ2VcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgY29uc3QgbGFuZyA9IEFwcC5sYW5ndWFnZSgpLmdldExhbmd1YWdlKCk7IC8vIHLDqWN1cMOocmUgbGEgbGFuZ3VlIGRlIGwndXRpbGlzYXRldXIsIMOpdGFudCBkb25uw6kgcXVlIG5vdXMgYXZvbnMgcGFzIG1pcyB1bmUgcHJpb3JpdMOpXHJcbiAgICAgICAgLy8gY2VsYSB2YSBjaG9pc2lyIHBhciBkw6lmYXV0IGxlIGxhbmdhZ2UgZHUgbmF2aWdhdGV1clxyXG4gICAgICAgIHlpZWxkIE9rV2FpdCg1MDApOyAvLyBhdHRlbmRyZSA1MDAgbXNcclxuICAgICAgICB5aWVsZCBBcHAudHJhbnNsYXRvcigpLnNldFVybChuZXcgT2tVcmwoYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sYXVrZXJraWxsaWFuL09rLUZyYW1ld29yay9tYWluL3Rlc3QvTGFuZ3VhZ2VzL1RSXyR7bGFuZ30uanNvbmApKTtcclxuICAgICAgICAvLyBkYW5zIGxlIHRyYWR1Y3RldXIgaW5jb3Jwb3LDqSBkYW5zIGwnaW5zdGFuY2UgQXBwLCBvbiBwcsOpY2lzZSBsJ3VybCBxdSdpbCBkb2l0IGFkb3B0w6lcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgICBjcmVhdGVJbWcoKTsgLy8gYXBwZWxlIGxhIGZvbmN0aW9uIHByw6ljw6lkZW1tZW50IGTDqWZpbmlzICggY3LDqWVyIGV0IGltcG9ydGUgdW5lIGltYWdlIHN1ciBsZSBkb20gKVxyXG4gICAgdHJhbnNsYXRlKCk7IC8vIGFwcGVsZSBsYSBmb25jdGlvbiBwcsOpY8OpZGVtbWVudCBkw6lmaW5pcyAgKCB0cmFkdWl0IGxhIHBhZ2UgKVxyXG59XHJcbkFwcC50cmFuc2xhdG9yKCkub24oXCJ0cmFuc2xhdGVkXCIsICgpID0+IHtcclxufSk7XHJcbmxldCBpc1ByZXNzZWQgPSBmYWxzZTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vjb3VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgLy8gc2kgbGUgYnV0dG9uIG4nYSBwYXMgw6l0w6kgcHLDqWPDqSBpbCB5IGEgbW9pbnMgZGUgMXMsIGF0dGVuZHMgdW5lIHNlY29uZGUgZXQgYWZmaWNoZSBzYWx1dCBsZXMgY29wYWluc1xyXG4gICAgaWYgKCFpc1ByZXNzZWQpIHsgLy8gdsOpcmlmaWUgcXVlIGxlIGJ1dHRvbiBuJ2EgcGFzIMOpdMOpIHByw6ljw6kgZGVwdWlzIDFzXHJcbiAgICAgICAgaXNQcmVzc2VkID0gdHJ1ZTsgLy8gZGl0IHF1ZSBsZSBidXR0b24gw6Agw6l0w6kgcHLDqWPDqSwgaWwgeSBhIG1vaW5zIDFzXHJcbiAgICAgICAgeWllbGQgT2tXYWl0KDEwMDApOyAvLyBhdHRlbmRzIDFzIG91IDEwMDBtc1xyXG4gICAgICAgIC8vYWxlcnQoXCJTYWx1dCBsZXMgY29wYWluc1wiKTsgLy8gYWZmaWNoZSBcIlNhbHV0IGxlcyBjb3BhaW5zXCJ4XHJcbiAgICAgICAgaXNQcmVzc2VkID0gZmFsc2U7IC8vIGRpdCBxdWUgbGUgYnV0dG9uIG4nYSBwYXMgw6l0w6kgcHLDqWPDqSBkZXB1aXMgMXNcclxuICAgIH1cclxufSkpO1xyXG5sZXQgZGlhbG9nID0gbmV3IE9rRGlhbG9nKHt9KTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmQoZGlhbG9nKTtcclxubWFpbigpOyAvLyBhcHBlbCBsYSBmb25jdGlvbiBwcmluY2lwYWxlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
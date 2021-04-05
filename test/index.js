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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL0NvbXBvbmVudHMvb2stY29tcG9uZW50cy50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvQ29tcG9uZW50cy9vay1kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL0NvbXBvbmVudHMvb2stdHIudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL0NvbXBvbmVudHMvb2std2lkZ2V0LnRzIiwid2VicGFjazovLy8uL2ZyYW1ld29yay9Pay50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvT2tFdmVudHNFbWl0dGVyLnRzIiwid2VicGFjazovLy8uL2ZyYW1ld29yay9Pa0ltYWdlLnRzIiwid2VicGFjazovLy8uL2ZyYW1ld29yay9Pa0xhbmd1YWdlLnRzIiwid2VicGFjazovLy8uL2ZyYW1ld29yay9Pa1NpemUudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL09rVHJhbnNsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvT2tVcmwudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL09rV2FpdC50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvcHJpdmF0ZS9nbG9iYWwudHMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFD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cUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDNkQ7QUFDVTtBQUN2RSxnQkFBZ0IsZ0RBQUUsRUFBRTtBQUNwQixDQUFDO0FBQ0QsK0JBQStCLHdFQUFJLEVBQUU7QUFDckMsbUNBQW1DLDRFQUFRO0FBQzNDO0FBQ0E7QUFDQSxjQUFjLDREQUFNLE1BQU07QUFDMUIsbUNBQW1DLHFEQUFPLEVBQUUsVUFBVSxtREFBSyxpR0FBaUc7QUFDNUo7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hELHlDQUF5QztBQUN6QyxrQ0FBa0M7QUFDbEMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBLGNBQWMsNERBQU0sTUFBTTtBQUMxQiwwQ0FBMEMsbURBQUssd0ZBQXdGLEtBQUs7QUFDNUk7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIseUJBQXlCO0FBQ3pCLGNBQWMsNERBQU0sT0FBTztBQUMzQixxQ0FBcUM7QUFDckMsMEJBQTBCO0FBQzFCO0FBQ0EsQ0FBQztBQUNELGlCQUFpQiw0RUFBUSxHQUFHO0FBQzVCO0FBQ0EsT0FBTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdGVzdC9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7T2tEaWFsb2csIE9wdGlvbnMgYXMgT2tEaWFsb2dPcHRpb25zfSBmcm9tIFwiLi9vay1kaWFsb2dcIjtcclxuaW1wb3J0IHtPa1dpZGdldH0gZnJvbSBcIi4vb2std2lkZ2V0XCI7XHJcbmltcG9ydCB7T2tUcn0gZnJvbSBcIi4vb2stdHJcIjtcclxuXHJcbmV4cG9ydCB7T2tUciwgT2tXaWRnZXQsIE9rRGlhbG9nLCBPa0RpYWxvZ09wdGlvbnN9OyIsImltcG9ydCB7T2tXaWRnZXR9IGZyb20gXCIuL29rLXdpZGdldFwiO1xyXG5pbXBvcnQge09rU2l6ZX0gZnJvbSBcIi4uL09rU2l6ZVwiO1xyXG5cclxuaW50ZXJmYWNlIE9wdGlvbnMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBzaXplIG9mIHRoZSBPa0RpYWxvZ1xyXG4gICAgICovXHJcbiAgICBzaXplPzogT2tTaXplIHwge3dpZHRoPzogbnVtYmVyLCBoZWlnaHQ/OiBudW1iZXJ9O1xyXG59XHJcbmNsYXNzIE9rRGlhbG9nIGV4dGVuZHMgT2tXaWRnZXR7XHJcbiAgICAvKipcclxuICAgICAqIG1fc2l6ZSBjb250YWlucyBEaWFsb2cgc2l6ZVxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBtX3NpemU6IE9rU2l6ZSA9IG5ldyBPa1NpemUoe3dpZHRoOiAzMDAsIGhlaWdodDogMjAwfSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPa0RpYWxvZyBlbmFibGUgdG8gY3JlYXRlIGEgc21hbGwgd2luZG93IGluc2lkZSB0aGUgbmF2aWdhdG9yJ3Mgd2luZG93XHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zPzogT3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgaWYob3B0aW9ucz8uc2l6ZSkge1xyXG4gICAgICAgICAgICBpZihvcHRpb25zLnNpemUgaW5zdGFuY2VvZiBPa1NpemUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3NpemUgPSBvcHRpb25zLnNpemU7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuc2l6ZT8ud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1fc2l6ZS5zZXRXaWR0aChvcHRpb25zLnNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuc2l6ZT8uaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX3NpemUuc2V0SGVpZ2h0KG9wdGlvbnMuc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2l6ZSBmdW5jdGlvbiByZXR1cm4geW91IHRoZSBjdXJyZW50IHNpemUgb2YgdGhlIE9rRGlhbG9nXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaXplKCk6IE9rU2l6ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9zaXplO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0U2l6ZSBmdW5jdGlvbiBlbmFibGUgeW91IHRvIGVkaXQgdGhlIHNpemUgb2YgdGhlIE9rRGlhbG9nXHJcbiAgICAgKiBAcGFyYW0gc2l6ZVxyXG4gICAgICovXHJcbiAgICBzZXRTaXplKHNpemU6IE9rU2l6ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubV9zaXplID0gc2l6ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtPa0RpYWxvZywgT3B0aW9uc30iLCJpbXBvcnQge09rfSBmcm9tICcuLi9Payc7XHJcbmltcG9ydCB7Y3VyckFwcH0gZnJvbSAnLi4vcHJpdmF0ZS9nbG9iYWwnO1xyXG5pbXBvcnQge09rV2lkZ2V0fSBmcm9tIFwiLi9vay13aWRnZXRcIjtcclxuXHJcbmNsYXNzIE9rVHIgZXh0ZW5kcyBPa1dpZGdldCB7XHJcbiAgICAvKipcclxuICAgICAqIGN1cnJlbnQgYXBwXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIEFwcDogT2s7XHJcbiAgICAvKipcclxuICAgICAqIGRlZmF1bHQgdGV4dCBkZWZpbmVkIGluIDxvay10cj5URVhUPC9vay10cj5cclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbV90ZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFuc2xhdGUgdGhlIHRleHQgZGVmaW5lZCBpbiA8b2stdHI+VEVYVDwvb2stdHI+XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5BcHAgPSBjdXJyQXBwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIGxldCBlbCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5tX3RleHQgPSB0aGlzLmlubmVyVGV4dDtcclxuICAgICAgICB0aGlzLkFwcC50cmFuc2xhdG9yKCkub24oXCJ0cmFuc2xhdGVkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZWwuaW5uZXJUZXh0ID0gdGhpcy5BcHAudHJhbnNsYXRvcigpLnRyYW5zbGF0ZSh0aGlzLm1fdGV4dCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtPa1RyfSIsImNsYXNzIE9rV2lkZ2V0IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtPa1dpZGdldH0iLCJpbXBvcnQge09rSW1hZ2V9IGZyb20gJy4vT2tJbWFnZSdcclxuaW1wb3J0IHtPa1RyYW5zbGF0b3J9IGZyb20gXCIuL09rVHJhbnNsYXRvclwiO1xyXG5pbXBvcnQge09rTGFuZ3VhZ2UsIE9wdGlvbnMgYXMgT2tMYW5ndWFnZU9wdGlvbnN9IGZyb20gXCIuL09rTGFuZ3VhZ2VcIjtcclxuaW1wb3J0IHtzZXRBcHAsIGN1cnJBcHB9IGZyb20gXCIuL3ByaXZhdGUvZ2xvYmFsXCI7XHJcbmltcG9ydCB7T2tVcmx9IGZyb20gXCIuL09rVXJsXCI7XHJcbmltcG9ydCB7T2tFdmVudHNFbWl0dGVyfSBmcm9tIFwiLi9Pa0V2ZW50c0VtaXR0ZXJcIjtcclxuaW1wb3J0IHtPa1dhaXR9IGZyb20gXCIuLi9mcmFtZXdvcmsvT2tXYWl0XCJcclxuXHJcbmludGVyZmFjZSBPcHRpb25zIHtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgaWNvbj86IE9rSW1hZ2U7XHJcbiAgICB1cmxUcmFuc2xhdG9yPzogT2tVcmxcclxufVxyXG5cclxuY2xhc3MgT2sge1xyXG4gICAgcHJpdmF0ZSBtX3RpdGxlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBtX2ljb246IE9rSW1hZ2UgPSBuZXcgT2tJbWFnZSh7dXJsOiBuZXcgT2tVcmwoXCJcIil9KTtcclxuICAgIHByaXZhdGUgbV90cmFuc2xhdG9yOiBPa1RyYW5zbGF0b3IgPSBuZXcgT2tUcmFuc2xhdG9yKCk7XHJcbiAgICBwcml2YXRlIG1fbGFuZ3VhZ2U6IE9rTGFuZ3VhZ2UgPSBuZXcgT2tMYW5ndWFnZSgpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBPcHRpb25zKSB7XHJcbiAgICAgICAgc2V0QXBwKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0Q29uZmlndXJhdGlvbihvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q29uZmlndXJhdGlvbihvcHRpb25zOiBPcHRpb25zKTogdm9pZCB7XHJcbiAgICAgICAgaWYob3B0aW9ucy51cmxUcmFuc2xhdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMubV90cmFuc2xhdG9yLnNldFVybChvcHRpb25zLnVybFRyYW5zbGF0b3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdGl0bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3RpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRUaXRsZSh0aXRsZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tX3RpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGljb24oKTogT2tJbWFnZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9pY29uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJY29uKGljb246IE9rSW1hZ2UpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gaWNvbi5nZXRJbWFnZSgpO1xyXG5cclxuICAgICAgICB0aGlzLm1faWNvbiA9IGljb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyYW5zbGF0b3IoKTogT2tUcmFuc2xhdG9yIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3RyYW5zbGF0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxhbmd1YWdlKCk6IE9rTGFuZ3VhZ2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fbGFuZ3VhZ2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7T2ssIE9wdGlvbnMgYXMgT2tPcHRpb25zLCBPa0ltYWdlLCBPa1VybCwgY3VyckFwcCwgT2tFdmVudHNFbWl0dGVyLCBPa1dhaXR9OyIsIi8qXHJcbiogQXV0aG9yIDogS0lMTElBTiBLRVJMQVVcclxuKiBUaXRsZSA6IE9rUmVxdWVzdFxyXG4qIERlc2NyaXB0aW9uIDogT2tSZXF1ZXN0IGlzIGEgZnVuY3Rpb24gdG8gbWFrZSBodHRwIHJlcXVlc3RcclxuKi9cclxuXHJcblxyXG5jbGFzcyBPa0V2ZW50c0VtaXR0ZXIge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBtX2V2ZW50czoge1tpbmRleDogc3RyaW5nXTphbnl9ID0ge307IC8vIGNvbnRhaW5zIGFsbCBldmVudHNcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBjbGFzcyBjb250YWlucyBhbGwgeW91IG5lZWQgdG8gbWFkZSBldmVudCBlbWl0dGVyXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHRoaXMgbWV0aG9kIHJlZ2lzdGVyIGFuIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb24oZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6IChhcmc/OmFueSkgPT4gYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1fZXZlbnRzW2V2ZW50XSkge1xyXG4gICAgICAgICAgICB0aGlzLm1fZXZlbnRzW2V2ZW50XSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1fZXZlbnRzW2V2ZW50XS5wdXNoKGxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHRoaXMgbWV0aG9kIHJlbW92ZSBhbiBldmVudCByZWdpc3RlcmVkIGlmIHRoaXMgZXZlbnQgZG9lc24ndCBleGlzdCB0aGF0IHRocm93IGFuIGVycm9yXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclRvUmVtb3ZlXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmVMaXN0ZW5lcihldmVudDogc3RyaW5nLCBsaXN0ZW5lclRvUmVtb3ZlOiAoYXJnPzphbnkpID0+IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5tX2V2ZW50c1tldmVudF0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCByZW1vdmUgYSBsaXN0ZW5lci4gRXZlbnQgXCIke2V2ZW50fVwiIGRvZXNuJ3QgZXhpdHMuYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmaWx0ZXJMaXN0ZW5lcnMgPSAobGlzdGVuZXI6IChhcmc/OmFueSkgPT4gYW55KSA9PiBsaXN0ZW5lciAhPT0gbGlzdGVuZXJUb1JlbW92ZTtcclxuXHJcbiAgICAgICAgdGhpcy5tX2V2ZW50c1tldmVudF0gPSB0aGlzLm1fZXZlbnRzW2V2ZW50XS5maWx0ZXIoZmlsdGVyTGlzdGVuZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZW1pdCBhbiBldmVudCBpZiB0aGlzIGV2ZW50IGRvZXNuJ3QgZXhpc3QgdGhhdCB0aHJvdyBhbiBlcnJvclxyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0gZGF0YVxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZW1pdChldmVudDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICAgICAgICBpZiAoIXRoaXMubV9ldmVudHNbZXZlbnRdKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgZW1pdCBhbiBldmVudC4gRXZlbnQgXCIke2V2ZW50fVwiIGRvZXNuJ3QgZXhpdHMuYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmaXJlQ2FsbGJhY2tzID0gKGNhbGxiYWNrOiAoYXJnPzphbnkpID0+IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm1fZXZlbnRzW2V2ZW50XS5mb3JFYWNoKGZpcmVDYWxsYmFja3MpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge09rRXZlbnRzRW1pdHRlcn0iLCJpbXBvcnQge09rVXJsfSBmcm9tIFwiLi9Pa1VybFwiO1xyXG5cclxuaW50ZXJmYWNlIE9wdGlvbnMge1xyXG4gICAgdXJsOiBPa1VybFxyXG59XHJcblxyXG5jbGFzcyBPa0ltYWdlIHtcclxuICAgIHByaXZhdGUgbV91cmw6IE9rVXJsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnNldFVybChvcHRpb25zLnVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVybCgpOiBPa1VybCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV91cmxcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VXJsKHVybDogT2tVcmwpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1fdXJsID0gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJbWFnZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgZnVuY3Rpb24gKHJlc29sdmU6IChhcmcwOiBzdHJpbmcpID0+IHZvaWQpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IChhd2FpdCB0aGlzLm1fdXJsLnJlcXVlc3QoKSkuYmxvYigpO1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgICAgIGZpbGVSZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZmlsZUxvYWRlZEV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3JjRGF0YSA9IGZpbGVMb2FkZWRFdmVudC50YXJnZXQucmVzdWx0LnRvU3RyaW5nKCk7IC8vIDwtLS0gZGF0YTogYmFzZTY0XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHNyY0RhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChkYXRhKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge09rSW1hZ2UsIE9wdGlvbnN9IiwiaW50ZXJmYWNlIE9wdGlvbnMge1xyXG4gICAgbGFuZ3VhZ2U/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIE9rTGFuZ3VhZ2Uge1xyXG4gICAgcHJpdmF0ZSBtX2xhbmd1YWdlOiBzdHJpbmcgPSBuYXZpZ2F0b3IubGFuZ3VhZ2U7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucz86IE9wdGlvbnMpIHtcclxuICAgICAgICBpZihvcHRpb25zPy5sYW5ndWFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1fbGFuZ3VhZ2UgPSBvcHRpb25zLmxhbmd1YWdlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubV9sYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMYW5ndWFnZShwcmVmZXJlbmNlcz86IEFycmF5PHN0cmluZz58c3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZih0eXBlb2YgcHJlZmVyZW5jZXMgIT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBwcmVmZXJlbmNlcyA9IFtwcmVmZXJlbmNlc107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwcmVmZXJlbmNlID0gdGhpcy5nZXRMYW5ndWFnZVByZWYocHJlZmVyZW5jZXMpO1xyXG4gICAgICAgIHJldHVybiBwcmVmZXJlbmNlLnNsaWNlKDAsIDIpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRMYW5ndWFnZVByZWYocHJlZmVyZW5jZXM6IEFycmF5PHN0cmluZz4pOiBzdHJpbmcge1xyXG4gICAgICAgIGZvciAoY29uc3QgcHJlZmVyZW5jZSBvZiBwcmVmZXJlbmNlcykge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHByZWZlcmVuY2UpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJuYXZpZ2F0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJpbnRlcm5lXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5tX2xhbmd1YWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fbGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImh0bWxcIjpcclxuICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKS5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKS5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7T2tMYW5ndWFnZSwgT3B0aW9uc30iLCJpbnRlcmZhY2UgT3B0aW9ucyB7XHJcbiAgICAvKipcclxuICAgICAqIHdpZHRoLCB3aGljaCB3aWxsIGJlIGNvbnRhaW5zIGluIE9rU2l6ZVxyXG4gICAgICovXHJcbiAgICB3aWR0aD86IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogaGVpZ2h0LCB3aGljaCB3aWxsIGJlIGNvbnRhaW5zIGluIE9rU2l6ZVxyXG4gICAgICovXHJcbiAgICBoZWlnaHQ/OiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIGRlcHRoLCB3aGljaCB3aWxsIGJlIGNvbnRhaW5zIGluIE9rU2l6ZVxyXG4gICAgICovXHJcbiAgICBkZXB0aD86IG51bWJlcjtcclxufVxyXG5cclxuY2xhc3MgT2tTaXplIHtcclxuICAgIC8qKlxyXG4gICAgICogY3VycmVudCB3aWR0aFxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBtX3dpZHRoOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiBjdXJyZW50IGhlaWdodFxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBtX2hlaWdodDogbnVtYmVyID0gMDtcclxuICAgIC8qKlxyXG4gICAgICogY3VycmVudCBkZXB0aFxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBtX2RlcHRoOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2tTaXplIGNvbnRhaW5zIDMgdmFyaWFibGVzIHdoaWNoIGNvdWxkIGJlIGVkaXRcclxuICAgICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE9wdGlvbnMpIHtcclxuICAgICAgICBpZihvcHRpb25zPy53aWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFdpZHRoKG9wdGlvbnMud2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihvcHRpb25zPy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRIZWlnaHQob3B0aW9ucy5oZWlnaHQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG9wdGlvbnM/LmRlcHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGVwdGgob3B0aW9ucy5kZXB0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJuIHRoZSBjdXJyZW50IHdpZHRoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fZGVwdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBlbmFibGUgdG8gc2V0IHdpZHRoXHJcbiAgICAgKiBAcGFyYW0gd2lkdGhcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFdpZHRoKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1fd2lkdGggPSB3aWR0aFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJuIHRoZSBjdXJyZW50IGhlaWdodFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGhlaWdodFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0SGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tX2hlaWdodCA9IGhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVwdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2RlcHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXREZXB0aChkZXB0aDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tX2RlcHRoID0gZGVwdGg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7T2tTaXplfTsiLCJpbXBvcnQge09rVXJsfSBmcm9tIFwiLi9Pa1VybFwiO1xyXG5pbXBvcnQge09rTGFuZ3VhZ2V9IGZyb20gXCIuL09rTGFuZ3VhZ2VcIjtcclxuaW1wb3J0IHtPa0V2ZW50c0VtaXR0ZXJ9IGZyb20gXCIuL09rRXZlbnRzRW1pdHRlclwiO1xyXG5cclxuaW50ZXJmYWNlIE9wdGlvbnMge1xyXG4gICAgdXJsPzogT2tVcmxcclxufVxyXG5cclxuZW51bSBFdmVudHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIFRyYW5zbGF0ZWQgZmlsZSBpcyBsb2FkZWRcclxuICAgICAqL1xyXG4gICAgdHJhbnNsYXRlZD0gXCJ0cmFuc2xhdGVkXCIsXHJcbn1cclxuXHJcbmNsYXNzIE9rVHJhbnNsYXRvciBleHRlbmRzIE9rRXZlbnRzRW1pdHRlciB7XHJcbiAgICBwcml2YXRlIG1fdXJsOiBPa1VybCA9IG5ldyBPa1VybChcIlwiKTtcclxuICAgIHByaXZhdGUgbV9jb250ZW50OiB7W2luZGV4OiBzdHJpbmddOmFueX0gPSB7fTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zPzogT3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xyXG5cclxuICAgICAgICBpZihvcHRpb25zPy51cmwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRVcmwob3B0aW9ucy51cmwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJhbnNsYXRlKGtleXdvcmQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYodGhpcy5tX2NvbnRlbnRba2V5d29yZF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9jb250ZW50W2tleXdvcmRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ga2V5d29yZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXJsKCk6IE9rVXJsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3VybFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzZXRVcmwodXJsOiBPa1VybCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmKGF3YWl0IHVybC5leGlzdCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubV91cmwgPSB1cmw7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCAoYXdhaXQgdGhpcy5tX3VybC5yZXF1ZXN0KCkpLmpzb24oKVxyXG4gICAgICAgICAgICB0aGlzLm1fY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChFdmVudHMudHJhbnNsYXRlZCwge30pO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgXCJVcmwgbm90IGZvdW5kXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJFdmVudHMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbihFdmVudHMudHJhbnNsYXRlZCwgKCkgPT4ge30pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7T2tUcmFuc2xhdG9yLCBPcHRpb25zLCBFdmVudHN9OyIsImNsYXNzIE9rVXJsIHtcclxuICAgIHByaXZhdGUgbV91cmw6IHN0cmluZztcclxuICAgIHByaXZhdGUgbV9yZXF1ZXN0OiBSZXNwb25zZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih1cmw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc2V0VXJsKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV91cmw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFVybCh1cmw6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubV91cmwgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5tX3JlcXVlc3QgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGV4aXN0KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGlmKCF0aGlzLm1fcmVxdWVzdCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2godGhpcy5tX3VybCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9yZXF1ZXN0ID0gcmVxdWVzdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcyA9IHRoaXMubV9yZXF1ZXN0Lm9rO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldENvbnRlbnQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICBpZighdGhpcy5tX3JlcXVlc3QpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKHRoaXMubV91cmwpO1xyXG4gICAgICAgICAgICB0aGlzLm1fcmVxdWVzdCA9IHJlcXVlc3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLm1fcmVxdWVzdC50ZXh0KCk7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgcmVxdWVzdCgpOiBQcm9taXNlPFJlc3BvbnNlPiB7XHJcbiAgICAgICAgaWYoIXRoaXMubV9yZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCh0aGlzLm1fdXJsKTtcclxuICAgICAgICAgICAgdGhpcy5tX3JlcXVlc3QgPSByZXF1ZXN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9yZXF1ZXN0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge09rVXJsfSIsIi8qKlxyXG4gKiBwYXVzZSBkdXJpbmcgYSB0aW1lXHJcbiAqIEBwYXJhbSB0aW1lXHJcbiAqIHRpbWUgaW4gbXNcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIE9rV2FpdCh0aW1lOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoc3VjY2Vzcykge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzKCk7XHJcbiAgICAgICAgfSwgdGltZSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHtPa1dhaXR9OyIsImltcG9ydCB7IE9rIH0gZnJvbSAnLi4vT2snO1xyXG5sZXQgbV9hcHA6IE9rO1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0QXBwKGFwcDogT2spOiB2b2lkIHtcclxuICAgIG1fYXBwID0gYXBwO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjdXJyQXBwKCk6IE9rIHtcclxuICAgIHJldHVybiBtX2FwcDtcclxufSIsIi8qKlxyXG4gKiBBdXRoZXVyIDogS2lsbGlhbiBLZXJsYXVcclxuICogQ29udGV4dGUgOiBvayBlc3QgdW4gZnJhbWV3b3JrLCBhaW5zaSBsYSBjbGFzc2UgT2sgY29udHJvbGUgdG91dGUgbCdhcHAgZXQgbGVzIHNvdXMtcGFydGllc1xyXG4gKiBPaytJbWcgc29udCBkZXMgc291cyBjbGFzc2VzIHF1aSBwZXJtZXR0ZW50IGRlIG1hbmlwdWxlciBsJ2FwcGxpY2F0aW9uIGZhY2lsZW1lbnRcclxuICogRGVzY3JpcHRpb24gOiBJY2kgbm91cyBhbGxvbnMgY3LDqWVyIHVuZSBpbWFnZSBldCBsJ2FmZmljaGVyIGF1IGJvdXQgZGUgNTAwbXMuXHJcbiAqIE1haXMgZW5jb3JlIG5vdXMgYWxsb25zIGF1c3NpIHRyYWR1aXJlIGxhIHBhZ2UsIG1haXMgYXVzc2kgYXUgYm91dCBkZSA1MDBtc1xyXG4gKi9cclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBPaywgT2tJbWFnZSwgT2tVcmwsIE9rV2FpdCB9IGZyb20gJy4uL2ZyYW1ld29yay9Payc7XHJcbmltcG9ydCB7IE9rVHIsIE9rRGlhbG9nIH0gZnJvbSBcIi4uL2ZyYW1ld29yay9Db21wb25lbnRzL29rLWNvbXBvbmVudHNcIjtcclxuY29uc3QgQXBwID0gbmV3IE9rKHsgLy8gZMOpY2xhcmF0aW9uIGRlIG1vbiBhcHBsaWNhdGlvbiBPa1xyXG59KTtcclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib2stdHJcIiwgT2tUcik7IC8vIGTDqWNsYXJhdGlvbiBkdSBjb21wb3NhbnRzIHBlcnNvbm5hbGlzw6kgT2tcclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib2stZGlhbG9nXCIsIE9rRGlhbG9nKTtcclxuZnVuY3Rpb24gY3JlYXRlSW1nKCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICB5aWVsZCBPa1dhaXQoNTAwKTsgLy8gYXR0cmVuZHJlIDUwMCBtc1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB5aWVsZCAobmV3IE9rSW1hZ2UoeyB1cmw6IG5ldyBPa1VybChcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sYXVrZXJraWxsaWFuL09rLUZyYW1ld29yay9tYWluL2ZyYW1ld29yay9hc3NldHMvaWNvbi5wbmdcIikgfSkpLmdldEltYWdlKCk7XHJcbiAgICAgICAgLy8gcsOpY3Vww6hyZSBsZSBjb250ZW51ZSBkJ3VuZSBpbWFnZSA6XHJcbiAgICAgICAgLy8gRCdhYm9yZCBvbiBkw6ljbGFyZSB1bmUgY2xhc3NlIGltYWdlIHF1aSBhIGJlc29pbiBkJ3VuIHVybCBxdWkgZG9pdCDDqnRyZSB1bmUgaW5zdGFuY2UgZGUgT2tVcmwuXHJcbiAgICAgICAgLy8gUHVpcyBvbiB1dGlsaXNlcyBsYSBtw6l0aG9kZSBnZXRJbWFnZSBxdWkgcmV0b3VybmUgdW5lIHByb21lc3NlIGR1IGNvbnRlbnVlIGVuIGJhc2U2NCBkZSBsJ2ltYWdlXHJcbiAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IC8vIGNyw6llciB1bmUgaW1hZ2VcclxuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGNvbnRlbnQpOyAvLyBkaXQgcXVlIGxhIHNvdXJjZSBlc3QgbGUgY29udGVudWUgZW4gYmFzZTY0IGRlIGwnaW1hZ2VcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChpbWcpOyAvLyBpbXBvcnRlIGwnw6lsw6ltZW50IHN1ciBsZSBjb3JwcyBkZSBsYSBwYWdlXHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiB0cmFuc2xhdGUoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IGxhbmcgPSBBcHAubGFuZ3VhZ2UoKS5nZXRMYW5ndWFnZSgpOyAvLyByw6ljdXDDqHJlIGxhIGxhbmd1ZSBkZSBsJ3V0aWxpc2F0ZXVyLCDDqXRhbnQgZG9ubsOpIHF1ZSBub3VzIGF2b25zIHBhcyBtaXMgdW5lIHByaW9yaXTDqVxyXG4gICAgICAgIC8vIGNlbGEgdmEgY2hvaXNpciBwYXIgZMOpZmF1dCBsZSBsYW5nYWdlIGR1IG5hdmlnYXRldXJcclxuICAgICAgICB5aWVsZCBPa1dhaXQoNTAwKTsgLy8gYXR0ZW5kcmUgNTAwIG1zXHJcbiAgICAgICAgeWllbGQgQXBwLnRyYW5zbGF0b3IoKS5zZXRVcmwobmV3IE9rVXJsKGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbGF1a2Vya2lsbGlhbi9Pay1GcmFtZXdvcmsvbWFpbi90ZXN0L0xhbmd1YWdlcy9UUl8ke2xhbmd9Lmpzb25gKSk7XHJcbiAgICAgICAgLy8gZGFucyBsZSB0cmFkdWN0ZXVyIGluY29ycG9yw6kgZGFucyBsJ2luc3RhbmNlIEFwcCwgb24gcHLDqWNpc2UgbCd1cmwgcXUnaWwgZG9pdCBhZG9wdMOpXHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gICAgY3JlYXRlSW1nKCk7IC8vIGFwcGVsZSBsYSBmb25jdGlvbiBwcsOpY8OpZGVtbWVudCBkw6lmaW5pcyAoIGNyw6llciBldCBpbXBvcnRlIHVuZSBpbWFnZSBzdXIgbGUgZG9tIClcclxuICAgIHRyYW5zbGF0ZSgpOyAvLyBhcHBlbGUgbGEgZm9uY3Rpb24gcHLDqWPDqWRlbW1lbnQgZMOpZmluaXMgICggdHJhZHVpdCBsYSBwYWdlIClcclxufVxyXG5BcHAudHJhbnNsYXRvcigpLm9uKFwidHJhbnNsYXRlZFwiLCAoKSA9PiB7XHJcbn0pO1xyXG5sZXQgaXNQcmVzc2VkID0gZmFsc2U7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291Y291XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgIC8vIHNpIGxlIGJ1dHRvbiBuJ2EgcGFzIMOpdMOpIHByw6ljw6kgaWwgeSBhIG1vaW5zIGRlIDFzLCBhdHRlbmRzIHVuZSBzZWNvbmRlIGV0IGFmZmljaGUgc2FsdXQgbGVzIGNvcGFpbnNcclxuICAgIGlmICghaXNQcmVzc2VkKSB7IC8vIHbDqXJpZmllIHF1ZSBsZSBidXR0b24gbidhIHBhcyDDqXTDqSBwcsOpY8OpIGRlcHVpcyAxc1xyXG4gICAgICAgIGlzUHJlc3NlZCA9IHRydWU7IC8vIGRpdCBxdWUgbGUgYnV0dG9uIMOgIMOpdMOpIHByw6ljw6ksIGlsIHkgYSBtb2lucyAxc1xyXG4gICAgICAgIHlpZWxkIE9rV2FpdCgxMDAwKTsgLy8gYXR0ZW5kcyAxcyBvdSAxMDAwbXNcclxuICAgICAgICAvL2FsZXJ0KFwiU2FsdXQgbGVzIGNvcGFpbnNcIik7IC8vIGFmZmljaGUgXCJTYWx1dCBsZXMgY29wYWluc1wieFxyXG4gICAgICAgIGlzUHJlc3NlZCA9IGZhbHNlOyAvLyBkaXQgcXVlIGxlIGJ1dHRvbiBuJ2EgcGFzIMOpdMOpIHByw6ljw6kgZGVwdWlzIDFzXHJcbiAgICB9XHJcbn0pKTtcclxubGV0IGRpYWxvZyA9IG5ldyBPa0RpYWxvZyh7fSk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kKGRpYWxvZyk7XHJcbm1haW4oKTsgLy8gYXBwZWwgbGEgZm9uY3Rpb24gcHJpbmNpcGFsZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
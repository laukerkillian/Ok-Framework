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
/*! exports provided: OkTr, OkWidget, css, OkDialog, OkWidgetEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ok_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ok-dialog */ "./framework/Components/ok-dialog.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OkDialog", function() { return _ok_dialog__WEBPACK_IMPORTED_MODULE_0__["OkDialog"]; });

/* harmony import */ var _ok_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ok-widget */ "./framework/Components/ok-widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OkWidget", function() { return _ok_widget__WEBPACK_IMPORTED_MODULE_1__["OkWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OkWidgetEvents", function() { return _ok_widget__WEBPACK_IMPORTED_MODULE_1__["Events"]; });

/* harmony import */ var _ok_tr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ok-tr */ "./framework/Components/ok-tr.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OkTr", function() { return _ok_tr__WEBPACK_IMPORTED_MODULE_2__["OkTr"]; });

/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css */ "./framework/css.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _css__WEBPACK_IMPORTED_MODULE_3__["css"]; });








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
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css */ "./framework/css.ts");
/* harmony import */ var _OkSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OkSize */ "./framework/OkSize.ts");
/* harmony import */ var _OkUnit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../OkUnit */ "./framework/OkUnit.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _modal, _shadow;




class OkDialog extends _ok_widget__WEBPACK_IMPORTED_MODULE_0__["OkWidget"] {
    constructor(options) {
        super();
        /**
         * OkDialog enable to create a small window inside the navigator's window
         * @param options
         */
        _modal.set(this, new _ok_widget__WEBPACK_IMPORTED_MODULE_0__["OkWidget"]());
        _shadow.set(this, this.attachShadow({ mode: 'closed' }));
        __classPrivateFieldGet(this, _shadow).append(__classPrivateFieldGet(this, _modal));
        __classPrivateFieldGet(this, _modal).setStyle(new Map([
            [_css__WEBPACK_IMPORTED_MODULE_1__["css"].property["max-width"], "500px"],
            [_css__WEBPACK_IMPORTED_MODULE_1__["css"].property["width"], "100%"],
            [_css__WEBPACK_IMPORTED_MODULE_1__["css"].property["max-height"], "300px"],
            [_css__WEBPACK_IMPORTED_MODULE_1__["css"].property["height"], "100%"],
            [_css__WEBPACK_IMPORTED_MODULE_1__["css"].property["display"], "block"],
            [_css__WEBPACK_IMPORTED_MODULE_1__["css"].property["background"], "white"],
            [_css__WEBPACK_IMPORTED_MODULE_1__["css"].property["border-radius"], "15px"],
            [_css__WEBPACK_IMPORTED_MODULE_1__["css"].property["padding"], "20px 20px"]
        ]));
        __classPrivateFieldGet(this, _modal).setHTML(`
        <div class="title">
            <span></span>
        </div>
        `);
        this.setStyle(new Map([
            [_css__WEBPACK_IMPORTED_MODULE_1__["css"].property["width"], "100%"],
            [_css__WEBPACK_IMPORTED_MODULE_1__["css"].property["height"], "0"],
            [_css__WEBPACK_IMPORTED_MODULE_1__["css"].property["display"], "flex"],
            [_css__WEBPACK_IMPORTED_MODULE_1__["css"].property["position"], "absolute"],
            [_css__WEBPACK_IMPORTED_MODULE_1__["css"].property["top"], "0px"],
            [_css__WEBPACK_IMPORTED_MODULE_1__["css"].property["left"], "0px"],
            [_css__WEBPACK_IMPORTED_MODULE_1__["css"].property["background"], "rgba(0, 0, 0, 0.3)"],
            [_css__WEBPACK_IMPORTED_MODULE_1__["css"].property["justify-content"], "center"],
            [_css__WEBPACK_IMPORTED_MODULE_1__["css"].property["align-items"], "center"],
            [_css__WEBPACK_IMPORTED_MODULE_1__["css"].property["overflow"], "hidden"],
            [_css__WEBPACK_IMPORTED_MODULE_1__["css"].property["transition"], "all .5s ease-out"]
        ]));
    }
    calledByConnectedCallback() {
    }
    show() {
        this.setStyleProperty(_css__WEBPACK_IMPORTED_MODULE_1__["css"].property["height"], "100%");
    }
    size() {
        let sizeRect = __classPrivateFieldGet(this, _modal).getClientRects()[0];
        return new _OkSize__WEBPACK_IMPORTED_MODULE_2__["OkSize"]({
            width: sizeRect.width,
            height: sizeRect.height
        });
    }
    setSize(size) {
        let sizeOkType;
        if (!(size instanceof _OkSize__WEBPACK_IMPORTED_MODULE_2__["OkSize"])) {
            sizeOkType = new _OkSize__WEBPACK_IMPORTED_MODULE_2__["OkSize"]({
                width: size.width,
                height: size.height
            });
        }
        else {
            sizeOkType = size;
        }
        __classPrivateFieldGet(this, _modal).setStyleProperty(_css__WEBPACK_IMPORTED_MODULE_1__["css"].property["width"], Object(_OkUnit__WEBPACK_IMPORTED_MODULE_3__["OkUnit"])(sizeOkType.width(), "px"));
        __classPrivateFieldGet(this, _modal).setStyleProperty(_css__WEBPACK_IMPORTED_MODULE_1__["css"].property["height"], Object(_OkUnit__WEBPACK_IMPORTED_MODULE_3__["OkUnit"])(sizeOkType.height(), "px"));
    }
}
_modal = new WeakMap(), _shadow = new WeakMap();



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
/* harmony import */ var _OkTranslator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OkTranslator */ "./framework/OkTranslator.ts");



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
        this.App.translator().on(_OkTranslator__WEBPACK_IMPORTED_MODULE_2__["Events"].translated, () => {
            el.innerText = this.App.translator().translate(this.m_text);
        });
    }
}



/***/ }),

/***/ "./framework/Components/ok-widget.ts":
/*!*******************************************!*\
  !*** ./framework/Components/ok-widget.ts ***!
  \*******************************************/
/*! exports provided: OkWidget, Events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkWidget", function() { return OkWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony import */ var _OkSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OkSize */ "./framework/OkSize.ts");
/* harmony import */ var _OkUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OkUnit */ "./framework/OkUnit.ts");
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css */ "./framework/css.ts");
/* harmony import */ var _OkEventsEmitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../OkEventsEmitter */ "./framework/OkEventsEmitter.ts");
/* harmony import */ var _OkMultipleExtends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../OkMultipleExtends */ "./framework/OkMultipleExtends.ts");





var Events;
(function (Events) {
    Events["HTMLContentChange"] = "HTMLContentChange";
})(Events || (Events = {}));
class OkWidget extends Object(_OkMultipleExtends__WEBPACK_IMPORTED_MODULE_4__["OkMultipleExtends"])(HTMLElement, _OkEventsEmitter__WEBPACK_IMPORTED_MODULE_3__["OkEventsEmitter"]) {
    constructor() {
        super(new Map([]));
        this.applyCustomStyle();
        this.registerEvents();
        this.HTMLContentChangeObserver();
    }
    connectedCallback() {
        this.calledByConnectedCallback();
    }
    on(event, listener) {
        if (event in Events) {
            super.on(event, listener);
        }
        else {
            throw new Error("The event send doesn't exist on this object!");
        }
    }
    registerEvents() {
        this.on(Events.HTMLContentChange, () => { });
    }
    HTMLContentChangeObserver() {
    }
    calledByConnectedCallback() {
        if (this.getAttribute("template")) {
            let templateId = this.getAttribute("template");
            if (document.getElementById(templateId) !== null && document.getElementById(templateId) instanceof HTMLTemplateElement) {
                let template = document.getElementById(templateId);
                let templateContent = template.content.cloneNode(true);
                let shadow = this.attachShadow({ mode: 'closed' });
                shadow.append(templateContent);
            }
            else {
                throw new Error("We can't found template or isn't an instance of template element");
            }
        }
    }
    applyCustomStyle() {
        this.setStyleProperty(_css__WEBPACK_IMPORTED_MODULE_2__["css"].property.display, "block");
    }
    getAttributes() {
        return this.attributes;
    }
    size() {
        let sizeRect = this.getClientRects()[0];
        return new _OkSize__WEBPACK_IMPORTED_MODULE_0__["OkSize"]({
            width: sizeRect.width,
            height: sizeRect.height
        });
    }
    setStyleProperty(property, value) {
        this.style.setProperty(property, value);
    }
    setHTML(htmlString) {
        this.innerHTML = htmlString;
    }
    /**
     * give style to elements
     * example :
     * ```ts
     * customElements.define("ok-widget", OkWidget)
     * let myObj = new OkWidget()
     * myObj.setStyle(new Map([
     *      [css.property["width"], "100%"], // width: 100%
     *      [css.property["height"], "500px"], // height: 100%
     *      [css.property["display"], "block"], // display : block
     *      [css.property["background"], "blue"]
     * ]));
     * document.body.append(myObj)
     * ```
     * @param styles
     */
    setStyle(styles) {
        for (const style of styles) {
            const key = style[0];
            const value = style[1];
            if (key === undefined) {
                throw Error("Undefined key");
            }
            else if (value === undefined) {
                throw Error("Undefined value");
            }
            this.setStyleProperty(key, value);
        }
    }
    ;
    setSize(size) {
        let sizeOkType;
        if (!(size instanceof _OkSize__WEBPACK_IMPORTED_MODULE_0__["OkSize"])) {
            sizeOkType = new _OkSize__WEBPACK_IMPORTED_MODULE_0__["OkSize"]({
                width: size.width,
                height: size.height
            });
        }
        else {
            sizeOkType = size;
        }
        this.style.width = Object(_OkUnit__WEBPACK_IMPORTED_MODULE_1__["OkUnit"])(sizeOkType.width(), "px");
        this.style.height = Object(_OkUnit__WEBPACK_IMPORTED_MODULE_1__["OkUnit"])(sizeOkType.height(), "px");
    }
}



/***/ }),

/***/ "./framework/Ok.ts":
/*!*************************!*\
  !*** ./framework/Ok.ts ***!
  \*************************/
/*! exports provided: Ok, OkImage, OkUrl, currApp, OkEventsEmitter, OkWait, OkUnit, OkSize, OkArray, OkTranslatorEvents, OkEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ok", function() { return Ok; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkEvents", function() { return Events; });
/* harmony import */ var _OkImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OkImage */ "./framework/OkImage.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OkImage", function() { return _OkImage__WEBPACK_IMPORTED_MODULE_0__["OkImage"]; });

/* harmony import */ var _OkTranslator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OkTranslator */ "./framework/OkTranslator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OkTranslatorEvents", function() { return _OkTranslator__WEBPACK_IMPORTED_MODULE_1__["Events"]; });

/* harmony import */ var _OkLanguage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OkLanguage */ "./framework/OkLanguage.ts");
/* harmony import */ var _private_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./private/global */ "./framework/private/global.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "currApp", function() { return _private_global__WEBPACK_IMPORTED_MODULE_3__["currApp"]; });

/* harmony import */ var _OkUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OkUrl */ "./framework/OkUrl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OkUrl", function() { return _OkUrl__WEBPACK_IMPORTED_MODULE_4__["OkUrl"]; });

/* harmony import */ var _OkEventsEmitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OkEventsEmitter */ "./framework/OkEventsEmitter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OkEventsEmitter", function() { return _OkEventsEmitter__WEBPACK_IMPORTED_MODULE_5__["OkEventsEmitter"]; });

/* harmony import */ var _framework_OkWait__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../framework/OkWait */ "./framework/OkWait.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OkWait", function() { return _framework_OkWait__WEBPACK_IMPORTED_MODULE_6__["OkWait"]; });

/* harmony import */ var _OkUnit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./OkUnit */ "./framework/OkUnit.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OkUnit", function() { return _OkUnit__WEBPACK_IMPORTED_MODULE_7__["OkUnit"]; });

/* harmony import */ var _OkSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./OkSize */ "./framework/OkSize.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OkSize", function() { return _OkSize__WEBPACK_IMPORTED_MODULE_8__["OkSize"]; });

/* harmony import */ var _framework_OkArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../framework/OkArray */ "./framework/OkArray.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OkArray", function() { return _framework_OkArray__WEBPACK_IMPORTED_MODULE_9__["OkArray"]; });

/* harmony import */ var _stylesheet_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stylesheet.scss */ "./framework/stylesheet.scss");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











window.Array.prototype.toOkArray = function () {
    return new _framework_OkArray__WEBPACK_IMPORTED_MODULE_9__["OkArray"](...this);
};
var Events;
(function (Events) {
    Events["ready"] = "ready";
})(Events || (Events = {}));
class Ok extends _OkEventsEmitter__WEBPACK_IMPORTED_MODULE_5__["OkEventsEmitter"] {
    constructor(options) {
        super();
        this.m_icon = new _OkImage__WEBPACK_IMPORTED_MODULE_0__["OkImage"]({ url: new _OkUrl__WEBPACK_IMPORTED_MODULE_4__["OkUrl"]("") });
        this.m_translator = new _OkTranslator__WEBPACK_IMPORTED_MODULE_1__["OkTranslator"]();
        this.m_language = new _OkLanguage__WEBPACK_IMPORTED_MODULE_2__["OkLanguage"]();
        Object(_private_global__WEBPACK_IMPORTED_MODULE_3__["setApp"])(this);
        this.setConfiguration(options).then(() => { });
        this.registerEvents();
        this.init();
    }
    init() {
        window.addEventListener("DOMContentLoaded", () => {
            this.emit(Events.ready, {});
        });
    }
    setConfiguration(options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (options.urlTranslator) {
                yield this.m_translator.setUrl(options.urlTranslator);
            }
            if (options.title) {
                this.setTitle(options.title);
            }
        });
    }
    title() {
        return document.title;
    }
    setTitle(title) {
        document.title = title;
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
    // rewrite
    on(event, listener) {
        if (event in Events) {
            super.on(event, listener);
        }
        else {
            throw new Error("The event send doesn't exist on this object!");
        }
    }
    registerEvents() {
        this.on(Events.ready, () => { });
    }
}



/***/ }),

/***/ "./framework/OkArray.ts":
/*!******************************!*\
  !*** ./framework/OkArray.ts ***!
  \******************************/
/*! exports provided: OkArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkArray", function() { return OkArray; });
class OkArray extends Array {
    constructor(...args) {
        super(args);
    }
    inArray(item) {
        if (this.indexOf(item) > -1) {
            return true;
        }
        return false;
    }
}
Array.prototype.toOkArray = function () {
    return new OkArray(...this);
};



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

/***/ "./framework/OkMultipleExtends.ts":
/*!****************************************!*\
  !*** ./framework/OkMultipleExtends.ts ***!
  \****************************************/
/*! exports provided: OkMultipleExtends */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkMultipleExtends", function() { return OkMultipleExtends; });
/**
 * This is a complex function which should only use to has multiple extends and now the super parameters only accept Map.
 *
 * ```ts
 * class Obj {
 *     constructor(title: string) {
 *         console.log(title)
 *     }
 * }
 * class Obj2 {
 *     constructor(obj: {title: string}) {
 *         console.log(obj.title)
 *     }
 * }
 * class Obj3 {
 *     constructor(title: string, age: number) {
 *         console.log(title)
 *         console.log(age)
 *     }
 * }
 * class Obj4 extends OkMultipleExtends(Obj, Obj2, Obj3) {
 *
 *      constructor() {
 *          super(new Map([
 *              ["Obj", ["Salut"]],
 *              ["Obj2", [{title: "Hey Mama"}]],
 *              ["Obj3", ["Mhhhh", 16]]
 *          ]));
 *     }
 * }
 * let obj = new Obj4();
 * ```
 *
 * @param baseClass
 * @param mixins
 * @constructor
 */
function OkMultipleExtends(baseClass, ...mixins) {
    class base extends baseClass {
        constructor(args) {
            let proxyHandler = {
                get: function (obj, prop) {
                    // On obtient le nombre de produits
                    // un alias pour products.length
                    let résultat;
                    for (let produit of obj) {
                        if (produit[0] === prop) {
                            résultat = produit;
                        }
                    }
                    if (résultat) {
                        return résultat;
                    }
                    return undefined;
                }
            };
            let argsT = new Proxy(args, proxyHandler);
            if (argsT[baseClass.name]) {
                super(...argsT[baseClass.name][1]);
            }
            else {
                super();
            }
            for (const mixin of mixins) {
                if (mixin) {
                    if (argsT[mixin.name]) {
                        copyProps(this, (new mixin(...argsT[mixin.name][1])));
                    }
                    else {
                        copyProps(this, (new mixin));
                    }
                }
            }
        }
    }
    let copyProps = (target, source) => {
        let props = Object.getOwnPropertyNames(source);
        for (const prop of props) {
            if (!prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
        }
        let symbols = Object.getOwnPropertySymbols(source);
        for (const symbol of symbols) {
            Object.defineProperty(target, symbol, Object.getOwnPropertyDescriptor(source, symbol));
        }
    };
    mixins.forEach((mixin) => {
        copyProps(base.prototype, mixin.prototype);
        copyProps(base, mixin);
    });
    return base;
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
        return this.m_width;
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
    // rewrite
    on(event, listener) {
        if (event in Events) {
            super.on(event, listener);
        }
        else {
            throw new Error("The event send doesn't exist on this object!");
        }
    }
    registerEvents() {
        this.on(Events.translated, () => { });
    }
}



/***/ }),

/***/ "./framework/OkUnit.ts":
/*!*****************************!*\
  !*** ./framework/OkUnit.ts ***!
  \*****************************/
/*! exports provided: OkUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkUnit", function() { return OkUnit; });
function OkUnit(value, unit = "px") {
    return value.toString() + unit;
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
 * ```typescript
 *  await OkWait(500); // wait 500ms
 * ```
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

/***/ "./framework/css.ts":
/*!**************************!*\
  !*** ./framework/css.ts ***!
  \**************************/
/*! exports provided: css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
var css;
(function (css) {
    let property;
    (function (property) {
        /**
         *
         The CSS align-content property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/align-content \
         available values : https://cssvalues.com/?view=align-content

         */
        property["align-content"] = "align-content";
        /**
         *
         The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/align-items \
         available values : https://cssvalues.com/?view=align-items

         */
        property["align-items"] = "align-items";
        /**
         *
         The align-self CSS property overrides a grid or flex item's align-items value. In Grid, it aligns the item inside the&nbsp;grid area. In Flexbox, it aligns the item on the cross axis.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/align-self \
         available values : https://cssvalues.com/?view=align-self

         */
        property["align-self"] = "align-self";
        /**
         *
         The alignment-baseline attribute specifies how an object is aligned with respect to its parent. This property specifies which baseline of this element is to be aligned with the corresponding baseline of the parent. For example, this allows alphabetic baselines in Roman text to stay aligned across font size changes. It defaults to the baseline with the same name as the computed value of the alignment-baseline property.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/alignment-baseline \
         available values : https://cssvalues.com/?view=alignment-baseline

         */
        property["alignment-baseline"] = "alignment-baseline";
        /**
         *
         The all shorthand CSS property resets all of an element's properties except unicode-bidi, direction, and CSS Custom Properties. It can set properties to their initial or inherited values, or to the values specified in another stylesheet origin.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/all \
         available values : https://cssvalues.com/?view=all

         */
        property["all"] = "all";
        /**
         *
         The animation shorthand CSS property applies an animation between styles. It is a shorthand for animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, and animation-play-state.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/animation \
         available values : https://cssvalues.com/?view=animation

         */
        property["animation"] = "animation";
        /**
         *
         The animation-delay CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay \
         available values : https://cssvalues.com/?view=animation-delay

         */
        property["animation-delay"] = "animation-delay";
        /**
         *
         The animation-direction CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction \
         available values : https://cssvalues.com/?view=animation-direction

         */
        property["animation-direction"] = "animation-direction";
        /**
         *
         The animation-duration CSS property sets the length of time that an animation takes to complete one cycle.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration \
         available values : https://cssvalues.com/?view=animation-duration

         */
        property["animation-duration"] = "animation-duration";
        /**
         *
         The animation-fill-mode CSS property sets how a CSS animation applies styles to its target before and after its execution.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode \
         available values : https://cssvalues.com/?view=animation-fill-mode

         */
        property["animation-fill-mode"] = "animation-fill-mode";
        /**
         *
         The animation-iteration-count CSS property sets the number of times an animation sequence should be played before stopping.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count \
         available values : https://cssvalues.com/?view=animation-iteration-count

         */
        property["animation-iteration-count"] = "animation-iteration-count";
        /**
         *
         The animation-name CSS property specifies the names of one or more @keyframes at-rules describing the animation or animations to apply to the element.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name \
         available values : https://cssvalues.com/?view=animation-name

         */
        property["animation-name"] = "animation-name";
        /**
         *
         The animation-play-state CSS property sets whether an animation is running or paused.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state \
         available values : https://cssvalues.com/?view=animation-play-state

         */
        property["animation-play-state"] = "animation-play-state";
        /**
         *
         The animation-timing-function CSS property sets how an animation progresses through the duration of each cycle.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function \
         available values : https://cssvalues.com/?view=animation-timing-function

         */
        property["animation-timing-function"] = "animation-timing-function";
        /**
         *
         The appearance CSS property is used to display an element using platform-native styling, based on the operating system's theme. The -moz-appearance and -webkit-appearance properties are non-standard versions of this property, used (respectively) by Gecko (Firefox) and by WebKit-based (e.g., Safari) and Blink-based (e.g., Chrome, Opera) browsers to achieve the same thing. Note that Firefox and Edge also support -webkit-appearance, for compatibility reasons.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/appearance \
         available values : https://cssvalues.com/?view=appearance

         */
        property["appearance"] = "appearance";
        /**
         *
         */
        property["ascent-override"] = "ascent-override";
        /**
         *
         The aspect-ratio&nbsp;&nbsp;CSS property sets a preferred aspect ratio for the box, which will be used in the calculation of auto sizes and some other layout functions.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio \
         available values : https://cssvalues.com/?view=aspect-ratio

         */
        property["aspect-ratio"] = "aspect-ratio";
        /**
         *
         The backdrop-filter CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything behind the element, to see the effect you must make the element or its background at least partially transparent.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter \
         available values : https://cssvalues.com/?view=backdrop-filter

         */
        property["backdrop-filter"] = "backdrop-filter";
        /**
         *
         The backface-visibility CSS property sets whether the back face of an element is visible when turned towards the user.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility \
         available values : https://cssvalues.com/?view=backface-visibility

         */
        property["backface-visibility"] = "backface-visibility";
        /**
         *
         The background shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/background \
         available values : https://cssvalues.com/?view=background

         */
        property["background"] = "background";
        /**
         *
         The background-attachment CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment \
         available values : https://cssvalues.com/?view=background-attachment

         */
        property["background-attachment"] = "background-attachment";
        /**
         *
         The background-blend-mode CSS property sets how an element's background images should blend with each other and with the element's background color.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode \
         available values : https://cssvalues.com/?view=background-blend-mode

         */
        property["background-blend-mode"] = "background-blend-mode";
        /**
         *
         The background-clip CSS property sets whether an element's background extends underneath its border box, padding box, or content box.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip \
         available values : https://cssvalues.com/?view=background-clip

         */
        property["background-clip"] = "background-clip";
        /**
         *
         The background-color CSS property sets the background color of an element.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/background-color \
         available values : https://cssvalues.com/?view=background-color

         */
        property["background-color"] = "background-color";
        /**
         *
         The background-image CSS property sets one or more background images on an element.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/background-image \
         available values : https://cssvalues.com/?view=background-image

         */
        property["background-image"] = "background-image";
        /**
         *
         The background-origin CSS property sets the background's origin: from the border start, inside the border, or inside the padding.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin \
         available values : https://cssvalues.com/?view=background-origin

         */
        property["background-origin"] = "background-origin";
        /**
         *
         The background-position CSS property sets the initial position for each background image. The position is relative to the position layer set by background-origin.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/background-position \
         available values : https://cssvalues.com/?view=background-position

         */
        property["background-position"] = "background-position";
        /**
         *
         The background-position-x CSS property sets the initial horizontal position for each background image. The position is relative to the position layer set by background-origin.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/background-position-x \
         available values : https://cssvalues.com/?view=background-position-x

         */
        property["background-position-x"] = "background-position-x";
        /**
         *
         The background-position-y CSS property sets the initial vertical position for each background image. The position is relative to the position layer set by background-origin.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/background-position-y \
         available values : https://cssvalues.com/?view=background-position-y

         */
        property["background-position-y"] = "background-position-y";
        /**
         *
         The background-repeat CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat \
         available values : https://cssvalues.com/?view=background-repeat

         */
        property["background-repeat"] = "background-repeat";
        /**
         *
         */
        property["background-repeat-x"] = "background-repeat-x";
        /**
         *
         */
        property["background-repeat-y"] = "background-repeat-y";
        /**
         *
         The background-size CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/background-size \
         available values : https://cssvalues.com/?view=background-size

         */
        property["background-size"] = "background-size";
        /**
         *
         The baseline-shift attribute allows repositioning of the dominant-baseline relative to the dominant-baseline of the parent text content element. The shifted object might be a sub- or superscript.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/baseline-shift \
         available values : https://cssvalues.com/?view=baseline-shift

         */
        property["baseline-shift"] = "baseline-shift";
        /**
         *
         The block-size CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the width or the height property, depending on the value of writing-mode.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/block-size \
         available values : https://cssvalues.com/?view=block-size

         */
        property["block-size"] = "block-size";
        /**
         *
         The border shorthand CSS property sets an element's border. It sets the values of border-width, border-style, and border-color.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border \
         available values : https://cssvalues.com/?view=border

         */
        property["border"] = "border";
        /**
         *
         The border-block CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-block \
         available values : https://cssvalues.com/?view=border-block

         */
        property["border-block"] = "border-block";
        /**
         *
         The border-block-color CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color and border-bottom-color, or border-right-color and border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-color \
         available values : https://cssvalues.com/?view=border-block-color

         */
        property["border-block-color"] = "border-block-color";
        /**
         *
         The border-block-end CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end \
         available values : https://cssvalues.com/?view=border-block-end

         */
        property["border-block-end"] = "border-block-end";
        /**
         *
         The border-block-end-color CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color,&nbsp;border-right-color,&nbsp;border-bottom-color, or border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-color \
         available values : https://cssvalues.com/?view=border-block-end-color

         */
        property["border-block-end-color"] = "border-block-end-color";
        /**
         *
         The border-block-end-style CSS property defines the style of the logical block-end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style, border-right-style, border-bottom-style, or border-left-style property depending on the values defined for writing-mode, direction, and text-orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-style \
         available values : https://cssvalues.com/?view=border-block-end-style

         */
        property["border-block-end-style"] = "border-block-end-style";
        /**
         *
         The border-block-end-width CSS property defines the width of the logical block-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width,&nbsp;border-right-width,&nbsp;border-bottom-width, or border-left-width property depending on the values defined for writing-mode, direction, and text-orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-width \
         available values : https://cssvalues.com/?view=border-block-end-width

         */
        property["border-block-end-width"] = "border-block-end-width";
        /**
         *
         The border-block-start CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start \
         available values : https://cssvalues.com/?view=border-block-start

         */
        property["border-block-start"] = "border-block-start";
        /**
         *
         The border-block-start-color CSS property defines the color of the logical block-start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color,&nbsp;border-right-color,&nbsp;border-bottom-color, or border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-color \
         available values : https://cssvalues.com/?view=border-block-start-color

         */
        property["border-block-start-color"] = "border-block-start-color";
        /**
         *
         The border-block-start-style CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style,&nbsp;border-right-style,&nbsp;border-bottom-style, or border-left-style property depending on the values defined for writing-mode, direction, and text-orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-style \
         available values : https://cssvalues.com/?view=border-block-start-style

         */
        property["border-block-start-style"] = "border-block-start-style";
        /**
         *
         The border-block-start-width CSS property defines the width of the logical block-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width,&nbsp;border-right-width,&nbsp;border-bottom-width, or border-left-width property depending on the values defined for writing-mode, direction, and text-orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-width \
         available values : https://cssvalues.com/?view=border-block-start-width

         */
        property["border-block-start-width"] = "border-block-start-width";
        /**
         *
         The border-block-style CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style and border-bottom-style, or border-left-style and border-right-style properties depending on the values defined for writing-mode, direction, and text-orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-style \
         available values : https://cssvalues.com/?view=border-block-style

         */
        property["border-block-style"] = "border-block-style";
        /**
         *
         The border-block-width CSS property defines the width of the logical block&nbsp;borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width and&nbsp;border-bottom-width, or border-left-width, and&nbsp;border-right-width property depending on the values defined for writing-mode, direction, and text-orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-width \
         available values : https://cssvalues.com/?view=border-block-width

         */
        property["border-block-width"] = "border-block-width";
        /**
         *
         The border-bottom shorthand CSS property sets an element's bottom border. It sets the values of border-bottom-width, border-bottom-style and border-bottom-color.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom \
         available values : https://cssvalues.com/?view=border-bottom

         */
        property["border-bottom"] = "border-bottom";
        /**
         *
         The border-bottom-color CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties border-color or border-bottom.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color \
         available values : https://cssvalues.com/?view=border-bottom-color

         */
        property["border-bottom-color"] = "border-bottom-color";
        /**
         *
         The border-bottom-left-radius CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius \
         available values : https://cssvalues.com/?view=border-bottom-left-radius

         */
        property["border-bottom-left-radius"] = "border-bottom-left-radius";
        /**
         *
         The border-bottom-right-radius CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius \
         available values : https://cssvalues.com/?view=border-bottom-right-radius

         */
        property["border-bottom-right-radius"] = "border-bottom-right-radius";
        /**
         *
         The border-bottom-style CSS property sets the line style of an element's bottom border.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style \
         available values : https://cssvalues.com/?view=border-bottom-style

         */
        property["border-bottom-style"] = "border-bottom-style";
        /**
         *
         The border-bottom-width CSS property sets the width of the bottom border of an element.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width \
         available values : https://cssvalues.com/?view=border-bottom-width

         */
        property["border-bottom-width"] = "border-bottom-width";
        /**
         *
         The border-collapse CSS property sets whether cells inside a &lt;table&gt; have shared or separate borders.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse \
         available values : https://cssvalues.com/?view=border-collapse

         */
        property["border-collapse"] = "border-collapse";
        /**
         *
         The border-color shorthand CSS property sets the color of an element's border.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-color \
         available values : https://cssvalues.com/?view=border-color

         */
        property["border-color"] = "border-color";
        /**
         *
         The border-end-end-radius CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's writing-mode, direction, and text-orientation. This is useful when building styles to work regardless of the text orientation and&nbsp;writing mode.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-end-radius \
         available values : https://cssvalues.com/?view=border-end-end-radius

         */
        property["border-end-end-radius"] = "border-end-end-radius";
        /**
         *
         The border-end-start-radius CSS property defines a logical border radius on an element, which maps to a physical border radius&nbsp;depending on the element's writing-mode, direction, and text-orientation.&nbsp;This is useful when building styles to work regardless of the text orientation and&nbsp;writing mode.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-start-radius \
         available values : https://cssvalues.com/?view=border-end-start-radius

         */
        property["border-end-start-radius"] = "border-end-start-radius";
        /**
         *
         The border-image CSS property draws an image around a given element. It replaces the element's regular border.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-image \
         available values : https://cssvalues.com/?view=border-image

         */
        property["border-image"] = "border-image";
        /**
         *
         The border-image-outset CSS property sets the distance by which an element's border image is set out from its border box.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-outset \
         available values : https://cssvalues.com/?view=border-image-outset

         */
        property["border-image-outset"] = "border-image-outset";
        /**
         *
         The border-image-repeat CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-repeat \
         available values : https://cssvalues.com/?view=border-image-repeat

         */
        property["border-image-repeat"] = "border-image-repeat";
        /**
         *
         The border-image-slice CSS property divides the image specified by border-image-source into regions. These regions form the components of an element's border image.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice \
         available values : https://cssvalues.com/?view=border-image-slice

         */
        property["border-image-slice"] = "border-image-slice";
        /**
         *
         The border-image-source CSS property sets the source image used to create an element's border image.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-source \
         available values : https://cssvalues.com/?view=border-image-source

         */
        property["border-image-source"] = "border-image-source";
        /**
         *
         The border-image-width CSS property sets the width of an element's border image.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-width \
         available values : https://cssvalues.com/?view=border-image-width

         */
        property["border-image-width"] = "border-image-width";
        /**
         *
         The border-inline CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline \
         available values : https://cssvalues.com/?view=border-inline

         */
        property["border-inline"] = "border-inline";
        /**
         *
         The border-inline-color CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color and border-bottom-color, or border-right-color and border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-color \
         available values : https://cssvalues.com/?view=border-inline-color

         */
        property["border-inline-color"] = "border-inline-color";
        /**
         *
         The border-inline-end CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end \
         available values : https://cssvalues.com/?view=border-inline-end

         */
        property["border-inline-end"] = "border-inline-end";
        /**
         *
         The border-inline-end-color CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color, border-right-color, border-bottom-color, or border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-color \
         available values : https://cssvalues.com/?view=border-inline-end-color

         */
        property["border-inline-end-color"] = "border-inline-end-color";
        /**
         *
         The border-inline-end-style CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style, border-right-style, border-bottom-style, or border-left-style property depending on the values defined for writing-mode, direction, and text-orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-style \
         available values : https://cssvalues.com/?view=border-inline-end-style

         */
        property["border-inline-end-style"] = "border-inline-end-style";
        /**
         *
         The border-inline-end-width CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width, border-right-width, border-bottom-width, or border-left-width property depending on the values defined for writing-mode, direction, and text-orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-width \
         available values : https://cssvalues.com/?view=border-inline-end-width

         */
        property["border-inline-end-width"] = "border-inline-end-width";
        /**
         *
         The border-inline-start CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start \
         available values : https://cssvalues.com/?view=border-inline-start

         */
        property["border-inline-start"] = "border-inline-start";
        /**
         *
         The border-inline-start-color CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color, border-right-color, border-bottom-color, or border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-color \
         available values : https://cssvalues.com/?view=border-inline-start-color

         */
        property["border-inline-start-color"] = "border-inline-start-color";
        /**
         *
         The border-inline-start-style CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style, border-right-style, border-bottom-style, or border-left-style property depending on the values defined for writing-mode, direction, and text-orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-style \
         available values : https://cssvalues.com/?view=border-inline-start-style

         */
        property["border-inline-start-style"] = "border-inline-start-style";
        /**
         *
         The border-inline-start-width CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width, border-right-width, border-bottom-width, or border-left-width property depending on the values defined for writing-mode, direction, and text-orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-width \
         available values : https://cssvalues.com/?view=border-inline-start-width

         */
        property["border-inline-start-width"] = "border-inline-start-width";
        /**
         *
         The border-inline-style CSS property defines the style of the logical inline&nbsp;borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style and&nbsp;border-bottom-style, or&nbsp;border-left-style and&nbsp;border-right-style properties&nbsp;depending on the values defined for writing-mode, direction, and text-orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-style \
         available values : https://cssvalues.com/?view=border-inline-style

         */
        property["border-inline-style"] = "border-inline-style";
        /**
         *
         The border-inline-width CSS property defines the width of the logical inline&nbsp;borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width and&nbsp;border-bottom-width, or border-left-width, and&nbsp;border-right-width property depending on the values defined for writing-mode, direction, and text-orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-width \
         available values : https://cssvalues.com/?view=border-inline-width

         */
        property["border-inline-width"] = "border-inline-width";
        /**
         *
         The border-left shorthand CSS property sets all the properties of an element's left border.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-left \
         available values : https://cssvalues.com/?view=border-left

         */
        property["border-left"] = "border-left";
        /**
         *
         The border-left-color CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties border-color or border-left.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color \
         available values : https://cssvalues.com/?view=border-left-color

         */
        property["border-left-color"] = "border-left-color";
        /**
         *
         The border-left-style CSS property sets the line style of an element's left border.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style \
         available values : https://cssvalues.com/?view=border-left-style

         */
        property["border-left-style"] = "border-left-style";
        /**
         *
         The border-left-width CSS property sets the width of the left border of an element.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width \
         available values : https://cssvalues.com/?view=border-left-width

         */
        property["border-left-width"] = "border-left-width";
        /**
         *
         The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius \
         available values : https://cssvalues.com/?view=border-radius

         */
        property["border-radius"] = "border-radius";
        /**
         *
         The border-right shorthand CSS property sets all the properties of an element's right border.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-right \
         available values : https://cssvalues.com/?view=border-right

         */
        property["border-right"] = "border-right";
        /**
         *
         The border-right-color CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties border-color or border-right.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color \
         available values : https://cssvalues.com/?view=border-right-color

         */
        property["border-right-color"] = "border-right-color";
        /**
         *
         The border-right-style CSS property sets the line style of an element's right border.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style \
         available values : https://cssvalues.com/?view=border-right-style

         */
        property["border-right-style"] = "border-right-style";
        /**
         *
         The border-right-width CSS property sets the width of the right border of an element.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width \
         available values : https://cssvalues.com/?view=border-right-width

         */
        property["border-right-width"] = "border-right-width";
        /**
         *
         The border-spacing CSS property sets the distance between the borders of adjacent &lt;table&gt; cells. This property applies only when border-collapse is separate.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing \
         available values : https://cssvalues.com/?view=border-spacing

         */
        property["border-spacing"] = "border-spacing";
        /**
         *
         The border-start-end-radius CSS property defines a logical border radius on an element, which maps to a physical border radius&nbsp;depending on the element's writing-mode, direction, and text-orientation.&nbsp;This is useful when building styles to work regardless of the text orientation and&nbsp;writing mode.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-end-radius \
         available values : https://cssvalues.com/?view=border-start-end-radius

         */
        property["border-start-end-radius"] = "border-start-end-radius";
        /**
         *
         The border-start-start-radius CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's writing-mode, direction, and text-orientation. This is useful when building styles to work regardless of the text orientation and&nbsp;writing mode.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-start-radius \
         available values : https://cssvalues.com/?view=border-start-start-radius

         */
        property["border-start-start-radius"] = "border-start-start-radius";
        /**
         *
         The border-style shorthand CSS property sets the line style for all four sides of an element's border.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-style \
         available values : https://cssvalues.com/?view=border-style

         */
        property["border-style"] = "border-style";
        /**
         *
         The border-top shorthand CSS property sets all the properties of an element's top border.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-top \
         available values : https://cssvalues.com/?view=border-top

         */
        property["border-top"] = "border-top";
        /**
         *
         The border-top-color CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties border-color or border-top.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color \
         available values : https://cssvalues.com/?view=border-top-color

         */
        property["border-top-color"] = "border-top-color";
        /**
         *
         The border-top-left-radius CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius \
         available values : https://cssvalues.com/?view=border-top-left-radius

         */
        property["border-top-left-radius"] = "border-top-left-radius";
        /**
         *
         The border-top-right-radius CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius \
         available values : https://cssvalues.com/?view=border-top-right-radius

         */
        property["border-top-right-radius"] = "border-top-right-radius";
        /**
         *
         The border-top-style CSS property sets the line style of an element's top border.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-style \
         available values : https://cssvalues.com/?view=border-top-style

         */
        property["border-top-style"] = "border-top-style";
        /**
         *
         The border-top-width CSS property sets the width of the top border of an element.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width \
         available values : https://cssvalues.com/?view=border-top-width

         */
        property["border-top-width"] = "border-top-width";
        /**
         *
         The border-width shorthand CSS property sets the width of an element's border.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-width \
         available values : https://cssvalues.com/?view=border-width

         */
        property["border-width"] = "border-width";
        /**
         *
         The bottom CSS property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/bottom \
         available values : https://cssvalues.com/?view=bottom

         */
        property["bottom"] = "bottom";
        /**
         *
         The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow \
         available values : https://cssvalues.com/?view=box-shadow

         */
        property["box-shadow"] = "box-shadow";
        /**
         *
         The box-sizing CSS property sets how the total width and height of an element is calculated.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing \
         available values : https://cssvalues.com/?view=box-sizing

         */
        property["box-sizing"] = "box-sizing";
        /**
         *
         The break-after CSS property sets how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/break-after \
         available values : https://cssvalues.com/?view=break-after

         */
        property["break-after"] = "break-after";
        /**
         *
         The break-before CSS property sets how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/break-before \
         available values : https://cssvalues.com/?view=break-before

         */
        property["break-before"] = "break-before";
        /**
         *
         The break-inside CSS property sets how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside \
         available values : https://cssvalues.com/?view=break-inside

         */
        property["break-inside"] = "break-inside";
        /**
         *
         */
        property["buffered-rendering"] = "buffered-rendering";
        /**
         *
         The caption-side CSS property puts the content of a table's &lt;caption&gt; on the specified side. The values are relative to the writing-mode of the table.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side \
         available values : https://cssvalues.com/?view=caption-side

         */
        property["caption-side"] = "caption-side";
        /**
         *
         The caret-color CSS property sets the color of the insertion caret, the visible marker where the next character typed will be inserted. This is sometimes referred to as the text input cursor. The caret appears in elements such as &lt;input&gt; or those with the contenteditable attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/caret-color \
         available values : https://cssvalues.com/?view=caret-color

         */
        property["caret-color"] = "caret-color";
        /**
         *
         The clear CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The clear property applies to floating and non-floating elements.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/clear \
         available values : https://cssvalues.com/?view=clear

         */
        property["clear"] = "clear";
        /**
         *
         The clip CSS property defines a visible portion of an element. The clip property applies only to absolutely positioned elements — that is, elements with position:absolute or position:fixed.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/clip \
         available values : https://cssvalues.com/?view=clip

         */
        property["clip"] = "clip";
        /**
         *
         The clip-path CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path \
         available values : https://cssvalues.com/?view=clip-path

         */
        property["clip-path"] = "clip-path";
        /**
         *
         The clip-rule attribute only applies to graphics elements that are contained within a &lt;clipPath&gt; element. The clip-rule attribute basically works as the fill-rule attribute, except that it applies to &lt;clipPath&gt; definitions.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clip-rule \
         available values : https://cssvalues.com/?view=clip-rule

         */
        property["clip-rule"] = "clip-rule";
        /**
         *
         The color CSS property sets the foreground color value of an element's text and text decorations, and sets the &lt;currentcolor&gt; value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/color \
         available values : https://cssvalues.com/?view=color

         */
        property["color"] = "color";
        /**
         *
         The color-interpolation attribute specifies the color space for gradient interpolations, color animations, and alpha compositing.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color-interpolation \
         available values : https://cssvalues.com/?view=color-interpolation

         */
        property["color-interpolation"] = "color-interpolation";
        /**
         *
         The color-interpolation-filters attribute specifies the color space for imaging operations performed via filter effects.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color-interpolation-filters \
         available values : https://cssvalues.com/?view=color-interpolation-filters

         */
        property["color-interpolation-filters"] = "color-interpolation-filters";
        /**
         *
         The color-rendering attribute provides a hint to the SVG user agent about how to optimize its color interpolation and compositing operations.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color-rendering \
         available values : https://cssvalues.com/?view=color-rendering

         */
        property["color-rendering"] = "color-rendering";
        /**
         *
         The color-scheme CSS property allows an element to indicate which color schemes it can comfortably be rendered in.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme \
         available values : https://cssvalues.com/?view=color-scheme

         */
        property["color-scheme"] = "color-scheme";
        /**
         *
         The column-count CSS property breaks an element's content into the specified number of columns.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/column-count \
         available values : https://cssvalues.com/?view=column-count

         */
        property["column-count"] = "column-count";
        /**
         *
         The column-fill CSS property controls how an element's contents are balanced when broken into columns.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/column-fill \
         available values : https://cssvalues.com/?view=column-fill

         */
        property["column-fill"] = "column-fill";
        /**
         *
         The column-gap CSS property sets the size of the gap (gutter) between an element's columns.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap \
         available values : https://cssvalues.com/?view=column-gap

         */
        property["column-gap"] = "column-gap";
        /**
         *
         The column-rule&nbsp;shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule \
         available values : https://cssvalues.com/?view=column-rule

         */
        property["column-rule"] = "column-rule";
        /**
         *
         The column-rule-color CSS property sets the color of the line drawn between columns in a multi-column layout.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-color \
         available values : https://cssvalues.com/?view=column-rule-color

         */
        property["column-rule-color"] = "column-rule-color";
        /**
         *
         The column-rule-style CSS property sets the style of the line drawn between columns in a multi-column layout.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-style \
         available values : https://cssvalues.com/?view=column-rule-style

         */
        property["column-rule-style"] = "column-rule-style";
        /**
         *
         The column-rule-width CSS property sets the width of the line drawn between columns in a multi-column layout.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-width \
         available values : https://cssvalues.com/?view=column-rule-width

         */
        property["column-rule-width"] = "column-rule-width";
        /**
         *
         The column-span CSS property makes it possible for an element to span across all columns when its value is set to all.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/column-span \
         available values : https://cssvalues.com/?view=column-span

         */
        property["column-span"] = "column-span";
        /**
         *
         The column-width CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the column-width value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/column-width \
         available values : https://cssvalues.com/?view=column-width

         */
        property["column-width"] = "column-width";
        /**
         *
         The columns CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/columns \
         available values : https://cssvalues.com/?view=columns

         */
        property["columns"] = "columns";
        /**
         *
         The contain CSS property allows an author to indicate that an element and its contents are, as much as possible, independent of the rest of the document tree. This allows the browser to recalculate layout, style, paint, size, or any combination of them for a limited area of the DOM and not the entire page, leading to obvious performance benefits.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/contain \
         available values : https://cssvalues.com/?view=contain

         */
        property["contain"] = "contain";
        /**
         *
         The contain-intrinsic-size CSS property controls the natural size of an element specified by content-visibility.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/contain-intrinsic-size \
         available values : https://cssvalues.com/?view=contain-intrinsic-size

         */
        property["contain-intrinsic-size"] = "contain-intrinsic-size";
        /**
         *
         The content CSS property replaces an element with a generated value. Objects inserted using the content property are anonymous replaced elements.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/content \
         available values : https://cssvalues.com/?view=content

         */
        property["content"] = "content";
        /**
         *
         The content-visibility CSS property controls whether or not an element renders its contents at all, along with forcing a strong set of containments, allowing user agents to potentially omit large swathes of layout and rendering work until it becomes needed. Basically it enables the user agent to skip an element's rendering work (including layout and painting) until it is needed —&nbsp;which makes the initial page load much faster.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility \
         available values : https://cssvalues.com/?view=content-visibility

         */
        property["content-visibility"] = "content-visibility";
        /**
         *
         The counter-increment CSS property increases or decreases the value of a CSS counter by a given value.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/counter-increment \
         available values : https://cssvalues.com/?view=counter-increment

         */
        property["counter-increment"] = "counter-increment";
        /**
         *
         The counter-reset CSS property resets a CSS counter to a given value.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/counter-reset \
         available values : https://cssvalues.com/?view=counter-reset

         */
        property["counter-reset"] = "counter-reset";
        /**
         *
         The counter-set CSS property sets a CSS counter to a given value. It manipulates the value of existing counters, and will&nbsp;only create new counters if there isn't already a counter of the given name on the element.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/counter-set \
         available values : https://cssvalues.com/?view=counter-set

         */
        property["counter-set"] = "counter-set";
        /**
         *
         The cursor CSS property sets the type of mouse cursor, if any, to show when the mouse pointer is over an element.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/cursor \
         available values : https://cssvalues.com/?view=cursor

         */
        property["cursor"] = "cursor";
        /**
         *
         The cx attribute define the x-axis coordinate of a center point.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cx \
         available values : https://cssvalues.com/?view=cx

         */
        property["cx"] = "cx";
        /**
         *
         The cy attribute define the y-axis coordinate of a center point.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cy \
         available values : https://cssvalues.com/?view=cy

         */
        property["cy"] = "cy";
        /**
         *
         The d attribute defines a path to be drawn.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d \
         available values : https://cssvalues.com/?view=d

         */
        property["d"] = "d";
        /**
         *
         */
        property["descent-override"] = "descent-override";
        /**
         *
         The direction CSS property sets the direction of text, table columns, and horizontal overflow. Use rtl for languages written from right to left (like Hebrew or Arabic), and ltr for those written from left to right (like English and most other languages).

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/direction \
         available values : https://cssvalues.com/?view=direction

         */
        property["direction"] = "direction";
        /**
         *
         The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/display \
         available values : https://cssvalues.com/?view=display

         */
        property["display"] = "display";
        /**
         *
         The dominant-baseline attribute specifies the dominant baseline, which is the baseline used to align the box’s text and inline-level contents. It&nbsp;also indicates the default alignment baseline of any boxes participating in baseline alignment in the box’s alignment context.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dominant-baseline \
         available values : https://cssvalues.com/?view=dominant-baseline

         */
        property["dominant-baseline"] = "dominant-baseline";
        /**
         *
         The empty-cells CSS property sets whether borders and backgrounds appear around &lt;table&gt; cells that have no visible content.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/empty-cells \
         available values : https://cssvalues.com/?view=empty-cells

         */
        property["empty-cells"] = "empty-cells";
        /**
         *
         The fill attribute has two different meanings.&nbsp;For shapes and text it's a presentation attribute that defines the color (or any SVG paint servers like gradients or patterns) used to paint the element; for animation it defines the final state of the animation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill \
         available values : https://cssvalues.com/?view=fill

         */
        property["fill"] = "fill";
        /**
         *
         The fill-opacity attribute is a presentation attribute defining the opacity of the paint server (color, gradient, pattern, etc) applied to a shape.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-opacity \
         available values : https://cssvalues.com/?view=fill-opacity

         */
        property["fill-opacity"] = "fill-opacity";
        /**
         *
         The fill-rule attribute is a presentation attribute defining the algorithm to use to determine the inside part of a shape.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule \
         available values : https://cssvalues.com/?view=fill-rule

         */
        property["fill-rule"] = "fill-rule";
        /**
         *
         The filter CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/filter \
         available values : https://cssvalues.com/?view=filter

         */
        property["filter"] = "filter";
        /**
         *
         The flex CSS shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/flex \
         available values : https://cssvalues.com/?view=flex

         */
        property["flex"] = "flex";
        /**
         *
         The flex-basis CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with box-sizing.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis \
         available values : https://cssvalues.com/?view=flex-basis

         */
        property["flex-basis"] = "flex-basis";
        /**
         *
         The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction \
         available values : https://cssvalues.com/?view=flex-direction

         */
        property["flex-direction"] = "flex-direction";
        /**
         *
         The flex-flow CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow \
         available values : https://cssvalues.com/?view=flex-flow

         */
        property["flex-flow"] = "flex-flow";
        /**
         *
         The flex-grow CSS&nbsp;property sets the flex grow factor of a flex item's main size.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow \
         available values : https://cssvalues.com/?view=flex-grow

         */
        property["flex-grow"] = "flex-grow";
        /**
         *
         The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink \
         available values : https://cssvalues.com/?view=flex-shrink

         */
        property["flex-shrink"] = "flex-shrink";
        /**
         *
         The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap \
         available values : https://cssvalues.com/?view=flex-wrap

         */
        property["flex-wrap"] = "flex-wrap";
        /**
         *
         The float CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/float \
         available values : https://cssvalues.com/?view=float

         */
        property["float"] = "float";
        /**
         *
         The flood-color attribute indicates what color to use to flood the current filter primitive subregion.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/flood-color \
         available values : https://cssvalues.com/?view=flood-color

         */
        property["flood-color"] = "flood-color";
        /**
         *
         The flood-opacity attribute indicates the opacity value to use across the current filter primitive subregion.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/flood-opacity \
         available values : https://cssvalues.com/?view=flood-opacity

         */
        property["flood-opacity"] = "flood-opacity";
        /**
         *
         The font CSS shorthand property sets all the different properties of an element's font. Alternatively, it sets an element's font to a system font.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/font \
         available values : https://cssvalues.com/?view=font

         */
        property["font"] = "font";
        /**
         *
         */
        property["font-display"] = "font-display";
        /**
         *
         The font-family CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/font-family \
         available values : https://cssvalues.com/?view=font-family

         */
        property["font-family"] = "font-family";
        /**
         *
         The font-feature-settings CSS property controls advanced typographic features in OpenType fonts.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings \
         available values : https://cssvalues.com/?view=font-feature-settings

         */
        property["font-feature-settings"] = "font-feature-settings";
        /**
         *
         The font-kerning CSS property sets the use of the kerning information stored in a font.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/font-kerning \
         available values : https://cssvalues.com/?view=font-kerning

         */
        property["font-kerning"] = "font-kerning";
        /**
         *
         The font-optical-sizing CSS property sets whether text rendering is optimized for viewing at different sizes.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/font-optical-sizing \
         available values : https://cssvalues.com/?view=font-optical-sizing

         */
        property["font-optical-sizing"] = "font-optical-sizing";
        /**
         *
         The font-size CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative &lt;length&gt; units, such as&nbsp;em, ex, and so forth.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/font-size \
         available values : https://cssvalues.com/?view=font-size

         */
        property["font-size"] = "font-size";
        /**
         *
         The font-stretch CSS property selects a normal, condensed, or expanded face from a font.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch \
         available values : https://cssvalues.com/?view=font-stretch

         */
        property["font-stretch"] = "font-stretch";
        /**
         *
         The font-style CSS property sets whether a font should be styled with a normal, italic, or oblique face from its font-family.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/font-style \
         available values : https://cssvalues.com/?view=font-style

         */
        property["font-style"] = "font-style";
        /**
         *
         The font-variant CSS shorthand property allows you to set all the font variants for a font.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant \
         available values : https://cssvalues.com/?view=font-variant

         */
        property["font-variant"] = "font-variant";
        /**
         *
         The font-variant-caps CSS property controls the use of alternate glyphs for capital letters.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-caps \
         available values : https://cssvalues.com/?view=font-variant-caps

         */
        property["font-variant-caps"] = "font-variant-caps";
        /**
         *
         The font-variant-east-asian CSS property controls the use of alternate glyphs for East Asian scripts, like Japanese and Chinese.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-east-asian \
         available values : https://cssvalues.com/?view=font-variant-east-asian

         */
        property["font-variant-east-asian"] = "font-variant-east-asian";
        /**
         *
         The font-variant-ligatures CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-ligatures \
         available values : https://cssvalues.com/?view=font-variant-ligatures

         */
        property["font-variant-ligatures"] = "font-variant-ligatures";
        /**
         *
         The font-variant-numeric CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric \
         available values : https://cssvalues.com/?view=font-variant-numeric

         */
        property["font-variant-numeric"] = "font-variant-numeric";
        /**
         *
         The font-variation-settings CSS property provides low-level control over variable font characteristics, by specifying the four letter axis names of the characteristics you want to vary, along with their values.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/font-variation-settings \
         available values : https://cssvalues.com/?view=font-variation-settings

         */
        property["font-variation-settings"] = "font-variation-settings";
        /**
         *
         The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight \
         available values : https://cssvalues.com/?view=font-weight

         */
        property["font-weight"] = "font-weight";
        /**
         *
         The forced-color-adjust CSS property allows authors to opt certain elements out of forced colors mode. This then restores the control of those values to CSS.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/forced-color-adjust \
         available values : https://cssvalues.com/?view=forced-color-adjust

         */
        property["forced-color-adjust"] = "forced-color-adjust";
        /**
         *
         The gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/gap \
         available values : https://cssvalues.com/?view=gap

         */
        property["gap"] = "gap";
        /**
         *
         The grid CSS property is a shorthand property that sets all of the explicit and implicit grid properties in a single declaration.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/grid \
         available values : https://cssvalues.com/?view=grid

         */
        property["grid"] = "grid";
        /**
         *
         The grid-area CSS shorthand property specifies a grid item’s size and location within a grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area \
         available values : https://cssvalues.com/?view=grid-area

         */
        property["grid-area"] = "grid-area";
        /**
         *
         The grid-auto-columns CSS property specifies the size of an implicitly-created grid column track or pattern of tracks.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns \
         available values : https://cssvalues.com/?view=grid-auto-columns

         */
        property["grid-auto-columns"] = "grid-auto-columns";
        /**
         *
         The grid-auto-flow CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow \
         available values : https://cssvalues.com/?view=grid-auto-flow

         */
        property["grid-auto-flow"] = "grid-auto-flow";
        /**
         *
         The grid-auto-rows CSS property specifies the size of an implicitly-created grid row track&nbsp;or pattern of tracks.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows \
         available values : https://cssvalues.com/?view=grid-auto-rows

         */
        property["grid-auto-rows"] = "grid-auto-rows";
        /**
         *
         The grid-column CSS shorthand property specifies a grid item's size and location within a grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column \
         available values : https://cssvalues.com/?view=grid-column

         */
        property["grid-column"] = "grid-column";
        /**
         *
         The grid-column-end CSS property specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end \
         available values : https://cssvalues.com/?view=grid-column-end

         */
        property["grid-column-end"] = "grid-column-end";
        /**
         *
         The column-gap CSS property sets the size of the gap (gutter) between an element's columns.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap \
         available values : https://cssvalues.com/?view=column-gap

         */
        property["grid-column-gap"] = "grid-column-gap";
        /**
         *
         The grid-column-start CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start \
         available values : https://cssvalues.com/?view=grid-column-start

         */
        property["grid-column-start"] = "grid-column-start";
        /**
         *
         The gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/gap \
         available values : https://cssvalues.com/?view=gap

         */
        property["grid-gap"] = "grid-gap";
        /**
         *
         The grid-row CSS shorthand property specifies a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row \
         available values : https://cssvalues.com/?view=grid-row

         */
        property["grid-row"] = "grid-row";
        /**
         *
         The grid-row-end CSS property specifies a grid item’s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end \
         available values : https://cssvalues.com/?view=grid-row-end

         */
        property["grid-row-end"] = "grid-row-end";
        /**
         *
         The row-gap CSS property sets the size of the gap (gutter) between an element's grid rows.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap \
         available values : https://cssvalues.com/?view=row-gap

         */
        property["grid-row-gap"] = "grid-row-gap";
        /**
         *
         The grid-row-start CSS property specifies a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start \
         available values : https://cssvalues.com/?view=grid-row-start

         */
        property["grid-row-start"] = "grid-row-start";
        /**
         *
         The grid-template CSS property is a shorthand property for defining grid columns, rows, and areas.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template \
         available values : https://cssvalues.com/?view=grid-template

         */
        property["grid-template"] = "grid-template";
        /**
         *
         The grid-template-areas CSS property specifies named grid areas, establishing the cells in the grid and assigning them names.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas \
         available values : https://cssvalues.com/?view=grid-template-areas

         */
        property["grid-template-areas"] = "grid-template-areas";
        /**
         *
         The grid-template-columns CSS property defines the line names and track sizing functions of the grid columns.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns \
         available values : https://cssvalues.com/?view=grid-template-columns

         */
        property["grid-template-columns"] = "grid-template-columns";
        /**
         *
         The grid-template-rows CSS property defines the line names and track sizing functions of the grid rows.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows \
         available values : https://cssvalues.com/?view=grid-template-rows

         */
        property["grid-template-rows"] = "grid-template-rows";
        /**
         *
         The height CSS property specifies the height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/height \
         available values : https://cssvalues.com/?view=height

         */
        property["height"] = "height";
        /**
         *
         The hyphens CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens \
         available values : https://cssvalues.com/?view=hyphens

         */
        property["hyphens"] = "hyphens";
        /**
         *
         The image-orientation CSS property specifies a layout-independent correction to the orientation of an image. It should not be used for any other orientation adjustments; instead, the transform property should be used with the rotate &lt;transform-function&gt;.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/image-orientation \
         available values : https://cssvalues.com/?view=image-orientation

         */
        property["image-orientation"] = "image-orientation";
        /**
         *
         The image-rendering CSS property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering \
         available values : https://cssvalues.com/?view=image-rendering

         */
        property["image-rendering"] = "image-rendering";
        /**
         *
         */
        property["inherits"] = "inherits";
        /**
         *
         */
        property["initial-value"] = "initial-value";
        /**
         *
         The inline-size CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the width or the height property, depending on the value of writing-mode.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size \
         available values : https://cssvalues.com/?view=inline-size

         */
        property["inline-size"] = "inline-size";
        /**
         *
         The inset&nbsp;CSS property is a shorthand that corresponds to the top, right, bottom, and/or left properties. It has the same multi-value syntax of the margin shorthand.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/inset \
         available values : https://cssvalues.com/?view=inset

         */
        property["inset"] = "inset";
        /**
         *
         The inset-block CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the top and bottom, or right and left properties depending on the values defined for writing-mode, direction, and text-orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block \
         available values : https://cssvalues.com/?view=inset-block

         */
        property["inset-block"] = "inset-block";
        /**
         *
         The inset-block-end CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block-end \
         available values : https://cssvalues.com/?view=inset-block-end

         */
        property["inset-block-end"] = "inset-block-end";
        /**
         *
         The inset-block-start CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block-start \
         available values : https://cssvalues.com/?view=inset-block-start

         */
        property["inset-block-start"] = "inset-block-start";
        /**
         *
         The inset-inline CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the top and bottom, or right and left properties depending on the values defined for writing-mode, direction, and text-orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline \
         available values : https://cssvalues.com/?view=inset-inline

         */
        property["inset-inline"] = "inset-inline";
        /**
         *
         The inset-inline-end CSS property defines the logical inline end inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-end \
         available values : https://cssvalues.com/?view=inset-inline-end

         */
        property["inset-inline-end"] = "inset-inline-end";
        /**
         *
         The inset-inline-start CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-start \
         available values : https://cssvalues.com/?view=inset-inline-start

         */
        property["inset-inline-start"] = "inset-inline-start";
        /**
         *
         The isolation CSS property determines whether an element must create a new stacking context.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/isolation \
         available values : https://cssvalues.com/?view=isolation

         */
        property["isolation"] = "isolation";
        /**
         *
         The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content \
         available values : https://cssvalues.com/?view=justify-content

         */
        property["justify-content"] = "justify-content";
        /**
         *
         The CSS justify-items property defines the default justify-self for all items of the box, giving them all a default way of justifying each box along the appropriate axis.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items \
         available values : https://cssvalues.com/?view=justify-items

         */
        property["justify-items"] = "justify-items";
        /**
         *
         The CSS justify-self property sets the way a box is justified inside its alignment container along the appropriate axis.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self \
         available values : https://cssvalues.com/?view=justify-self

         */
        property["justify-self"] = "justify-self";
        /**
         *
         The left CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/left \
         available values : https://cssvalues.com/?view=left

         */
        property["left"] = "left";
        /**
         *
         The letter-spacing CSS property sets the horizontal spacing behavior between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of letter-spacing causes characters to spread farther apart, while negative values of letter-spacing bring characters closer together.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing \
         available values : https://cssvalues.com/?view=letter-spacing

         */
        property["letter-spacing"] = "letter-spacing";
        /**
         *
         The lighting-color attribute defines the color of the light source for lighting filter primitives.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/lighting-color \
         available values : https://cssvalues.com/?view=lighting-color

         */
        property["lighting-color"] = "lighting-color";
        /**
         *
         The line-break CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/line-break \
         available values : https://cssvalues.com/?view=line-break

         */
        property["line-break"] = "line-break";
        /**
         *
         */
        property["line-gap-override"] = "line-gap-override";
        /**
         *
         The line-height CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/line-height \
         available values : https://cssvalues.com/?view=line-height

         */
        property["line-height"] = "line-height";
        /**
         *
         The list-style CSS shorthand property allows you to set all the list style properties at once.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/list-style \
         available values : https://cssvalues.com/?view=list-style

         */
        property["list-style"] = "list-style";
        /**
         *
         The list-style-image CSS property sets an image to be used as the list item marker.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image \
         available values : https://cssvalues.com/?view=list-style-image

         */
        property["list-style-image"] = "list-style-image";
        /**
         *
         The list-style-position CSS property sets the position of the ::marker relative to a list item.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position \
         available values : https://cssvalues.com/?view=list-style-position

         */
        property["list-style-position"] = "list-style-position";
        /**
         *
         The list-style-type CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type \
         available values : https://cssvalues.com/?view=list-style-type

         */
        property["list-style-type"] = "list-style-type";
        /**
         *
         The margin CSS property sets the margin area on all four sides of an element. It is a shorthand for margin-top, margin-right, margin-bottom, and margin-left.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/margin \
         available values : https://cssvalues.com/?view=margin

         */
        property["margin"] = "margin";
        /**
         *
         The margin-block CSS shorthand property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block \
         available values : https://cssvalues.com/?view=margin-block

         */
        property["margin-block"] = "margin-block";
        /**
         *
         The margin-block-end CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block-end \
         available values : https://cssvalues.com/?view=margin-block-end

         */
        property["margin-block-end"] = "margin-block-end";
        /**
         *
         The margin-block-start CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block-start \
         available values : https://cssvalues.com/?view=margin-block-start

         */
        property["margin-block-start"] = "margin-block-start";
        /**
         *
         The margin-bottom CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom \
         available values : https://cssvalues.com/?view=margin-bottom

         */
        property["margin-bottom"] = "margin-bottom";
        /**
         *
         The margin-inline CSS shorthand property is a shorthand property that defines both the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline \
         available values : https://cssvalues.com/?view=margin-inline

         */
        property["margin-inline"] = "margin-inline";
        /**
         *
         The margin-inline-end CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the margin-top, margin-right, margin-bottom or margin-left property depending on the values defined for writing-mode, direction, and text-orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end \
         available values : https://cssvalues.com/?view=margin-inline-end

         */
        property["margin-inline-end"] = "margin-inline-end";
        /**
         *
         The margin-inline-start CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the margin-top, margin-right, margin-bottom, or margin-left property depending on the values defined for writing-mode, direction, and text-orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-start \
         available values : https://cssvalues.com/?view=margin-inline-start

         */
        property["margin-inline-start"] = "margin-inline-start";
        /**
         *
         The margin-left CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left \
         available values : https://cssvalues.com/?view=margin-left

         */
        property["margin-left"] = "margin-left";
        /**
         *
         The margin-right CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right \
         available values : https://cssvalues.com/?view=margin-right

         */
        property["margin-right"] = "margin-right";
        /**
         *
         The margin-top CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top \
         available values : https://cssvalues.com/?view=margin-top

         */
        property["margin-top"] = "margin-top";
        /**
         *
         */
        property["marker"] = "marker";
        /**
         *
         The marker-end attribute defines the arrowhead or polymarker that will be drawn at the final vertex of the given shape.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/marker-end \
         available values : https://cssvalues.com/?view=marker-end

         */
        property["marker-end"] = "marker-end";
        /**
         *
         The marker-mid attribute defines the arrowhead or polymarker that will be drawn at all interior vertices of the given shape.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/marker-mid \
         available values : https://cssvalues.com/?view=marker-mid

         */
        property["marker-mid"] = "marker-mid";
        /**
         *
         The marker-start attribute defines the arrowhead or polymarker that will be drawn at the first vertex of the given shape.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/marker-start \
         available values : https://cssvalues.com/?view=marker-start

         */
        property["marker-start"] = "marker-start";
        /**
         *
         The mask CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/mask \
         available values : https://cssvalues.com/?view=mask

         */
        property["mask"] = "mask";
        /**
         *
         The mask-type CSS property sets whether an SVG &lt;mask&gt; element is used as a luminance or an alpha mask. It applies to the &lt;mask&gt; element itself.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/mask-type \
         available values : https://cssvalues.com/?view=mask-type

         */
        property["mask-type"] = "mask-type";
        /**
         *
         The max-block-size CSS property specifies the maximum size of an element in the direction opposite that of the writing direction as specified by writing-mode. That is, if the writing direction is horizontal, then max-block-size is equivalent to max-height; if the writing direction is vertical, max-block-size is the same as max-width.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size \
         available values : https://cssvalues.com/?view=max-block-size

         */
        property["max-block-size"] = "max-block-size";
        /**
         *
         The max-height CSS property sets the maximum height of an element. It prevents the used value of the height property from becoming larger than the value specified for max-height.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/max-height \
         available values : https://cssvalues.com/?view=max-height

         */
        property["max-height"] = "max-height";
        /**
         *
         The max-inline-size CSS property defines the horizontal or vertical maximum size of an element's block, depending on its writing mode. It corresponds to either the max-width or the max-height property, depending on the value of writing-mode.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size \
         available values : https://cssvalues.com/?view=max-inline-size

         */
        property["max-inline-size"] = "max-inline-size";
        /**
         *
         The max-width CSS property sets the maximum width of an element. It prevents the used value of the width property from becoming larger than the value specified by max-width.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/max-width \
         available values : https://cssvalues.com/?view=max-width

         */
        property["max-width"] = "max-width";
        /**
         *
         */
        property["max-zoom"] = "max-zoom";
        /**
         *
         The min-block-size CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the min-width or the min-height property, depending on the value of writing-mode.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size \
         available values : https://cssvalues.com/?view=min-block-size

         */
        property["min-block-size"] = "min-block-size";
        /**
         *
         The min-height CSS property sets the minimum height of an element. It prevents the used value of the height property from becoming smaller than the value specified for min-height.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/min-height \
         available values : https://cssvalues.com/?view=min-height

         */
        property["min-height"] = "min-height";
        /**
         *
         The min-inline-size CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the min-width or the min-height property, depending on the value of writing-mode.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size \
         available values : https://cssvalues.com/?view=min-inline-size

         */
        property["min-inline-size"] = "min-inline-size";
        /**
         *
         The min-width CSS property sets the minimum width of an element. It prevents the used value of the width property from becoming smaller than the value specified for min-width.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/min-width \
         available values : https://cssvalues.com/?view=min-width

         */
        property["min-width"] = "min-width";
        /**
         *
         */
        property["min-zoom"] = "min-zoom";
        /**
         *
         The mix-blend-mode CSS property sets how an element's content should blend with the content of the element's parent and the element's background.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode \
         available values : https://cssvalues.com/?view=mix-blend-mode

         */
        property["mix-blend-mode"] = "mix-blend-mode";
        /**
         *
         The object-fit CSS property sets how the content of a replaced element, such as an &lt;img&gt; or &lt;video&gt;, should be resized to fit its container.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit \
         available values : https://cssvalues.com/?view=object-fit

         */
        property["object-fit"] = "object-fit";
        /**
         *
         The object-position CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/object-position \
         available values : https://cssvalues.com/?view=object-position

         */
        property["object-position"] = "object-position";
        /**
         *
         The offset CSS shorthand property sets all the properties required for animating an element along a defined path.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/offset \
         available values : https://cssvalues.com/?view=offset

         */
        property["offset"] = "offset";
        /**
         *
         The offset-distance CSS property specifies a position along an offset-path for an element to be placed.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/offset-distance \
         available values : https://cssvalues.com/?view=offset-distance

         */
        property["offset-distance"] = "offset-distance";
        /**
         *
         The offset-path CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/offset-path \
         available values : https://cssvalues.com/?view=offset-path

         */
        property["offset-path"] = "offset-path";
        /**
         *
         The offset-rotate CSS property defines the orientation/direction of the element as it is positioned along the offset-path.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/offset-rotate \
         available values : https://cssvalues.com/?view=offset-rotate

         */
        property["offset-rotate"] = "offset-rotate";
        /**
         *
         The opacity CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/opacity \
         available values : https://cssvalues.com/?view=opacity

         */
        property["opacity"] = "opacity";
        /**
         *
         The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending order value and then by their source code order.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/order \
         available values : https://cssvalues.com/?view=order

         */
        property["order"] = "order";
        /**
         *
         The orientation attribute indicates that the given glyph is only to be used for a particular text direction, i.e. horizontal or vertical.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/orientation \
         available values : https://cssvalues.com/?view=orientation

         */
        property["orientation"] = "orientation";
        /**
         *
         The orphans CSS property sets the minimum number of lines in a block container that must be shown at the bottom of a page, region, or column.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/orphans \
         available values : https://cssvalues.com/?view=orphans

         */
        property["orphans"] = "orphans";
        /**
         *
         The outline CSS shorthand property set all the outline properties in a single declaration.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/outline \
         available values : https://cssvalues.com/?view=outline

         */
        property["outline"] = "outline";
        /**
         *
         The outline-color CSS property sets the color of an element's outline.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/outline-color \
         available values : https://cssvalues.com/?view=outline-color

         */
        property["outline-color"] = "outline-color";
        /**
         *
         The outline-offset CSS property sets the amount of space between an outline and the edge or border of an element.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/outline-offset \
         available values : https://cssvalues.com/?view=outline-offset

         */
        property["outline-offset"] = "outline-offset";
        /**
         *
         The outline-style CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the border.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/outline-style \
         available values : https://cssvalues.com/?view=outline-style

         */
        property["outline-style"] = "outline-style";
        /**
         *
         The CSS outline-width property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the border.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/outline-width \
         available values : https://cssvalues.com/?view=outline-width

         */
        property["outline-width"] = "outline-width";
        /**
         *
         The overflow CSS shorthand property sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/overflow \
         available values : https://cssvalues.com/?view=overflow

         */
        property["overflow"] = "overflow";
        /**
         *
         The overflow-anchor CSS property provides a way to opt out of the browser's scroll anchoring behavior, which adjusts scroll position to minimize content shifts.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-anchor \
         available values : https://cssvalues.com/?view=overflow-anchor

         */
        property["overflow-anchor"] = "overflow-anchor";
        /**
         *
         The overflow-wrap CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap \
         available values : https://cssvalues.com/?view=overflow-wrap

         */
        property["overflow-wrap"] = "overflow-wrap";
        /**
         *
         The overflow-x CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x \
         available values : https://cssvalues.com/?view=overflow-x

         */
        property["overflow-x"] = "overflow-x";
        /**
         *
         The overflow-y CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y \
         available values : https://cssvalues.com/?view=overflow-y

         */
        property["overflow-y"] = "overflow-y";
        /**
         *
         The overscroll-behavior CSS property sets what a browser does when reaching the boundary of a scrolling area. It's a shorthand for overscroll-behavior-x and overscroll-behavior-y.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior \
         available values : https://cssvalues.com/?view=overscroll-behavior

         */
        property["overscroll-behavior"] = "overscroll-behavior";
        /**
         *
         The overscroll-behavior-block&nbsp;CSS property sets the browser's behavior when the block direction&nbsp;boundary of a scrolling area is reached.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-block \
         available values : https://cssvalues.com/?view=overscroll-behavior-block

         */
        property["overscroll-behavior-block"] = "overscroll-behavior-block";
        /**
         *
         The overscroll-behavior-inline&nbsp;CSS property sets the browser's behavior when the inline&nbsp;direction&nbsp;boundary of a scrolling area is reached.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-inline \
         available values : https://cssvalues.com/?view=overscroll-behavior-inline

         */
        property["overscroll-behavior-inline"] = "overscroll-behavior-inline";
        /**
         *
         The overscroll-behavior-x CSS property sets the browser's behavior when the horizontal boundary of a scrolling area is reached.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-x \
         available values : https://cssvalues.com/?view=overscroll-behavior-x

         */
        property["overscroll-behavior-x"] = "overscroll-behavior-x";
        /**
         *
         The overscroll-behavior-y CSS property sets the browser's behavior when the vertical boundary of a scrolling area is reached.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-y \
         available values : https://cssvalues.com/?view=overscroll-behavior-y

         */
        property["overscroll-behavior-y"] = "overscroll-behavior-y";
        /**
         *
         The padding CSS shorthand property sets the padding area on all four sides of an element at once.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/padding \
         available values : https://cssvalues.com/?view=padding

         */
        property["padding"] = "padding";
        /**
         *
         The padding-block CSS shorthand property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block \
         available values : https://cssvalues.com/?view=padding-block

         */
        property["padding-block"] = "padding-block";
        /**
         *
         The padding-block-end CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block-end \
         available values : https://cssvalues.com/?view=padding-block-end

         */
        property["padding-block-end"] = "padding-block-end";
        /**
         *
         The padding-block-start CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block-start \
         available values : https://cssvalues.com/?view=padding-block-start

         */
        property["padding-block-start"] = "padding-block-start";
        /**
         *
         The padding-bottom CSS property sets the height of the padding area on the bottom of an element.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom \
         available values : https://cssvalues.com/?view=padding-bottom

         */
        property["padding-bottom"] = "padding-bottom";
        /**
         *
         The padding-inline CSS shorthand property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline \
         available values : https://cssvalues.com/?view=padding-inline

         */
        property["padding-inline"] = "padding-inline";
        /**
         *
         The padding-inline-end CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end \
         available values : https://cssvalues.com/?view=padding-inline-end

         */
        property["padding-inline-end"] = "padding-inline-end";
        /**
         *
         The padding-inline-start CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start \
         available values : https://cssvalues.com/?view=padding-inline-start

         */
        property["padding-inline-start"] = "padding-inline-start";
        /**
         *
         The padding-left CSS property sets the width of the padding area to the left of an element.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left \
         available values : https://cssvalues.com/?view=padding-left

         */
        property["padding-left"] = "padding-left";
        /**
         *
         The padding-right CSS property sets the width of the padding area on the right of an element.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right \
         available values : https://cssvalues.com/?view=padding-right

         */
        property["padding-right"] = "padding-right";
        /**
         *
         The padding-top CSS property sets the height of the padding area on the top of an element.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top \
         available values : https://cssvalues.com/?view=padding-top

         */
        property["padding-top"] = "padding-top";
        /**
         *
         */
        property["page"] = "page";
        /**
         *
         The page-break-after CSS property adjusts page breaks after the current element.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-after \
         available values : https://cssvalues.com/?view=page-break-after

         */
        property["page-break-after"] = "page-break-after";
        /**
         *
         The page-break-before CSS property adjusts page breaks before the current element.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-before \
         available values : https://cssvalues.com/?view=page-break-before

         */
        property["page-break-before"] = "page-break-before";
        /**
         *
         The page-break-inside CSS property adjusts page breaks inside the current element.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-inside \
         available values : https://cssvalues.com/?view=page-break-inside

         */
        property["page-break-inside"] = "page-break-inside";
        /**
         *
         */
        property["page-orientation"] = "page-orientation";
        /**
         *
         The paint-order CSS property lets you control the order in which the fill and stroke (and painting markers) of text content and shapes are drawn.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/paint-order \
         available values : https://cssvalues.com/?view=paint-order

         */
        property["paint-order"] = "paint-order";
        /**
         *
         The perspective CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/perspective \
         available values : https://cssvalues.com/?view=perspective

         */
        property["perspective"] = "perspective";
        /**
         *
         The perspective-origin CSS property determines the position at which the viewer is looking. It is used as the vanishing point by the perspective property.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin \
         available values : https://cssvalues.com/?view=perspective-origin

         */
        property["perspective-origin"] = "perspective-origin";
        /**
         *
         The place-content CSS shorthand property allows you to align content along both the block and inline directions at once (i.e. the align-content and justify-content properties) in a relevant layout system such as Grid or Flexbox.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/place-content \
         available values : https://cssvalues.com/?view=place-content

         */
        property["place-content"] = "place-content";
        /**
         *
         The CSS place-items shorthand property allows you to align items along both the block and inline directions at once (i.e. the align-items and justify-items properties) in a relevant layout system such as Grid or Flexbox. If the second value is not set, the first value is also used for it.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/place-items \
         available values : https://cssvalues.com/?view=place-items

         */
        property["place-items"] = "place-items";
        /**
         *
         The place-self CSS shorthand property allows you to align an individual item in both the block and inline directions at once (i.e. the align-self and justify-self properties) in a relevant layout system such as Grid or Flexbox. If the second value is not present, the first value is also used for it.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/place-self \
         available values : https://cssvalues.com/?view=place-self

         */
        property["place-self"] = "place-self";
        /**
         *
         The pointer-events CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events \
         available values : https://cssvalues.com/?view=pointer-events

         */
        property["pointer-events"] = "pointer-events";
        /**
         *
         The position CSS property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/position \
         available values : https://cssvalues.com/?view=position

         */
        property["position"] = "position";
        /**
         *
         The quotes CSS property sets how the browser should render quotation marks that are added using the open-quotes or close-quotes values of the CSS content property.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/quotes \
         available values : https://cssvalues.com/?view=quotes

         */
        property["quotes"] = "quotes";
        /**
         *
         The r attribute defines the radius of a circle.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/r \
         available values : https://cssvalues.com/?view=r

         */
        property["r"] = "r";
        /**
         *
         The resize CSS property sets whether an element is resizable, and if so, in which directions.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/resize \
         available values : https://cssvalues.com/?view=resize

         */
        property["resize"] = "resize";
        /**
         *
         The right CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/right \
         available values : https://cssvalues.com/?view=right

         */
        property["right"] = "right";
        /**
         *
         The row-gap CSS property sets the size of the gap (gutter) between an element's grid rows.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap \
         available values : https://cssvalues.com/?view=row-gap

         */
        property["row-gap"] = "row-gap";
        /**
         *
         The ruby-position CSS property defines the position of a ruby element relatives to its base element. It can be positioned over the element (over), under it (under), or between the characters on their right side (inter-character).

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/ruby-position \
         available values : https://cssvalues.com/?view=ruby-position

         */
        property["ruby-position"] = "ruby-position";
        /**
         *
         The rx attribute defines a radius on the x-axis.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/rx \
         available values : https://cssvalues.com/?view=rx

         */
        property["rx"] = "rx";
        /**
         *
         The ry attribute defines a radius on the y-axis.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/ry \
         available values : https://cssvalues.com/?view=ry

         */
        property["ry"] = "ry";
        /**
         *
         The scroll-behavior CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior \
         available values : https://cssvalues.com/?view=scroll-behavior

         */
        property["scroll-behavior"] = "scroll-behavior";
        /**
         *
         The scroll-margin shorthand property sets all of the scroll margins of an element at once, assigning values much like the margin property does for margins of an element.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin \
         available values : https://cssvalues.com/?view=scroll-margin

         */
        property["scroll-margin"] = "scroll-margin";
        /**
         *
         The scroll-margin-block shorthand property sets the scroll margins of an element in the block dimension.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-block \
         available values : https://cssvalues.com/?view=scroll-margin-block

         */
        property["scroll-margin-block"] = "scroll-margin-block";
        /**
         *
         The scroll-margin-block-end&nbsp;property defines the&nbsp;margin of&nbsp;the scroll snap area at the end&nbsp;of the block dimension&nbsp;that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-block-end \
         available values : https://cssvalues.com/?view=scroll-margin-block-end

         */
        property["scroll-margin-block-end"] = "scroll-margin-block-end";
        /**
         *
         The scroll-margin-block-start&nbsp;property defines the&nbsp;margin of&nbsp;the scroll snap area at the start of the block dimension&nbsp;that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-block-start \
         available values : https://cssvalues.com/?view=scroll-margin-block-start

         */
        property["scroll-margin-block-start"] = "scroll-margin-block-start";
        /**
         *
         The scroll-margin-bottom property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-bottom \
         available values : https://cssvalues.com/?view=scroll-margin-bottom

         */
        property["scroll-margin-bottom"] = "scroll-margin-bottom";
        /**
         *
         The scroll-margin-inline shorthand property sets the scroll margins of an element in the inline dimension.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-inline \
         available values : https://cssvalues.com/?view=scroll-margin-inline

         */
        property["scroll-margin-inline"] = "scroll-margin-inline";
        /**
         *
         The scroll-margin-inline-end&nbsp;property defines the&nbsp;margin of&nbsp;the scroll snap area at the end&nbsp;of the inline&nbsp;dimension&nbsp;that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-inline-end \
         available values : https://cssvalues.com/?view=scroll-margin-inline-end

         */
        property["scroll-margin-inline-end"] = "scroll-margin-inline-end";
        /**
         *
         The scroll-margin-inline-start property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-inline-start \
         available values : https://cssvalues.com/?view=scroll-margin-inline-start

         */
        property["scroll-margin-inline-start"] = "scroll-margin-inline-start";
        /**
         *
         The scroll-margin-left property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-left \
         available values : https://cssvalues.com/?view=scroll-margin-left

         */
        property["scroll-margin-left"] = "scroll-margin-left";
        /**
         *
         The scroll-margin-right property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-right \
         available values : https://cssvalues.com/?view=scroll-margin-right

         */
        property["scroll-margin-right"] = "scroll-margin-right";
        /**
         *
         The scroll-margin-top property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-top \
         available values : https://cssvalues.com/?view=scroll-margin-top

         */
        property["scroll-margin-top"] = "scroll-margin-top";
        /**
         *
         The scroll-padding shorthand property sets scroll padding on all sides of an element at once, much like the padding property does for padding on an element.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding \
         available values : https://cssvalues.com/?view=scroll-padding

         */
        property["scroll-padding"] = "scroll-padding";
        /**
         *
         The scroll-padding-block shorthand property sets the scroll padding of an element in the block dimension.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-block \
         available values : https://cssvalues.com/?view=scroll-padding-block

         */
        property["scroll-padding-block"] = "scroll-padding-block";
        /**
         *
         The scroll-padding-block-end property defines offsets for the end edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-block-end \
         available values : https://cssvalues.com/?view=scroll-padding-block-end

         */
        property["scroll-padding-block-end"] = "scroll-padding-block-end";
        /**
         *
         The scroll-padding-block-start property defines offsets for the start edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-block-start \
         available values : https://cssvalues.com/?view=scroll-padding-block-start

         */
        property["scroll-padding-block-start"] = "scroll-padding-block-start";
        /**
         *
         The scroll-padding-bottom property defines offsets for the bottom of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-bottom \
         available values : https://cssvalues.com/?view=scroll-padding-bottom

         */
        property["scroll-padding-bottom"] = "scroll-padding-bottom";
        /**
         *
         The scroll-padding-inline shorthand property sets the scroll padding of an element in the inline dimension.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-inline \
         available values : https://cssvalues.com/?view=scroll-padding-inline

         */
        property["scroll-padding-inline"] = "scroll-padding-inline";
        /**
         *
         The scroll-padding-inline-end&nbsp;property&nbsp;defines offsets for the end&nbsp;edge in the inline&nbsp;dimension&nbsp;of the&nbsp;optimal viewing region&nbsp;of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-inline-end \
         available values : https://cssvalues.com/?view=scroll-padding-inline-end

         */
        property["scroll-padding-inline-end"] = "scroll-padding-inline-end";
        /**
         *
         The scroll-padding-inline-start property defines offsets for the start edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-inline-start \
         available values : https://cssvalues.com/?view=scroll-padding-inline-start

         */
        property["scroll-padding-inline-start"] = "scroll-padding-inline-start";
        /**
         *
         The scroll-padding-left property defines offsets for the left of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-left \
         available values : https://cssvalues.com/?view=scroll-padding-left

         */
        property["scroll-padding-left"] = "scroll-padding-left";
        /**
         *
         The scroll-padding-right&nbsp;property&nbsp;defines offsets for the right&nbsp;of the&nbsp;optimal viewing region&nbsp;of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-right \
         available values : https://cssvalues.com/?view=scroll-padding-right

         */
        property["scroll-padding-right"] = "scroll-padding-right";
        /**
         *
         The scroll-padding-top property&nbsp;defines offsets for the top of the&nbsp;optimal viewing region&nbsp;of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-top \
         available values : https://cssvalues.com/?view=scroll-padding-top

         */
        property["scroll-padding-top"] = "scroll-padding-top";
        /**
         *
         The scroll-snap-align property specifies the box’s snap position as an alignment of its snap area (as the alignment subject) within its snap container’s snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align \
         available values : https://cssvalues.com/?view=scroll-snap-align

         */
        property["scroll-snap-align"] = "scroll-snap-align";
        /**
         *
         The scroll-snap-stop CSS property defines whether the scroll container is allowed to "pass over" possible snap positions.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-stop \
         available values : https://cssvalues.com/?view=scroll-snap-stop

         */
        property["scroll-snap-stop"] = "scroll-snap-stop";
        /**
         *
         The scroll-snap-type CSS property sets how strictly snap points are enforced on the scroll container in case there is one.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type \
         available values : https://cssvalues.com/?view=scroll-snap-type

         */
        property["scroll-snap-type"] = "scroll-snap-type";
        /**
         *
         The shape-image-threshold CSS property sets the alpha channel threshold used to extract the shape using an image as the value for shape-outside.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/shape-image-threshold \
         available values : https://cssvalues.com/?view=shape-image-threshold

         */
        property["shape-image-threshold"] = "shape-image-threshold";
        /**
         *
         The shape-margin CSS property sets a margin for a CSS shape created using shape-outside.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/shape-margin \
         available values : https://cssvalues.com/?view=shape-margin

         */
        property["shape-margin"] = "shape-margin";
        /**
         *
         The shape-outside CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; shape-outside provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside \
         available values : https://cssvalues.com/?view=shape-outside

         */
        property["shape-outside"] = "shape-outside";
        /**
         *
         The shape-rendering attribute provides hints to the renderer about what tradeoffs to make when rendering shapes like paths, circles, or rectangles.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering \
         available values : https://cssvalues.com/?view=shape-rendering

         */
        property["shape-rendering"] = "shape-rendering";
        /**
         *
         */
        property["size"] = "size";
        /**
         *
         */
        property["speak"] = "speak";
        /**
         *
         */
        property["src"] = "src";
        /**
         *
         The stop-color attribute indicates what color to use at a gradient stop.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stop-color \
         available values : https://cssvalues.com/?view=stop-color

         */
        property["stop-color"] = "stop-color";
        /**
         *
         The stop-opacity attribute defines the opacity of a given color gradient stop.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stop-opacity \
         available values : https://cssvalues.com/?view=stop-opacity

         */
        property["stop-opacity"] = "stop-opacity";
        /**
         *
         The stroke attribute is a presentation attribute defining the color (or any SVG paint servers like gradients or patterns) used to paint the outline of the shape;

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke \
         available values : https://cssvalues.com/?view=stroke

         */
        property["stroke"] = "stroke";
        /**
         *
         The stroke-dasharray attribute is a presentation attribute defining the pattern of dashes and gaps used to paint the outline of the shape;

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray \
         available values : https://cssvalues.com/?view=stroke-dasharray

         */
        property["stroke-dasharray"] = "stroke-dasharray";
        /**
         *
         The stroke-dashoffset attribute is a presentation attribute defining an offset on the rendering of the associated dash array.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dashoffset \
         available values : https://cssvalues.com/?view=stroke-dashoffset

         */
        property["stroke-dashoffset"] = "stroke-dashoffset";
        /**
         *
         The stroke-linecap attribute is a presentation attribute defining the shape to be used at the end of open subpaths when they are stroked.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap \
         available values : https://cssvalues.com/?view=stroke-linecap

         */
        property["stroke-linecap"] = "stroke-linecap";
        /**
         *
         The stroke-linejoin attribute is a presentation attribute defining the shape to be used at the corners of paths when they are stroked.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linejoin \
         available values : https://cssvalues.com/?view=stroke-linejoin

         */
        property["stroke-linejoin"] = "stroke-linejoin";
        /**
         *
         The stroke-miterlimit attribute is a presentation attribute defining a limit on the ratio of the miter length to the stroke-width used to draw a miter join. When the limit is exceeded, the join is converted from a miter to a bevel.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-miterlimit \
         available values : https://cssvalues.com/?view=stroke-miterlimit

         */
        property["stroke-miterlimit"] = "stroke-miterlimit";
        /**
         *
         The stroke-opacity attribute is a presentation attribute defining the opacity of the paint server (color, gradient, pattern, etc) applied to the stroke of a shape.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-opacity \
         available values : https://cssvalues.com/?view=stroke-opacity

         */
        property["stroke-opacity"] = "stroke-opacity";
        /**
         *
         The stroke-width attribute is a presentation attribute defining the width of the stroke to be applied to the shape.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width \
         available values : https://cssvalues.com/?view=stroke-width

         */
        property["stroke-width"] = "stroke-width";
        /**
         *
         The basic goal of the Cascading Stylesheet (CSS) language is to allow a browser engine to paint elements of the page with specific features, like colors, positioning, or decorations. The CSS syntax reflects this goal and its basic building blocks are:

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/syntax \
         available values : https://cssvalues.com/?view=syntax

         */
        property["syntax"] = "syntax";
        /**
         *
         The tab-size CSS property is used to customize the width of tab characters (U+0009).

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/tab-size \
         available values : https://cssvalues.com/?view=tab-size

         */
        property["tab-size"] = "tab-size";
        /**
         *
         The table-layout CSS property sets the algorithm used to lay out &lt;table&gt; cells, rows, and columns.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout \
         available values : https://cssvalues.com/?view=table-layout

         */
        property["table-layout"] = "table-layout";
        /**
         *
         The text-align CSS property sets the horizontal alignment of a&nbsp;block element or table-cell box. This means it works like vertical-align but in the horizontal direction.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/text-align \
         available values : https://cssvalues.com/?view=text-align

         */
        property["text-align"] = "text-align";
        /**
         *
         The text-align-last CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/text-align-last \
         available values : https://cssvalues.com/?view=text-align-last

         */
        property["text-align-last"] = "text-align-last";
        /**
         *
         The text-anchor attribute is used to align (start-, middle- or end-alignment) a string of pre-formatted text or auto-wrapped text where the wrapping area is determined from the inline-size property relative to a given point. It is not applicable to other types of auto-wrapped text. For those cases you should use text-align. For multi-line text, the alignment takes place for each line.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor \
         available values : https://cssvalues.com/?view=text-anchor

         */
        property["text-anchor"] = "text-anchor";
        /**
         *
         The text-combine-upright CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/text-combine-upright \
         available values : https://cssvalues.com/?view=text-combine-upright

         */
        property["text-combine-upright"] = "text-combine-upright";
        /**
         *
         The text-decoration shorthand CSS property sets the appearance of decorative lines on text. It is a shorthand for text-decoration-line, text-decoration-color, text-decoration-style, and the newer text-decoration-thickness property.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration \
         available values : https://cssvalues.com/?view=text-decoration

         */
        property["text-decoration"] = "text-decoration";
        /**
         *
         The text-decoration-color CSS property sets the color of decorations added to text by text-decoration-line.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color \
         available values : https://cssvalues.com/?view=text-decoration-color

         */
        property["text-decoration-color"] = "text-decoration-color";
        /**
         *
         The text-decoration-line CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line \
         available values : https://cssvalues.com/?view=text-decoration-line

         */
        property["text-decoration-line"] = "text-decoration-line";
        /**
         *
         The text-decoration-skip-ink CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-skip-ink \
         available values : https://cssvalues.com/?view=text-decoration-skip-ink

         */
        property["text-decoration-skip-ink"] = "text-decoration-skip-ink";
        /**
         *
         The text-decoration-style CSS property sets the style of the lines specified by text-decoration-line. The style applies to all lines that are set with text-decoration-line.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style \
         available values : https://cssvalues.com/?view=text-decoration-style

         */
        property["text-decoration-style"] = "text-decoration-style";
        /**
         *
         The text-decoration-thickness CSS property sets the stroke thickness of the decoration line that is used on text in an element, such as a line-through, underline, or overline.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness \
         available values : https://cssvalues.com/?view=text-decoration-thickness

         */
        property["text-decoration-thickness"] = "text-decoration-thickness";
        /**
         *
         The text-indent CSS property sets the length of empty space (indentation) that is put before lines of text in a block.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent \
         available values : https://cssvalues.com/?view=text-indent

         */
        property["text-indent"] = "text-indent";
        /**
         *
         The text-orientation CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when writing-mode is not horizontal-tb). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation \
         available values : https://cssvalues.com/?view=text-orientation

         */
        property["text-orientation"] = "text-orientation";
        /**
         *
         The text-overflow CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('…'), or display a custom string.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow \
         available values : https://cssvalues.com/?view=text-overflow

         */
        property["text-overflow"] = "text-overflow";
        /**
         *
         The text-rendering CSS property provides information to the rendering engine about what to optimize for when rendering text.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/text-rendering \
         available values : https://cssvalues.com/?view=text-rendering

         */
        property["text-rendering"] = "text-rendering";
        /**
         *
         The text-shadow CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its decorations. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow \
         available values : https://cssvalues.com/?view=text-shadow

         */
        property["text-shadow"] = "text-shadow";
        /**
         *
         The text-size-adjust CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/text-size-adjust \
         available values : https://cssvalues.com/?view=text-size-adjust

         */
        property["text-size-adjust"] = "text-size-adjust";
        /**
         *
         The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform \
         available values : https://cssvalues.com/?view=text-transform

         */
        property["text-transform"] = "text-transform";
        /**
         *
         The text-underline-offset CSS property sets the offset distance of an underline text decoration line (applied using text-decoration) from its original position.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset \
         available values : https://cssvalues.com/?view=text-underline-offset

         */
        property["text-underline-offset"] = "text-underline-offset";
        /**
         *
         The text-underline-position CSS property specifies the position of the underline which is set using the text-decoration property's underline value.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-position \
         available values : https://cssvalues.com/?view=text-underline-position

         */
        property["text-underline-position"] = "text-underline-position";
        /**
         *
         The top CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/top \
         available values : https://cssvalues.com/?view=top

         */
        property["top"] = "top";
        /**
         *
         The touch-action CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action \
         available values : https://cssvalues.com/?view=touch-action

         */
        property["touch-action"] = "touch-action";
        /**
         *
         The transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/transform \
         available values : https://cssvalues.com/?view=transform

         */
        property["transform"] = "transform";
        /**
         *
         The transform-box CSS property defines the layout box to which the transform and transform-origin properties relate.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/transform-box \
         available values : https://cssvalues.com/?view=transform-box

         */
        property["transform-box"] = "transform-box";
        /**
         *
         The transform-origin CSS property sets the origin for an element's transformations.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin \
         available values : https://cssvalues.com/?view=transform-origin

         */
        property["transform-origin"] = "transform-origin";
        /**
         *
         The transform-style CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style \
         available values : https://cssvalues.com/?view=transform-style

         */
        property["transform-style"] = "transform-style";
        /**
         *
         The transition CSS property is a shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/transition \
         available values : https://cssvalues.com/?view=transition

         */
        property["transition"] = "transition";
        /**
         *
         The transition-delay CSS property specifies the duration to wait before starting a property's transition effect when its value changes.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay \
         available values : https://cssvalues.com/?view=transition-delay

         */
        property["transition-delay"] = "transition-delay";
        /**
         *
         The transition-duration CSS property sets the length of time a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration \
         available values : https://cssvalues.com/?view=transition-duration

         */
        property["transition-duration"] = "transition-duration";
        /**
         *
         The transition-property CSS property sets the CSS properties to which a transition effect should be applied.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property \
         available values : https://cssvalues.com/?view=transition-property

         */
        property["transition-property"] = "transition-property";
        /**
         *
         The transition-timing-function CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function \
         available values : https://cssvalues.com/?view=transition-timing-function

         */
        property["transition-timing-function"] = "transition-timing-function";
        /**
         *
         The unicode-bidi CSS property, together with the direction property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The unicode-bidi property overrides this algorithm and allows the developer to control the text embedding.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/unicode-bidi \
         available values : https://cssvalues.com/?view=unicode-bidi

         */
        property["unicode-bidi"] = "unicode-bidi";
        /**
         *
         The unicode-range CSS descriptor sets the specific range of characters to be used from a font defined by @font-face and made available for use on the current page. If the page doesn't use any character in this range, the font is not downloaded; if it uses at least one, the whole font is downloaded.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/unicode-range \
         available values : https://cssvalues.com/?view=unicode-range

         */
        property["unicode-range"] = "unicode-range";
        /**
         *
         The user-select CSS property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its chrome), except in textboxes.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/user-select \
         available values : https://cssvalues.com/?view=user-select

         */
        property["user-select"] = "user-select";
        /**
         *
         */
        property["user-zoom"] = "user-zoom";
        /**
         *
         The vector-effect property specifies the vector effect to use when drawing an object. Vector effects are applied before any of the other compositing operations, i.e. filters, masks and clips.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/vector-effect \
         available values : https://cssvalues.com/?view=vector-effect

         */
        property["vector-effect"] = "vector-effect";
        /**
         *
         The vertical-align CSS property sets vertical alignment of an inline, inline-block or table-cell box.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align \
         available values : https://cssvalues.com/?view=vertical-align

         */
        property["vertical-align"] = "vertical-align";
        /**
         *
         The visibility CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a &lt;table&gt;.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/visibility \
         available values : https://cssvalues.com/?view=visibility

         */
        property["visibility"] = "visibility";
        /**
         *
         The CSS align-content property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/align-content \
         available values : https://cssvalues.com/?view=align-content

         */
        property["webkit-align-content"] = "webkit-align-content";
        /**
         *
         The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/align-items \
         available values : https://cssvalues.com/?view=align-items

         */
        property["webkit-align-items"] = "webkit-align-items";
        /**
         *
         The align-self CSS property overrides a grid or flex item's align-items value. In Grid, it aligns the item inside the&nbsp;grid area. In Flexbox, it aligns the item on the cross axis.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/align-self \
         available values : https://cssvalues.com/?view=align-self

         */
        property["webkit-align-self"] = "webkit-align-self";
        /**
         *
         The animation shorthand CSS property applies an animation between styles. It is a shorthand for animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, and animation-play-state.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/animation \
         available values : https://cssvalues.com/?view=animation

         */
        property["webkit-animation"] = "webkit-animation";
        /**
         *
         The animation-delay CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay \
         available values : https://cssvalues.com/?view=animation-delay

         */
        property["webkit-animation-delay"] = "webkit-animation-delay";
        /**
         *
         The animation-direction CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction \
         available values : https://cssvalues.com/?view=animation-direction

         */
        property["webkit-animation-direction"] = "webkit-animation-direction";
        /**
         *
         The animation-duration CSS property sets the length of time that an animation takes to complete one cycle.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration \
         available values : https://cssvalues.com/?view=animation-duration

         */
        property["webkit-animation-duration"] = "webkit-animation-duration";
        /**
         *
         The animation-fill-mode CSS property sets how a CSS animation applies styles to its target before and after its execution.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode \
         available values : https://cssvalues.com/?view=animation-fill-mode

         */
        property["webkit-animation-fill-mode"] = "webkit-animation-fill-mode";
        /**
         *
         The animation-iteration-count CSS property sets the number of times an animation sequence should be played before stopping.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count \
         available values : https://cssvalues.com/?view=animation-iteration-count

         */
        property["webkit-animation-iteration-count"] = "webkit-animation-iteration-count";
        /**
         *
         The animation-name CSS property specifies the names of one or more @keyframes at-rules describing the animation or animations to apply to the element.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name \
         available values : https://cssvalues.com/?view=animation-name

         */
        property["webkit-animation-name"] = "webkit-animation-name";
        /**
         *
         The animation-play-state CSS property sets whether an animation is running or paused.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state \
         available values : https://cssvalues.com/?view=animation-play-state

         */
        property["webkit-animation-play-state"] = "webkit-animation-play-state";
        /**
         *
         The animation-timing-function CSS property sets how an animation progresses through the duration of each cycle.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function \
         available values : https://cssvalues.com/?view=animation-timing-function

         */
        property["webkit-animation-timing-function"] = "webkit-animation-timing-function";
        /**
         *
         */
        property["webkit-app-region"] = "webkit-app-region";
        /**
         *
         The appearance CSS property is used to display an element using platform-native styling, based on the operating system's theme. The -moz-appearance and -webkit-appearance properties are non-standard versions of this property, used (respectively) by Gecko (Firefox) and by WebKit-based (e.g., Safari) and Blink-based (e.g., Chrome, Opera) browsers to achieve the same thing. Note that Firefox and Edge also support -webkit-appearance, for compatibility reasons.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/appearance \
         available values : https://cssvalues.com/?view=appearance

         */
        property["webkit-appearance"] = "webkit-appearance";
        /**
         *
         The backface-visibility CSS property sets whether the back face of an element is visible when turned towards the user.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility \
         available values : https://cssvalues.com/?view=backface-visibility

         */
        property["webkit-backface-visibility"] = "webkit-backface-visibility";
        /**
         *
         The background-clip CSS property sets whether an element's background extends underneath its border box, padding box, or content box.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip \
         available values : https://cssvalues.com/?view=background-clip

         */
        property["webkit-background-clip"] = "webkit-background-clip";
        /**
         *
         The background-origin CSS property sets the background's origin: from the border start, inside the border, or inside the padding.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin \
         available values : https://cssvalues.com/?view=background-origin

         */
        property["webkit-background-origin"] = "webkit-background-origin";
        /**
         *
         The background-size CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/background-size \
         available values : https://cssvalues.com/?view=background-size

         */
        property["webkit-background-size"] = "webkit-background-size";
        /**
         *
         */
        property["webkit-border-after"] = "webkit-border-after";
        /**
         *
         */
        property["webkit-border-after-color"] = "webkit-border-after-color";
        /**
         *
         */
        property["webkit-border-after-style"] = "webkit-border-after-style";
        /**
         *
         */
        property["webkit-border-after-width"] = "webkit-border-after-width";
        /**
         *
         The -webkit-border-before CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-border-before \
         available values : https://cssvalues.com/?view=-webkit-border-before

         */
        property["webkit-border-before"] = "webkit-border-before";
        /**
         *
         */
        property["webkit-border-before-color"] = "webkit-border-before-color";
        /**
         *
         */
        property["webkit-border-before-style"] = "webkit-border-before-style";
        /**
         *
         */
        property["webkit-border-before-width"] = "webkit-border-before-width";
        /**
         *
         The border-bottom-left-radius CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius \
         available values : https://cssvalues.com/?view=border-bottom-left-radius

         */
        property["webkit-border-bottom-left-radius"] = "webkit-border-bottom-left-radius";
        /**
         *
         The border-bottom-right-radius CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius \
         available values : https://cssvalues.com/?view=border-bottom-right-radius

         */
        property["webkit-border-bottom-right-radius"] = "webkit-border-bottom-right-radius";
        /**
         *
         */
        property["webkit-border-end"] = "webkit-border-end";
        /**
         *
         */
        property["webkit-border-end-color"] = "webkit-border-end-color";
        /**
         *
         */
        property["webkit-border-end-style"] = "webkit-border-end-style";
        /**
         *
         */
        property["webkit-border-end-width"] = "webkit-border-end-width";
        /**
         *
         */
        property["webkit-border-horizontal-spacing"] = "webkit-border-horizontal-spacing";
        /**
         *
         The border-image CSS property draws an image around a given element. It replaces the element's regular border.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-image \
         available values : https://cssvalues.com/?view=border-image

         */
        property["webkit-border-image"] = "webkit-border-image";
        /**
         *
         The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius \
         available values : https://cssvalues.com/?view=border-radius

         */
        property["webkit-border-radius"] = "webkit-border-radius";
        /**
         *
         */
        property["webkit-border-start"] = "webkit-border-start";
        /**
         *
         */
        property["webkit-border-start-color"] = "webkit-border-start-color";
        /**
         *
         */
        property["webkit-border-start-style"] = "webkit-border-start-style";
        /**
         *
         */
        property["webkit-border-start-width"] = "webkit-border-start-width";
        /**
         *
         The border-top-left-radius CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius \
         available values : https://cssvalues.com/?view=border-top-left-radius

         */
        property["webkit-border-top-left-radius"] = "webkit-border-top-left-radius";
        /**
         *
         The border-top-right-radius CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius \
         available values : https://cssvalues.com/?view=border-top-right-radius

         */
        property["webkit-border-top-right-radius"] = "webkit-border-top-right-radius";
        /**
         *
         */
        property["webkit-border-vertical-spacing"] = "webkit-border-vertical-spacing";
        /**
         *
         The box-align CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/box-align \
         available values : https://cssvalues.com/?view=box-align

         */
        property["webkit-box-align"] = "webkit-box-align";
        /**
         *
         The box-decoration-break CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/box-decoration-break \
         available values : https://cssvalues.com/?view=box-decoration-break

         */
        property["webkit-box-decoration-break"] = "webkit-box-decoration-break";
        /**
         *
         The box-direction CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/box-direction \
         available values : https://cssvalues.com/?view=box-direction

         */
        property["webkit-box-direction"] = "webkit-box-direction";
        /**
         *
         The -moz-box-flex and -webkit-box-flex CSS properties specify how a -moz-box or -webkit-box grows to fill the box that contains it, in the direction of the containing box's layout.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/box-flex \
         available values : https://cssvalues.com/?view=box-flex

         */
        property["webkit-box-flex"] = "webkit-box-flex";
        /**
         *
         The box-ordinal-group CSS property assigns the flexbox's child elements to an ordinal group.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/box-ordinal-group \
         available values : https://cssvalues.com/?view=box-ordinal-group

         */
        property["webkit-box-ordinal-group"] = "webkit-box-ordinal-group";
        /**
         *
         This is a property of the original CSS Flexible Box Layout Module draft, and has been replaced by a newer standard. See flexbox for information about the current standard.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/box-orient \
         available values : https://cssvalues.com/?view=box-orient

         */
        property["webkit-box-orient"] = "webkit-box-orient";
        /**
         *
         The -moz-box-pack and -webkit-box-pack CSS properties specify how a -moz-box or -webkit-box packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/box-pack \
         available values : https://cssvalues.com/?view=box-pack

         */
        property["webkit-box-pack"] = "webkit-box-pack";
        /**
         *
         The -webkit-box-reflect CSS property lets you reflect the content of an element in one specific direction.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-box-reflect \
         available values : https://cssvalues.com/?view=-webkit-box-reflect

         */
        property["webkit-box-reflect"] = "webkit-box-reflect";
        /**
         *
         The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow \
         available values : https://cssvalues.com/?view=box-shadow

         */
        property["webkit-box-shadow"] = "webkit-box-shadow";
        /**
         *
         The box-sizing CSS property sets how the total width and height of an element is calculated.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing \
         available values : https://cssvalues.com/?view=box-sizing

         */
        property["webkit-box-sizing"] = "webkit-box-sizing";
        /**
         *
         The clip-path CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path \
         available values : https://cssvalues.com/?view=clip-path

         */
        property["webkit-clip-path"] = "webkit-clip-path";
        /**
         *
         */
        property["webkit-column-break-after"] = "webkit-column-break-after";
        /**
         *
         */
        property["webkit-column-break-before"] = "webkit-column-break-before";
        /**
         *
         */
        property["webkit-column-break-inside"] = "webkit-column-break-inside";
        /**
         *
         The column-count CSS property breaks an element's content into the specified number of columns.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/column-count \
         available values : https://cssvalues.com/?view=column-count

         */
        property["webkit-column-count"] = "webkit-column-count";
        /**
         *
         The column-gap CSS property sets the size of the gap (gutter) between an element's columns.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap \
         available values : https://cssvalues.com/?view=column-gap

         */
        property["webkit-column-gap"] = "webkit-column-gap";
        /**
         *
         The column-rule&nbsp;shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule \
         available values : https://cssvalues.com/?view=column-rule

         */
        property["webkit-column-rule"] = "webkit-column-rule";
        /**
         *
         The column-rule-color CSS property sets the color of the line drawn between columns in a multi-column layout.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-color \
         available values : https://cssvalues.com/?view=column-rule-color

         */
        property["webkit-column-rule-color"] = "webkit-column-rule-color";
        /**
         *
         The column-rule-style CSS property sets the style of the line drawn between columns in a multi-column layout.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-style \
         available values : https://cssvalues.com/?view=column-rule-style

         */
        property["webkit-column-rule-style"] = "webkit-column-rule-style";
        /**
         *
         The column-rule-width CSS property sets the width of the line drawn between columns in a multi-column layout.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-width \
         available values : https://cssvalues.com/?view=column-rule-width

         */
        property["webkit-column-rule-width"] = "webkit-column-rule-width";
        /**
         *
         The column-span CSS property makes it possible for an element to span across all columns when its value is set to all.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/column-span \
         available values : https://cssvalues.com/?view=column-span

         */
        property["webkit-column-span"] = "webkit-column-span";
        /**
         *
         The column-width CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the column-width value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/column-width \
         available values : https://cssvalues.com/?view=column-width

         */
        property["webkit-column-width"] = "webkit-column-width";
        /**
         *
         The columns CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/columns \
         available values : https://cssvalues.com/?view=columns

         */
        property["webkit-columns"] = "webkit-columns";
        /**
         *
         The filter CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/filter \
         available values : https://cssvalues.com/?view=filter

         */
        property["webkit-filter"] = "webkit-filter";
        /**
         *
         The flex CSS shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/flex \
         available values : https://cssvalues.com/?view=flex

         */
        property["webkit-flex"] = "webkit-flex";
        /**
         *
         The flex-basis CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with box-sizing.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis \
         available values : https://cssvalues.com/?view=flex-basis

         */
        property["webkit-flex-basis"] = "webkit-flex-basis";
        /**
         *
         The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction \
         available values : https://cssvalues.com/?view=flex-direction

         */
        property["webkit-flex-direction"] = "webkit-flex-direction";
        /**
         *
         The flex-flow CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow \
         available values : https://cssvalues.com/?view=flex-flow

         */
        property["webkit-flex-flow"] = "webkit-flex-flow";
        /**
         *
         The flex-grow CSS&nbsp;property sets the flex grow factor of a flex item's main size.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow \
         available values : https://cssvalues.com/?view=flex-grow

         */
        property["webkit-flex-grow"] = "webkit-flex-grow";
        /**
         *
         The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink \
         available values : https://cssvalues.com/?view=flex-shrink

         */
        property["webkit-flex-shrink"] = "webkit-flex-shrink";
        /**
         *
         The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap \
         available values : https://cssvalues.com/?view=flex-wrap

         */
        property["webkit-flex-wrap"] = "webkit-flex-wrap";
        /**
         *
         The font-feature-settings CSS property controls advanced typographic features in OpenType fonts.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings \
         available values : https://cssvalues.com/?view=font-feature-settings

         */
        property["webkit-font-feature-settings"] = "webkit-font-feature-settings";
        /**
         *
         The font-smooth CSS property controls the application of anti-aliasing when fonts are rendered.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth \
         available values : https://cssvalues.com/?view=font-smooth

         */
        property["webkit-font-smoothing"] = "webkit-font-smoothing";
        /**
         *
         */
        property["webkit-highlight"] = "webkit-highlight";
        /**
         *
         */
        property["webkit-hyphenate-character"] = "webkit-hyphenate-character";
        /**
         *
         The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content \
         available values : https://cssvalues.com/?view=justify-content

         */
        property["webkit-justify-content"] = "webkit-justify-content";
        /**
         *
         The line-break CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/line-break \
         available values : https://cssvalues.com/?view=line-break

         */
        property["webkit-line-break"] = "webkit-line-break";
        /**
         *
         The -webkit-line-clamp CSS property allows limiting of the contents of a block container to the specified number of lines.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp \
         available values : https://cssvalues.com/?view=-webkit-line-clamp

         */
        property["webkit-line-clamp"] = "webkit-line-clamp";
        /**
         *
         */
        property["webkit-locale"] = "webkit-locale";
        /**
         *
         */
        property["webkit-logical-height"] = "webkit-logical-height";
        /**
         *
         */
        property["webkit-logical-width"] = "webkit-logical-width";
        /**
         *
         */
        property["webkit-margin-after"] = "webkit-margin-after";
        /**
         *
         */
        property["webkit-margin-before"] = "webkit-margin-before";
        /**
         *
         */
        property["webkit-margin-end"] = "webkit-margin-end";
        /**
         *
         */
        property["webkit-margin-start"] = "webkit-margin-start";
        /**
         *
         The mask CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/mask \
         available values : https://cssvalues.com/?view=mask

         */
        property["webkit-mask"] = "webkit-mask";
        /**
         *
         -webkit-mask-box-image sets the mask image for an element's border box.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-mask-box-image \
         available values : https://cssvalues.com/?view=-webkit-mask-box-image

         */
        property["webkit-mask-box-image"] = "webkit-mask-box-image";
        /**
         *
         */
        property["webkit-mask-box-image-outset"] = "webkit-mask-box-image-outset";
        /**
         *
         */
        property["webkit-mask-box-image-repeat"] = "webkit-mask-box-image-repeat";
        /**
         *
         */
        property["webkit-mask-box-image-slice"] = "webkit-mask-box-image-slice";
        /**
         *
         */
        property["webkit-mask-box-image-source"] = "webkit-mask-box-image-source";
        /**
         *
         */
        property["webkit-mask-box-image-width"] = "webkit-mask-box-image-width";
        /**
         *
         The mask-clip CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/mask-clip \
         available values : https://cssvalues.com/?view=mask-clip

         */
        property["webkit-mask-clip"] = "webkit-mask-clip";
        /**
         *
         The -webkit-mask-composite property specifies the manner in which multiple mask images applied to the same element are composited with one another. Mask images are composited in the opposite order that they are declared with the -webkit-mask-image property.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-mask-composite \
         available values : https://cssvalues.com/?view=-webkit-mask-composite

         */
        property["webkit-mask-composite"] = "webkit-mask-composite";
        /**
         *
         The mask-image CSS property sets the image that is used as mask layer for an element.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image \
         available values : https://cssvalues.com/?view=mask-image

         */
        property["webkit-mask-image"] = "webkit-mask-image";
        /**
         *
         The mask-origin CSS property sets the origin of a mask.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/mask-origin \
         available values : https://cssvalues.com/?view=mask-origin

         */
        property["webkit-mask-origin"] = "webkit-mask-origin";
        /**
         *
         The mask-position CSS property sets the initial position, relative to the mask position layer set by mask-origin, for each defined mask image.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/mask-position \
         available values : https://cssvalues.com/?view=mask-position

         */
        property["webkit-mask-position"] = "webkit-mask-position";
        /**
         *
         The -webkit-mask-position-x CSS property sets the initial horizontal position of a mask image.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-mask-position-x \
         available values : https://cssvalues.com/?view=-webkit-mask-position-x

         */
        property["webkit-mask-position-x"] = "webkit-mask-position-x";
        /**
         *
         The -webkit-mask-position-y CSS property sets the initial vertical position of a mask image.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-mask-position-y \
         available values : https://cssvalues.com/?view=-webkit-mask-position-y

         */
        property["webkit-mask-position-y"] = "webkit-mask-position-y";
        /**
         *
         The mask-repeat CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/mask-repeat \
         available values : https://cssvalues.com/?view=mask-repeat

         */
        property["webkit-mask-repeat"] = "webkit-mask-repeat";
        /**
         *
         The -webkit-mask-repeat-x property specifies whether and how a mask image is repeated (tiled) horizontally.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-mask-repeat-x \
         available values : https://cssvalues.com/?view=-webkit-mask-repeat-x

         */
        property["webkit-mask-repeat-x"] = "webkit-mask-repeat-x";
        /**
         *
         The -webkit-mask-repeat-y property sets whether and how a mask image is repeated (tiled) vertically.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-mask-repeat-y \
         available values : https://cssvalues.com/?view=-webkit-mask-repeat-y

         */
        property["webkit-mask-repeat-y"] = "webkit-mask-repeat-y";
        /**
         *
         The mask-size CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/mask-size \
         available values : https://cssvalues.com/?view=mask-size

         */
        property["webkit-mask-size"] = "webkit-mask-size";
        /**
         *
         */
        property["webkit-max-logical-height"] = "webkit-max-logical-height";
        /**
         *
         */
        property["webkit-max-logical-width"] = "webkit-max-logical-width";
        /**
         *
         */
        property["webkit-min-logical-height"] = "webkit-min-logical-height";
        /**
         *
         */
        property["webkit-min-logical-width"] = "webkit-min-logical-width";
        /**
         *
         The opacity CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/opacity \
         available values : https://cssvalues.com/?view=opacity

         */
        property["webkit-opacity"] = "webkit-opacity";
        /**
         *
         The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending order value and then by their source code order.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/order \
         available values : https://cssvalues.com/?view=order

         */
        property["webkit-order"] = "webkit-order";
        /**
         *
         */
        property["webkit-padding-after"] = "webkit-padding-after";
        /**
         *
         */
        property["webkit-padding-before"] = "webkit-padding-before";
        /**
         *
         */
        property["webkit-padding-end"] = "webkit-padding-end";
        /**
         *
         */
        property["webkit-padding-start"] = "webkit-padding-start";
        /**
         *
         The perspective CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/perspective \
         available values : https://cssvalues.com/?view=perspective

         */
        property["webkit-perspective"] = "webkit-perspective";
        /**
         *
         The perspective-origin CSS property determines the position at which the viewer is looking. It is used as the vanishing point by the perspective property.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin \
         available values : https://cssvalues.com/?view=perspective-origin

         */
        property["webkit-perspective-origin"] = "webkit-perspective-origin";
        /**
         *
         */
        property["webkit-perspective-origin-x"] = "webkit-perspective-origin-x";
        /**
         *
         */
        property["webkit-perspective-origin-y"] = "webkit-perspective-origin-y";
        /**
         *
         The -webkit-print-color-adjust property is a non-standard CSS extension that can be used to force printing of background colors and images in browsers based on the WebKit engine.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-print-color-adjust \
         available values : https://cssvalues.com/?view=-webkit-print-color-adjust

         */
        property["webkit-print-color-adjust"] = "webkit-print-color-adjust";
        /**
         *
         */
        property["webkit-rtl-ordering"] = "webkit-rtl-ordering";
        /**
         *
         The ruby-position CSS property defines the position of a ruby element relatives to its base element. It can be positioned over the element (over), under it (under), or between the characters on their right side (inter-character).

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/ruby-position \
         available values : https://cssvalues.com/?view=ruby-position

         */
        property["webkit-ruby-position"] = "webkit-ruby-position";
        /**
         *
         The shape-image-threshold CSS property sets the alpha channel threshold used to extract the shape using an image as the value for shape-outside.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/shape-image-threshold \
         available values : https://cssvalues.com/?view=shape-image-threshold

         */
        property["webkit-shape-image-threshold"] = "webkit-shape-image-threshold";
        /**
         *
         The shape-margin CSS property sets a margin for a CSS shape created using shape-outside.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/shape-margin \
         available values : https://cssvalues.com/?view=shape-margin

         */
        property["webkit-shape-margin"] = "webkit-shape-margin";
        /**
         *
         The shape-outside CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; shape-outside provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside \
         available values : https://cssvalues.com/?view=shape-outside

         */
        property["webkit-shape-outside"] = "webkit-shape-outside";
        /**
         *
         -webkit-tap-highlight-color is a non-standard CSS property that sets the color of the highlight that appears over a link while it's being tapped. The highlighting indicates to the user&nbsp;that their tap is being successfully recognized, and indicates which element they're tapping on.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-tap-highlight-color \
         available values : https://cssvalues.com/?view=-webkit-tap-highlight-color

         */
        property["webkit-tap-highlight-color"] = "webkit-tap-highlight-color";
        /**
         *
         */
        property["webkit-text-combine"] = "webkit-text-combine";
        /**
         *
         */
        property["webkit-text-decorations-in-effect"] = "webkit-text-decorations-in-effect";
        /**
         *
         The text-emphasis CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for text-emphasis-style and text-emphasis-color.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis \
         available values : https://cssvalues.com/?view=text-emphasis

         */
        property["webkit-text-emphasis"] = "webkit-text-emphasis";
        /**
         *
         The text-emphasis-color CSS property sets the color of emphasis marks. This value can also be set using the text-emphasis shorthand.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis-color \
         available values : https://cssvalues.com/?view=text-emphasis-color

         */
        property["webkit-text-emphasis-color"] = "webkit-text-emphasis-color";
        /**
         *
         The text-emphasis-position CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis-position \
         available values : https://cssvalues.com/?view=text-emphasis-position

         */
        property["webkit-text-emphasis-position"] = "webkit-text-emphasis-position";
        /**
         *
         The text-emphasis-style CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the text-emphasis shorthand.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis-style \
         available values : https://cssvalues.com/?view=text-emphasis-style

         */
        property["webkit-text-emphasis-style"] = "webkit-text-emphasis-style";
        /**
         *
         The -webkit-text-fill-color CSS property specifies the fill color of characters of text. If this property is not set, the value of the color property is used.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-fill-color \
         available values : https://cssvalues.com/?view=-webkit-text-fill-color

         */
        property["webkit-text-fill-color"] = "webkit-text-fill-color";
        /**
         *
         The text-orientation CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when writing-mode is not horizontal-tb). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation \
         available values : https://cssvalues.com/?view=text-orientation

         */
        property["webkit-text-orientation"] = "webkit-text-orientation";
        /**
         *
         -webkit-text-security is a non-standard CSS property that obfuscates characters in a &lt;form&gt; field (such as&nbsp;&lt;input&gt; or&nbsp;&lt;textarea&gt;) by replacing them with a shape. It only affects fields that are not of type=password.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-security \
         available values : https://cssvalues.com/?view=-webkit-text-security

         */
        property["webkit-text-security"] = "webkit-text-security";
        /**
         *
         The text-size-adjust CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/text-size-adjust \
         available values : https://cssvalues.com/?view=text-size-adjust

         */
        property["webkit-text-size-adjust"] = "webkit-text-size-adjust";
        /**
         *
         The -webkit-text-stroke CSS property specifies the width and color of strokes for text characters. This is a shorthand property for the longhand properties -webkit-text-stroke-width and -webkit-text-stroke-color.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-stroke \
         available values : https://cssvalues.com/?view=-webkit-text-stroke

         */
        property["webkit-text-stroke"] = "webkit-text-stroke";
        /**
         *
         The -webkit-text-stroke-color CSS property specifies the stroke color of characters of text. If this property is not set, the value of the color property is used.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-stroke-color \
         available values : https://cssvalues.com/?view=-webkit-text-stroke-color

         */
        property["webkit-text-stroke-color"] = "webkit-text-stroke-color";
        /**
         *
         The -webkit-text-stroke-width CSS property specifies the width of the stroke for text.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-stroke-width \
         available values : https://cssvalues.com/?view=-webkit-text-stroke-width

         */
        property["webkit-text-stroke-width"] = "webkit-text-stroke-width";
        /**
         *
         The transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/transform \
         available values : https://cssvalues.com/?view=transform

         */
        property["webkit-transform"] = "webkit-transform";
        /**
         *
         The transform-origin CSS property sets the origin for an element's transformations.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin \
         available values : https://cssvalues.com/?view=transform-origin

         */
        property["webkit-transform-origin"] = "webkit-transform-origin";
        /**
         *
         */
        property["webkit-transform-origin-x"] = "webkit-transform-origin-x";
        /**
         *
         */
        property["webkit-transform-origin-y"] = "webkit-transform-origin-y";
        /**
         *
         */
        property["webkit-transform-origin-z"] = "webkit-transform-origin-z";
        /**
         *
         The transform-style CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style \
         available values : https://cssvalues.com/?view=transform-style

         */
        property["webkit-transform-style"] = "webkit-transform-style";
        /**
         *
         The transition CSS property is a shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/transition \
         available values : https://cssvalues.com/?view=transition

         */
        property["webkit-transition"] = "webkit-transition";
        /**
         *
         The transition-delay CSS property specifies the duration to wait before starting a property's transition effect when its value changes.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay \
         available values : https://cssvalues.com/?view=transition-delay

         */
        property["webkit-transition-delay"] = "webkit-transition-delay";
        /**
         *
         The transition-duration CSS property sets the length of time a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration \
         available values : https://cssvalues.com/?view=transition-duration

         */
        property["webkit-transition-duration"] = "webkit-transition-duration";
        /**
         *
         The transition-property CSS property sets the CSS properties to which a transition effect should be applied.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property \
         available values : https://cssvalues.com/?view=transition-property

         */
        property["webkit-transition-property"] = "webkit-transition-property";
        /**
         *
         The transition-timing-function CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function \
         available values : https://cssvalues.com/?view=transition-timing-function

         */
        property["webkit-transition-timing-function"] = "webkit-transition-timing-function";
        /**
         *
         */
        property["webkit-user-drag"] = "webkit-user-drag";
        /**
         *
         The user-modify property has no effect in Firefox. It was originally planned to&nbsp;determine whether or not the content of an element can be edited by a user.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/user-modify \
         available values : https://cssvalues.com/?view=user-modify

         */
        property["webkit-user-modify"] = "webkit-user-modify";
        /**
         *
         The user-select CSS property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its chrome), except in textboxes.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/user-select \
         available values : https://cssvalues.com/?view=user-select

         */
        property["webkit-user-select"] = "webkit-user-select";
        /**
         *
         The writing-mode CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (html element for HTML documents).

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode \
         available values : https://cssvalues.com/?view=writing-mode

         */
        property["webkit-writing-mode"] = "webkit-writing-mode";
        /**
         *
         The white-space CSS property sets how white space inside an element is handled.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/white-space \
         available values : https://cssvalues.com/?view=white-space

         */
        property["white-space"] = "white-space";
        /**
         *
         The widows CSS property sets the minimum number of lines in a block container that must be shown at the top of a page, region, or column.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/widows \
         available values : https://cssvalues.com/?view=widows

         */
        property["widows"] = "widows";
        /**
         *
         The width CSS property sets an element's width. By default, it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/width \
         available values : https://cssvalues.com/?view=width

         */
        property["width"] = "width";
        /**
         *
         The will-change CSS property hints to browsers how an element is expected to change. Browsers may set up optimizations before an element is actually changed. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before they are actually required.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/will-change \
         available values : https://cssvalues.com/?view=will-change

         */
        property["will-change"] = "will-change";
        /**
         *
         The word-break CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/word-break \
         available values : https://cssvalues.com/?view=word-break

         */
        property["word-break"] = "word-break";
        /**
         *
         The word-spacing CSS property sets the length of space between words and between tags.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing \
         available values : https://cssvalues.com/?view=word-spacing

         */
        property["word-spacing"] = "word-spacing";
        /**
         *
         The overflow-wrap CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap \
         available values : https://cssvalues.com/?view=overflow-wrap

         */
        property["word-wrap"] = "word-wrap";
        /**
         *
         The writing-mode CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (html element for HTML documents).

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode \
         available values : https://cssvalues.com/?view=writing-mode

         */
        property["writing-mode"] = "writing-mode";
        /**
         *
         The x attribute defines a x-axis coordinate in the user coordinate system.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x \
         available values : https://cssvalues.com/?view=x

         */
        property["x"] = "x";
        /**
         *
         The y attribute defines a y-axis coordinate in the user coordinate system.

         refer to : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y \
         available values : https://cssvalues.com/?view=y

         */
        property["y"] = "y";
        /**
         *
         The z-index CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/z-index \
         available values : https://cssvalues.com/?view=z-index

         */
        property["z-index"] = "z-index";
        /**
         *
         The non-standard zoom CSS property can be used to control the magnification level of an element. transform: scale() should be used instead of this property, if possible. However, unlike CSS Transforms, zoom affects the layout size of the element.

         refer to : https://developer.mozilla.org/en-US/docs/Web/CSS/zoom \
         available values : https://cssvalues.com/?view=zoom

         */
        property["zoom"] = "zoom";
    })(property = css.property || (css.property = {}));
})(css || (css = {}));
;



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
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Varela+Round&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html, body {\n  background: white;\n  margin: 0px;\n  padding: 0px;\n  width: 100%;\n  height: 100%;\n}\n\n* {\n  box-sizing: border-box;\n  font-family: \"Varela Round\", sans-serif;\n}", "",{"version":3,"sources":["webpack://./framework/stylesheet.scss"],"names":[],"mappings":"AAEA;EACE,iBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AAAF;;AAGA;EACE,sBAAA;EACA,uCAAA;AAAF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');\r\n\r\nhtml, body {\r\n  background: white;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  font-family: 'Varela Round', sans-serif;\r\n}"],"sourceRoot":""}]);
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


const App = new _framework_Ok__WEBPACK_IMPORTED_MODULE_0__["Ok"]({
    title: "Mon App"
});
App.on(_framework_Ok__WEBPACK_IMPORTED_MODULE_0__["OkEvents"].ready, () => {
    customElements.define("ok-widget", _framework_Components_ok_components__WEBPACK_IMPORTED_MODULE_1__["OkWidget"]);
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
            yield App.translator().setUrl(new _framework_Ok__WEBPACK_IMPORTED_MODULE_0__["OkUrl"](`https://raw.githubusercontent.com/laukerkillian/Ok-Framework/main/test/Languages/TR_${lang}.json`));
            // dans le traducteur incorporé dans l'instance App, on précise l'url qu'il doit adopté
        });
    }
    let dialog = new _framework_Components_ok_components__WEBPACK_IMPORTED_MODULE_1__["OkDialog"]({});
    function main() {
        document.body.append(dialog);
        //dialog.setSize(new OkSize({width: 200, height: 20}));
        //dialog.style.setProperty(css.property["display"], "block");
        createImg(); // appele la fonction précédemment définis ( créer et importe une image sur le dom )
        translate(); // appele la fonction précédemment définis  ( traduit la page )
    }
    let isPressed = false;
    document.getElementById("coucou").addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
        // si le button n'a pas été précé il y a moins de 1s, attends une seconde et affiche salut les copains
        if (!isPressed) { // vérifie que le button n'a pas été précé depuis 1s
            isPressed = true; // dit que le button à été précé, il y a moins 1s
            yield Object(_framework_Ok__WEBPACK_IMPORTED_MODULE_0__["OkWait"])(1000); // attends 1s ou 1000ms
            //alert("Salut les copains"); // affiche "Salut les copains"x
            dialog.show();
            isPressed = false; // dit que le button n'a pas été précé depuis 1s
        }
    }));
    main(); // appel la fonction principale
});
App.translator().on(_framework_Ok__WEBPACK_IMPORTED_MODULE_0__["OkTranslatorEvents"].translated, () => {
    //console.log("translated")
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL0NvbXBvbmVudHMvb2stY29tcG9uZW50cy50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvQ29tcG9uZW50cy9vay1kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL0NvbXBvbmVudHMvb2stdHIudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL0NvbXBvbmVudHMvb2std2lkZ2V0LnRzIiwid2VicGFjazovLy8uL2ZyYW1ld29yay9Pay50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvT2tBcnJheS50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvT2tFdmVudHNFbWl0dGVyLnRzIiwid2VicGFjazovLy8uL2ZyYW1ld29yay9Pa0ltYWdlLnRzIiwid2VicGFjazovLy8uL2ZyYW1ld29yay9Pa0xhbmd1YWdlLnRzIiwid2VicGFjazovLy8uL2ZyYW1ld29yay9Pa011bHRpcGxlRXh0ZW5kcy50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvT2tTaXplLnRzIiwid2VicGFjazovLy8uL2ZyYW1ld29yay9Pa1RyYW5zbGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL09rVW5pdC50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvT2tVcmwudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL09rV2FpdC50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvY3NzLnRzIiwid2VicGFjazovLy8uL2ZyYW1ld29yay9wcml2YXRlL2dsb2JhbC50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvc3R5bGVzaGVldC5zY3NzP2IyYzQiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL3N0eWxlc2hlZXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlFO0FBQ0Y7QUFDbEM7QUFDRjtBQUU2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMbkM7QUFDVjtBQUNNO0FBQ0E7QUFLakMsTUFBTSxRQUFTLFNBQVEsbURBQVE7SUFVM0IsWUFBWSxPQUFpQjtRQUN6QixLQUFLLEVBQUUsQ0FB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MkY7QUFDVjtBQUNqRixnQkFBZ0IsZ0RBQUU7QUFDbEI7QUFDQSxDQUFDO0FBQ0QsT0FBTyxzREFBUTtBQUNmLHVDQUF1Qyw0RUFBUTtBQUMvQyxtQ0FBbUMsd0VBQUksRUFBRTtBQUN6Qyx1Q0FBdUMsNEVBQVE7QUFDL0M7QUFDQTtBQUNBLGtCQUFrQiw0REFBTSxNQUFNO0FBQzlCLHVDQUF1QyxxREFBTyxFQUFFLFVBQVUsbURBQUssaUdBQWlHO0FBQ2hLO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRCw2Q0FBNkM7QUFDN0Msc0NBQXNDO0FBQ3RDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQSw4Q0FBOEMsbURBQUssd0ZBQXdGLEtBQUs7QUFDaEo7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxxQkFBcUIsNEVBQVEsR0FBRztBQUNoQztBQUNBO0FBQ0EscUNBQXFDLHVCQUF1QjtBQUM1RDtBQUNBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsNkJBQTZCO0FBQzdCLGtCQUFrQiw0REFBTSxPQUFPO0FBQy9CLHlDQUF5QztBQUN6QztBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLEtBQUs7QUFDTCxXQUFXO0FBQ1gsQ0FBQztBQUNELG9CQUFvQixnRUFBa0I7QUFDdEM7QUFDQSxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi90ZXN0L2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHtPa0RpYWxvZywgT3B0aW9ucyBhcyBPa0RpYWxvZ09wdGlvbnN9IGZyb20gXCIuL29rLWRpYWxvZ1wiO1xyXG5pbXBvcnQge09rV2lkZ2V0LCBFdmVudHMgYXMgT2tXaWRnZXRFdmVudHN9IGZyb20gXCIuL29rLXdpZGdldFwiO1xyXG5pbXBvcnQge09rVHJ9IGZyb20gXCIuL29rLXRyXCI7XHJcbmltcG9ydCB7Y3NzfSBmcm9tIFwiLi4vY3NzXCI7XHJcblxyXG5leHBvcnQge09rVHIsIE9rV2lkZ2V0LCBjc3MsIE9rRGlhbG9nLCBPa0RpYWxvZ09wdGlvbnMsIE9rV2lkZ2V0RXZlbnRzfTsiLCJpbXBvcnQge09rV2lkZ2V0fSBmcm9tIFwiLi9vay13aWRnZXRcIjtcclxuaW1wb3J0IHtjc3N9IGZyb20gXCIuLi9jc3NcIjtcclxuaW1wb3J0IHtPa1NpemV9IGZyb20gXCIuLi9Pa1NpemVcIjtcclxuaW1wb3J0IHtPa1VuaXR9IGZyb20gXCIuLi9Pa1VuaXRcIjtcclxuXHJcbmludGVyZmFjZSBPcHRpb25zIHtcclxuXHJcbn1cclxuY2xhc3MgT2tEaWFsb2cgZXh0ZW5kcyBPa1dpZGdldHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9rRGlhbG9nIGVuYWJsZSB0byBjcmVhdGUgYSBzbWFsbCB3aW5kb3cgaW5zaWRlIHRoZSBuYXZpZ2F0b3IncyB3aW5kb3dcclxuICAgICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICAgKi9cclxuXHJcbiAgICAjbW9kYWw6IE9rV2lkZ2V0ID0gbmV3IE9rV2lkZ2V0KCk7XHJcbiAgICAjc2hhZG93OiBTaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6ICdjbG9zZWQnfSk7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucz86IE9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuI3NoYWRvdy5hcHBlbmQodGhpcy4jbW9kYWwpXHJcblxyXG4gICAgICAgIHRoaXMuI21vZGFsLnNldFN0eWxlKG5ldyBNYXAoW1xyXG4gICAgICAgICAgICAgICAgW2Nzcy5wcm9wZXJ0eVtcIm1heC13aWR0aFwiXSwgXCI1MDBweFwiXSxcclxuICAgICAgICAgICAgICAgIFtjc3MucHJvcGVydHlbXCJ3aWR0aFwiXSwgXCIxMDAlXCJdLFxyXG4gICAgICAgICAgICAgICAgW2Nzcy5wcm9wZXJ0eVtcIm1heC1oZWlnaHRcIl0sIFwiMzAwcHhcIl0sXHJcbiAgICAgICAgICAgICAgICBbY3NzLnByb3BlcnR5W1wiaGVpZ2h0XCJdLCBcIjEwMCVcIl0sXHJcbiAgICAgICAgICAgICAgICBbY3NzLnByb3BlcnR5W1wiZGlzcGxheVwiXSwgXCJibG9ja1wiXSxcclxuICAgICAgICAgICAgICAgIFtjc3MucHJvcGVydHlbXCJiYWNrZ3JvdW5kXCJdLCBcIndoaXRlXCJdLFxyXG4gICAgICAgICAgICAgICAgW2Nzcy5wcm9wZXJ0eVtcImJvcmRlci1yYWRpdXNcIl0sIFwiMTVweFwiXSxcclxuICAgICAgICAgICAgICAgIFtjc3MucHJvcGVydHlbXCJwYWRkaW5nXCJdLCBcIjIwcHggMjBweFwiXVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgKSlcclxuICAgICAgICB0aGlzLiNtb2RhbC5zZXRIVE1MKGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGApO1xyXG4gICAgICAgIHRoaXMuc2V0U3R5bGUobmV3IE1hcChbXHJcbiAgICAgICAgICAgICAgICBbY3NzLnByb3BlcnR5W1wid2lkdGhcIl0sIFwiMTAwJVwiXSxcclxuICAgICAgICAgICAgICAgIFtjc3MucHJvcGVydHlbXCJoZWlnaHRcIl0sIFwiMFwiXSxcclxuICAgICAgICAgICAgICAgIFtjc3MucHJvcGVydHlbXCJkaXNwbGF5XCJdLCBcImZsZXhcIl0sXHJcbiAgICAgICAgICAgICAgICBbY3NzLnByb3BlcnR5W1wicG9zaXRpb25cIl0sIFwiYWJzb2x1dGVcIl0sXHJcbiAgICAgICAgICAgICAgICBbY3NzLnByb3BlcnR5W1widG9wXCJdLCBcIjBweFwiXSxcclxuICAgICAgICAgICAgICAgIFtjc3MucHJvcGVydHlbXCJsZWZ0XCJdLCBcIjBweFwiXSxcclxuICAgICAgICAgICAgICAgIFtjc3MucHJvcGVydHlbXCJiYWNrZ3JvdW5kXCJdLCBcInJnYmEoMCwgMCwgMCwgMC4zKVwiXSxcclxuICAgICAgICAgICAgICAgIFtjc3MucHJvcGVydHlbXCJqdXN0aWZ5LWNvbnRlbnRcIl0sIFwiY2VudGVyXCJdLFxyXG4gICAgICAgICAgICAgICAgW2Nzcy5wcm9wZXJ0eVtcImFsaWduLWl0ZW1zXCJdLCBcImNlbnRlclwiXSxcclxuICAgICAgICAgICAgICAgIFtjc3MucHJvcGVydHlbXCJvdmVyZmxvd1wiXSwgXCJoaWRkZW5cIl0sXHJcbiAgICAgICAgICAgICAgICBbY3NzLnByb3BlcnR5W1widHJhbnNpdGlvblwiXSwgXCJhbGwgLjVzIGVhc2Utb3V0XCJdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICApKVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjYWxsZWRCeUNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvdygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldFN0eWxlUHJvcGVydHkoY3NzLnByb3BlcnR5W1wiaGVpZ2h0XCJdLCBcIjEwMCVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNpemUoKTogT2tTaXplIHtcclxuICAgICAgICBsZXQgc2l6ZVJlY3QgPSB0aGlzLiNtb2RhbC5nZXRDbGllbnRSZWN0cygpWzBdO1xyXG4gICAgICAgIHJldHVybiBuZXcgT2tTaXplKHtcclxuICAgICAgICAgICAgd2lkdGg6IHNpemVSZWN0LndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHNpemVSZWN0LmhlaWdodFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNpemUoc2l6ZTogT2tTaXplIHwge3dpZHRoPzogbnVtYmVyLCBoZWlnaHQ/OiBudW1iZXJ9KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHNpemVPa1R5cGU6IE9rU2l6ZTtcclxuICAgICAgICBpZighKHNpemUgaW5zdGFuY2VvZiBPa1NpemUpKSB7XHJcbiAgICAgICAgICAgIHNpemVPa1R5cGUgPSBuZXcgT2tTaXplKHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBzaXplLmhlaWdodFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2l6ZU9rVHlwZSA9IHNpemU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiNtb2RhbC5zZXRTdHlsZVByb3BlcnR5KGNzcy5wcm9wZXJ0eVtcIndpZHRoXCJdLCBPa1VuaXQoc2l6ZU9rVHlwZS53aWR0aCgpLCBcInB4XCIpKTtcclxuICAgICAgICB0aGlzLiNtb2RhbC5zZXRTdHlsZVByb3BlcnR5KGNzcy5wcm9wZXJ0eVtcImhlaWdodFwiXSwgT2tVbml0KHNpemVPa1R5cGUuaGVpZ2h0KCksIFwicHhcIikpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge09rRGlhbG9nLCBPcHRpb25zfSIsImltcG9ydCB7T2t9IGZyb20gJy4uL09rJztcclxuaW1wb3J0IHtjdXJyQXBwfSBmcm9tICcuLi9wcml2YXRlL2dsb2JhbCc7XHJcbmltcG9ydCB7T2tXaWRnZXR9IGZyb20gXCIuL29rLXdpZGdldFwiO1xyXG5pbXBvcnQge0V2ZW50cyBhcyBPa1RyYW5zbGF0b3JFdmVudHN9IGZyb20gXCIuLi9Pa1RyYW5zbGF0b3JcIjtcclxuXHJcbmNsYXNzIE9rVHIgZXh0ZW5kcyBPa1dpZGdldCB7XHJcbiAgICAvKipcclxuICAgICAqIGN1cnJlbnQgYXBwXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIEFwcDogT2s7XHJcbiAgICAvKipcclxuICAgICAqIGRlZmF1bHQgdGV4dCBkZWZpbmVkIGluIDxvay10cj5URVhUPC9vay10cj5cclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbV90ZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFuc2xhdGUgdGhlIHRleHQgZGVmaW5lZCBpbiA8b2stdHI+VEVYVDwvb2stdHI+XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5BcHAgPSBjdXJyQXBwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICBsZXQgZWwgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubV90ZXh0ID0gdGhpcy5pbm5lclRleHQ7XHJcbiAgICAgICAgdGhpcy5BcHAudHJhbnNsYXRvcigpLm9uKE9rVHJhbnNsYXRvckV2ZW50cy50cmFuc2xhdGVkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGVsLmlubmVyVGV4dCA9IHRoaXMuQXBwLnRyYW5zbGF0b3IoKS50cmFuc2xhdGUodGhpcy5tX3RleHQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7T2tUcn0iLCJpbXBvcnQge09rU2l6ZX0gZnJvbSBcIi4uL09rU2l6ZVwiO1xyXG5pbXBvcnQge09rVW5pdH0gZnJvbSBcIi4uL09rVW5pdFwiO1xyXG5pbXBvcnQge2Nzc30gZnJvbSBcIi4uL2Nzc1wiO1xyXG5pbXBvcnQge09rRXZlbnRzRW1pdHRlcn0gZnJvbSBcIi4uL09rRXZlbnRzRW1pdHRlclwiO1xyXG5pbXBvcnQgcHJvcGVydHkgPSBjc3MucHJvcGVydHk7XHJcbmltcG9ydCB7T2tXYWl0fSBmcm9tIFwiLi4vT2tXYWl0XCI7XHJcbmltcG9ydCB7T2tNdWx0aXBsZUV4dGVuZHN9IGZyb20gXCIuLi9Pa011bHRpcGxlRXh0ZW5kc1wiO1xyXG5cclxuZW51bSBFdmVudHMge1xyXG4gICAgSFRNTENvbnRlbnRDaGFuZ2UgPSBcIkhUTUxDb250ZW50Q2hhbmdlXCJcclxufVxyXG5cclxuaW50ZXJmYWNlIE9rV2lkZ2V0IGV4dGVuZHMgSFRNTEVsZW1lbnQsIE9rRXZlbnRzRW1pdHRlciB7XHJcblxyXG59XHJcblxyXG5jbGFzcyBPa1dpZGdldCBleHRlbmRzIE9rTXVsdGlwbGVFeHRlbmRzKEhUTUxFbGVtZW50LCBPa0V2ZW50c0VtaXR0ZXIpIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihuZXcgTWFwKFtcclxuXHJcbiAgICAgICAgXSkpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlDdXN0b21TdHlsZSgpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKVxyXG4gICAgICAgIHRoaXMuSFRNTENvbnRlbnRDaGFuZ2VPYnNlcnZlcigpXHJcbiAgICB9XHJcblxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsZWRCeUNvbm5lY3RlZENhbGxiYWNrKClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb24oZXZlbnQ6IEV2ZW50cyB8IHN0cmluZywgbGlzdGVuZXI6IChhdHRyPzphbnkpID0+IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmKGV2ZW50IGluIEV2ZW50cykge1xyXG4gICAgICAgICAgICBzdXBlci5vbihldmVudCwgbGlzdGVuZXIpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZXZlbnQgc2VuZCBkb2Vzbid0IGV4aXN0IG9uIHRoaXMgb2JqZWN0IVwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyRXZlbnRzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub24oRXZlbnRzLkhUTUxDb250ZW50Q2hhbmdlLCAoKSA9PiB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBIVE1MQ29udGVudENoYW5nZU9ic2VydmVyKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY2FsbGVkQnlDb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICBpZih0aGlzLmdldEF0dHJpYnV0ZShcInRlbXBsYXRlXCIpKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wbGF0ZUlkID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJ0ZW1wbGF0ZVwiKVxyXG4gICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0ZW1wbGF0ZUlkKSAhPT0gbnVsbCAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0ZW1wbGF0ZUlkKSBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IDxIVE1MVGVtcGxhdGVFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRlbXBsYXRlSWQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRlbXBsYXRlQ29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnY2xvc2VkJ30pO1xyXG4gICAgICAgICAgICAgICAgc2hhZG93LmFwcGVuZCh0ZW1wbGF0ZUNvbnRlbnQpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIldlIGNhbid0IGZvdW5kIHRlbXBsYXRlIG9yIGlzbid0IGFuIGluc3RhbmNlIG9mIHRlbXBsYXRlIGVsZW1lbnRcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFwcGx5Q3VzdG9tU3R5bGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRTdHlsZVByb3BlcnR5KGNzcy5wcm9wZXJ0eS5kaXNwbGF5LCBcImJsb2NrXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBdHRyaWJ1dGVzKCk6IE5hbWVkTm9kZU1hcCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2l6ZSgpOiBPa1NpemUge1xyXG4gICAgICAgIGxldCBzaXplUmVjdCA9IHRoaXMuZ2V0Q2xpZW50UmVjdHMoKVswXTtcclxuICAgICAgICByZXR1cm4gbmV3IE9rU2l6ZSh7XHJcbiAgICAgICAgICAgIHdpZHRoOiBzaXplUmVjdC53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBzaXplUmVjdC5oZWlnaHRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTdHlsZVByb3BlcnR5KHByb3BlcnR5OiBjc3MucHJvcGVydHksIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEhUTUwoaHRtbFN0cmluZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2l2ZSBzdHlsZSB0byBlbGVtZW50c1xyXG4gICAgICogZXhhbXBsZSA6XHJcbiAgICAgKiBgYGB0c1xyXG4gICAgICogY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib2std2lkZ2V0XCIsIE9rV2lkZ2V0KVxyXG4gICAgICogbGV0IG15T2JqID0gbmV3IE9rV2lkZ2V0KClcclxuICAgICAqIG15T2JqLnNldFN0eWxlKG5ldyBNYXAoW1xyXG4gICAgICogICAgICBbY3NzLnByb3BlcnR5W1wid2lkdGhcIl0sIFwiMTAwJVwiXSwgLy8gd2lkdGg6IDEwMCVcclxuICAgICAqICAgICAgW2Nzcy5wcm9wZXJ0eVtcImhlaWdodFwiXSwgXCI1MDBweFwiXSwgLy8gaGVpZ2h0OiAxMDAlXHJcbiAgICAgKiAgICAgIFtjc3MucHJvcGVydHlbXCJkaXNwbGF5XCJdLCBcImJsb2NrXCJdLCAvLyBkaXNwbGF5IDogYmxvY2tcclxuICAgICAqICAgICAgW2Nzcy5wcm9wZXJ0eVtcImJhY2tncm91bmRcIl0sIFwiYmx1ZVwiXVxyXG4gICAgICogXSkpO1xyXG4gICAgICogZG9jdW1lbnQuYm9keS5hcHBlbmQobXlPYmopXHJcbiAgICAgKiBgYGBcclxuICAgICAqIEBwYXJhbSBzdHlsZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFN0eWxlKHN0eWxlczogTWFwPGNzcy5wcm9wZXJ0eSwgc3RyaW5nPik6IHZvaWQge1xyXG4gICAgICAgIGZvcihjb25zdCBzdHlsZSBvZiBzdHlsZXMpIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gc3R5bGVbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVbMV07XHJcbiAgICAgICAgICAgIGlmKGtleSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlVuZGVmaW5lZCBrZXlcIilcclxuICAgICAgICAgICAgfWVsc2UgaWYodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJVbmRlZmluZWQgdmFsdWVcIilcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdHlsZVByb3BlcnR5KGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIHNldFNpemUoc2l6ZTogT2tTaXplIHwge3dpZHRoPzogbnVtYmVyLCBoZWlnaHQ/OiBudW1iZXJ9KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHNpemVPa1R5cGU6IE9rU2l6ZTtcclxuICAgICAgICBpZighKHNpemUgaW5zdGFuY2VvZiBPa1NpemUpKSB7XHJcbiAgICAgICAgICAgIHNpemVPa1R5cGUgPSBuZXcgT2tTaXplKHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBzaXplLmhlaWdodFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2l6ZU9rVHlwZSA9IHNpemU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0eWxlLndpZHRoID0gT2tVbml0KHNpemVPa1R5cGUud2lkdGgoKSwgXCJweFwiKTtcclxuICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9ICBPa1VuaXQoc2l6ZU9rVHlwZS5oZWlnaHQoKSwgXCJweFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIE9rV2lkZ2V0IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoYXQncyBhIGNvbnN0YW50IHdoaWNoIGlzIG5vdCBpbXBvcnRhbnQgZm9yIHlvdS4gQnV0LCB3aGljaCBpcyBpbXBvcnRhbnQgZm9yIHRoZSBzeXN0ZW0uXHJcbiAgICAgKiBUaGlzIGNvbnN0YW50IHN5bWJvbGl6ZSB0aGUgbm9kZVR5cGUuVGhpcyBwcm9wZXJ0aWVzIGFsd2F5cyByZXR1cm4gMi5cclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgQVRUUklCVVRFX05PREU6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogVGhhdCdzIGEgY29uc3RhbnQgd2hpY2ggaXMgbm90IGltcG9ydGFudCBmb3IgeW91LiBCdXQsIHdoaWNoIGlzIGltcG9ydGFudCBmb3IgdGhlIHN5c3RlbS5cclxuICAgICAqIFRoaXMgY29uc3RhbnQgc3ltYm9saXplIHRoZSBub2RlVHlwZS4gVGhpcyBwcm9wZXJ0aWVzIGFsd2F5cyByZXR1cm4gMi5cclxuICAgICAqIOKaoCB0aGlzIHByb3BlcnR5IHdhcyBkZWxldGVkIGluIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy9cclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgQ0RBVEFfU0VDVElPTl9OT0RFOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIFRoYXQncyBhIGNvbnN0YW50IHdoaWNoIGlzIG5vdCBpbXBvcnRhbnQgZm9yIHlvdS4gQnV0LCB3aGljaCBpcyBpbXBvcnRhbnQgZm9yIHRoZSBzeXN0ZW0uXHJcbiAgICAgKiBUaGlzIGNvbnN0YW50IHN5bWJvbGl6ZSB0aGUgbm9kZVR5cGUuXHJcbiAgICAgKiBUaGlzIHByb3BlcnRpZXMgYWx3YXlzIHJldHVybiA0LlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBDT01NRU5UX05PREU6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogVGhhdCdzIGEgY29uc3RhbnQgd2hpY2ggaXMgbm90IGltcG9ydGFudCBmb3IgeW91LiBCdXQsIHdoaWNoIGlzIGltcG9ydGFudCBmb3IgdGhlIHN5c3RlbS5cclxuICAgICAqIFRoaXMgY29uc3RhbnQgc3ltYm9saXplIHRoZSBub2RlVHlwZVxyXG4gICAgICogVGhpcyBwcm9wZXJ0aWVzIGFsd2F5cyByZXR1cm4gOC5cclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgRE9DVU1FTlRfRlJBR01FTlRfTk9ERTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGF0J3MgYSBjb25zdGFudCB3aGljaCBpcyBub3QgaW1wb3J0YW50IGZvciB5b3UuIEJ1dCwgd2hpY2ggaXMgaW1wb3J0YW50IGZvciB0aGUgc3lzdGVtLlxyXG4gICAgICogVGhpcyBjb25zdGFudCBzeW1ib2xpemUgdGhlIG5vZGVUeXBlLiBUaGlzIHByb3BlcnRpZXMgYWx3YXlzIHJldHVyblxyXG4gICAgICogVGhpcyBwcm9wZXJ0aWVzIHdpbGwgYWx3YXlzIHJldHVybiAxMS5cclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgRE9DVU1FTlRfTk9ERTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGF0J3MgYSBjb25zdGFudCwgd2hpY2ggaW5kaWNhdGUgdGhlIHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgY29tcGFyZWQgdG8gYW4gb3RoZXIgZWxlbWVudC5cclxuICAgICAqIFRoaXMgcHJvcGVydGllcyBhbHdheXMgcmV0dXJuIDQuXHJcbiAgICAgKiBgYGBodG1sXHJcbiAgICAgKiA8ZGl2IGlkPVwiZWxlbWVudDFcIj5cclxuICAgICAqICAgICA8ZGl2IGlkPVwiZWxlbWVudDJcIj5cclxuICAgICAqICAgICAgPC9kaXY+XHJcbiAgICAgKiA8L2Rpdj5cclxuICAgICAqIGBgYFxyXG4gICAgICpcclxuICAgICAqIGBgYHR5cGVzY3JpcHRcclxuICAgICAqIGxldCBlbGVtZW50MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxlbWVudDFcIik7XHJcbiAgICAgKiBsZXQgZWxlbWVudDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsZW1lbnQyXCIpO1xyXG4gICAgICpcclxuICAgICAqIGVsZW1lbnQyLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGVsZW1lbnQxKTsgLy8gcmV0dXJuIHRoZSBudW1iZXIgNCB3aGljaCBpcyBzeW1ib2xpemVkIGJ5IERPQ1VNRU5UX1BPU0lUSU9OX0NPTlRBSU5FRF9CWVxyXG4gICAgICogYGBgXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBET0NVTUVOVF9QT1NJVElPTl9DT05UQUlORURfQlk6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogVGhhdCdzIGEgY29uc3RhbnQsIHdoaWNoIGluZGljYXRlIHRoZSBwb3NpdGlvbiBvZiBhbiBlbGVtZW50IGNvbXBhcmVkIHRvIGFuIG90aGVyIGVsZW1lbnQuXHJcbiAgICAgKiBUaGlzIHByb3BlcnRpZXMgYWx3YXlzIHJldHVybiAxNi5cclxuICAgICAqIGBgYGh0bWxcclxuICAgICAqIDxkaXYgaWQ9XCJlbGVtZW50MVwiPlxyXG4gICAgICogICAgIDxkaXYgaWQ9XCJlbGVtZW50MlwiPlxyXG4gICAgICogICAgICA8L2Rpdj5cclxuICAgICAqIDwvZGl2PlxyXG4gICAgICogYGBgXHJcbiAgICAgKlxyXG4gICAgICogYGBgdHlwZXNjcmlwdFxyXG4gICAgICogbGV0IGVsZW1lbnQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbGVtZW50MVwiKTtcclxuICAgICAqIGxldCBlbGVtZW50MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxlbWVudDJcIik7XHJcbiAgICAgKlxyXG4gICAgICogZWxlbWVudDEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZWxlbWVudDIpOyAvLyByZXR1cm4gdGhlIG51bWJlciAxNiB3aGljaCBpcyBzeW1ib2xpemVkIGJ5IERPQ1VNRU5UX1BPU0lUSU9OX0NPTlRBSU5FRF9CWVxyXG4gICAgICogYGBgXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBET0NVTUVOVF9QT1NJVElPTl9DT05UQUlOUzogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGF0J3MgYSBjb25zdGFudCwgd2hpY2ggaW5kaWNhdGUgdGhlIHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgY29tcGFyZWQgdG8gYW4gb3RoZXIgZWxlbWVudC5cclxuICAgICAqIFRoaXMgcHJvcGVydGllcyBhbHdheXMgcmV0dXJuIDEuIEl0IHNlZW0gdGhlcmUgaXMgbm8gbGlhaXNvbiBiZXR3ZWVuIHRoZSB0d28gbm9kZXNcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgRE9DVU1FTlRfUE9TSVRJT05fRElTQ09OTkVDVEVEOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIFRoYXQncyBhIGNvbnN0YW50LCB3aGljaCBpbmRpY2F0ZSB0aGUgcG9zaXRpb24gb2YgYW4gZWxlbWVudCBjb21wYXJlZCB0byBhbiBvdGhlciBlbGVtZW50LlxyXG4gICAgICogVGhpcyBwcm9wZXJ0aWVzIGFsd2F5cyByZXR1cm4gNC5cclxuICAgICAqIGBgYGh0bWxcclxuICAgICAqIDxkaXYgaWQ9XCJlbGVtZW50MVwiPjwvZGl2PlxyXG4gICAgICogPGRpdiBpZD1cImVsZW1lbnQyXCI+PC9kaXY+XHJcbiAgICAgKiBgYGBcclxuICAgICAqIGBgYHR5cGVzY3JpcHRcclxuICAgICAqIGxldCBlbGVtZW50MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxlbWVudDFcIik7XHJcbiAgICAgKiBsZXQgZWxlbWVudDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsZW1lbnQyXCIpO1xyXG4gICAgICpcclxuICAgICAqIGVsZW1lbnQxLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGVsZW1lbnQyKTsgLy8gcmV0dXJuIHRoZSBudW1iZXIgNCB3aGljaCBpcyBzeW1ib2xpemVkIGJ5IERPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lOR1xyXG4gICAgICogYGBgXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IERPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lORzogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiA/Pz9cclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgRE9DVU1FTlRfUE9TSVRJT05fSU1QTEVNRU5UQVRJT05fU1BFQ0lGSUM6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogVGhhdCdzIGEgY29uc3RhbnQsIHdoaWNoIGluZGljYXRlIHRoZSBwb3NpdGlvbiBvZiBhbiBlbGVtZW50IGNvbXBhcmVkIHRvIGFuIG90aGVyIGVsZW1lbnQuXHJcbiAgICAgKiBUaGlzIHByb3BlcnRpZXMgYWx3YXlzIHJldHVybiAzMi5cclxuICAgICAqIGBgYGh0bWxcclxuICAgICAqIDxkaXYgaWQ9XCJlbGVtZW50MVwiPjwvZGl2PlxyXG4gICAgICogPGRpdiBpZD1cImVsZW1lbnQyXCI+PC9kaXY+XHJcbiAgICAgKiBgYGBcclxuICAgICAqXHJcbiAgICAgKiBgYGB0eXBlc2NyaXB0XHJcbiAgICAgKiBsZXQgZWxlbWVudDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsZW1lbnQxXCIpO1xyXG4gICAgICogbGV0IGVsZW1lbnQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbGVtZW50MlwiKTtcclxuICAgICAqXHJcbiAgICAgKiBlbGVtZW50Mi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlbGVtZW50MSk7IC8vIHJldHVybiB0aGUgbnVtYmVyIDIgd2hpY2ggaXMgc3ltYm9saXplZCBieSBET0NVTUVOVF9QT1NJVElPTl9QUkVDRURJTkdcclxuICAgICAqIGBgYFxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBET0NVTUVOVF9QT1NJVElPTl9QUkVDRURJTkc6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogVGhhdCdzIGEgY29uc3RhbnQgd2hpY2ggaXMgbm90IGltcG9ydGFudCBmb3IgeW91LiBCdXQsIHdoaWNoIGlzIGltcG9ydGFudCBmb3IgdGhlIHN5c3RlbS5cclxuICAgICAqIFRoaXMgY29uc3RhbnQgc3ltYm9saXplIHRoZSBub2RlVHlwZS4gVGhpcyBwcm9wZXJ0aWVzIGFsd2F5cyByZXR1cm4gMi5cclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgRE9DVU1FTlRfVFlQRV9OT0RFOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIFRoYXQncyBhIGNvbnN0YW50IHdoaWNoIGlzIG5vdCBpbXBvcnRhbnQgZm9yIHlvdS4gQnV0LCB3aGljaCBpcyBpbXBvcnRhbnQgZm9yIHRoZSBzeXN0ZW0uXHJcbiAgICAgKiBUaGlzIGNvbnN0YW50IHN5bWJvbGl6ZSB0aGUgbm9kZVR5cGUuIFRoaXMgcHJvcGVydGllcyBhbHdheXMgcmV0dXJuIDEuXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IEVMRU1FTlRfTk9ERTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGF0J3MgYSBjb25zdGFudCB3aGljaCBpcyBub3QgaW1wb3J0YW50IGZvciB5b3UuIEJ1dCwgd2hpY2ggaXMgaW1wb3J0YW50IGZvciB0aGUgc3lzdGVtLlxyXG4gICAgICogVGhpcyBjb25zdGFudCBzeW1ib2xpemUgdGhlIG5vZGVUeXBlLiBUaGlzIHByb3BlcnRpZXMgYWx3YXlzIHJldHVybiA2LlxyXG4gICAgICog4pqgIHRoaXMgcHJvcGVydHkgd2FzIGRlbGV0ZWQgaW4gaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnL1xyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBFTlRJVFlfTk9ERTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGF0J3MgYSBjb25zdGFudCB3aGljaCBpcyBub3QgaW1wb3J0YW50IGZvciB5b3UuIEJ1dCwgd2hpY2ggaXMgaW1wb3J0YW50IGZvciB0aGUgc3lzdGVtLlxyXG4gICAgICogVGhpcyBjb25zdGFudCBzeW1ib2xpemUgdGhlIG5vZGVUeXBlLiBUaGlzIHByb3BlcnRpZXMgYWx3YXlzIHJldHVybiA1LlxyXG4gICAgICog4pqgIHRoaXMgcHJvcGVydHkgd2FzIGRlbGV0ZWQgaW4gaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnL1xyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBFTlRJVFlfUkVGRVJFTkNFX05PREU6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogVGhhdCdzIGEgY29uc3RhbnQgd2hpY2ggaXMgbm90IGltcG9ydGFudCBmb3IgeW91LiBCdXQsIHdoaWNoIGlzIGltcG9ydGFudCBmb3IgdGhlIHN5c3RlbS5cclxuICAgICAqIFRoaXMgY29uc3RhbnQgc3ltYm9saXplIHRoZSBub2RlVHlwZS4gVGhpcyBwcm9wZXJ0aWVzIGFsd2F5cyByZXR1cm4gMTIuXHJcbiAgICAgKiDimqAgdGhpcyBwcm9wZXJ0eSB3YXMgZGVsZXRlZCBpbiBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IE5PVEFUSU9OX05PREU6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogVGhhdCdzIGEgY29uc3RhbnQgd2hpY2ggaXMgbm90IGltcG9ydGFudCBmb3IgeW91LiBCdXQsIHdoaWNoIGlzIGltcG9ydGFudCBmb3IgdGhlIHN5c3RlbS5cclxuICAgICAqIFRoaXMgY29uc3RhbnQgc3ltYm9saXplIHRoZSBub2RlVHlwZS4gVGhpcyBwcm9wZXJ0aWVzIGFsd2F5cyByZXR1cm4gNy5cclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIFRoYXQncyBhIGNvbnN0YW50IHdoaWNoIGlzIG5vdCBpbXBvcnRhbnQgZm9yIHlvdS4gQnV0LCB3aGljaCBpcyBpbXBvcnRhbnQgZm9yIHRoZSBzeXN0ZW0uXHJcbiAgICAgKiBUaGlzIGNvbnN0YW50IHN5bWJvbGl6ZSB0aGUgbm9kZVR5cGUuIFRoaXMgcHJvcGVydGllcyBhbHdheXMgcmV0dXJuIDMuXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IFRFWFRfTk9ERTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgSFRNTEVsZW1lbnQuYWNjZXNzS2V5IHByb3BlcnR5IHNldHMgdGhlIGtleXN0cm9rZSB3aGljaCBhIHVzZXIgY2FuIHByZXNzIHRvIGp1bXAgdG8gYSBnaXZlbiBlbGVtZW50LlxyXG4gICAgICog4pqgIE5vdCByZWFsbHkgdXNlZCwgbW9yZSBmZWF0dXJlcyBoZXJlIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9HbG9iYWxfYXR0cmlidXRlcy9hY2Nlc3NrZXlcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgYWNjZXNzS2V5OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYWNjZXNzS2V5TGFiZWwgcHJvcGVydHkgcmV0dXJucyBhIFN0cmluZyBjb250YWluaW5nIHRoZSBlbGVtZW50J3MgYnJvd3Nlci1hc3NpZ25lZCBhY2Nlc3Mga2V5IChpZiBhbnkpOyBvdGhlcndpc2UgaXQgcmV0dXJucyBhbiBlbXB0eSBzdHJpbmcuXHJcbiAgICAgKiDimqAgTm90IHJlYWxseSB1c2VkLCBtb3JlIGZlYXR1cmVzIGhlcmUgOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTEVsZW1lbnQvYWNjZXNzS2V5TGFiZWxcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgYWNjZXNzS2V5TGFiZWw6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOKaoCBFeHBlcmltZW50YWwuIEV4cGVjdCBiZWhhdmlvciB0byBjaGFuZ2UgaW4gdGhlIGZ1dHVyZS4gbW9yZSBmZWF0dXJlcyBoZXJlIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvYXNzaWduZWRTbG90XHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGFzc2lnbmVkU2xvdDogSFRNTFNsb3RFbGVtZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9vaydzIGxpa2UgYW4gb2JqZWN0IHdoaWNoIHJldHVybnMgdGhlIGF0dHJpYnV0ZXMgc2V0IG9uIGFuIG9iamVjdFxyXG4gICAgICogYGBgaHRtbFxyXG4gICAgICogPGEgaWQ9XCJsaW5rXCIgaHJlZj1cImhleS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjdXN0b21BdHRyaWJ1dGU9XCJoZWxsb1wiIHRpdGxlPVwicmVkaXJlY3QgeW91IHRvIGhleS5jb21cIj5IZXk8L2E+XHJcbiAgICAgKiBgYGBcclxuICAgICAqXHJcbiAgICAgKiBgYGB0eXBlc2NyaXB0XHJcbiAgICAgKiBsZXQgbGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlua1wiKTtcclxuICAgICAqIGNvbnNvbGUubG9nKGxpbmsuYXR0cmlidXRlcyk7IC8vIHJldHVybiBhbGwgYXR0cmlidXRlcyB7fVxyXG4gICAgICogYGBgXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGF0dHJpYnV0ZXM6IE5hbWVkTm9kZU1hcDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgYXV0b2NhcGl0YWxpemU6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgYXV0b2ZvY3VzOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBiYXNlVVJJOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGNoaWxkRWxlbWVudENvdW50OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGNoaWxkTm9kZXM6IE5vZGVMaXN0T2Y8Q2hpbGROb2RlPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgY2hpbGRyZW46IEhUTUxDb2xsZWN0aW9uO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBjbGFzc0xpc3Q6IERPTVRva2VuTGlzdDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgY2xhc3NOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGNsaWVudEhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBjbGllbnRMZWZ0OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGNsaWVudFRvcDogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBjbGllbnRXaWR0aDogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBjb250ZW50RWRpdGFibGU6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgZGF0YXNldDogRE9NU3RyaW5nTWFwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBkaXI6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgZHJhZ2dhYmxlOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBlbnRlcktleUhpbnQ6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgZmlyc3RDaGlsZDogQ2hpbGROb2RlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBmaXJzdEVsZW1lbnRDaGlsZDogRWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgaGlkZGVuOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBpZDogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBpbm5lckhUTUw6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgaW5uZXJUZXh0OiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgaW5wdXRNb2RlOiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgaXNDb25uZWN0ZWQ6IGJvb2xlYW5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgaXNDb250ZW50RWRpdGFibGU6IGJvb2xlYW5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgbGFuZzogc3RyaW5nXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGxhc3RDaGlsZDogQ2hpbGROb2RlXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGxhc3RFbGVtZW50Q2hpbGQ6IEVsZW1lbnRcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgbG9jYWxOYW1lOiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgbmFtZXNwYWNlVVJJOiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgbmV4dEVsZW1lbnRTaWJsaW5nOiBFbGVtZW50XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IG5leHRTaWJsaW5nOiBDaGlsZE5vZGVcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgbm9kZU5hbWU6IHN0cmluZ1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBub2RlVHlwZTogbnVtYmVyXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG5vZGVWYWx1ZTogc3RyaW5nXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IG5vbmNlOiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgb2Zmc2V0SGVpZ2h0OiBudW1iZXJcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgb2Zmc2V0TGVmdDogbnVtYmVyXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IG9mZnNldFBhcmVudDogRWxlbWVudFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBvZmZzZXRUb3A6IG51bWJlclxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBvZmZzZXRXaWR0aDogbnVtYmVyXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uYWJvcnQ6IChldjogVUlFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uYW5pbWF0aW9uY2FuY2VsOiAoZXY6IEFuaW1hdGlvbkV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25hbmltYXRpb25lbmQ6IChldjogQW5pbWF0aW9uRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmFuaW1hdGlvbml0ZXJhdGlvbjogKGV2OiBBbmltYXRpb25FdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uYW5pbWF0aW9uc3RhcnQ6IChldjogQW5pbWF0aW9uRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmF1eGNsaWNrOiAoZXY6IE1vdXNlRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmJsdXI6IChldjogRm9jdXNFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uY2FuY2VsOiAoZXY6IEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25jYW5wbGF5OiAoZXY6IEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25jYW5wbGF5dGhyb3VnaDogKGV2OiBFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uY2hhbmdlOiAoZXY6IEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25jbGljazogKGV2OiBNb3VzZUV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25jbG9zZTogKGV2OiBFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uY29udGV4dG1lbnU6IChldjogTW91c2VFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uY29weTogKGV2OiBDbGlwYm9hcmRFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uY3VlY2hhbmdlOiAoZXY6IEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25jdXQ6IChldjogQ2xpcGJvYXJkRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmRibGNsaWNrOiAoZXY6IE1vdXNlRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmRyYWc6IChldjogRHJhZ0V2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25kcmFnZW5kOiAoZXY6IERyYWdFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uZHJhZ2VudGVyOiAoZXY6IERyYWdFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uZHJhZ2V4aXQ6IChldjogRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmRyYWdsZWF2ZTogKGV2OiBEcmFnRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmRyYWdvdmVyOiAoZXY6IERyYWdFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uZHJhZ3N0YXJ0OiAoZXY6IERyYWdFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uZHJvcDogKGV2OiBEcmFnRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmR1cmF0aW9uY2hhbmdlOiAoZXY6IEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25lbXB0aWVkOiAoZXY6IEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25lbmRlZDogKGV2OiBFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uZXJyb3I6IE9uRXJyb3JFdmVudEhhbmRsZXJOb25OdWxsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uZm9jdXM6IChldjogRm9jdXNFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uZnVsbHNjcmVlbmNoYW5nZTogKGV2OiBFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uZnVsbHNjcmVlbmVycm9yOiAoZXY6IEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25nb3Rwb2ludGVyY2FwdHVyZTogKGV2OiBQb2ludGVyRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmlucHV0OiAoZXY6IEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25pbnZhbGlkOiAoZXY6IEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25rZXlkb3duOiAoZXY6IEtleWJvYXJkRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmtleXByZXNzOiAoZXY6IEtleWJvYXJkRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmtleXVwOiAoZXY6IEtleWJvYXJkRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmxvYWQ6IChldjogRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmxvYWRlZGRhdGE6IChldjogRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmxvYWRlZG1ldGFkYXRhOiAoZXY6IEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25sb2Fkc3RhcnQ6IChldjogRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmxvc3Rwb2ludGVyY2FwdHVyZTogKGV2OiBQb2ludGVyRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbm1vdXNlZG93bjogKGV2OiBNb3VzZUV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25tb3VzZWVudGVyOiAoZXY6IE1vdXNlRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbm1vdXNlbGVhdmU6IChldjogTW91c2VFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9ubW91c2Vtb3ZlOiAoZXY6IE1vdXNlRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbm1vdXNlb3V0OiAoZXY6IE1vdXNlRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbm1vdXNlb3ZlcjogKGV2OiBNb3VzZUV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25tb3VzZXVwOiAoZXY6IE1vdXNlRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbnBhc3RlOiAoZXY6IENsaXBib2FyZEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25wYXVzZTogKGV2OiBFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9ucGxheTogKGV2OiBFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9ucGxheWluZzogKGV2OiBFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9ucG9pbnRlcmNhbmNlbDogKGV2OiBQb2ludGVyRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbnBvaW50ZXJkb3duOiAoZXY6IFBvaW50ZXJFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9ucG9pbnRlcmVudGVyOiAoZXY6IFBvaW50ZXJFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9ucG9pbnRlcmxlYXZlOiAoZXY6IFBvaW50ZXJFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9ucG9pbnRlcm1vdmU6IChldjogUG9pbnRlckV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25wb2ludGVyb3V0OiAoZXY6IFBvaW50ZXJFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9ucG9pbnRlcm92ZXI6IChldjogUG9pbnRlckV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25wb2ludGVydXA6IChldjogUG9pbnRlckV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25wcm9ncmVzczogKGV2OiBQcm9ncmVzc0V2ZW50PEV2ZW50VGFyZ2V0PikgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9ucmF0ZWNoYW5nZTogKGV2OiBFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9ucmVzZXQ6IChldjogRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbnJlc2l6ZTogKGV2OiBVSUV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25zY3JvbGw6IChldjogRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbnNlY3VyaXR5cG9saWN5dmlvbGF0aW9uOiAoZXY6IFNlY3VyaXR5UG9saWN5VmlvbGF0aW9uRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbnNlZWtlZDogKGV2OiBFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uc2Vla2luZzogKGV2OiBFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uc2VsZWN0OiAoZXY6IEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25zZWxlY3Rpb25jaGFuZ2U6IChldjogRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbnNlbGVjdHN0YXJ0OiAoZXY6IEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25zdGFsbGVkOiAoZXY6IEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25zdWJtaXQ6IChldjogRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbnN1c3BlbmQ6IChldjogRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbnRpbWV1cGRhdGU6IChldjogRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbnRvZ2dsZTogKGV2OiBFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9udG91Y2hjYW5jZWw6IChldjogVG91Y2hFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9udG91Y2hlbmQ6IChldjogVG91Y2hFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9udG91Y2htb3ZlOiAoZXY6IFRvdWNoRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbnRvdWNoc3RhcnQ6IChldjogVG91Y2hFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9udHJhbnNpdGlvbmNhbmNlbDogKGV2OiBUcmFuc2l0aW9uRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbnRyYW5zaXRpb25lbmQ6IChldjogVHJhbnNpdGlvbkV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb250cmFuc2l0aW9ucnVuOiAoZXY6IFRyYW5zaXRpb25FdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9udHJhbnNpdGlvbnN0YXJ0OiAoZXY6IFRyYW5zaXRpb25FdmVudCkgPT4gYW55O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbnZvbHVtZWNoYW5nZTogKGV2OiBFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9ud2FpdGluZzogKGV2OiBFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9ud2hlZWw6IChldjogV2hlZWxFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG91dGVySFRNTDogc3RyaW5nXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IG93bmVyRG9jdW1lbnQ6IERvY3VtZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBwYXJlbnROb2RlOiBOb2RlICYgUGFyZW50Tm9kZVxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IHByZWZpeDogc3RyaW5nXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgcHJldmlvdXNFbGVtZW50U2libGluZzogRWxlbWVudFxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IHByZXZpb3VzU2libGluZzogQ2hpbGROb2RlXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IHNjcm9sbEhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBzY3JvbGxMZWZ0OiBudW1iZXJcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgc2Nyb2xsVG9wOiBudW1iZXJcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgc2Nyb2xsV2lkdGg6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgc2hhZG93Um9vdDogU2hhZG93Um9vdDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgc2xvdDogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBzcGVsbGNoZWNrOiBib29sZWFuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IHN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICB0YWJJbmRleDogbnVtYmVyXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IHRhZ05hbWU6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgdGV4dENvbnRlbnQ6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgdHJhbnNsYXRlOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmYXVsdCBjb21wb25lbnRzIHdoaWNoIGlzIGluaGVyaXRlZCBieSBhbGwgb2YgT0sgQ29tcG9uZW50c1xyXG4gICAgICovXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIHR5cGVcclxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxyXG4gICAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgICAqL1xyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcjxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcD4odHlwZTogSywgbGlzdGVuZXI6ICh0aGlzOiBIVE1MRW1iZWRFbGVtZW50LCBldjogSFRNTEVsZW1lbnRFdmVudE1hcFtLXSkgPT4gYW55LCBvcHRpb25zPzogYm9vbGVhbiB8IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zKTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAgICovXHJcbiAgICBhZGRFdmVudExpc3RlbmVyKHR5cGU6IHN0cmluZywgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsIG9wdGlvbnM/OiBib29sZWFuIHwgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpOiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBub2Rlc1xyXG4gICAgICovXHJcbiAgICBhZnRlciguLi5ub2RlczogKHN0cmluZyB8IE5vZGUpW10pOiB2b2lkXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIGtleWZyYW1lc1xyXG4gICAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgICAqL1xyXG4gICAgYW5pbWF0ZShrZXlmcmFtZXM6IEtleWZyYW1lW10gfCBQcm9wZXJ0eUluZGV4ZWRLZXlmcmFtZXMsIG9wdGlvbnM/OiBudW1iZXIgfCBLZXlmcmFtZUFuaW1hdGlvbk9wdGlvbnMpOiBBbmltYXRpb25cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gbm9kZXNcclxuICAgICAqL1xyXG4gICAgYXBwZW5kKC4uLm5vZGVzOiAoc3RyaW5nIHwgTm9kZSlbXSk6IHZvaWRcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gbmV3Q2hpbGRcclxuICAgICAqL1xyXG4gICAgYXBwZW5kQ2hpbGQ8VD4obmV3Q2hpbGQ6IFQpOiBUXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIGluaXRcclxuICAgICAqL1xyXG4gICAgYXR0YWNoU2hhZG93KGluaXQ6IFNoYWRvd1Jvb3RJbml0KTogU2hhZG93Um9vdFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBub2Rlc1xyXG4gICAgICovXHJcbiAgICBiZWZvcmUoLi4ubm9kZXM6IChzdHJpbmcgfCBOb2RlKVtdKTogdm9pZFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgYmx1cigpOiB2b2lkXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBjbGljaygpOiB2b2lkXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIGRlZXBcclxuICAgICAqL1xyXG4gICAgY2xvbmVOb2RlKGRlZXA/OiBib29sZWFuKTogTm9kZVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBzZWxlY3RvclxyXG4gICAgICovXHJcbiAgICBjbG9zZXN0PEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KHNlbGVjdG9yOiBLKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdIHwgbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3JcclxuICAgICAqL1xyXG4gICAgY2xvc2VzdDxLIGV4dGVuZHMga2V5b2YgU1ZHRWxlbWVudFRhZ05hbWVNYXA+KHNlbGVjdG9yOiBLKTogU1ZHRWxlbWVudFRhZ05hbWVNYXBbS10gfCBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBzZWxlY3RvclxyXG4gICAgICovXHJcbiAgICBjbG9zZXN0PEUgZXh0ZW5kcyBFbGVtZW50ID0gRWxlbWVudD4oc2VsZWN0b3I6IHN0cmluZyk6IEUgfCBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBvdGhlclxyXG4gICAgICovXHJcbiAgICBjb21wYXJlRG9jdW1lbnRQb3NpdGlvbihvdGhlcjogTm9kZSk6IG51bWJlclxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBvdGhlclxyXG4gICAgICovXHJcbiAgICBjb250YWlucyhvdGhlcjogTm9kZSk6IGJvb2xlYW5cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqL1xyXG4gICAgZGlzcGF0Y2hFdmVudChldmVudDogRXZlbnQpOiBib29sZWFuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgICAqL1xyXG4gICAgZm9jdXMob3B0aW9ucz86IEZvY3VzT3B0aW9ucyk6IHZvaWRcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIGdldEFuaW1hdGlvbnMoKTogQW5pbWF0aW9uW11cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gcXVhbGlmaWVkTmFtZVxyXG4gICAgICovXHJcbiAgICBnZXRBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIG5hbWVzcGFjZVxyXG4gICAgICogQHBhcmFtIGxvY2FsTmFtZVxyXG4gICAgICovXHJcbiAgICBnZXRBdHRyaWJ1dGVOUyhuYW1lc3BhY2U6IHN0cmluZywgbG9jYWxOYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIGdldEF0dHJpYnV0ZU5hbWVzKCk6IHN0cmluZ1tdXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIHF1YWxpZmllZE5hbWVcclxuICAgICAqL1xyXG4gICAgZ2V0QXR0cmlidXRlTm9kZShxdWFsaWZpZWROYW1lOiBzdHJpbmcpOiBBdHRyXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIG5hbWVzcGFjZVxyXG4gICAgICogQHBhcmFtIGxvY2FsTmFtZVxyXG4gICAgICovXHJcbiAgICBnZXRBdHRyaWJ1dGVOb2RlTlMobmFtZXNwYWNlOiBzdHJpbmcsIGxvY2FsTmFtZTogc3RyaW5nKTogQXR0clxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6IERPTVJlY3RcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIGdldENsaWVudFJlY3RzKCk6IERPTVJlY3RMaXN0XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIGNsYXNzTmFtZXNcclxuICAgICAqL1xyXG4gICAgZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWVzOiBzdHJpbmcpOiBIVE1MQ29sbGVjdGlvbk9mPEVsZW1lbnQ+XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIGNsYXNzTmFtZXNcclxuICAgICAqL1xyXG4gICAgZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWVzOiBzdHJpbmcpOiBIVE1MQ29sbGVjdGlvbk9mPEVsZW1lbnQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBxdWFsaWZpZWROYW1lXHJcbiAgICAgKi9cclxuICAgIGdldEVsZW1lbnRzQnlUYWdOYW1lPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KHF1YWxpZmllZE5hbWU6IEspOiBIVE1MQ29sbGVjdGlvbk9mPEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIHF1YWxpZmllZE5hbWVcclxuICAgICAqL1xyXG4gICAgZ2V0RWxlbWVudHNCeVRhZ05hbWU8SyBleHRlbmRzIGtleW9mIFNWR0VsZW1lbnRUYWdOYW1lTWFwPihxdWFsaWZpZWROYW1lOiBLKTogSFRNTENvbGxlY3Rpb25PZjxTVkdFbGVtZW50VGFnTmFtZU1hcFtLXT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIHF1YWxpZmllZE5hbWVcclxuICAgICAqL1xyXG4gICAgZ2V0RWxlbWVudHNCeVRhZ05hbWUocXVhbGlmaWVkTmFtZTogc3RyaW5nKTogSFRNTENvbGxlY3Rpb25PZjxFbGVtZW50PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gbmFtZXNwYWNlVVJJXHJcbiAgICAgKiBAcGFyYW0gbG9jYWxOYW1lXHJcbiAgICAgKi9cclxuICAgIGdldEVsZW1lbnRzQnlUYWdOYW1lTlMobmFtZXNwYWNlVVJJOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIiwgbG9jYWxOYW1lOiBzdHJpbmcpOiBIVE1MQ29sbGVjdGlvbk9mPEhUTUxFbGVtZW50PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gbmFtZXNwYWNlVVJJXHJcbiAgICAgKiBAcGFyYW0gbG9jYWxOYW1lXHJcbiAgICAgKi9cclxuICAgIGdldEVsZW1lbnRzQnlUYWdOYW1lTlMobmFtZXNwYWNlVVJJOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIGxvY2FsTmFtZTogc3RyaW5nKTogSFRNTENvbGxlY3Rpb25PZjxTVkdFbGVtZW50PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gbmFtZXNwYWNlVVJJXHJcbiAgICAgKiBAcGFyYW0gbG9jYWxOYW1lXHJcbiAgICAgKi9cclxuICAgIGdldEVsZW1lbnRzQnlUYWdOYW1lTlMobmFtZXNwYWNlVVJJOiBzdHJpbmcsIGxvY2FsTmFtZTogc3RyaW5nKTogSFRNTENvbGxlY3Rpb25PZjxFbGVtZW50PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAgICovXHJcbiAgICBnZXRSb290Tm9kZShvcHRpb25zPzogR2V0Um9vdE5vZGVPcHRpb25zKTogTm9kZVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBxdWFsaWZpZWROYW1lXHJcbiAgICAgKi9cclxuICAgIGhhc0F0dHJpYnV0ZShxdWFsaWZpZWROYW1lOiBzdHJpbmcpOiBib29sZWFuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIG5hbWVzcGFjZVxyXG4gICAgICogQHBhcmFtIGxvY2FsTmFtZVxyXG4gICAgICovXHJcbiAgICBoYXNBdHRyaWJ1dGVOUyhuYW1lc3BhY2U6IHN0cmluZywgbG9jYWxOYW1lOiBzdHJpbmcpOiBib29sZWFuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBoYXNBdHRyaWJ1dGVzKCk6IGJvb2xlYW5cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIGhhc0NoaWxkTm9kZXMoKTogYm9vbGVhblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBwb2ludGVySWRcclxuICAgICAqL1xyXG4gICAgaGFzUG9pbnRlckNhcHR1cmUocG9pbnRlcklkOiBudW1iZXIpOiBib29sZWFuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIHBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gaW5zZXJ0ZWRFbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGluc2VydEFkamFjZW50RWxlbWVudChwb3NpdGlvbjogSW5zZXJ0UG9zaXRpb24sIGluc2VydGVkRWxlbWVudDogRWxlbWVudCk6IEVsZW1lbnRcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gd2hlcmVcclxuICAgICAqIEBwYXJhbSBodG1sXHJcbiAgICAgKi9cclxuICAgIGluc2VydEFkamFjZW50SFRNTCh3aGVyZTogSW5zZXJ0UG9zaXRpb24sIGh0bWw6IHN0cmluZyk6IHZvaWRcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gd2hlcmVcclxuICAgICAqIEBwYXJhbSB0ZXh0XHJcbiAgICAgKi9cclxuICAgIGluc2VydEFkamFjZW50VGV4dCh3aGVyZTogSW5zZXJ0UG9zaXRpb24sIHRleHQ6IHN0cmluZyk6IHZvaWRcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gbmV3Q2hpbGRcclxuICAgICAqIEBwYXJhbSByZWZDaGlsZFxyXG4gICAgICovXHJcbiAgICBpbnNlcnRCZWZvcmU8VD4obmV3Q2hpbGQ6IFQsIHJlZkNoaWxkOiBOb2RlKTogVFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBuYW1lc3BhY2VcclxuICAgICAqL1xyXG4gICAgaXNEZWZhdWx0TmFtZXNwYWNlKG5hbWVzcGFjZTogc3RyaW5nKTogYm9vbGVhblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBvdGhlck5vZGVcclxuICAgICAqL1xyXG4gICAgaXNFcXVhbE5vZGUob3RoZXJOb2RlOiBOb2RlKTogYm9vbGVhblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBvdGhlck5vZGVcclxuICAgICAqL1xyXG4gICAgaXNTYW1lTm9kZShvdGhlck5vZGU6IE5vZGUpOiBib29sZWFuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIHByZWZpeFxyXG4gICAgICovXHJcbiAgICBsb29rdXBOYW1lc3BhY2VVUkkocHJlZml4OiBzdHJpbmcpOiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gbmFtZXNwYWNlXHJcbiAgICAgKi9cclxuICAgIGxvb2t1cFByZWZpeChuYW1lc3BhY2U6IHN0cmluZyk6IHN0cmluZ1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBzZWxlY3RvcnNcclxuICAgICAqL1xyXG4gICAgbWF0Y2hlcyhzZWxlY3RvcnM6IHN0cmluZyk6IGJvb2xlYW5cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG1zR2V0UmVnaW9uQ29udGVudCgpOiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG5vcm1hbGl6ZSgpOiB2b2lkXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIG5vZGVzXHJcbiAgICAgKi9cclxuICAgIHByZXBlbmQoLi4ubm9kZXM6IChzdHJpbmcgfCBOb2RlKVtdKTogdm9pZFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBzZWxlY3RvcnNcclxuICAgICAqL1xyXG4gICAgcXVlcnlTZWxlY3RvcjxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPihzZWxlY3RvcnM6IEspOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbS10gfCBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBzZWxlY3RvcnNcclxuICAgICAqL1xyXG4gICAgcXVlcnlTZWxlY3RvcjxLIGV4dGVuZHMga2V5b2YgU1ZHRWxlbWVudFRhZ05hbWVNYXA+KHNlbGVjdG9yczogSyk6IFNWR0VsZW1lbnRUYWdOYW1lTWFwW0tdIHwgbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3JzXHJcbiAgICAgKi9cclxuICAgIHF1ZXJ5U2VsZWN0b3I8RSBleHRlbmRzIEVsZW1lbnQgPSBFbGVtZW50PihzZWxlY3RvcnM6IHN0cmluZyk6IEUgfCBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBzZWxlY3RvcnNcclxuICAgICAqL1xyXG4gICAgcXVlcnlTZWxlY3RvckFsbDxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPihzZWxlY3RvcnM6IEspOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIHNlbGVjdG9yc1xyXG4gICAgICovXHJcbiAgICBxdWVyeVNlbGVjdG9yQWxsPEsgZXh0ZW5kcyBrZXlvZiBTVkdFbGVtZW50VGFnTmFtZU1hcD4oc2VsZWN0b3JzOiBLKTogTm9kZUxpc3RPZjxTVkdFbGVtZW50VGFnTmFtZU1hcFtLXT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIHNlbGVjdG9yc1xyXG4gICAgICovXHJcbiAgICBxdWVyeVNlbGVjdG9yQWxsPEUgZXh0ZW5kcyBFbGVtZW50ID0gRWxlbWVudD4oc2VsZWN0b3JzOiBzdHJpbmcpOiBOb2RlTGlzdE9mPEU+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBwb2ludGVySWRcclxuICAgICAqL1xyXG4gICAgcmVsZWFzZVBvaW50ZXJDYXB0dXJlKHBvaW50ZXJJZDogbnVtYmVyKTogdm9pZFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVtb3ZlKCk6IHZvaWRcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gcXVhbGlmaWVkTmFtZVxyXG4gICAgICovXHJcbiAgICByZW1vdmVBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZTogc3RyaW5nKTogdm9pZFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBuYW1lc3BhY2VcclxuICAgICAqIEBwYXJhbSBsb2NhbE5hbWVcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlQXR0cmlidXRlTlMobmFtZXNwYWNlOiBzdHJpbmcsIGxvY2FsTmFtZTogc3RyaW5nKTogdm9pZFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBhdHRyXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZUF0dHJpYnV0ZU5vZGUoYXR0cjogQXR0cik6IEF0dHJcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gb2xkQ2hpbGRcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlQ2hpbGQ8VD4ob2xkQ2hpbGQ6IFQpOiBUXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIHR5cGVcclxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxyXG4gICAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjxLIGV4dGVuZHMga2V5b2YgUGF5bWVudFJlcXVlc3RFdmVudE1hcD4odHlwZTogSywgbGlzdGVuZXI6ICh0aGlzOiBQYXltZW50UmVxdWVzdCwgZXY6IFBheW1lbnRSZXF1ZXN0RXZlbnRNYXBbS10pID0+IGFueSwgb3B0aW9ucz86IGJvb2xlYW4gfCBFdmVudExpc3RlbmVyT3B0aW9ucyk6IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIHR5cGVcclxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxyXG4gICAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlOiBzdHJpbmcsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LCBvcHRpb25zPzogYm9vbGVhbiB8IEV2ZW50TGlzdGVuZXJPcHRpb25zKTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gbmV3Q2hpbGRcclxuICAgICAqIEBwYXJhbSBvbGRDaGlsZFxyXG4gICAgICovXHJcbiAgICByZXBsYWNlQ2hpbGQ8VD4obmV3Q2hpbGQ6IE5vZGUsIG9sZENoaWxkOiBUKTogVFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBub2Rlc1xyXG4gICAgICovXHJcbiAgICByZXBsYWNlV2l0aCguLi5ub2RlczogKHN0cmluZyB8IE5vZGUpW10pOiB2b2lkXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgICAqL1xyXG4gICAgcmVxdWVzdEZ1bGxzY3JlZW4ob3B0aW9ucz86IEZ1bGxzY3JlZW5PcHRpb25zKTogUHJvbWlzZTx2b2lkPlxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVxdWVzdFBvaW50ZXJMb2NrKCk6IHZvaWRcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAgICovXHJcbiAgICBzY3JvbGwob3B0aW9ucz86IFNjcm9sbFRvT3B0aW9ucyk6IHZvaWRcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0geFxyXG4gICAgICogQHBhcmFtIHlcclxuICAgICAqL1xyXG4gICAgc2Nyb2xsKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICAgKi9cclxuICAgIHNjcm9sbEJ5KG9wdGlvbnM/OiBTY3JvbGxUb09wdGlvbnMpOiB2b2lkXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIHhcclxuICAgICAqIEBwYXJhbSB5XHJcbiAgICAgKi9cclxuICAgIHNjcm9sbEJ5KHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBhcmdcclxuICAgICAqL1xyXG4gICAgc2Nyb2xsSW50b1ZpZXcoYXJnPzogYm9vbGVhbiB8IFNjcm9sbEludG9WaWV3T3B0aW9ucyk6IHZvaWRcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAgICovXHJcbiAgICBzY3JvbGxUbyhvcHRpb25zPzogU2Nyb2xsVG9PcHRpb25zKTogdm9pZFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSB4XHJcbiAgICAgKiBAcGFyYW0geVxyXG4gICAgICovXHJcbiAgICBzY3JvbGxUbyh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWRcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gcXVhbGlmaWVkTmFtZVxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHNldEF0dHJpYnV0ZShxdWFsaWZpZWROYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIGF0dHJcclxuICAgICAqL1xyXG4gICAgc2V0QXR0cmlidXRlTm9kZShhdHRyOiBBdHRyKTogQXR0clxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIGF0dHJcclxuICAgICAqL1xyXG4gICAgc2V0QXR0cmlidXRlTm9kZU5TKGF0dHI6IEF0dHIpOiBBdHRyXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBuYW1lc3BhY2VcclxuICAgICAqIEBwYXJhbSBxdWFsaWZpZWROYW1lXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqL1xyXG4gICAgc2V0QXR0cmlidXRlTlMobmFtZXNwYWNlOiBzdHJpbmcsIHF1YWxpZmllZE5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWRcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gcG9pbnRlcklkXHJcbiAgICAgKi9cclxuICAgIHNldFBvaW50ZXJDYXB0dXJlKHBvaW50ZXJJZDogbnVtYmVyKTogdm9pZFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBxdWFsaWZpZWROYW1lXHJcbiAgICAgKiBAcGFyYW0gZm9yY2VcclxuICAgICAqL1xyXG4gICAgdG9nZ2xlQXR0cmlidXRlKHF1YWxpZmllZE5hbWU6IHN0cmluZywgZm9yY2U/OiBib29sZWFuKTogYm9vbGVhblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBzZWxlY3RvcnNcclxuICAgICAqL1xyXG4gICAgd2Via2l0TWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yczogc3RyaW5nKTogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQge09rV2lkZ2V0LCBFdmVudHN9IiwiaW1wb3J0IHtPa0ltYWdlLCBPcHRpb25zIGFzIE9rSW1hZ2VPcHRpb25zfSBmcm9tICcuL09rSW1hZ2UnXHJcbmltcG9ydCB7RXZlbnRzIGFzIE9rVHJhbnNsYXRvckV2ZW50cywgT2tUcmFuc2xhdG9yfSBmcm9tIFwiLi9Pa1RyYW5zbGF0b3JcIjtcclxuaW1wb3J0IHtPa0xhbmd1YWdlLCBPcHRpb25zIGFzIE9rTGFuZ3VhZ2VPcHRpb25zfSBmcm9tIFwiLi9Pa0xhbmd1YWdlXCI7XHJcbmltcG9ydCB7c2V0QXBwLCBjdXJyQXBwfSBmcm9tIFwiLi9wcml2YXRlL2dsb2JhbFwiO1xyXG5pbXBvcnQge09rVXJsfSBmcm9tIFwiLi9Pa1VybFwiO1xyXG5pbXBvcnQge09rRXZlbnRzRW1pdHRlcn0gZnJvbSBcIi4vT2tFdmVudHNFbWl0dGVyXCI7XHJcbmltcG9ydCB7T2tXYWl0fSBmcm9tIFwiLi4vZnJhbWV3b3JrL09rV2FpdFwiXHJcbmltcG9ydCB7T2tVbml0fSBmcm9tIFwiLi9Pa1VuaXRcIjtcclxuaW1wb3J0IHtPa1NpemUsIE9wdGlvbnMgYXMgT2tTaXplT3B0aW9uc30gZnJvbSBcIi4vT2tTaXplXCI7XHJcbmltcG9ydCB7T2tBcnJheX0gZnJvbSBcIi4uL2ZyYW1ld29yay9Pa0FycmF5XCI7XHJcbmltcG9ydCB7T2tXaWRnZXR9IGZyb20gXCIuL0NvbXBvbmVudHMvb2std2lkZ2V0XCI7XHJcbmltcG9ydCB7T2tUcn0gZnJvbSBcIi4vQ29tcG9uZW50cy9vay10clwiO1xyXG5pbXBvcnQge09rRGlhbG9nfSBmcm9tIFwiLi9Db21wb25lbnRzL29rLWRpYWxvZ1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlc2hlZXQuc2Nzc1wiXHJcblxyXG53aW5kb3cuQXJyYXkucHJvdG90eXBlLnRvT2tBcnJheSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIG5ldyBPa0FycmF5KC4uLnRoaXMpXHJcbn1cclxuXHJcbmludGVyZmFjZSBPcHRpb25zIHtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgaWNvbj86IE9rSW1hZ2U7XHJcbiAgICB1cmxUcmFuc2xhdG9yPzogT2tVcmxcclxufVxyXG5cclxuZW51bSBFdmVudHMge1xyXG4gICAgcmVhZHk9IFwicmVhZHlcIlxyXG59XHJcblxyXG5jbGFzcyBPayBleHRlbmRzIE9rRXZlbnRzRW1pdHRlciB7XHJcbiAgICBwcml2YXRlIG1faWNvbjogT2tJbWFnZSA9IG5ldyBPa0ltYWdlKHt1cmw6IG5ldyBPa1VybChcIlwiKX0pO1xyXG4gICAgcHJpdmF0ZSBtX3RyYW5zbGF0b3I6IE9rVHJhbnNsYXRvciA9IG5ldyBPa1RyYW5zbGF0b3IoKTtcclxuICAgIHByaXZhdGUgbV9sYW5ndWFnZTogT2tMYW5ndWFnZSA9IG5ldyBPa0xhbmd1YWdlKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucz86IE9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgc2V0QXBwKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0Q29uZmlndXJhdGlvbihvcHRpb25zKS50aGVuKCgpID0+IHt9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0KClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdCgpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoRXZlbnRzLnJlYWR5LCB7fSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzZXRDb25maWd1cmF0aW9uKG9wdGlvbnM6IE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZihvcHRpb25zLnVybFRyYW5zbGF0b3IpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5tX3RyYW5zbGF0b3Iuc2V0VXJsKG9wdGlvbnMudXJsVHJhbnNsYXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG9wdGlvbnMudGl0bGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRUaXRsZShvcHRpb25zLnRpdGxlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdGl0bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQudGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpY29uKCk6IE9rSW1hZ2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1faWNvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SWNvbihpY29uOiBPa0ltYWdlKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGljb24uZ2V0SW1hZ2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tX2ljb24gPSBpY29uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cmFuc2xhdG9yKCk6IE9rVHJhbnNsYXRvciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV90cmFuc2xhdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsYW5ndWFnZSgpOiBPa0xhbmd1YWdlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2xhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJld3JpdGVcclxuXHJcbiAgICBwdWJsaWMgb24oZXZlbnQ6IEV2ZW50cyB8IHN0cmluZywgbGlzdGVuZXI6IChhdHRyPzphbnkpID0+IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmKGV2ZW50IGluIEV2ZW50cykge1xyXG4gICAgICAgICAgICBzdXBlci5vbihldmVudCwgbGlzdGVuZXIpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZXZlbnQgc2VuZCBkb2Vzbid0IGV4aXN0IG9uIHRoaXMgb2JqZWN0IVwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyRXZlbnRzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub24oRXZlbnRzLnJlYWR5LCAoKSA9PiB7fSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtPaywgT3B0aW9ucyBhcyBPa09wdGlvbnMsIE9rSW1hZ2UsIE9rSW1hZ2VPcHRpb25zLCBPa1VybCwgY3VyckFwcCwgT2tFdmVudHNFbWl0dGVyLCBPa1dhaXQsIE9rVW5pdCwgT2tTaXplLCBPa1NpemVPcHRpb25zLCBPa0FycmF5LCBPa1RyYW5zbGF0b3JFdmVudHMsIEV2ZW50cyBhcyBPa0V2ZW50c307IiwiaW1wb3J0IHtPa30gZnJvbSBcIi4vT2tcIjtcclxuXHJcbmNsYXNzIE9rQXJyYXkgZXh0ZW5kcyBBcnJheTxhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgc3VwZXIoYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluQXJyYXkoaXRlbTogYW55KTpib29sZWFuIHtcclxuICAgICAgICBpZih0aGlzLmluZGV4T2YoaXRlbSkgPiAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbkFycmF5LnByb3RvdHlwZS50b09rQXJyYXkgPSBmdW5jdGlvbigpOiBPa0FycmF5IHtcclxuICAgIHJldHVybiBuZXcgT2tBcnJheSguLi50aGlzKTtcclxufVxyXG5cclxuZXhwb3J0IHtPa0FycmF5fSIsIi8qXHJcbiogQXV0aG9yIDogS0lMTElBTiBLRVJMQVVcclxuKiBUaXRsZSA6IE9rUmVxdWVzdFxyXG4qIERlc2NyaXB0aW9uIDogT2tSZXF1ZXN0IGlzIGEgZnVuY3Rpb24gdG8gbWFrZSBodHRwIHJlcXVlc3RcclxuKi9cclxuXHJcblxyXG5jbGFzcyBPa0V2ZW50c0VtaXR0ZXIge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBtX2V2ZW50czoge1tpbmRleDogc3RyaW5nXTphbnl9ID0ge307IC8vIGNvbnRhaW5zIGFsbCBldmVudHNcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBjbGFzcyBjb250YWlucyBhbGwgeW91IG5lZWQgdG8gbWFkZSBldmVudCBlbWl0dGVyXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdGhpcyBtZXRob2QgcmVnaXN0ZXIgYW4gZXZlbnRcclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbihldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogKGFyZz86YW55KSA9PiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMubV9ldmVudHNbZXZlbnRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9ldmVudHNbZXZlbnRdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubV9ldmVudHNbZXZlbnRdLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdGhpcyBtZXRob2QgcmVtb3ZlIGFuIGV2ZW50IHJlZ2lzdGVyZWQgaWYgdGhpcyBldmVudCBkb2Vzbid0IGV4aXN0IHRoYXQgdGhyb3cgYW4gZXJyb3JcclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICogQHBhcmFtIGxpc3RlbmVyVG9SZW1vdmVcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZUxpc3RlbmVyKGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyVG9SZW1vdmU6IChhcmc/OmFueSkgPT4gYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1fZXZlbnRzW2V2ZW50XSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IHJlbW92ZSBhIGxpc3RlbmVyLiBFdmVudCBcIiR7ZXZlbnR9XCIgZG9lc24ndCBleGl0cy5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZpbHRlckxpc3RlbmVycyA9IChsaXN0ZW5lcjogKGFyZz86YW55KSA9PiBhbnkpID0+IGxpc3RlbmVyICE9PSBsaXN0ZW5lclRvUmVtb3ZlO1xyXG5cclxuICAgICAgICB0aGlzLm1fZXZlbnRzW2V2ZW50XSA9IHRoaXMubV9ldmVudHNbZXZlbnRdLmZpbHRlcihmaWx0ZXJMaXN0ZW5lcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBlbWl0IGFuIGV2ZW50IGlmIHRoaXMgZXZlbnQgZG9lc24ndCBleGlzdCB0aGF0IHRocm93IGFuIGVycm9yXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqIEBwYXJhbSBkYXRhXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBlbWl0KGV2ZW50OiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgICAgIGlmICghdGhpcy5tX2V2ZW50c1tldmVudF0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBlbWl0IGFuIGV2ZW50LiBFdmVudCBcIiR7ZXZlbnR9XCIgZG9lc24ndCBleGl0cy5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZpcmVDYWxsYmFja3MgPSAoY2FsbGJhY2s6IChhcmc/OmFueSkgPT4gYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubV9ldmVudHNbZXZlbnRdLmZvckVhY2goZmlyZUNhbGxiYWNrcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7T2tFdmVudHNFbWl0dGVyfSIsImltcG9ydCB7T2tVcmx9IGZyb20gXCIuL09rVXJsXCI7XHJcblxyXG5pbnRlcmZhY2UgT3B0aW9ucyB7XHJcbiAgICB1cmw6IE9rVXJsXHJcbn1cclxuXHJcbmNsYXNzIE9rSW1hZ2Uge1xyXG4gICAgcHJpdmF0ZSBtX3VybDogT2tVcmw7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuc2V0VXJsKG9wdGlvbnMudXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXJsKCk6IE9rVXJsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3VybFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRVcmwodXJsOiBPa1VybCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubV91cmwgPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEltYWdlKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyBmdW5jdGlvbiAocmVzb2x2ZTogKGFyZzA6IHN0cmluZykgPT4gdm9pZCkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgKGF3YWl0IHRoaXMubV91cmwucmVxdWVzdCgpKS5ibG9iKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihmaWxlTG9hZGVkRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzcmNEYXRhID0gZmlsZUxvYWRlZEV2ZW50LnRhcmdldC5yZXN1bHQudG9TdHJpbmcoKTsgLy8gPC0tLSBkYXRhOiBiYXNlNjRcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoc3JjRGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGRhdGEpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7T2tJbWFnZSwgT3B0aW9uc30iLCJpbnRlcmZhY2UgT3B0aW9ucyB7XHJcbiAgICBsYW5ndWFnZT86IHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgT2tMYW5ndWFnZSB7XHJcbiAgICBwcml2YXRlIG1fbGFuZ3VhZ2U6IHN0cmluZyA9IG5hdmlnYXRvci5sYW5ndWFnZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zPzogT3B0aW9ucykge1xyXG4gICAgICAgIGlmKG9wdGlvbnM/Lmxhbmd1YWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9sYW5ndWFnZSA9IG9wdGlvbnMubGFuZ3VhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tX2xhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExhbmd1YWdlKHByZWZlcmVuY2VzPzogQXJyYXk8c3RyaW5nPnxzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmKHR5cGVvZiBwcmVmZXJlbmNlcyAhPSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIHByZWZlcmVuY2VzID0gW3ByZWZlcmVuY2VzXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHByZWZlcmVuY2UgPSB0aGlzLmdldExhbmd1YWdlUHJlZihwcmVmZXJlbmNlcyk7XHJcbiAgICAgICAgcmV0dXJuIHByZWZlcmVuY2Uuc2xpY2UoMCwgMikudG9VcHBlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldExhbmd1YWdlUHJlZihwcmVmZXJlbmNlczogQXJyYXk8c3RyaW5nPik6IHN0cmluZyB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcmVmZXJlbmNlIG9mIHByZWZlcmVuY2VzKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocHJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm5hdmlnYXRvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImludGVybmVcIjpcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLm1fbGFuZ3VhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9sYW5ndWFnZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiaHRtbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLmdldEF0dHJpYnV0ZShcImxhbmdcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLmdldEF0dHJpYnV0ZShcImxhbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtPa0xhbmd1YWdlLCBPcHRpb25zfSIsIi8qKlxyXG4gKiBUaGlzIGlzIGEgY29tcGxleCBmdW5jdGlvbiB3aGljaCBzaG91bGQgb25seSB1c2UgdG8gaGFzIG11bHRpcGxlIGV4dGVuZHMgYW5kIG5vdyB0aGUgc3VwZXIgcGFyYW1ldGVycyBvbmx5IGFjY2VwdCBNYXAuXHJcbiAqXHJcbiAqIGBgYHRzXHJcbiAqIGNsYXNzIE9iaiB7XHJcbiAqICAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nKSB7XHJcbiAqICAgICAgICAgY29uc29sZS5sb2codGl0bGUpXHJcbiAqICAgICB9XHJcbiAqIH1cclxuICogY2xhc3MgT2JqMiB7XHJcbiAqICAgICBjb25zdHJ1Y3RvcihvYmo6IHt0aXRsZTogc3RyaW5nfSkge1xyXG4gKiAgICAgICAgIGNvbnNvbGUubG9nKG9iai50aXRsZSlcclxuICogICAgIH1cclxuICogfVxyXG4gKiBjbGFzcyBPYmozIHtcclxuICogICAgIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcsIGFnZTogbnVtYmVyKSB7XHJcbiAqICAgICAgICAgY29uc29sZS5sb2codGl0bGUpXHJcbiAqICAgICAgICAgY29uc29sZS5sb2coYWdlKVxyXG4gKiAgICAgfVxyXG4gKiB9XHJcbiAqIGNsYXNzIE9iajQgZXh0ZW5kcyBPa011bHRpcGxlRXh0ZW5kcyhPYmosIE9iajIsIE9iajMpIHtcclxuICpcclxuICogICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICogICAgICAgICAgc3VwZXIobmV3IE1hcChbXHJcbiAqICAgICAgICAgICAgICBbXCJPYmpcIiwgW1wiU2FsdXRcIl1dLFxyXG4gKiAgICAgICAgICAgICAgW1wiT2JqMlwiLCBbe3RpdGxlOiBcIkhleSBNYW1hXCJ9XV0sXHJcbiAqICAgICAgICAgICAgICBbXCJPYmozXCIsIFtcIk1oaGhoXCIsIDE2XV1cclxuICogICAgICAgICAgXSkpO1xyXG4gKiAgICAgfVxyXG4gKiB9XHJcbiAqIGxldCBvYmogPSBuZXcgT2JqNCgpO1xyXG4gKiBgYGBcclxuICpcclxuICogQHBhcmFtIGJhc2VDbGFzc1xyXG4gKiBAcGFyYW0gbWl4aW5zXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIE9rTXVsdGlwbGVFeHRlbmRzKGJhc2VDbGFzczogYW55LCAuLi5taXhpbnM6IGFueVtdKTogYW55IHtcclxuICAgIGNsYXNzIGJhc2UgZXh0ZW5kcyBiYXNlQ2xhc3Mge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yIChhcmdzOiBNYXA8c3RyaW5nLCBhbnlbXT4pIHtcclxuICAgICAgICAgICAgbGV0IHByb3h5SGFuZGxlcjogUHJveHlIYW5kbGVyPE1hcDxzdHJpbmcsIGFueVtdPj4gPSB7XHJcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKG9iaiwgcHJvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE9uIG9idGllbnQgbGUgbm9tYnJlIGRlIHByb2R1aXRzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdW4gYWxpYXMgcG91ciBwcm9kdWN0cy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcsOpc3VsdGF0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHByb2R1aXQgb2Ygb2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9kdWl0WzBdID09PSBwcm9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByw6lzdWx0YXQgPSBwcm9kdWl0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocsOpc3VsdGF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByw6lzdWx0YXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGxldCBhcmdzVDoge1tpbmRleDpzdHJpbmddIDogYW55fSA9IG5ldyBQcm94eShhcmdzLCBwcm94eUhhbmRsZXIpO1xyXG4gICAgICAgICAgICBpZihhcmdzVFtiYXNlQ2xhc3MubmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3NUW2Jhc2VDbGFzcy5uYW1lXVsxXSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcihjb25zdCBtaXhpbiBvZiBtaXhpbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmKG1peGluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYXJnc1RbbWl4aW4ubmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29weVByb3BzKHRoaXMsIChuZXcgbWl4aW4oLi4uYXJnc1RbbWl4aW4ubmFtZV1bMV0pKSlcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29weVByb3BzKHRoaXMsIChuZXcgbWl4aW4pKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGNvcHlQcm9wcyA9ICh0YXJnZXQ6IGFueSwgc291cmNlOiBhbnkpID0+IHsgIC8vIHRoaXMgZnVuY3Rpb24gY29waWVzIGFsbCBwcm9wZXJ0aWVzIGFuZCBzeW1ib2xzLCBmaWx0ZXJpbmcgb3V0IHNvbWUgc3BlY2lhbCBvbmVzXHJcbiAgICAgICAgbGV0IHByb3BzOiBzdHJpbmdbXSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSk7XHJcbiAgICAgICAgZm9yKGNvbnN0IHByb3Agb2YgcHJvcHMpIHtcclxuICAgICAgICAgICAgaWYgKCFwcm9wLm1hdGNoKC9eKD86Y29uc3RydWN0b3J8cHJvdG90eXBlfGFyZ3VtZW50c3xjYWxsZXJ8bmFtZXxiaW5kfGNhbGx8YXBwbHl8dG9TdHJpbmd8bGVuZ3RoKSQvKSlcclxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3AsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBwcm9wKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzeW1ib2xzOiBzeW1ib2xbXSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcclxuICAgICAgICBmb3IoY29uc3Qgc3ltYm9sIG9mIHN5bWJvbHMpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgc3ltYm9sLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltYm9sKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWl4aW5zLmZvckVhY2goKG1peGluKSA9PiB7IC8vIG91dHNpZGUgY29udHJ1Y3RvcigpIHRvIGFsbG93IGFnZ3JlZ2F0aW9uKEEsQixDKS5zdGF0aWNGdW5jdGlvbigpIHRvIGJlIGNhbGxlZCBldGMuXHJcbiAgICAgICAgY29weVByb3BzKGJhc2UucHJvdG90eXBlLCBtaXhpbi5wcm90b3R5cGUpO1xyXG4gICAgICAgIGNvcHlQcm9wcyhiYXNlLCBtaXhpbik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBiYXNlO1xyXG59XHJcblxyXG5leHBvcnQge09rTXVsdGlwbGVFeHRlbmRzfSIsImludGVyZmFjZSBPcHRpb25zIHtcclxuICAgIC8qKlxyXG4gICAgICogd2lkdGgsIHdoaWNoIHdpbGwgYmUgY29udGFpbnMgaW4gT2tTaXplXHJcbiAgICAgKi9cclxuICAgIHdpZHRoPzogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBoZWlnaHQsIHdoaWNoIHdpbGwgYmUgY29udGFpbnMgaW4gT2tTaXplXHJcbiAgICAgKi9cclxuICAgIGhlaWdodD86IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogZGVwdGgsIHdoaWNoIHdpbGwgYmUgY29udGFpbnMgaW4gT2tTaXplXHJcbiAgICAgKi9cclxuICAgIGRlcHRoPzogbnVtYmVyO1xyXG59XHJcblxyXG5jbGFzcyBPa1NpemUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBjdXJyZW50IHdpZHRoXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1fd2lkdGg6IG51bWJlciA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIGN1cnJlbnQgaGVpZ2h0XHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1faGVpZ2h0OiBudW1iZXIgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiBjdXJyZW50IGRlcHRoXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1fZGVwdGg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPa1NpemUgY29udGFpbnMgMyB2YXJpYWJsZXMgd2hpY2ggY291bGQgYmUgZWRpdFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogT3B0aW9ucykge1xyXG4gICAgICAgIGlmKG9wdGlvbnM/LndpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0V2lkdGgob3B0aW9ucy53aWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG9wdGlvbnM/LmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEhlaWdodChvcHRpb25zLmhlaWdodClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYob3B0aW9ucz8uZGVwdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREZXB0aChvcHRpb25zLmRlcHRoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm4gdGhlIGN1cnJlbnQgd2lkdGhcclxuICAgICAqL1xyXG4gICAgcHVibGljIHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV93aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGVuYWJsZSB0byBzZXQgd2lkdGhcclxuICAgICAqIEBwYXJhbSB3aWR0aFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0V2lkdGgod2lkdGg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubV93aWR0aCA9IHdpZHRoXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm4gdGhlIGN1cnJlbnQgaGVpZ2h0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2hlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaGVpZ2h0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1faGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXB0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fZGVwdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldERlcHRoKGRlcHRoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1fZGVwdGggPSBkZXB0aDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtPa1NpemUsIE9wdGlvbnN9OyIsImltcG9ydCB7T2tVcmx9IGZyb20gXCIuL09rVXJsXCI7XHJcbmltcG9ydCB7T2tMYW5ndWFnZX0gZnJvbSBcIi4vT2tMYW5ndWFnZVwiO1xyXG5pbXBvcnQge09rRXZlbnRzRW1pdHRlcn0gZnJvbSBcIi4vT2tFdmVudHNFbWl0dGVyXCI7XHJcblxyXG5pbnRlcmZhY2UgT3B0aW9ucyB7XHJcbiAgICB1cmw/OiBPa1VybFxyXG59XHJcblxyXG5lbnVtIEV2ZW50cyB7XHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gVHJhbnNsYXRlZCBmaWxlIGlzIGxvYWRlZFxyXG4gICAgICovXHJcbiAgICB0cmFuc2xhdGVkPSBcInRyYW5zbGF0ZWRcIixcclxufVxyXG5cclxuY2xhc3MgT2tUcmFuc2xhdG9yIGV4dGVuZHMgT2tFdmVudHNFbWl0dGVyIHtcclxuICAgIHByaXZhdGUgbV91cmw6IE9rVXJsID0gbmV3IE9rVXJsKFwiXCIpO1xyXG4gICAgcHJpdmF0ZSBtX2NvbnRlbnQ6IHtbaW5kZXg6IHN0cmluZ106YW55fSA9IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBPcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIGlmKG9wdGlvbnM/LnVybCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFVybChvcHRpb25zLnVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cmFuc2xhdGUoa2V5d29yZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZih0aGlzLm1fY29udGVudFtrZXl3b3JkXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2NvbnRlbnRba2V5d29yZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBrZXl3b3JkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cmwoKTogT2tVcmwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fdXJsXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHNldFVybCh1cmw6IE9rVXJsKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYoYXdhaXQgdXJsLmV4aXN0KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5tX3VybCA9IHVybDtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IChhd2FpdCB0aGlzLm1fdXJsLnJlcXVlc3QoKSkuanNvbigpXHJcbiAgICAgICAgICAgIHRoaXMubV9jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KEV2ZW50cy50cmFuc2xhdGVkLCB7fSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBcIlVybCBub3QgZm91bmRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV3cml0ZVxyXG4gICAgcHVibGljIG9uKGV2ZW50OiBFdmVudHMgfCBzdHJpbmcsIGxpc3RlbmVyOiAoYXR0cj86YW55KSA9PiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZihldmVudCBpbiBFdmVudHMpIHtcclxuICAgICAgICAgICAgc3VwZXIub24oZXZlbnQsIGxpc3RlbmVyKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGV2ZW50IHNlbmQgZG9lc24ndCBleGlzdCBvbiB0aGlzIG9iamVjdCFcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlckV2ZW50cygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uKEV2ZW50cy50cmFuc2xhdGVkLCAoKSA9PiB7fSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtPa1RyYW5zbGF0b3IsIE9wdGlvbnMsIEV2ZW50c307IiwiZnVuY3Rpb24gT2tVbml0KHZhbHVlOiBudW1iZXIsIHVuaXQ6IHN0cmluZyA9IFwicHhcIik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKSArIHVuaXQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7T2tVbml0fSIsImNsYXNzIE9rVXJsIHtcclxuICAgIHByaXZhdGUgbV91cmw6IHN0cmluZztcclxuICAgIHByaXZhdGUgbV9yZXF1ZXN0OiBSZXNwb25zZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih1cmw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc2V0VXJsKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV91cmw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFVybCh1cmw6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubV91cmwgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5tX3JlcXVlc3QgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGV4aXN0KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGlmKCF0aGlzLm1fcmVxdWVzdCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2godGhpcy5tX3VybCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9yZXF1ZXN0ID0gcmVxdWVzdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcyA9IHRoaXMubV9yZXF1ZXN0Lm9rO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldENvbnRlbnQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICBpZighdGhpcy5tX3JlcXVlc3QpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKHRoaXMubV91cmwpO1xyXG4gICAgICAgICAgICB0aGlzLm1fcmVxdWVzdCA9IHJlcXVlc3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLm1fcmVxdWVzdC50ZXh0KCk7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgcmVxdWVzdCgpOiBQcm9taXNlPFJlc3BvbnNlPiB7XHJcbiAgICAgICAgaWYoIXRoaXMubV9yZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCh0aGlzLm1fdXJsKTtcclxuICAgICAgICAgICAgdGhpcy5tX3JlcXVlc3QgPSByZXF1ZXN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9yZXF1ZXN0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge09rVXJsfSIsIi8qKlxyXG4gKiBwYXVzZSBkdXJpbmcgYSB0aW1lXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogIGF3YWl0IE9rV2FpdCg1MDApOyAvLyB3YWl0IDUwMG1zXHJcbiAqIGBgYFxyXG4gKiBAcGFyYW0gdGltZVxyXG4gKiB0aW1lIGluIG1zXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBPa1dhaXQodGltZTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHN1Y2Nlc3MpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc3VjY2VzcygpO1xyXG4gICAgICAgIH0sIHRpbWUpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7T2tXYWl0fTsiLCJuYW1lc3BhY2UgY3NzIHtcclxuICAgIGV4cG9ydCBlbnVtIHByb3BlcnR5IHtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIENTUyBhbGlnbi1jb250ZW50IHByb3BlcnR5IHNldHMgdGhlIGRpc3RyaWJ1dGlvbiBvZiBzcGFjZSBiZXR3ZWVuIGFuZCBhcm91bmQgY29udGVudCBpdGVtcyBhbG9uZyBhIGZsZXhib3gncyBjcm9zcy1heGlzIG9yIGEgZ3JpZCdzIGJsb2NrIGF4aXMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9hbGlnbi1jb250ZW50IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YWxpZ24tY29udGVudFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJhbGlnbi1jb250ZW50XCI9IFwiYWxpZ24tY29udGVudFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgQ1NTIGFsaWduLWl0ZW1zIHByb3BlcnR5IHNldHMgdGhlIGFsaWduLXNlbGYgdmFsdWUgb24gYWxsIGRpcmVjdCBjaGlsZHJlbiBhcyBhIGdyb3VwLiBJbiBGbGV4Ym94LCBpdCBjb250cm9scyB0aGUgYWxpZ25tZW50IG9mIGl0ZW1zIG9uIHRoZSBDcm9zcyBBeGlzLiBJbiBHcmlkIExheW91dCwgaXQgY29udHJvbHMgdGhlIGFsaWdubWVudCBvZiBpdGVtcyBvbiB0aGUgQmxvY2sgQXhpcyB3aXRoaW4gdGhlaXIgZ3JpZCBhcmVhLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYWxpZ24taXRlbXMgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1hbGlnbi1pdGVtc1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJhbGlnbi1pdGVtc1wiPSBcImFsaWduLWl0ZW1zXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBhbGlnbi1zZWxmIENTUyBwcm9wZXJ0eSBvdmVycmlkZXMgYSBncmlkIG9yIGZsZXggaXRlbSdzIGFsaWduLWl0ZW1zIHZhbHVlLiBJbiBHcmlkLCBpdCBhbGlnbnMgdGhlIGl0ZW0gaW5zaWRlIHRoZSZuYnNwO2dyaWQgYXJlYS4gSW4gRmxleGJveCwgaXQgYWxpZ25zIHRoZSBpdGVtIG9uIHRoZSBjcm9zcyBheGlzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYWxpZ24tc2VsZiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWFsaWduLXNlbGZcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYWxpZ24tc2VsZlwiPSBcImFsaWduLXNlbGZcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGFsaWdubWVudC1iYXNlbGluZSBhdHRyaWJ1dGUgc3BlY2lmaWVzIGhvdyBhbiBvYmplY3QgaXMgYWxpZ25lZCB3aXRoIHJlc3BlY3QgdG8gaXRzIHBhcmVudC4gVGhpcyBwcm9wZXJ0eSBzcGVjaWZpZXMgd2hpY2ggYmFzZWxpbmUgb2YgdGhpcyBlbGVtZW50IGlzIHRvIGJlIGFsaWduZWQgd2l0aCB0aGUgY29ycmVzcG9uZGluZyBiYXNlbGluZSBvZiB0aGUgcGFyZW50LiBGb3IgZXhhbXBsZSwgdGhpcyBhbGxvd3MgYWxwaGFiZXRpYyBiYXNlbGluZXMgaW4gUm9tYW4gdGV4dCB0byBzdGF5IGFsaWduZWQgYWNyb3NzIGZvbnQgc2l6ZSBjaGFuZ2VzLiBJdCBkZWZhdWx0cyB0byB0aGUgYmFzZWxpbmUgd2l0aCB0aGUgc2FtZSBuYW1lIGFzIHRoZSBjb21wdXRlZCB2YWx1ZSBvZiB0aGUgYWxpZ25tZW50LWJhc2VsaW5lIHByb3BlcnR5LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL2FsaWdubWVudC1iYXNlbGluZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWFsaWdubWVudC1iYXNlbGluZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJhbGlnbm1lbnQtYmFzZWxpbmVcIj0gXCJhbGlnbm1lbnQtYmFzZWxpbmVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGFsbCBzaG9ydGhhbmQgQ1NTIHByb3BlcnR5IHJlc2V0cyBhbGwgb2YgYW4gZWxlbWVudCdzIHByb3BlcnRpZXMgZXhjZXB0IHVuaWNvZGUtYmlkaSwgZGlyZWN0aW9uLCBhbmQgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzLiBJdCBjYW4gc2V0IHByb3BlcnRpZXMgdG8gdGhlaXIgaW5pdGlhbCBvciBpbmhlcml0ZWQgdmFsdWVzLCBvciB0byB0aGUgdmFsdWVzIHNwZWNpZmllZCBpbiBhbm90aGVyIHN0eWxlc2hlZXQgb3JpZ2luLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYWxsIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YWxsXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGFsbD0gXCJhbGxcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGFuaW1hdGlvbiBzaG9ydGhhbmQgQ1NTIHByb3BlcnR5IGFwcGxpZXMgYW4gYW5pbWF0aW9uIGJldHdlZW4gc3R5bGVzLiBJdCBpcyBhIHNob3J0aGFuZCBmb3IgYW5pbWF0aW9uLW5hbWUsIGFuaW1hdGlvbi1kdXJhdGlvbiwgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbiwgYW5pbWF0aW9uLWRlbGF5LCBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50LCBhbmltYXRpb24tZGlyZWN0aW9uLCBhbmltYXRpb24tZmlsbC1tb2RlLCBhbmQgYW5pbWF0aW9uLXBsYXktc3RhdGUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9hbmltYXRpb24gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1hbmltYXRpb25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYW5pbWF0aW9uPSBcImFuaW1hdGlvblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYW5pbWF0aW9uLWRlbGF5IENTUyBwcm9wZXJ0eSBzcGVjaWZpZXMgdGhlIGFtb3VudCBvZiB0aW1lIHRvIHdhaXQgZnJvbSBhcHBseWluZyB0aGUgYW5pbWF0aW9uIHRvIGFuIGVsZW1lbnQgYmVmb3JlIGJlZ2lubmluZyB0byBwZXJmb3JtIHRoZSBhbmltYXRpb24uIFRoZSBhbmltYXRpb24gY2FuIHN0YXJ0IGxhdGVyLCBpbW1lZGlhdGVseSBmcm9tIGl0cyBiZWdpbm5pbmcsIG9yIGltbWVkaWF0ZWx5IGFuZCBwYXJ0d2F5IHRocm91Z2ggdGhlIGFuaW1hdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2FuaW1hdGlvbi1kZWxheSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWFuaW1hdGlvbi1kZWxheVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJhbmltYXRpb24tZGVsYXlcIj0gXCJhbmltYXRpb24tZGVsYXlcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGFuaW1hdGlvbi1kaXJlY3Rpb24gQ1NTIHByb3BlcnR5IHNldHMgd2hldGhlciBhbiBhbmltYXRpb24gc2hvdWxkIHBsYXkgZm9yd2FyZCwgYmFja3dhcmQsIG9yIGFsdGVybmF0ZSBiYWNrIGFuZCBmb3J0aCBiZXR3ZWVuIHBsYXlpbmcgdGhlIHNlcXVlbmNlIGZvcndhcmQgYW5kIGJhY2t3YXJkLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYW5pbWF0aW9uLWRpcmVjdGlvbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWFuaW1hdGlvbi1kaXJlY3Rpb25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYW5pbWF0aW9uLWRpcmVjdGlvblwiPSBcImFuaW1hdGlvbi1kaXJlY3Rpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGFuaW1hdGlvbi1kdXJhdGlvbiBDU1MgcHJvcGVydHkgc2V0cyB0aGUgbGVuZ3RoIG9mIHRpbWUgdGhhdCBhbiBhbmltYXRpb24gdGFrZXMgdG8gY29tcGxldGUgb25lIGN5Y2xlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYW5pbWF0aW9uLWR1cmF0aW9uIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YW5pbWF0aW9uLWR1cmF0aW9uXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImFuaW1hdGlvbi1kdXJhdGlvblwiPSBcImFuaW1hdGlvbi1kdXJhdGlvblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYW5pbWF0aW9uLWZpbGwtbW9kZSBDU1MgcHJvcGVydHkgc2V0cyBob3cgYSBDU1MgYW5pbWF0aW9uIGFwcGxpZXMgc3R5bGVzIHRvIGl0cyB0YXJnZXQgYmVmb3JlIGFuZCBhZnRlciBpdHMgZXhlY3V0aW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYW5pbWF0aW9uLWZpbGwtbW9kZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWFuaW1hdGlvbi1maWxsLW1vZGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYW5pbWF0aW9uLWZpbGwtbW9kZVwiPSBcImFuaW1hdGlvbi1maWxsLW1vZGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQgQ1NTIHByb3BlcnR5IHNldHMgdGhlIG51bWJlciBvZiB0aW1lcyBhbiBhbmltYXRpb24gc2VxdWVuY2Ugc2hvdWxkIGJlIHBsYXllZCBiZWZvcmUgc3RvcHBpbmcuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9hbmltYXRpb24taXRlcmF0aW9uLWNvdW50IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJhbmltYXRpb24taXRlcmF0aW9uLWNvdW50XCI9IFwiYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYW5pbWF0aW9uLW5hbWUgQ1NTIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgbmFtZXMgb2Ygb25lIG9yIG1vcmUgQGtleWZyYW1lcyBhdC1ydWxlcyBkZXNjcmliaW5nIHRoZSBhbmltYXRpb24gb3IgYW5pbWF0aW9ucyB0byBhcHBseSB0byB0aGUgZWxlbWVudC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2FuaW1hdGlvbi1uYW1lIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YW5pbWF0aW9uLW5hbWVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYW5pbWF0aW9uLW5hbWVcIj0gXCJhbmltYXRpb24tbmFtZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYW5pbWF0aW9uLXBsYXktc3RhdGUgQ1NTIHByb3BlcnR5IHNldHMgd2hldGhlciBhbiBhbmltYXRpb24gaXMgcnVubmluZyBvciBwYXVzZWQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9hbmltYXRpb24tcGxheS1zdGF0ZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWFuaW1hdGlvbi1wbGF5LXN0YXRlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImFuaW1hdGlvbi1wbGF5LXN0YXRlXCI9IFwiYW5pbWF0aW9uLXBsYXktc3RhdGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb24gQ1NTIHByb3BlcnR5IHNldHMgaG93IGFuIGFuaW1hdGlvbiBwcm9ncmVzc2VzIHRocm91Z2ggdGhlIGR1cmF0aW9uIG9mIGVhY2ggY3ljbGUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uXCI9IFwiYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYXBwZWFyYW5jZSBDU1MgcHJvcGVydHkgaXMgdXNlZCB0byBkaXNwbGF5IGFuIGVsZW1lbnQgdXNpbmcgcGxhdGZvcm0tbmF0aXZlIHN0eWxpbmcsIGJhc2VkIG9uIHRoZSBvcGVyYXRpbmcgc3lzdGVtJ3MgdGhlbWUuIFRoZSAtbW96LWFwcGVhcmFuY2UgYW5kIC13ZWJraXQtYXBwZWFyYW5jZSBwcm9wZXJ0aWVzIGFyZSBub24tc3RhbmRhcmQgdmVyc2lvbnMgb2YgdGhpcyBwcm9wZXJ0eSwgdXNlZCAocmVzcGVjdGl2ZWx5KSBieSBHZWNrbyAoRmlyZWZveCkgYW5kIGJ5IFdlYktpdC1iYXNlZCAoZS5nLiwgU2FmYXJpKSBhbmQgQmxpbmstYmFzZWQgKGUuZy4sIENocm9tZSwgT3BlcmEpIGJyb3dzZXJzIHRvIGFjaGlldmUgdGhlIHNhbWUgdGhpbmcuIE5vdGUgdGhhdCBGaXJlZm94IGFuZCBFZGdlIGFsc28gc3VwcG9ydCAtd2Via2l0LWFwcGVhcmFuY2UsIGZvciBjb21wYXRpYmlsaXR5IHJlYXNvbnMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9hcHBlYXJhbmNlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YXBwZWFyYW5jZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBhcHBlYXJhbmNlPSBcImFwcGVhcmFuY2VcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJhc2NlbnQtb3ZlcnJpZGVcIj0gXCJhc2NlbnQtb3ZlcnJpZGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGFzcGVjdC1yYXRpbyZuYnNwOyZuYnNwO0NTUyBwcm9wZXJ0eSBzZXRzIGEgcHJlZmVycmVkIGFzcGVjdCByYXRpbyBmb3IgdGhlIGJveCwgd2hpY2ggd2lsbCBiZSB1c2VkIGluIHRoZSBjYWxjdWxhdGlvbiBvZiBhdXRvIHNpemVzIGFuZCBzb21lIG90aGVyIGxheW91dCBmdW5jdGlvbnMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9hc3BlY3QtcmF0aW8gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1hc3BlY3QtcmF0aW9cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYXNwZWN0LXJhdGlvXCI9IFwiYXNwZWN0LXJhdGlvXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBiYWNrZHJvcC1maWx0ZXIgQ1NTIHByb3BlcnR5IGxldHMgeW91IGFwcGx5IGdyYXBoaWNhbCBlZmZlY3RzIHN1Y2ggYXMgYmx1cnJpbmcgb3IgY29sb3Igc2hpZnRpbmcgdG8gdGhlIGFyZWEgYmVoaW5kIGFuIGVsZW1lbnQuIEJlY2F1c2UgaXQgYXBwbGllcyB0byBldmVyeXRoaW5nIGJlaGluZCB0aGUgZWxlbWVudCwgdG8gc2VlIHRoZSBlZmZlY3QgeW91IG11c3QgbWFrZSB0aGUgZWxlbWVudCBvciBpdHMgYmFja2dyb3VuZCBhdCBsZWFzdCBwYXJ0aWFsbHkgdHJhbnNwYXJlbnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZHJvcC1maWx0ZXIgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1iYWNrZHJvcC1maWx0ZXJcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYmFja2Ryb3AtZmlsdGVyXCI9IFwiYmFja2Ryb3AtZmlsdGVyXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBiYWNrZmFjZS12aXNpYmlsaXR5IENTUyBwcm9wZXJ0eSBzZXRzIHdoZXRoZXIgdGhlIGJhY2sgZmFjZSBvZiBhbiBlbGVtZW50IGlzIHZpc2libGUgd2hlbiB0dXJuZWQgdG93YXJkcyB0aGUgdXNlci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tmYWNlLXZpc2liaWxpdHkgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1iYWNrZmFjZS12aXNpYmlsaXR5XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJhY2tmYWNlLXZpc2liaWxpdHlcIj0gXCJiYWNrZmFjZS12aXNpYmlsaXR5XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBiYWNrZ3JvdW5kIHNob3J0aGFuZCBDU1MgcHJvcGVydHkgc2V0cyBhbGwgYmFja2dyb3VuZCBzdHlsZSBwcm9wZXJ0aWVzIGF0IG9uY2UsIHN1Y2ggYXMgY29sb3IsIGltYWdlLCBvcmlnaW4gYW5kIHNpemUsIG9yIHJlcGVhdCBtZXRob2QuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZ3JvdW5kIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YmFja2dyb3VuZFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kPSBcImJhY2tncm91bmRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJhY2tncm91bmQtYXR0YWNobWVudCBDU1MgcHJvcGVydHkgc2V0cyB3aGV0aGVyIGEgYmFja2dyb3VuZCBpbWFnZSdzIHBvc2l0aW9uIGlzIGZpeGVkIHdpdGhpbiB0aGUgdmlld3BvcnQsIG9yIHNjcm9sbHMgd2l0aCBpdHMgY29udGFpbmluZyBibG9jay5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tncm91bmQtYXR0YWNobWVudCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJhY2tncm91bmQtYXR0YWNobWVudFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWF0dGFjaG1lbnRcIj0gXCJiYWNrZ3JvdW5kLWF0dGFjaG1lbnRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJhY2tncm91bmQtYmxlbmQtbW9kZSBDU1MgcHJvcGVydHkgc2V0cyBob3cgYW4gZWxlbWVudCdzIGJhY2tncm91bmQgaW1hZ2VzIHNob3VsZCBibGVuZCB3aXRoIGVhY2ggb3RoZXIgYW5kIHdpdGggdGhlIGVsZW1lbnQncyBiYWNrZ3JvdW5kIGNvbG9yLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYmFja2dyb3VuZC1ibGVuZC1tb2RlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YmFja2dyb3VuZC1ibGVuZC1tb2RlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJhY2tncm91bmQtYmxlbmQtbW9kZVwiPSBcImJhY2tncm91bmQtYmxlbmQtbW9kZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYmFja2dyb3VuZC1jbGlwIENTUyBwcm9wZXJ0eSBzZXRzIHdoZXRoZXIgYW4gZWxlbWVudCdzIGJhY2tncm91bmQgZXh0ZW5kcyB1bmRlcm5lYXRoIGl0cyBib3JkZXIgYm94LCBwYWRkaW5nIGJveCwgb3IgY29udGVudCBib3guXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZ3JvdW5kLWNsaXAgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1iYWNrZ3JvdW5kLWNsaXBcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jbGlwXCI9IFwiYmFja2dyb3VuZC1jbGlwXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBiYWNrZ3JvdW5kLWNvbG9yIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGFuIGVsZW1lbnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZ3JvdW5kLWNvbG9yIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YmFja2dyb3VuZC1jb2xvclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI9IFwiYmFja2dyb3VuZC1jb2xvclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYmFja2dyb3VuZC1pbWFnZSBDU1MgcHJvcGVydHkgc2V0cyBvbmUgb3IgbW9yZSBiYWNrZ3JvdW5kIGltYWdlcyBvbiBhbiBlbGVtZW50LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYmFja2dyb3VuZC1pbWFnZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJhY2tncm91bmQtaW1hZ2VcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1pbWFnZVwiPSBcImJhY2tncm91bmQtaW1hZ2VcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJhY2tncm91bmQtb3JpZ2luIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBiYWNrZ3JvdW5kJ3Mgb3JpZ2luOiBmcm9tIHRoZSBib3JkZXIgc3RhcnQsIGluc2lkZSB0aGUgYm9yZGVyLCBvciBpbnNpZGUgdGhlIHBhZGRpbmcuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZ3JvdW5kLW9yaWdpbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJhY2tncm91bmQtb3JpZ2luXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJhY2tncm91bmQtb3JpZ2luXCI9IFwiYmFja2dyb3VuZC1vcmlnaW5cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJhY2tncm91bmQtcG9zaXRpb24gQ1NTIHByb3BlcnR5IHNldHMgdGhlIGluaXRpYWwgcG9zaXRpb24gZm9yIGVhY2ggYmFja2dyb3VuZCBpbWFnZS4gVGhlIHBvc2l0aW9uIGlzIHJlbGF0aXZlIHRvIHRoZSBwb3NpdGlvbiBsYXllciBzZXQgYnkgYmFja2dyb3VuZC1vcmlnaW4uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZ3JvdW5kLXBvc2l0aW9uIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YmFja2dyb3VuZC1wb3NpdGlvblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLXBvc2l0aW9uXCI9IFwiYmFja2dyb3VuZC1wb3NpdGlvblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYmFja2dyb3VuZC1wb3NpdGlvbi14IENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBpbml0aWFsIGhvcml6b250YWwgcG9zaXRpb24gZm9yIGVhY2ggYmFja2dyb3VuZCBpbWFnZS4gVGhlIHBvc2l0aW9uIGlzIHJlbGF0aXZlIHRvIHRoZSBwb3NpdGlvbiBsYXllciBzZXQgYnkgYmFja2dyb3VuZC1vcmlnaW4uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZ3JvdW5kLXBvc2l0aW9uLXggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1iYWNrZ3JvdW5kLXBvc2l0aW9uLXhcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1wb3NpdGlvbi14XCI9IFwiYmFja2dyb3VuZC1wb3NpdGlvbi14XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBiYWNrZ3JvdW5kLXBvc2l0aW9uLXkgQ1NTIHByb3BlcnR5IHNldHMgdGhlIGluaXRpYWwgdmVydGljYWwgcG9zaXRpb24gZm9yIGVhY2ggYmFja2dyb3VuZCBpbWFnZS4gVGhlIHBvc2l0aW9uIGlzIHJlbGF0aXZlIHRvIHRoZSBwb3NpdGlvbiBsYXllciBzZXQgYnkgYmFja2dyb3VuZC1vcmlnaW4uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZ3JvdW5kLXBvc2l0aW9uLXkgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1iYWNrZ3JvdW5kLXBvc2l0aW9uLXlcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1wb3NpdGlvbi15XCI9IFwiYmFja2dyb3VuZC1wb3NpdGlvbi15XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBiYWNrZ3JvdW5kLXJlcGVhdCBDU1MgcHJvcGVydHkgc2V0cyBob3cgYmFja2dyb3VuZCBpbWFnZXMgYXJlIHJlcGVhdGVkLiBBIGJhY2tncm91bmQgaW1hZ2UgY2FuIGJlIHJlcGVhdGVkIGFsb25nIHRoZSBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbCBheGVzLCBvciBub3QgcmVwZWF0ZWQgYXQgYWxsLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYmFja2dyb3VuZC1yZXBlYXQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1iYWNrZ3JvdW5kLXJlcGVhdFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLXJlcGVhdFwiPSBcImJhY2tncm91bmQtcmVwZWF0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1yZXBlYXQteFwiPSBcImJhY2tncm91bmQtcmVwZWF0LXhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLXJlcGVhdC15XCI9IFwiYmFja2dyb3VuZC1yZXBlYXQteVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYmFja2dyb3VuZC1zaXplIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBzaXplIG9mIHRoZSBlbGVtZW50J3MgYmFja2dyb3VuZCBpbWFnZS4gVGhlIGltYWdlIGNhbiBiZSBsZWZ0IHRvIGl0cyBuYXR1cmFsIHNpemUsIHN0cmV0Y2hlZCwgb3IgY29uc3RyYWluZWQgdG8gZml0IHRoZSBhdmFpbGFibGUgc3BhY2UuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZ3JvdW5kLXNpemUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1iYWNrZ3JvdW5kLXNpemVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1zaXplXCI9IFwiYmFja2dyb3VuZC1zaXplXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBiYXNlbGluZS1zaGlmdCBhdHRyaWJ1dGUgYWxsb3dzIHJlcG9zaXRpb25pbmcgb2YgdGhlIGRvbWluYW50LWJhc2VsaW5lIHJlbGF0aXZlIHRvIHRoZSBkb21pbmFudC1iYXNlbGluZSBvZiB0aGUgcGFyZW50IHRleHQgY29udGVudCBlbGVtZW50LiBUaGUgc2hpZnRlZCBvYmplY3QgbWlnaHQgYmUgYSBzdWItIG9yIHN1cGVyc2NyaXB0LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL2Jhc2VsaW5lLXNoaWZ0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YmFzZWxpbmUtc2hpZnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYmFzZWxpbmUtc2hpZnRcIj0gXCJiYXNlbGluZS1zaGlmdFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYmxvY2stc2l6ZSBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCBzaXplIG9mIGFuIGVsZW1lbnQncyBibG9jaywgZGVwZW5kaW5nIG9uIGl0cyB3cml0aW5nIG1vZGUuIEl0IGNvcnJlc3BvbmRzIHRvIGVpdGhlciB0aGUgd2lkdGggb3IgdGhlIGhlaWdodCBwcm9wZXJ0eSwgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiB3cml0aW5nLW1vZGUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ibG9jay1zaXplIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YmxvY2stc2l6ZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJibG9jay1zaXplXCI9IFwiYmxvY2stc2l6ZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyIHNob3J0aGFuZCBDU1MgcHJvcGVydHkgc2V0cyBhbiBlbGVtZW50J3MgYm9yZGVyLiBJdCBzZXRzIHRoZSB2YWx1ZXMgb2YgYm9yZGVyLXdpZHRoLCBib3JkZXItc3R5bGUsIGFuZCBib3JkZXItY29sb3IuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXIgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXJcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYm9yZGVyPSBcImJvcmRlclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWJsb2NrIENTUyBwcm9wZXJ0eSBpcyBhIHNob3J0aGFuZCBwcm9wZXJ0eSBmb3Igc2V0dGluZyB0aGUgaW5kaXZpZHVhbCBsb2dpY2FsIGJsb2NrIGJvcmRlciBwcm9wZXJ0eSB2YWx1ZXMgaW4gYSBzaW5nbGUgcGxhY2UgaW4gdGhlIHN0eWxlIHNoZWV0LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWJsb2NrIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWJsb2NrXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1ibG9ja1wiPSBcImJvcmRlci1ibG9ja1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWJsb2NrLWNvbG9yIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBjb2xvciBvZiB0aGUgbG9naWNhbCBibG9jayBib3JkZXJzIG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gYSBwaHlzaWNhbCBib3JkZXIgY29sb3IgZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uIEl0IGNvcnJlc3BvbmRzIHRvIHRoZSBib3JkZXItdG9wLWNvbG9yIGFuZCBib3JkZXItYm90dG9tLWNvbG9yLCBvciBib3JkZXItcmlnaHQtY29sb3IgYW5kIGJvcmRlci1sZWZ0LWNvbG9yIHByb3BlcnR5IGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIGRlZmluZWQgZm9yIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1ibG9jay1jb2xvciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1ibG9jay1jb2xvclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItYmxvY2stY29sb3JcIj0gXCJib3JkZXItYmxvY2stY29sb3JcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1ibG9jay1lbmQgQ1NTIHByb3BlcnR5IGlzIGEgc2hvcnRoYW5kIHByb3BlcnR5IGZvciBzZXR0aW5nIHRoZSBpbmRpdmlkdWFsIGxvZ2ljYWwgYmxvY2stZW5kIGJvcmRlciBwcm9wZXJ0eSB2YWx1ZXMgaW4gYSBzaW5nbGUgcGxhY2UgaW4gdGhlIHN0eWxlIHNoZWV0LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWJsb2NrLWVuZCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1ibG9jay1lbmRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWJsb2NrLWVuZFwiPSBcImJvcmRlci1ibG9jay1lbmRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1ibG9jay1lbmQtY29sb3IgQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIGNvbG9yIG9mIHRoZSBsb2dpY2FsIGJsb2NrLWVuZCBib3JkZXIgb2YgYW4gZWxlbWVudCwgd2hpY2ggbWFwcyB0byBhIHBoeXNpY2FsIGJvcmRlciBjb2xvciBkZXBlbmRpbmcgb24gdGhlIGVsZW1lbnQncyB3cml0aW5nIG1vZGUsIGRpcmVjdGlvbmFsaXR5LCBhbmQgdGV4dCBvcmllbnRhdGlvbi4gSXQgY29ycmVzcG9uZHMgdG8gdGhlIGJvcmRlci10b3AtY29sb3IsJm5ic3A7Ym9yZGVyLXJpZ2h0LWNvbG9yLCZuYnNwO2JvcmRlci1ib3R0b20tY29sb3IsIG9yIGJvcmRlci1sZWZ0LWNvbG9yIHByb3BlcnR5IGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIGRlZmluZWQgZm9yIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1ibG9jay1lbmQtY29sb3IgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItYmxvY2stZW5kLWNvbG9yXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1ibG9jay1lbmQtY29sb3JcIj0gXCJib3JkZXItYmxvY2stZW5kLWNvbG9yXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItYmxvY2stZW5kLXN0eWxlIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBzdHlsZSBvZiB0aGUgbG9naWNhbCBibG9jay1lbmQgYm9yZGVyIG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gYSBwaHlzaWNhbCBib3JkZXIgc3R5bGUgZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uIEl0IGNvcnJlc3BvbmRzIHRvIHRoZSBib3JkZXItdG9wLXN0eWxlLCBib3JkZXItcmlnaHQtc3R5bGUsIGJvcmRlci1ib3R0b20tc3R5bGUsIG9yIGJvcmRlci1sZWZ0LXN0eWxlIHByb3BlcnR5IGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIGRlZmluZWQgZm9yIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1ibG9jay1lbmQtc3R5bGUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItYmxvY2stZW5kLXN0eWxlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1ibG9jay1lbmQtc3R5bGVcIj0gXCJib3JkZXItYmxvY2stZW5kLXN0eWxlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItYmxvY2stZW5kLXdpZHRoIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSB3aWR0aCBvZiB0aGUgbG9naWNhbCBibG9jay1lbmQgYm9yZGVyIG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gYSBwaHlzaWNhbCBib3JkZXIgd2lkdGggZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uIEl0IGNvcnJlc3BvbmRzIHRvIHRoZSBib3JkZXItdG9wLXdpZHRoLCZuYnNwO2JvcmRlci1yaWdodC13aWR0aCwmbmJzcDtib3JkZXItYm90dG9tLXdpZHRoLCBvciBib3JkZXItbGVmdC13aWR0aCBwcm9wZXJ0eSBkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBkZWZpbmVkIGZvciB3cml0aW5nLW1vZGUsIGRpcmVjdGlvbiwgYW5kIHRleHQtb3JpZW50YXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItYmxvY2stZW5kLXdpZHRoIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWJsb2NrLWVuZC13aWR0aFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItYmxvY2stZW5kLXdpZHRoXCI9IFwiYm9yZGVyLWJsb2NrLWVuZC13aWR0aFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWJsb2NrLXN0YXJ0IENTUyBwcm9wZXJ0eSBpcyBhIHNob3J0aGFuZCBwcm9wZXJ0eSBmb3Igc2V0dGluZyB0aGUgaW5kaXZpZHVhbCBsb2dpY2FsIGJsb2NrLXN0YXJ0IGJvcmRlciBwcm9wZXJ0eSB2YWx1ZXMgaW4gYSBzaW5nbGUgcGxhY2UgaW4gdGhlIHN0eWxlIHNoZWV0LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWJsb2NrLXN0YXJ0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWJsb2NrLXN0YXJ0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1ibG9jay1zdGFydFwiPSBcImJvcmRlci1ibG9jay1zdGFydFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWJsb2NrLXN0YXJ0LWNvbG9yIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBjb2xvciBvZiB0aGUgbG9naWNhbCBibG9jay1zdGFydCBib3JkZXIgb2YgYW4gZWxlbWVudCwgd2hpY2ggbWFwcyB0byBhIHBoeXNpY2FsIGJvcmRlciBjb2xvciBkZXBlbmRpbmcgb24gdGhlIGVsZW1lbnQncyB3cml0aW5nIG1vZGUsIGRpcmVjdGlvbmFsaXR5LCBhbmQgdGV4dCBvcmllbnRhdGlvbi4gSXQgY29ycmVzcG9uZHMgdG8gdGhlIGJvcmRlci10b3AtY29sb3IsJm5ic3A7Ym9yZGVyLXJpZ2h0LWNvbG9yLCZuYnNwO2JvcmRlci1ib3R0b20tY29sb3IsIG9yIGJvcmRlci1sZWZ0LWNvbG9yIHByb3BlcnR5IGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIGRlZmluZWQgZm9yIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1ibG9jay1zdGFydC1jb2xvciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1ibG9jay1zdGFydC1jb2xvclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItYmxvY2stc3RhcnQtY29sb3JcIj0gXCJib3JkZXItYmxvY2stc3RhcnQtY29sb3JcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1ibG9jay1zdGFydC1zdHlsZSBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgc3R5bGUgb2YgdGhlIGxvZ2ljYWwgYmxvY2sgc3RhcnQgYm9yZGVyIG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gYSBwaHlzaWNhbCBib3JkZXIgc3R5bGUgZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uIEl0IGNvcnJlc3BvbmRzIHRvIHRoZSBib3JkZXItdG9wLXN0eWxlLCZuYnNwO2JvcmRlci1yaWdodC1zdHlsZSwmbmJzcDtib3JkZXItYm90dG9tLXN0eWxlLCBvciBib3JkZXItbGVmdC1zdHlsZSBwcm9wZXJ0eSBkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBkZWZpbmVkIGZvciB3cml0aW5nLW1vZGUsIGRpcmVjdGlvbiwgYW5kIHRleHQtb3JpZW50YXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItYmxvY2stc3RhcnQtc3R5bGUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItYmxvY2stc3RhcnQtc3R5bGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWJsb2NrLXN0YXJ0LXN0eWxlXCI9IFwiYm9yZGVyLWJsb2NrLXN0YXJ0LXN0eWxlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItYmxvY2stc3RhcnQtd2lkdGggQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIHdpZHRoIG9mIHRoZSBsb2dpY2FsIGJsb2NrLXN0YXJ0IGJvcmRlciBvZiBhbiBlbGVtZW50LCB3aGljaCBtYXBzIHRvIGEgcGh5c2ljYWwgYm9yZGVyIHdpZHRoIGRlcGVuZGluZyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmcgbW9kZSwgZGlyZWN0aW9uYWxpdHksIGFuZCB0ZXh0IG9yaWVudGF0aW9uLiBJdCBjb3JyZXNwb25kcyB0byB0aGUgYm9yZGVyLXRvcC13aWR0aCwmbmJzcDtib3JkZXItcmlnaHQtd2lkdGgsJm5ic3A7Ym9yZGVyLWJvdHRvbS13aWR0aCwgb3IgYm9yZGVyLWxlZnQtd2lkdGggcHJvcGVydHkgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZXMgZGVmaW5lZCBmb3Igd3JpdGluZy1tb2RlLCBkaXJlY3Rpb24sIGFuZCB0ZXh0LW9yaWVudGF0aW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1ibG9jay1zdGFydC13aWR0aFwiPSBcImJvcmRlci1ibG9jay1zdGFydC13aWR0aFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWJsb2NrLXN0eWxlIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBzdHlsZSBvZiB0aGUgbG9naWNhbCBibG9jayBib3JkZXJzIG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gYSBwaHlzaWNhbCBib3JkZXIgc3R5bGUgZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uIEl0IGNvcnJlc3BvbmRzIHRvIHRoZSBib3JkZXItdG9wLXN0eWxlIGFuZCBib3JkZXItYm90dG9tLXN0eWxlLCBvciBib3JkZXItbGVmdC1zdHlsZSBhbmQgYm9yZGVyLXJpZ2h0LXN0eWxlIHByb3BlcnRpZXMgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZXMgZGVmaW5lZCBmb3Igd3JpdGluZy1tb2RlLCBkaXJlY3Rpb24sIGFuZCB0ZXh0LW9yaWVudGF0aW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWJsb2NrLXN0eWxlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWJsb2NrLXN0eWxlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1ibG9jay1zdHlsZVwiPSBcImJvcmRlci1ibG9jay1zdHlsZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWJsb2NrLXdpZHRoIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSB3aWR0aCBvZiB0aGUgbG9naWNhbCBibG9jayZuYnNwO2JvcmRlcnMgb2YgYW4gZWxlbWVudCwgd2hpY2ggbWFwcyB0byBhIHBoeXNpY2FsIGJvcmRlciB3aWR0aCBkZXBlbmRpbmcgb24gdGhlIGVsZW1lbnQncyB3cml0aW5nIG1vZGUsIGRpcmVjdGlvbmFsaXR5LCBhbmQgdGV4dCBvcmllbnRhdGlvbi4gSXQgY29ycmVzcG9uZHMgdG8gdGhlIGJvcmRlci10b3Atd2lkdGggYW5kJm5ic3A7Ym9yZGVyLWJvdHRvbS13aWR0aCwgb3IgYm9yZGVyLWxlZnQtd2lkdGgsIGFuZCZuYnNwO2JvcmRlci1yaWdodC13aWR0aCBwcm9wZXJ0eSBkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBkZWZpbmVkIGZvciB3cml0aW5nLW1vZGUsIGRpcmVjdGlvbiwgYW5kIHRleHQtb3JpZW50YXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItYmxvY2std2lkdGggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItYmxvY2std2lkdGhcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWJsb2NrLXdpZHRoXCI9IFwiYm9yZGVyLWJsb2NrLXdpZHRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItYm90dG9tIHNob3J0aGFuZCBDU1MgcHJvcGVydHkgc2V0cyBhbiBlbGVtZW50J3MgYm90dG9tIGJvcmRlci4gSXQgc2V0cyB0aGUgdmFsdWVzIG9mIGJvcmRlci1ib3R0b20td2lkdGgsIGJvcmRlci1ib3R0b20tc3R5bGUgYW5kIGJvcmRlci1ib3R0b20tY29sb3IuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItYm90dG9tIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWJvdHRvbVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItYm90dG9tXCI9IFwiYm9yZGVyLWJvdHRvbVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWJvdHRvbS1jb2xvciBDU1MgcHJvcGVydHkgc2V0cyB0aGUgY29sb3Igb2YgYW4gZWxlbWVudCdzIGJvdHRvbSBib3JkZXIuIEl0IGNhbiBhbHNvIGJlIHNldCB3aXRoIHRoZSBzaG9ydGhhbmQgQ1NTIHByb3BlcnRpZXMgYm9yZGVyLWNvbG9yIG9yIGJvcmRlci1ib3R0b20uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItYm90dG9tLWNvbG9yIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWJvdHRvbS1jb2xvclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItYm90dG9tLWNvbG9yXCI9IFwiYm9yZGVyLWJvdHRvbS1jb2xvclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyBDU1MgcHJvcGVydHkgcm91bmRzIHRoZSBib3R0b20tbGVmdCBjb3JuZXIgb2YgYW4gZWxlbWVudCBieSBzcGVjaWZ5aW5nIHRoZSByYWRpdXMgKG9yIHRoZSByYWRpdXMgb2YgdGhlIHNlbWktbWFqb3IgYW5kIHNlbWktbWlub3IgYXhlcykgb2YgdGhlIGVsbGlwc2UgZGVmaW5pbmcgdGhlIGN1cnZhdHVyZSBvZiB0aGUgY29ybmVyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c1wiPSBcImJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzIENTUyBwcm9wZXJ0eSByb3VuZHMgdGhlIGJvdHRvbS1yaWdodCBjb3JuZXIgb2YgYW4gZWxlbWVudCBieSBzcGVjaWZ5aW5nIHRoZSByYWRpdXMgKG9yIHRoZSByYWRpdXMgb2YgdGhlIHNlbWktbWFqb3IgYW5kIHNlbWktbWlub3IgYXhlcykgb2YgdGhlIGVsbGlwc2UgZGVmaW5pbmcgdGhlIGN1cnZhdHVyZSBvZiB0aGUgY29ybmVyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c1wiPSBcImJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItYm90dG9tLXN0eWxlIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBsaW5lIHN0eWxlIG9mIGFuIGVsZW1lbnQncyBib3R0b20gYm9yZGVyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWJvdHRvbS1zdHlsZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1ib3R0b20tc3R5bGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWJvdHRvbS1zdHlsZVwiPSBcImJvcmRlci1ib3R0b20tc3R5bGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1ib3R0b20td2lkdGggQ1NTIHByb3BlcnR5IHNldHMgdGhlIHdpZHRoIG9mIHRoZSBib3R0b20gYm9yZGVyIG9mIGFuIGVsZW1lbnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItYm90dG9tLXdpZHRoIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWJvdHRvbS13aWR0aFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItYm90dG9tLXdpZHRoXCI9IFwiYm9yZGVyLWJvdHRvbS13aWR0aFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWNvbGxhcHNlIENTUyBwcm9wZXJ0eSBzZXRzIHdoZXRoZXIgY2VsbHMgaW5zaWRlIGEgJmx0O3RhYmxlJmd0OyBoYXZlIHNoYXJlZCBvciBzZXBhcmF0ZSBib3JkZXJzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWNvbGxhcHNlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWNvbGxhcHNlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1jb2xsYXBzZVwiPSBcImJvcmRlci1jb2xsYXBzZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWNvbG9yIHNob3J0aGFuZCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgY29sb3Igb2YgYW4gZWxlbWVudCdzIGJvcmRlci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1jb2xvciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1jb2xvclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIj0gXCJib3JkZXItY29sb3JcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1lbmQtZW5kLXJhZGl1cyBDU1MgcHJvcGVydHkgZGVmaW5lcyBhIGxvZ2ljYWwgYm9yZGVyIHJhZGl1cyBvbiBhbiBlbGVtZW50LCB3aGljaCBtYXBzIHRvIGEgcGh5c2ljYWwgYm9yZGVyIHJhZGl1cyB0aGF0IGRlcGVuZHMgb24gdGhlIGVsZW1lbnQncyB3cml0aW5nLW1vZGUsIGRpcmVjdGlvbiwgYW5kIHRleHQtb3JpZW50YXRpb24uIFRoaXMgaXMgdXNlZnVsIHdoZW4gYnVpbGRpbmcgc3R5bGVzIHRvIHdvcmsgcmVnYXJkbGVzcyBvZiB0aGUgdGV4dCBvcmllbnRhdGlvbiBhbmQmbmJzcDt3cml0aW5nIG1vZGUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItZW5kLWVuZC1yYWRpdXMgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItZW5kLWVuZC1yYWRpdXNcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWVuZC1lbmQtcmFkaXVzXCI9IFwiYm9yZGVyLWVuZC1lbmQtcmFkaXVzXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItZW5kLXN0YXJ0LXJhZGl1cyBDU1MgcHJvcGVydHkgZGVmaW5lcyBhIGxvZ2ljYWwgYm9yZGVyIHJhZGl1cyBvbiBhbiBlbGVtZW50LCB3aGljaCBtYXBzIHRvIGEgcGh5c2ljYWwgYm9yZGVyIHJhZGl1cyZuYnNwO2RlcGVuZGluZyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi4mbmJzcDtUaGlzIGlzIHVzZWZ1bCB3aGVuIGJ1aWxkaW5nIHN0eWxlcyB0byB3b3JrIHJlZ2FyZGxlc3Mgb2YgdGhlIHRleHQgb3JpZW50YXRpb24gYW5kJm5ic3A7d3JpdGluZyBtb2RlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWVuZC1zdGFydC1yYWRpdXMgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItZW5kLXN0YXJ0LXJhZGl1c1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItZW5kLXN0YXJ0LXJhZGl1c1wiPSBcImJvcmRlci1lbmQtc3RhcnQtcmFkaXVzXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItaW1hZ2UgQ1NTIHByb3BlcnR5IGRyYXdzIGFuIGltYWdlIGFyb3VuZCBhIGdpdmVuIGVsZW1lbnQuIEl0IHJlcGxhY2VzIHRoZSBlbGVtZW50J3MgcmVndWxhciBib3JkZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItaW1hZ2UgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItaW1hZ2VcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWltYWdlXCI9IFwiYm9yZGVyLWltYWdlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItaW1hZ2Utb3V0c2V0IENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBkaXN0YW5jZSBieSB3aGljaCBhbiBlbGVtZW50J3MgYm9yZGVyIGltYWdlIGlzIHNldCBvdXQgZnJvbSBpdHMgYm9yZGVyIGJveC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1pbWFnZS1vdXRzZXQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItaW1hZ2Utb3V0c2V0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1pbWFnZS1vdXRzZXRcIj0gXCJib3JkZXItaW1hZ2Utb3V0c2V0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItaW1hZ2UtcmVwZWF0IENTUyBwcm9wZXJ0eSBkZWZpbmVzIGhvdyB0aGUgZWRnZSByZWdpb25zIG9mIGEgc291cmNlIGltYWdlIGFyZSBhZGp1c3RlZCB0byBmaXQgdGhlIGRpbWVuc2lvbnMgb2YgYW4gZWxlbWVudCdzIGJvcmRlciBpbWFnZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1pbWFnZS1yZXBlYXQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItaW1hZ2UtcmVwZWF0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1pbWFnZS1yZXBlYXRcIj0gXCJib3JkZXItaW1hZ2UtcmVwZWF0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItaW1hZ2Utc2xpY2UgQ1NTIHByb3BlcnR5IGRpdmlkZXMgdGhlIGltYWdlIHNwZWNpZmllZCBieSBib3JkZXItaW1hZ2Utc291cmNlIGludG8gcmVnaW9ucy4gVGhlc2UgcmVnaW9ucyBmb3JtIHRoZSBjb21wb25lbnRzIG9mIGFuIGVsZW1lbnQncyBib3JkZXIgaW1hZ2UuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItaW1hZ2Utc2xpY2UgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItaW1hZ2Utc2xpY2VcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWltYWdlLXNsaWNlXCI9IFwiYm9yZGVyLWltYWdlLXNsaWNlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItaW1hZ2Utc291cmNlIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBzb3VyY2UgaW1hZ2UgdXNlZCB0byBjcmVhdGUgYW4gZWxlbWVudCdzIGJvcmRlciBpbWFnZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1pbWFnZS1zb3VyY2UgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItaW1hZ2Utc291cmNlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1pbWFnZS1zb3VyY2VcIj0gXCJib3JkZXItaW1hZ2Utc291cmNlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItaW1hZ2Utd2lkdGggQ1NTIHByb3BlcnR5IHNldHMgdGhlIHdpZHRoIG9mIGFuIGVsZW1lbnQncyBib3JkZXIgaW1hZ2UuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItaW1hZ2Utd2lkdGggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItaW1hZ2Utd2lkdGhcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWltYWdlLXdpZHRoXCI9IFwiYm9yZGVyLWltYWdlLXdpZHRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItaW5saW5lIENTUyBwcm9wZXJ0eSBpcyBhIHNob3J0aGFuZCBwcm9wZXJ0eSBmb3Igc2V0dGluZyB0aGUgaW5kaXZpZHVhbCBsb2dpY2FsIGlubGluZSBib3JkZXIgcHJvcGVydHkgdmFsdWVzIGluIGEgc2luZ2xlIHBsYWNlIGluIHRoZSBzdHlsZSBzaGVldC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1pbmxpbmUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItaW5saW5lXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1pbmxpbmVcIj0gXCJib3JkZXItaW5saW5lXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItaW5saW5lLWNvbG9yIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBjb2xvciBvZiB0aGUgbG9naWNhbCBpbmxpbmUgYm9yZGVycyBvZiBhbiBlbGVtZW50LCB3aGljaCBtYXBzIHRvIGEgcGh5c2ljYWwgYm9yZGVyIGNvbG9yIGRlcGVuZGluZyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmcgbW9kZSwgZGlyZWN0aW9uYWxpdHksIGFuZCB0ZXh0IG9yaWVudGF0aW9uLiBJdCBjb3JyZXNwb25kcyB0byB0aGUgYm9yZGVyLXRvcC1jb2xvciBhbmQgYm9yZGVyLWJvdHRvbS1jb2xvciwgb3IgYm9yZGVyLXJpZ2h0LWNvbG9yIGFuZCBib3JkZXItbGVmdC1jb2xvciBwcm9wZXJ0eSBkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBkZWZpbmVkIGZvciB3cml0aW5nLW1vZGUsIGRpcmVjdGlvbiwgYW5kIHRleHQtb3JpZW50YXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItaW5saW5lLWNvbG9yIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWlubGluZS1jb2xvclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItaW5saW5lLWNvbG9yXCI9IFwiYm9yZGVyLWlubGluZS1jb2xvclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWlubGluZS1lbmQgQ1NTIHByb3BlcnR5IGlzIGEgc2hvcnRoYW5kIHByb3BlcnR5IGZvciBzZXR0aW5nIHRoZSBpbmRpdmlkdWFsIGxvZ2ljYWwgaW5saW5lLWVuZCBib3JkZXIgcHJvcGVydHkgdmFsdWVzIGluIGEgc2luZ2xlIHBsYWNlIGluIHRoZSBzdHlsZSBzaGVldC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1pbmxpbmUtZW5kIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWlubGluZS1lbmRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWlubGluZS1lbmRcIj0gXCJib3JkZXItaW5saW5lLWVuZFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWlubGluZS1lbmQtY29sb3IgQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIGNvbG9yIG9mIHRoZSBsb2dpY2FsIGlubGluZS1lbmQgYm9yZGVyIG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gYSBwaHlzaWNhbCBib3JkZXIgY29sb3IgZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uIEl0IGNvcnJlc3BvbmRzIHRvIHRoZSBib3JkZXItdG9wLWNvbG9yLCBib3JkZXItcmlnaHQtY29sb3IsIGJvcmRlci1ib3R0b20tY29sb3IsIG9yIGJvcmRlci1sZWZ0LWNvbG9yIHByb3BlcnR5IGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIGRlZmluZWQgZm9yIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1pbmxpbmUtZW5kLWNvbG9yIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWlubGluZS1lbmQtY29sb3JcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWlubGluZS1lbmQtY29sb3JcIj0gXCJib3JkZXItaW5saW5lLWVuZC1jb2xvclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWlubGluZS1lbmQtc3R5bGUgQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIHN0eWxlIG9mIHRoZSBsb2dpY2FsIGlubGluZSBlbmQgYm9yZGVyIG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gYSBwaHlzaWNhbCBib3JkZXIgc3R5bGUgZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uIEl0IGNvcnJlc3BvbmRzIHRvIHRoZSBib3JkZXItdG9wLXN0eWxlLCBib3JkZXItcmlnaHQtc3R5bGUsIGJvcmRlci1ib3R0b20tc3R5bGUsIG9yIGJvcmRlci1sZWZ0LXN0eWxlIHByb3BlcnR5IGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIGRlZmluZWQgZm9yIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1pbmxpbmUtZW5kLXN0eWxlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWlubGluZS1lbmQtc3R5bGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWlubGluZS1lbmQtc3R5bGVcIj0gXCJib3JkZXItaW5saW5lLWVuZC1zdHlsZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWlubGluZS1lbmQtd2lkdGggQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIHdpZHRoIG9mIHRoZSBsb2dpY2FsIGlubGluZS1lbmQgYm9yZGVyIG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gYSBwaHlzaWNhbCBib3JkZXIgd2lkdGggZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uIEl0IGNvcnJlc3BvbmRzIHRvIHRoZSBib3JkZXItdG9wLXdpZHRoLCBib3JkZXItcmlnaHQtd2lkdGgsIGJvcmRlci1ib3R0b20td2lkdGgsIG9yIGJvcmRlci1sZWZ0LXdpZHRoIHByb3BlcnR5IGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIGRlZmluZWQgZm9yIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1pbmxpbmUtZW5kLXdpZHRoIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWlubGluZS1lbmQtd2lkdGhcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWlubGluZS1lbmQtd2lkdGhcIj0gXCJib3JkZXItaW5saW5lLWVuZC13aWR0aFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWlubGluZS1zdGFydCBDU1MgcHJvcGVydHkgaXMgYSBzaG9ydGhhbmQgcHJvcGVydHkgZm9yIHNldHRpbmcgdGhlIGluZGl2aWR1YWwgbG9naWNhbCBpbmxpbmUtc3RhcnQgYm9yZGVyIHByb3BlcnR5IHZhbHVlcyBpbiBhIHNpbmdsZSBwbGFjZSBpbiB0aGUgc3R5bGUgc2hlZXQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItaW5saW5lLXN0YXJ0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWlubGluZS1zdGFydFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItaW5saW5lLXN0YXJ0XCI9IFwiYm9yZGVyLWlubGluZS1zdGFydFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWlubGluZS1zdGFydC1jb2xvciBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgY29sb3Igb2YgdGhlIGxvZ2ljYWwgaW5saW5lIHN0YXJ0IGJvcmRlciBvZiBhbiBlbGVtZW50LCB3aGljaCBtYXBzIHRvIGEgcGh5c2ljYWwgYm9yZGVyIGNvbG9yIGRlcGVuZGluZyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmcgbW9kZSwgZGlyZWN0aW9uYWxpdHksIGFuZCB0ZXh0IG9yaWVudGF0aW9uLiBJdCBjb3JyZXNwb25kcyB0byB0aGUgYm9yZGVyLXRvcC1jb2xvciwgYm9yZGVyLXJpZ2h0LWNvbG9yLCBib3JkZXItYm90dG9tLWNvbG9yLCBvciBib3JkZXItbGVmdC1jb2xvciBwcm9wZXJ0eSBkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBkZWZpbmVkIGZvciB3cml0aW5nLW1vZGUsIGRpcmVjdGlvbiwgYW5kIHRleHQtb3JpZW50YXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItaW5saW5lLXN0YXJ0LWNvbG9yIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWlubGluZS1zdGFydC1jb2xvclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItaW5saW5lLXN0YXJ0LWNvbG9yXCI9IFwiYm9yZGVyLWlubGluZS1zdGFydC1jb2xvclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWlubGluZS1zdGFydC1zdHlsZSBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgc3R5bGUgb2YgdGhlIGxvZ2ljYWwgaW5saW5lIHN0YXJ0IGJvcmRlciBvZiBhbiBlbGVtZW50LCB3aGljaCBtYXBzIHRvIGEgcGh5c2ljYWwgYm9yZGVyIHN0eWxlIGRlcGVuZGluZyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmcgbW9kZSwgZGlyZWN0aW9uYWxpdHksIGFuZCB0ZXh0IG9yaWVudGF0aW9uLiBJdCBjb3JyZXNwb25kcyB0byB0aGUgYm9yZGVyLXRvcC1zdHlsZSwgYm9yZGVyLXJpZ2h0LXN0eWxlLCBib3JkZXItYm90dG9tLXN0eWxlLCBvciBib3JkZXItbGVmdC1zdHlsZSBwcm9wZXJ0eSBkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBkZWZpbmVkIGZvciB3cml0aW5nLW1vZGUsIGRpcmVjdGlvbiwgYW5kIHRleHQtb3JpZW50YXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWlubGluZS1zdGFydC1zdHlsZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlXCI9IFwiYm9yZGVyLWlubGluZS1zdGFydC1zdHlsZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWlubGluZS1zdGFydC13aWR0aCBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgd2lkdGggb2YgdGhlIGxvZ2ljYWwgaW5saW5lLXN0YXJ0IGJvcmRlciBvZiBhbiBlbGVtZW50LCB3aGljaCBtYXBzIHRvIGEgcGh5c2ljYWwgYm9yZGVyIHdpZHRoIGRlcGVuZGluZyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmcgbW9kZSwgZGlyZWN0aW9uYWxpdHksIGFuZCB0ZXh0IG9yaWVudGF0aW9uLiBJdCBjb3JyZXNwb25kcyB0byB0aGUgYm9yZGVyLXRvcC13aWR0aCwgYm9yZGVyLXJpZ2h0LXdpZHRoLCBib3JkZXItYm90dG9tLXdpZHRoLCBvciBib3JkZXItbGVmdC13aWR0aCBwcm9wZXJ0eSBkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBkZWZpbmVkIGZvciB3cml0aW5nLW1vZGUsIGRpcmVjdGlvbiwgYW5kIHRleHQtb3JpZW50YXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWlubGluZS1zdGFydC13aWR0aFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoXCI9IFwiYm9yZGVyLWlubGluZS1zdGFydC13aWR0aFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWlubGluZS1zdHlsZSBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgc3R5bGUgb2YgdGhlIGxvZ2ljYWwgaW5saW5lJm5ic3A7Ym9yZGVycyBvZiBhbiBlbGVtZW50LCB3aGljaCBtYXBzIHRvIGEgcGh5c2ljYWwgYm9yZGVyIHN0eWxlIGRlcGVuZGluZyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmcgbW9kZSwgZGlyZWN0aW9uYWxpdHksIGFuZCB0ZXh0IG9yaWVudGF0aW9uLiBJdCBjb3JyZXNwb25kcyB0byB0aGUgYm9yZGVyLXRvcC1zdHlsZSBhbmQmbmJzcDtib3JkZXItYm90dG9tLXN0eWxlLCBvciZuYnNwO2JvcmRlci1sZWZ0LXN0eWxlIGFuZCZuYnNwO2JvcmRlci1yaWdodC1zdHlsZSBwcm9wZXJ0aWVzJm5ic3A7ZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZXMgZGVmaW5lZCBmb3Igd3JpdGluZy1tb2RlLCBkaXJlY3Rpb24sIGFuZCB0ZXh0LW9yaWVudGF0aW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWlubGluZS1zdHlsZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1pbmxpbmUtc3R5bGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWlubGluZS1zdHlsZVwiPSBcImJvcmRlci1pbmxpbmUtc3R5bGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1pbmxpbmUtd2lkdGggQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIHdpZHRoIG9mIHRoZSBsb2dpY2FsIGlubGluZSZuYnNwO2JvcmRlcnMgb2YgYW4gZWxlbWVudCwgd2hpY2ggbWFwcyB0byBhIHBoeXNpY2FsIGJvcmRlciB3aWR0aCBkZXBlbmRpbmcgb24gdGhlIGVsZW1lbnQncyB3cml0aW5nIG1vZGUsIGRpcmVjdGlvbmFsaXR5LCBhbmQgdGV4dCBvcmllbnRhdGlvbi4gSXQgY29ycmVzcG9uZHMgdG8gdGhlIGJvcmRlci10b3Atd2lkdGggYW5kJm5ic3A7Ym9yZGVyLWJvdHRvbS13aWR0aCwgb3IgYm9yZGVyLWxlZnQtd2lkdGgsIGFuZCZuYnNwO2JvcmRlci1yaWdodC13aWR0aCBwcm9wZXJ0eSBkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBkZWZpbmVkIGZvciB3cml0aW5nLW1vZGUsIGRpcmVjdGlvbiwgYW5kIHRleHQtb3JpZW50YXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItaW5saW5lLXdpZHRoIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWlubGluZS13aWR0aFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItaW5saW5lLXdpZHRoXCI9IFwiYm9yZGVyLWlubGluZS13aWR0aFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWxlZnQgc2hvcnRoYW5kIENTUyBwcm9wZXJ0eSBzZXRzIGFsbCB0aGUgcHJvcGVydGllcyBvZiBhbiBlbGVtZW50J3MgbGVmdCBib3JkZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItbGVmdCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1sZWZ0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1sZWZ0XCI9IFwiYm9yZGVyLWxlZnRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1sZWZ0LWNvbG9yIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBjb2xvciBvZiBhbiBlbGVtZW50J3MgbGVmdCBib3JkZXIuIEl0IGNhbiBhbHNvIGJlIHNldCB3aXRoIHRoZSBzaG9ydGhhbmQgQ1NTIHByb3BlcnRpZXMgYm9yZGVyLWNvbG9yIG9yIGJvcmRlci1sZWZ0LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWxlZnQtY29sb3IgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItbGVmdC1jb2xvclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItbGVmdC1jb2xvclwiPSBcImJvcmRlci1sZWZ0LWNvbG9yXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItbGVmdC1zdHlsZSBDU1MgcHJvcGVydHkgc2V0cyB0aGUgbGluZSBzdHlsZSBvZiBhbiBlbGVtZW50J3MgbGVmdCBib3JkZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItbGVmdC1zdHlsZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1sZWZ0LXN0eWxlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1sZWZ0LXN0eWxlXCI9IFwiYm9yZGVyLWxlZnQtc3R5bGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1sZWZ0LXdpZHRoIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSB3aWR0aCBvZiB0aGUgbGVmdCBib3JkZXIgb2YgYW4gZWxlbWVudC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1sZWZ0LXdpZHRoIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWxlZnQtd2lkdGhcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWxlZnQtd2lkdGhcIj0gXCJib3JkZXItbGVmdC13aWR0aFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLXJhZGl1cyBDU1MgcHJvcGVydHkgcm91bmRzIHRoZSBjb3JuZXJzIG9mIGFuIGVsZW1lbnQncyBvdXRlciBib3JkZXIgZWRnZS4gWW91IGNhbiBzZXQgYSBzaW5nbGUgcmFkaXVzIHRvIG1ha2UgY2lyY3VsYXIgY29ybmVycywgb3IgdHdvIHJhZGlpIHRvIG1ha2UgZWxsaXB0aWNhbCBjb3JuZXJzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLXJhZGl1cyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1yYWRpdXNcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLXJhZGl1c1wiPSBcImJvcmRlci1yYWRpdXNcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1yaWdodCBzaG9ydGhhbmQgQ1NTIHByb3BlcnR5IHNldHMgYWxsIHRoZSBwcm9wZXJ0aWVzIG9mIGFuIGVsZW1lbnQncyByaWdodCBib3JkZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItcmlnaHQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItcmlnaHRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLXJpZ2h0XCI9IFwiYm9yZGVyLXJpZ2h0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItcmlnaHQtY29sb3IgQ1NTIHByb3BlcnR5IHNldHMgdGhlIGNvbG9yIG9mIGFuIGVsZW1lbnQncyByaWdodCBib3JkZXIuIEl0IGNhbiBhbHNvIGJlIHNldCB3aXRoIHRoZSBzaG9ydGhhbmQgQ1NTIHByb3BlcnRpZXMgYm9yZGVyLWNvbG9yIG9yIGJvcmRlci1yaWdodC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1yaWdodC1jb2xvciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1yaWdodC1jb2xvclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItcmlnaHQtY29sb3JcIj0gXCJib3JkZXItcmlnaHQtY29sb3JcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1yaWdodC1zdHlsZSBDU1MgcHJvcGVydHkgc2V0cyB0aGUgbGluZSBzdHlsZSBvZiBhbiBlbGVtZW50J3MgcmlnaHQgYm9yZGVyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLXJpZ2h0LXN0eWxlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLXJpZ2h0LXN0eWxlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1yaWdodC1zdHlsZVwiPSBcImJvcmRlci1yaWdodC1zdHlsZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLXJpZ2h0LXdpZHRoIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSB3aWR0aCBvZiB0aGUgcmlnaHQgYm9yZGVyIG9mIGFuIGVsZW1lbnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItcmlnaHQtd2lkdGggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItcmlnaHQtd2lkdGhcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLXJpZ2h0LXdpZHRoXCI9IFwiYm9yZGVyLXJpZ2h0LXdpZHRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItc3BhY2luZyBDU1MgcHJvcGVydHkgc2V0cyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgYm9yZGVycyBvZiBhZGphY2VudCAmbHQ7dGFibGUmZ3Q7IGNlbGxzLiBUaGlzIHByb3BlcnR5IGFwcGxpZXMgb25seSB3aGVuIGJvcmRlci1jb2xsYXBzZSBpcyBzZXBhcmF0ZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1zcGFjaW5nIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLXNwYWNpbmdcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLXNwYWNpbmdcIj0gXCJib3JkZXItc3BhY2luZ1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLXN0YXJ0LWVuZC1yYWRpdXMgQ1NTIHByb3BlcnR5IGRlZmluZXMgYSBsb2dpY2FsIGJvcmRlciByYWRpdXMgb24gYW4gZWxlbWVudCwgd2hpY2ggbWFwcyB0byBhIHBoeXNpY2FsIGJvcmRlciByYWRpdXMmbmJzcDtkZXBlbmRpbmcgb24gdGhlIGVsZW1lbnQncyB3cml0aW5nLW1vZGUsIGRpcmVjdGlvbiwgYW5kIHRleHQtb3JpZW50YXRpb24uJm5ic3A7VGhpcyBpcyB1c2VmdWwgd2hlbiBidWlsZGluZyBzdHlsZXMgdG8gd29yayByZWdhcmRsZXNzIG9mIHRoZSB0ZXh0IG9yaWVudGF0aW9uIGFuZCZuYnNwO3dyaXRpbmcgbW9kZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1zdGFydC1lbmQtcmFkaXVzIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLXN0YXJ0LWVuZC1yYWRpdXNcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLXN0YXJ0LWVuZC1yYWRpdXNcIj0gXCJib3JkZXItc3RhcnQtZW5kLXJhZGl1c1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLXN0YXJ0LXN0YXJ0LXJhZGl1cyBDU1MgcHJvcGVydHkgZGVmaW5lcyBhIGxvZ2ljYWwgYm9yZGVyIHJhZGl1cyBvbiBhbiBlbGVtZW50LCB3aGljaCBtYXBzIHRvIGEgcGh5c2ljYWwgYm9yZGVyIHJhZGl1cyB0aGF0IGRlcGVuZHMgb24gdGhlIGVsZW1lbnQncyB3cml0aW5nLW1vZGUsIGRpcmVjdGlvbiwgYW5kIHRleHQtb3JpZW50YXRpb24uIFRoaXMgaXMgdXNlZnVsIHdoZW4gYnVpbGRpbmcgc3R5bGVzIHRvIHdvcmsgcmVnYXJkbGVzcyBvZiB0aGUgdGV4dCBvcmllbnRhdGlvbiBhbmQmbmJzcDt3cml0aW5nIG1vZGUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItc3RhcnQtc3RhcnQtcmFkaXVzIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLXN0YXJ0LXN0YXJ0LXJhZGl1c1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItc3RhcnQtc3RhcnQtcmFkaXVzXCI9IFwiYm9yZGVyLXN0YXJ0LXN0YXJ0LXJhZGl1c1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLXN0eWxlIHNob3J0aGFuZCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgbGluZSBzdHlsZSBmb3IgYWxsIGZvdXIgc2lkZXMgb2YgYW4gZWxlbWVudCdzIGJvcmRlci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1zdHlsZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1zdHlsZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItc3R5bGVcIj0gXCJib3JkZXItc3R5bGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci10b3Agc2hvcnRoYW5kIENTUyBwcm9wZXJ0eSBzZXRzIGFsbCB0aGUgcHJvcGVydGllcyBvZiBhbiBlbGVtZW50J3MgdG9wIGJvcmRlci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci10b3AgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItdG9wXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci10b3BcIj0gXCJib3JkZXItdG9wXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItdG9wLWNvbG9yIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBjb2xvciBvZiBhbiBlbGVtZW50J3MgdG9wIGJvcmRlci4gSXQgY2FuIGFsc28gYmUgc2V0IHdpdGggdGhlIHNob3J0aGFuZCBDU1MgcHJvcGVydGllcyBib3JkZXItY29sb3Igb3IgYm9yZGVyLXRvcC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci10b3AtY29sb3IgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItdG9wLWNvbG9yXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci10b3AtY29sb3JcIj0gXCJib3JkZXItdG9wLWNvbG9yXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItdG9wLWxlZnQtcmFkaXVzIENTUyBwcm9wZXJ0eSByb3VuZHMgdGhlIHRvcC1sZWZ0IGNvcm5lciBvZiBhbiBlbGVtZW50IGJ5IHNwZWNpZnlpbmcgdGhlIHJhZGl1cyAob3IgdGhlIHJhZGl1cyBvZiB0aGUgc2VtaS1tYWpvciBhbmQgc2VtaS1taW5vciBheGVzKSBvZiB0aGUgZWxsaXBzZSBkZWZpbmluZyB0aGUgY3VydmF0dXJlIG9mIHRoZSBjb3JuZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItdG9wLWxlZnQtcmFkaXVzIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1c1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItdG9wLWxlZnQtcmFkaXVzXCI9IFwiYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMgQ1NTIHByb3BlcnR5IHJvdW5kcyB0aGUgdG9wLXJpZ2h0IGNvcm5lciBvZiBhbiBlbGVtZW50IGJ5IHNwZWNpZnlpbmcgdGhlIHJhZGl1cyAob3IgdGhlIHJhZGl1cyBvZiB0aGUgc2VtaS1tYWpvciBhbmQgc2VtaS1taW5vciBheGVzKSBvZiB0aGUgZWxsaXBzZSBkZWZpbmluZyB0aGUgY3VydmF0dXJlIG9mIHRoZSBjb3JuZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci10b3AtcmlnaHQtcmFkaXVzXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci10b3AtcmlnaHQtcmFkaXVzXCI9IFwiYm9yZGVyLXRvcC1yaWdodC1yYWRpdXNcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci10b3Atc3R5bGUgQ1NTIHByb3BlcnR5IHNldHMgdGhlIGxpbmUgc3R5bGUgb2YgYW4gZWxlbWVudCdzIHRvcCBib3JkZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItdG9wLXN0eWxlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLXRvcC1zdHlsZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItdG9wLXN0eWxlXCI9IFwiYm9yZGVyLXRvcC1zdHlsZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLXRvcC13aWR0aCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgd2lkdGggb2YgdGhlIHRvcCBib3JkZXIgb2YgYW4gZWxlbWVudC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci10b3Atd2lkdGggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItdG9wLXdpZHRoXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci10b3Atd2lkdGhcIj0gXCJib3JkZXItdG9wLXdpZHRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItd2lkdGggc2hvcnRoYW5kIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSB3aWR0aCBvZiBhbiBlbGVtZW50J3MgYm9yZGVyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLXdpZHRoIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLXdpZHRoXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci13aWR0aFwiPSBcImJvcmRlci13aWR0aFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm90dG9tIENTUyBwcm9wZXJ0eSBwYXJ0aWNpcGF0ZXMgaW4gc2V0dGluZyB0aGUgdmVydGljYWwgcG9zaXRpb24gb2YgYSBwb3NpdGlvbmVkIGVsZW1lbnQuIEl0IGhhcyBubyBlZmZlY3Qgb24gbm9uLXBvc2l0aW9uZWQgZWxlbWVudHMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3R0b20gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3R0b21cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYm90dG9tPSBcImJvdHRvbVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm94LXNoYWRvdyBDU1MgcHJvcGVydHkgYWRkcyBzaGFkb3cgZWZmZWN0cyBhcm91bmQgYW4gZWxlbWVudCdzIGZyYW1lLiBZb3UgY2FuIHNldCBtdWx0aXBsZSBlZmZlY3RzIHNlcGFyYXRlZCBieSBjb21tYXMuIEEgYm94IHNoYWRvdyBpcyBkZXNjcmliZWQgYnkgWCBhbmQgWSBvZmZzZXRzIHJlbGF0aXZlIHRvIHRoZSBlbGVtZW50LCBibHVyIGFuZCBzcHJlYWQgcmFkaXVzLCBhbmQgY29sb3IuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3gtc2hhZG93IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym94LXNoYWRvd1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3gtc2hhZG93XCI9IFwiYm94LXNoYWRvd1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm94LXNpemluZyBDU1MgcHJvcGVydHkgc2V0cyBob3cgdGhlIHRvdGFsIHdpZHRoIGFuZCBoZWlnaHQgb2YgYW4gZWxlbWVudCBpcyBjYWxjdWxhdGVkLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm94LXNpemluZyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJveC1zaXppbmdcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm94LXNpemluZ1wiPSBcImJveC1zaXppbmdcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJyZWFrLWFmdGVyIENTUyBwcm9wZXJ0eSBzZXRzIGhvdyBwYWdlLCBjb2x1bW4sIG9yIHJlZ2lvbiBicmVha3Mgc2hvdWxkIGJlaGF2ZSBhZnRlciBhIGdlbmVyYXRlZCBib3guIElmIHRoZXJlIGlzIG5vIGdlbmVyYXRlZCBib3gsIHRoZSBwcm9wZXJ0eSBpcyBpZ25vcmVkLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYnJlYWstYWZ0ZXIgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1icmVhay1hZnRlclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJicmVhay1hZnRlclwiPSBcImJyZWFrLWFmdGVyXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBicmVhay1iZWZvcmUgQ1NTIHByb3BlcnR5IHNldHMgaG93IHBhZ2UsIGNvbHVtbiwgb3IgcmVnaW9uIGJyZWFrcyBzaG91bGQgYmVoYXZlIGJlZm9yZSBhIGdlbmVyYXRlZCBib3guIElmIHRoZXJlIGlzIG5vIGdlbmVyYXRlZCBib3gsIHRoZSBwcm9wZXJ0eSBpcyBpZ25vcmVkLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYnJlYWstYmVmb3JlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YnJlYWstYmVmb3JlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJyZWFrLWJlZm9yZVwiPSBcImJyZWFrLWJlZm9yZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYnJlYWstaW5zaWRlIENTUyBwcm9wZXJ0eSBzZXRzIGhvdyBwYWdlLCBjb2x1bW4sIG9yIHJlZ2lvbiBicmVha3Mgc2hvdWxkIGJlaGF2ZSBpbnNpZGUgYSBnZW5lcmF0ZWQgYm94LiBJZiB0aGVyZSBpcyBubyBnZW5lcmF0ZWQgYm94LCB0aGUgcHJvcGVydHkgaXMgaWdub3JlZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JyZWFrLWluc2lkZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJyZWFrLWluc2lkZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJicmVhay1pbnNpZGVcIj0gXCJicmVhay1pbnNpZGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJidWZmZXJlZC1yZW5kZXJpbmdcIj0gXCJidWZmZXJlZC1yZW5kZXJpbmdcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNhcHRpb24tc2lkZSBDU1MgcHJvcGVydHkgcHV0cyB0aGUgY29udGVudCBvZiBhIHRhYmxlJ3MgJmx0O2NhcHRpb24mZ3Q7IG9uIHRoZSBzcGVjaWZpZWQgc2lkZS4gVGhlIHZhbHVlcyBhcmUgcmVsYXRpdmUgdG8gdGhlIHdyaXRpbmctbW9kZSBvZiB0aGUgdGFibGUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jYXB0aW9uLXNpZGUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1jYXB0aW9uLXNpZGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiY2FwdGlvbi1zaWRlXCI9IFwiY2FwdGlvbi1zaWRlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBjYXJldC1jb2xvciBDU1MgcHJvcGVydHkgc2V0cyB0aGUgY29sb3Igb2YgdGhlIGluc2VydGlvbiBjYXJldCwgdGhlIHZpc2libGUgbWFya2VyIHdoZXJlIHRoZSBuZXh0IGNoYXJhY3RlciB0eXBlZCB3aWxsIGJlIGluc2VydGVkLiBUaGlzIGlzIHNvbWV0aW1lcyByZWZlcnJlZCB0byBhcyB0aGUgdGV4dCBpbnB1dCBjdXJzb3IuIFRoZSBjYXJldCBhcHBlYXJzIGluIGVsZW1lbnRzIHN1Y2ggYXMgJmx0O2lucHV0Jmd0OyBvciB0aG9zZSB3aXRoIHRoZSBjb250ZW50ZWRpdGFibGUgYXR0cmlidXRlLiBUaGUgY2FyZXQgaXMgdHlwaWNhbGx5IGEgdGhpbiB2ZXJ0aWNhbCBsaW5lIHRoYXQgZmxhc2hlcyB0byBoZWxwIG1ha2UgaXQgbW9yZSBub3RpY2VhYmxlLiBCeSBkZWZhdWx0LCBpdCBpcyBibGFjaywgYnV0IGl0cyBjb2xvciBjYW4gYmUgYWx0ZXJlZCB3aXRoIHRoaXMgcHJvcGVydHkuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jYXJldC1jb2xvciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNhcmV0LWNvbG9yXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImNhcmV0LWNvbG9yXCI9IFwiY2FyZXQtY29sb3JcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNsZWFyIENTUyBwcm9wZXJ0eSBzZXRzIHdoZXRoZXIgYW4gZWxlbWVudCBtdXN0IGJlIG1vdmVkIGJlbG93IChjbGVhcmVkKSBmbG9hdGluZyBlbGVtZW50cyB0aGF0IHByZWNlZGUgaXQuIFRoZSBjbGVhciBwcm9wZXJ0eSBhcHBsaWVzIHRvIGZsb2F0aW5nIGFuZCBub24tZmxvYXRpbmcgZWxlbWVudHMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jbGVhciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNsZWFyXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsZWFyPSBcImNsZWFyXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBjbGlwIENTUyBwcm9wZXJ0eSBkZWZpbmVzIGEgdmlzaWJsZSBwb3J0aW9uIG9mIGFuIGVsZW1lbnQuIFRoZSBjbGlwIHByb3BlcnR5IGFwcGxpZXMgb25seSB0byBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQgZWxlbWVudHMg4oCUIHRoYXQgaXMsIGVsZW1lbnRzIHdpdGggcG9zaXRpb246YWJzb2x1dGUgb3IgcG9zaXRpb246Zml4ZWQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jbGlwIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y2xpcFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGlwPSBcImNsaXBcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNsaXAtcGF0aCBDU1MgcHJvcGVydHkgY3JlYXRlcyBhIGNsaXBwaW5nIHJlZ2lvbiB0aGF0IHNldHMgd2hhdCBwYXJ0IG9mIGFuIGVsZW1lbnQgc2hvdWxkIGJlIHNob3duLiBQYXJ0cyB0aGF0IGFyZSBpbnNpZGUgdGhlIHJlZ2lvbiBhcmUgc2hvd24sIHdoaWxlIHRob3NlIG91dHNpZGUgYXJlIGhpZGRlbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NsaXAtcGF0aCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNsaXAtcGF0aFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJjbGlwLXBhdGhcIj0gXCJjbGlwLXBhdGhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNsaXAtcnVsZSBhdHRyaWJ1dGUgb25seSBhcHBsaWVzIHRvIGdyYXBoaWNzIGVsZW1lbnRzIHRoYXQgYXJlIGNvbnRhaW5lZCB3aXRoaW4gYSAmbHQ7Y2xpcFBhdGgmZ3Q7IGVsZW1lbnQuIFRoZSBjbGlwLXJ1bGUgYXR0cmlidXRlIGJhc2ljYWxseSB3b3JrcyBhcyB0aGUgZmlsbC1ydWxlIGF0dHJpYnV0ZSwgZXhjZXB0IHRoYXQgaXQgYXBwbGllcyB0byAmbHQ7Y2xpcFBhdGgmZ3Q7IGRlZmluaXRpb25zLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL2NsaXAtcnVsZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNsaXAtcnVsZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJjbGlwLXJ1bGVcIj0gXCJjbGlwLXJ1bGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNvbG9yIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBmb3JlZ3JvdW5kIGNvbG9yIHZhbHVlIG9mIGFuIGVsZW1lbnQncyB0ZXh0IGFuZCB0ZXh0IGRlY29yYXRpb25zLCBhbmQgc2V0cyB0aGUgJmx0O2N1cnJlbnRjb2xvciZndDsgdmFsdWUuIGN1cnJlbnRjb2xvciBtYXkgYmUgdXNlZCBhcyBhbiBpbmRpcmVjdCB2YWx1ZSBvbiBvdGhlciBwcm9wZXJ0aWVzIGFuZCBpcyB0aGUgZGVmYXVsdCBmb3Igb3RoZXIgY29sb3IgcHJvcGVydGllcywgc3VjaCBhcyBib3JkZXItY29sb3IuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jb2xvciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNvbG9yXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbG9yPSBcImNvbG9yXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBjb2xvci1pbnRlcnBvbGF0aW9uIGF0dHJpYnV0ZSBzcGVjaWZpZXMgdGhlIGNvbG9yIHNwYWNlIGZvciBncmFkaWVudCBpbnRlcnBvbGF0aW9ucywgY29sb3IgYW5pbWF0aW9ucywgYW5kIGFscGhhIGNvbXBvc2l0aW5nLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL2NvbG9yLWludGVycG9sYXRpb24gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1jb2xvci1pbnRlcnBvbGF0aW9uXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImNvbG9yLWludGVycG9sYXRpb25cIj0gXCJjb2xvci1pbnRlcnBvbGF0aW9uXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMgYXR0cmlidXRlIHNwZWNpZmllcyB0aGUgY29sb3Igc3BhY2UgZm9yIGltYWdpbmcgb3BlcmF0aW9ucyBwZXJmb3JtZWQgdmlhIGZpbHRlciBlZmZlY3RzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVycyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNvbG9yLWludGVycG9sYXRpb24tZmlsdGVyc1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnNcIj0gXCJjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnNcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNvbG9yLXJlbmRlcmluZyBhdHRyaWJ1dGUgcHJvdmlkZXMgYSBoaW50IHRvIHRoZSBTVkcgdXNlciBhZ2VudCBhYm91dCBob3cgdG8gb3B0aW1pemUgaXRzIGNvbG9yIGludGVycG9sYXRpb24gYW5kIGNvbXBvc2l0aW5nIG9wZXJhdGlvbnMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NWRy9BdHRyaWJ1dGUvY29sb3ItcmVuZGVyaW5nIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y29sb3ItcmVuZGVyaW5nXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImNvbG9yLXJlbmRlcmluZ1wiPSBcImNvbG9yLXJlbmRlcmluZ1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY29sb3Itc2NoZW1lIENTUyBwcm9wZXJ0eSBhbGxvd3MgYW4gZWxlbWVudCB0byBpbmRpY2F0ZSB3aGljaCBjb2xvciBzY2hlbWVzIGl0IGNhbiBjb21mb3J0YWJseSBiZSByZW5kZXJlZCBpbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NvbG9yLXNjaGVtZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNvbG9yLXNjaGVtZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJjb2xvci1zY2hlbWVcIj0gXCJjb2xvci1zY2hlbWVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNvbHVtbi1jb3VudCBDU1MgcHJvcGVydHkgYnJlYWtzIGFuIGVsZW1lbnQncyBjb250ZW50IGludG8gdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgY29sdW1ucy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NvbHVtbi1jb3VudCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNvbHVtbi1jb3VudFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJjb2x1bW4tY291bnRcIj0gXCJjb2x1bW4tY291bnRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNvbHVtbi1maWxsIENTUyBwcm9wZXJ0eSBjb250cm9scyBob3cgYW4gZWxlbWVudCdzIGNvbnRlbnRzIGFyZSBiYWxhbmNlZCB3aGVuIGJyb2tlbiBpbnRvIGNvbHVtbnMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jb2x1bW4tZmlsbCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNvbHVtbi1maWxsXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImNvbHVtbi1maWxsXCI9IFwiY29sdW1uLWZpbGxcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNvbHVtbi1nYXAgQ1NTIHByb3BlcnR5IHNldHMgdGhlIHNpemUgb2YgdGhlIGdhcCAoZ3V0dGVyKSBiZXR3ZWVuIGFuIGVsZW1lbnQncyBjb2x1bW5zLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvY29sdW1uLWdhcCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNvbHVtbi1nYXBcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiY29sdW1uLWdhcFwiPSBcImNvbHVtbi1nYXBcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNvbHVtbi1ydWxlJm5ic3A7c2hvcnRoYW5kIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSB3aWR0aCwgc3R5bGUsIGFuZCBjb2xvciBvZiB0aGUgbGluZSBkcmF3biBiZXR3ZWVuIGNvbHVtbnMgaW4gYSBtdWx0aS1jb2x1bW4gbGF5b3V0LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvY29sdW1uLXJ1bGUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1jb2x1bW4tcnVsZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJjb2x1bW4tcnVsZVwiPSBcImNvbHVtbi1ydWxlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBjb2x1bW4tcnVsZS1jb2xvciBDU1MgcHJvcGVydHkgc2V0cyB0aGUgY29sb3Igb2YgdGhlIGxpbmUgZHJhd24gYmV0d2VlbiBjb2x1bW5zIGluIGEgbXVsdGktY29sdW1uIGxheW91dC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NvbHVtbi1ydWxlLWNvbG9yIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y29sdW1uLXJ1bGUtY29sb3JcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiY29sdW1uLXJ1bGUtY29sb3JcIj0gXCJjb2x1bW4tcnVsZS1jb2xvclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY29sdW1uLXJ1bGUtc3R5bGUgQ1NTIHByb3BlcnR5IHNldHMgdGhlIHN0eWxlIG9mIHRoZSBsaW5lIGRyYXduIGJldHdlZW4gY29sdW1ucyBpbiBhIG11bHRpLWNvbHVtbiBsYXlvdXQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jb2x1bW4tcnVsZS1zdHlsZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNvbHVtbi1ydWxlLXN0eWxlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImNvbHVtbi1ydWxlLXN0eWxlXCI9IFwiY29sdW1uLXJ1bGUtc3R5bGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNvbHVtbi1ydWxlLXdpZHRoIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSB3aWR0aCBvZiB0aGUgbGluZSBkcmF3biBiZXR3ZWVuIGNvbHVtbnMgaW4gYSBtdWx0aS1jb2x1bW4gbGF5b3V0LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvY29sdW1uLXJ1bGUtd2lkdGggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1jb2x1bW4tcnVsZS13aWR0aFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJjb2x1bW4tcnVsZS13aWR0aFwiPSBcImNvbHVtbi1ydWxlLXdpZHRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBjb2x1bW4tc3BhbiBDU1MgcHJvcGVydHkgbWFrZXMgaXQgcG9zc2libGUgZm9yIGFuIGVsZW1lbnQgdG8gc3BhbiBhY3Jvc3MgYWxsIGNvbHVtbnMgd2hlbiBpdHMgdmFsdWUgaXMgc2V0IHRvIGFsbC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NvbHVtbi1zcGFuIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y29sdW1uLXNwYW5cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiY29sdW1uLXNwYW5cIj0gXCJjb2x1bW4tc3BhblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY29sdW1uLXdpZHRoIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBpZGVhbCBjb2x1bW4gd2lkdGggaW4gYSBtdWx0aS1jb2x1bW4gbGF5b3V0LiBUaGUgY29udGFpbmVyIHdpbGwgaGF2ZSBhcyBtYW55IGNvbHVtbnMgYXMgY2FuIGZpdCB3aXRob3V0IGFueSBvZiB0aGVtIGhhdmluZyBhIHdpZHRoIGxlc3MgdGhhbiB0aGUgY29sdW1uLXdpZHRoIHZhbHVlLiBJZiB0aGUgd2lkdGggb2YgdGhlIGNvbnRhaW5lciBpcyBuYXJyb3dlciB0aGFuIHRoZSBzcGVjaWZpZWQgdmFsdWUsIHRoZSBzaW5nbGUgY29sdW1uJ3Mgd2lkdGggd2lsbCBiZSBzbWFsbGVyIHRoYW4gdGhlIGRlY2xhcmVkIGNvbHVtbiB3aWR0aC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NvbHVtbi13aWR0aCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNvbHVtbi13aWR0aFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJjb2x1bW4td2lkdGhcIj0gXCJjb2x1bW4td2lkdGhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNvbHVtbnMgQ1NTIHNob3J0aGFuZCBwcm9wZXJ0eSBzZXRzIHRoZSBudW1iZXIgb2YgY29sdW1ucyB0byB1c2Ugd2hlbiBkcmF3aW5nIGFuIGVsZW1lbnQncyBjb250ZW50cywgYXMgd2VsbCBhcyB0aG9zZSBjb2x1bW5zJyB3aWR0aHMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jb2x1bW5zIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y29sdW1uc1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb2x1bW5zPSBcImNvbHVtbnNcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNvbnRhaW4gQ1NTIHByb3BlcnR5IGFsbG93cyBhbiBhdXRob3IgdG8gaW5kaWNhdGUgdGhhdCBhbiBlbGVtZW50IGFuZCBpdHMgY29udGVudHMgYXJlLCBhcyBtdWNoIGFzIHBvc3NpYmxlLCBpbmRlcGVuZGVudCBvZiB0aGUgcmVzdCBvZiB0aGUgZG9jdW1lbnQgdHJlZS4gVGhpcyBhbGxvd3MgdGhlIGJyb3dzZXIgdG8gcmVjYWxjdWxhdGUgbGF5b3V0LCBzdHlsZSwgcGFpbnQsIHNpemUsIG9yIGFueSBjb21iaW5hdGlvbiBvZiB0aGVtIGZvciBhIGxpbWl0ZWQgYXJlYSBvZiB0aGUgRE9NIGFuZCBub3QgdGhlIGVudGlyZSBwYWdlLCBsZWFkaW5nIHRvIG9idmlvdXMgcGVyZm9ybWFuY2UgYmVuZWZpdHMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jb250YWluIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y29udGFpblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb250YWluPSBcImNvbnRhaW5cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNvbnRhaW4taW50cmluc2ljLXNpemUgQ1NTIHByb3BlcnR5IGNvbnRyb2xzIHRoZSBuYXR1cmFsIHNpemUgb2YgYW4gZWxlbWVudCBzcGVjaWZpZWQgYnkgY29udGVudC12aXNpYmlsaXR5LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvY29udGFpbi1pbnRyaW5zaWMtc2l6ZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNvbnRhaW4taW50cmluc2ljLXNpemVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiY29udGFpbi1pbnRyaW5zaWMtc2l6ZVwiPSBcImNvbnRhaW4taW50cmluc2ljLXNpemVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNvbnRlbnQgQ1NTIHByb3BlcnR5IHJlcGxhY2VzIGFuIGVsZW1lbnQgd2l0aCBhIGdlbmVyYXRlZCB2YWx1ZS4gT2JqZWN0cyBpbnNlcnRlZCB1c2luZyB0aGUgY29udGVudCBwcm9wZXJ0eSBhcmUgYW5vbnltb3VzIHJlcGxhY2VkIGVsZW1lbnRzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvY29udGVudCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNvbnRlbnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29udGVudD0gXCJjb250ZW50XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBjb250ZW50LXZpc2liaWxpdHkgQ1NTIHByb3BlcnR5IGNvbnRyb2xzIHdoZXRoZXIgb3Igbm90IGFuIGVsZW1lbnQgcmVuZGVycyBpdHMgY29udGVudHMgYXQgYWxsLCBhbG9uZyB3aXRoIGZvcmNpbmcgYSBzdHJvbmcgc2V0IG9mIGNvbnRhaW5tZW50cywgYWxsb3dpbmcgdXNlciBhZ2VudHMgdG8gcG90ZW50aWFsbHkgb21pdCBsYXJnZSBzd2F0aGVzIG9mIGxheW91dCBhbmQgcmVuZGVyaW5nIHdvcmsgdW50aWwgaXQgYmVjb21lcyBuZWVkZWQuIEJhc2ljYWxseSBpdCBlbmFibGVzIHRoZSB1c2VyIGFnZW50IHRvIHNraXAgYW4gZWxlbWVudCdzIHJlbmRlcmluZyB3b3JrIChpbmNsdWRpbmcgbGF5b3V0IGFuZCBwYWludGluZykgdW50aWwgaXQgaXMgbmVlZGVkIOKAlCZuYnNwO3doaWNoIG1ha2VzIHRoZSBpbml0aWFsIHBhZ2UgbG9hZCBtdWNoIGZhc3Rlci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NvbnRlbnQtdmlzaWJpbGl0eSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNvbnRlbnQtdmlzaWJpbGl0eVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJjb250ZW50LXZpc2liaWxpdHlcIj0gXCJjb250ZW50LXZpc2liaWxpdHlcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNvdW50ZXItaW5jcmVtZW50IENTUyBwcm9wZXJ0eSBpbmNyZWFzZXMgb3IgZGVjcmVhc2VzIHRoZSB2YWx1ZSBvZiBhIENTUyBjb3VudGVyIGJ5IGEgZ2l2ZW4gdmFsdWUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jb3VudGVyLWluY3JlbWVudCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNvdW50ZXItaW5jcmVtZW50XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImNvdW50ZXItaW5jcmVtZW50XCI9IFwiY291bnRlci1pbmNyZW1lbnRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNvdW50ZXItcmVzZXQgQ1NTIHByb3BlcnR5IHJlc2V0cyBhIENTUyBjb3VudGVyIHRvIGEgZ2l2ZW4gdmFsdWUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jb3VudGVyLXJlc2V0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y291bnRlci1yZXNldFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJjb3VudGVyLXJlc2V0XCI9IFwiY291bnRlci1yZXNldFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY291bnRlci1zZXQgQ1NTIHByb3BlcnR5IHNldHMgYSBDU1MgY291bnRlciB0byBhIGdpdmVuIHZhbHVlLiBJdCBtYW5pcHVsYXRlcyB0aGUgdmFsdWUgb2YgZXhpc3RpbmcgY291bnRlcnMsIGFuZCB3aWxsJm5ic3A7b25seSBjcmVhdGUgbmV3IGNvdW50ZXJzIGlmIHRoZXJlIGlzbid0IGFscmVhZHkgYSBjb3VudGVyIG9mIHRoZSBnaXZlbiBuYW1lIG9uIHRoZSBlbGVtZW50LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvY291bnRlci1zZXQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1jb3VudGVyLXNldFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJjb3VudGVyLXNldFwiPSBcImNvdW50ZXItc2V0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBjdXJzb3IgQ1NTIHByb3BlcnR5IHNldHMgdGhlIHR5cGUgb2YgbW91c2UgY3Vyc29yLCBpZiBhbnksIHRvIHNob3cgd2hlbiB0aGUgbW91c2UgcG9pbnRlciBpcyBvdmVyIGFuIGVsZW1lbnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jdXJzb3IgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1jdXJzb3JcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY3Vyc29yPSBcImN1cnNvclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY3ggYXR0cmlidXRlIGRlZmluZSB0aGUgeC1heGlzIGNvb3JkaW5hdGUgb2YgYSBjZW50ZXIgcG9pbnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NWRy9BdHRyaWJ1dGUvY3ggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1jeFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBjeD0gXCJjeFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY3kgYXR0cmlidXRlIGRlZmluZSB0aGUgeS1heGlzIGNvb3JkaW5hdGUgb2YgYSBjZW50ZXIgcG9pbnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NWRy9BdHRyaWJ1dGUvY3kgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1jeVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBjeT0gXCJjeVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZCBhdHRyaWJ1dGUgZGVmaW5lcyBhIHBhdGggdG8gYmUgZHJhd24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NWRy9BdHRyaWJ1dGUvZCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZD0gXCJkXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZGVzY2VudC1vdmVycmlkZVwiPSBcImRlc2NlbnQtb3ZlcnJpZGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGRpcmVjdGlvbiBDU1MgcHJvcGVydHkgc2V0cyB0aGUgZGlyZWN0aW9uIG9mIHRleHQsIHRhYmxlIGNvbHVtbnMsIGFuZCBob3Jpem9udGFsIG92ZXJmbG93LiBVc2UgcnRsIGZvciBsYW5ndWFnZXMgd3JpdHRlbiBmcm9tIHJpZ2h0IHRvIGxlZnQgKGxpa2UgSGVicmV3IG9yIEFyYWJpYyksIGFuZCBsdHIgZm9yIHRob3NlIHdyaXR0ZW4gZnJvbSBsZWZ0IHRvIHJpZ2h0IChsaWtlIEVuZ2xpc2ggYW5kIG1vc3Qgb3RoZXIgbGFuZ3VhZ2VzKS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2RpcmVjdGlvbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWRpcmVjdGlvblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBkaXJlY3Rpb249IFwiZGlyZWN0aW9uXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBkaXNwbGF5IENTUyBwcm9wZXJ0eSBzZXRzIHdoZXRoZXIgYW4gZWxlbWVudCBpcyB0cmVhdGVkIGFzIGEgYmxvY2sgb3IgaW5saW5lIGVsZW1lbnQgYW5kIHRoZSBsYXlvdXQgdXNlZCBmb3IgaXRzIGNoaWxkcmVuLCBzdWNoIGFzIGZsb3cgbGF5b3V0LCBncmlkIG9yIGZsZXguXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9kaXNwbGF5IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9ZGlzcGxheVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBkaXNwbGF5PSBcImRpc3BsYXlcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGRvbWluYW50LWJhc2VsaW5lIGF0dHJpYnV0ZSBzcGVjaWZpZXMgdGhlIGRvbWluYW50IGJhc2VsaW5lLCB3aGljaCBpcyB0aGUgYmFzZWxpbmUgdXNlZCB0byBhbGlnbiB0aGUgYm944oCZcyB0ZXh0IGFuZCBpbmxpbmUtbGV2ZWwgY29udGVudHMuIEl0Jm5ic3A7YWxzbyBpbmRpY2F0ZXMgdGhlIGRlZmF1bHQgYWxpZ25tZW50IGJhc2VsaW5lIG9mIGFueSBib3hlcyBwYXJ0aWNpcGF0aW5nIGluIGJhc2VsaW5lIGFsaWdubWVudCBpbiB0aGUgYm944oCZcyBhbGlnbm1lbnQgY29udGV4dC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9kb21pbmFudC1iYXNlbGluZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWRvbWluYW50LWJhc2VsaW5lXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImRvbWluYW50LWJhc2VsaW5lXCI9IFwiZG9taW5hbnQtYmFzZWxpbmVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGVtcHR5LWNlbGxzIENTUyBwcm9wZXJ0eSBzZXRzIHdoZXRoZXIgYm9yZGVycyBhbmQgYmFja2dyb3VuZHMgYXBwZWFyIGFyb3VuZCAmbHQ7dGFibGUmZ3Q7IGNlbGxzIHRoYXQgaGF2ZSBubyB2aXNpYmxlIGNvbnRlbnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9lbXB0eS1jZWxscyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWVtcHR5LWNlbGxzXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImVtcHR5LWNlbGxzXCI9IFwiZW1wdHktY2VsbHNcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZpbGwgYXR0cmlidXRlIGhhcyB0d28gZGlmZmVyZW50IG1lYW5pbmdzLiZuYnNwO0ZvciBzaGFwZXMgYW5kIHRleHQgaXQncyBhIHByZXNlbnRhdGlvbiBhdHRyaWJ1dGUgdGhhdCBkZWZpbmVzIHRoZSBjb2xvciAob3IgYW55IFNWRyBwYWludCBzZXJ2ZXJzIGxpa2UgZ3JhZGllbnRzIG9yIHBhdHRlcm5zKSB1c2VkIHRvIHBhaW50IHRoZSBlbGVtZW50OyBmb3IgYW5pbWF0aW9uIGl0IGRlZmluZXMgdGhlIGZpbmFsIHN0YXRlIG9mIHRoZSBhbmltYXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NWRy9BdHRyaWJ1dGUvZmlsbCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZpbGxcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZmlsbD0gXCJmaWxsXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBmaWxsLW9wYWNpdHkgYXR0cmlidXRlIGlzIGEgcHJlc2VudGF0aW9uIGF0dHJpYnV0ZSBkZWZpbmluZyB0aGUgb3BhY2l0eSBvZiB0aGUgcGFpbnQgc2VydmVyIChjb2xvciwgZ3JhZGllbnQsIHBhdHRlcm4sIGV0YykgYXBwbGllZCB0byBhIHNoYXBlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL2ZpbGwtb3BhY2l0eSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZpbGwtb3BhY2l0eVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJmaWxsLW9wYWNpdHlcIj0gXCJmaWxsLW9wYWNpdHlcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZpbGwtcnVsZSBhdHRyaWJ1dGUgaXMgYSBwcmVzZW50YXRpb24gYXR0cmlidXRlIGRlZmluaW5nIHRoZSBhbGdvcml0aG0gdG8gdXNlIHRvIGRldGVybWluZSB0aGUgaW5zaWRlIHBhcnQgb2YgYSBzaGFwZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9maWxsLXJ1bGUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1maWxsLXJ1bGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZmlsbC1ydWxlXCI9IFwiZmlsbC1ydWxlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBmaWx0ZXIgQ1NTIHByb3BlcnR5IGFwcGxpZXMgZ3JhcGhpY2FsIGVmZmVjdHMgbGlrZSBibHVyIG9yIGNvbG9yIHNoaWZ0IHRvIGFuIGVsZW1lbnQuIEZpbHRlcnMgYXJlIGNvbW1vbmx5IHVzZWQgdG8gYWRqdXN0IHRoZSByZW5kZXJpbmcgb2YgaW1hZ2VzLCBiYWNrZ3JvdW5kcywgYW5kIGJvcmRlcnMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9maWx0ZXIgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1maWx0ZXJcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZmlsdGVyPSBcImZpbHRlclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZmxleCBDU1Mgc2hvcnRoYW5kIHByb3BlcnR5IHNldHMgaG93IGEgZmxleCBpdGVtIHdpbGwgZ3JvdyBvciBzaHJpbmsgdG8gZml0IHRoZSBzcGFjZSBhdmFpbGFibGUgaW4gaXRzIGZsZXggY29udGFpbmVyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZmxleCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZsZXhcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZmxleD0gXCJmbGV4XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBmbGV4LWJhc2lzIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBpbml0aWFsIG1haW4gc2l6ZSBvZiBhIGZsZXggaXRlbS4gSXQgc2V0cyB0aGUgc2l6ZSBvZiB0aGUgY29udGVudCBib3ggdW5sZXNzIG90aGVyd2lzZSBzZXQgd2l0aCBib3gtc2l6aW5nLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZmxleC1iYXNpcyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZsZXgtYmFzaXNcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZmxleC1iYXNpc1wiPSBcImZsZXgtYmFzaXNcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZsZXgtZGlyZWN0aW9uIENTUyBwcm9wZXJ0eSBzZXRzIGhvdyBmbGV4IGl0ZW1zIGFyZSBwbGFjZWQgaW4gdGhlIGZsZXggY29udGFpbmVyIGRlZmluaW5nIHRoZSBtYWluIGF4aXMgYW5kIHRoZSBkaXJlY3Rpb24gKG5vcm1hbCBvciByZXZlcnNlZCkuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mbGV4LWRpcmVjdGlvbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZsZXgtZGlyZWN0aW9uXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImZsZXgtZGlyZWN0aW9uXCI9IFwiZmxleC1kaXJlY3Rpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZsZXgtZmxvdyBDU1Mgc2hvcnRoYW5kIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgZGlyZWN0aW9uIG9mIGEgZmxleCBjb250YWluZXIsIGFzIHdlbGwgYXMgaXRzIHdyYXBwaW5nIGJlaGF2aW9yLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZmxleC1mbG93IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9ZmxleC1mbG93XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImZsZXgtZmxvd1wiPSBcImZsZXgtZmxvd1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZmxleC1ncm93IENTUyZuYnNwO3Byb3BlcnR5IHNldHMgdGhlIGZsZXggZ3JvdyBmYWN0b3Igb2YgYSBmbGV4IGl0ZW0ncyBtYWluIHNpemUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mbGV4LWdyb3cgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1mbGV4LWdyb3dcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZmxleC1ncm93XCI9IFwiZmxleC1ncm93XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBmbGV4LXNocmluayBDU1MgcHJvcGVydHkgc2V0cyB0aGUgZmxleCBzaHJpbmsgZmFjdG9yIG9mIGEgZmxleCBpdGVtLiBJZiB0aGUgc2l6ZSBvZiBhbGwgZmxleCBpdGVtcyBpcyBsYXJnZXIgdGhhbiB0aGUgZmxleCBjb250YWluZXIsIGl0ZW1zIHNocmluayB0byBmaXQgYWNjb3JkaW5nIHRvIGZsZXgtc2hyaW5rLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZmxleC1zaHJpbmsgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1mbGV4LXNocmlua1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJmbGV4LXNocmlua1wiPSBcImZsZXgtc2hyaW5rXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBmbGV4LXdyYXAgQ1NTIHByb3BlcnR5IHNldHMgd2hldGhlciBmbGV4IGl0ZW1zIGFyZSBmb3JjZWQgb250byBvbmUgbGluZSBvciBjYW4gd3JhcCBvbnRvIG11bHRpcGxlIGxpbmVzLiBJZiB3cmFwcGluZyBpcyBhbGxvd2VkLCBpdCBzZXRzIHRoZSBkaXJlY3Rpb24gdGhhdCBsaW5lcyBhcmUgc3RhY2tlZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2ZsZXgtd3JhcCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZsZXgtd3JhcFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJmbGV4LXdyYXBcIj0gXCJmbGV4LXdyYXBcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZsb2F0IENTUyBwcm9wZXJ0eSBwbGFjZXMgYW4gZWxlbWVudCBvbiB0aGUgbGVmdCBvciByaWdodCBzaWRlIG9mIGl0cyBjb250YWluZXIsIGFsbG93aW5nIHRleHQgYW5kIGlubGluZSBlbGVtZW50cyB0byB3cmFwIGFyb3VuZCBpdC4gVGhlIGVsZW1lbnQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBub3JtYWwgZmxvdyBvZiB0aGUgcGFnZSwgdGhvdWdoIHN0aWxsIHJlbWFpbmluZyBhIHBhcnQgb2YgdGhlIGZsb3cgKGluIGNvbnRyYXN0IHRvIGFic29sdXRlIHBvc2l0aW9uaW5nKS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2Zsb2F0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9ZmxvYXRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZmxvYXQ9IFwiZmxvYXRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZsb29kLWNvbG9yIGF0dHJpYnV0ZSBpbmRpY2F0ZXMgd2hhdCBjb2xvciB0byB1c2UgdG8gZmxvb2QgdGhlIGN1cnJlbnQgZmlsdGVyIHByaW1pdGl2ZSBzdWJyZWdpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NWRy9BdHRyaWJ1dGUvZmxvb2QtY29sb3IgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1mbG9vZC1jb2xvclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJmbG9vZC1jb2xvclwiPSBcImZsb29kLWNvbG9yXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBmbG9vZC1vcGFjaXR5IGF0dHJpYnV0ZSBpbmRpY2F0ZXMgdGhlIG9wYWNpdHkgdmFsdWUgdG8gdXNlIGFjcm9zcyB0aGUgY3VycmVudCBmaWx0ZXIgcHJpbWl0aXZlIHN1YnJlZ2lvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9mbG9vZC1vcGFjaXR5IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Zmxvb2Qtb3BhY2l0eVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJmbG9vZC1vcGFjaXR5XCI9IFwiZmxvb2Qtb3BhY2l0eVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZm9udCBDU1Mgc2hvcnRoYW5kIHByb3BlcnR5IHNldHMgYWxsIHRoZSBkaWZmZXJlbnQgcHJvcGVydGllcyBvZiBhbiBlbGVtZW50J3MgZm9udC4gQWx0ZXJuYXRpdmVseSwgaXQgc2V0cyBhbiBlbGVtZW50J3MgZm9udCB0byBhIHN5c3RlbSBmb250LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZm9udCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZvbnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZm9udD0gXCJmb250XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZm9udC1kaXNwbGF5XCI9IFwiZm9udC1kaXNwbGF5XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBmb250LWZhbWlseSBDU1MgcHJvcGVydHkgc3BlY2lmaWVzIGEgcHJpb3JpdGl6ZWQgbGlzdCBvZiBvbmUgb3IgbW9yZSBmb250IGZhbWlseSBuYW1lcyBhbmQvb3IgZ2VuZXJpYyBmYW1pbHkgbmFtZXMgZm9yIHRoZSBzZWxlY3RlZCBlbGVtZW50LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZm9udC1mYW1pbHkgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1mb250LWZhbWlseVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJmb250LWZhbWlseVwiPSBcImZvbnQtZmFtaWx5XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBmb250LWZlYXR1cmUtc2V0dGluZ3MgQ1NTIHByb3BlcnR5IGNvbnRyb2xzIGFkdmFuY2VkIHR5cG9ncmFwaGljIGZlYXR1cmVzIGluIE9wZW5UeXBlIGZvbnRzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZm9udC1mZWF0dXJlLXNldHRpbmdzIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Zm9udC1mZWF0dXJlLXNldHRpbmdzXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImZvbnQtZmVhdHVyZS1zZXR0aW5nc1wiPSBcImZvbnQtZmVhdHVyZS1zZXR0aW5nc1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZm9udC1rZXJuaW5nIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSB1c2Ugb2YgdGhlIGtlcm5pbmcgaW5mb3JtYXRpb24gc3RvcmVkIGluIGEgZm9udC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2ZvbnQta2VybmluZyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZvbnQta2VybmluZ1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJmb250LWtlcm5pbmdcIj0gXCJmb250LWtlcm5pbmdcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZvbnQtb3B0aWNhbC1zaXppbmcgQ1NTIHByb3BlcnR5IHNldHMgd2hldGhlciB0ZXh0IHJlbmRlcmluZyBpcyBvcHRpbWl6ZWQgZm9yIHZpZXdpbmcgYXQgZGlmZmVyZW50IHNpemVzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZm9udC1vcHRpY2FsLXNpemluZyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZvbnQtb3B0aWNhbC1zaXppbmdcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZm9udC1vcHRpY2FsLXNpemluZ1wiPSBcImZvbnQtb3B0aWNhbC1zaXppbmdcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZvbnQtc2l6ZSBDU1MgcHJvcGVydHkgc2V0cyB0aGUgc2l6ZSBvZiB0aGUgZm9udC4gQ2hhbmdpbmcgdGhlIGZvbnQgc2l6ZSBhbHNvIHVwZGF0ZXMgdGhlIHNpemVzIG9mIHRoZSBmb250IHNpemUtcmVsYXRpdmUgJmx0O2xlbmd0aCZndDsgdW5pdHMsIHN1Y2ggYXMmbmJzcDtlbSwgZXgsIGFuZCBzbyBmb3J0aC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2ZvbnQtc2l6ZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZvbnQtc2l6ZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJmb250LXNpemVcIj0gXCJmb250LXNpemVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZvbnQtc3RyZXRjaCBDU1MgcHJvcGVydHkgc2VsZWN0cyBhIG5vcm1hbCwgY29uZGVuc2VkLCBvciBleHBhbmRlZCBmYWNlIGZyb20gYSBmb250LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZm9udC1zdHJldGNoIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Zm9udC1zdHJldGNoXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImZvbnQtc3RyZXRjaFwiPSBcImZvbnQtc3RyZXRjaFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZm9udC1zdHlsZSBDU1MgcHJvcGVydHkgc2V0cyB3aGV0aGVyIGEgZm9udCBzaG91bGQgYmUgc3R5bGVkIHdpdGggYSBub3JtYWwsIGl0YWxpYywgb3Igb2JsaXF1ZSBmYWNlIGZyb20gaXRzIGZvbnQtZmFtaWx5LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZm9udC1zdHlsZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZvbnQtc3R5bGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZm9udC1zdHlsZVwiPSBcImZvbnQtc3R5bGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZvbnQtdmFyaWFudCBDU1Mgc2hvcnRoYW5kIHByb3BlcnR5IGFsbG93cyB5b3UgdG8gc2V0IGFsbCB0aGUgZm9udCB2YXJpYW50cyBmb3IgYSBmb250LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZm9udC12YXJpYW50IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Zm9udC12YXJpYW50XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImZvbnQtdmFyaWFudFwiPSBcImZvbnQtdmFyaWFudFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZm9udC12YXJpYW50LWNhcHMgQ1NTIHByb3BlcnR5IGNvbnRyb2xzIHRoZSB1c2Ugb2YgYWx0ZXJuYXRlIGdseXBocyBmb3IgY2FwaXRhbCBsZXR0ZXJzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZm9udC12YXJpYW50LWNhcHMgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1mb250LXZhcmlhbnQtY2Fwc1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJmb250LXZhcmlhbnQtY2Fwc1wiPSBcImZvbnQtdmFyaWFudC1jYXBzXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBmb250LXZhcmlhbnQtZWFzdC1hc2lhbiBDU1MgcHJvcGVydHkgY29udHJvbHMgdGhlIHVzZSBvZiBhbHRlcm5hdGUgZ2x5cGhzIGZvciBFYXN0IEFzaWFuIHNjcmlwdHMsIGxpa2UgSmFwYW5lc2UgYW5kIENoaW5lc2UuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mb250LXZhcmlhbnQtZWFzdC1hc2lhbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZvbnQtdmFyaWFudC1lYXN0LWFzaWFuXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImZvbnQtdmFyaWFudC1lYXN0LWFzaWFuXCI9IFwiZm9udC12YXJpYW50LWVhc3QtYXNpYW5cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZvbnQtdmFyaWFudC1saWdhdHVyZXMgQ1NTIHByb3BlcnR5IGNvbnRyb2xzIHdoaWNoIGxpZ2F0dXJlcyBhbmQgY29udGV4dHVhbCBmb3JtcyBhcmUgdXNlZCBpbiB0ZXh0dWFsIGNvbnRlbnQgb2YgdGhlIGVsZW1lbnRzIGl0IGFwcGxpZXMgdG8uIFRoaXMgbGVhZHMgdG8gbW9yZSBoYXJtb25pemVkIGZvcm1zIGluIHRoZSByZXN1bHRpbmcgdGV4dC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2ZvbnQtdmFyaWFudC1saWdhdHVyZXMgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1mb250LXZhcmlhbnQtbGlnYXR1cmVzXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImZvbnQtdmFyaWFudC1saWdhdHVyZXNcIj0gXCJmb250LXZhcmlhbnQtbGlnYXR1cmVzXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBmb250LXZhcmlhbnQtbnVtZXJpYyBDU1MgcHJvcGVydHkgY29udHJvbHMgdGhlIHVzYWdlIG9mIGFsdGVybmF0ZSBnbHlwaHMgZm9yIG51bWJlcnMsIGZyYWN0aW9ucywgYW5kIG9yZGluYWwgbWFya2Vycy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2ZvbnQtdmFyaWFudC1udW1lcmljIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Zm9udC12YXJpYW50LW51bWVyaWNcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZm9udC12YXJpYW50LW51bWVyaWNcIj0gXCJmb250LXZhcmlhbnQtbnVtZXJpY1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgQ1NTIHByb3BlcnR5IHByb3ZpZGVzIGxvdy1sZXZlbCBjb250cm9sIG92ZXIgdmFyaWFibGUgZm9udCBjaGFyYWN0ZXJpc3RpY3MsIGJ5IHNwZWNpZnlpbmcgdGhlIGZvdXIgbGV0dGVyIGF4aXMgbmFtZXMgb2YgdGhlIGNoYXJhY3RlcmlzdGljcyB5b3Ugd2FudCB0byB2YXJ5LCBhbG9uZyB3aXRoIHRoZWlyIHZhbHVlcy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2ZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Zm9udC12YXJpYXRpb24tc2V0dGluZ3NcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZm9udC12YXJpYXRpb24tc2V0dGluZ3NcIj0gXCJmb250LXZhcmlhdGlvbi1zZXR0aW5nc1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZm9udC13ZWlnaHQgQ1NTIHByb3BlcnR5IHNldHMgdGhlIHdlaWdodCAob3IgYm9sZG5lc3MpIG9mIHRoZSBmb250LiBUaGUgd2VpZ2h0cyBhdmFpbGFibGUgZGVwZW5kIG9uIHRoZSBmb250LWZhbWlseSB0aGF0IGlzIGN1cnJlbnRseSBzZXQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mb250LXdlaWdodCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZvbnQtd2VpZ2h0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImZvbnQtd2VpZ2h0XCI9IFwiZm9udC13ZWlnaHRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZvcmNlZC1jb2xvci1hZGp1c3QgQ1NTIHByb3BlcnR5IGFsbG93cyBhdXRob3JzIHRvIG9wdCBjZXJ0YWluIGVsZW1lbnRzIG91dCBvZiBmb3JjZWQgY29sb3JzIG1vZGUuIFRoaXMgdGhlbiByZXN0b3JlcyB0aGUgY29udHJvbCBvZiB0aG9zZSB2YWx1ZXMgdG8gQ1NTLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZm9yY2VkLWNvbG9yLWFkanVzdCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZvcmNlZC1jb2xvci1hZGp1c3RcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZm9yY2VkLWNvbG9yLWFkanVzdFwiPSBcImZvcmNlZC1jb2xvci1hZGp1c3RcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGdhcCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgZ2FwcyAoZ3V0dGVycykgYmV0d2VlbiByb3dzIGFuZCBjb2x1bW5zLiBJdCBpcyBhIHNob3J0aGFuZCBmb3Igcm93LWdhcCBhbmQgY29sdW1uLWdhcC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2dhcCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWdhcFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnYXA9IFwiZ2FwXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBncmlkIENTUyBwcm9wZXJ0eSBpcyBhIHNob3J0aGFuZCBwcm9wZXJ0eSB0aGF0IHNldHMgYWxsIG9mIHRoZSBleHBsaWNpdCBhbmQgaW1wbGljaXQgZ3JpZCBwcm9wZXJ0aWVzIGluIGEgc2luZ2xlIGRlY2xhcmF0aW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZ3JpZCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWdyaWRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ3JpZD0gXCJncmlkXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBncmlkLWFyZWEgQ1NTIHNob3J0aGFuZCBwcm9wZXJ0eSBzcGVjaWZpZXMgYSBncmlkIGl0ZW3igJlzIHNpemUgYW5kIGxvY2F0aW9uIHdpdGhpbiBhIGdyaWQgYnkgY29udHJpYnV0aW5nIGEgbGluZSwgYSBzcGFuLCBvciBub3RoaW5nIChhdXRvbWF0aWMpIHRvIGl0cyBncmlkIHBsYWNlbWVudCwgdGhlcmVieSBzcGVjaWZ5aW5nIHRoZSBlZGdlcyBvZiBpdHMgZ3JpZCBhcmVhLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZ3JpZC1hcmVhIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Z3JpZC1hcmVhXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImdyaWQtYXJlYVwiPSBcImdyaWQtYXJlYVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZ3JpZC1hdXRvLWNvbHVtbnMgQ1NTIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgc2l6ZSBvZiBhbiBpbXBsaWNpdGx5LWNyZWF0ZWQgZ3JpZCBjb2x1bW4gdHJhY2sgb3IgcGF0dGVybiBvZiB0cmFja3MuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ncmlkLWF1dG8tY29sdW1ucyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWdyaWQtYXV0by1jb2x1bW5zXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImdyaWQtYXV0by1jb2x1bW5zXCI9IFwiZ3JpZC1hdXRvLWNvbHVtbnNcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGdyaWQtYXV0by1mbG93IENTUyBwcm9wZXJ0eSBjb250cm9scyBob3cgdGhlIGF1dG8tcGxhY2VtZW50IGFsZ29yaXRobSB3b3Jrcywgc3BlY2lmeWluZyBleGFjdGx5IGhvdyBhdXRvLXBsYWNlZCBpdGVtcyBnZXQgZmxvd2VkIGludG8gdGhlIGdyaWQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ncmlkLWF1dG8tZmxvdyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWdyaWQtYXV0by1mbG93XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImdyaWQtYXV0by1mbG93XCI9IFwiZ3JpZC1hdXRvLWZsb3dcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGdyaWQtYXV0by1yb3dzIENTUyBwcm9wZXJ0eSBzcGVjaWZpZXMgdGhlIHNpemUgb2YgYW4gaW1wbGljaXRseS1jcmVhdGVkIGdyaWQgcm93IHRyYWNrJm5ic3A7b3IgcGF0dGVybiBvZiB0cmFja3MuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ncmlkLWF1dG8tcm93cyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWdyaWQtYXV0by1yb3dzXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImdyaWQtYXV0by1yb3dzXCI9IFwiZ3JpZC1hdXRvLXJvd3NcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGdyaWQtY29sdW1uIENTUyBzaG9ydGhhbmQgcHJvcGVydHkgc3BlY2lmaWVzIGEgZ3JpZCBpdGVtJ3Mgc2l6ZSBhbmQgbG9jYXRpb24gd2l0aGluIGEgZ3JpZCBjb2x1bW4gYnkgY29udHJpYnV0aW5nIGEgbGluZSwgYSBzcGFuLCBvciBub3RoaW5nIChhdXRvbWF0aWMpIHRvIGl0cyBncmlkIHBsYWNlbWVudCwgdGhlcmVieSBzcGVjaWZ5aW5nIHRoZSBpbmxpbmUtc3RhcnQgYW5kIGlubGluZS1lbmQgZWRnZSBvZiBpdHMgZ3JpZCBhcmVhLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZ3JpZC1jb2x1bW4gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ncmlkLWNvbHVtblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJncmlkLWNvbHVtblwiPSBcImdyaWQtY29sdW1uXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBncmlkLWNvbHVtbi1lbmQgQ1NTIHByb3BlcnR5IHNwZWNpZmllcyBhIGdyaWQgaXRlbeKAmXMgZW5kIHBvc2l0aW9uIHdpdGhpbiB0aGUgZ3JpZCBjb2x1bW4gYnkgY29udHJpYnV0aW5nIGEgbGluZSwgYSBzcGFuLCBvciBub3RoaW5nIChhdXRvbWF0aWMpIHRvIGl0cyBncmlkIHBsYWNlbWVudCwgdGhlcmVieSBzcGVjaWZ5aW5nIHRoZSBibG9jay1lbmQgZWRnZSBvZiBpdHMgZ3JpZCBhcmVhLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZ3JpZC1jb2x1bW4tZW5kIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Z3JpZC1jb2x1bW4tZW5kXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImdyaWQtY29sdW1uLWVuZFwiPSBcImdyaWQtY29sdW1uLWVuZFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY29sdW1uLWdhcCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgc2l6ZSBvZiB0aGUgZ2FwIChndXR0ZXIpIGJldHdlZW4gYW4gZWxlbWVudCdzIGNvbHVtbnMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jb2x1bW4tZ2FwIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y29sdW1uLWdhcFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJncmlkLWNvbHVtbi1nYXBcIj0gXCJncmlkLWNvbHVtbi1nYXBcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGdyaWQtY29sdW1uLXN0YXJ0IENTUyBwcm9wZXJ0eSBzcGVjaWZpZXMgYSBncmlkIGl0ZW3igJlzIHN0YXJ0IHBvc2l0aW9uIHdpdGhpbiB0aGUgZ3JpZCBjb2x1bW4gYnkgY29udHJpYnV0aW5nIGEgbGluZSwgYSBzcGFuLCBvciBub3RoaW5nIChhdXRvbWF0aWMpIHRvIGl0cyBncmlkIHBsYWNlbWVudC4gVGhpcyBzdGFydCBwb3NpdGlvbiBkZWZpbmVzIHRoZSBibG9jay1zdGFydCBlZGdlIG9mIHRoZSBncmlkIGFyZWEuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ncmlkLWNvbHVtbi1zdGFydCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWdyaWQtY29sdW1uLXN0YXJ0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImdyaWQtY29sdW1uLXN0YXJ0XCI9IFwiZ3JpZC1jb2x1bW4tc3RhcnRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGdhcCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgZ2FwcyAoZ3V0dGVycykgYmV0d2VlbiByb3dzIGFuZCBjb2x1bW5zLiBJdCBpcyBhIHNob3J0aGFuZCBmb3Igcm93LWdhcCBhbmQgY29sdW1uLWdhcC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2dhcCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWdhcFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJncmlkLWdhcFwiPSBcImdyaWQtZ2FwXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBncmlkLXJvdyBDU1Mgc2hvcnRoYW5kIHByb3BlcnR5IHNwZWNpZmllcyBhIGdyaWQgaXRlbeKAmXMgc2l6ZSBhbmQgbG9jYXRpb24gd2l0aGluIHRoZSBncmlkIHJvdyBieSBjb250cmlidXRpbmcgYSBsaW5lLCBhIHNwYW4sIG9yIG5vdGhpbmcgKGF1dG9tYXRpYykgdG8gaXRzIGdyaWQgcGxhY2VtZW50LCB0aGVyZWJ5IHNwZWNpZnlpbmcgdGhlIGlubGluZS1zdGFydCBhbmQgaW5saW5lLWVuZCBlZGdlIG9mIGl0cyBncmlkIGFyZWEuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ncmlkLXJvdyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWdyaWQtcm93XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImdyaWQtcm93XCI9IFwiZ3JpZC1yb3dcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGdyaWQtcm93LWVuZCBDU1MgcHJvcGVydHkgc3BlY2lmaWVzIGEgZ3JpZCBpdGVt4oCZcyBlbmQgcG9zaXRpb24gd2l0aGluIHRoZSBncmlkIHJvdyBieSBjb250cmlidXRpbmcgYSBsaW5lLCBhIHNwYW4sIG9yIG5vdGhpbmcgKGF1dG9tYXRpYykgdG8gaXRzIGdyaWQgcGxhY2VtZW50LCB0aGVyZWJ5IHNwZWNpZnlpbmcgdGhlIGlubGluZS1lbmQgZWRnZSBvZiBpdHMgZ3JpZCBhcmVhLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZ3JpZC1yb3ctZW5kIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Z3JpZC1yb3ctZW5kXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImdyaWQtcm93LWVuZFwiPSBcImdyaWQtcm93LWVuZFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgcm93LWdhcCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgc2l6ZSBvZiB0aGUgZ2FwIChndXR0ZXIpIGJldHdlZW4gYW4gZWxlbWVudCdzIGdyaWQgcm93cy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3Jvdy1nYXAgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1yb3ctZ2FwXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImdyaWQtcm93LWdhcFwiPSBcImdyaWQtcm93LWdhcFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZ3JpZC1yb3ctc3RhcnQgQ1NTIHByb3BlcnR5IHNwZWNpZmllcyBhIGdyaWQgaXRlbeKAmXMgc3RhcnQgcG9zaXRpb24gd2l0aGluIHRoZSBncmlkIHJvdyBieSBjb250cmlidXRpbmcgYSBsaW5lLCBhIHNwYW4sIG9yIG5vdGhpbmcgKGF1dG9tYXRpYykgdG8gaXRzIGdyaWQgcGxhY2VtZW50LCB0aGVyZWJ5IHNwZWNpZnlpbmcgdGhlIGlubGluZS1zdGFydCBlZGdlIG9mIGl0cyBncmlkIGFyZWEuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ncmlkLXJvdy1zdGFydCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWdyaWQtcm93LXN0YXJ0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImdyaWQtcm93LXN0YXJ0XCI9IFwiZ3JpZC1yb3ctc3RhcnRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGdyaWQtdGVtcGxhdGUgQ1NTIHByb3BlcnR5IGlzIGEgc2hvcnRoYW5kIHByb3BlcnR5IGZvciBkZWZpbmluZyBncmlkIGNvbHVtbnMsIHJvd3MsIGFuZCBhcmVhcy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2dyaWQtdGVtcGxhdGUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ncmlkLXRlbXBsYXRlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImdyaWQtdGVtcGxhdGVcIj0gXCJncmlkLXRlbXBsYXRlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBncmlkLXRlbXBsYXRlLWFyZWFzIENTUyBwcm9wZXJ0eSBzcGVjaWZpZXMgbmFtZWQgZ3JpZCBhcmVhcywgZXN0YWJsaXNoaW5nIHRoZSBjZWxscyBpbiB0aGUgZ3JpZCBhbmQgYXNzaWduaW5nIHRoZW0gbmFtZXMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ncmlkLXRlbXBsYXRlLWFyZWFzIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Z3JpZC10ZW1wbGF0ZS1hcmVhc1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJncmlkLXRlbXBsYXRlLWFyZWFzXCI9IFwiZ3JpZC10ZW1wbGF0ZS1hcmVhc1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBsaW5lIG5hbWVzIGFuZCB0cmFjayBzaXppbmcgZnVuY3Rpb25zIG9mIHRoZSBncmlkIGNvbHVtbnMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ncmlkLXRlbXBsYXRlLWNvbHVtbnMgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ncmlkLXRlbXBsYXRlLWNvbHVtbnNcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zXCI9IFwiZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBncmlkLXRlbXBsYXRlLXJvd3MgQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIGxpbmUgbmFtZXMgYW5kIHRyYWNrIHNpemluZyBmdW5jdGlvbnMgb2YgdGhlIGdyaWQgcm93cy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2dyaWQtdGVtcGxhdGUtcm93cyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWdyaWQtdGVtcGxhdGUtcm93c1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJncmlkLXRlbXBsYXRlLXJvd3NcIj0gXCJncmlkLXRlbXBsYXRlLXJvd3NcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGhlaWdodCBDU1MgcHJvcGVydHkgc3BlY2lmaWVzIHRoZSBoZWlnaHQgb2YgYW4gZWxlbWVudC4gQnkgZGVmYXVsdCwgdGhlIHByb3BlcnR5IGRlZmluZXMgdGhlIGhlaWdodCBvZiB0aGUgY29udGVudCBhcmVhLiBJZiBib3gtc2l6aW5nIGlzIHNldCB0byBib3JkZXItYm94LCBob3dldmVyLCBpdCBpbnN0ZWFkIGRldGVybWluZXMgdGhlIGhlaWdodCBvZiB0aGUgYm9yZGVyIGFyZWEuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9oZWlnaHQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1oZWlnaHRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaGVpZ2h0PSBcImhlaWdodFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgaHlwaGVucyBDU1MgcHJvcGVydHkgc3BlY2lmaWVzIGhvdyB3b3JkcyBzaG91bGQgYmUgaHlwaGVuYXRlZCB3aGVuIHRleHQgd3JhcHMgYWNyb3NzIG11bHRpcGxlIGxpbmVzLiBJdCBjYW4gcHJldmVudCBoeXBoZW5hdGlvbiBlbnRpcmVseSwgaHlwaGVuYXRlIGF0IG1hbnVhbGx5LXNwZWNpZmllZCBwb2ludHMgd2l0aGluIHRoZSB0ZXh0LCBvciBsZXQgdGhlIGJyb3dzZXIgYXV0b21hdGljYWxseSBpbnNlcnQgaHlwaGVucyB3aGVyZSBhcHByb3ByaWF0ZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2h5cGhlbnMgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1oeXBoZW5zXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGh5cGhlbnM9IFwiaHlwaGVuc1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgaW1hZ2Utb3JpZW50YXRpb24gQ1NTIHByb3BlcnR5IHNwZWNpZmllcyBhIGxheW91dC1pbmRlcGVuZGVudCBjb3JyZWN0aW9uIHRvIHRoZSBvcmllbnRhdGlvbiBvZiBhbiBpbWFnZS4gSXQgc2hvdWxkIG5vdCBiZSB1c2VkIGZvciBhbnkgb3RoZXIgb3JpZW50YXRpb24gYWRqdXN0bWVudHM7IGluc3RlYWQsIHRoZSB0cmFuc2Zvcm0gcHJvcGVydHkgc2hvdWxkIGJlIHVzZWQgd2l0aCB0aGUgcm90YXRlICZsdDt0cmFuc2Zvcm0tZnVuY3Rpb24mZ3Q7LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvaW1hZ2Utb3JpZW50YXRpb24gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1pbWFnZS1vcmllbnRhdGlvblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJpbWFnZS1vcmllbnRhdGlvblwiPSBcImltYWdlLW9yaWVudGF0aW9uXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBpbWFnZS1yZW5kZXJpbmcgQ1NTIHByb3BlcnR5IHNldHMgYW4gaW1hZ2Ugc2NhbGluZyBhbGdvcml0aG0uIFRoZSBwcm9wZXJ0eSBhcHBsaWVzIHRvIGFuIGVsZW1lbnQgaXRzZWxmLCB0byBhbnkgaW1hZ2VzIHNldCBpbiBpdHMgb3RoZXIgcHJvcGVydGllcywgYW5kIHRvIGl0cyBkZXNjZW5kYW50cy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2ltYWdlLXJlbmRlcmluZyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWltYWdlLXJlbmRlcmluZ1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJpbWFnZS1yZW5kZXJpbmdcIj0gXCJpbWFnZS1yZW5kZXJpbmdcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICBpbmhlcml0cz0gXCJpbmhlcml0c1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImluaXRpYWwtdmFsdWVcIj0gXCJpbml0aWFsLXZhbHVlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBpbmxpbmUtc2l6ZSBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCBzaXplIG9mIGFuIGVsZW1lbnQncyBibG9jaywgZGVwZW5kaW5nIG9uIGl0cyB3cml0aW5nIG1vZGUuIEl0IGNvcnJlc3BvbmRzIHRvIGVpdGhlciB0aGUgd2lkdGggb3IgdGhlIGhlaWdodCBwcm9wZXJ0eSwgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiB3cml0aW5nLW1vZGUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9pbmxpbmUtc2l6ZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWlubGluZS1zaXplXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImlubGluZS1zaXplXCI9IFwiaW5saW5lLXNpemVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGluc2V0Jm5ic3A7Q1NTIHByb3BlcnR5IGlzIGEgc2hvcnRoYW5kIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHRvcCwgcmlnaHQsIGJvdHRvbSwgYW5kL29yIGxlZnQgcHJvcGVydGllcy4gSXQgaGFzIHRoZSBzYW1lIG11bHRpLXZhbHVlIHN5bnRheCBvZiB0aGUgbWFyZ2luIHNob3J0aGFuZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2luc2V0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9aW5zZXRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaW5zZXQ9IFwiaW5zZXRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGluc2V0LWJsb2NrIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBsb2dpY2FsIGJsb2NrIHN0YXJ0IGFuZCBlbmQgb2Zmc2V0cyBvZiBhbiBlbGVtZW50LCB3aGljaCBtYXBzIHRvIHBoeXNpY2FsIG9mZnNldHMgZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uIEl0IGNvcnJlc3BvbmRzIHRvIHRoZSB0b3AgYW5kIGJvdHRvbSwgb3IgcmlnaHQgYW5kIGxlZnQgcHJvcGVydGllcyBkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBkZWZpbmVkIGZvciB3cml0aW5nLW1vZGUsIGRpcmVjdGlvbiwgYW5kIHRleHQtb3JpZW50YXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9pbnNldC1ibG9jayBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWluc2V0LWJsb2NrXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImluc2V0LWJsb2NrXCI9IFwiaW5zZXQtYmxvY2tcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGluc2V0LWJsb2NrLWVuZCBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgbG9naWNhbCBibG9jayBlbmQgb2Zmc2V0IG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gYSBwaHlzaWNhbCBpbnNldCBkZXBlbmRpbmcgb24gdGhlIGVsZW1lbnQncyB3cml0aW5nIG1vZGUsIGRpcmVjdGlvbmFsaXR5LCBhbmQgdGV4dCBvcmllbnRhdGlvbi4gSXQgY29ycmVzcG9uZHMgdG8gdGhlIHRvcCwgcmlnaHQsIGJvdHRvbSwgb3IgbGVmdCBwcm9wZXJ0eSBkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBkZWZpbmVkIGZvciB3cml0aW5nLW1vZGUsIGRpcmVjdGlvbiwgYW5kIHRleHQtb3JpZW50YXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9pbnNldC1ibG9jay1lbmQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1pbnNldC1ibG9jay1lbmRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiaW5zZXQtYmxvY2stZW5kXCI9IFwiaW5zZXQtYmxvY2stZW5kXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBpbnNldC1ibG9jay1zdGFydCBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgbG9naWNhbCBibG9jayBzdGFydCBvZmZzZXQgb2YgYW4gZWxlbWVudCwgd2hpY2ggbWFwcyB0byBhIHBoeXNpY2FsIGluc2V0IGRlcGVuZGluZyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmcgbW9kZSwgZGlyZWN0aW9uYWxpdHksIGFuZCB0ZXh0IG9yaWVudGF0aW9uLiBJdCBjb3JyZXNwb25kcyB0byB0aGUgdG9wLCByaWdodCwgYm90dG9tLCBvciBsZWZ0IHByb3BlcnR5IGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIGRlZmluZWQgZm9yIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2luc2V0LWJsb2NrLXN0YXJ0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9aW5zZXQtYmxvY2stc3RhcnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiaW5zZXQtYmxvY2stc3RhcnRcIj0gXCJpbnNldC1ibG9jay1zdGFydFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgaW5zZXQtaW5saW5lIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBsb2dpY2FsIHN0YXJ0IGFuZCBlbmQgb2Zmc2V0cyBvZiBhbiBlbGVtZW50IGluIHRoZSBpbmxpbmUgZGlyZWN0aW9uLCB3aGljaCBtYXBzIHRvIHBoeXNpY2FsIG9mZnNldHMgZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uIEl0IGNvcnJlc3BvbmRzIHRvIHRoZSB0b3AgYW5kIGJvdHRvbSwgb3IgcmlnaHQgYW5kIGxlZnQgcHJvcGVydGllcyBkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBkZWZpbmVkIGZvciB3cml0aW5nLW1vZGUsIGRpcmVjdGlvbiwgYW5kIHRleHQtb3JpZW50YXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9pbnNldC1pbmxpbmUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1pbnNldC1pbmxpbmVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiaW5zZXQtaW5saW5lXCI9IFwiaW5zZXQtaW5saW5lXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBpbnNldC1pbmxpbmUtZW5kIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBsb2dpY2FsIGlubGluZSBlbmQgaW5zZXQgb2YgYW4gZWxlbWVudCwgd2hpY2ggbWFwcyB0byBhIHBoeXNpY2FsIG9mZnNldCBkZXBlbmRpbmcgb24gdGhlIGVsZW1lbnQncyB3cml0aW5nIG1vZGUsIGRpcmVjdGlvbmFsaXR5LCBhbmQgdGV4dCBvcmllbnRhdGlvbi4gSXQgY29ycmVzcG9uZHMgdG8gdGhlIHRvcCwgcmlnaHQsIGJvdHRvbSwgb3IgbGVmdCBwcm9wZXJ0eSBkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBkZWZpbmVkIGZvciB3cml0aW5nLW1vZGUsIGRpcmVjdGlvbiwgYW5kIHRleHQtb3JpZW50YXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9pbnNldC1pbmxpbmUtZW5kIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9aW5zZXQtaW5saW5lLWVuZFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJpbnNldC1pbmxpbmUtZW5kXCI9IFwiaW5zZXQtaW5saW5lLWVuZFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgaW5zZXQtaW5saW5lLXN0YXJ0IENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBsb2dpY2FsIGlubGluZSBzdGFydCBpbnNldCBvZiBhbiBlbGVtZW50LCB3aGljaCBtYXBzIHRvIGEgcGh5c2ljYWwgb2Zmc2V0IGRlcGVuZGluZyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmcgbW9kZSwgZGlyZWN0aW9uYWxpdHksIGFuZCB0ZXh0IG9yaWVudGF0aW9uLiBJdCBjb3JyZXNwb25kcyB0byB0aGUgdG9wLCByaWdodCwgYm90dG9tLCBvciBsZWZ0IHByb3BlcnR5IGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIGRlZmluZWQgZm9yIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2luc2V0LWlubGluZS1zdGFydCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWluc2V0LWlubGluZS1zdGFydFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJpbnNldC1pbmxpbmUtc3RhcnRcIj0gXCJpbnNldC1pbmxpbmUtc3RhcnRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGlzb2xhdGlvbiBDU1MgcHJvcGVydHkgZGV0ZXJtaW5lcyB3aGV0aGVyIGFuIGVsZW1lbnQgbXVzdCBjcmVhdGUgYSBuZXcgc3RhY2tpbmcgY29udGV4dC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2lzb2xhdGlvbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWlzb2xhdGlvblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBpc29sYXRpb249IFwiaXNvbGF0aW9uXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBDU1MganVzdGlmeS1jb250ZW50IHByb3BlcnR5IGRlZmluZXMgaG93IHRoZSBicm93c2VyIGRpc3RyaWJ1dGVzIHNwYWNlIGJldHdlZW4gYW5kIGFyb3VuZCBjb250ZW50IGl0ZW1zIGFsb25nIHRoZSBtYWluLWF4aXMgb2YgYSBmbGV4IGNvbnRhaW5lciwgYW5kIHRoZSBpbmxpbmUgYXhpcyBvZiBhIGdyaWQgY29udGFpbmVyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvanVzdGlmeS1jb250ZW50IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9anVzdGlmeS1jb250ZW50XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImp1c3RpZnktY29udGVudFwiPSBcImp1c3RpZnktY29udGVudFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgQ1NTIGp1c3RpZnktaXRlbXMgcHJvcGVydHkgZGVmaW5lcyB0aGUgZGVmYXVsdCBqdXN0aWZ5LXNlbGYgZm9yIGFsbCBpdGVtcyBvZiB0aGUgYm94LCBnaXZpbmcgdGhlbSBhbGwgYSBkZWZhdWx0IHdheSBvZiBqdXN0aWZ5aW5nIGVhY2ggYm94IGFsb25nIHRoZSBhcHByb3ByaWF0ZSBheGlzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvanVzdGlmeS1pdGVtcyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWp1c3RpZnktaXRlbXNcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwianVzdGlmeS1pdGVtc1wiPSBcImp1c3RpZnktaXRlbXNcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIENTUyBqdXN0aWZ5LXNlbGYgcHJvcGVydHkgc2V0cyB0aGUgd2F5IGEgYm94IGlzIGp1c3RpZmllZCBpbnNpZGUgaXRzIGFsaWdubWVudCBjb250YWluZXIgYWxvbmcgdGhlIGFwcHJvcHJpYXRlIGF4aXMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9qdXN0aWZ5LXNlbGYgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1qdXN0aWZ5LXNlbGZcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwianVzdGlmeS1zZWxmXCI9IFwianVzdGlmeS1zZWxmXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBsZWZ0IENTUyBwcm9wZXJ0eSBwYXJ0aWNpcGF0ZXMgaW4gc3BlY2lmeWluZyB0aGUgaG9yaXpvbnRhbCBwb3NpdGlvbiBvZiBhIHBvc2l0aW9uZWQgZWxlbWVudC4gSXQgaGFzIG5vIGVmZmVjdCBvbiBub24tcG9zaXRpb25lZCBlbGVtZW50cy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2xlZnQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1sZWZ0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxlZnQ9IFwibGVmdFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbGV0dGVyLXNwYWNpbmcgQ1NTIHByb3BlcnR5IHNldHMgdGhlIGhvcml6b250YWwgc3BhY2luZyBiZWhhdmlvciBiZXR3ZWVuIHRleHQgY2hhcmFjdGVycy4gVGhpcyB2YWx1ZSBpcyBhZGRlZCB0byB0aGUgbmF0dXJhbCBzcGFjaW5nIGJldHdlZW4gY2hhcmFjdGVycyB3aGlsZSByZW5kZXJpbmcgdGhlIHRleHQuIFBvc2l0aXZlIHZhbHVlcyBvZiBsZXR0ZXItc3BhY2luZyBjYXVzZXMgY2hhcmFjdGVycyB0byBzcHJlYWQgZmFydGhlciBhcGFydCwgd2hpbGUgbmVnYXRpdmUgdmFsdWVzIG9mIGxldHRlci1zcGFjaW5nIGJyaW5nIGNoYXJhY3RlcnMgY2xvc2VyIHRvZ2V0aGVyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvbGV0dGVyLXNwYWNpbmcgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1sZXR0ZXItc3BhY2luZ1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJsZXR0ZXItc3BhY2luZ1wiPSBcImxldHRlci1zcGFjaW5nXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBsaWdodGluZy1jb2xvciBhdHRyaWJ1dGUgZGVmaW5lcyB0aGUgY29sb3Igb2YgdGhlIGxpZ2h0IHNvdXJjZSBmb3IgbGlnaHRpbmcgZmlsdGVyIHByaW1pdGl2ZXMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NWRy9BdHRyaWJ1dGUvbGlnaHRpbmctY29sb3IgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1saWdodGluZy1jb2xvclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJsaWdodGluZy1jb2xvclwiPSBcImxpZ2h0aW5nLWNvbG9yXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBsaW5lLWJyZWFrIENTUyBwcm9wZXJ0eSBzZXRzIGhvdyB0byBicmVhayBsaW5lcyBvZiBDaGluZXNlLCBKYXBhbmVzZSwgb3IgS29yZWFuIChDSkspIHRleHQgd2hlbiB3b3JraW5nIHdpdGggcHVuY3R1YXRpb24gYW5kIHN5bWJvbHMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9saW5lLWJyZWFrIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bGluZS1icmVha1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJsaW5lLWJyZWFrXCI9IFwibGluZS1icmVha1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImxpbmUtZ2FwLW92ZXJyaWRlXCI9IFwibGluZS1nYXAtb3ZlcnJpZGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGxpbmUtaGVpZ2h0IENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBoZWlnaHQgb2YgYSBsaW5lIGJveC4gSXQncyBjb21tb25seSB1c2VkIHRvIHNldCB0aGUgZGlzdGFuY2UgYmV0d2VlbiBsaW5lcyBvZiB0ZXh0LiBPbiBibG9jay1sZXZlbCBlbGVtZW50cywgaXQgc3BlY2lmaWVzIHRoZSBtaW5pbXVtIGhlaWdodCBvZiBsaW5lIGJveGVzIHdpdGhpbiB0aGUgZWxlbWVudC4gT24gbm9uLXJlcGxhY2VkIGlubGluZSBlbGVtZW50cywgaXQgc3BlY2lmaWVzIHRoZSBoZWlnaHQgdGhhdCBpcyB1c2VkIHRvIGNhbGN1bGF0ZSBsaW5lIGJveCBoZWlnaHQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9saW5lLWhlaWdodCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWxpbmUtaGVpZ2h0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImxpbmUtaGVpZ2h0XCI9IFwibGluZS1oZWlnaHRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGxpc3Qtc3R5bGUgQ1NTIHNob3J0aGFuZCBwcm9wZXJ0eSBhbGxvd3MgeW91IHRvIHNldCBhbGwgdGhlIGxpc3Qgc3R5bGUgcHJvcGVydGllcyBhdCBvbmNlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvbGlzdC1zdHlsZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWxpc3Qtc3R5bGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwibGlzdC1zdHlsZVwiPSBcImxpc3Qtc3R5bGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGxpc3Qtc3R5bGUtaW1hZ2UgQ1NTIHByb3BlcnR5IHNldHMgYW4gaW1hZ2UgdG8gYmUgdXNlZCBhcyB0aGUgbGlzdCBpdGVtIG1hcmtlci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2xpc3Qtc3R5bGUtaW1hZ2UgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1saXN0LXN0eWxlLWltYWdlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImxpc3Qtc3R5bGUtaW1hZ2VcIj0gXCJsaXN0LXN0eWxlLWltYWdlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBsaXN0LXN0eWxlLXBvc2l0aW9uIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBwb3NpdGlvbiBvZiB0aGUgOjptYXJrZXIgcmVsYXRpdmUgdG8gYSBsaXN0IGl0ZW0uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9saXN0LXN0eWxlLXBvc2l0aW9uIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bGlzdC1zdHlsZS1wb3NpdGlvblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJsaXN0LXN0eWxlLXBvc2l0aW9uXCI9IFwibGlzdC1zdHlsZS1wb3NpdGlvblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbGlzdC1zdHlsZS10eXBlIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBtYXJrZXIgKHN1Y2ggYXMgYSBkaXNjLCBjaGFyYWN0ZXIsIG9yIGN1c3RvbSBjb3VudGVyIHN0eWxlKSBvZiBhIGxpc3QgaXRlbSBlbGVtZW50LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvbGlzdC1zdHlsZS10eXBlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bGlzdC1zdHlsZS10eXBlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImxpc3Qtc3R5bGUtdHlwZVwiPSBcImxpc3Qtc3R5bGUtdHlwZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbWFyZ2luIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBtYXJnaW4gYXJlYSBvbiBhbGwgZm91ciBzaWRlcyBvZiBhbiBlbGVtZW50LiBJdCBpcyBhIHNob3J0aGFuZCBmb3IgbWFyZ2luLXRvcCwgbWFyZ2luLXJpZ2h0LCBtYXJnaW4tYm90dG9tLCBhbmQgbWFyZ2luLWxlZnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9tYXJnaW4gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1tYXJnaW5cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbWFyZ2luPSBcIm1hcmdpblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbWFyZ2luLWJsb2NrIENTUyBzaG9ydGhhbmQgcHJvcGVydHkgZGVmaW5lcyB0aGUgbG9naWNhbCBibG9jayBzdGFydCBhbmQgZW5kIG1hcmdpbnMgb2YgYW4gZWxlbWVudCwgd2hpY2ggbWFwcyB0byBwaHlzaWNhbCBtYXJnaW5zIGRlcGVuZGluZyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmcgbW9kZSwgZGlyZWN0aW9uYWxpdHksIGFuZCB0ZXh0IG9yaWVudGF0aW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvbWFyZ2luLWJsb2NrIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bWFyZ2luLWJsb2NrXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIm1hcmdpbi1ibG9ja1wiPSBcIm1hcmdpbi1ibG9ja1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbWFyZ2luLWJsb2NrLWVuZCBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgbG9naWNhbCBibG9jayBlbmQgbWFyZ2luIG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gYSBwaHlzaWNhbCBtYXJnaW4gZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9tYXJnaW4tYmxvY2stZW5kIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bWFyZ2luLWJsb2NrLWVuZFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJtYXJnaW4tYmxvY2stZW5kXCI9IFwibWFyZ2luLWJsb2NrLWVuZFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbWFyZ2luLWJsb2NrLXN0YXJ0IENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBsb2dpY2FsIGJsb2NrIHN0YXJ0IG1hcmdpbiBvZiBhbiBlbGVtZW50LCB3aGljaCBtYXBzIHRvIGEgcGh5c2ljYWwgbWFyZ2luIGRlcGVuZGluZyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmcgbW9kZSwgZGlyZWN0aW9uYWxpdHksIGFuZCB0ZXh0IG9yaWVudGF0aW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvbWFyZ2luLWJsb2NrLXN0YXJ0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bWFyZ2luLWJsb2NrLXN0YXJ0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIm1hcmdpbi1ibG9jay1zdGFydFwiPSBcIm1hcmdpbi1ibG9jay1zdGFydFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbWFyZ2luLWJvdHRvbSBDU1MgcHJvcGVydHkgc2V0cyB0aGUgbWFyZ2luIGFyZWEgb24gdGhlIGJvdHRvbSBvZiBhbiBlbGVtZW50LiBBIHBvc2l0aXZlIHZhbHVlIHBsYWNlcyBpdCBmYXJ0aGVyIGZyb20gaXRzIG5laWdoYm9ycywgd2hpbGUgYSBuZWdhdGl2ZSB2YWx1ZSBwbGFjZXMgaXQgY2xvc2VyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvbWFyZ2luLWJvdHRvbSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW1hcmdpbi1ib3R0b21cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwibWFyZ2luLWJvdHRvbVwiPSBcIm1hcmdpbi1ib3R0b21cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG1hcmdpbi1pbmxpbmUgQ1NTIHNob3J0aGFuZCBwcm9wZXJ0eSBpcyBhIHNob3J0aGFuZCBwcm9wZXJ0eSB0aGF0IGRlZmluZXMgYm90aCB0aGUgbG9naWNhbCBpbmxpbmUgc3RhcnQgYW5kIGVuZCBtYXJnaW5zIG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gcGh5c2ljYWwgbWFyZ2lucyBkZXBlbmRpbmcgb24gdGhlIGVsZW1lbnQncyB3cml0aW5nIG1vZGUsIGRpcmVjdGlvbmFsaXR5LCBhbmQgdGV4dCBvcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL21hcmdpbi1pbmxpbmUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1tYXJnaW4taW5saW5lXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIm1hcmdpbi1pbmxpbmVcIj0gXCJtYXJnaW4taW5saW5lXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBtYXJnaW4taW5saW5lLWVuZCBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgbG9naWNhbCBpbmxpbmUgZW5kIG1hcmdpbiBvZiBhbiBlbGVtZW50LCB3aGljaCBtYXBzIHRvIGEgcGh5c2ljYWwgbWFyZ2luIGRlcGVuZGluZyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmcgbW9kZSwgZGlyZWN0aW9uYWxpdHksIGFuZCB0ZXh0IG9yaWVudGF0aW9uLiBJbiBvdGhlciB3b3JkcywgaXQgY29ycmVzcG9uZHMgdG8gdGhlIG1hcmdpbi10b3AsIG1hcmdpbi1yaWdodCwgbWFyZ2luLWJvdHRvbSBvciBtYXJnaW4tbGVmdCBwcm9wZXJ0eSBkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBkZWZpbmVkIGZvciB3cml0aW5nLW1vZGUsIGRpcmVjdGlvbiwgYW5kIHRleHQtb3JpZW50YXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9tYXJnaW4taW5saW5lLWVuZCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW1hcmdpbi1pbmxpbmUtZW5kXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIm1hcmdpbi1pbmxpbmUtZW5kXCI9IFwibWFyZ2luLWlubGluZS1lbmRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG1hcmdpbi1pbmxpbmUtc3RhcnQgQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIGxvZ2ljYWwgaW5saW5lIHN0YXJ0IG1hcmdpbiBvZiBhbiBlbGVtZW50LCB3aGljaCBtYXBzIHRvIGEgcGh5c2ljYWwgbWFyZ2luIGRlcGVuZGluZyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmcgbW9kZSwgZGlyZWN0aW9uYWxpdHksIGFuZCB0ZXh0IG9yaWVudGF0aW9uLiBJdCBjb3JyZXNwb25kcyB0byB0aGUgbWFyZ2luLXRvcCwgbWFyZ2luLXJpZ2h0LCBtYXJnaW4tYm90dG9tLCBvciBtYXJnaW4tbGVmdCBwcm9wZXJ0eSBkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBkZWZpbmVkIGZvciB3cml0aW5nLW1vZGUsIGRpcmVjdGlvbiwgYW5kIHRleHQtb3JpZW50YXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9tYXJnaW4taW5saW5lLXN0YXJ0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bWFyZ2luLWlubGluZS1zdGFydFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJtYXJnaW4taW5saW5lLXN0YXJ0XCI9IFwibWFyZ2luLWlubGluZS1zdGFydFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbWFyZ2luLWxlZnQgQ1NTIHByb3BlcnR5IHNldHMgdGhlIG1hcmdpbiBhcmVhIG9uIHRoZSBsZWZ0IHNpZGUgb2YgYW4gZWxlbWVudC4gQSBwb3NpdGl2ZSB2YWx1ZSBwbGFjZXMgaXQgZmFydGhlciBmcm9tIGl0cyBuZWlnaGJvcnMsIHdoaWxlIGEgbmVnYXRpdmUgdmFsdWUgcGxhY2VzIGl0IGNsb3Nlci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL21hcmdpbi1sZWZ0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bWFyZ2luLWxlZnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwibWFyZ2luLWxlZnRcIj0gXCJtYXJnaW4tbGVmdFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbWFyZ2luLXJpZ2h0IENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBtYXJnaW4gYXJlYSBvbiB0aGUgcmlnaHQgc2lkZSBvZiBhbiBlbGVtZW50LiBBIHBvc2l0aXZlIHZhbHVlIHBsYWNlcyBpdCBmYXJ0aGVyIGZyb20gaXRzIG5laWdoYm9ycywgd2hpbGUgYSBuZWdhdGl2ZSB2YWx1ZSBwbGFjZXMgaXQgY2xvc2VyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvbWFyZ2luLXJpZ2h0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bWFyZ2luLXJpZ2h0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIm1hcmdpbi1yaWdodFwiPSBcIm1hcmdpbi1yaWdodFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbWFyZ2luLXRvcCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgbWFyZ2luIGFyZWEgb24gdGhlIHRvcCBvZiBhbiBlbGVtZW50LiBBIHBvc2l0aXZlIHZhbHVlIHBsYWNlcyBpdCBmYXJ0aGVyIGZyb20gaXRzIG5laWdoYm9ycywgd2hpbGUgYSBuZWdhdGl2ZSB2YWx1ZSBwbGFjZXMgaXQgY2xvc2VyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvbWFyZ2luLXRvcCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW1hcmdpbi10b3BcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwibWFyZ2luLXRvcFwiPSBcIm1hcmdpbi10b3BcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICBtYXJrZXI9IFwibWFya2VyXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBtYXJrZXItZW5kIGF0dHJpYnV0ZSBkZWZpbmVzIHRoZSBhcnJvd2hlYWQgb3IgcG9seW1hcmtlciB0aGF0IHdpbGwgYmUgZHJhd24gYXQgdGhlIGZpbmFsIHZlcnRleCBvZiB0aGUgZ2l2ZW4gc2hhcGUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NWRy9BdHRyaWJ1dGUvbWFya2VyLWVuZCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW1hcmtlci1lbmRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwibWFya2VyLWVuZFwiPSBcIm1hcmtlci1lbmRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG1hcmtlci1taWQgYXR0cmlidXRlIGRlZmluZXMgdGhlIGFycm93aGVhZCBvciBwb2x5bWFya2VyIHRoYXQgd2lsbCBiZSBkcmF3biBhdCBhbGwgaW50ZXJpb3IgdmVydGljZXMgb2YgdGhlIGdpdmVuIHNoYXBlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL21hcmtlci1taWQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1tYXJrZXItbWlkXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIm1hcmtlci1taWRcIj0gXCJtYXJrZXItbWlkXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBtYXJrZXItc3RhcnQgYXR0cmlidXRlIGRlZmluZXMgdGhlIGFycm93aGVhZCBvciBwb2x5bWFya2VyIHRoYXQgd2lsbCBiZSBkcmF3biBhdCB0aGUgZmlyc3QgdmVydGV4IG9mIHRoZSBnaXZlbiBzaGFwZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9tYXJrZXItc3RhcnQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1tYXJrZXItc3RhcnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwibWFya2VyLXN0YXJ0XCI9IFwibWFya2VyLXN0YXJ0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBtYXNrIENTUyBzaG9ydGhhbmQgcHJvcGVydHkgaGlkZXMgYW4gZWxlbWVudCAocGFydGlhbGx5IG9yIGZ1bGx5KSBieSBtYXNraW5nIG9yIGNsaXBwaW5nIHRoZSBpbWFnZSBhdCBzcGVjaWZpYyBwb2ludHMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9tYXNrIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bWFza1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBtYXNrPSBcIm1hc2tcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG1hc2stdHlwZSBDU1MgcHJvcGVydHkgc2V0cyB3aGV0aGVyIGFuIFNWRyAmbHQ7bWFzayZndDsgZWxlbWVudCBpcyB1c2VkIGFzIGEgbHVtaW5hbmNlIG9yIGFuIGFscGhhIG1hc2suIEl0IGFwcGxpZXMgdG8gdGhlICZsdDttYXNrJmd0OyBlbGVtZW50IGl0c2VsZi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL21hc2stdHlwZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW1hc2stdHlwZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJtYXNrLXR5cGVcIj0gXCJtYXNrLXR5cGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG1heC1ibG9jay1zaXplIENTUyBwcm9wZXJ0eSBzcGVjaWZpZXMgdGhlIG1heGltdW0gc2l6ZSBvZiBhbiBlbGVtZW50IGluIHRoZSBkaXJlY3Rpb24gb3Bwb3NpdGUgdGhhdCBvZiB0aGUgd3JpdGluZyBkaXJlY3Rpb24gYXMgc3BlY2lmaWVkIGJ5IHdyaXRpbmctbW9kZS4gVGhhdCBpcywgaWYgdGhlIHdyaXRpbmcgZGlyZWN0aW9uIGlzIGhvcml6b250YWwsIHRoZW4gbWF4LWJsb2NrLXNpemUgaXMgZXF1aXZhbGVudCB0byBtYXgtaGVpZ2h0OyBpZiB0aGUgd3JpdGluZyBkaXJlY3Rpb24gaXMgdmVydGljYWwsIG1heC1ibG9jay1zaXplIGlzIHRoZSBzYW1lIGFzIG1heC13aWR0aC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL21heC1ibG9jay1zaXplIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bWF4LWJsb2NrLXNpemVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwibWF4LWJsb2NrLXNpemVcIj0gXCJtYXgtYmxvY2stc2l6ZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbWF4LWhlaWdodCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgbWF4aW11bSBoZWlnaHQgb2YgYW4gZWxlbWVudC4gSXQgcHJldmVudHMgdGhlIHVzZWQgdmFsdWUgb2YgdGhlIGhlaWdodCBwcm9wZXJ0eSBmcm9tIGJlY29taW5nIGxhcmdlciB0aGFuIHRoZSB2YWx1ZSBzcGVjaWZpZWQgZm9yIG1heC1oZWlnaHQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9tYXgtaGVpZ2h0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bWF4LWhlaWdodFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJtYXgtaGVpZ2h0XCI9IFwibWF4LWhlaWdodFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbWF4LWlubGluZS1zaXplIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBob3Jpem9udGFsIG9yIHZlcnRpY2FsIG1heGltdW0gc2l6ZSBvZiBhbiBlbGVtZW50J3MgYmxvY2ssIGRlcGVuZGluZyBvbiBpdHMgd3JpdGluZyBtb2RlLiBJdCBjb3JyZXNwb25kcyB0byBlaXRoZXIgdGhlIG1heC13aWR0aCBvciB0aGUgbWF4LWhlaWdodCBwcm9wZXJ0eSwgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiB3cml0aW5nLW1vZGUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9tYXgtaW5saW5lLXNpemUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1tYXgtaW5saW5lLXNpemVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwibWF4LWlubGluZS1zaXplXCI9IFwibWF4LWlubGluZS1zaXplXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBtYXgtd2lkdGggQ1NTIHByb3BlcnR5IHNldHMgdGhlIG1heGltdW0gd2lkdGggb2YgYW4gZWxlbWVudC4gSXQgcHJldmVudHMgdGhlIHVzZWQgdmFsdWUgb2YgdGhlIHdpZHRoIHByb3BlcnR5IGZyb20gYmVjb21pbmcgbGFyZ2VyIHRoYW4gdGhlIHZhbHVlIHNwZWNpZmllZCBieSBtYXgtd2lkdGguXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9tYXgtd2lkdGggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1tYXgtd2lkdGhcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwibWF4LXdpZHRoXCI9IFwibWF4LXdpZHRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwibWF4LXpvb21cIj0gXCJtYXgtem9vbVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbWluLWJsb2NrLXNpemUgQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIG1pbmltdW0gaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCBzaXplIG9mIGFuIGVsZW1lbnQncyBibG9jaywgZGVwZW5kaW5nIG9uIGl0cyB3cml0aW5nIG1vZGUuIEl0IGNvcnJlc3BvbmRzIHRvIGVpdGhlciB0aGUgbWluLXdpZHRoIG9yIHRoZSBtaW4taGVpZ2h0IHByb3BlcnR5LCBkZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIHdyaXRpbmctbW9kZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL21pbi1ibG9jay1zaXplIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bWluLWJsb2NrLXNpemVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwibWluLWJsb2NrLXNpemVcIj0gXCJtaW4tYmxvY2stc2l6ZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbWluLWhlaWdodCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgbWluaW11bSBoZWlnaHQgb2YgYW4gZWxlbWVudC4gSXQgcHJldmVudHMgdGhlIHVzZWQgdmFsdWUgb2YgdGhlIGhlaWdodCBwcm9wZXJ0eSBmcm9tIGJlY29taW5nIHNtYWxsZXIgdGhhbiB0aGUgdmFsdWUgc3BlY2lmaWVkIGZvciBtaW4taGVpZ2h0LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvbWluLWhlaWdodCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW1pbi1oZWlnaHRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwibWluLWhlaWdodFwiPSBcIm1pbi1oZWlnaHRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG1pbi1pbmxpbmUtc2l6ZSBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCBtaW5pbWFsIHNpemUgb2YgYW4gZWxlbWVudCdzIGJsb2NrLCBkZXBlbmRpbmcgb24gaXRzIHdyaXRpbmcgbW9kZS4gSXQgY29ycmVzcG9uZHMgdG8gZWl0aGVyIHRoZSBtaW4td2lkdGggb3IgdGhlIG1pbi1oZWlnaHQgcHJvcGVydHksIGRlcGVuZGluZyBvbiB0aGUgdmFsdWUgb2Ygd3JpdGluZy1tb2RlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvbWluLWlubGluZS1zaXplIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bWluLWlubGluZS1zaXplXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIm1pbi1pbmxpbmUtc2l6ZVwiPSBcIm1pbi1pbmxpbmUtc2l6ZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbWluLXdpZHRoIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBtaW5pbXVtIHdpZHRoIG9mIGFuIGVsZW1lbnQuIEl0IHByZXZlbnRzIHRoZSB1c2VkIHZhbHVlIG9mIHRoZSB3aWR0aCBwcm9wZXJ0eSBmcm9tIGJlY29taW5nIHNtYWxsZXIgdGhhbiB0aGUgdmFsdWUgc3BlY2lmaWVkIGZvciBtaW4td2lkdGguXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9taW4td2lkdGggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1taW4td2lkdGhcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwibWluLXdpZHRoXCI9IFwibWluLXdpZHRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwibWluLXpvb21cIj0gXCJtaW4tem9vbVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbWl4LWJsZW5kLW1vZGUgQ1NTIHByb3BlcnR5IHNldHMgaG93IGFuIGVsZW1lbnQncyBjb250ZW50IHNob3VsZCBibGVuZCB3aXRoIHRoZSBjb250ZW50IG9mIHRoZSBlbGVtZW50J3MgcGFyZW50IGFuZCB0aGUgZWxlbWVudCdzIGJhY2tncm91bmQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9taXgtYmxlbmQtbW9kZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW1peC1ibGVuZC1tb2RlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIm1peC1ibGVuZC1tb2RlXCI9IFwibWl4LWJsZW5kLW1vZGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG9iamVjdC1maXQgQ1NTIHByb3BlcnR5IHNldHMgaG93IHRoZSBjb250ZW50IG9mIGEgcmVwbGFjZWQgZWxlbWVudCwgc3VjaCBhcyBhbiAmbHQ7aW1nJmd0OyBvciAmbHQ7dmlkZW8mZ3Q7LCBzaG91bGQgYmUgcmVzaXplZCB0byBmaXQgaXRzIGNvbnRhaW5lci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL29iamVjdC1maXQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1vYmplY3QtZml0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIm9iamVjdC1maXRcIj0gXCJvYmplY3QtZml0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBvYmplY3QtcG9zaXRpb24gQ1NTIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgYWxpZ25tZW50IG9mIHRoZSBzZWxlY3RlZCByZXBsYWNlZCBlbGVtZW50J3MgY29udGVudHMgd2l0aGluIHRoZSBlbGVtZW50J3MgYm94LiBBcmVhcyBvZiB0aGUgYm94IHdoaWNoIGFyZW4ndCBjb3ZlcmVkIGJ5IHRoZSByZXBsYWNlZCBlbGVtZW50J3Mgb2JqZWN0IHdpbGwgc2hvdyB0aGUgZWxlbWVudCdzIGJhY2tncm91bmQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9vYmplY3QtcG9zaXRpb24gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1vYmplY3QtcG9zaXRpb25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwib2JqZWN0LXBvc2l0aW9uXCI9IFwib2JqZWN0LXBvc2l0aW9uXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBvZmZzZXQgQ1NTIHNob3J0aGFuZCBwcm9wZXJ0eSBzZXRzIGFsbCB0aGUgcHJvcGVydGllcyByZXF1aXJlZCBmb3IgYW5pbWF0aW5nIGFuIGVsZW1lbnQgYWxvbmcgYSBkZWZpbmVkIHBhdGguXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9vZmZzZXQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1vZmZzZXRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgb2Zmc2V0PSBcIm9mZnNldFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgb2Zmc2V0LWRpc3RhbmNlIENTUyBwcm9wZXJ0eSBzcGVjaWZpZXMgYSBwb3NpdGlvbiBhbG9uZyBhbiBvZmZzZXQtcGF0aCBmb3IgYW4gZWxlbWVudCB0byBiZSBwbGFjZWQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9vZmZzZXQtZGlzdGFuY2UgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1vZmZzZXQtZGlzdGFuY2VcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwib2Zmc2V0LWRpc3RhbmNlXCI9IFwib2Zmc2V0LWRpc3RhbmNlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBvZmZzZXQtcGF0aCBDU1MgcHJvcGVydHkgc3BlY2lmaWVzIGEgbW90aW9uIHBhdGggZm9yIGFuIGVsZW1lbnQgdG8gZm9sbG93IGFuZCBkZWZpbmVzIHRoZSBlbGVtZW50J3MgcG9zaXRpb25pbmcgd2l0aGluIHRoZSBwYXJlbnQgY29udGFpbmVyIG9yIFNWRyBjb29yZGluYXRlIHN5c3RlbS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL29mZnNldC1wYXRoIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9b2Zmc2V0LXBhdGhcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwib2Zmc2V0LXBhdGhcIj0gXCJvZmZzZXQtcGF0aFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgb2Zmc2V0LXJvdGF0ZSBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgb3JpZW50YXRpb24vZGlyZWN0aW9uIG9mIHRoZSBlbGVtZW50IGFzIGl0IGlzIHBvc2l0aW9uZWQgYWxvbmcgdGhlIG9mZnNldC1wYXRoLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvb2Zmc2V0LXJvdGF0ZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW9mZnNldC1yb3RhdGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwib2Zmc2V0LXJvdGF0ZVwiPSBcIm9mZnNldC1yb3RhdGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG9wYWNpdHkgQ1NTIHByb3BlcnR5IHNldHMgdGhlIG9wYWNpdHkgb2YgYW4gZWxlbWVudC4gT3BhY2l0eSBpcyB0aGUgZGVncmVlIHRvIHdoaWNoIGNvbnRlbnQgYmVoaW5kIGFuIGVsZW1lbnQgaXMgaGlkZGVuLCBhbmQgaXMgdGhlIG9wcG9zaXRlIG9mIHRyYW5zcGFyZW5jeS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL29wYWNpdHkgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1vcGFjaXR5XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG9wYWNpdHk9IFwib3BhY2l0eVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgb3JkZXIgQ1NTIHByb3BlcnR5IHNldHMgdGhlIG9yZGVyIHRvIGxheSBvdXQgYW4gaXRlbSBpbiBhIGZsZXggb3IgZ3JpZCBjb250YWluZXIuIEl0ZW1zIGluIGEgY29udGFpbmVyIGFyZSBzb3J0ZWQgYnkgYXNjZW5kaW5nIG9yZGVyIHZhbHVlIGFuZCB0aGVuIGJ5IHRoZWlyIHNvdXJjZSBjb2RlIG9yZGVyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvb3JkZXIgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1vcmRlclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBvcmRlcj0gXCJvcmRlclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgb3JpZW50YXRpb24gYXR0cmlidXRlIGluZGljYXRlcyB0aGF0IHRoZSBnaXZlbiBnbHlwaCBpcyBvbmx5IHRvIGJlIHVzZWQgZm9yIGEgcGFydGljdWxhciB0ZXh0IGRpcmVjdGlvbiwgaS5lLiBob3Jpem9udGFsIG9yIHZlcnRpY2FsLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL29yaWVudGF0aW9uIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9b3JpZW50YXRpb25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgb3JpZW50YXRpb249IFwib3JpZW50YXRpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG9ycGhhbnMgQ1NTIHByb3BlcnR5IHNldHMgdGhlIG1pbmltdW0gbnVtYmVyIG9mIGxpbmVzIGluIGEgYmxvY2sgY29udGFpbmVyIHRoYXQgbXVzdCBiZSBzaG93biBhdCB0aGUgYm90dG9tIG9mIGEgcGFnZSwgcmVnaW9uLCBvciBjb2x1bW4uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9vcnBoYW5zIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9b3JwaGFuc1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBvcnBoYW5zPSBcIm9ycGhhbnNcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG91dGxpbmUgQ1NTIHNob3J0aGFuZCBwcm9wZXJ0eSBzZXQgYWxsIHRoZSBvdXRsaW5lIHByb3BlcnRpZXMgaW4gYSBzaW5nbGUgZGVjbGFyYXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9vdXRsaW5lIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9b3V0bGluZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBvdXRsaW5lPSBcIm91dGxpbmVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG91dGxpbmUtY29sb3IgQ1NTIHByb3BlcnR5IHNldHMgdGhlIGNvbG9yIG9mIGFuIGVsZW1lbnQncyBvdXRsaW5lLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvb3V0bGluZS1jb2xvciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW91dGxpbmUtY29sb3JcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwib3V0bGluZS1jb2xvclwiPSBcIm91dGxpbmUtY29sb3JcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG91dGxpbmUtb2Zmc2V0IENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiBhbiBvdXRsaW5lIGFuZCB0aGUgZWRnZSBvciBib3JkZXIgb2YgYW4gZWxlbWVudC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL291dGxpbmUtb2Zmc2V0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9b3V0bGluZS1vZmZzZXRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwib3V0bGluZS1vZmZzZXRcIj0gXCJvdXRsaW5lLW9mZnNldFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgb3V0bGluZS1zdHlsZSBDU1MgcHJvcGVydHkgc2V0cyB0aGUgc3R5bGUgb2YgYW4gZWxlbWVudCdzIG91dGxpbmUuIEFuIG91dGxpbmUgaXMgYSBsaW5lIHRoYXQgaXMgZHJhd24gYXJvdW5kIGFuIGVsZW1lbnQsIG91dHNpZGUgdGhlIGJvcmRlci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL291dGxpbmUtc3R5bGUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1vdXRsaW5lLXN0eWxlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIm91dGxpbmUtc3R5bGVcIj0gXCJvdXRsaW5lLXN0eWxlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBDU1Mgb3V0bGluZS13aWR0aCBwcm9wZXJ0eSBzZXRzIHRoZSB0aGlja25lc3Mgb2YgYW4gZWxlbWVudCdzIG91dGxpbmUuIEFuIG91dGxpbmUgaXMgYSBsaW5lIHRoYXQgaXMgZHJhd24gYXJvdW5kIGFuIGVsZW1lbnQsIG91dHNpZGUgdGhlIGJvcmRlci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL291dGxpbmUtd2lkdGggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1vdXRsaW5lLXdpZHRoXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIm91dGxpbmUtd2lkdGhcIj0gXCJvdXRsaW5lLXdpZHRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBvdmVyZmxvdyBDU1Mgc2hvcnRoYW5kIHByb3BlcnR5IHNldHMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIGFuIGVsZW1lbnQncyBvdmVyZmxvdyDigJQgaS5lLiB3aGVuIGFuIGVsZW1lbnQncyBjb250ZW50IGlzIHRvbyBiaWcgdG8gZml0IGluIGl0cyBibG9jayBmb3JtYXR0aW5nIGNvbnRleHQg4oCUIGluIGJvdGggZGlyZWN0aW9ucy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL292ZXJmbG93IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9b3ZlcmZsb3dcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgb3ZlcmZsb3c9IFwib3ZlcmZsb3dcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG92ZXJmbG93LWFuY2hvciBDU1MgcHJvcGVydHkgcHJvdmlkZXMgYSB3YXkgdG8gb3B0IG91dCBvZiB0aGUgYnJvd3NlcidzIHNjcm9sbCBhbmNob3JpbmcgYmVoYXZpb3IsIHdoaWNoIGFkanVzdHMgc2Nyb2xsIHBvc2l0aW9uIHRvIG1pbmltaXplIGNvbnRlbnQgc2hpZnRzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvb3ZlcmZsb3ctYW5jaG9yIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9b3ZlcmZsb3ctYW5jaG9yXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIm92ZXJmbG93LWFuY2hvclwiPSBcIm92ZXJmbG93LWFuY2hvclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgb3ZlcmZsb3ctd3JhcCBDU1MgcHJvcGVydHkgYXBwbGllcyB0byBpbmxpbmUgZWxlbWVudHMsIHNldHRpbmcgd2hldGhlciB0aGUgYnJvd3NlciBzaG91bGQgaW5zZXJ0IGxpbmUgYnJlYWtzIHdpdGhpbiBhbiBvdGhlcndpc2UgdW5icmVha2FibGUgc3RyaW5nIHRvIHByZXZlbnQgdGV4dCBmcm9tIG92ZXJmbG93aW5nIGl0cyBsaW5lIGJveC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL292ZXJmbG93LXdyYXAgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1vdmVyZmxvdy13cmFwXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIm92ZXJmbG93LXdyYXBcIj0gXCJvdmVyZmxvdy13cmFwXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBvdmVyZmxvdy14IENTUyBwcm9wZXJ0eSBzZXRzIHdoYXQgc2hvd3Mgd2hlbiBjb250ZW50IG92ZXJmbG93cyBhIGJsb2NrLWxldmVsIGVsZW1lbnQncyBsZWZ0IGFuZCByaWdodCBlZGdlcy4gVGhpcyBtYXkgYmUgbm90aGluZywgYSBzY3JvbGwgYmFyLCBvciB0aGUgb3ZlcmZsb3cgY29udGVudC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL292ZXJmbG93LXggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1vdmVyZmxvdy14XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIm92ZXJmbG93LXhcIj0gXCJvdmVyZmxvdy14XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBvdmVyZmxvdy15IENTUyBwcm9wZXJ0eSBzZXRzIHdoYXQgc2hvd3Mgd2hlbiBjb250ZW50IG92ZXJmbG93cyBhIGJsb2NrLWxldmVsIGVsZW1lbnQncyB0b3AgYW5kIGJvdHRvbSBlZGdlcy4gVGhpcyBtYXkgYmUgbm90aGluZywgYSBzY3JvbGwgYmFyLCBvciB0aGUgb3ZlcmZsb3cgY29udGVudC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL292ZXJmbG93LXkgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1vdmVyZmxvdy15XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIm92ZXJmbG93LXlcIj0gXCJvdmVyZmxvdy15XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBvdmVyc2Nyb2xsLWJlaGF2aW9yIENTUyBwcm9wZXJ0eSBzZXRzIHdoYXQgYSBicm93c2VyIGRvZXMgd2hlbiByZWFjaGluZyB0aGUgYm91bmRhcnkgb2YgYSBzY3JvbGxpbmcgYXJlYS4gSXQncyBhIHNob3J0aGFuZCBmb3Igb3ZlcnNjcm9sbC1iZWhhdmlvci14IGFuZCBvdmVyc2Nyb2xsLWJlaGF2aW9yLXkuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9vdmVyc2Nyb2xsLWJlaGF2aW9yIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9b3ZlcnNjcm9sbC1iZWhhdmlvclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJvdmVyc2Nyb2xsLWJlaGF2aW9yXCI9IFwib3ZlcnNjcm9sbC1iZWhhdmlvclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgb3ZlcnNjcm9sbC1iZWhhdmlvci1ibG9jayZuYnNwO0NTUyBwcm9wZXJ0eSBzZXRzIHRoZSBicm93c2VyJ3MgYmVoYXZpb3Igd2hlbiB0aGUgYmxvY2sgZGlyZWN0aW9uJm5ic3A7Ym91bmRhcnkgb2YgYSBzY3JvbGxpbmcgYXJlYSBpcyByZWFjaGVkLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvb3ZlcnNjcm9sbC1iZWhhdmlvci1ibG9jayBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW92ZXJzY3JvbGwtYmVoYXZpb3ItYmxvY2tcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwib3ZlcnNjcm9sbC1iZWhhdmlvci1ibG9ja1wiPSBcIm92ZXJzY3JvbGwtYmVoYXZpb3ItYmxvY2tcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG92ZXJzY3JvbGwtYmVoYXZpb3ItaW5saW5lJm5ic3A7Q1NTIHByb3BlcnR5IHNldHMgdGhlIGJyb3dzZXIncyBiZWhhdmlvciB3aGVuIHRoZSBpbmxpbmUmbmJzcDtkaXJlY3Rpb24mbmJzcDtib3VuZGFyeSBvZiBhIHNjcm9sbGluZyBhcmVhIGlzIHJlYWNoZWQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9vdmVyc2Nyb2xsLWJlaGF2aW9yLWlubGluZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW92ZXJzY3JvbGwtYmVoYXZpb3ItaW5saW5lXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIm92ZXJzY3JvbGwtYmVoYXZpb3ItaW5saW5lXCI9IFwib3ZlcnNjcm9sbC1iZWhhdmlvci1pbmxpbmVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG92ZXJzY3JvbGwtYmVoYXZpb3IteCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgYnJvd3NlcidzIGJlaGF2aW9yIHdoZW4gdGhlIGhvcml6b250YWwgYm91bmRhcnkgb2YgYSBzY3JvbGxpbmcgYXJlYSBpcyByZWFjaGVkLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvb3ZlcnNjcm9sbC1iZWhhdmlvci14IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9b3ZlcnNjcm9sbC1iZWhhdmlvci14XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIm92ZXJzY3JvbGwtYmVoYXZpb3IteFwiPSBcIm92ZXJzY3JvbGwtYmVoYXZpb3IteFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgb3ZlcnNjcm9sbC1iZWhhdmlvci15IENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBicm93c2VyJ3MgYmVoYXZpb3Igd2hlbiB0aGUgdmVydGljYWwgYm91bmRhcnkgb2YgYSBzY3JvbGxpbmcgYXJlYSBpcyByZWFjaGVkLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvb3ZlcnNjcm9sbC1iZWhhdmlvci15IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9b3ZlcnNjcm9sbC1iZWhhdmlvci15XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIm92ZXJzY3JvbGwtYmVoYXZpb3IteVwiPSBcIm92ZXJzY3JvbGwtYmVoYXZpb3IteVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgcGFkZGluZyBDU1Mgc2hvcnRoYW5kIHByb3BlcnR5IHNldHMgdGhlIHBhZGRpbmcgYXJlYSBvbiBhbGwgZm91ciBzaWRlcyBvZiBhbiBlbGVtZW50IGF0IG9uY2UuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9wYWRkaW5nIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9cGFkZGluZ1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwYWRkaW5nPSBcInBhZGRpbmdcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHBhZGRpbmctYmxvY2sgQ1NTIHNob3J0aGFuZCBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBsb2dpY2FsIGJsb2NrIHN0YXJ0IGFuZCBlbmQgcGFkZGluZyBvZiBhbiBlbGVtZW50LCB3aGljaCBtYXBzIHRvIHBoeXNpY2FsIHBhZGRpbmcgcHJvcGVydGllcyBkZXBlbmRpbmcgb24gdGhlIGVsZW1lbnQncyB3cml0aW5nIG1vZGUsIGRpcmVjdGlvbmFsaXR5LCBhbmQgdGV4dCBvcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3BhZGRpbmctYmxvY2sgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1wYWRkaW5nLWJsb2NrXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInBhZGRpbmctYmxvY2tcIj0gXCJwYWRkaW5nLWJsb2NrXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBwYWRkaW5nLWJsb2NrLWVuZCBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgbG9naWNhbCBibG9jayBlbmQgcGFkZGluZyBvZiBhbiBlbGVtZW50LCB3aGljaCBtYXBzIHRvIGEgcGh5c2ljYWwgcGFkZGluZyBkZXBlbmRpbmcgb24gdGhlIGVsZW1lbnQncyB3cml0aW5nIG1vZGUsIGRpcmVjdGlvbmFsaXR5LCBhbmQgdGV4dCBvcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3BhZGRpbmctYmxvY2stZW5kIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9cGFkZGluZy1ibG9jay1lbmRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwicGFkZGluZy1ibG9jay1lbmRcIj0gXCJwYWRkaW5nLWJsb2NrLWVuZFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgcGFkZGluZy1ibG9jay1zdGFydCBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgbG9naWNhbCBibG9jayBzdGFydCBwYWRkaW5nIG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gYSBwaHlzaWNhbCBwYWRkaW5nIGRlcGVuZGluZyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmcgbW9kZSwgZGlyZWN0aW9uYWxpdHksIGFuZCB0ZXh0IG9yaWVudGF0aW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvcGFkZGluZy1ibG9jay1zdGFydCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXBhZGRpbmctYmxvY2stc3RhcnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwicGFkZGluZy1ibG9jay1zdGFydFwiPSBcInBhZGRpbmctYmxvY2stc3RhcnRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHBhZGRpbmctYm90dG9tIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBoZWlnaHQgb2YgdGhlIHBhZGRpbmcgYXJlYSBvbiB0aGUgYm90dG9tIG9mIGFuIGVsZW1lbnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9wYWRkaW5nLWJvdHRvbSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXBhZGRpbmctYm90dG9tXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInBhZGRpbmctYm90dG9tXCI9IFwicGFkZGluZy1ib3R0b21cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHBhZGRpbmctaW5saW5lIENTUyBzaG9ydGhhbmQgcHJvcGVydHkgZGVmaW5lcyB0aGUgbG9naWNhbCBpbmxpbmUgc3RhcnQgYW5kIGVuZCBwYWRkaW5nIG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gcGh5c2ljYWwgcGFkZGluZyBwcm9wZXJ0aWVzIGRlcGVuZGluZyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmcgbW9kZSwgZGlyZWN0aW9uYWxpdHksIGFuZCB0ZXh0IG9yaWVudGF0aW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvcGFkZGluZy1pbmxpbmUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1wYWRkaW5nLWlubGluZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJwYWRkaW5nLWlubGluZVwiPSBcInBhZGRpbmctaW5saW5lXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBwYWRkaW5nLWlubGluZS1lbmQgQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIGxvZ2ljYWwgaW5saW5lIGVuZCBwYWRkaW5nIG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gYSBwaHlzaWNhbCBwYWRkaW5nIGRlcGVuZGluZyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmcgbW9kZSwgZGlyZWN0aW9uYWxpdHksIGFuZCB0ZXh0IG9yaWVudGF0aW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvcGFkZGluZy1pbmxpbmUtZW5kIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9cGFkZGluZy1pbmxpbmUtZW5kXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInBhZGRpbmctaW5saW5lLWVuZFwiPSBcInBhZGRpbmctaW5saW5lLWVuZFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgcGFkZGluZy1pbmxpbmUtc3RhcnQgQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIGxvZ2ljYWwgaW5saW5lIHN0YXJ0IHBhZGRpbmcgb2YgYW4gZWxlbWVudCwgd2hpY2ggbWFwcyB0byBhIHBoeXNpY2FsIHBhZGRpbmcgZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9wYWRkaW5nLWlubGluZS1zdGFydCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXBhZGRpbmctaW5saW5lLXN0YXJ0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInBhZGRpbmctaW5saW5lLXN0YXJ0XCI9IFwicGFkZGluZy1pbmxpbmUtc3RhcnRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHBhZGRpbmctbGVmdCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgd2lkdGggb2YgdGhlIHBhZGRpbmcgYXJlYSB0byB0aGUgbGVmdCBvZiBhbiBlbGVtZW50LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvcGFkZGluZy1sZWZ0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9cGFkZGluZy1sZWZ0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInBhZGRpbmctbGVmdFwiPSBcInBhZGRpbmctbGVmdFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgcGFkZGluZy1yaWdodCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgd2lkdGggb2YgdGhlIHBhZGRpbmcgYXJlYSBvbiB0aGUgcmlnaHQgb2YgYW4gZWxlbWVudC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3BhZGRpbmctcmlnaHQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1wYWRkaW5nLXJpZ2h0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInBhZGRpbmctcmlnaHRcIj0gXCJwYWRkaW5nLXJpZ2h0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBwYWRkaW5nLXRvcCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSBwYWRkaW5nIGFyZWEgb24gdGhlIHRvcCBvZiBhbiBlbGVtZW50LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvcGFkZGluZy10b3AgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1wYWRkaW5nLXRvcFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJwYWRkaW5nLXRvcFwiPSBcInBhZGRpbmctdG9wXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcGFnZT0gXCJwYWdlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBwYWdlLWJyZWFrLWFmdGVyIENTUyBwcm9wZXJ0eSBhZGp1c3RzIHBhZ2UgYnJlYWtzIGFmdGVyIHRoZSBjdXJyZW50IGVsZW1lbnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9wYWdlLWJyZWFrLWFmdGVyIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9cGFnZS1icmVhay1hZnRlclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJwYWdlLWJyZWFrLWFmdGVyXCI9IFwicGFnZS1icmVhay1hZnRlclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgcGFnZS1icmVhay1iZWZvcmUgQ1NTIHByb3BlcnR5IGFkanVzdHMgcGFnZSBicmVha3MgYmVmb3JlIHRoZSBjdXJyZW50IGVsZW1lbnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9wYWdlLWJyZWFrLWJlZm9yZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXBhZ2UtYnJlYWstYmVmb3JlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInBhZ2UtYnJlYWstYmVmb3JlXCI9IFwicGFnZS1icmVhay1iZWZvcmVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHBhZ2UtYnJlYWstaW5zaWRlIENTUyBwcm9wZXJ0eSBhZGp1c3RzIHBhZ2UgYnJlYWtzIGluc2lkZSB0aGUgY3VycmVudCBlbGVtZW50LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvcGFnZS1icmVhay1pbnNpZGUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1wYWdlLWJyZWFrLWluc2lkZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJwYWdlLWJyZWFrLWluc2lkZVwiPSBcInBhZ2UtYnJlYWstaW5zaWRlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwicGFnZS1vcmllbnRhdGlvblwiPSBcInBhZ2Utb3JpZW50YXRpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHBhaW50LW9yZGVyIENTUyBwcm9wZXJ0eSBsZXRzIHlvdSBjb250cm9sIHRoZSBvcmRlciBpbiB3aGljaCB0aGUgZmlsbCBhbmQgc3Ryb2tlIChhbmQgcGFpbnRpbmcgbWFya2Vycykgb2YgdGV4dCBjb250ZW50IGFuZCBzaGFwZXMgYXJlIGRyYXduLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvcGFpbnQtb3JkZXIgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1wYWludC1vcmRlclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJwYWludC1vcmRlclwiPSBcInBhaW50LW9yZGVyXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBwZXJzcGVjdGl2ZSBDU1MgcHJvcGVydHkgZGV0ZXJtaW5lcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgej0wIHBsYW5lIGFuZCB0aGUgdXNlciBpbiBvcmRlciB0byBnaXZlIGEgM0QtcG9zaXRpb25lZCBlbGVtZW50IHNvbWUgcGVyc3BlY3RpdmUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9wZXJzcGVjdGl2ZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXBlcnNwZWN0aXZlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHBlcnNwZWN0aXZlPSBcInBlcnNwZWN0aXZlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBwZXJzcGVjdGl2ZS1vcmlnaW4gQ1NTIHByb3BlcnR5IGRldGVybWluZXMgdGhlIHBvc2l0aW9uIGF0IHdoaWNoIHRoZSB2aWV3ZXIgaXMgbG9va2luZy4gSXQgaXMgdXNlZCBhcyB0aGUgdmFuaXNoaW5nIHBvaW50IGJ5IHRoZSBwZXJzcGVjdGl2ZSBwcm9wZXJ0eS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3BlcnNwZWN0aXZlLW9yaWdpbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXBlcnNwZWN0aXZlLW9yaWdpblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJwZXJzcGVjdGl2ZS1vcmlnaW5cIj0gXCJwZXJzcGVjdGl2ZS1vcmlnaW5cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHBsYWNlLWNvbnRlbnQgQ1NTIHNob3J0aGFuZCBwcm9wZXJ0eSBhbGxvd3MgeW91IHRvIGFsaWduIGNvbnRlbnQgYWxvbmcgYm90aCB0aGUgYmxvY2sgYW5kIGlubGluZSBkaXJlY3Rpb25zIGF0IG9uY2UgKGkuZS4gdGhlIGFsaWduLWNvbnRlbnQgYW5kIGp1c3RpZnktY29udGVudCBwcm9wZXJ0aWVzKSBpbiBhIHJlbGV2YW50IGxheW91dCBzeXN0ZW0gc3VjaCBhcyBHcmlkIG9yIEZsZXhib3guXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9wbGFjZS1jb250ZW50IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9cGxhY2UtY29udGVudFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJwbGFjZS1jb250ZW50XCI9IFwicGxhY2UtY29udGVudFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgQ1NTIHBsYWNlLWl0ZW1zIHNob3J0aGFuZCBwcm9wZXJ0eSBhbGxvd3MgeW91IHRvIGFsaWduIGl0ZW1zIGFsb25nIGJvdGggdGhlIGJsb2NrIGFuZCBpbmxpbmUgZGlyZWN0aW9ucyBhdCBvbmNlIChpLmUuIHRoZSBhbGlnbi1pdGVtcyBhbmQganVzdGlmeS1pdGVtcyBwcm9wZXJ0aWVzKSBpbiBhIHJlbGV2YW50IGxheW91dCBzeXN0ZW0gc3VjaCBhcyBHcmlkIG9yIEZsZXhib3guIElmIHRoZSBzZWNvbmQgdmFsdWUgaXMgbm90IHNldCwgdGhlIGZpcnN0IHZhbHVlIGlzIGFsc28gdXNlZCBmb3IgaXQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9wbGFjZS1pdGVtcyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXBsYWNlLWl0ZW1zXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInBsYWNlLWl0ZW1zXCI9IFwicGxhY2UtaXRlbXNcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHBsYWNlLXNlbGYgQ1NTIHNob3J0aGFuZCBwcm9wZXJ0eSBhbGxvd3MgeW91IHRvIGFsaWduIGFuIGluZGl2aWR1YWwgaXRlbSBpbiBib3RoIHRoZSBibG9jayBhbmQgaW5saW5lIGRpcmVjdGlvbnMgYXQgb25jZSAoaS5lLiB0aGUgYWxpZ24tc2VsZiBhbmQganVzdGlmeS1zZWxmIHByb3BlcnRpZXMpIGluIGEgcmVsZXZhbnQgbGF5b3V0IHN5c3RlbSBzdWNoIGFzIEdyaWQgb3IgRmxleGJveC4gSWYgdGhlIHNlY29uZCB2YWx1ZSBpcyBub3QgcHJlc2VudCwgdGhlIGZpcnN0IHZhbHVlIGlzIGFsc28gdXNlZCBmb3IgaXQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9wbGFjZS1zZWxmIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9cGxhY2Utc2VsZlxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJwbGFjZS1zZWxmXCI9IFwicGxhY2Utc2VsZlwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgcG9pbnRlci1ldmVudHMgQ1NTIHByb3BlcnR5IHNldHMgdW5kZXIgd2hhdCBjaXJjdW1zdGFuY2VzIChpZiBhbnkpIGEgcGFydGljdWxhciBncmFwaGljIGVsZW1lbnQgY2FuIGJlY29tZSB0aGUgdGFyZ2V0IG9mIHBvaW50ZXIgZXZlbnRzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvcG9pbnRlci1ldmVudHMgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1wb2ludGVyLWV2ZW50c1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJwb2ludGVyLWV2ZW50c1wiPSBcInBvaW50ZXItZXZlbnRzXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBwb3NpdGlvbiBDU1MgcHJvcGVydHkgc2V0cyBob3cgYW4gZWxlbWVudCBpcyBwb3NpdGlvbmVkIGluIGEgZG9jdW1lbnQuIFRoZSB0b3AsIHJpZ2h0LCBib3R0b20sIGFuZCBsZWZ0IHByb3BlcnRpZXMgZGV0ZXJtaW5lIHRoZSBmaW5hbCBsb2NhdGlvbiBvZiBwb3NpdGlvbmVkIGVsZW1lbnRzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvcG9zaXRpb24gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1wb3NpdGlvblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwb3NpdGlvbj0gXCJwb3NpdGlvblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgcXVvdGVzIENTUyBwcm9wZXJ0eSBzZXRzIGhvdyB0aGUgYnJvd3NlciBzaG91bGQgcmVuZGVyIHF1b3RhdGlvbiBtYXJrcyB0aGF0IGFyZSBhZGRlZCB1c2luZyB0aGUgb3Blbi1xdW90ZXMgb3IgY2xvc2UtcXVvdGVzIHZhbHVlcyBvZiB0aGUgQ1NTIGNvbnRlbnQgcHJvcGVydHkuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9xdW90ZXMgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1xdW90ZXNcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcXVvdGVzPSBcInF1b3Rlc1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgciBhdHRyaWJ1dGUgZGVmaW5lcyB0aGUgcmFkaXVzIG9mIGEgY2lyY2xlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL3IgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1yXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHI9IFwiclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgcmVzaXplIENTUyBwcm9wZXJ0eSBzZXRzIHdoZXRoZXIgYW4gZWxlbWVudCBpcyByZXNpemFibGUsIGFuZCBpZiBzbywgaW4gd2hpY2ggZGlyZWN0aW9ucy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3Jlc2l6ZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXJlc2l6ZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICByZXNpemU9IFwicmVzaXplXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSByaWdodCBDU1MgcHJvcGVydHkgcGFydGljaXBhdGVzIGluIHNwZWNpZnlpbmcgdGhlIGhvcml6b250YWwgcG9zaXRpb24gb2YgYSBwb3NpdGlvbmVkIGVsZW1lbnQuIEl0IGhhcyBubyBlZmZlY3Qgb24gbm9uLXBvc2l0aW9uZWQgZWxlbWVudHMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9yaWdodCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXJpZ2h0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJpZ2h0PSBcInJpZ2h0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSByb3ctZ2FwIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBzaXplIG9mIHRoZSBnYXAgKGd1dHRlcikgYmV0d2VlbiBhbiBlbGVtZW50J3MgZ3JpZCByb3dzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvcm93LWdhcCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXJvdy1nYXBcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwicm93LWdhcFwiPSBcInJvdy1nYXBcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHJ1YnktcG9zaXRpb24gQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIHBvc2l0aW9uIG9mIGEgcnVieSBlbGVtZW50IHJlbGF0aXZlcyB0byBpdHMgYmFzZSBlbGVtZW50LiBJdCBjYW4gYmUgcG9zaXRpb25lZCBvdmVyIHRoZSBlbGVtZW50IChvdmVyKSwgdW5kZXIgaXQgKHVuZGVyKSwgb3IgYmV0d2VlbiB0aGUgY2hhcmFjdGVycyBvbiB0aGVpciByaWdodCBzaWRlIChpbnRlci1jaGFyYWN0ZXIpLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvcnVieS1wb3NpdGlvbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXJ1YnktcG9zaXRpb25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwicnVieS1wb3NpdGlvblwiPSBcInJ1YnktcG9zaXRpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHJ4IGF0dHJpYnV0ZSBkZWZpbmVzIGEgcmFkaXVzIG9uIHRoZSB4LWF4aXMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NWRy9BdHRyaWJ1dGUvcnggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1yeFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICByeD0gXCJyeFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgcnkgYXR0cmlidXRlIGRlZmluZXMgYSByYWRpdXMgb24gdGhlIHktYXhpcy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9yeSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXJ5XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJ5PSBcInJ5XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzY3JvbGwtYmVoYXZpb3IgQ1NTIHByb3BlcnR5IHNldHMgdGhlIGJlaGF2aW9yIGZvciBhIHNjcm9sbGluZyBib3ggd2hlbiBzY3JvbGxpbmcgaXMgdHJpZ2dlcmVkIGJ5IHRoZSBuYXZpZ2F0aW9uIG9yIENTU09NIHNjcm9sbGluZyBBUElzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvc2Nyb2xsLWJlaGF2aW9yIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c2Nyb2xsLWJlaGF2aW9yXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInNjcm9sbC1iZWhhdmlvclwiPSBcInNjcm9sbC1iZWhhdmlvclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc2Nyb2xsLW1hcmdpbiBzaG9ydGhhbmQgcHJvcGVydHkgc2V0cyBhbGwgb2YgdGhlIHNjcm9sbCBtYXJnaW5zIG9mIGFuIGVsZW1lbnQgYXQgb25jZSwgYXNzaWduaW5nIHZhbHVlcyBtdWNoIGxpa2UgdGhlIG1hcmdpbiBwcm9wZXJ0eSBkb2VzIGZvciBtYXJnaW5zIG9mIGFuIGVsZW1lbnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9zY3JvbGwtbWFyZ2luIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c2Nyb2xsLW1hcmdpblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzY3JvbGwtbWFyZ2luXCI9IFwic2Nyb2xsLW1hcmdpblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc2Nyb2xsLW1hcmdpbi1ibG9jayBzaG9ydGhhbmQgcHJvcGVydHkgc2V0cyB0aGUgc2Nyb2xsIG1hcmdpbnMgb2YgYW4gZWxlbWVudCBpbiB0aGUgYmxvY2sgZGltZW5zaW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvc2Nyb2xsLW1hcmdpbi1ibG9jayBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXNjcm9sbC1tYXJnaW4tYmxvY2tcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic2Nyb2xsLW1hcmdpbi1ibG9ja1wiPSBcInNjcm9sbC1tYXJnaW4tYmxvY2tcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHNjcm9sbC1tYXJnaW4tYmxvY2stZW5kJm5ic3A7cHJvcGVydHkgZGVmaW5lcyB0aGUmbmJzcDttYXJnaW4gb2YmbmJzcDt0aGUgc2Nyb2xsIHNuYXAgYXJlYSBhdCB0aGUgZW5kJm5ic3A7b2YgdGhlIGJsb2NrIGRpbWVuc2lvbiZuYnNwO3RoYXQgaXMgdXNlZCBmb3Igc25hcHBpbmcgdGhpcyBib3ggdG8gdGhlIHNuYXBwb3J0LiBUaGUgc2Nyb2xsIHNuYXAgYXJlYSBpcyBkZXRlcm1pbmVkIGJ5IHRha2luZyB0aGUgdHJhbnNmb3JtZWQgYm9yZGVyIGJveCwgZmluZGluZyBpdHMgcmVjdGFuZ3VsYXIgYm91bmRpbmcgYm94IChheGlzLWFsaWduZWQgaW4gdGhlIHNjcm9sbCBjb250YWluZXLigJlzIGNvb3JkaW5hdGUgc3BhY2UpLCB0aGVuIGFkZGluZyB0aGUgc3BlY2lmaWVkIG91dHNldHMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9zY3JvbGwtbWFyZ2luLWJsb2NrLWVuZCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXNjcm9sbC1tYXJnaW4tYmxvY2stZW5kXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInNjcm9sbC1tYXJnaW4tYmxvY2stZW5kXCI9IFwic2Nyb2xsLW1hcmdpbi1ibG9jay1lbmRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHNjcm9sbC1tYXJnaW4tYmxvY2stc3RhcnQmbmJzcDtwcm9wZXJ0eSBkZWZpbmVzIHRoZSZuYnNwO21hcmdpbiBvZiZuYnNwO3RoZSBzY3JvbGwgc25hcCBhcmVhIGF0IHRoZSBzdGFydCBvZiB0aGUgYmxvY2sgZGltZW5zaW9uJm5ic3A7dGhhdCBpcyB1c2VkIGZvciBzbmFwcGluZyB0aGlzIGJveCB0byB0aGUgc25hcHBvcnQuIFRoZSBzY3JvbGwgc25hcCBhcmVhIGlzIGRldGVybWluZWQgYnkgdGFraW5nIHRoZSB0cmFuc2Zvcm1lZCBib3JkZXIgYm94LCBmaW5kaW5nIGl0cyByZWN0YW5ndWxhciBib3VuZGluZyBib3ggKGF4aXMtYWxpZ25lZCBpbiB0aGUgc2Nyb2xsIGNvbnRhaW5lcuKAmXMgY29vcmRpbmF0ZSBzcGFjZSksIHRoZW4gYWRkaW5nIHRoZSBzcGVjaWZpZWQgb3V0c2V0cy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3Njcm9sbC1tYXJnaW4tYmxvY2stc3RhcnQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zY3JvbGwtbWFyZ2luLWJsb2NrLXN0YXJ0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInNjcm9sbC1tYXJnaW4tYmxvY2stc3RhcnRcIj0gXCJzY3JvbGwtbWFyZ2luLWJsb2NrLXN0YXJ0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzY3JvbGwtbWFyZ2luLWJvdHRvbSBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBib3R0b20gbWFyZ2luIG9mIHRoZSBzY3JvbGwgc25hcCBhcmVhIHRoYXQgaXMgdXNlZCBmb3Igc25hcHBpbmcgdGhpcyBib3ggdG8gdGhlIHNuYXBwb3J0LiBUaGUgc2Nyb2xsIHNuYXAgYXJlYSBpcyBkZXRlcm1pbmVkIGJ5IHRha2luZyB0aGUgdHJhbnNmb3JtZWQgYm9yZGVyIGJveCwgZmluZGluZyBpdHMgcmVjdGFuZ3VsYXIgYm91bmRpbmcgYm94IChheGlzLWFsaWduZWQgaW4gdGhlIHNjcm9sbCBjb250YWluZXLigJlzIGNvb3JkaW5hdGUgc3BhY2UpLCB0aGVuIGFkZGluZyB0aGUgc3BlY2lmaWVkIG91dHNldHMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9zY3JvbGwtbWFyZ2luLWJvdHRvbSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXNjcm9sbC1tYXJnaW4tYm90dG9tXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInNjcm9sbC1tYXJnaW4tYm90dG9tXCI9IFwic2Nyb2xsLW1hcmdpbi1ib3R0b21cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHNjcm9sbC1tYXJnaW4taW5saW5lIHNob3J0aGFuZCBwcm9wZXJ0eSBzZXRzIHRoZSBzY3JvbGwgbWFyZ2lucyBvZiBhbiBlbGVtZW50IGluIHRoZSBpbmxpbmUgZGltZW5zaW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvc2Nyb2xsLW1hcmdpbi1pbmxpbmUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zY3JvbGwtbWFyZ2luLWlubGluZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzY3JvbGwtbWFyZ2luLWlubGluZVwiPSBcInNjcm9sbC1tYXJnaW4taW5saW5lXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzY3JvbGwtbWFyZ2luLWlubGluZS1lbmQmbmJzcDtwcm9wZXJ0eSBkZWZpbmVzIHRoZSZuYnNwO21hcmdpbiBvZiZuYnNwO3RoZSBzY3JvbGwgc25hcCBhcmVhIGF0IHRoZSBlbmQmbmJzcDtvZiB0aGUgaW5saW5lJm5ic3A7ZGltZW5zaW9uJm5ic3A7dGhhdCBpcyB1c2VkIGZvciBzbmFwcGluZyB0aGlzIGJveCB0byB0aGUgc25hcHBvcnQuIFRoZSBzY3JvbGwgc25hcCBhcmVhIGlzIGRldGVybWluZWQgYnkgdGFraW5nIHRoZSB0cmFuc2Zvcm1lZCBib3JkZXIgYm94LCBmaW5kaW5nIGl0cyByZWN0YW5ndWxhciBib3VuZGluZyBib3ggKGF4aXMtYWxpZ25lZCBpbiB0aGUgc2Nyb2xsIGNvbnRhaW5lcuKAmXMgY29vcmRpbmF0ZSBzcGFjZSksIHRoZW4gYWRkaW5nIHRoZSBzcGVjaWZpZWQgb3V0c2V0cy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3Njcm9sbC1tYXJnaW4taW5saW5lLWVuZCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXNjcm9sbC1tYXJnaW4taW5saW5lLWVuZFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzY3JvbGwtbWFyZ2luLWlubGluZS1lbmRcIj0gXCJzY3JvbGwtbWFyZ2luLWlubGluZS1lbmRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHNjcm9sbC1tYXJnaW4taW5saW5lLXN0YXJ0IHByb3BlcnR5IGRlZmluZXMgdGhlIG1hcmdpbiBvZiB0aGUgc2Nyb2xsIHNuYXAgYXJlYSBhdCB0aGUgc3RhcnQgb2YgdGhlIGlubGluZSBkaW1lbnNpb24gdGhhdCBpcyB1c2VkIGZvciBzbmFwcGluZyB0aGlzIGJveCB0byB0aGUgc25hcHBvcnQuIFRoZSBzY3JvbGwgc25hcCBhcmVhIGlzIGRldGVybWluZWQgYnkgdGFraW5nIHRoZSB0cmFuc2Zvcm1lZCBib3JkZXIgYm94LCBmaW5kaW5nIGl0cyByZWN0YW5ndWxhciBib3VuZGluZyBib3ggKGF4aXMtYWxpZ25lZCBpbiB0aGUgc2Nyb2xsIGNvbnRhaW5lcuKAmXMgY29vcmRpbmF0ZSBzcGFjZSksIHRoZW4gYWRkaW5nIHRoZSBzcGVjaWZpZWQgb3V0c2V0cy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3Njcm9sbC1tYXJnaW4taW5saW5lLXN0YXJ0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c2Nyb2xsLW1hcmdpbi1pbmxpbmUtc3RhcnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic2Nyb2xsLW1hcmdpbi1pbmxpbmUtc3RhcnRcIj0gXCJzY3JvbGwtbWFyZ2luLWlubGluZS1zdGFydFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc2Nyb2xsLW1hcmdpbi1sZWZ0IHByb3BlcnR5IGRlZmluZXMgdGhlIGxlZnQgbWFyZ2luIG9mIHRoZSBzY3JvbGwgc25hcCBhcmVhIHRoYXQgaXMgdXNlZCBmb3Igc25hcHBpbmcgdGhpcyBib3ggdG8gdGhlIHNuYXBwb3J0LiBUaGUgc2Nyb2xsIHNuYXAgYXJlYSBpcyBkZXRlcm1pbmVkIGJ5IHRha2luZyB0aGUgdHJhbnNmb3JtZWQgYm9yZGVyIGJveCwgZmluZGluZyBpdHMgcmVjdGFuZ3VsYXIgYm91bmRpbmcgYm94IChheGlzLWFsaWduZWQgaW4gdGhlIHNjcm9sbCBjb250YWluZXLigJlzIGNvb3JkaW5hdGUgc3BhY2UpLCB0aGVuIGFkZGluZyB0aGUgc3BlY2lmaWVkIG91dHNldHMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9zY3JvbGwtbWFyZ2luLWxlZnQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zY3JvbGwtbWFyZ2luLWxlZnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic2Nyb2xsLW1hcmdpbi1sZWZ0XCI9IFwic2Nyb2xsLW1hcmdpbi1sZWZ0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzY3JvbGwtbWFyZ2luLXJpZ2h0IHByb3BlcnR5IGRlZmluZXMgdGhlIHJpZ2h0IG1hcmdpbiBvZiB0aGUgc2Nyb2xsIHNuYXAgYXJlYSB0aGF0IGlzIHVzZWQgZm9yIHNuYXBwaW5nIHRoaXMgYm94IHRvIHRoZSBzbmFwcG9ydC4gVGhlIHNjcm9sbCBzbmFwIGFyZWEgaXMgZGV0ZXJtaW5lZCBieSB0YWtpbmcgdGhlIHRyYW5zZm9ybWVkIGJvcmRlciBib3gsIGZpbmRpbmcgaXRzIHJlY3Rhbmd1bGFyIGJvdW5kaW5nIGJveCAoYXhpcy1hbGlnbmVkIGluIHRoZSBzY3JvbGwgY29udGFpbmVy4oCZcyBjb29yZGluYXRlIHNwYWNlKSwgdGhlbiBhZGRpbmcgdGhlIHNwZWNpZmllZCBvdXRzZXRzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvc2Nyb2xsLW1hcmdpbi1yaWdodCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXNjcm9sbC1tYXJnaW4tcmlnaHRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic2Nyb2xsLW1hcmdpbi1yaWdodFwiPSBcInNjcm9sbC1tYXJnaW4tcmlnaHRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHNjcm9sbC1tYXJnaW4tdG9wIHByb3BlcnR5IGRlZmluZXMgdGhlIHRvcCBtYXJnaW4gb2YgdGhlIHNjcm9sbCBzbmFwIGFyZWEgdGhhdCBpcyB1c2VkIGZvciBzbmFwcGluZyB0aGlzIGJveCB0byB0aGUgc25hcHBvcnQuIFRoZSBzY3JvbGwgc25hcCBhcmVhIGlzIGRldGVybWluZWQgYnkgdGFraW5nIHRoZSB0cmFuc2Zvcm1lZCBib3JkZXIgYm94LCBmaW5kaW5nIGl0cyByZWN0YW5ndWxhciBib3VuZGluZyBib3ggKGF4aXMtYWxpZ25lZCBpbiB0aGUgc2Nyb2xsIGNvbnRhaW5lcuKAmXMgY29vcmRpbmF0ZSBzcGFjZSksIHRoZW4gYWRkaW5nIHRoZSBzcGVjaWZpZWQgb3V0c2V0cy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3Njcm9sbC1tYXJnaW4tdG9wIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c2Nyb2xsLW1hcmdpbi10b3BcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic2Nyb2xsLW1hcmdpbi10b3BcIj0gXCJzY3JvbGwtbWFyZ2luLXRvcFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc2Nyb2xsLXBhZGRpbmcgc2hvcnRoYW5kIHByb3BlcnR5IHNldHMgc2Nyb2xsIHBhZGRpbmcgb24gYWxsIHNpZGVzIG9mIGFuIGVsZW1lbnQgYXQgb25jZSwgbXVjaCBsaWtlIHRoZSBwYWRkaW5nIHByb3BlcnR5IGRvZXMgZm9yIHBhZGRpbmcgb24gYW4gZWxlbWVudC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3Njcm9sbC1wYWRkaW5nIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c2Nyb2xsLXBhZGRpbmdcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic2Nyb2xsLXBhZGRpbmdcIj0gXCJzY3JvbGwtcGFkZGluZ1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc2Nyb2xsLXBhZGRpbmctYmxvY2sgc2hvcnRoYW5kIHByb3BlcnR5IHNldHMgdGhlIHNjcm9sbCBwYWRkaW5nIG9mIGFuIGVsZW1lbnQgaW4gdGhlIGJsb2NrIGRpbWVuc2lvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3Njcm9sbC1wYWRkaW5nLWJsb2NrIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c2Nyb2xsLXBhZGRpbmctYmxvY2tcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic2Nyb2xsLXBhZGRpbmctYmxvY2tcIj0gXCJzY3JvbGwtcGFkZGluZy1ibG9ja1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc2Nyb2xsLXBhZGRpbmctYmxvY2stZW5kIHByb3BlcnR5IGRlZmluZXMgb2Zmc2V0cyBmb3IgdGhlIGVuZCBlZGdlIGluIHRoZSBibG9jayBkaW1lbnNpb24gb2YgdGhlIG9wdGltYWwgdmlld2luZyByZWdpb24gb2YgdGhlIHNjcm9sbHBvcnQ6IHRoZSByZWdpb24gdXNlZCBhcyB0aGUgdGFyZ2V0IHJlZ2lvbiBmb3IgcGxhY2luZyB0aGluZ3MgaW4gdmlldyBvZiB0aGUgdXNlci4gVGhpcyBhbGxvd3MgdGhlIGF1dGhvciB0byBleGNsdWRlIHJlZ2lvbnMgb2YgdGhlIHNjcm9sbHBvcnQgdGhhdCBhcmUgb2JzY3VyZWQgYnkgb3RoZXIgY29udGVudCAoc3VjaCBhcyBmaXhlZC1wb3NpdGlvbmVkIHRvb2xiYXJzIG9yIHNpZGViYXJzKSBvciB0byBwdXQgbW9yZSBicmVhdGhpbmcgcm9vbSBiZXR3ZWVuIGEgdGFyZ2V0ZWQgZWxlbWVudCBhbmQgdGhlIGVkZ2VzIG9mIHRoZSBzY3JvbGxwb3J0LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvc2Nyb2xsLXBhZGRpbmctYmxvY2stZW5kIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c2Nyb2xsLXBhZGRpbmctYmxvY2stZW5kXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInNjcm9sbC1wYWRkaW5nLWJsb2NrLWVuZFwiPSBcInNjcm9sbC1wYWRkaW5nLWJsb2NrLWVuZFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc2Nyb2xsLXBhZGRpbmctYmxvY2stc3RhcnQgcHJvcGVydHkgZGVmaW5lcyBvZmZzZXRzIGZvciB0aGUgc3RhcnQgZWRnZSBpbiB0aGUgYmxvY2sgZGltZW5zaW9uIG9mIHRoZSBvcHRpbWFsIHZpZXdpbmcgcmVnaW9uIG9mIHRoZSBzY3JvbGxwb3J0OiB0aGUgcmVnaW9uIHVzZWQgYXMgdGhlIHRhcmdldCByZWdpb24gZm9yIHBsYWNpbmcgdGhpbmdzIGluIHZpZXcgb2YgdGhlIHVzZXIuIFRoaXMgYWxsb3dzIHRoZSBhdXRob3IgdG8gZXhjbHVkZSByZWdpb25zIG9mIHRoZSBzY3JvbGxwb3J0IHRoYXQgYXJlIG9ic2N1cmVkIGJ5IG90aGVyIGNvbnRlbnQgKHN1Y2ggYXMgZml4ZWQtcG9zaXRpb25lZCB0b29sYmFycyBvciBzaWRlYmFycykgb3IgdG8gcHV0IG1vcmUgYnJlYXRoaW5nIHJvb20gYmV0d2VlbiBhIHRhcmdldGVkIGVsZW1lbnQgYW5kIHRoZSBlZGdlcyBvZiB0aGUgc2Nyb2xscG9ydC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3Njcm9sbC1wYWRkaW5nLWJsb2NrLXN0YXJ0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c2Nyb2xsLXBhZGRpbmctYmxvY2stc3RhcnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic2Nyb2xsLXBhZGRpbmctYmxvY2stc3RhcnRcIj0gXCJzY3JvbGwtcGFkZGluZy1ibG9jay1zdGFydFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc2Nyb2xsLXBhZGRpbmctYm90dG9tIHByb3BlcnR5IGRlZmluZXMgb2Zmc2V0cyBmb3IgdGhlIGJvdHRvbSBvZiB0aGUgb3B0aW1hbCB2aWV3aW5nIHJlZ2lvbiBvZiB0aGUgc2Nyb2xscG9ydDogdGhlIHJlZ2lvbiB1c2VkIGFzIHRoZSB0YXJnZXQgcmVnaW9uIGZvciBwbGFjaW5nIHRoaW5ncyBpbiB2aWV3IG9mIHRoZSB1c2VyLiBUaGlzIGFsbG93cyB0aGUgYXV0aG9yIHRvIGV4Y2x1ZGUgcmVnaW9ucyBvZiB0aGUgc2Nyb2xscG9ydCB0aGF0IGFyZSBvYnNjdXJlZCBieSBvdGhlciBjb250ZW50IChzdWNoIGFzIGZpeGVkLXBvc2l0aW9uZWQgdG9vbGJhcnMgb3Igc2lkZWJhcnMpIG9yIHRvIHB1dCBtb3JlIGJyZWF0aGluZyByb29tIGJldHdlZW4gYSB0YXJnZXRlZCBlbGVtZW50IGFuZCB0aGUgZWRnZXMgb2YgdGhlIHNjcm9sbHBvcnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9zY3JvbGwtcGFkZGluZy1ib3R0b20gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zY3JvbGwtcGFkZGluZy1ib3R0b21cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic2Nyb2xsLXBhZGRpbmctYm90dG9tXCI9IFwic2Nyb2xsLXBhZGRpbmctYm90dG9tXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzY3JvbGwtcGFkZGluZy1pbmxpbmUgc2hvcnRoYW5kIHByb3BlcnR5IHNldHMgdGhlIHNjcm9sbCBwYWRkaW5nIG9mIGFuIGVsZW1lbnQgaW4gdGhlIGlubGluZSBkaW1lbnNpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9zY3JvbGwtcGFkZGluZy1pbmxpbmUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zY3JvbGwtcGFkZGluZy1pbmxpbmVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic2Nyb2xsLXBhZGRpbmctaW5saW5lXCI9IFwic2Nyb2xsLXBhZGRpbmctaW5saW5lXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzY3JvbGwtcGFkZGluZy1pbmxpbmUtZW5kJm5ic3A7cHJvcGVydHkmbmJzcDtkZWZpbmVzIG9mZnNldHMgZm9yIHRoZSBlbmQmbmJzcDtlZGdlIGluIHRoZSBpbmxpbmUmbmJzcDtkaW1lbnNpb24mbmJzcDtvZiB0aGUmbmJzcDtvcHRpbWFsIHZpZXdpbmcgcmVnaW9uJm5ic3A7b2YgdGhlIHNjcm9sbHBvcnQ6IHRoZSByZWdpb24gdXNlZCBhcyB0aGUgdGFyZ2V0IHJlZ2lvbiBmb3IgcGxhY2luZyB0aGluZ3MgaW4gdmlldyBvZiB0aGUgdXNlci4gVGhpcyBhbGxvd3MgdGhlIGF1dGhvciB0byBleGNsdWRlIHJlZ2lvbnMgb2YgdGhlIHNjcm9sbHBvcnQgdGhhdCBhcmUgb2JzY3VyZWQgYnkgb3RoZXIgY29udGVudCAoc3VjaCBhcyBmaXhlZC1wb3NpdGlvbmVkIHRvb2xiYXJzIG9yIHNpZGViYXJzKSBvciB0byBwdXQgbW9yZSBicmVhdGhpbmcgcm9vbSBiZXR3ZWVuIGEgdGFyZ2V0ZWQgZWxlbWVudCBhbmQgdGhlIGVkZ2VzIG9mIHRoZSBzY3JvbGxwb3J0LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvc2Nyb2xsLXBhZGRpbmctaW5saW5lLWVuZCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXNjcm9sbC1wYWRkaW5nLWlubGluZS1lbmRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic2Nyb2xsLXBhZGRpbmctaW5saW5lLWVuZFwiPSBcInNjcm9sbC1wYWRkaW5nLWlubGluZS1lbmRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHNjcm9sbC1wYWRkaW5nLWlubGluZS1zdGFydCBwcm9wZXJ0eSBkZWZpbmVzIG9mZnNldHMgZm9yIHRoZSBzdGFydCBlZGdlIGluIHRoZSBpbmxpbmUgZGltZW5zaW9uIG9mIHRoZSBvcHRpbWFsIHZpZXdpbmcgcmVnaW9uIG9mIHRoZSBzY3JvbGxwb3J0OiB0aGUgcmVnaW9uIHVzZWQgYXMgdGhlIHRhcmdldCByZWdpb24gZm9yIHBsYWNpbmcgdGhpbmdzIGluIHZpZXcgb2YgdGhlIHVzZXIuIFRoaXMgYWxsb3dzIHRoZSBhdXRob3IgdG8gZXhjbHVkZSByZWdpb25zIG9mIHRoZSBzY3JvbGxwb3J0IHRoYXQgYXJlIG9ic2N1cmVkIGJ5IG90aGVyIGNvbnRlbnQgKHN1Y2ggYXMgZml4ZWQtcG9zaXRpb25lZCB0b29sYmFycyBvciBzaWRlYmFycykgb3IgdG8gcHV0IG1vcmUgYnJlYXRoaW5nIHJvb20gYmV0d2VlbiBhIHRhcmdldGVkIGVsZW1lbnQgYW5kIHRoZSBlZGdlcyBvZiB0aGUgc2Nyb2xscG9ydC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3Njcm9sbC1wYWRkaW5nLWlubGluZS1zdGFydCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXNjcm9sbC1wYWRkaW5nLWlubGluZS1zdGFydFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzY3JvbGwtcGFkZGluZy1pbmxpbmUtc3RhcnRcIj0gXCJzY3JvbGwtcGFkZGluZy1pbmxpbmUtc3RhcnRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHNjcm9sbC1wYWRkaW5nLWxlZnQgcHJvcGVydHkgZGVmaW5lcyBvZmZzZXRzIGZvciB0aGUgbGVmdCBvZiB0aGUgb3B0aW1hbCB2aWV3aW5nIHJlZ2lvbiBvZiB0aGUgc2Nyb2xscG9ydDogdGhlIHJlZ2lvbiB1c2VkIGFzIHRoZSB0YXJnZXQgcmVnaW9uIGZvciBwbGFjaW5nIHRoaW5ncyBpbiB2aWV3IG9mIHRoZSB1c2VyLiBUaGlzIGFsbG93cyB0aGUgYXV0aG9yIHRvIGV4Y2x1ZGUgcmVnaW9ucyBvZiB0aGUgc2Nyb2xscG9ydCB0aGF0IGFyZSBvYnNjdXJlZCBieSBvdGhlciBjb250ZW50IChzdWNoIGFzIGZpeGVkLXBvc2l0aW9uZWQgdG9vbGJhcnMgb3Igc2lkZWJhcnMpIG9yIHRvIHB1dCBtb3JlIGJyZWF0aGluZyByb29tIGJldHdlZW4gYSB0YXJnZXRlZCBlbGVtZW50IGFuZCB0aGUgZWRnZXMgb2YgdGhlIHNjcm9sbHBvcnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9zY3JvbGwtcGFkZGluZy1sZWZ0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c2Nyb2xsLXBhZGRpbmctbGVmdFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzY3JvbGwtcGFkZGluZy1sZWZ0XCI9IFwic2Nyb2xsLXBhZGRpbmctbGVmdFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc2Nyb2xsLXBhZGRpbmctcmlnaHQmbmJzcDtwcm9wZXJ0eSZuYnNwO2RlZmluZXMgb2Zmc2V0cyBmb3IgdGhlIHJpZ2h0Jm5ic3A7b2YgdGhlJm5ic3A7b3B0aW1hbCB2aWV3aW5nIHJlZ2lvbiZuYnNwO29mIHRoZSBzY3JvbGxwb3J0OiB0aGUgcmVnaW9uIHVzZWQgYXMgdGhlIHRhcmdldCByZWdpb24gZm9yIHBsYWNpbmcgdGhpbmdzIGluIHZpZXcgb2YgdGhlIHVzZXIuIFRoaXMgYWxsb3dzIHRoZSBhdXRob3IgdG8gZXhjbHVkZSByZWdpb25zIG9mIHRoZSBzY3JvbGxwb3J0IHRoYXQgYXJlIG9ic2N1cmVkIGJ5IG90aGVyIGNvbnRlbnQgKHN1Y2ggYXMgZml4ZWQtcG9zaXRpb25lZCB0b29sYmFycyBvciBzaWRlYmFycykgb3IgdG8gcHV0IG1vcmUgYnJlYXRoaW5nIHJvb20gYmV0d2VlbiBhIHRhcmdldGVkIGVsZW1lbnQgYW5kIHRoZSBlZGdlcyBvZiB0aGUgc2Nyb2xscG9ydC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3Njcm9sbC1wYWRkaW5nLXJpZ2h0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c2Nyb2xsLXBhZGRpbmctcmlnaHRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic2Nyb2xsLXBhZGRpbmctcmlnaHRcIj0gXCJzY3JvbGwtcGFkZGluZy1yaWdodFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc2Nyb2xsLXBhZGRpbmctdG9wIHByb3BlcnR5Jm5ic3A7ZGVmaW5lcyBvZmZzZXRzIGZvciB0aGUgdG9wIG9mIHRoZSZuYnNwO29wdGltYWwgdmlld2luZyByZWdpb24mbmJzcDtvZiB0aGUgc2Nyb2xscG9ydDogdGhlIHJlZ2lvbiB1c2VkIGFzIHRoZSB0YXJnZXQgcmVnaW9uIGZvciBwbGFjaW5nIHRoaW5ncyBpbiB2aWV3IG9mIHRoZSB1c2VyLiBUaGlzIGFsbG93cyB0aGUgYXV0aG9yIHRvIGV4Y2x1ZGUgcmVnaW9ucyBvZiB0aGUgc2Nyb2xscG9ydCB0aGF0IGFyZSBvYnNjdXJlZCBieSBvdGhlciBjb250ZW50IChzdWNoIGFzIGZpeGVkLXBvc2l0aW9uZWQgdG9vbGJhcnMgb3Igc2lkZWJhcnMpIG9yIHRvIHB1dCBtb3JlIGJyZWF0aGluZyByb29tIGJldHdlZW4gYSB0YXJnZXRlZCBlbGVtZW50IGFuZCB0aGUgZWRnZXMgb2YgdGhlIHNjcm9sbHBvcnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9zY3JvbGwtcGFkZGluZy10b3AgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zY3JvbGwtcGFkZGluZy10b3BcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic2Nyb2xsLXBhZGRpbmctdG9wXCI9IFwic2Nyb2xsLXBhZGRpbmctdG9wXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzY3JvbGwtc25hcC1hbGlnbiBwcm9wZXJ0eSBzcGVjaWZpZXMgdGhlIGJveOKAmXMgc25hcCBwb3NpdGlvbiBhcyBhbiBhbGlnbm1lbnQgb2YgaXRzIHNuYXAgYXJlYSAoYXMgdGhlIGFsaWdubWVudCBzdWJqZWN0KSB3aXRoaW4gaXRzIHNuYXAgY29udGFpbmVy4oCZcyBzbmFwcG9ydCAoYXMgdGhlIGFsaWdubWVudCBjb250YWluZXIpLiBUaGUgdHdvIHZhbHVlcyBzcGVjaWZ5IHRoZSBzbmFwcGluZyBhbGlnbm1lbnQgaW4gdGhlIGJsb2NrIGF4aXMgYW5kIGlubGluZSBheGlzLCByZXNwZWN0aXZlbHkuIElmIG9ubHkgb25lIHZhbHVlIGlzIHNwZWNpZmllZCwgdGhlIHNlY29uZCB2YWx1ZSBkZWZhdWx0cyB0byB0aGUgc2FtZSB2YWx1ZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3Njcm9sbC1zbmFwLWFsaWduIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c2Nyb2xsLXNuYXAtYWxpZ25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic2Nyb2xsLXNuYXAtYWxpZ25cIj0gXCJzY3JvbGwtc25hcC1hbGlnblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc2Nyb2xsLXNuYXAtc3RvcCBDU1MgcHJvcGVydHkgZGVmaW5lcyB3aGV0aGVyIHRoZSBzY3JvbGwgY29udGFpbmVyIGlzIGFsbG93ZWQgdG8gXCJwYXNzIG92ZXJcIiBwb3NzaWJsZSBzbmFwIHBvc2l0aW9ucy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3Njcm9sbC1zbmFwLXN0b3AgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zY3JvbGwtc25hcC1zdG9wXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInNjcm9sbC1zbmFwLXN0b3BcIj0gXCJzY3JvbGwtc25hcC1zdG9wXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzY3JvbGwtc25hcC10eXBlIENTUyBwcm9wZXJ0eSBzZXRzIGhvdyBzdHJpY3RseSBzbmFwIHBvaW50cyBhcmUgZW5mb3JjZWQgb24gdGhlIHNjcm9sbCBjb250YWluZXIgaW4gY2FzZSB0aGVyZSBpcyBvbmUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9zY3JvbGwtc25hcC10eXBlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c2Nyb2xsLXNuYXAtdHlwZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzY3JvbGwtc25hcC10eXBlXCI9IFwic2Nyb2xsLXNuYXAtdHlwZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc2hhcGUtaW1hZ2UtdGhyZXNob2xkIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBhbHBoYSBjaGFubmVsIHRocmVzaG9sZCB1c2VkIHRvIGV4dHJhY3QgdGhlIHNoYXBlIHVzaW5nIGFuIGltYWdlIGFzIHRoZSB2YWx1ZSBmb3Igc2hhcGUtb3V0c2lkZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3NoYXBlLWltYWdlLXRocmVzaG9sZCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXNoYXBlLWltYWdlLXRocmVzaG9sZFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzaGFwZS1pbWFnZS10aHJlc2hvbGRcIj0gXCJzaGFwZS1pbWFnZS10aHJlc2hvbGRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHNoYXBlLW1hcmdpbiBDU1MgcHJvcGVydHkgc2V0cyBhIG1hcmdpbiBmb3IgYSBDU1Mgc2hhcGUgY3JlYXRlZCB1c2luZyBzaGFwZS1vdXRzaWRlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvc2hhcGUtbWFyZ2luIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c2hhcGUtbWFyZ2luXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInNoYXBlLW1hcmdpblwiPSBcInNoYXBlLW1hcmdpblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc2hhcGUtb3V0c2lkZSBDU1MgcHJvcGVydHkgZGVmaW5lcyBhIHNoYXBl4oCUd2hpY2ggbWF5IGJlIG5vbi1yZWN0YW5ndWxhcuKAlGFyb3VuZCB3aGljaCBhZGphY2VudCBpbmxpbmUgY29udGVudCBzaG91bGQgd3JhcC4gQnkgZGVmYXVsdCwgaW5saW5lIGNvbnRlbnQgd3JhcHMgYXJvdW5kIGl0cyBtYXJnaW4gYm94OyBzaGFwZS1vdXRzaWRlIHByb3ZpZGVzIGEgd2F5IHRvIGN1c3RvbWl6ZSB0aGlzIHdyYXBwaW5nLCBtYWtpbmcgaXQgcG9zc2libGUgdG8gd3JhcCB0ZXh0IGFyb3VuZCBjb21wbGV4IG9iamVjdHMgcmF0aGVyIHRoYW4gc2ltcGxlIGJveGVzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvc2hhcGUtb3V0c2lkZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXNoYXBlLW91dHNpZGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic2hhcGUtb3V0c2lkZVwiPSBcInNoYXBlLW91dHNpZGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHNoYXBlLXJlbmRlcmluZyBhdHRyaWJ1dGUgcHJvdmlkZXMgaGludHMgdG8gdGhlIHJlbmRlcmVyIGFib3V0IHdoYXQgdHJhZGVvZmZzIHRvIG1ha2Ugd2hlbiByZW5kZXJpbmcgc2hhcGVzIGxpa2UgcGF0aHMsIGNpcmNsZXMsIG9yIHJlY3RhbmdsZXMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NWRy9BdHRyaWJ1dGUvc2hhcGUtcmVuZGVyaW5nIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c2hhcGUtcmVuZGVyaW5nXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInNoYXBlLXJlbmRlcmluZ1wiPSBcInNoYXBlLXJlbmRlcmluZ1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNpemU9IFwic2l6ZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNwZWFrPSBcInNwZWFrXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3JjPSBcInNyY1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc3RvcC1jb2xvciBhdHRyaWJ1dGUgaW5kaWNhdGVzIHdoYXQgY29sb3IgdG8gdXNlIGF0IGEgZ3JhZGllbnQgc3RvcC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9zdG9wLWNvbG9yIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c3RvcC1jb2xvclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzdG9wLWNvbG9yXCI9IFwic3RvcC1jb2xvclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc3RvcC1vcGFjaXR5IGF0dHJpYnV0ZSBkZWZpbmVzIHRoZSBvcGFjaXR5IG9mIGEgZ2l2ZW4gY29sb3IgZ3JhZGllbnQgc3RvcC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9zdG9wLW9wYWNpdHkgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zdG9wLW9wYWNpdHlcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic3RvcC1vcGFjaXR5XCI9IFwic3RvcC1vcGFjaXR5XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzdHJva2UgYXR0cmlidXRlIGlzIGEgcHJlc2VudGF0aW9uIGF0dHJpYnV0ZSBkZWZpbmluZyB0aGUgY29sb3IgKG9yIGFueSBTVkcgcGFpbnQgc2VydmVycyBsaWtlIGdyYWRpZW50cyBvciBwYXR0ZXJucykgdXNlZCB0byBwYWludCB0aGUgb3V0bGluZSBvZiB0aGUgc2hhcGU7XHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NWRy9BdHRyaWJ1dGUvc3Ryb2tlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c3Ryb2tlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHN0cm9rZT0gXCJzdHJva2VcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHN0cm9rZS1kYXNoYXJyYXkgYXR0cmlidXRlIGlzIGEgcHJlc2VudGF0aW9uIGF0dHJpYnV0ZSBkZWZpbmluZyB0aGUgcGF0dGVybiBvZiBkYXNoZXMgYW5kIGdhcHMgdXNlZCB0byBwYWludCB0aGUgb3V0bGluZSBvZiB0aGUgc2hhcGU7XHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NWRy9BdHRyaWJ1dGUvc3Ryb2tlLWRhc2hhcnJheSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXN0cm9rZS1kYXNoYXJyYXlcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic3Ryb2tlLWRhc2hhcnJheVwiPSBcInN0cm9rZS1kYXNoYXJyYXlcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHN0cm9rZS1kYXNob2Zmc2V0IGF0dHJpYnV0ZSBpcyBhIHByZXNlbnRhdGlvbiBhdHRyaWJ1dGUgZGVmaW5pbmcgYW4gb2Zmc2V0IG9uIHRoZSByZW5kZXJpbmcgb2YgdGhlIGFzc29jaWF0ZWQgZGFzaCBhcnJheS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9zdHJva2UtZGFzaG9mZnNldCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXN0cm9rZS1kYXNob2Zmc2V0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInN0cm9rZS1kYXNob2Zmc2V0XCI9IFwic3Ryb2tlLWRhc2hvZmZzZXRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHN0cm9rZS1saW5lY2FwIGF0dHJpYnV0ZSBpcyBhIHByZXNlbnRhdGlvbiBhdHRyaWJ1dGUgZGVmaW5pbmcgdGhlIHNoYXBlIHRvIGJlIHVzZWQgYXQgdGhlIGVuZCBvZiBvcGVuIHN1YnBhdGhzIHdoZW4gdGhleSBhcmUgc3Ryb2tlZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9zdHJva2UtbGluZWNhcCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXN0cm9rZS1saW5lY2FwXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInN0cm9rZS1saW5lY2FwXCI9IFwic3Ryb2tlLWxpbmVjYXBcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHN0cm9rZS1saW5lam9pbiBhdHRyaWJ1dGUgaXMgYSBwcmVzZW50YXRpb24gYXR0cmlidXRlIGRlZmluaW5nIHRoZSBzaGFwZSB0byBiZSB1c2VkIGF0IHRoZSBjb3JuZXJzIG9mIHBhdGhzIHdoZW4gdGhleSBhcmUgc3Ryb2tlZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9zdHJva2UtbGluZWpvaW4gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zdHJva2UtbGluZWpvaW5cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic3Ryb2tlLWxpbmVqb2luXCI9IFwic3Ryb2tlLWxpbmVqb2luXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzdHJva2UtbWl0ZXJsaW1pdCBhdHRyaWJ1dGUgaXMgYSBwcmVzZW50YXRpb24gYXR0cmlidXRlIGRlZmluaW5nIGEgbGltaXQgb24gdGhlIHJhdGlvIG9mIHRoZSBtaXRlciBsZW5ndGggdG8gdGhlIHN0cm9rZS13aWR0aCB1c2VkIHRvIGRyYXcgYSBtaXRlciBqb2luLiBXaGVuIHRoZSBsaW1pdCBpcyBleGNlZWRlZCwgdGhlIGpvaW4gaXMgY29udmVydGVkIGZyb20gYSBtaXRlciB0byBhIGJldmVsLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL3N0cm9rZS1taXRlcmxpbWl0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c3Ryb2tlLW1pdGVybGltaXRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic3Ryb2tlLW1pdGVybGltaXRcIj0gXCJzdHJva2UtbWl0ZXJsaW1pdFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc3Ryb2tlLW9wYWNpdHkgYXR0cmlidXRlIGlzIGEgcHJlc2VudGF0aW9uIGF0dHJpYnV0ZSBkZWZpbmluZyB0aGUgb3BhY2l0eSBvZiB0aGUgcGFpbnQgc2VydmVyIChjb2xvciwgZ3JhZGllbnQsIHBhdHRlcm4sIGV0YykgYXBwbGllZCB0byB0aGUgc3Ryb2tlIG9mIGEgc2hhcGUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NWRy9BdHRyaWJ1dGUvc3Ryb2tlLW9wYWNpdHkgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zdHJva2Utb3BhY2l0eVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzdHJva2Utb3BhY2l0eVwiPSBcInN0cm9rZS1vcGFjaXR5XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzdHJva2Utd2lkdGggYXR0cmlidXRlIGlzIGEgcHJlc2VudGF0aW9uIGF0dHJpYnV0ZSBkZWZpbmluZyB0aGUgd2lkdGggb2YgdGhlIHN0cm9rZSB0byBiZSBhcHBsaWVkIHRvIHRoZSBzaGFwZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9zdHJva2Utd2lkdGggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zdHJva2Utd2lkdGhcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic3Ryb2tlLXdpZHRoXCI9IFwic3Ryb2tlLXdpZHRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBiYXNpYyBnb2FsIG9mIHRoZSBDYXNjYWRpbmcgU3R5bGVzaGVldCAoQ1NTKSBsYW5ndWFnZSBpcyB0byBhbGxvdyBhIGJyb3dzZXIgZW5naW5lIHRvIHBhaW50IGVsZW1lbnRzIG9mIHRoZSBwYWdlIHdpdGggc3BlY2lmaWMgZmVhdHVyZXMsIGxpa2UgY29sb3JzLCBwb3NpdGlvbmluZywgb3IgZGVjb3JhdGlvbnMuIFRoZSBDU1Mgc3ludGF4IHJlZmxlY3RzIHRoaXMgZ29hbCBhbmQgaXRzIGJhc2ljIGJ1aWxkaW5nIGJsb2NrcyBhcmU6XHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9zeW50YXggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zeW50YXhcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3ludGF4PSBcInN5bnRheFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdGFiLXNpemUgQ1NTIHByb3BlcnR5IGlzIHVzZWQgdG8gY3VzdG9taXplIHRoZSB3aWR0aCBvZiB0YWIgY2hhcmFjdGVycyAoVSswMDA5KS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RhYi1zaXplIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dGFiLXNpemVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwidGFiLXNpemVcIj0gXCJ0YWItc2l6ZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdGFibGUtbGF5b3V0IENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBhbGdvcml0aG0gdXNlZCB0byBsYXkgb3V0ICZsdDt0YWJsZSZndDsgY2VsbHMsIHJvd3MsIGFuZCBjb2x1bW5zLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdGFibGUtbGF5b3V0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dGFibGUtbGF5b3V0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInRhYmxlLWxheW91dFwiPSBcInRhYmxlLWxheW91dFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdGV4dC1hbGlnbiBDU1MgcHJvcGVydHkgc2V0cyB0aGUgaG9yaXpvbnRhbCBhbGlnbm1lbnQgb2YgYSZuYnNwO2Jsb2NrIGVsZW1lbnQgb3IgdGFibGUtY2VsbCBib3guIFRoaXMgbWVhbnMgaXQgd29ya3MgbGlrZSB2ZXJ0aWNhbC1hbGlnbiBidXQgaW4gdGhlIGhvcml6b250YWwgZGlyZWN0aW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdGV4dC1hbGlnbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRleHQtYWxpZ25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwidGV4dC1hbGlnblwiPSBcInRleHQtYWxpZ25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRleHQtYWxpZ24tbGFzdCBDU1MgcHJvcGVydHkgc2V0cyBob3cgdGhlIGxhc3QgbGluZSBvZiBhIGJsb2NrIG9yIGEgbGluZSwgcmlnaHQgYmVmb3JlIGEgZm9yY2VkIGxpbmUgYnJlYWssIGlzIGFsaWduZWQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90ZXh0LWFsaWduLWxhc3QgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10ZXh0LWFsaWduLWxhc3RcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwidGV4dC1hbGlnbi1sYXN0XCI9IFwidGV4dC1hbGlnbi1sYXN0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0ZXh0LWFuY2hvciBhdHRyaWJ1dGUgaXMgdXNlZCB0byBhbGlnbiAoc3RhcnQtLCBtaWRkbGUtIG9yIGVuZC1hbGlnbm1lbnQpIGEgc3RyaW5nIG9mIHByZS1mb3JtYXR0ZWQgdGV4dCBvciBhdXRvLXdyYXBwZWQgdGV4dCB3aGVyZSB0aGUgd3JhcHBpbmcgYXJlYSBpcyBkZXRlcm1pbmVkIGZyb20gdGhlIGlubGluZS1zaXplIHByb3BlcnR5IHJlbGF0aXZlIHRvIGEgZ2l2ZW4gcG9pbnQuIEl0IGlzIG5vdCBhcHBsaWNhYmxlIHRvIG90aGVyIHR5cGVzIG9mIGF1dG8td3JhcHBlZCB0ZXh0LiBGb3IgdGhvc2UgY2FzZXMgeW91IHNob3VsZCB1c2UgdGV4dC1hbGlnbi4gRm9yIG11bHRpLWxpbmUgdGV4dCwgdGhlIGFsaWdubWVudCB0YWtlcyBwbGFjZSBmb3IgZWFjaCBsaW5lLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL3RleHQtYW5jaG9yIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dGV4dC1hbmNob3JcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwidGV4dC1hbmNob3JcIj0gXCJ0ZXh0LWFuY2hvclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdGV4dC1jb21iaW5lLXVwcmlnaHQgQ1NTIHByb3BlcnR5IHNldHMgdGhlIGNvbWJpbmF0aW9uIG9mIGNoYXJhY3RlcnMgaW50byB0aGUgc3BhY2Ugb2YgYSBzaW5nbGUgY2hhcmFjdGVyLiBJZiB0aGUgY29tYmluZWQgdGV4dCBpcyB3aWRlciB0aGFuIDFlbSwgdGhlIHVzZXIgYWdlbnQgbXVzdCBmaXQgdGhlIGNvbnRlbnRzIHdpdGhpbiAxZW0uIFRoZSByZXN1bHRpbmcgY29tcG9zaXRpb24gaXMgdHJlYXRlZCBhcyBhIHNpbmdsZSB1cHJpZ2h0IGdseXBoIGZvciBsYXlvdXQgYW5kIGRlY29yYXRpb24uIFRoaXMgcHJvcGVydHkgb25seSBoYXMgYW4gZWZmZWN0IGluIHZlcnRpY2FsIHdyaXRpbmcgbW9kZXMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90ZXh0LWNvbWJpbmUtdXByaWdodCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRleHQtY29tYmluZS11cHJpZ2h0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInRleHQtY29tYmluZS11cHJpZ2h0XCI9IFwidGV4dC1jb21iaW5lLXVwcmlnaHRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRleHQtZGVjb3JhdGlvbiBzaG9ydGhhbmQgQ1NTIHByb3BlcnR5IHNldHMgdGhlIGFwcGVhcmFuY2Ugb2YgZGVjb3JhdGl2ZSBsaW5lcyBvbiB0ZXh0LiBJdCBpcyBhIHNob3J0aGFuZCBmb3IgdGV4dC1kZWNvcmF0aW9uLWxpbmUsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLXN0eWxlLCBhbmQgdGhlIG5ld2VyIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3MgcHJvcGVydHkuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90ZXh0LWRlY29yYXRpb24gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10ZXh0LWRlY29yYXRpb25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwidGV4dC1kZWNvcmF0aW9uXCI9IFwidGV4dC1kZWNvcmF0aW9uXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0ZXh0LWRlY29yYXRpb24tY29sb3IgQ1NTIHByb3BlcnR5IHNldHMgdGhlIGNvbG9yIG9mIGRlY29yYXRpb25zIGFkZGVkIHRvIHRleHQgYnkgdGV4dC1kZWNvcmF0aW9uLWxpbmUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90ZXh0LWRlY29yYXRpb24tY29sb3IgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10ZXh0LWRlY29yYXRpb24tY29sb3JcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwidGV4dC1kZWNvcmF0aW9uLWNvbG9yXCI9IFwidGV4dC1kZWNvcmF0aW9uLWNvbG9yXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0ZXh0LWRlY29yYXRpb24tbGluZSBDU1MgcHJvcGVydHkgc2V0cyB0aGUga2luZCBvZiBkZWNvcmF0aW9uIHRoYXQgaXMgdXNlZCBvbiB0ZXh0IGluIGFuIGVsZW1lbnQsIHN1Y2ggYXMgYW4gdW5kZXJsaW5lIG9yIG92ZXJsaW5lLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdGV4dC1kZWNvcmF0aW9uLWxpbmUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10ZXh0LWRlY29yYXRpb24tbGluZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ0ZXh0LWRlY29yYXRpb24tbGluZVwiPSBcInRleHQtZGVjb3JhdGlvbi1saW5lXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbmsgQ1NTIHByb3BlcnR5IHNwZWNpZmllcyBob3cgb3ZlcmxpbmVzIGFuZCB1bmRlcmxpbmVzIGFyZSBkcmF3biB3aGVuIHRoZXkgcGFzcyBvdmVyIGdseXBoIGFzY2VuZGVycyBhbmQgZGVzY2VuZGVycy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RleHQtZGVjb3JhdGlvbi1za2lwLWluayBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRleHQtZGVjb3JhdGlvbi1za2lwLWlua1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ0ZXh0LWRlY29yYXRpb24tc2tpcC1pbmtcIj0gXCJ0ZXh0LWRlY29yYXRpb24tc2tpcC1pbmtcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRleHQtZGVjb3JhdGlvbi1zdHlsZSBDU1MgcHJvcGVydHkgc2V0cyB0aGUgc3R5bGUgb2YgdGhlIGxpbmVzIHNwZWNpZmllZCBieSB0ZXh0LWRlY29yYXRpb24tbGluZS4gVGhlIHN0eWxlIGFwcGxpZXMgdG8gYWxsIGxpbmVzIHRoYXQgYXJlIHNldCB3aXRoIHRleHQtZGVjb3JhdGlvbi1saW5lLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdGV4dC1kZWNvcmF0aW9uLXN0eWxlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dGV4dC1kZWNvcmF0aW9uLXN0eWxlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInRleHQtZGVjb3JhdGlvbi1zdHlsZVwiPSBcInRleHQtZGVjb3JhdGlvbi1zdHlsZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzcyBDU1MgcHJvcGVydHkgc2V0cyB0aGUgc3Ryb2tlIHRoaWNrbmVzcyBvZiB0aGUgZGVjb3JhdGlvbiBsaW5lIHRoYXQgaXMgdXNlZCBvbiB0ZXh0IGluIGFuIGVsZW1lbnQsIHN1Y2ggYXMgYSBsaW5lLXRocm91Z2gsIHVuZGVybGluZSwgb3Igb3ZlcmxpbmUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzc1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzXCI9IFwidGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzc1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdGV4dC1pbmRlbnQgQ1NTIHByb3BlcnR5IHNldHMgdGhlIGxlbmd0aCBvZiBlbXB0eSBzcGFjZSAoaW5kZW50YXRpb24pIHRoYXQgaXMgcHV0IGJlZm9yZSBsaW5lcyBvZiB0ZXh0IGluIGEgYmxvY2suXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90ZXh0LWluZGVudCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRleHQtaW5kZW50XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInRleHQtaW5kZW50XCI9IFwidGV4dC1pbmRlbnRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRleHQtb3JpZW50YXRpb24gQ1NTIHByb3BlcnR5IHNldHMgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSB0ZXh0IGNoYXJhY3RlcnMgaW4gYSBsaW5lLiBJdCBvbmx5IGFmZmVjdHMgdGV4dCBpbiB2ZXJ0aWNhbCBtb2RlICh3aGVuIHdyaXRpbmctbW9kZSBpcyBub3QgaG9yaXpvbnRhbC10YikuIEl0IGlzIHVzZWZ1bCBmb3IgY29udHJvbGxpbmcgdGhlIGRpc3BsYXkgb2YgbGFuZ3VhZ2VzIHRoYXQgdXNlIHZlcnRpY2FsIHNjcmlwdCwgYW5kIGFsc28gZm9yIG1ha2luZyB2ZXJ0aWNhbCB0YWJsZSBoZWFkZXJzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdGV4dC1vcmllbnRhdGlvbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRleHQtb3JpZW50YXRpb25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwidGV4dC1vcmllbnRhdGlvblwiPSBcInRleHQtb3JpZW50YXRpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRleHQtb3ZlcmZsb3cgQ1NTIHByb3BlcnR5IHNldHMgaG93IGhpZGRlbiBvdmVyZmxvdyBjb250ZW50IGlzIHNpZ25hbGVkIHRvIHVzZXJzLiBJdCBjYW4gYmUgY2xpcHBlZCwgZGlzcGxheSBhbiBlbGxpcHNpcyAoJ+KApicpLCBvciBkaXNwbGF5IGEgY3VzdG9tIHN0cmluZy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RleHQtb3ZlcmZsb3cgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10ZXh0LW92ZXJmbG93XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInRleHQtb3ZlcmZsb3dcIj0gXCJ0ZXh0LW92ZXJmbG93XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0ZXh0LXJlbmRlcmluZyBDU1MgcHJvcGVydHkgcHJvdmlkZXMgaW5mb3JtYXRpb24gdG8gdGhlIHJlbmRlcmluZyBlbmdpbmUgYWJvdXQgd2hhdCB0byBvcHRpbWl6ZSBmb3Igd2hlbiByZW5kZXJpbmcgdGV4dC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RleHQtcmVuZGVyaW5nIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dGV4dC1yZW5kZXJpbmdcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwidGV4dC1yZW5kZXJpbmdcIj0gXCJ0ZXh0LXJlbmRlcmluZ1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdGV4dC1zaGFkb3cgQ1NTIHByb3BlcnR5IGFkZHMgc2hhZG93cyB0byB0ZXh0LiBJdCBhY2NlcHRzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2Ygc2hhZG93cyB0byBiZSBhcHBsaWVkIHRvIHRoZSB0ZXh0IGFuZCBhbnkgb2YgaXRzIGRlY29yYXRpb25zLiBFYWNoIHNoYWRvdyBpcyBkZXNjcmliZWQgYnkgc29tZSBjb21iaW5hdGlvbiBvZiBYIGFuZCBZIG9mZnNldHMgZnJvbSB0aGUgZWxlbWVudCwgYmx1ciByYWRpdXMsIGFuZCBjb2xvci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RleHQtc2hhZG93IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dGV4dC1zaGFkb3dcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwidGV4dC1zaGFkb3dcIj0gXCJ0ZXh0LXNoYWRvd1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdGV4dC1zaXplLWFkanVzdCBDU1MgcHJvcGVydHkgY29udHJvbHMgdGhlIHRleHQgaW5mbGF0aW9uIGFsZ29yaXRobSB1c2VkIG9uIHNvbWUgc21hcnRwaG9uZXMgYW5kIHRhYmxldHMuIE90aGVyIGJyb3dzZXJzIHdpbGwgaWdub3JlIHRoaXMgcHJvcGVydHkuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90ZXh0LXNpemUtYWRqdXN0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dGV4dC1zaXplLWFkanVzdFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ0ZXh0LXNpemUtYWRqdXN0XCI9IFwidGV4dC1zaXplLWFkanVzdFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdGV4dC10cmFuc2Zvcm0gQ1NTIHByb3BlcnR5IHNwZWNpZmllcyBob3cgdG8gY2FwaXRhbGl6ZSBhbiBlbGVtZW50J3MgdGV4dC4gSXQgY2FuIGJlIHVzZWQgdG8gbWFrZSB0ZXh0IGFwcGVhciBpbiBhbGwtdXBwZXJjYXNlIG9yIGFsbC1sb3dlcmNhc2UsIG9yIHdpdGggZWFjaCB3b3JkIGNhcGl0YWxpemVkLiBJdCBhbHNvIGNhbiBoZWxwIGltcHJvdmUgbGVnaWJpbGl0eSBmb3IgcnVieS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RleHQtdHJhbnNmb3JtIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dGV4dC10cmFuc2Zvcm1cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwidGV4dC10cmFuc2Zvcm1cIj0gXCJ0ZXh0LXRyYW5zZm9ybVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdGV4dC11bmRlcmxpbmUtb2Zmc2V0IENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBvZmZzZXQgZGlzdGFuY2Ugb2YgYW4gdW5kZXJsaW5lIHRleHQgZGVjb3JhdGlvbiBsaW5lIChhcHBsaWVkIHVzaW5nIHRleHQtZGVjb3JhdGlvbikgZnJvbSBpdHMgb3JpZ2luYWwgcG9zaXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90ZXh0LXVuZGVybGluZS1vZmZzZXQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10ZXh0LXVuZGVybGluZS1vZmZzZXRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwidGV4dC11bmRlcmxpbmUtb2Zmc2V0XCI9IFwidGV4dC11bmRlcmxpbmUtb2Zmc2V0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0ZXh0LXVuZGVybGluZS1wb3NpdGlvbiBDU1MgcHJvcGVydHkgc3BlY2lmaWVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgdW5kZXJsaW5lIHdoaWNoIGlzIHNldCB1c2luZyB0aGUgdGV4dC1kZWNvcmF0aW9uIHByb3BlcnR5J3MgdW5kZXJsaW5lIHZhbHVlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdGV4dC11bmRlcmxpbmUtcG9zaXRpb24gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10ZXh0LXVuZGVybGluZS1wb3NpdGlvblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ0ZXh0LXVuZGVybGluZS1wb3NpdGlvblwiPSBcInRleHQtdW5kZXJsaW5lLXBvc2l0aW9uXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0b3AgQ1NTIHByb3BlcnR5IHBhcnRpY2lwYXRlcyBpbiBzcGVjaWZ5aW5nIHRoZSB2ZXJ0aWNhbCBwb3NpdGlvbiBvZiBhIHBvc2l0aW9uZWQgZWxlbWVudC4gSXQgaGFzIG5vIGVmZmVjdCBvbiBub24tcG9zaXRpb25lZCBlbGVtZW50cy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RvcCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRvcFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0b3A9IFwidG9wXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0b3VjaC1hY3Rpb24gQ1NTIHByb3BlcnR5IHNldHMgaG93IGFuIGVsZW1lbnQncyByZWdpb24gY2FuIGJlIG1hbmlwdWxhdGVkIGJ5IGEgdG91Y2hzY3JlZW4gdXNlciAoZm9yIGV4YW1wbGUsIGJ5IHpvb21pbmcgZmVhdHVyZXMgYnVpbHQgaW50byB0aGUgYnJvd3NlcikuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90b3VjaC1hY3Rpb24gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10b3VjaC1hY3Rpb25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwidG91Y2gtYWN0aW9uXCI9IFwidG91Y2gtYWN0aW9uXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0cmFuc2Zvcm0gQ1NTIHByb3BlcnR5IGxldHMgeW91IHJvdGF0ZSwgc2NhbGUsIHNrZXcsIG9yIHRyYW5zbGF0ZSBhbiBlbGVtZW50LiBJdCBtb2RpZmllcyB0aGUgY29vcmRpbmF0ZSBzcGFjZSBvZiB0aGUgQ1NTIHZpc3VhbCBmb3JtYXR0aW5nIG1vZGVsLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdHJhbnNmb3JtIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dHJhbnNmb3JtXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRyYW5zZm9ybT0gXCJ0cmFuc2Zvcm1cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRyYW5zZm9ybS1ib3ggQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIGxheW91dCBib3ggdG8gd2hpY2ggdGhlIHRyYW5zZm9ybSBhbmQgdHJhbnNmb3JtLW9yaWdpbiBwcm9wZXJ0aWVzIHJlbGF0ZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RyYW5zZm9ybS1ib3ggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10cmFuc2Zvcm0tYm94XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInRyYW5zZm9ybS1ib3hcIj0gXCJ0cmFuc2Zvcm0tYm94XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0cmFuc2Zvcm0tb3JpZ2luIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBvcmlnaW4gZm9yIGFuIGVsZW1lbnQncyB0cmFuc2Zvcm1hdGlvbnMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90cmFuc2Zvcm0tb3JpZ2luIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dHJhbnNmb3JtLW9yaWdpblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ0cmFuc2Zvcm0tb3JpZ2luXCI9IFwidHJhbnNmb3JtLW9yaWdpblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdHJhbnNmb3JtLXN0eWxlIENTUyBwcm9wZXJ0eSBzZXRzIHdoZXRoZXIgY2hpbGRyZW4gb2YgYW4gZWxlbWVudCBhcmUgcG9zaXRpb25lZCBpbiB0aGUgM0Qgc3BhY2Ugb3IgYXJlIGZsYXR0ZW5lZCBpbiB0aGUgcGxhbmUgb2YgdGhlIGVsZW1lbnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90cmFuc2Zvcm0tc3R5bGUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10cmFuc2Zvcm0tc3R5bGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwidHJhbnNmb3JtLXN0eWxlXCI9IFwidHJhbnNmb3JtLXN0eWxlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0cmFuc2l0aW9uIENTUyBwcm9wZXJ0eSBpcyBhIHNob3J0aGFuZCBwcm9wZXJ0eSBmb3IgdHJhbnNpdGlvbi1wcm9wZXJ0eSwgdHJhbnNpdGlvbi1kdXJhdGlvbiwgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24sIGFuZCB0cmFuc2l0aW9uLWRlbGF5LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdHJhbnNpdGlvbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRyYW5zaXRpb25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdHJhbnNpdGlvbj0gXCJ0cmFuc2l0aW9uXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0cmFuc2l0aW9uLWRlbGF5IENTUyBwcm9wZXJ0eSBzcGVjaWZpZXMgdGhlIGR1cmF0aW9uIHRvIHdhaXQgYmVmb3JlIHN0YXJ0aW5nIGEgcHJvcGVydHkncyB0cmFuc2l0aW9uIGVmZmVjdCB3aGVuIGl0cyB2YWx1ZSBjaGFuZ2VzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdHJhbnNpdGlvbi1kZWxheSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRyYW5zaXRpb24tZGVsYXlcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwidHJhbnNpdGlvbi1kZWxheVwiPSBcInRyYW5zaXRpb24tZGVsYXlcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRyYW5zaXRpb24tZHVyYXRpb24gQ1NTIHByb3BlcnR5IHNldHMgdGhlIGxlbmd0aCBvZiB0aW1lIGEgdHJhbnNpdGlvbiBhbmltYXRpb24gc2hvdWxkIHRha2UgdG8gY29tcGxldGUuIEJ5IGRlZmF1bHQsIHRoZSB2YWx1ZSBpcyAwcywgbWVhbmluZyB0aGF0IG5vIGFuaW1hdGlvbiB3aWxsIG9jY3VyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdHJhbnNpdGlvbi1kdXJhdGlvbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRyYW5zaXRpb24tZHVyYXRpb25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwidHJhbnNpdGlvbi1kdXJhdGlvblwiPSBcInRyYW5zaXRpb24tZHVyYXRpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRyYW5zaXRpb24tcHJvcGVydHkgQ1NTIHByb3BlcnR5IHNldHMgdGhlIENTUyBwcm9wZXJ0aWVzIHRvIHdoaWNoIGEgdHJhbnNpdGlvbiBlZmZlY3Qgc2hvdWxkIGJlIGFwcGxpZWQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90cmFuc2l0aW9uLXByb3BlcnR5IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dHJhbnNpdGlvbi1wcm9wZXJ0eVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ0cmFuc2l0aW9uLXByb3BlcnR5XCI9IFwidHJhbnNpdGlvbi1wcm9wZXJ0eVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24gQ1NTIHByb3BlcnR5IHNldHMgaG93IGludGVybWVkaWF0ZSB2YWx1ZXMgYXJlIGNhbGN1bGF0ZWQgZm9yIENTUyBwcm9wZXJ0aWVzIGJlaW5nIGFmZmVjdGVkIGJ5IGEgdHJhbnNpdGlvbiBlZmZlY3QuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXCI9IFwidHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHVuaWNvZGUtYmlkaSBDU1MgcHJvcGVydHksIHRvZ2V0aGVyIHdpdGggdGhlIGRpcmVjdGlvbiBwcm9wZXJ0eSwgZGV0ZXJtaW5lcyBob3cgYmlkaXJlY3Rpb25hbCB0ZXh0IGluIGEgZG9jdW1lbnQgaXMgaGFuZGxlZC4gRm9yIGV4YW1wbGUsIGlmIGEgYmxvY2sgb2YgY29udGVudCBjb250YWlucyBib3RoIGxlZnQtdG8tcmlnaHQgYW5kIHJpZ2h0LXRvLWxlZnQgdGV4dCwgdGhlIHVzZXItYWdlbnQgdXNlcyBhIGNvbXBsZXggVW5pY29kZSBhbGdvcml0aG0gdG8gZGVjaWRlIGhvdyB0byBkaXNwbGF5IHRoZSB0ZXh0LiBUaGUgdW5pY29kZS1iaWRpIHByb3BlcnR5IG92ZXJyaWRlcyB0aGlzIGFsZ29yaXRobSBhbmQgYWxsb3dzIHRoZSBkZXZlbG9wZXIgdG8gY29udHJvbCB0aGUgdGV4dCBlbWJlZGRpbmcuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy91bmljb2RlLWJpZGkgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz11bmljb2RlLWJpZGlcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwidW5pY29kZS1iaWRpXCI9IFwidW5pY29kZS1iaWRpXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB1bmljb2RlLXJhbmdlIENTUyBkZXNjcmlwdG9yIHNldHMgdGhlIHNwZWNpZmljIHJhbmdlIG9mIGNoYXJhY3RlcnMgdG8gYmUgdXNlZCBmcm9tIGEgZm9udCBkZWZpbmVkIGJ5IEBmb250LWZhY2UgYW5kIG1hZGUgYXZhaWxhYmxlIGZvciB1c2Ugb24gdGhlIGN1cnJlbnQgcGFnZS4gSWYgdGhlIHBhZ2UgZG9lc24ndCB1c2UgYW55IGNoYXJhY3RlciBpbiB0aGlzIHJhbmdlLCB0aGUgZm9udCBpcyBub3QgZG93bmxvYWRlZDsgaWYgaXQgdXNlcyBhdCBsZWFzdCBvbmUsIHRoZSB3aG9sZSBmb250IGlzIGRvd25sb2FkZWQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AZm9udC1mYWNlL3VuaWNvZGUtcmFuZ2UgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz11bmljb2RlLXJhbmdlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInVuaWNvZGUtcmFuZ2VcIj0gXCJ1bmljb2RlLXJhbmdlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB1c2VyLXNlbGVjdCBDU1MgcHJvcGVydHkgY29udHJvbHMgd2hldGhlciB0aGUgdXNlciBjYW4gc2VsZWN0IHRleHQuIFRoaXMgZG9lc24ndCBoYXZlIGFueSBlZmZlY3Qgb24gY29udGVudCBsb2FkZWQgYXMgcGFydCBvZiBhIGJyb3dzZXIncyB1c2VyIGludGVyZmFjZSAoaXRzIGNocm9tZSksIGV4Y2VwdCBpbiB0ZXh0Ym94ZXMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy91c2VyLXNlbGVjdCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXVzZXItc2VsZWN0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInVzZXItc2VsZWN0XCI9IFwidXNlci1zZWxlY3RcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ1c2VyLXpvb21cIj0gXCJ1c2VyLXpvb21cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHZlY3Rvci1lZmZlY3QgcHJvcGVydHkgc3BlY2lmaWVzIHRoZSB2ZWN0b3IgZWZmZWN0IHRvIHVzZSB3aGVuIGRyYXdpbmcgYW4gb2JqZWN0LiBWZWN0b3IgZWZmZWN0cyBhcmUgYXBwbGllZCBiZWZvcmUgYW55IG9mIHRoZSBvdGhlciBjb21wb3NpdGluZyBvcGVyYXRpb25zLCBpLmUuIGZpbHRlcnMsIG1hc2tzIGFuZCBjbGlwcy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS92ZWN0b3ItZWZmZWN0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dmVjdG9yLWVmZmVjdFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ2ZWN0b3ItZWZmZWN0XCI9IFwidmVjdG9yLWVmZmVjdFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdmVydGljYWwtYWxpZ24gQ1NTIHByb3BlcnR5IHNldHMgdmVydGljYWwgYWxpZ25tZW50IG9mIGFuIGlubGluZSwgaW5saW5lLWJsb2NrIG9yIHRhYmxlLWNlbGwgYm94LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdmVydGljYWwtYWxpZ24gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz12ZXJ0aWNhbC1hbGlnblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ2ZXJ0aWNhbC1hbGlnblwiPSBcInZlcnRpY2FsLWFsaWduXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB2aXNpYmlsaXR5IENTUyBwcm9wZXJ0eSBzaG93cyBvciBoaWRlcyBhbiBlbGVtZW50IHdpdGhvdXQgY2hhbmdpbmcgdGhlIGxheW91dCBvZiBhIGRvY3VtZW50LiBUaGUgcHJvcGVydHkgY2FuIGFsc28gaGlkZSByb3dzIG9yIGNvbHVtbnMgaW4gYSAmbHQ7dGFibGUmZ3Q7LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdmlzaWJpbGl0eSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXZpc2liaWxpdHlcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmlzaWJpbGl0eT0gXCJ2aXNpYmlsaXR5XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBDU1MgYWxpZ24tY29udGVudCBwcm9wZXJ0eSBzZXRzIHRoZSBkaXN0cmlidXRpb24gb2Ygc3BhY2UgYmV0d2VlbiBhbmQgYXJvdW5kIGNvbnRlbnQgaXRlbXMgYWxvbmcgYSBmbGV4Ym94J3MgY3Jvc3MtYXhpcyBvciBhIGdyaWQncyBibG9jayBheGlzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYWxpZ24tY29udGVudCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWFsaWduLWNvbnRlbnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWFsaWduLWNvbnRlbnRcIj0gXCJ3ZWJraXQtYWxpZ24tY29udGVudFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgQ1NTIGFsaWduLWl0ZW1zIHByb3BlcnR5IHNldHMgdGhlIGFsaWduLXNlbGYgdmFsdWUgb24gYWxsIGRpcmVjdCBjaGlsZHJlbiBhcyBhIGdyb3VwLiBJbiBGbGV4Ym94LCBpdCBjb250cm9scyB0aGUgYWxpZ25tZW50IG9mIGl0ZW1zIG9uIHRoZSBDcm9zcyBBeGlzLiBJbiBHcmlkIExheW91dCwgaXQgY29udHJvbHMgdGhlIGFsaWdubWVudCBvZiBpdGVtcyBvbiB0aGUgQmxvY2sgQXhpcyB3aXRoaW4gdGhlaXIgZ3JpZCBhcmVhLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYWxpZ24taXRlbXMgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1hbGlnbi1pdGVtc1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYWxpZ24taXRlbXNcIj0gXCJ3ZWJraXQtYWxpZ24taXRlbXNcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGFsaWduLXNlbGYgQ1NTIHByb3BlcnR5IG92ZXJyaWRlcyBhIGdyaWQgb3IgZmxleCBpdGVtJ3MgYWxpZ24taXRlbXMgdmFsdWUuIEluIEdyaWQsIGl0IGFsaWducyB0aGUgaXRlbSBpbnNpZGUgdGhlJm5ic3A7Z3JpZCBhcmVhLiBJbiBGbGV4Ym94LCBpdCBhbGlnbnMgdGhlIGl0ZW0gb24gdGhlIGNyb3NzIGF4aXMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9hbGlnbi1zZWxmIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YWxpZ24tc2VsZlxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYWxpZ24tc2VsZlwiPSBcIndlYmtpdC1hbGlnbi1zZWxmXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBhbmltYXRpb24gc2hvcnRoYW5kIENTUyBwcm9wZXJ0eSBhcHBsaWVzIGFuIGFuaW1hdGlvbiBiZXR3ZWVuIHN0eWxlcy4gSXQgaXMgYSBzaG9ydGhhbmQgZm9yIGFuaW1hdGlvbi1uYW1lLCBhbmltYXRpb24tZHVyYXRpb24sIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb24sIGFuaW1hdGlvbi1kZWxheSwgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCwgYW5pbWF0aW9uLWRpcmVjdGlvbiwgYW5pbWF0aW9uLWZpbGwtbW9kZSwgYW5kIGFuaW1hdGlvbi1wbGF5LXN0YXRlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYW5pbWF0aW9uIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YW5pbWF0aW9uXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1hbmltYXRpb25cIj0gXCJ3ZWJraXQtYW5pbWF0aW9uXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBhbmltYXRpb24tZGVsYXkgQ1NTIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgYW1vdW50IG9mIHRpbWUgdG8gd2FpdCBmcm9tIGFwcGx5aW5nIHRoZSBhbmltYXRpb24gdG8gYW4gZWxlbWVudCBiZWZvcmUgYmVnaW5uaW5nIHRvIHBlcmZvcm0gdGhlIGFuaW1hdGlvbi4gVGhlIGFuaW1hdGlvbiBjYW4gc3RhcnQgbGF0ZXIsIGltbWVkaWF0ZWx5IGZyb20gaXRzIGJlZ2lubmluZywgb3IgaW1tZWRpYXRlbHkgYW5kIHBhcnR3YXkgdGhyb3VnaCB0aGUgYW5pbWF0aW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYW5pbWF0aW9uLWRlbGF5IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YW5pbWF0aW9uLWRlbGF5XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1hbmltYXRpb24tZGVsYXlcIj0gXCJ3ZWJraXQtYW5pbWF0aW9uLWRlbGF5XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBhbmltYXRpb24tZGlyZWN0aW9uIENTUyBwcm9wZXJ0eSBzZXRzIHdoZXRoZXIgYW4gYW5pbWF0aW9uIHNob3VsZCBwbGF5IGZvcndhcmQsIGJhY2t3YXJkLCBvciBhbHRlcm5hdGUgYmFjayBhbmQgZm9ydGggYmV0d2VlbiBwbGF5aW5nIHRoZSBzZXF1ZW5jZSBmb3J3YXJkIGFuZCBiYWNrd2FyZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2FuaW1hdGlvbi1kaXJlY3Rpb24gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1hbmltYXRpb24tZGlyZWN0aW9uXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uXCI9IFwid2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGFuaW1hdGlvbi1kdXJhdGlvbiBDU1MgcHJvcGVydHkgc2V0cyB0aGUgbGVuZ3RoIG9mIHRpbWUgdGhhdCBhbiBhbmltYXRpb24gdGFrZXMgdG8gY29tcGxldGUgb25lIGN5Y2xlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYW5pbWF0aW9uLWR1cmF0aW9uIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YW5pbWF0aW9uLWR1cmF0aW9uXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1hbmltYXRpb24tZHVyYXRpb25cIj0gXCJ3ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBhbmltYXRpb24tZmlsbC1tb2RlIENTUyBwcm9wZXJ0eSBzZXRzIGhvdyBhIENTUyBhbmltYXRpb24gYXBwbGllcyBzdHlsZXMgdG8gaXRzIHRhcmdldCBiZWZvcmUgYW5kIGFmdGVyIGl0cyBleGVjdXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9hbmltYXRpb24tZmlsbC1tb2RlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YW5pbWF0aW9uLWZpbGwtbW9kZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZVwiPSBcIndlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50IENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBudW1iZXIgb2YgdGltZXMgYW4gYW5pbWF0aW9uIHNlcXVlbmNlIHNob3VsZCBiZSBwbGF5ZWQgYmVmb3JlIHN0b3BwaW5nLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnRcIj0gXCJ3ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYW5pbWF0aW9uLW5hbWUgQ1NTIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgbmFtZXMgb2Ygb25lIG9yIG1vcmUgQGtleWZyYW1lcyBhdC1ydWxlcyBkZXNjcmliaW5nIHRoZSBhbmltYXRpb24gb3IgYW5pbWF0aW9ucyB0byBhcHBseSB0byB0aGUgZWxlbWVudC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2FuaW1hdGlvbi1uYW1lIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YW5pbWF0aW9uLW5hbWVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWFuaW1hdGlvbi1uYW1lXCI9IFwid2Via2l0LWFuaW1hdGlvbi1uYW1lXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBhbmltYXRpb24tcGxheS1zdGF0ZSBDU1MgcHJvcGVydHkgc2V0cyB3aGV0aGVyIGFuIGFuaW1hdGlvbiBpcyBydW5uaW5nIG9yIHBhdXNlZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2FuaW1hdGlvbi1wbGF5LXN0YXRlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YW5pbWF0aW9uLXBsYXktc3RhdGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWFuaW1hdGlvbi1wbGF5LXN0YXRlXCI9IFwid2Via2l0LWFuaW1hdGlvbi1wbGF5LXN0YXRlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uIENTUyBwcm9wZXJ0eSBzZXRzIGhvdyBhbiBhbmltYXRpb24gcHJvZ3Jlc3NlcyB0aHJvdWdoIHRoZSBkdXJhdGlvbiBvZiBlYWNoIGN5Y2xlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb25cIj0gXCJ3ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1hcHAtcmVnaW9uXCI9IFwid2Via2l0LWFwcC1yZWdpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGFwcGVhcmFuY2UgQ1NTIHByb3BlcnR5IGlzIHVzZWQgdG8gZGlzcGxheSBhbiBlbGVtZW50IHVzaW5nIHBsYXRmb3JtLW5hdGl2ZSBzdHlsaW5nLCBiYXNlZCBvbiB0aGUgb3BlcmF0aW5nIHN5c3RlbSdzIHRoZW1lLiBUaGUgLW1vei1hcHBlYXJhbmNlIGFuZCAtd2Via2l0LWFwcGVhcmFuY2UgcHJvcGVydGllcyBhcmUgbm9uLXN0YW5kYXJkIHZlcnNpb25zIG9mIHRoaXMgcHJvcGVydHksIHVzZWQgKHJlc3BlY3RpdmVseSkgYnkgR2Vja28gKEZpcmVmb3gpIGFuZCBieSBXZWJLaXQtYmFzZWQgKGUuZy4sIFNhZmFyaSkgYW5kIEJsaW5rLWJhc2VkIChlLmcuLCBDaHJvbWUsIE9wZXJhKSBicm93c2VycyB0byBhY2hpZXZlIHRoZSBzYW1lIHRoaW5nLiBOb3RlIHRoYXQgRmlyZWZveCBhbmQgRWRnZSBhbHNvIHN1cHBvcnQgLXdlYmtpdC1hcHBlYXJhbmNlLCBmb3IgY29tcGF0aWJpbGl0eSByZWFzb25zLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYXBwZWFyYW5jZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWFwcGVhcmFuY2VcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWFwcGVhcmFuY2VcIj0gXCJ3ZWJraXQtYXBwZWFyYW5jZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYmFja2ZhY2UtdmlzaWJpbGl0eSBDU1MgcHJvcGVydHkgc2V0cyB3aGV0aGVyIHRoZSBiYWNrIGZhY2Ugb2YgYW4gZWxlbWVudCBpcyB2aXNpYmxlIHdoZW4gdHVybmVkIHRvd2FyZHMgdGhlIHVzZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZmFjZS12aXNpYmlsaXR5IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YmFja2ZhY2UtdmlzaWJpbGl0eVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eVwiPSBcIndlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBiYWNrZ3JvdW5kLWNsaXAgQ1NTIHByb3BlcnR5IHNldHMgd2hldGhlciBhbiBlbGVtZW50J3MgYmFja2dyb3VuZCBleHRlbmRzIHVuZGVybmVhdGggaXRzIGJvcmRlciBib3gsIHBhZGRpbmcgYm94LCBvciBjb250ZW50IGJveC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tncm91bmQtY2xpcCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJhY2tncm91bmQtY2xpcFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYmFja2dyb3VuZC1jbGlwXCI9IFwid2Via2l0LWJhY2tncm91bmQtY2xpcFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYmFja2dyb3VuZC1vcmlnaW4gQ1NTIHByb3BlcnR5IHNldHMgdGhlIGJhY2tncm91bmQncyBvcmlnaW46IGZyb20gdGhlIGJvcmRlciBzdGFydCwgaW5zaWRlIHRoZSBib3JkZXIsIG9yIGluc2lkZSB0aGUgcGFkZGluZy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tncm91bmQtb3JpZ2luIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YmFja2dyb3VuZC1vcmlnaW5cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWJhY2tncm91bmQtb3JpZ2luXCI9IFwid2Via2l0LWJhY2tncm91bmQtb3JpZ2luXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBiYWNrZ3JvdW5kLXNpemUgQ1NTIHByb3BlcnR5IHNldHMgdGhlIHNpemUgb2YgdGhlIGVsZW1lbnQncyBiYWNrZ3JvdW5kIGltYWdlLiBUaGUgaW1hZ2UgY2FuIGJlIGxlZnQgdG8gaXRzIG5hdHVyYWwgc2l6ZSwgc3RyZXRjaGVkLCBvciBjb25zdHJhaW5lZCB0byBmaXQgdGhlIGF2YWlsYWJsZSBzcGFjZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tncm91bmQtc2l6ZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJhY2tncm91bmQtc2l6ZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYmFja2dyb3VuZC1zaXplXCI9IFwid2Via2l0LWJhY2tncm91bmQtc2l6ZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1ib3JkZXItYWZ0ZXJcIj0gXCJ3ZWJraXQtYm9yZGVyLWFmdGVyXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWJvcmRlci1hZnRlci1jb2xvclwiPSBcIndlYmtpdC1ib3JkZXItYWZ0ZXItY29sb3JcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYm9yZGVyLWFmdGVyLXN0eWxlXCI9IFwid2Via2l0LWJvcmRlci1hZnRlci1zdHlsZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1ib3JkZXItYWZ0ZXItd2lkdGhcIj0gXCJ3ZWJraXQtYm9yZGVyLWFmdGVyLXdpZHRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSAtd2Via2l0LWJvcmRlci1iZWZvcmUgQ1NTIHByb3BlcnR5IGlzIGEgc2hvcnRoYW5kIHByb3BlcnR5IGZvciBzZXR0aW5nIHRoZSBpbmRpdmlkdWFsIGxvZ2ljYWwgYmxvY2sgc3RhcnQgYm9yZGVyIHByb3BlcnR5IHZhbHVlcyBpbiBhIHNpbmdsZSBwbGFjZSBpbiB0aGUgc3R5bGUgc2hlZXQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy8td2Via2l0LWJvcmRlci1iZWZvcmUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz0td2Via2l0LWJvcmRlci1iZWZvcmVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWJvcmRlci1iZWZvcmVcIj0gXCJ3ZWJraXQtYm9yZGVyLWJlZm9yZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1ib3JkZXItYmVmb3JlLWNvbG9yXCI9IFwid2Via2l0LWJvcmRlci1iZWZvcmUtY29sb3JcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYm9yZGVyLWJlZm9yZS1zdHlsZVwiPSBcIndlYmtpdC1ib3JkZXItYmVmb3JlLXN0eWxlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWJvcmRlci1iZWZvcmUtd2lkdGhcIj0gXCJ3ZWJraXQtYm9yZGVyLWJlZm9yZS13aWR0aFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyBDU1MgcHJvcGVydHkgcm91bmRzIHRoZSBib3R0b20tbGVmdCBjb3JuZXIgb2YgYW4gZWxlbWVudCBieSBzcGVjaWZ5aW5nIHRoZSByYWRpdXMgKG9yIHRoZSByYWRpdXMgb2YgdGhlIHNlbWktbWFqb3IgYW5kIHNlbWktbWlub3IgYXhlcykgb2YgdGhlIGVsbGlwc2UgZGVmaW5pbmcgdGhlIGN1cnZhdHVyZSBvZiB0aGUgY29ybmVyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNcIj0gXCJ3ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMgQ1NTIHByb3BlcnR5IHJvdW5kcyB0aGUgYm90dG9tLXJpZ2h0IGNvcm5lciBvZiBhbiBlbGVtZW50IGJ5IHNwZWNpZnlpbmcgdGhlIHJhZGl1cyAob3IgdGhlIHJhZGl1cyBvZiB0aGUgc2VtaS1tYWpvciBhbmQgc2VtaS1taW5vciBheGVzKSBvZiB0aGUgZWxsaXBzZSBkZWZpbmluZyB0aGUgY3VydmF0dXJlIG9mIHRoZSBjb3JuZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c1wiPSBcIndlYmtpdC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1ib3JkZXItZW5kXCI9IFwid2Via2l0LWJvcmRlci1lbmRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYm9yZGVyLWVuZC1jb2xvclwiPSBcIndlYmtpdC1ib3JkZXItZW5kLWNvbG9yXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWJvcmRlci1lbmQtc3R5bGVcIj0gXCJ3ZWJraXQtYm9yZGVyLWVuZC1zdHlsZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1ib3JkZXItZW5kLXdpZHRoXCI9IFwid2Via2l0LWJvcmRlci1lbmQtd2lkdGhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYm9yZGVyLWhvcml6b250YWwtc3BhY2luZ1wiPSBcIndlYmtpdC1ib3JkZXItaG9yaXpvbnRhbC1zcGFjaW5nXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItaW1hZ2UgQ1NTIHByb3BlcnR5IGRyYXdzIGFuIGltYWdlIGFyb3VuZCBhIGdpdmVuIGVsZW1lbnQuIEl0IHJlcGxhY2VzIHRoZSBlbGVtZW50J3MgcmVndWxhciBib3JkZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItaW1hZ2UgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItaW1hZ2VcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWJvcmRlci1pbWFnZVwiPSBcIndlYmtpdC1ib3JkZXItaW1hZ2VcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1yYWRpdXMgQ1NTIHByb3BlcnR5IHJvdW5kcyB0aGUgY29ybmVycyBvZiBhbiBlbGVtZW50J3Mgb3V0ZXIgYm9yZGVyIGVkZ2UuIFlvdSBjYW4gc2V0IGEgc2luZ2xlIHJhZGl1cyB0byBtYWtlIGNpcmN1bGFyIGNvcm5lcnMsIG9yIHR3byByYWRpaSB0byBtYWtlIGVsbGlwdGljYWwgY29ybmVycy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1yYWRpdXMgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItcmFkaXVzXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1ib3JkZXItcmFkaXVzXCI9IFwid2Via2l0LWJvcmRlci1yYWRpdXNcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYm9yZGVyLXN0YXJ0XCI9IFwid2Via2l0LWJvcmRlci1zdGFydFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1ib3JkZXItc3RhcnQtY29sb3JcIj0gXCJ3ZWJraXQtYm9yZGVyLXN0YXJ0LWNvbG9yXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWJvcmRlci1zdGFydC1zdHlsZVwiPSBcIndlYmtpdC1ib3JkZXItc3RhcnQtc3R5bGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYm9yZGVyLXN0YXJ0LXdpZHRoXCI9IFwid2Via2l0LWJvcmRlci1zdGFydC13aWR0aFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cyBDU1MgcHJvcGVydHkgcm91bmRzIHRoZSB0b3AtbGVmdCBjb3JuZXIgb2YgYW4gZWxlbWVudCBieSBzcGVjaWZ5aW5nIHRoZSByYWRpdXMgKG9yIHRoZSByYWRpdXMgb2YgdGhlIHNlbWktbWFqb3IgYW5kIHNlbWktbWlub3IgYXhlcykgb2YgdGhlIGVsbGlwc2UgZGVmaW5pbmcgdGhlIGN1cnZhdHVyZSBvZiB0aGUgY29ybmVyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci10b3AtbGVmdC1yYWRpdXNcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWJvcmRlci10b3AtbGVmdC1yYWRpdXNcIj0gXCJ3ZWJraXQtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMgQ1NTIHByb3BlcnR5IHJvdW5kcyB0aGUgdG9wLXJpZ2h0IGNvcm5lciBvZiBhbiBlbGVtZW50IGJ5IHNwZWNpZnlpbmcgdGhlIHJhZGl1cyAob3IgdGhlIHJhZGl1cyBvZiB0aGUgc2VtaS1tYWpvciBhbmQgc2VtaS1taW5vciBheGVzKSBvZiB0aGUgZWxsaXBzZSBkZWZpbmluZyB0aGUgY3VydmF0dXJlIG9mIHRoZSBjb3JuZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci10b3AtcmlnaHQtcmFkaXVzXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1c1wiPSBcIndlYmtpdC1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1c1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1ib3JkZXItdmVydGljYWwtc3BhY2luZ1wiPSBcIndlYmtpdC1ib3JkZXItdmVydGljYWwtc3BhY2luZ1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm94LWFsaWduIENTUyBwcm9wZXJ0eSBzcGVjaWZpZXMgaG93IGFuIGVsZW1lbnQgYWxpZ25zIGl0cyBjb250ZW50cyBhY3Jvc3MgaXRzIGxheW91dCBpbiBhIHBlcnBlbmRpY3VsYXIgZGlyZWN0aW9uLiBUaGUgZWZmZWN0IG9mIHRoZSBwcm9wZXJ0eSBpcyBvbmx5IHZpc2libGUgaWYgdGhlcmUgaXMgZXh0cmEgc3BhY2UgaW4gdGhlIGJveC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JveC1hbGlnbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJveC1hbGlnblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYm94LWFsaWduXCI9IFwid2Via2l0LWJveC1hbGlnblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm94LWRlY29yYXRpb24tYnJlYWsgQ1NTIHByb3BlcnR5IHNwZWNpZmllcyBob3cgYW4gZWxlbWVudCdzIGZyYWdtZW50cyBzaG91bGQgYmUgcmVuZGVyZWQgd2hlbiBicm9rZW4gYWNyb3NzIG11bHRpcGxlIGxpbmVzLCBjb2x1bW5zLCBvciBwYWdlcy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JveC1kZWNvcmF0aW9uLWJyZWFrIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym94LWRlY29yYXRpb24tYnJlYWtcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWJveC1kZWNvcmF0aW9uLWJyZWFrXCI9IFwid2Via2l0LWJveC1kZWNvcmF0aW9uLWJyZWFrXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3gtZGlyZWN0aW9uIENTUyBwcm9wZXJ0eSBzcGVjaWZpZXMgd2hldGhlciBhIGJveCBsYXlzIG91dCBpdHMgY29udGVudHMgbm9ybWFsbHkgKGZyb20gdGhlIHRvcCBvciBsZWZ0IGVkZ2UpLCBvciBpbiByZXZlcnNlIChmcm9tIHRoZSBib3R0b20gb3IgcmlnaHQgZWRnZSkuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3gtZGlyZWN0aW9uIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym94LWRpcmVjdGlvblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYm94LWRpcmVjdGlvblwiPSBcIndlYmtpdC1ib3gtZGlyZWN0aW9uXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSAtbW96LWJveC1mbGV4IGFuZCAtd2Via2l0LWJveC1mbGV4IENTUyBwcm9wZXJ0aWVzIHNwZWNpZnkgaG93IGEgLW1vei1ib3ggb3IgLXdlYmtpdC1ib3ggZ3Jvd3MgdG8gZmlsbCB0aGUgYm94IHRoYXQgY29udGFpbnMgaXQsIGluIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGNvbnRhaW5pbmcgYm94J3MgbGF5b3V0LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm94LWZsZXggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3gtZmxleFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYm94LWZsZXhcIj0gXCJ3ZWJraXQtYm94LWZsZXhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJveC1vcmRpbmFsLWdyb3VwIENTUyBwcm9wZXJ0eSBhc3NpZ25zIHRoZSBmbGV4Ym94J3MgY2hpbGQgZWxlbWVudHMgdG8gYW4gb3JkaW5hbCBncm91cC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JveC1vcmRpbmFsLWdyb3VwIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym94LW9yZGluYWwtZ3JvdXBcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWJveC1vcmRpbmFsLWdyb3VwXCI9IFwid2Via2l0LWJveC1vcmRpbmFsLWdyb3VwXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoaXMgaXMgYSBwcm9wZXJ0eSBvZiB0aGUgb3JpZ2luYWwgQ1NTIEZsZXhpYmxlIEJveCBMYXlvdXQgTW9kdWxlIGRyYWZ0LCBhbmQgaGFzIGJlZW4gcmVwbGFjZWQgYnkgYSBuZXdlciBzdGFuZGFyZC4gU2VlIGZsZXhib3ggZm9yIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IHN0YW5kYXJkLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm94LW9yaWVudCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJveC1vcmllbnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWJveC1vcmllbnRcIj0gXCJ3ZWJraXQtYm94LW9yaWVudFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgLW1vei1ib3gtcGFjayBhbmQgLXdlYmtpdC1ib3gtcGFjayBDU1MgcHJvcGVydGllcyBzcGVjaWZ5IGhvdyBhIC1tb3otYm94IG9yIC13ZWJraXQtYm94IHBhY2tzIGl0cyBjb250ZW50cyBpbiB0aGUgZGlyZWN0aW9uIG9mIGl0cyBsYXlvdXQuIFRoZSBlZmZlY3Qgb2YgdGhpcyBpcyBvbmx5IHZpc2libGUgaWYgdGhlcmUgaXMgZXh0cmEgc3BhY2UgaW4gdGhlIGJveC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JveC1wYWNrIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym94LXBhY2tcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWJveC1wYWNrXCI9IFwid2Via2l0LWJveC1wYWNrXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSAtd2Via2l0LWJveC1yZWZsZWN0IENTUyBwcm9wZXJ0eSBsZXRzIHlvdSByZWZsZWN0IHRoZSBjb250ZW50IG9mIGFuIGVsZW1lbnQgaW4gb25lIHNwZWNpZmljIGRpcmVjdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTLy13ZWJraXQtYm94LXJlZmxlY3QgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz0td2Via2l0LWJveC1yZWZsZWN0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1ib3gtcmVmbGVjdFwiPSBcIndlYmtpdC1ib3gtcmVmbGVjdFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm94LXNoYWRvdyBDU1MgcHJvcGVydHkgYWRkcyBzaGFkb3cgZWZmZWN0cyBhcm91bmQgYW4gZWxlbWVudCdzIGZyYW1lLiBZb3UgY2FuIHNldCBtdWx0aXBsZSBlZmZlY3RzIHNlcGFyYXRlZCBieSBjb21tYXMuIEEgYm94IHNoYWRvdyBpcyBkZXNjcmliZWQgYnkgWCBhbmQgWSBvZmZzZXRzIHJlbGF0aXZlIHRvIHRoZSBlbGVtZW50LCBibHVyIGFuZCBzcHJlYWQgcmFkaXVzLCBhbmQgY29sb3IuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3gtc2hhZG93IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym94LXNoYWRvd1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYm94LXNoYWRvd1wiPSBcIndlYmtpdC1ib3gtc2hhZG93XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3gtc2l6aW5nIENTUyBwcm9wZXJ0eSBzZXRzIGhvdyB0aGUgdG90YWwgd2lkdGggYW5kIGhlaWdodCBvZiBhbiBlbGVtZW50IGlzIGNhbGN1bGF0ZWQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3gtc2l6aW5nIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym94LXNpemluZ1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYm94LXNpemluZ1wiPSBcIndlYmtpdC1ib3gtc2l6aW5nXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBjbGlwLXBhdGggQ1NTIHByb3BlcnR5IGNyZWF0ZXMgYSBjbGlwcGluZyByZWdpb24gdGhhdCBzZXRzIHdoYXQgcGFydCBvZiBhbiBlbGVtZW50IHNob3VsZCBiZSBzaG93bi4gUGFydHMgdGhhdCBhcmUgaW5zaWRlIHRoZSByZWdpb24gYXJlIHNob3duLCB3aGlsZSB0aG9zZSBvdXRzaWRlIGFyZSBoaWRkZW4uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jbGlwLXBhdGggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1jbGlwLXBhdGhcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWNsaXAtcGF0aFwiPSBcIndlYmtpdC1jbGlwLXBhdGhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtY29sdW1uLWJyZWFrLWFmdGVyXCI9IFwid2Via2l0LWNvbHVtbi1icmVhay1hZnRlclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1jb2x1bW4tYnJlYWstYmVmb3JlXCI9IFwid2Via2l0LWNvbHVtbi1icmVhay1iZWZvcmVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtY29sdW1uLWJyZWFrLWluc2lkZVwiPSBcIndlYmtpdC1jb2x1bW4tYnJlYWstaW5zaWRlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBjb2x1bW4tY291bnQgQ1NTIHByb3BlcnR5IGJyZWFrcyBhbiBlbGVtZW50J3MgY29udGVudCBpbnRvIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGNvbHVtbnMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jb2x1bW4tY291bnQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1jb2x1bW4tY291bnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWNvbHVtbi1jb3VudFwiPSBcIndlYmtpdC1jb2x1bW4tY291bnRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNvbHVtbi1nYXAgQ1NTIHByb3BlcnR5IHNldHMgdGhlIHNpemUgb2YgdGhlIGdhcCAoZ3V0dGVyKSBiZXR3ZWVuIGFuIGVsZW1lbnQncyBjb2x1bW5zLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvY29sdW1uLWdhcCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNvbHVtbi1nYXBcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWNvbHVtbi1nYXBcIj0gXCJ3ZWJraXQtY29sdW1uLWdhcFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY29sdW1uLXJ1bGUmbmJzcDtzaG9ydGhhbmQgQ1NTIHByb3BlcnR5IHNldHMgdGhlIHdpZHRoLCBzdHlsZSwgYW5kIGNvbG9yIG9mIHRoZSBsaW5lIGRyYXduIGJldHdlZW4gY29sdW1ucyBpbiBhIG11bHRpLWNvbHVtbiBsYXlvdXQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jb2x1bW4tcnVsZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNvbHVtbi1ydWxlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1jb2x1bW4tcnVsZVwiPSBcIndlYmtpdC1jb2x1bW4tcnVsZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY29sdW1uLXJ1bGUtY29sb3IgQ1NTIHByb3BlcnR5IHNldHMgdGhlIGNvbG9yIG9mIHRoZSBsaW5lIGRyYXduIGJldHdlZW4gY29sdW1ucyBpbiBhIG11bHRpLWNvbHVtbiBsYXlvdXQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jb2x1bW4tcnVsZS1jb2xvciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNvbHVtbi1ydWxlLWNvbG9yXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1jb2x1bW4tcnVsZS1jb2xvclwiPSBcIndlYmtpdC1jb2x1bW4tcnVsZS1jb2xvclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY29sdW1uLXJ1bGUtc3R5bGUgQ1NTIHByb3BlcnR5IHNldHMgdGhlIHN0eWxlIG9mIHRoZSBsaW5lIGRyYXduIGJldHdlZW4gY29sdW1ucyBpbiBhIG11bHRpLWNvbHVtbiBsYXlvdXQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jb2x1bW4tcnVsZS1zdHlsZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNvbHVtbi1ydWxlLXN0eWxlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1jb2x1bW4tcnVsZS1zdHlsZVwiPSBcIndlYmtpdC1jb2x1bW4tcnVsZS1zdHlsZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY29sdW1uLXJ1bGUtd2lkdGggQ1NTIHByb3BlcnR5IHNldHMgdGhlIHdpZHRoIG9mIHRoZSBsaW5lIGRyYXduIGJldHdlZW4gY29sdW1ucyBpbiBhIG11bHRpLWNvbHVtbiBsYXlvdXQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jb2x1bW4tcnVsZS13aWR0aCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNvbHVtbi1ydWxlLXdpZHRoXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1jb2x1bW4tcnVsZS13aWR0aFwiPSBcIndlYmtpdC1jb2x1bW4tcnVsZS13aWR0aFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY29sdW1uLXNwYW4gQ1NTIHByb3BlcnR5IG1ha2VzIGl0IHBvc3NpYmxlIGZvciBhbiBlbGVtZW50IHRvIHNwYW4gYWNyb3NzIGFsbCBjb2x1bW5zIHdoZW4gaXRzIHZhbHVlIGlzIHNldCB0byBhbGwuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jb2x1bW4tc3BhbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNvbHVtbi1zcGFuXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1jb2x1bW4tc3BhblwiPSBcIndlYmtpdC1jb2x1bW4tc3BhblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY29sdW1uLXdpZHRoIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBpZGVhbCBjb2x1bW4gd2lkdGggaW4gYSBtdWx0aS1jb2x1bW4gbGF5b3V0LiBUaGUgY29udGFpbmVyIHdpbGwgaGF2ZSBhcyBtYW55IGNvbHVtbnMgYXMgY2FuIGZpdCB3aXRob3V0IGFueSBvZiB0aGVtIGhhdmluZyBhIHdpZHRoIGxlc3MgdGhhbiB0aGUgY29sdW1uLXdpZHRoIHZhbHVlLiBJZiB0aGUgd2lkdGggb2YgdGhlIGNvbnRhaW5lciBpcyBuYXJyb3dlciB0aGFuIHRoZSBzcGVjaWZpZWQgdmFsdWUsIHRoZSBzaW5nbGUgY29sdW1uJ3Mgd2lkdGggd2lsbCBiZSBzbWFsbGVyIHRoYW4gdGhlIGRlY2xhcmVkIGNvbHVtbiB3aWR0aC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NvbHVtbi13aWR0aCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNvbHVtbi13aWR0aFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtY29sdW1uLXdpZHRoXCI9IFwid2Via2l0LWNvbHVtbi13aWR0aFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY29sdW1ucyBDU1Mgc2hvcnRoYW5kIHByb3BlcnR5IHNldHMgdGhlIG51bWJlciBvZiBjb2x1bW5zIHRvIHVzZSB3aGVuIGRyYXdpbmcgYW4gZWxlbWVudCdzIGNvbnRlbnRzLCBhcyB3ZWxsIGFzIHRob3NlIGNvbHVtbnMnIHdpZHRocy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NvbHVtbnMgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1jb2x1bW5zXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1jb2x1bW5zXCI9IFwid2Via2l0LWNvbHVtbnNcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZpbHRlciBDU1MgcHJvcGVydHkgYXBwbGllcyBncmFwaGljYWwgZWZmZWN0cyBsaWtlIGJsdXIgb3IgY29sb3Igc2hpZnQgdG8gYW4gZWxlbWVudC4gRmlsdGVycyBhcmUgY29tbW9ubHkgdXNlZCB0byBhZGp1c3QgdGhlIHJlbmRlcmluZyBvZiBpbWFnZXMsIGJhY2tncm91bmRzLCBhbmQgYm9yZGVycy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2ZpbHRlciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZpbHRlclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtZmlsdGVyXCI9IFwid2Via2l0LWZpbHRlclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZmxleCBDU1Mgc2hvcnRoYW5kIHByb3BlcnR5IHNldHMgaG93IGEgZmxleCBpdGVtIHdpbGwgZ3JvdyBvciBzaHJpbmsgdG8gZml0IHRoZSBzcGFjZSBhdmFpbGFibGUgaW4gaXRzIGZsZXggY29udGFpbmVyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZmxleCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZsZXhcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWZsZXhcIj0gXCJ3ZWJraXQtZmxleFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZmxleC1iYXNpcyBDU1MgcHJvcGVydHkgc2V0cyB0aGUgaW5pdGlhbCBtYWluIHNpemUgb2YgYSBmbGV4IGl0ZW0uIEl0IHNldHMgdGhlIHNpemUgb2YgdGhlIGNvbnRlbnQgYm94IHVubGVzcyBvdGhlcndpc2Ugc2V0IHdpdGggYm94LXNpemluZy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2ZsZXgtYmFzaXMgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1mbGV4LWJhc2lzXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1mbGV4LWJhc2lzXCI9IFwid2Via2l0LWZsZXgtYmFzaXNcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZsZXgtZGlyZWN0aW9uIENTUyBwcm9wZXJ0eSBzZXRzIGhvdyBmbGV4IGl0ZW1zIGFyZSBwbGFjZWQgaW4gdGhlIGZsZXggY29udGFpbmVyIGRlZmluaW5nIHRoZSBtYWluIGF4aXMgYW5kIHRoZSBkaXJlY3Rpb24gKG5vcm1hbCBvciByZXZlcnNlZCkuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mbGV4LWRpcmVjdGlvbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZsZXgtZGlyZWN0aW9uXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1mbGV4LWRpcmVjdGlvblwiPSBcIndlYmtpdC1mbGV4LWRpcmVjdGlvblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZmxleC1mbG93IENTUyBzaG9ydGhhbmQgcHJvcGVydHkgc3BlY2lmaWVzIHRoZSBkaXJlY3Rpb24gb2YgYSBmbGV4IGNvbnRhaW5lciwgYXMgd2VsbCBhcyBpdHMgd3JhcHBpbmcgYmVoYXZpb3IuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mbGV4LWZsb3cgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1mbGV4LWZsb3dcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWZsZXgtZmxvd1wiPSBcIndlYmtpdC1mbGV4LWZsb3dcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZsZXgtZ3JvdyBDU1MmbmJzcDtwcm9wZXJ0eSBzZXRzIHRoZSBmbGV4IGdyb3cgZmFjdG9yIG9mIGEgZmxleCBpdGVtJ3MgbWFpbiBzaXplLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZmxleC1ncm93IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9ZmxleC1ncm93XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1mbGV4LWdyb3dcIj0gXCJ3ZWJraXQtZmxleC1ncm93XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBmbGV4LXNocmluayBDU1MgcHJvcGVydHkgc2V0cyB0aGUgZmxleCBzaHJpbmsgZmFjdG9yIG9mIGEgZmxleCBpdGVtLiBJZiB0aGUgc2l6ZSBvZiBhbGwgZmxleCBpdGVtcyBpcyBsYXJnZXIgdGhhbiB0aGUgZmxleCBjb250YWluZXIsIGl0ZW1zIHNocmluayB0byBmaXQgYWNjb3JkaW5nIHRvIGZsZXgtc2hyaW5rLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZmxleC1zaHJpbmsgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1mbGV4LXNocmlua1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtZmxleC1zaHJpbmtcIj0gXCJ3ZWJraXQtZmxleC1zaHJpbmtcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZsZXgtd3JhcCBDU1MgcHJvcGVydHkgc2V0cyB3aGV0aGVyIGZsZXggaXRlbXMgYXJlIGZvcmNlZCBvbnRvIG9uZSBsaW5lIG9yIGNhbiB3cmFwIG9udG8gbXVsdGlwbGUgbGluZXMuIElmIHdyYXBwaW5nIGlzIGFsbG93ZWQsIGl0IHNldHMgdGhlIGRpcmVjdGlvbiB0aGF0IGxpbmVzIGFyZSBzdGFja2VkLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZmxleC13cmFwIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9ZmxleC13cmFwXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1mbGV4LXdyYXBcIj0gXCJ3ZWJraXQtZmxleC13cmFwXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBmb250LWZlYXR1cmUtc2V0dGluZ3MgQ1NTIHByb3BlcnR5IGNvbnRyb2xzIGFkdmFuY2VkIHR5cG9ncmFwaGljIGZlYXR1cmVzIGluIE9wZW5UeXBlIGZvbnRzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZm9udC1mZWF0dXJlLXNldHRpbmdzIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Zm9udC1mZWF0dXJlLXNldHRpbmdzXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1mb250LWZlYXR1cmUtc2V0dGluZ3NcIj0gXCJ3ZWJraXQtZm9udC1mZWF0dXJlLXNldHRpbmdzXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBmb250LXNtb290aCBDU1MgcHJvcGVydHkgY29udHJvbHMgdGhlIGFwcGxpY2F0aW9uIG9mIGFudGktYWxpYXNpbmcgd2hlbiBmb250cyBhcmUgcmVuZGVyZWQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mb250LXNtb290aCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZvbnQtc21vb3RoXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1mb250LXNtb290aGluZ1wiPSBcIndlYmtpdC1mb250LXNtb290aGluZ1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1oaWdobGlnaHRcIj0gXCJ3ZWJraXQtaGlnaGxpZ2h0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWh5cGhlbmF0ZS1jaGFyYWN0ZXJcIj0gXCJ3ZWJraXQtaHlwaGVuYXRlLWNoYXJhY3RlclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgQ1NTIGp1c3RpZnktY29udGVudCBwcm9wZXJ0eSBkZWZpbmVzIGhvdyB0aGUgYnJvd3NlciBkaXN0cmlidXRlcyBzcGFjZSBiZXR3ZWVuIGFuZCBhcm91bmQgY29udGVudCBpdGVtcyBhbG9uZyB0aGUgbWFpbi1heGlzIG9mIGEgZmxleCBjb250YWluZXIsIGFuZCB0aGUgaW5saW5lIGF4aXMgb2YgYSBncmlkIGNvbnRhaW5lci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2p1c3RpZnktY29udGVudCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWp1c3RpZnktY29udGVudFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtanVzdGlmeS1jb250ZW50XCI9IFwid2Via2l0LWp1c3RpZnktY29udGVudFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbGluZS1icmVhayBDU1MgcHJvcGVydHkgc2V0cyBob3cgdG8gYnJlYWsgbGluZXMgb2YgQ2hpbmVzZSwgSmFwYW5lc2UsIG9yIEtvcmVhbiAoQ0pLKSB0ZXh0IHdoZW4gd29ya2luZyB3aXRoIHB1bmN0dWF0aW9uIGFuZCBzeW1ib2xzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvbGluZS1icmVhayBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWxpbmUtYnJlYWtcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWxpbmUtYnJlYWtcIj0gXCJ3ZWJraXQtbGluZS1icmVha1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgLXdlYmtpdC1saW5lLWNsYW1wIENTUyBwcm9wZXJ0eSBhbGxvd3MgbGltaXRpbmcgb2YgdGhlIGNvbnRlbnRzIG9mIGEgYmxvY2sgY29udGFpbmVyIHRvIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGxpbmVzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvLXdlYmtpdC1saW5lLWNsYW1wIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9LXdlYmtpdC1saW5lLWNsYW1wXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1saW5lLWNsYW1wXCI9IFwid2Via2l0LWxpbmUtY2xhbXBcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtbG9jYWxlXCI9IFwid2Via2l0LWxvY2FsZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1sb2dpY2FsLWhlaWdodFwiPSBcIndlYmtpdC1sb2dpY2FsLWhlaWdodFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1sb2dpY2FsLXdpZHRoXCI9IFwid2Via2l0LWxvZ2ljYWwtd2lkdGhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtbWFyZ2luLWFmdGVyXCI9IFwid2Via2l0LW1hcmdpbi1hZnRlclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1tYXJnaW4tYmVmb3JlXCI9IFwid2Via2l0LW1hcmdpbi1iZWZvcmVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtbWFyZ2luLWVuZFwiPSBcIndlYmtpdC1tYXJnaW4tZW5kXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LW1hcmdpbi1zdGFydFwiPSBcIndlYmtpdC1tYXJnaW4tc3RhcnRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG1hc2sgQ1NTIHNob3J0aGFuZCBwcm9wZXJ0eSBoaWRlcyBhbiBlbGVtZW50IChwYXJ0aWFsbHkgb3IgZnVsbHkpIGJ5IG1hc2tpbmcgb3IgY2xpcHBpbmcgdGhlIGltYWdlIGF0IHNwZWNpZmljIHBvaW50cy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL21hc2sgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1tYXNrXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1tYXNrXCI9IFwid2Via2l0LW1hc2tcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgLXdlYmtpdC1tYXNrLWJveC1pbWFnZSBzZXRzIHRoZSBtYXNrIGltYWdlIGZvciBhbiBlbGVtZW50J3MgYm9yZGVyIGJveC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTLy13ZWJraXQtbWFzay1ib3gtaW1hZ2UgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz0td2Via2l0LW1hc2stYm94LWltYWdlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1tYXNrLWJveC1pbWFnZVwiPSBcIndlYmtpdC1tYXNrLWJveC1pbWFnZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1tYXNrLWJveC1pbWFnZS1vdXRzZXRcIj0gXCJ3ZWJraXQtbWFzay1ib3gtaW1hZ2Utb3V0c2V0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LW1hc2stYm94LWltYWdlLXJlcGVhdFwiPSBcIndlYmtpdC1tYXNrLWJveC1pbWFnZS1yZXBlYXRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtbWFzay1ib3gtaW1hZ2Utc2xpY2VcIj0gXCJ3ZWJraXQtbWFzay1ib3gtaW1hZ2Utc2xpY2VcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtbWFzay1ib3gtaW1hZ2Utc291cmNlXCI9IFwid2Via2l0LW1hc2stYm94LWltYWdlLXNvdXJjZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1tYXNrLWJveC1pbWFnZS13aWR0aFwiPSBcIndlYmtpdC1tYXNrLWJveC1pbWFnZS13aWR0aFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbWFzay1jbGlwIENTUyBwcm9wZXJ0eSBkZXRlcm1pbmVzIHRoZSBhcmVhIHdoaWNoIGlzIGFmZmVjdGVkIGJ5IGEgbWFzay4gVGhlIHBhaW50ZWQgY29udGVudCBvZiBhbiBlbGVtZW50IG11c3QgYmUgcmVzdHJpY3RlZCB0byB0aGlzIGFyZWEuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9tYXNrLWNsaXAgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1tYXNrLWNsaXBcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LW1hc2stY2xpcFwiPSBcIndlYmtpdC1tYXNrLWNsaXBcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIC13ZWJraXQtbWFzay1jb21wb3NpdGUgcHJvcGVydHkgc3BlY2lmaWVzIHRoZSBtYW5uZXIgaW4gd2hpY2ggbXVsdGlwbGUgbWFzayBpbWFnZXMgYXBwbGllZCB0byB0aGUgc2FtZSBlbGVtZW50IGFyZSBjb21wb3NpdGVkIHdpdGggb25lIGFub3RoZXIuIE1hc2sgaW1hZ2VzIGFyZSBjb21wb3NpdGVkIGluIHRoZSBvcHBvc2l0ZSBvcmRlciB0aGF0IHRoZXkgYXJlIGRlY2xhcmVkIHdpdGggdGhlIC13ZWJraXQtbWFzay1pbWFnZSBwcm9wZXJ0eS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTLy13ZWJraXQtbWFzay1jb21wb3NpdGUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz0td2Via2l0LW1hc2stY29tcG9zaXRlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1tYXNrLWNvbXBvc2l0ZVwiPSBcIndlYmtpdC1tYXNrLWNvbXBvc2l0ZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbWFzay1pbWFnZSBDU1MgcHJvcGVydHkgc2V0cyB0aGUgaW1hZ2UgdGhhdCBpcyB1c2VkIGFzIG1hc2sgbGF5ZXIgZm9yIGFuIGVsZW1lbnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9tYXNrLWltYWdlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bWFzay1pbWFnZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtbWFzay1pbWFnZVwiPSBcIndlYmtpdC1tYXNrLWltYWdlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBtYXNrLW9yaWdpbiBDU1MgcHJvcGVydHkgc2V0cyB0aGUgb3JpZ2luIG9mIGEgbWFzay5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL21hc2stb3JpZ2luIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bWFzay1vcmlnaW5cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LW1hc2stb3JpZ2luXCI9IFwid2Via2l0LW1hc2stb3JpZ2luXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBtYXNrLXBvc2l0aW9uIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBpbml0aWFsIHBvc2l0aW9uLCByZWxhdGl2ZSB0byB0aGUgbWFzayBwb3NpdGlvbiBsYXllciBzZXQgYnkgbWFzay1vcmlnaW4sIGZvciBlYWNoIGRlZmluZWQgbWFzayBpbWFnZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL21hc2stcG9zaXRpb24gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1tYXNrLXBvc2l0aW9uXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1tYXNrLXBvc2l0aW9uXCI9IFwid2Via2l0LW1hc2stcG9zaXRpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIC13ZWJraXQtbWFzay1wb3NpdGlvbi14IENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBpbml0aWFsIGhvcml6b250YWwgcG9zaXRpb24gb2YgYSBtYXNrIGltYWdlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvLXdlYmtpdC1tYXNrLXBvc2l0aW9uLXggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz0td2Via2l0LW1hc2stcG9zaXRpb24teFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtbWFzay1wb3NpdGlvbi14XCI9IFwid2Via2l0LW1hc2stcG9zaXRpb24teFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgLXdlYmtpdC1tYXNrLXBvc2l0aW9uLXkgQ1NTIHByb3BlcnR5IHNldHMgdGhlIGluaXRpYWwgdmVydGljYWwgcG9zaXRpb24gb2YgYSBtYXNrIGltYWdlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvLXdlYmtpdC1tYXNrLXBvc2l0aW9uLXkgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz0td2Via2l0LW1hc2stcG9zaXRpb24teVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtbWFzay1wb3NpdGlvbi15XCI9IFwid2Via2l0LW1hc2stcG9zaXRpb24teVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbWFzay1yZXBlYXQgQ1NTIHByb3BlcnR5IHNldHMgaG93IG1hc2sgaW1hZ2VzIGFyZSByZXBlYXRlZC4gQSBtYXNrIGltYWdlIGNhbiBiZSByZXBlYXRlZCBhbG9uZyB0aGUgaG9yaXpvbnRhbCBheGlzLCB0aGUgdmVydGljYWwgYXhpcywgYm90aCBheGVzLCBvciBub3QgcmVwZWF0ZWQgYXQgYWxsLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvbWFzay1yZXBlYXQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1tYXNrLXJlcGVhdFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtbWFzay1yZXBlYXRcIj0gXCJ3ZWJraXQtbWFzay1yZXBlYXRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIC13ZWJraXQtbWFzay1yZXBlYXQteCBwcm9wZXJ0eSBzcGVjaWZpZXMgd2hldGhlciBhbmQgaG93IGEgbWFzayBpbWFnZSBpcyByZXBlYXRlZCAodGlsZWQpIGhvcml6b250YWxseS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTLy13ZWJraXQtbWFzay1yZXBlYXQteCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PS13ZWJraXQtbWFzay1yZXBlYXQteFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtbWFzay1yZXBlYXQteFwiPSBcIndlYmtpdC1tYXNrLXJlcGVhdC14XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSAtd2Via2l0LW1hc2stcmVwZWF0LXkgcHJvcGVydHkgc2V0cyB3aGV0aGVyIGFuZCBob3cgYSBtYXNrIGltYWdlIGlzIHJlcGVhdGVkICh0aWxlZCkgdmVydGljYWxseS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTLy13ZWJraXQtbWFzay1yZXBlYXQteSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PS13ZWJraXQtbWFzay1yZXBlYXQteVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtbWFzay1yZXBlYXQteVwiPSBcIndlYmtpdC1tYXNrLXJlcGVhdC15XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBtYXNrLXNpemUgQ1NTIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgc2l6ZXMgb2YgdGhlIG1hc2sgaW1hZ2VzLiBUaGUgc2l6ZSBvZiB0aGUgaW1hZ2UgY2FuIGJlIGZ1bGx5IG9yIHBhcnRpYWxseSBjb25zdHJhaW5lZCBpbiBvcmRlciB0byBwcmVzZXJ2ZSBpdHMgaW50cmluc2ljIHJhdGlvLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvbWFzay1zaXplIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bWFzay1zaXplXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1tYXNrLXNpemVcIj0gXCJ3ZWJraXQtbWFzay1zaXplXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LW1heC1sb2dpY2FsLWhlaWdodFwiPSBcIndlYmtpdC1tYXgtbG9naWNhbC1oZWlnaHRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtbWF4LWxvZ2ljYWwtd2lkdGhcIj0gXCJ3ZWJraXQtbWF4LWxvZ2ljYWwtd2lkdGhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtbWluLWxvZ2ljYWwtaGVpZ2h0XCI9IFwid2Via2l0LW1pbi1sb2dpY2FsLWhlaWdodFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1taW4tbG9naWNhbC13aWR0aFwiPSBcIndlYmtpdC1taW4tbG9naWNhbC13aWR0aFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgb3BhY2l0eSBDU1MgcHJvcGVydHkgc2V0cyB0aGUgb3BhY2l0eSBvZiBhbiBlbGVtZW50LiBPcGFjaXR5IGlzIHRoZSBkZWdyZWUgdG8gd2hpY2ggY29udGVudCBiZWhpbmQgYW4gZWxlbWVudCBpcyBoaWRkZW4sIGFuZCBpcyB0aGUgb3Bwb3NpdGUgb2YgdHJhbnNwYXJlbmN5LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvb3BhY2l0eSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW9wYWNpdHlcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LW9wYWNpdHlcIj0gXCJ3ZWJraXQtb3BhY2l0eVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgb3JkZXIgQ1NTIHByb3BlcnR5IHNldHMgdGhlIG9yZGVyIHRvIGxheSBvdXQgYW4gaXRlbSBpbiBhIGZsZXggb3IgZ3JpZCBjb250YWluZXIuIEl0ZW1zIGluIGEgY29udGFpbmVyIGFyZSBzb3J0ZWQgYnkgYXNjZW5kaW5nIG9yZGVyIHZhbHVlIGFuZCB0aGVuIGJ5IHRoZWlyIHNvdXJjZSBjb2RlIG9yZGVyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvb3JkZXIgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1vcmRlclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtb3JkZXJcIj0gXCJ3ZWJraXQtb3JkZXJcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtcGFkZGluZy1hZnRlclwiPSBcIndlYmtpdC1wYWRkaW5nLWFmdGVyXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXBhZGRpbmctYmVmb3JlXCI9IFwid2Via2l0LXBhZGRpbmctYmVmb3JlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXBhZGRpbmctZW5kXCI9IFwid2Via2l0LXBhZGRpbmctZW5kXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXBhZGRpbmctc3RhcnRcIj0gXCJ3ZWJraXQtcGFkZGluZy1zdGFydFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgcGVyc3BlY3RpdmUgQ1NTIHByb3BlcnR5IGRldGVybWluZXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHo9MCBwbGFuZSBhbmQgdGhlIHVzZXIgaW4gb3JkZXIgdG8gZ2l2ZSBhIDNELXBvc2l0aW9uZWQgZWxlbWVudCBzb21lIHBlcnNwZWN0aXZlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvcGVyc3BlY3RpdmUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1wZXJzcGVjdGl2ZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtcGVyc3BlY3RpdmVcIj0gXCJ3ZWJraXQtcGVyc3BlY3RpdmVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHBlcnNwZWN0aXZlLW9yaWdpbiBDU1MgcHJvcGVydHkgZGV0ZXJtaW5lcyB0aGUgcG9zaXRpb24gYXQgd2hpY2ggdGhlIHZpZXdlciBpcyBsb29raW5nLiBJdCBpcyB1c2VkIGFzIHRoZSB2YW5pc2hpbmcgcG9pbnQgYnkgdGhlIHBlcnNwZWN0aXZlIHByb3BlcnR5LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvcGVyc3BlY3RpdmUtb3JpZ2luIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9cGVyc3BlY3RpdmUtb3JpZ2luXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1wZXJzcGVjdGl2ZS1vcmlnaW5cIj0gXCJ3ZWJraXQtcGVyc3BlY3RpdmUtb3JpZ2luXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXBlcnNwZWN0aXZlLW9yaWdpbi14XCI9IFwid2Via2l0LXBlcnNwZWN0aXZlLW9yaWdpbi14XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXBlcnNwZWN0aXZlLW9yaWdpbi15XCI9IFwid2Via2l0LXBlcnNwZWN0aXZlLW9yaWdpbi15XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSAtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdCBwcm9wZXJ0eSBpcyBhIG5vbi1zdGFuZGFyZCBDU1MgZXh0ZW5zaW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gZm9yY2UgcHJpbnRpbmcgb2YgYmFja2dyb3VuZCBjb2xvcnMgYW5kIGltYWdlcyBpbiBicm93c2VycyBiYXNlZCBvbiB0aGUgV2ViS2l0IGVuZ2luZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTLy13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9LXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3RcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXByaW50LWNvbG9yLWFkanVzdFwiPSBcIndlYmtpdC1wcmludC1jb2xvci1hZGp1c3RcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtcnRsLW9yZGVyaW5nXCI9IFwid2Via2l0LXJ0bC1vcmRlcmluZ1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgcnVieS1wb3NpdGlvbiBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgcG9zaXRpb24gb2YgYSBydWJ5IGVsZW1lbnQgcmVsYXRpdmVzIHRvIGl0cyBiYXNlIGVsZW1lbnQuIEl0IGNhbiBiZSBwb3NpdGlvbmVkIG92ZXIgdGhlIGVsZW1lbnQgKG92ZXIpLCB1bmRlciBpdCAodW5kZXIpLCBvciBiZXR3ZWVuIHRoZSBjaGFyYWN0ZXJzIG9uIHRoZWlyIHJpZ2h0IHNpZGUgKGludGVyLWNoYXJhY3RlcikuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ydWJ5LXBvc2l0aW9uIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9cnVieS1wb3NpdGlvblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtcnVieS1wb3NpdGlvblwiPSBcIndlYmtpdC1ydWJ5LXBvc2l0aW9uXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzaGFwZS1pbWFnZS10aHJlc2hvbGQgQ1NTIHByb3BlcnR5IHNldHMgdGhlIGFscGhhIGNoYW5uZWwgdGhyZXNob2xkIHVzZWQgdG8gZXh0cmFjdCB0aGUgc2hhcGUgdXNpbmcgYW4gaW1hZ2UgYXMgdGhlIHZhbHVlIGZvciBzaGFwZS1vdXRzaWRlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvc2hhcGUtaW1hZ2UtdGhyZXNob2xkIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c2hhcGUtaW1hZ2UtdGhyZXNob2xkXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1zaGFwZS1pbWFnZS10aHJlc2hvbGRcIj0gXCJ3ZWJraXQtc2hhcGUtaW1hZ2UtdGhyZXNob2xkXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzaGFwZS1tYXJnaW4gQ1NTIHByb3BlcnR5IHNldHMgYSBtYXJnaW4gZm9yIGEgQ1NTIHNoYXBlIGNyZWF0ZWQgdXNpbmcgc2hhcGUtb3V0c2lkZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3NoYXBlLW1hcmdpbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXNoYXBlLW1hcmdpblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtc2hhcGUtbWFyZ2luXCI9IFwid2Via2l0LXNoYXBlLW1hcmdpblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc2hhcGUtb3V0c2lkZSBDU1MgcHJvcGVydHkgZGVmaW5lcyBhIHNoYXBl4oCUd2hpY2ggbWF5IGJlIG5vbi1yZWN0YW5ndWxhcuKAlGFyb3VuZCB3aGljaCBhZGphY2VudCBpbmxpbmUgY29udGVudCBzaG91bGQgd3JhcC4gQnkgZGVmYXVsdCwgaW5saW5lIGNvbnRlbnQgd3JhcHMgYXJvdW5kIGl0cyBtYXJnaW4gYm94OyBzaGFwZS1vdXRzaWRlIHByb3ZpZGVzIGEgd2F5IHRvIGN1c3RvbWl6ZSB0aGlzIHdyYXBwaW5nLCBtYWtpbmcgaXQgcG9zc2libGUgdG8gd3JhcCB0ZXh0IGFyb3VuZCBjb21wbGV4IG9iamVjdHMgcmF0aGVyIHRoYW4gc2ltcGxlIGJveGVzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvc2hhcGUtb3V0c2lkZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXNoYXBlLW91dHNpZGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXNoYXBlLW91dHNpZGVcIj0gXCJ3ZWJraXQtc2hhcGUtb3V0c2lkZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3IgaXMgYSBub24tc3RhbmRhcmQgQ1NTIHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgY29sb3Igb2YgdGhlIGhpZ2hsaWdodCB0aGF0IGFwcGVhcnMgb3ZlciBhIGxpbmsgd2hpbGUgaXQncyBiZWluZyB0YXBwZWQuIFRoZSBoaWdobGlnaHRpbmcgaW5kaWNhdGVzIHRvIHRoZSB1c2VyJm5ic3A7dGhhdCB0aGVpciB0YXAgaXMgYmVpbmcgc3VjY2Vzc2Z1bGx5IHJlY29nbml6ZWQsIGFuZCBpbmRpY2F0ZXMgd2hpY2ggZWxlbWVudCB0aGV5J3JlIHRhcHBpbmcgb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy8td2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3IgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz0td2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3JcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3JcIj0gXCJ3ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC10ZXh0LWNvbWJpbmVcIj0gXCJ3ZWJraXQtdGV4dC1jb21iaW5lXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXRleHQtZGVjb3JhdGlvbnMtaW4tZWZmZWN0XCI9IFwid2Via2l0LXRleHQtZGVjb3JhdGlvbnMtaW4tZWZmZWN0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0ZXh0LWVtcGhhc2lzIENTUyBwcm9wZXJ0eSBhcHBsaWVzIGVtcGhhc2lzIG1hcmtzIHRvIHRleHQgKGV4Y2VwdCBzcGFjZXMgYW5kIGNvbnRyb2wgY2hhcmFjdGVycykuIEl0IGlzIGEgc2hvcnRoYW5kIGZvciB0ZXh0LWVtcGhhc2lzLXN0eWxlIGFuZCB0ZXh0LWVtcGhhc2lzLWNvbG9yLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdGV4dC1lbXBoYXNpcyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRleHQtZW1waGFzaXNcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXRleHQtZW1waGFzaXNcIj0gXCJ3ZWJraXQtdGV4dC1lbXBoYXNpc1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdGV4dC1lbXBoYXNpcy1jb2xvciBDU1MgcHJvcGVydHkgc2V0cyB0aGUgY29sb3Igb2YgZW1waGFzaXMgbWFya3MuIFRoaXMgdmFsdWUgY2FuIGFsc28gYmUgc2V0IHVzaW5nIHRoZSB0ZXh0LWVtcGhhc2lzIHNob3J0aGFuZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RleHQtZW1waGFzaXMtY29sb3IgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10ZXh0LWVtcGhhc2lzLWNvbG9yXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC10ZXh0LWVtcGhhc2lzLWNvbG9yXCI9IFwid2Via2l0LXRleHQtZW1waGFzaXMtY29sb3JcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRleHQtZW1waGFzaXMtcG9zaXRpb24gQ1NTIHByb3BlcnR5IHNldHMgd2hlcmUgZW1waGFzaXMgbWFya3MgYXJlIGRyYXduLiBMaWtlIHJ1YnkgdGV4dCwgaWYgdGhlcmUgaXNuJ3QgZW5vdWdoIHJvb20gZm9yIGVtcGhhc2lzIG1hcmtzLCB0aGUgbGluZSBoZWlnaHQgaXMgaW5jcmVhc2VkLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdGV4dC1lbXBoYXNpcy1wb3NpdGlvbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRleHQtZW1waGFzaXMtcG9zaXRpb25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXRleHQtZW1waGFzaXMtcG9zaXRpb25cIj0gXCJ3ZWJraXQtdGV4dC1lbXBoYXNpcy1wb3NpdGlvblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdGV4dC1lbXBoYXNpcy1zdHlsZSBDU1MgcHJvcGVydHkgc2V0cyB0aGUgYXBwZWFyYW5jZSBvZiBlbXBoYXNpcyBtYXJrcy4gSXQgY2FuIGFsc28gYmUgc2V0LCBhbmQgcmVzZXQsIHVzaW5nIHRoZSB0ZXh0LWVtcGhhc2lzIHNob3J0aGFuZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RleHQtZW1waGFzaXMtc3R5bGUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10ZXh0LWVtcGhhc2lzLXN0eWxlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC10ZXh0LWVtcGhhc2lzLXN0eWxlXCI9IFwid2Via2l0LXRleHQtZW1waGFzaXMtc3R5bGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yIENTUyBwcm9wZXJ0eSBzcGVjaWZpZXMgdGhlIGZpbGwgY29sb3Igb2YgY2hhcmFjdGVycyBvZiB0ZXh0LiBJZiB0aGlzIHByb3BlcnR5IGlzIG5vdCBzZXQsIHRoZSB2YWx1ZSBvZiB0aGUgY29sb3IgcHJvcGVydHkgaXMgdXNlZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTLy13ZWJraXQtdGV4dC1maWxsLWNvbG9yIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9LXdlYmtpdC10ZXh0LWZpbGwtY29sb3JcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXRleHQtZmlsbC1jb2xvclwiPSBcIndlYmtpdC10ZXh0LWZpbGwtY29sb3JcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRleHQtb3JpZW50YXRpb24gQ1NTIHByb3BlcnR5IHNldHMgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSB0ZXh0IGNoYXJhY3RlcnMgaW4gYSBsaW5lLiBJdCBvbmx5IGFmZmVjdHMgdGV4dCBpbiB2ZXJ0aWNhbCBtb2RlICh3aGVuIHdyaXRpbmctbW9kZSBpcyBub3QgaG9yaXpvbnRhbC10YikuIEl0IGlzIHVzZWZ1bCBmb3IgY29udHJvbGxpbmcgdGhlIGRpc3BsYXkgb2YgbGFuZ3VhZ2VzIHRoYXQgdXNlIHZlcnRpY2FsIHNjcmlwdCwgYW5kIGFsc28gZm9yIG1ha2luZyB2ZXJ0aWNhbCB0YWJsZSBoZWFkZXJzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdGV4dC1vcmllbnRhdGlvbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRleHQtb3JpZW50YXRpb25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXRleHQtb3JpZW50YXRpb25cIj0gXCJ3ZWJraXQtdGV4dC1vcmllbnRhdGlvblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAtd2Via2l0LXRleHQtc2VjdXJpdHkgaXMgYSBub24tc3RhbmRhcmQgQ1NTIHByb3BlcnR5IHRoYXQgb2JmdXNjYXRlcyBjaGFyYWN0ZXJzIGluIGEgJmx0O2Zvcm0mZ3Q7IGZpZWxkIChzdWNoIGFzJm5ic3A7Jmx0O2lucHV0Jmd0OyBvciZuYnNwOyZsdDt0ZXh0YXJlYSZndDspIGJ5IHJlcGxhY2luZyB0aGVtIHdpdGggYSBzaGFwZS4gSXQgb25seSBhZmZlY3RzIGZpZWxkcyB0aGF0IGFyZSBub3Qgb2YgdHlwZT1wYXNzd29yZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTLy13ZWJraXQtdGV4dC1zZWN1cml0eSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PS13ZWJraXQtdGV4dC1zZWN1cml0eVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtdGV4dC1zZWN1cml0eVwiPSBcIndlYmtpdC10ZXh0LXNlY3VyaXR5XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0ZXh0LXNpemUtYWRqdXN0IENTUyBwcm9wZXJ0eSBjb250cm9scyB0aGUgdGV4dCBpbmZsYXRpb24gYWxnb3JpdGhtIHVzZWQgb24gc29tZSBzbWFydHBob25lcyBhbmQgdGFibGV0cy4gT3RoZXIgYnJvd3NlcnMgd2lsbCBpZ25vcmUgdGhpcyBwcm9wZXJ0eS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RleHQtc2l6ZS1hZGp1c3QgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10ZXh0LXNpemUtYWRqdXN0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC10ZXh0LXNpemUtYWRqdXN0XCI9IFwid2Via2l0LXRleHQtc2l6ZS1hZGp1c3RcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIC13ZWJraXQtdGV4dC1zdHJva2UgQ1NTIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgd2lkdGggYW5kIGNvbG9yIG9mIHN0cm9rZXMgZm9yIHRleHQgY2hhcmFjdGVycy4gVGhpcyBpcyBhIHNob3J0aGFuZCBwcm9wZXJ0eSBmb3IgdGhlIGxvbmdoYW5kIHByb3BlcnRpZXMgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aCBhbmQgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTLy13ZWJraXQtdGV4dC1zdHJva2UgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz0td2Via2l0LXRleHQtc3Ryb2tlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC10ZXh0LXN0cm9rZVwiPSBcIndlYmtpdC10ZXh0LXN0cm9rZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvciBDU1MgcHJvcGVydHkgc3BlY2lmaWVzIHRoZSBzdHJva2UgY29sb3Igb2YgY2hhcmFjdGVycyBvZiB0ZXh0LiBJZiB0aGlzIHByb3BlcnR5IGlzIG5vdCBzZXQsIHRoZSB2YWx1ZSBvZiB0aGUgY29sb3IgcHJvcGVydHkgaXMgdXNlZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTLy13ZWJraXQtdGV4dC1zdHJva2UtY29sb3IgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz0td2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC10ZXh0LXN0cm9rZS1jb2xvclwiPSBcIndlYmtpdC10ZXh0LXN0cm9rZS1jb2xvclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aCBDU1MgcHJvcGVydHkgc3BlY2lmaWVzIHRoZSB3aWR0aCBvZiB0aGUgc3Ryb2tlIGZvciB0ZXh0LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PS13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGhcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoXCI9IFwid2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0cmFuc2Zvcm0gQ1NTIHByb3BlcnR5IGxldHMgeW91IHJvdGF0ZSwgc2NhbGUsIHNrZXcsIG9yIHRyYW5zbGF0ZSBhbiBlbGVtZW50LiBJdCBtb2RpZmllcyB0aGUgY29vcmRpbmF0ZSBzcGFjZSBvZiB0aGUgQ1NTIHZpc3VhbCBmb3JtYXR0aW5nIG1vZGVsLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdHJhbnNmb3JtIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dHJhbnNmb3JtXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC10cmFuc2Zvcm1cIj0gXCJ3ZWJraXQtdHJhbnNmb3JtXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0cmFuc2Zvcm0tb3JpZ2luIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBvcmlnaW4gZm9yIGFuIGVsZW1lbnQncyB0cmFuc2Zvcm1hdGlvbnMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90cmFuc2Zvcm0tb3JpZ2luIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dHJhbnNmb3JtLW9yaWdpblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtdHJhbnNmb3JtLW9yaWdpblwiPSBcIndlYmtpdC10cmFuc2Zvcm0tb3JpZ2luXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXRyYW5zZm9ybS1vcmlnaW4teFwiPSBcIndlYmtpdC10cmFuc2Zvcm0tb3JpZ2luLXhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtdHJhbnNmb3JtLW9yaWdpbi15XCI9IFwid2Via2l0LXRyYW5zZm9ybS1vcmlnaW4teVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC10cmFuc2Zvcm0tb3JpZ2luLXpcIj0gXCJ3ZWJraXQtdHJhbnNmb3JtLW9yaWdpbi16XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0cmFuc2Zvcm0tc3R5bGUgQ1NTIHByb3BlcnR5IHNldHMgd2hldGhlciBjaGlsZHJlbiBvZiBhbiBlbGVtZW50IGFyZSBwb3NpdGlvbmVkIGluIHRoZSAzRCBzcGFjZSBvciBhcmUgZmxhdHRlbmVkIGluIHRoZSBwbGFuZSBvZiB0aGUgZWxlbWVudC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RyYW5zZm9ybS1zdHlsZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRyYW5zZm9ybS1zdHlsZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtdHJhbnNmb3JtLXN0eWxlXCI9IFwid2Via2l0LXRyYW5zZm9ybS1zdHlsZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdHJhbnNpdGlvbiBDU1MgcHJvcGVydHkgaXMgYSBzaG9ydGhhbmQgcHJvcGVydHkgZm9yIHRyYW5zaXRpb24tcHJvcGVydHksIHRyYW5zaXRpb24tZHVyYXRpb24sIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uLCBhbmQgdHJhbnNpdGlvbi1kZWxheS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RyYW5zaXRpb24gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10cmFuc2l0aW9uXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC10cmFuc2l0aW9uXCI9IFwid2Via2l0LXRyYW5zaXRpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRyYW5zaXRpb24tZGVsYXkgQ1NTIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgZHVyYXRpb24gdG8gd2FpdCBiZWZvcmUgc3RhcnRpbmcgYSBwcm9wZXJ0eSdzIHRyYW5zaXRpb24gZWZmZWN0IHdoZW4gaXRzIHZhbHVlIGNoYW5nZXMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90cmFuc2l0aW9uLWRlbGF5IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dHJhbnNpdGlvbi1kZWxheVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtdHJhbnNpdGlvbi1kZWxheVwiPSBcIndlYmtpdC10cmFuc2l0aW9uLWRlbGF5XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0cmFuc2l0aW9uLWR1cmF0aW9uIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBsZW5ndGggb2YgdGltZSBhIHRyYW5zaXRpb24gYW5pbWF0aW9uIHNob3VsZCB0YWtlIHRvIGNvbXBsZXRlLiBCeSBkZWZhdWx0LCB0aGUgdmFsdWUgaXMgMHMsIG1lYW5pbmcgdGhhdCBubyBhbmltYXRpb24gd2lsbCBvY2N1ci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RyYW5zaXRpb24tZHVyYXRpb24gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10cmFuc2l0aW9uLWR1cmF0aW9uXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uXCI9IFwid2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRyYW5zaXRpb24tcHJvcGVydHkgQ1NTIHByb3BlcnR5IHNldHMgdGhlIENTUyBwcm9wZXJ0aWVzIHRvIHdoaWNoIGEgdHJhbnNpdGlvbiBlZmZlY3Qgc2hvdWxkIGJlIGFwcGxpZWQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90cmFuc2l0aW9uLXByb3BlcnR5IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dHJhbnNpdGlvbi1wcm9wZXJ0eVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eVwiPSBcIndlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiBDU1MgcHJvcGVydHkgc2V0cyBob3cgaW50ZXJtZWRpYXRlIHZhbHVlcyBhcmUgY2FsY3VsYXRlZCBmb3IgQ1NTIHByb3BlcnRpZXMgYmVpbmcgYWZmZWN0ZWQgYnkgYSB0cmFuc2l0aW9uIGVmZmVjdC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXCI9IFwid2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXVzZXItZHJhZ1wiPSBcIndlYmtpdC11c2VyLWRyYWdcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHVzZXItbW9kaWZ5IHByb3BlcnR5IGhhcyBubyBlZmZlY3QgaW4gRmlyZWZveC4gSXQgd2FzIG9yaWdpbmFsbHkgcGxhbm5lZCB0byZuYnNwO2RldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0aGUgY29udGVudCBvZiBhbiBlbGVtZW50IGNhbiBiZSBlZGl0ZWQgYnkgYSB1c2VyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdXNlci1tb2RpZnkgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz11c2VyLW1vZGlmeVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtdXNlci1tb2RpZnlcIj0gXCJ3ZWJraXQtdXNlci1tb2RpZnlcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHVzZXItc2VsZWN0IENTUyBwcm9wZXJ0eSBjb250cm9scyB3aGV0aGVyIHRoZSB1c2VyIGNhbiBzZWxlY3QgdGV4dC4gVGhpcyBkb2Vzbid0IGhhdmUgYW55IGVmZmVjdCBvbiBjb250ZW50IGxvYWRlZCBhcyBwYXJ0IG9mIGEgYnJvd3NlcidzIHVzZXIgaW50ZXJmYWNlIChpdHMgY2hyb21lKSwgZXhjZXB0IGluIHRleHRib3hlcy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3VzZXItc2VsZWN0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dXNlci1zZWxlY3RcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXVzZXItc2VsZWN0XCI9IFwid2Via2l0LXVzZXItc2VsZWN0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB3cml0aW5nLW1vZGUgQ1NTIHByb3BlcnR5IHNldHMgd2hldGhlciBsaW5lcyBvZiB0ZXh0IGFyZSBsYWlkIG91dCBob3Jpem9udGFsbHkgb3IgdmVydGljYWxseSwgYXMgd2VsbCBhcyB0aGUgZGlyZWN0aW9uIGluIHdoaWNoIGJsb2NrcyBwcm9ncmVzcy4gV2hlbiBzZXQgZm9yIGFuIGVudGlyZSBkb2N1bWVudCwgaXQgc2hvdWxkIGJlIHNldCBvbiB0aGUgcm9vdCBlbGVtZW50IChodG1sIGVsZW1lbnQgZm9yIEhUTUwgZG9jdW1lbnRzKS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3dyaXRpbmctbW9kZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXdyaXRpbmctbW9kZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtd3JpdGluZy1tb2RlXCI9IFwid2Via2l0LXdyaXRpbmctbW9kZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgd2hpdGUtc3BhY2UgQ1NTIHByb3BlcnR5IHNldHMgaG93IHdoaXRlIHNwYWNlIGluc2lkZSBhbiBlbGVtZW50IGlzIGhhbmRsZWQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy93aGl0ZS1zcGFjZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXdoaXRlLXNwYWNlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndoaXRlLXNwYWNlXCI9IFwid2hpdGUtc3BhY2VcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHdpZG93cyBDU1MgcHJvcGVydHkgc2V0cyB0aGUgbWluaW11bSBudW1iZXIgb2YgbGluZXMgaW4gYSBibG9jayBjb250YWluZXIgdGhhdCBtdXN0IGJlIHNob3duIGF0IHRoZSB0b3Agb2YgYSBwYWdlLCByZWdpb24sIG9yIGNvbHVtbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3dpZG93cyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXdpZG93c1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICB3aWRvd3M9IFwid2lkb3dzXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB3aWR0aCBDU1MgcHJvcGVydHkgc2V0cyBhbiBlbGVtZW50J3Mgd2lkdGguIEJ5IGRlZmF1bHQsIGl0IHNldHMgdGhlIHdpZHRoIG9mIHRoZSBjb250ZW50IGFyZWEsIGJ1dCBpZiBib3gtc2l6aW5nIGlzIHNldCB0byBib3JkZXItYm94LCBpdCBzZXRzIHRoZSB3aWR0aCBvZiB0aGUgYm9yZGVyIGFyZWEuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy93aWR0aCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXdpZHRoXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHdpZHRoPSBcIndpZHRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB3aWxsLWNoYW5nZSBDU1MgcHJvcGVydHkgaGludHMgdG8gYnJvd3NlcnMgaG93IGFuIGVsZW1lbnQgaXMgZXhwZWN0ZWQgdG8gY2hhbmdlLiBCcm93c2VycyBtYXkgc2V0IHVwIG9wdGltaXphdGlvbnMgYmVmb3JlIGFuIGVsZW1lbnQgaXMgYWN0dWFsbHkgY2hhbmdlZC4gVGhlc2Uga2luZHMgb2Ygb3B0aW1pemF0aW9ucyBjYW4gaW5jcmVhc2UgdGhlIHJlc3BvbnNpdmVuZXNzIG9mIGEgcGFnZSBieSBkb2luZyBwb3RlbnRpYWxseSBleHBlbnNpdmUgd29yayBiZWZvcmUgdGhleSBhcmUgYWN0dWFsbHkgcmVxdWlyZWQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy93aWxsLWNoYW5nZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXdpbGwtY2hhbmdlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndpbGwtY2hhbmdlXCI9IFwid2lsbC1jaGFuZ2VcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHdvcmQtYnJlYWsgQ1NTIHByb3BlcnR5IHNldHMgd2hldGhlciBsaW5lIGJyZWFrcyBhcHBlYXIgd2hlcmV2ZXIgdGhlIHRleHQgd291bGQgb3RoZXJ3aXNlIG92ZXJmbG93IGl0cyBjb250ZW50IGJveC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3dvcmQtYnJlYWsgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz13b3JkLWJyZWFrXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndvcmQtYnJlYWtcIj0gXCJ3b3JkLWJyZWFrXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB3b3JkLXNwYWNpbmcgQ1NTIHByb3BlcnR5IHNldHMgdGhlIGxlbmd0aCBvZiBzcGFjZSBiZXR3ZWVuIHdvcmRzIGFuZCBiZXR3ZWVuIHRhZ3MuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy93b3JkLXNwYWNpbmcgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz13b3JkLXNwYWNpbmdcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid29yZC1zcGFjaW5nXCI9IFwid29yZC1zcGFjaW5nXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBvdmVyZmxvdy13cmFwIENTUyBwcm9wZXJ0eSBhcHBsaWVzIHRvIGlubGluZSBlbGVtZW50cywgc2V0dGluZyB3aGV0aGVyIHRoZSBicm93c2VyIHNob3VsZCBpbnNlcnQgbGluZSBicmVha3Mgd2l0aGluIGFuIG90aGVyd2lzZSB1bmJyZWFrYWJsZSBzdHJpbmcgdG8gcHJldmVudCB0ZXh0IGZyb20gb3ZlcmZsb3dpbmcgaXRzIGxpbmUgYm94LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvb3ZlcmZsb3ctd3JhcCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW92ZXJmbG93LXdyYXBcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid29yZC13cmFwXCI9IFwid29yZC13cmFwXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB3cml0aW5nLW1vZGUgQ1NTIHByb3BlcnR5IHNldHMgd2hldGhlciBsaW5lcyBvZiB0ZXh0IGFyZSBsYWlkIG91dCBob3Jpem9udGFsbHkgb3IgdmVydGljYWxseSwgYXMgd2VsbCBhcyB0aGUgZGlyZWN0aW9uIGluIHdoaWNoIGJsb2NrcyBwcm9ncmVzcy4gV2hlbiBzZXQgZm9yIGFuIGVudGlyZSBkb2N1bWVudCwgaXQgc2hvdWxkIGJlIHNldCBvbiB0aGUgcm9vdCBlbGVtZW50IChodG1sIGVsZW1lbnQgZm9yIEhUTUwgZG9jdW1lbnRzKS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3dyaXRpbmctbW9kZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXdyaXRpbmctbW9kZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3cml0aW5nLW1vZGVcIj0gXCJ3cml0aW5nLW1vZGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHggYXR0cmlidXRlIGRlZmluZXMgYSB4LWF4aXMgY29vcmRpbmF0ZSBpbiB0aGUgdXNlciBjb29yZGluYXRlIHN5c3RlbS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS94IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9eFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICB4PSBcInhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHkgYXR0cmlidXRlIGRlZmluZXMgYSB5LWF4aXMgY29vcmRpbmF0ZSBpbiB0aGUgdXNlciBjb29yZGluYXRlIHN5c3RlbS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS95IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9eVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICB5PSBcInlcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHotaW5kZXggQ1NTIHByb3BlcnR5IHNldHMgdGhlIHotb3JkZXIgb2YgYSBwb3NpdGlvbmVkIGVsZW1lbnQgYW5kIGl0cyBkZXNjZW5kYW50cyBvciBmbGV4IGl0ZW1zLiBPdmVybGFwcGluZyBlbGVtZW50cyB3aXRoIGEgbGFyZ2VyIHotaW5kZXggY292ZXIgdGhvc2Ugd2l0aCBhIHNtYWxsZXIgb25lLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvei1pbmRleCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXotaW5kZXhcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiei1pbmRleFwiPSBcInotaW5kZXhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG5vbi1zdGFuZGFyZCB6b29tIENTUyBwcm9wZXJ0eSBjYW4gYmUgdXNlZCB0byBjb250cm9sIHRoZSBtYWduaWZpY2F0aW9uIGxldmVsIG9mIGFuIGVsZW1lbnQuIHRyYW5zZm9ybTogc2NhbGUoKSBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkIG9mIHRoaXMgcHJvcGVydHksIGlmIHBvc3NpYmxlLiBIb3dldmVyLCB1bmxpa2UgQ1NTIFRyYW5zZm9ybXMsIHpvb20gYWZmZWN0cyB0aGUgbGF5b3V0IHNpemUgb2YgdGhlIGVsZW1lbnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy96b29tIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9em9vbVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICB6b29tPSBcInpvb21cIixcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQge2Nzc30iLCJpbXBvcnQgeyBPayB9IGZyb20gJy4uL09rJztcclxubGV0IG1fYXBwOiBPaztcclxuZXhwb3J0IGZ1bmN0aW9uIHNldEFwcChhcHA6IE9rKTogdm9pZCB7XHJcbiAgICBtX2FwcCA9IGFwcDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3VyckFwcCgpOiBPayB7XHJcbiAgICByZXR1cm4gbV9hcHA7XHJcbn0iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXNoZWV0LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVZhcmVsYStSb3VuZCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5IHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJWYXJlbGEgUm91bmRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9mcmFtZXdvcmsvc3R5bGVzaGVldC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxzQkFBQTtFQUNBLHVDQUFBO0FBQUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VmFyZWxhK1JvdW5kJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbmh0bWwsIGJvZHkge1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCcsIHNhbnMtc2VyaWY7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qKlxyXG4gKiBBdXRoZXVyIDogS2lsbGlhbiBLZXJsYXVcclxuICogQ29udGV4dGUgOiBvayBlc3QgdW4gZnJhbWV3b3JrLCBhaW5zaSBsYSBjbGFzc2UgT2sgY29udHJvbGUgdG91dGUgbCdhcHAgZXQgbGVzIHNvdXMtcGFydGllc1xyXG4gKiBPaytJbWcgc29udCBkZXMgc291cyBjbGFzc2VzIHF1aSBwZXJtZXR0ZW50IGRlIG1hbmlwdWxlciBsJ2FwcGxpY2F0aW9uIGZhY2lsZW1lbnRcclxuICogRGVzY3JpcHRpb24gOiBJY2kgbm91cyBhbGxvbnMgY3LDqWVyIHVuZSBpbWFnZSBldCBsJ2FmZmljaGVyIGF1IGJvdXQgZGUgNTAwbXMuXHJcbiAqIE1haXMgZW5jb3JlIG5vdXMgYWxsb25zIGF1c3NpIHRyYWR1aXJlIGxhIHBhZ2UsIG1haXMgYXVzc2kgYXUgYm91dCBkZSA1MDBtc1xyXG4gKi9cclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBPaywgT2tJbWFnZSwgT2tVcmwsIE9rV2FpdCwgT2tUcmFuc2xhdG9yRXZlbnRzLCBPa0V2ZW50cyB9IGZyb20gJy4uL2ZyYW1ld29yay9Payc7XHJcbmltcG9ydCB7IE9rRGlhbG9nLCBPa1RyLCBPa1dpZGdldCB9IGZyb20gXCIuLi9mcmFtZXdvcmsvQ29tcG9uZW50cy9vay1jb21wb25lbnRzXCI7XHJcbmNvbnN0IEFwcCA9IG5ldyBPayh7XHJcbiAgICB0aXRsZTogXCJNb24gQXBwXCJcclxufSk7XHJcbkFwcC5vbihPa0V2ZW50cy5yZWFkeSwgKCkgPT4ge1xyXG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib2std2lkZ2V0XCIsIE9rV2lkZ2V0KTtcclxuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9rLXRyXCIsIE9rVHIpOyAvLyBkw6ljbGFyYXRpb24gZHUgY29tcG9zYW50cyBwZXJzb25uYWxpc8OpIE9rXHJcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvay1kaWFsb2dcIiwgT2tEaWFsb2cpO1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlSW1nKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHlpZWxkIE9rV2FpdCg1MDApOyAvLyBhdHRyZW5kcmUgNTAwIG1zXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB5aWVsZCAobmV3IE9rSW1hZ2UoeyB1cmw6IG5ldyBPa1VybChcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sYXVrZXJraWxsaWFuL09rLUZyYW1ld29yay9tYWluL2ZyYW1ld29yay9hc3NldHMvaWNvbi5wbmdcIikgfSkpLmdldEltYWdlKCk7XHJcbiAgICAgICAgICAgIC8vIHLDqWN1cMOocmUgbGUgY29udGVudWUgZCd1bmUgaW1hZ2UgOlxyXG4gICAgICAgICAgICAvLyBEJ2Fib3JkIG9uIGTDqWNsYXJlIHVuZSBjbGFzc2UgaW1hZ2UgcXVpIGEgYmVzb2luIGQndW4gdXJsIHF1aSBkb2l0IMOqdHJlIHVuZSBpbnN0YW5jZSBkZSBPa1VybC5cclxuICAgICAgICAgICAgLy8gUHVpcyBvbiB1dGlsaXNlcyBsYSBtw6l0aG9kZSBnZXRJbWFnZSBxdWkgcmV0b3VybmUgdW5lIHByb21lc3NlIGR1IGNvbnRlbnVlIGVuIGJhc2U2NCBkZSBsJ2ltYWdlXHJcbiAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyAvLyBjcsOpZXIgdW5lIGltYWdlXHJcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgY29udGVudCk7IC8vIGRpdCBxdWUgbGEgc291cmNlIGVzdCBsZSBjb250ZW51ZSBlbiBiYXNlNjQgZGUgbCdpbWFnZVxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChpbWcpOyAvLyBpbXBvcnRlIGwnw6lsw6ltZW50IHN1ciBsZSBjb3JwcyBkZSBsYSBwYWdlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgbGFuZyA9IEFwcC5sYW5ndWFnZSgpLmdldExhbmd1YWdlKCk7IC8vIHLDqWN1cMOocmUgbGEgbGFuZ3VlIGRlIGwndXRpbGlzYXRldXIsIMOpdGFudCBkb25uw6kgcXVlIG5vdXMgYXZvbnMgcGFzIG1pcyB1bmUgcHJpb3JpdMOpXHJcbiAgICAgICAgICAgIC8vIGNlbGEgdmEgY2hvaXNpciBwYXIgZMOpZmF1dCBsZSBsYW5nYWdlIGR1IG5hdmlnYXRldXJcclxuICAgICAgICAgICAgeWllbGQgQXBwLnRyYW5zbGF0b3IoKS5zZXRVcmwobmV3IE9rVXJsKGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbGF1a2Vya2lsbGlhbi9Pay1GcmFtZXdvcmsvbWFpbi90ZXN0L0xhbmd1YWdlcy9UUl8ke2xhbmd9Lmpzb25gKSk7XHJcbiAgICAgICAgICAgIC8vIGRhbnMgbGUgdHJhZHVjdGV1ciBpbmNvcnBvcsOpIGRhbnMgbCdpbnN0YW5jZSBBcHAsIG9uIHByw6ljaXNlIGwndXJsIHF1J2lsIGRvaXQgYWRvcHTDqVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbGV0IGRpYWxvZyA9IG5ldyBPa0RpYWxvZyh7fSk7XHJcbiAgICBmdW5jdGlvbiBtYWluKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGRpYWxvZyk7XHJcbiAgICAgICAgLy9kaWFsb2cuc2V0U2l6ZShuZXcgT2tTaXplKHt3aWR0aDogMjAwLCBoZWlnaHQ6IDIwfSkpO1xyXG4gICAgICAgIC8vZGlhbG9nLnN0eWxlLnNldFByb3BlcnR5KGNzcy5wcm9wZXJ0eVtcImRpc3BsYXlcIl0sIFwiYmxvY2tcIik7XHJcbiAgICAgICAgY3JlYXRlSW1nKCk7IC8vIGFwcGVsZSBsYSBmb25jdGlvbiBwcsOpY8OpZGVtbWVudCBkw6lmaW5pcyAoIGNyw6llciBldCBpbXBvcnRlIHVuZSBpbWFnZSBzdXIgbGUgZG9tIClcclxuICAgICAgICB0cmFuc2xhdGUoKTsgLy8gYXBwZWxlIGxhIGZvbmN0aW9uIHByw6ljw6lkZW1tZW50IGTDqWZpbmlzICAoIHRyYWR1aXQgbGEgcGFnZSApXHJcbiAgICB9XHJcbiAgICBsZXQgaXNQcmVzc2VkID0gZmFsc2U7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdWNvdVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgLy8gc2kgbGUgYnV0dG9uIG4nYSBwYXMgw6l0w6kgcHLDqWPDqSBpbCB5IGEgbW9pbnMgZGUgMXMsIGF0dGVuZHMgdW5lIHNlY29uZGUgZXQgYWZmaWNoZSBzYWx1dCBsZXMgY29wYWluc1xyXG4gICAgICAgIGlmICghaXNQcmVzc2VkKSB7IC8vIHbDqXJpZmllIHF1ZSBsZSBidXR0b24gbidhIHBhcyDDqXTDqSBwcsOpY8OpIGRlcHVpcyAxc1xyXG4gICAgICAgICAgICBpc1ByZXNzZWQgPSB0cnVlOyAvLyBkaXQgcXVlIGxlIGJ1dHRvbiDDoCDDqXTDqSBwcsOpY8OpLCBpbCB5IGEgbW9pbnMgMXNcclxuICAgICAgICAgICAgeWllbGQgT2tXYWl0KDEwMDApOyAvLyBhdHRlbmRzIDFzIG91IDEwMDBtc1xyXG4gICAgICAgICAgICAvL2FsZXJ0KFwiU2FsdXQgbGVzIGNvcGFpbnNcIik7IC8vIGFmZmljaGUgXCJTYWx1dCBsZXMgY29wYWluc1wieFxyXG4gICAgICAgICAgICBkaWFsb2cuc2hvdygpO1xyXG4gICAgICAgICAgICBpc1ByZXNzZWQgPSBmYWxzZTsgLy8gZGl0IHF1ZSBsZSBidXR0b24gbidhIHBhcyDDqXTDqSBwcsOpY8OpIGRlcHVpcyAxc1xyXG4gICAgICAgIH1cclxuICAgIH0pKTtcclxuICAgIG1haW4oKTsgLy8gYXBwZWwgbGEgZm9uY3Rpb24gcHJpbmNpcGFsZVxyXG59KTtcclxuQXBwLnRyYW5zbGF0b3IoKS5vbihPa1RyYW5zbGF0b3JFdmVudHMudHJhbnNsYXRlZCwgKCkgPT4ge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcInRyYW5zbGF0ZWRcIilcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
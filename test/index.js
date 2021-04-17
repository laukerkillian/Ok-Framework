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

/***/ "./framework/Components/OkInput.ts":
/*!*****************************************!*\
  !*** ./framework/Components/OkInput.ts ***!
  \*****************************************/
/*! exports provided: OkInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkInput", function() { return OkInput; });
/* harmony import */ var _ok_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ok-widget */ "./framework/Components/ok-widget.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _editable;

class OkInput extends _ok_widget__WEBPACK_IMPORTED_MODULE_0__["OkWidget"] {
    constructor() {
        super();
        _editable.set(this, true);
        this.applyCustomAttrs();
    }
    applyCustomAttrs() {
        this.setAttribute("contentEditable", "");
        this.on("HTMLContentChange", ([{ type, attributeName }]) => {
            if (type === "attributes") {
                if (attributeName === "enable") {
                    __classPrivateFieldSet(this, _editable, this.getAttribute("enable") !== "false");
                }
                if (__classPrivateFieldGet(this, _editable)) {
                    if (this.getAttribute("contentEditable") !== "") {
                        this.setAttribute("contentEditable", "");
                    }
                }
                else {
                    this.removeAttribute("contentEditable");
                }
            }
        });
    }
}
_editable = new WeakMap();



/***/ }),

/***/ "./framework/Components/ok-button.ts":
/*!*******************************************!*\
  !*** ./framework/Components/ok-button.ts ***!
  \*******************************************/
/*! exports provided: OkButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkButton", function() { return OkButton; });
/* harmony import */ var _ok_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ok-widget */ "./framework/Components/ok-widget.ts");

class OkButton extends _ok_widget__WEBPACK_IMPORTED_MODULE_0__["OkWidget"] {
    constructor() {
        super();
    }
}



/***/ }),

/***/ "./framework/Components/ok-components.ts":
/*!***********************************************!*\
  !*** ./framework/Components/ok-components.ts ***!
  \***********************************************/
/*! exports provided: OkTr, OkWidget, css, OkDialog, OkWidgetEvents, OkButton, OkInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ok_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ok-dialog */ "./framework/Components/ok-dialog.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OkDialog", function() { return _ok_dialog__WEBPACK_IMPORTED_MODULE_0__["OkDialog"]; });

/* harmony import */ var _ok_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ok-widget */ "./framework/Components/ok-widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OkWidget", function() { return _ok_widget__WEBPACK_IMPORTED_MODULE_1__["OkWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OkWidgetEvents", function() { return _ok_widget__WEBPACK_IMPORTED_MODULE_1__["Events"]; });

/* harmony import */ var _ok_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ok-button */ "./framework/Components/ok-button.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OkButton", function() { return _ok_button__WEBPACK_IMPORTED_MODULE_2__["OkButton"]; });

/* harmony import */ var _ok_tr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ok-tr */ "./framework/Components/ok-tr.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OkTr", function() { return _ok_tr__WEBPACK_IMPORTED_MODULE_3__["OkTr"]; });

/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css */ "./framework/css.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _css__WEBPACK_IMPORTED_MODULE_4__["css"]; });

/* harmony import */ var _OkInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OkInput */ "./framework/Components/OkInput.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OkInput", function() { return _OkInput__WEBPACK_IMPORTED_MODULE_5__["OkInput"]; });










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
var _modal;




class OkDialog extends _ok_widget__WEBPACK_IMPORTED_MODULE_0__["OkWidget"] {
    constructor(options) {
        super();
        /**
         * OkDialog enable to create a small window inside the navigator's window
         * @param options
         */
        _modal.set(this, new _ok_widget__WEBPACK_IMPORTED_MODULE_0__["OkWidget"]());
        this.append(__classPrivateFieldGet(this, _modal));
        __classPrivateFieldGet(this, _modal).setHTML(`
            <h3 class="title">Payment successful</h3>
            <ok-button>Salut !</ok-button>
        `);
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
_modal = new WeakMap();



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
/* harmony import */ var _OkEventsEmitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OkEventsEmitter */ "./framework/OkEventsEmitter.ts");
/* harmony import */ var _OkMultipleExtends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../OkMultipleExtends */ "./framework/OkMultipleExtends.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _initialValue;




var Events;
(function (Events) {
    Events["HTMLContentChange"] = "HTMLContentChange";
    Events["click"] = "click";
})(Events || (Events = {}));
class OkWidget extends Object(_OkMultipleExtends__WEBPACK_IMPORTED_MODULE_3__["OkMultipleExtends"])(HTMLElement, _OkEventsEmitter__WEBPACK_IMPORTED_MODULE_2__["OkEventsEmitter"]) {
    constructor(options) {
        super(new Map([]));
        _initialValue.set(this, void 0);
        __classPrivateFieldSet(this, _initialValue, this.innerHTML);
        if (options) {
            this.setOptions(options);
        }
        this.applyCustomStyle();
        this.registerEvents();
        this.readAttribute();
    }
    /**
     * To set options
     * @param options
     */
    setOptions(options) {
        if (options.blockContentChange) {
            this.setAttribute("block-content-change", "true");
        }
        if (options.value) {
            __classPrivateFieldSet(this, _initialValue, options.value);
            this.setHTML(options.value);
        }
        if (options.template) {
            this.setAttribute("template", options.template);
        }
    }
    /**
     *
     */
    readAttribute() {
        if (this.getAttribute("block-content-change") === "true") {
            this.on(Events.HTMLContentChange, () => {
                if (this.innerHTML !== __classPrivateFieldGet(this, _initialValue)) {
                    this.innerHTML = __classPrivateFieldGet(this, _initialValue);
                }
            });
        }
    }
    connectedCallback() {
        this.calledByConnectedCallback();
    }
    /**
     * With this method, you can define events
     * @param event
     * @param listener
     */
    on(event, listener) {
        if (event in Events) {
            super.on(event, listener);
        }
        else {
            throw new Error("The event send doesn't exist on this object!");
        }
    }
    /**
     *
     * @private
     */
    registerEvents() {
        for (const event in Events) {
            this.on(event, () => { });
        }
        this.addEventListener("click", (e) => {
            this.emit(Events.click, e);
        });
        let observer = new MutationObserver(function (mutations) {
            this.emit(Events.HTMLContentChange, mutations);
        }.bind(this));
        observer.observe(this, { attributes: true, childList: true, characterData: true, subtree: true });
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
    /**
     * @hidden
     * @private
     */
    applyCustomStyle() {
    }
    /**
     * return all attributes
     */
    getAttributes() {
        return this.attributes;
    }
    /**
     * Return the current sizes of the object
     */
    size() {
        let sizeRect = this.getClientRects()[0];
        return new _OkSize__WEBPACK_IMPORTED_MODULE_0__["OkSize"]({
            width: sizeRect.width,
            height: sizeRect.height
        });
    }
    /**
     * Set a value on style property
     * @param property
     * @param value
     */
    setStyleProperty(property, value) {
        this.style.setProperty(property, value);
    }
    /**
     * Set the html content, look's like this.innerHTML = value;
     * @param htmlString
     */
    setHTML(htmlString) {
        this.innerHTML = htmlString;
    }
    /**
     * set visible text on the element, look's like this.innerText = value;
     * @param textString
     */
    setText(textString) {
        this.innerText = textString;
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
_initialValue = new WeakMap();



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
        });
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

/***/ "./framework/OkColors.ts":
/*!*******************************!*\
  !*** ./framework/OkColors.ts ***!
  \*******************************/
/*! exports provided: OkColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkColors", function() { return OkColors; });
var _currentColor;
class OkColors {
    constructor(color) {
        _currentColor.set(this, void 0);
    }
    transformColors(color) {
        if (color.startsWith("#")) {
            return OkColors.transformFromHexToRgba(color);
        }
        else if (color.startsWith("rgb")) {
        }
        else if (color.startsWith("rgba")) {
        }
    }
    static transformFromHexToRgba(hexColor) {
        let rgbaColor;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hexColor)) {
            rgbaColor = hexColor.substring(1).split('');
            if (rgbaColor.length == 3) {
                rgbaColor = [rgbaColor[0], rgbaColor[0], rgbaColor[1], rgbaColor[1], rgbaColor[2], rgbaColor[2]];
            }
            rgbaColor = '0x' + rgbaColor.join('');
            rgbaColor = Number.parseInt(rgbaColor);
            return 'rgba(' + [(rgbaColor >> 16) & 255, (rgbaColor >> 8) & 255, rgbaColor & 255].join(',') + ',1)';
        }
        throw new Error('Bad Hex');
    }
    toHex() {
    }
}
_currentColor = new WeakMap();



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
___CSS_LOADER_EXPORT___.push([module.i, "html, body {\n  background: white;\n  width: 100%;\n  height: 100%;\n}\n\n* {\n  box-sizing: border-box;\n  font-family: \"Varela Round\", sans-serif;\n  z-index: 0;\n  margin: 0px;\n  padding: 0px;\n}\n\nok-widget {\n  display: block;\n}\n\nok-button {\n  display: inline-block;\n  padding: 0.75rem 1.5rem;\n  background-color: rgba(0, 0, 0, 0.9);\n  color: white;\n  line-height: 1rem;\n  border-radius: 0.75rem;\n  border: 1px solid transparent;\n  box-shadow: white 0px 0px 0px 2px, white 0px 0px 0px 4px, white 0px 0px 0px 0px;\n  margin: 5px;\n  user-select: none;\n  cursor: pointer;\n  font-weight: bold;\n  transition: all 250ms ease-in-out;\n}\n\nok-button:hover {\n  background: rgba(0, 0, 0, 0.8);\n}\n\nok-button:active {\n  box-shadow: white 0px 0px 0px 2px, #111827 0px 0px 0px 4px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;\n  cursor: pointer;\n}\n\nok-input {\n  min-width: 200px;\n  min-height: 20px;\n  -webkit-writing-mode: horizontal-tb !important;\n  text-rendering: auto;\n  color: black;\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  display: inline-block;\n  text-align: start;\n  appearance: auto;\n  background-color: white;\n  -webkit-rtl-ordering: logical;\n  cursor: text;\n  margin: 0em;\n  font: 400 13.3333px Arial;\n  padding: 1px 2px;\n  border-width: 2px;\n  border-style: inset;\n  border-image: initial;\n  border-radius: 2px;\n}\n\nok-dialog {\n  width: 100%;\n  height: 0;\n  display: flex;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background: rgba(0, 0, 0, 0.3);\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  z-index: 1;\n  transition: all 250ms ease-in-out;\n}\n\nok-dialog ok-widget {\n  background: white;\n  width: 100%;\n  max-width: 500px;\n  height: 100%;\n  max-height: 300px;\n  padding: 1.5rem;\n  border-radius: 1.5rem;\n}", "",{"version":3,"sources":["webpack://./framework/stylesheet.scss"],"names":[],"mappings":"AAEA;EACE,iBAAA;EACA,WAAA;EACA,YAAA;AAAF;;AAGA;EACE,sBAAA;EACA,uCAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;AAAF;;AAGA;EACE,cAAA;AAAF;;AAGA;EACE,qBAAA;EACA,uBAAA;EACA,oCAAA;EACA,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,6BAAA;EACA,+EAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,iCAAA;AAAF;;AAGA;EACE,8BAAA;AAAF;;AAGA;EACE,4FAAA;EACA,eAAA;AAAF;;AAGA;EACE,gBAAA;EACA,gBAAA;EACA,8CAAA;EACA,oBAAA;EACA,YAAA;EACA,sBAAA;EACA,oBAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,iBAAA;EACA,gBAAA;EACA,uBAAA;EACA,6BAAA;EACA,YAAA;EACA,WAAA;EACA,yBAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;EACA,qBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,WAAA;EACA,SAAA;EACA,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,8BAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,UAAA;EACA,iCAAA;AAAF;;AAEA;EACE,iBAAA;EACA,WAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,qBAAA;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');\r\n\r\nhtml, body {\r\n  background: white;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  font-family: 'Varela Round', sans-serif;\r\n  z-index: 0;\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\nok-widget {\r\n  display: block;\r\n}\r\n\r\nok-button {\r\n  display: inline-block;\r\n  padding: .75rem 1.5rem;\r\n  background-color: rgba(0,0,0, 0.90);\r\n  color: white;\r\n  line-height: 1rem;\r\n  border-radius: .75rem;\r\n  border: 1px solid transparent;\r\n  box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px, rgb(255, 255, 255) 0px 0px 0px 4px, rgb(255, 255, 255) 0px 0px 0px 0px;\r\n  margin: 5px;\r\n  user-select: none;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n  transition: all 250ms ease-in-out;\r\n}\r\n\r\nok-button:hover {\r\n  background: rgba(0,0,0, 0.8);\r\n}\r\n\r\nok-button:active {\r\n  box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px, rgb(17, 24, 39) 0px 0px 0px 4px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;\r\n  cursor: pointer;\r\n}\r\n\r\nok-input {\r\n  min-width: 200px;\r\n  min-height: 20px;\r\n  -webkit-writing-mode: horizontal-tb !important;\r\n  text-rendering: auto;\r\n  color: black;\r\n  letter-spacing: normal;\r\n  word-spacing: normal;\r\n  text-transform: none;\r\n  text-indent: 0px;\r\n  text-shadow: none;\r\n  display: inline-block;\r\n  text-align: start;\r\n  appearance: auto;\r\n  background-color: white;\r\n  -webkit-rtl-ordering: logical;\r\n  cursor: text;\r\n  margin: 0em;\r\n  font: 400 13.3333px Arial;\r\n  padding: 1px 2px;\r\n  border-width: 2px;\r\n  border-style: inset;\r\n  border-image: initial;\r\n  border-radius: 2px;\r\n}\r\n\r\nok-dialog {\r\n  width: 100%;\r\n  height: 0;\r\n  display: flex;\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  background: rgba(0, 0, 0, 0.3);\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow: hidden;\r\n  z-index: 1;\r\n  transition: all 250ms ease-in-out;\r\n}\r\nok-dialog ok-widget {\r\n  background: white;\r\n  width: 100%;\r\n  max-width: 500px;\r\n  height: 100%;\r\n  max-height: 300px;\r\n  padding: 1.5rem;\r\n  border-radius: 1.5rem;\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _framework_OkColors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../framework/OkColors */ "./framework/OkColors.ts");
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



console.log(_framework_OkColors__WEBPACK_IMPORTED_MODULE_2__["OkColors"].transformFromHexToRgba("#3B82F6"));
const App = new _framework_Ok__WEBPACK_IMPORTED_MODULE_0__["Ok"]({});
App.on(_framework_Ok__WEBPACK_IMPORTED_MODULE_0__["OkEvents"].ready, () => __awaiter(void 0, void 0, void 0, function* () {
    customElements.define("ok-widget", _framework_Components_ok_components__WEBPACK_IMPORTED_MODULE_1__["OkWidget"]);
    customElements.define("ok-tr", _framework_Components_ok_components__WEBPACK_IMPORTED_MODULE_1__["OkTr"]); // déclaration du composants personnalisé Ok
    customElements.define("ok-dialog", _framework_Components_ok_components__WEBPACK_IMPORTED_MODULE_1__["OkDialog"]);
    customElements.define("ok-button", _framework_Components_ok_components__WEBPACK_IMPORTED_MODULE_1__["OkButton"]);
    customElements.define("ok-input", _framework_Components_ok_components__WEBPACK_IMPORTED_MODULE_1__["OkInput"]);
    App.translator().setUrl(new _framework_Ok__WEBPACK_IMPORTED_MODULE_0__["OkUrl"]("https://raw.githubusercontent.com/laukerkillian/Ok-Framework/main/test/Languages/TR_FR.json"));
    let button = document.getElementById("button");
    button.on("click", e => {
        let dialog = document.querySelector("ok-dialog");
        dialog.show();
    });
}));
App.translator().on(_framework_Ok__WEBPACK_IMPORTED_MODULE_0__["OkTranslatorEvents"].translated, () => {
    //console.log("translated")
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL0NvbXBvbmVudHMvT2tJbnB1dC50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvQ29tcG9uZW50cy9vay1idXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL0NvbXBvbmVudHMvb2stY29tcG9uZW50cy50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvQ29tcG9uZW50cy9vay1kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL0NvbXBvbmVudHMvb2stdHIudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL0NvbXBvbmVudHMvb2std2lkZ2V0LnRzIiwid2VicGFjazovLy8uL2ZyYW1ld29yay9Pay50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvT2tBcnJheS50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvT2tDb2xvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL09rRXZlbnRzRW1pdHRlci50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvT2tJbWFnZS50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvT2tMYW5ndWFnZS50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvT2tNdWx0aXBsZUV4dGVuZHMudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL09rU2l6ZS50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvT2tUcmFuc2xhdG9yLnRzIiwid2VicGFjazovLy8uL2ZyYW1ld29yay9Pa1VuaXQudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL09rVXJsLnRzIiwid2VicGFjazovLy8uL2ZyYW1ld29yay9Pa1dhaXQudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL2Nzcy50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvcHJpdmF0ZS9nbG9iYWwudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL3N0eWxlc2hlZXQuc2Nzcz9iMmM0Iiwid2VicGFjazovLy8uL2ZyYW1ld29yay9zdHlsZXNoZWV0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRnFDO0FBRXJDLE1BQU0sT0FBUSxTQUFRLG1EQUFRO0lBSTFCO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFI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Q0EsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDMEU7QUFDMEI7QUFDbkQ7QUFDakQsWUFBWSw0REFBUTtBQUNwQixnQkFBZ0IsZ0RBQUUsR0FBRztBQUNyQixPQUFPLHNEQUFRO0FBQ2YsdUNBQXVDLDRFQUFRO0FBQy9DLG1DQUFtQyx3RUFBSSxFQUFFO0FBQ3pDLHVDQUF1Qyw0RUFBUTtBQUMvQyx1Q0FBdUMsNEVBQVE7QUFDL0Msc0NBQXNDLDJFQUFPO0FBQzdDLGdDQUFnQyxtREFBSztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Qsb0JBQW9CLGdFQUFrQjtBQUN0QztBQUNBLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3Rlc3QvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQge09rV2lkZ2V0fSBmcm9tIFwiLi9vay13aWRnZXRcIjtcclxuXHJcbmNsYXNzIE9rSW5wdXQgZXh0ZW5kcyBPa1dpZGdldCB7XHJcblxyXG4gICAgI2VkaXRhYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlDdXN0b21BdHRycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBhcHBseUN1c3RvbUF0dHJzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiY29udGVudEVkaXRhYmxlXCIsIFwiXCIpXHJcbiAgICAgICAgdGhpcy5vbihcIkhUTUxDb250ZW50Q2hhbmdlXCIsIChbe3R5cGUsIGF0dHJpYnV0ZU5hbWV9XSkgPT4ge1xyXG4gICAgICAgICAgICBpZih0eXBlID09PSBcImF0dHJpYnV0ZXNcIikge1xyXG4gICAgICAgICAgICAgICAgaWYoYXR0cmlidXRlTmFtZSA9PT0gXCJlbmFibGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2VkaXRhYmxlID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJlbmFibGVcIikgIT09IFwiZmFsc2VcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuI2VkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5nZXRBdHRyaWJ1dGUoXCJjb250ZW50RWRpdGFibGVcIikgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJjb250ZW50RWRpdGFibGVcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShcImNvbnRlbnRFZGl0YWJsZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7T2tJbnB1dH0iLCJpbXBvcnQge09rV2lkZ2V0fSBmcm9tIFwiLi9vay13aWRnZXRcIjtcclxuaW1wb3J0IHtjc3N9IGZyb20gXCIuLi9jc3NcIjtcclxuaW1wb3J0IHByb3BlcnR5ID0gY3NzLnByb3BlcnR5O1xyXG5cclxuY2xhc3MgT2tCdXR0b24gZXh0ZW5kcyBPa1dpZGdldCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtPa0J1dHRvbn0iLCJpbXBvcnQge09rRGlhbG9nLCBPcHRpb25zIGFzIE9rRGlhbG9nT3B0aW9uc30gZnJvbSBcIi4vb2stZGlhbG9nXCI7XHJcbmltcG9ydCB7T2tXaWRnZXQsIEV2ZW50cyBhcyBPa1dpZGdldEV2ZW50c30gZnJvbSBcIi4vb2std2lkZ2V0XCI7XHJcbmltcG9ydCB7T2tCdXR0b259IGZyb20gXCIuL29rLWJ1dHRvblwiXHJcbmltcG9ydCB7T2tUcn0gZnJvbSBcIi4vb2stdHJcIjtcclxuaW1wb3J0IHtjc3N9IGZyb20gXCIuLi9jc3NcIjtcclxuaW1wb3J0IHtPa0lucHV0fSBmcm9tIFwiLi9Pa0lucHV0XCI7XHJcblxyXG5leHBvcnQge09rVHIsIE9rV2lkZ2V0LCBjc3MsIE9rRGlhbG9nLCBPa0RpYWxvZ09wdGlvbnMsIE9rV2lkZ2V0RXZlbnRzLCBPa0J1dHRvbiwgT2tJbnB1dH07IiwiaW1wb3J0IHtPa1dpZGdldH0gZnJvbSBcIi4vb2std2lkZ2V0XCI7XHJcbmltcG9ydCB7Y3NzfSBmcm9tIFwiLi4vY3NzXCI7XHJcbmltcG9ydCB7T2tTaXplfSBmcm9tIFwiLi4vT2tTaXplXCI7XHJcbmltcG9ydCB7T2tVbml0fSBmcm9tIFwiLi4vT2tVbml0XCI7XHJcblxyXG5pbnRlcmZhY2UgT3B0aW9ucyB7XHJcblxyXG59XHJcbmNsYXNzIE9rRGlhbG9nIGV4dGVuZHMgT2tXaWRnZXR7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPa0RpYWxvZyBlbmFibGUgdG8gY3JlYXRlIGEgc21hbGwgd2luZG93IGluc2lkZSB0aGUgbmF2aWdhdG9yJ3Mgd2luZG93XHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAgICovXHJcblxyXG4gICAgI21vZGFsOiBPa1dpZGdldCA9IG5ldyBPa1dpZGdldCgpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBPcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmFwcGVuZCh0aGlzLiNtb2RhbClcclxuXHJcbiAgICAgICAgdGhpcy4jbW9kYWwuc2V0SFRNTChgXHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cInRpdGxlXCI+UGF5bWVudCBzdWNjZXNzZnVsPC9oMz5cclxuICAgICAgICAgICAgPG9rLWJ1dHRvbj5TYWx1dCAhPC9vay1idXR0b24+XHJcbiAgICAgICAgYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNhbGxlZEJ5Q29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0U3R5bGVQcm9wZXJ0eShjc3MucHJvcGVydHlbXCJoZWlnaHRcIl0sIFwiMTAwJVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2l6ZSgpOiBPa1NpemUge1xyXG4gICAgICAgIGxldCBzaXplUmVjdCA9IHRoaXMuI21vZGFsLmdldENsaWVudFJlY3RzKClbMF07XHJcbiAgICAgICAgcmV0dXJuIG5ldyBPa1NpemUoe1xyXG4gICAgICAgICAgICB3aWR0aDogc2l6ZVJlY3Qud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogc2l6ZVJlY3QuaGVpZ2h0XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U2l6ZShzaXplOiBPa1NpemUgfCB7d2lkdGg/OiBudW1iZXIsIGhlaWdodD86IG51bWJlcn0pOiB2b2lkIHtcclxuICAgICAgICBsZXQgc2l6ZU9rVHlwZTogT2tTaXplO1xyXG4gICAgICAgIGlmKCEoc2l6ZSBpbnN0YW5jZW9mIE9rU2l6ZSkpIHtcclxuICAgICAgICAgICAgc2l6ZU9rVHlwZSA9IG5ldyBPa1NpemUoe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHNpemUuaGVpZ2h0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzaXplT2tUeXBlID0gc2l6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuI21vZGFsLnNldFN0eWxlUHJvcGVydHkoY3NzLnByb3BlcnR5W1wid2lkdGhcIl0sIE9rVW5pdChzaXplT2tUeXBlLndpZHRoKCksIFwicHhcIikpO1xyXG4gICAgICAgIHRoaXMuI21vZGFsLnNldFN0eWxlUHJvcGVydHkoY3NzLnByb3BlcnR5W1wiaGVpZ2h0XCJdLCBPa1VuaXQoc2l6ZU9rVHlwZS5oZWlnaHQoKSwgXCJweFwiKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7T2tEaWFsb2csIE9wdGlvbnN9IiwiaW1wb3J0IHtPa30gZnJvbSAnLi4vT2snO1xyXG5pbXBvcnQge2N1cnJBcHB9IGZyb20gJy4uL3ByaXZhdGUvZ2xvYmFsJztcclxuaW1wb3J0IHtPa1dpZGdldH0gZnJvbSBcIi4vb2std2lkZ2V0XCI7XHJcbmltcG9ydCB7RXZlbnRzIGFzIE9rVHJhbnNsYXRvckV2ZW50c30gZnJvbSBcIi4uL09rVHJhbnNsYXRvclwiO1xyXG5cclxuY2xhc3MgT2tUciBleHRlbmRzIE9rV2lkZ2V0IHtcclxuICAgIC8qKlxyXG4gICAgICogY3VycmVudCBhcHBcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgQXBwOiBPaztcclxuICAgIC8qKlxyXG4gICAgICogZGVmYXVsdCB0ZXh0IGRlZmluZWQgaW4gPG9rLXRyPlRFWFQ8L29rLXRyPlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBtX3RleHQ6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyYW5zbGF0ZSB0aGUgdGV4dCBkZWZpbmVkIGluIDxvay10cj5URVhUPC9vay10cj5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLkFwcCA9IGN1cnJBcHAoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIGxldCBlbCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5tX3RleHQgPSB0aGlzLmlubmVyVGV4dDtcclxuICAgICAgICB0aGlzLkFwcC50cmFuc2xhdG9yKCkub24oT2tUcmFuc2xhdG9yRXZlbnRzLnRyYW5zbGF0ZWQsICgpID0+IHtcclxuICAgICAgICAgICAgZWwuaW5uZXJUZXh0ID0gdGhpcy5BcHAudHJhbnNsYXRvcigpLnRyYW5zbGF0ZSh0aGlzLm1fdGV4dCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtPa1RyfSIsImltcG9ydCB7T2tTaXplfSBmcm9tIFwiLi4vT2tTaXplXCI7XHJcbmltcG9ydCB7T2tVbml0fSBmcm9tIFwiLi4vT2tVbml0XCI7XHJcbmltcG9ydCB7Y3NzfSBmcm9tIFwiLi4vY3NzXCI7XHJcbmltcG9ydCB7T2tFdmVudHNFbWl0dGVyfSBmcm9tIFwiLi4vT2tFdmVudHNFbWl0dGVyXCI7XHJcbmltcG9ydCBwcm9wZXJ0eSA9IGNzcy5wcm9wZXJ0eTtcclxuaW1wb3J0IHtPa1dhaXR9IGZyb20gXCIuLi9Pa1dhaXRcIjtcclxuaW1wb3J0IHtPa011bHRpcGxlRXh0ZW5kc30gZnJvbSBcIi4uL09rTXVsdGlwbGVFeHRlbmRzXCI7XHJcblxyXG5lbnVtIEV2ZW50cyB7XHJcbiAgICBIVE1MQ29udGVudENoYW5nZSA9IFwiSFRNTENvbnRlbnRDaGFuZ2VcIixcclxuICAgIGNsaWNrID0gXCJjbGlja1wiLFxyXG59XHJcblxyXG5pbnRlcmZhY2UgT2tXaWRnZXQgZXh0ZW5kcyBIVE1MRWxlbWVudCwgT2tFdmVudHNFbWl0dGVyIHtcclxuXHJcbn1cclxuXHJcbmludGVyZmFjZSBPcHRpb25zIHtcclxuICAgIGJsb2NrQ29udGVudENoYW5nZT86IGJvb2xlYW4sXHJcbiAgICB2YWx1ZT86IHN0cmluZztcclxuICAgIHRlbXBsYXRlPzogc3RyaW5nXHJcbn1cclxuXHJcbmNsYXNzIE9rV2lkZ2V0IGV4dGVuZHMgT2tNdWx0aXBsZUV4dGVuZHMoSFRNTEVsZW1lbnQsIE9rRXZlbnRzRW1pdHRlcikge1xyXG5cclxuICAgICNpbml0aWFsVmFsdWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zPzogT3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKG5ldyBNYXAoW1xyXG5cclxuICAgICAgICBdKSk7XHJcbiAgICAgICAgdGhpcy4jaW5pdGlhbFZhbHVlID0gdGhpcy5pbm5lckhUTUw7XHJcbiAgICAgICAgaWYob3B0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYXBwbHlDdXN0b21TdHlsZSgpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKVxyXG4gICAgICAgIHRoaXMucmVhZEF0dHJpYnV0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVG8gc2V0IG9wdGlvbnNcclxuICAgICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRPcHRpb25zKG9wdGlvbnM6IE9wdGlvbnMpOiB2b2lkIHtcclxuICAgICAgICBpZihvcHRpb25zLmJsb2NrQ29udGVudENoYW5nZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImJsb2NrLWNvbnRlbnQtY2hhbmdlXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYob3B0aW9ucy52YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLiNpbml0aWFsVmFsdWUgPSBvcHRpb25zLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldEhUTUwob3B0aW9ucy52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG9wdGlvbnMudGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJ0ZW1wbGF0ZVwiLCBvcHRpb25zLnRlbXBsYXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgcmVhZEF0dHJpYnV0ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLmdldEF0dHJpYnV0ZShcImJsb2NrLWNvbnRlbnQtY2hhbmdlXCIpID09PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICB0aGlzLm9uKEV2ZW50cy5IVE1MQ29udGVudENoYW5nZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbm5lckhUTUwgIT09IHRoaXMuI2luaXRpYWxWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5uZXJIVE1MID0gdGhpcy4jaW5pdGlhbFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsZWRCeUNvbm5lY3RlZENhbGxiYWNrKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdpdGggdGhpcyBtZXRob2QsIHlvdSBjYW4gZGVmaW5lIGV2ZW50c1xyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uKGV2ZW50OiBFdmVudHMgfCBzdHJpbmcsIGxpc3RlbmVyOiAoYXR0cj86YW55KSA9PiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZihldmVudCBpbiBFdmVudHMpIHtcclxuICAgICAgICAgICAgc3VwZXIub24oZXZlbnQsIGxpc3RlbmVyKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGV2ZW50IHNlbmQgZG9lc24ndCBleGlzdCBvbiB0aGlzIG9iamVjdCFcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHJlZ2lzdGVyRXZlbnRzKCk6IHZvaWQge1xyXG4gICAgICAgIGZvcihjb25zdCBldmVudCBpbiBFdmVudHMpIHtcclxuICAgICAgICAgICAgdGhpcy5vbihldmVudCwgKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoRXZlbnRzLmNsaWNrLCBlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKG11dGF0aW9uczogYW55KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChFdmVudHMuSFRNTENvbnRlbnRDaGFuZ2UsIG11dGF0aW9ucylcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUodGhpcywgeyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIGNoYXJhY3RlckRhdGE6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNhbGxlZEJ5Q29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgaWYodGhpcy5nZXRBdHRyaWJ1dGUoXCJ0ZW1wbGF0ZVwiKSkge1xyXG4gICAgICAgICAgICBsZXQgdGVtcGxhdGVJZCA9IHRoaXMuZ2V0QXR0cmlidXRlKFwidGVtcGxhdGVcIilcclxuICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGVtcGxhdGVJZCkgIT09IG51bGwgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGVtcGxhdGVJZCkgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGVtcGxhdGUgPSA8SFRNTFRlbXBsYXRlRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0ZW1wbGF0ZUlkKTtcclxuICAgICAgICAgICAgICAgIGxldCB0ZW1wbGF0ZUNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGxldCBzaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ2Nsb3NlZCd9KTtcclxuICAgICAgICAgICAgICAgIHNoYWRvdy5hcHBlbmQodGVtcGxhdGVDb250ZW50KVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXZSBjYW4ndCBmb3VuZCB0ZW1wbGF0ZSBvciBpc24ndCBhbiBpbnN0YW5jZSBvZiB0ZW1wbGF0ZSBlbGVtZW50XCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYXBwbHlDdXN0b21TdHlsZSgpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybiBhbGwgYXR0cmlidXRlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0QXR0cmlidXRlcygpOiBOYW1lZE5vZGVNYXAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgc2l6ZXMgb2YgdGhlIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2l6ZSgpOiBPa1NpemUge1xyXG4gICAgICAgIGxldCBzaXplUmVjdCA9IHRoaXMuZ2V0Q2xpZW50UmVjdHMoKVswXTtcclxuICAgICAgICByZXR1cm4gbmV3IE9rU2l6ZSh7XHJcbiAgICAgICAgICAgIHdpZHRoOiBzaXplUmVjdC53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBzaXplUmVjdC5oZWlnaHRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGEgdmFsdWUgb24gc3R5bGUgcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRTdHlsZVByb3BlcnR5KHByb3BlcnR5OiBjc3MucHJvcGVydHksIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIGh0bWwgY29udGVudCwgbG9vaydzIGxpa2UgdGhpcy5pbm5lckhUTUwgPSB2YWx1ZTtcclxuICAgICAqIEBwYXJhbSBodG1sU3RyaW5nXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRIVE1MKGh0bWxTdHJpbmc6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCB2aXNpYmxlIHRleHQgb24gdGhlIGVsZW1lbnQsIGxvb2sncyBsaWtlIHRoaXMuaW5uZXJUZXh0ID0gdmFsdWU7XHJcbiAgICAgKiBAcGFyYW0gdGV4dFN0cmluZ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0VGV4dCh0ZXh0U3RyaW5nOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlubmVyVGV4dCA9IHRleHRTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnaXZlIHN0eWxlIHRvIGVsZW1lbnRzXHJcbiAgICAgKiBleGFtcGxlIDpcclxuICAgICAqIGBgYHRzXHJcbiAgICAgKiBjdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvay13aWRnZXRcIiwgT2tXaWRnZXQpXHJcbiAgICAgKiBsZXQgbXlPYmogPSBuZXcgT2tXaWRnZXQoKVxyXG4gICAgICogbXlPYmouc2V0U3R5bGUobmV3IE1hcChbXHJcbiAgICAgKiAgICAgIFtjc3MucHJvcGVydHlbXCJ3aWR0aFwiXSwgXCIxMDAlXCJdLCAvLyB3aWR0aDogMTAwJVxyXG4gICAgICogICAgICBbY3NzLnByb3BlcnR5W1wiaGVpZ2h0XCJdLCBcIjUwMHB4XCJdLCAvLyBoZWlnaHQ6IDEwMCVcclxuICAgICAqICAgICAgW2Nzcy5wcm9wZXJ0eVtcImRpc3BsYXlcIl0sIFwiYmxvY2tcIl0sIC8vIGRpc3BsYXkgOiBibG9ja1xyXG4gICAgICogICAgICBbY3NzLnByb3BlcnR5W1wiYmFja2dyb3VuZFwiXSwgXCJibHVlXCJdXHJcbiAgICAgKiBdKSk7XHJcbiAgICAgKiBkb2N1bWVudC5ib2R5LmFwcGVuZChteU9iailcclxuICAgICAqIGBgYFxyXG4gICAgICogQHBhcmFtIHN0eWxlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0U3R5bGUoc3R5bGVzOiBNYXA8Y3NzLnByb3BlcnR5LCBzdHJpbmc+KTogdm9pZCB7XHJcbiAgICAgICAgZm9yKGNvbnN0IHN0eWxlIG9mIHN0eWxlcykge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBzdHlsZVswXTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZVsxXTtcclxuICAgICAgICAgICAgaWYoa2V5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiVW5kZWZpbmVkIGtleVwiKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlVuZGVmaW5lZCB2YWx1ZVwiKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFN0eWxlUHJvcGVydHkoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgc2V0U2l6ZShzaXplOiBPa1NpemUgfCB7d2lkdGg/OiBudW1iZXIsIGhlaWdodD86IG51bWJlcn0pOiB2b2lkIHtcclxuICAgICAgICBsZXQgc2l6ZU9rVHlwZTogT2tTaXplO1xyXG4gICAgICAgIGlmKCEoc2l6ZSBpbnN0YW5jZW9mIE9rU2l6ZSkpIHtcclxuICAgICAgICAgICAgc2l6ZU9rVHlwZSA9IG5ldyBPa1NpemUoe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHNpemUuaGVpZ2h0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzaXplT2tUeXBlID0gc2l6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSBPa1VuaXQoc2l6ZU9rVHlwZS53aWR0aCgpLCBcInB4XCIpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gIE9rVW5pdChzaXplT2tUeXBlLmhlaWdodCgpLCBcInB4XCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgT2tXaWRnZXQge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhhdCdzIGEgY29uc3RhbnQgd2hpY2ggaXMgbm90IGltcG9ydGFudCBmb3IgeW91LiBCdXQsIHdoaWNoIGlzIGltcG9ydGFudCBmb3IgdGhlIHN5c3RlbS5cclxuICAgICAqIFRoaXMgY29uc3RhbnQgc3ltYm9saXplIHRoZSBub2RlVHlwZS5UaGlzIHByb3BlcnRpZXMgYWx3YXlzIHJldHVybiAyLlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBBVFRSSUJVVEVfTk9ERTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGF0J3MgYSBjb25zdGFudCB3aGljaCBpcyBub3QgaW1wb3J0YW50IGZvciB5b3UuIEJ1dCwgd2hpY2ggaXMgaW1wb3J0YW50IGZvciB0aGUgc3lzdGVtLlxyXG4gICAgICogVGhpcyBjb25zdGFudCBzeW1ib2xpemUgdGhlIG5vZGVUeXBlLiBUaGlzIHByb3BlcnRpZXMgYWx3YXlzIHJldHVybiAyLlxyXG4gICAgICog4pqgIHRoaXMgcHJvcGVydHkgd2FzIGRlbGV0ZWQgaW4gaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnL1xyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBDREFUQV9TRUNUSU9OX05PREU6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogVGhhdCdzIGEgY29uc3RhbnQgd2hpY2ggaXMgbm90IGltcG9ydGFudCBmb3IgeW91LiBCdXQsIHdoaWNoIGlzIGltcG9ydGFudCBmb3IgdGhlIHN5c3RlbS5cclxuICAgICAqIFRoaXMgY29uc3RhbnQgc3ltYm9saXplIHRoZSBub2RlVHlwZS5cclxuICAgICAqIFRoaXMgcHJvcGVydGllcyBhbHdheXMgcmV0dXJuIDQuXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IENPTU1FTlRfTk9ERTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGF0J3MgYSBjb25zdGFudCB3aGljaCBpcyBub3QgaW1wb3J0YW50IGZvciB5b3UuIEJ1dCwgd2hpY2ggaXMgaW1wb3J0YW50IGZvciB0aGUgc3lzdGVtLlxyXG4gICAgICogVGhpcyBjb25zdGFudCBzeW1ib2xpemUgdGhlIG5vZGVUeXBlXHJcbiAgICAgKiBUaGlzIHByb3BlcnRpZXMgYWx3YXlzIHJldHVybiA4LlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIFRoYXQncyBhIGNvbnN0YW50IHdoaWNoIGlzIG5vdCBpbXBvcnRhbnQgZm9yIHlvdS4gQnV0LCB3aGljaCBpcyBpbXBvcnRhbnQgZm9yIHRoZSBzeXN0ZW0uXHJcbiAgICAgKiBUaGlzIGNvbnN0YW50IHN5bWJvbGl6ZSB0aGUgbm9kZVR5cGUuIFRoaXMgcHJvcGVydGllcyBhbHdheXMgcmV0dXJuXHJcbiAgICAgKiBUaGlzIHByb3BlcnRpZXMgd2lsbCBhbHdheXMgcmV0dXJuIDExLlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBET0NVTUVOVF9OT0RFOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIFRoYXQncyBhIGNvbnN0YW50LCB3aGljaCBpbmRpY2F0ZSB0aGUgcG9zaXRpb24gb2YgYW4gZWxlbWVudCBjb21wYXJlZCB0byBhbiBvdGhlciBlbGVtZW50LlxyXG4gICAgICogVGhpcyBwcm9wZXJ0aWVzIGFsd2F5cyByZXR1cm4gNC5cclxuICAgICAqIGBgYGh0bWxcclxuICAgICAqIDxkaXYgaWQ9XCJlbGVtZW50MVwiPlxyXG4gICAgICogICAgIDxkaXYgaWQ9XCJlbGVtZW50MlwiPlxyXG4gICAgICogICAgICA8L2Rpdj5cclxuICAgICAqIDwvZGl2PlxyXG4gICAgICogYGBgXHJcbiAgICAgKlxyXG4gICAgICogYGBgdHlwZXNjcmlwdFxyXG4gICAgICogbGV0IGVsZW1lbnQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbGVtZW50MVwiKTtcclxuICAgICAqIGxldCBlbGVtZW50MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxlbWVudDJcIik7XHJcbiAgICAgKlxyXG4gICAgICogZWxlbWVudDIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZWxlbWVudDEpOyAvLyByZXR1cm4gdGhlIG51bWJlciA0IHdoaWNoIGlzIHN5bWJvbGl6ZWQgYnkgRE9DVU1FTlRfUE9TSVRJT05fQ09OVEFJTkVEX0JZXHJcbiAgICAgKiBgYGBcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IERPQ1VNRU5UX1BPU0lUSU9OX0NPTlRBSU5FRF9CWTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGF0J3MgYSBjb25zdGFudCwgd2hpY2ggaW5kaWNhdGUgdGhlIHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgY29tcGFyZWQgdG8gYW4gb3RoZXIgZWxlbWVudC5cclxuICAgICAqIFRoaXMgcHJvcGVydGllcyBhbHdheXMgcmV0dXJuIDE2LlxyXG4gICAgICogYGBgaHRtbFxyXG4gICAgICogPGRpdiBpZD1cImVsZW1lbnQxXCI+XHJcbiAgICAgKiAgICAgPGRpdiBpZD1cImVsZW1lbnQyXCI+XHJcbiAgICAgKiAgICAgIDwvZGl2PlxyXG4gICAgICogPC9kaXY+XHJcbiAgICAgKiBgYGBcclxuICAgICAqXHJcbiAgICAgKiBgYGB0eXBlc2NyaXB0XHJcbiAgICAgKiBsZXQgZWxlbWVudDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsZW1lbnQxXCIpO1xyXG4gICAgICogbGV0IGVsZW1lbnQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbGVtZW50MlwiKTtcclxuICAgICAqXHJcbiAgICAgKiBlbGVtZW50MS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlbGVtZW50Mik7IC8vIHJldHVybiB0aGUgbnVtYmVyIDE2IHdoaWNoIGlzIHN5bWJvbGl6ZWQgYnkgRE9DVU1FTlRfUE9TSVRJT05fQ09OVEFJTkVEX0JZXHJcbiAgICAgKiBgYGBcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IERPQ1VNRU5UX1BPU0lUSU9OX0NPTlRBSU5TOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIFRoYXQncyBhIGNvbnN0YW50LCB3aGljaCBpbmRpY2F0ZSB0aGUgcG9zaXRpb24gb2YgYW4gZWxlbWVudCBjb21wYXJlZCB0byBhbiBvdGhlciBlbGVtZW50LlxyXG4gICAgICogVGhpcyBwcm9wZXJ0aWVzIGFsd2F5cyByZXR1cm4gMS4gSXQgc2VlbSB0aGVyZSBpcyBubyBsaWFpc29uIGJldHdlZW4gdGhlIHR3byBub2Rlc1xyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBET0NVTUVOVF9QT1NJVElPTl9ESVNDT05ORUNURUQ6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogVGhhdCdzIGEgY29uc3RhbnQsIHdoaWNoIGluZGljYXRlIHRoZSBwb3NpdGlvbiBvZiBhbiBlbGVtZW50IGNvbXBhcmVkIHRvIGFuIG90aGVyIGVsZW1lbnQuXHJcbiAgICAgKiBUaGlzIHByb3BlcnRpZXMgYWx3YXlzIHJldHVybiA0LlxyXG4gICAgICogYGBgaHRtbFxyXG4gICAgICogPGRpdiBpZD1cImVsZW1lbnQxXCI+PC9kaXY+XHJcbiAgICAgKiA8ZGl2IGlkPVwiZWxlbWVudDJcIj48L2Rpdj5cclxuICAgICAqIGBgYFxyXG4gICAgICogYGBgdHlwZXNjcmlwdFxyXG4gICAgICogbGV0IGVsZW1lbnQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbGVtZW50MVwiKTtcclxuICAgICAqIGxldCBlbGVtZW50MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxlbWVudDJcIik7XHJcbiAgICAgKlxyXG4gICAgICogZWxlbWVudDEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZWxlbWVudDIpOyAvLyByZXR1cm4gdGhlIG51bWJlciA0IHdoaWNoIGlzIHN5bWJvbGl6ZWQgYnkgRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HXHJcbiAgICAgKiBgYGBcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqID8/P1xyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBET0NVTUVOVF9QT1NJVElPTl9JTVBMRU1FTlRBVElPTl9TUEVDSUZJQzogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGF0J3MgYSBjb25zdGFudCwgd2hpY2ggaW5kaWNhdGUgdGhlIHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgY29tcGFyZWQgdG8gYW4gb3RoZXIgZWxlbWVudC5cclxuICAgICAqIFRoaXMgcHJvcGVydGllcyBhbHdheXMgcmV0dXJuIDMyLlxyXG4gICAgICogYGBgaHRtbFxyXG4gICAgICogPGRpdiBpZD1cImVsZW1lbnQxXCI+PC9kaXY+XHJcbiAgICAgKiA8ZGl2IGlkPVwiZWxlbWVudDJcIj48L2Rpdj5cclxuICAgICAqIGBgYFxyXG4gICAgICpcclxuICAgICAqIGBgYHR5cGVzY3JpcHRcclxuICAgICAqIGxldCBlbGVtZW50MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxlbWVudDFcIik7XHJcbiAgICAgKiBsZXQgZWxlbWVudDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsZW1lbnQyXCIpO1xyXG4gICAgICpcclxuICAgICAqIGVsZW1lbnQyLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGVsZW1lbnQxKTsgLy8gcmV0dXJuIHRoZSBudW1iZXIgMiB3aGljaCBpcyBzeW1ib2xpemVkIGJ5IERPQ1VNRU5UX1BPU0lUSU9OX1BSRUNFRElOR1xyXG4gICAgICogYGBgXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IERPQ1VNRU5UX1BPU0lUSU9OX1BSRUNFRElORzogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGF0J3MgYSBjb25zdGFudCB3aGljaCBpcyBub3QgaW1wb3J0YW50IGZvciB5b3UuIEJ1dCwgd2hpY2ggaXMgaW1wb3J0YW50IGZvciB0aGUgc3lzdGVtLlxyXG4gICAgICogVGhpcyBjb25zdGFudCBzeW1ib2xpemUgdGhlIG5vZGVUeXBlLiBUaGlzIHByb3BlcnRpZXMgYWx3YXlzIHJldHVybiAyLlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBET0NVTUVOVF9UWVBFX05PREU6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogVGhhdCdzIGEgY29uc3RhbnQgd2hpY2ggaXMgbm90IGltcG9ydGFudCBmb3IgeW91LiBCdXQsIHdoaWNoIGlzIGltcG9ydGFudCBmb3IgdGhlIHN5c3RlbS5cclxuICAgICAqIFRoaXMgY29uc3RhbnQgc3ltYm9saXplIHRoZSBub2RlVHlwZS4gVGhpcyBwcm9wZXJ0aWVzIGFsd2F5cyByZXR1cm4gMS5cclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgRUxFTUVOVF9OT0RFOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIFRoYXQncyBhIGNvbnN0YW50IHdoaWNoIGlzIG5vdCBpbXBvcnRhbnQgZm9yIHlvdS4gQnV0LCB3aGljaCBpcyBpbXBvcnRhbnQgZm9yIHRoZSBzeXN0ZW0uXHJcbiAgICAgKiBUaGlzIGNvbnN0YW50IHN5bWJvbGl6ZSB0aGUgbm9kZVR5cGUuIFRoaXMgcHJvcGVydGllcyBhbHdheXMgcmV0dXJuIDYuXHJcbiAgICAgKiDimqAgdGhpcyBwcm9wZXJ0eSB3YXMgZGVsZXRlZCBpbiBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IEVOVElUWV9OT0RFOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIFRoYXQncyBhIGNvbnN0YW50IHdoaWNoIGlzIG5vdCBpbXBvcnRhbnQgZm9yIHlvdS4gQnV0LCB3aGljaCBpcyBpbXBvcnRhbnQgZm9yIHRoZSBzeXN0ZW0uXHJcbiAgICAgKiBUaGlzIGNvbnN0YW50IHN5bWJvbGl6ZSB0aGUgbm9kZVR5cGUuIFRoaXMgcHJvcGVydGllcyBhbHdheXMgcmV0dXJuIDUuXHJcbiAgICAgKiDimqAgdGhpcyBwcm9wZXJ0eSB3YXMgZGVsZXRlZCBpbiBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IEVOVElUWV9SRUZFUkVOQ0VfTk9ERTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGF0J3MgYSBjb25zdGFudCB3aGljaCBpcyBub3QgaW1wb3J0YW50IGZvciB5b3UuIEJ1dCwgd2hpY2ggaXMgaW1wb3J0YW50IGZvciB0aGUgc3lzdGVtLlxyXG4gICAgICogVGhpcyBjb25zdGFudCBzeW1ib2xpemUgdGhlIG5vZGVUeXBlLiBUaGlzIHByb3BlcnRpZXMgYWx3YXlzIHJldHVybiAxMi5cclxuICAgICAqIOKaoCB0aGlzIHByb3BlcnR5IHdhcyBkZWxldGVkIGluIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy9cclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgTk9UQVRJT05fTk9ERTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGF0J3MgYSBjb25zdGFudCB3aGljaCBpcyBub3QgaW1wb3J0YW50IGZvciB5b3UuIEJ1dCwgd2hpY2ggaXMgaW1wb3J0YW50IGZvciB0aGUgc3lzdGVtLlxyXG4gICAgICogVGhpcyBjb25zdGFudCBzeW1ib2xpemUgdGhlIG5vZGVUeXBlLiBUaGlzIHByb3BlcnRpZXMgYWx3YXlzIHJldHVybiA3LlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBQUk9DRVNTSU5HX0lOU1RSVUNUSU9OX05PREU6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogVGhhdCdzIGEgY29uc3RhbnQgd2hpY2ggaXMgbm90IGltcG9ydGFudCBmb3IgeW91LiBCdXQsIHdoaWNoIGlzIGltcG9ydGFudCBmb3IgdGhlIHN5c3RlbS5cclxuICAgICAqIFRoaXMgY29uc3RhbnQgc3ltYm9saXplIHRoZSBub2RlVHlwZS4gVGhpcyBwcm9wZXJ0aWVzIGFsd2F5cyByZXR1cm4gMy5cclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgVEVYVF9OT0RFOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBIVE1MRWxlbWVudC5hY2Nlc3NLZXkgcHJvcGVydHkgc2V0cyB0aGUga2V5c3Ryb2tlIHdoaWNoIGEgdXNlciBjYW4gcHJlc3MgdG8ganVtcCB0byBhIGdpdmVuIGVsZW1lbnQuXHJcbiAgICAgKiDimqAgTm90IHJlYWxseSB1c2VkLCBtb3JlIGZlYXR1cmVzIGhlcmUgOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0dsb2JhbF9hdHRyaWJ1dGVzL2FjY2Vzc2tleVxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBhY2Nlc3NLZXk6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBhY2Nlc3NLZXlMYWJlbCBwcm9wZXJ0eSByZXR1cm5zIGEgU3RyaW5nIGNvbnRhaW5pbmcgdGhlIGVsZW1lbnQncyBicm93c2VyLWFzc2lnbmVkIGFjY2VzcyBrZXkgKGlmIGFueSk7IG90aGVyd2lzZSBpdCByZXR1cm5zIGFuIGVtcHR5IHN0cmluZy5cclxuICAgICAqIOKaoCBOb3QgcmVhbGx5IHVzZWQsIG1vcmUgZmVhdHVyZXMgaGVyZSA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MRWxlbWVudC9hY2Nlc3NLZXlMYWJlbFxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBhY2Nlc3NLZXlMYWJlbDogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog4pqgIEV4cGVyaW1lbnRhbC4gRXhwZWN0IGJlaGF2aW9yIHRvIGNoYW5nZSBpbiB0aGUgZnV0dXJlLiBtb3JlIGZlYXR1cmVzIGhlcmUgOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9hc3NpZ25lZFNsb3RcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgYXNzaWduZWRTbG90OiBIVE1MU2xvdEVsZW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb29rJ3MgbGlrZSBhbiBvYmplY3Qgd2hpY2ggcmV0dXJucyB0aGUgYXR0cmlidXRlcyBzZXQgb24gYW4gb2JqZWN0XHJcbiAgICAgKiBgYGBodG1sXHJcbiAgICAgKiA8YSBpZD1cImxpbmtcIiBocmVmPVwiaGV5LmNvbVwiIHRhcmdldD1cIl9ibGFua1wiIGN1c3RvbUF0dHJpYnV0ZT1cImhlbGxvXCIgdGl0bGU9XCJyZWRpcmVjdCB5b3UgdG8gaGV5LmNvbVwiPkhleTwvYT5cclxuICAgICAqIGBgYFxyXG4gICAgICpcclxuICAgICAqIGBgYHR5cGVzY3JpcHRcclxuICAgICAqIGxldCBsaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5rXCIpO1xyXG4gICAgICogY29uc29sZS5sb2cobGluay5hdHRyaWJ1dGVzKTsgLy8gcmV0dXJuIGFsbCBhdHRyaWJ1dGVzIHt9XHJcbiAgICAgKiBgYGBcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgYXR0cmlidXRlczogTmFtZWROb2RlTWFwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBhdXRvY2FwaXRhbGl6ZTogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBhdXRvZm9jdXM6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGJhc2VVUkk6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgY2hpbGRFbGVtZW50Q291bnQ6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgY2hpbGROb2RlczogTm9kZUxpc3RPZjxDaGlsZE5vZGU+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBjaGlsZHJlbjogSFRNTENvbGxlY3Rpb247XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGNsYXNzTGlzdDogRE9NVG9rZW5MaXN0O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBjbGFzc05hbWU6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgY2xpZW50SGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGNsaWVudExlZnQ6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgY2xpZW50VG9wOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGNsaWVudFdpZHRoOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIGNvbnRlbnRFZGl0YWJsZTogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBkYXRhc2V0OiBET01TdHJpbmdNYXA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIGRpcjogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBkcmFnZ2FibGU6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIGVudGVyS2V5SGludDogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBmaXJzdENoaWxkOiBDaGlsZE5vZGU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGZpcnN0RWxlbWVudENoaWxkOiBFbGVtZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBoaWRkZW46IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIGlkOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIGlubmVySFRNTDogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBpbm5lclRleHQ6IHN0cmluZ1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBpbnB1dE1vZGU6IHN0cmluZ1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBpc0Nvbm5lY3RlZDogYm9vbGVhblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBpc0NvbnRlbnRFZGl0YWJsZTogYm9vbGVhblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBsYW5nOiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgbGFzdENoaWxkOiBDaGlsZE5vZGVcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgbGFzdEVsZW1lbnRDaGlsZDogRWxlbWVudFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBsb2NhbE5hbWU6IHN0cmluZ1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBuYW1lc3BhY2VVUkk6IHN0cmluZ1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBuZXh0RWxlbWVudFNpYmxpbmc6IEVsZW1lbnRcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgbmV4dFNpYmxpbmc6IENoaWxkTm9kZVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBub2RlTmFtZTogc3RyaW5nXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IG5vZGVUeXBlOiBudW1iZXJcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgbm9kZVZhbHVlOiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgbm9uY2U6IHN0cmluZ1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBvZmZzZXRIZWlnaHQ6IG51bWJlclxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBvZmZzZXRMZWZ0OiBudW1iZXJcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgb2Zmc2V0UGFyZW50OiBFbGVtZW50XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IG9mZnNldFRvcDogbnVtYmVyXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IG9mZnNldFdpZHRoOiBudW1iZXJcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25hYm9ydDogKGV2OiBVSUV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25hbmltYXRpb25jYW5jZWw6IChldjogQW5pbWF0aW9uRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmFuaW1hdGlvbmVuZDogKGV2OiBBbmltYXRpb25FdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uYW5pbWF0aW9uaXRlcmF0aW9uOiAoZXY6IEFuaW1hdGlvbkV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25hbmltYXRpb25zdGFydDogKGV2OiBBbmltYXRpb25FdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uYXV4Y2xpY2s6IChldjogTW91c2VFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uYmx1cjogKGV2OiBGb2N1c0V2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25jYW5jZWw6IChldjogRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmNhbnBsYXk6IChldjogRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmNhbnBsYXl0aHJvdWdoOiAoZXY6IEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25jaGFuZ2U6IChldjogRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmNsaWNrOiAoZXY6IE1vdXNlRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmNsb3NlOiAoZXY6IEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25jb250ZXh0bWVudTogKGV2OiBNb3VzZUV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25jb3B5OiAoZXY6IENsaXBib2FyZEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25jdWVjaGFuZ2U6IChldjogRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmN1dDogKGV2OiBDbGlwYm9hcmRFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uZGJsY2xpY2s6IChldjogTW91c2VFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uZHJhZzogKGV2OiBEcmFnRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmRyYWdlbmQ6IChldjogRHJhZ0V2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25kcmFnZW50ZXI6IChldjogRHJhZ0V2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25kcmFnZXhpdDogKGV2OiBFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uZHJhZ2xlYXZlOiAoZXY6IERyYWdFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uZHJhZ292ZXI6IChldjogRHJhZ0V2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25kcmFnc3RhcnQ6IChldjogRHJhZ0V2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25kcm9wOiAoZXY6IERyYWdFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uZHVyYXRpb25jaGFuZ2U6IChldjogRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmVtcHRpZWQ6IChldjogRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmVuZGVkOiAoZXY6IEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25lcnJvcjogT25FcnJvckV2ZW50SGFuZGxlck5vbk51bGxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25mb2N1czogKGV2OiBGb2N1c0V2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25mdWxsc2NyZWVuY2hhbmdlOiAoZXY6IEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25mdWxsc2NyZWVuZXJyb3I6IChldjogRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmdvdHBvaW50ZXJjYXB0dXJlOiAoZXY6IFBvaW50ZXJFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uaW5wdXQ6IChldjogRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmludmFsaWQ6IChldjogRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmtleWRvd246IChldjogS2V5Ym9hcmRFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9ua2V5cHJlc3M6IChldjogS2V5Ym9hcmRFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9ua2V5dXA6IChldjogS2V5Ym9hcmRFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9ubG9hZDogKGV2OiBFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9ubG9hZGVkZGF0YTogKGV2OiBFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9ubG9hZGVkbWV0YWRhdGE6IChldjogRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbmxvYWRzdGFydDogKGV2OiBFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9ubG9zdHBvaW50ZXJjYXB0dXJlOiAoZXY6IFBvaW50ZXJFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9ubW91c2Vkb3duOiAoZXY6IE1vdXNlRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbm1vdXNlZW50ZXI6IChldjogTW91c2VFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9ubW91c2VsZWF2ZTogKGV2OiBNb3VzZUV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25tb3VzZW1vdmU6IChldjogTW91c2VFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9ubW91c2VvdXQ6IChldjogTW91c2VFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9ubW91c2VvdmVyOiAoZXY6IE1vdXNlRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbm1vdXNldXA6IChldjogTW91c2VFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9ucGFzdGU6IChldjogQ2xpcGJvYXJkRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbnBhdXNlOiAoZXY6IEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25wbGF5OiAoZXY6IEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25wbGF5aW5nOiAoZXY6IEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25wb2ludGVyY2FuY2VsOiAoZXY6IFBvaW50ZXJFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9ucG9pbnRlcmRvd246IChldjogUG9pbnRlckV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25wb2ludGVyZW50ZXI6IChldjogUG9pbnRlckV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25wb2ludGVybGVhdmU6IChldjogUG9pbnRlckV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25wb2ludGVybW92ZTogKGV2OiBQb2ludGVyRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbnBvaW50ZXJvdXQ6IChldjogUG9pbnRlckV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25wb2ludGVyb3ZlcjogKGV2OiBQb2ludGVyRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbnBvaW50ZXJ1cDogKGV2OiBQb2ludGVyRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbnByb2dyZXNzOiAoZXY6IFByb2dyZXNzRXZlbnQ8RXZlbnRUYXJnZXQ+KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25yYXRlY2hhbmdlOiAoZXY6IEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25yZXNldDogKGV2OiBFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9ucmVzaXplOiAoZXY6IFVJRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbnNjcm9sbDogKGV2OiBFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uc2VjdXJpdHlwb2xpY3l2aW9sYXRpb246IChldjogU2VjdXJpdHlQb2xpY3lWaW9sYXRpb25FdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uc2Vla2VkOiAoZXY6IEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25zZWVraW5nOiAoZXY6IEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb25zZWxlY3Q6IChldjogRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbnNlbGVjdGlvbmNoYW5nZTogKGV2OiBFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uc2VsZWN0c3RhcnQ6IChldjogRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbnN0YWxsZWQ6IChldjogRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbnN1Ym1pdDogKGV2OiBFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9uc3VzcGVuZDogKGV2OiBFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9udGltZXVwZGF0ZTogKGV2OiBFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9udG9nZ2xlOiAoZXY6IEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb250b3VjaGNhbmNlbDogKGV2OiBUb3VjaEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb250b3VjaGVuZDogKGV2OiBUb3VjaEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb250b3VjaG1vdmU6IChldjogVG91Y2hFdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9udG91Y2hzdGFydDogKGV2OiBUb3VjaEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb250cmFuc2l0aW9uY2FuY2VsOiAoZXY6IFRyYW5zaXRpb25FdmVudCkgPT4gYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9udHJhbnNpdGlvbmVuZDogKGV2OiBUcmFuc2l0aW9uRXZlbnQpID0+IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBvbnRyYW5zaXRpb25ydW46IChldjogVHJhbnNpdGlvbkV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb250cmFuc2l0aW9uc3RhcnQ6IChldjogVHJhbnNpdGlvbkV2ZW50KSA9PiBhbnk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIG9udm9sdW1lY2hhbmdlOiAoZXY6IEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb253YWl0aW5nOiAoZXY6IEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb253aGVlbDogKGV2OiBXaGVlbEV2ZW50KSA9PiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgb3V0ZXJIVE1MOiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgb3duZXJEb2N1bWVudDogRG9jdW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IHBhcmVudE5vZGU6IE5vZGUgJiBQYXJlbnROb2RlXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgcHJlZml4OiBzdHJpbmdcclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBwcmV2aW91c0VsZW1lbnRTaWJsaW5nOiBFbGVtZW50XHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgcHJldmlvdXNTaWJsaW5nOiBDaGlsZE5vZGVcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgc2Nyb2xsSGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHNjcm9sbExlZnQ6IG51bWJlclxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBzY3JvbGxUb3A6IG51bWJlclxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBzY3JvbGxXaWR0aDogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBzaGFkb3dSb290OiBTaGFkb3dSb290O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBzbG90OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHNwZWxsY2hlY2s6IGJvb2xlYW5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgc3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb247XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHRhYkluZGV4OiBudW1iZXJcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgdGFnTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICB0ZXh0Q29udGVudDogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICB0cmFuc2xhdGU6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZhdWx0IGNvbXBvbmVudHMgd2hpY2ggaXMgaW5oZXJpdGVkIGJ5IGFsbCBvZiBPSyBDb21wb25lbnRzXHJcbiAgICAgKi9cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAgICovXHJcbiAgICBhZGRFdmVudExpc3RlbmVyPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudEV2ZW50TWFwPih0eXBlOiBLLCBsaXN0ZW5lcjogKHRoaXM6IEhUTUxFbWJlZEVsZW1lbnQsIGV2OiBIVE1MRWxlbWVudEV2ZW50TWFwW0tdKSA9PiBhbnksIG9wdGlvbnM/OiBib29sZWFuIHwgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpOiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSB0eXBlXHJcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcclxuICAgICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICAgKi9cclxuICAgIGFkZEV2ZW50TGlzdGVuZXIodHlwZTogc3RyaW5nLCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCwgb3B0aW9ucz86IGJvb2xlYW4gfCBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyk6IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIG5vZGVzXHJcbiAgICAgKi9cclxuICAgIGFmdGVyKC4uLm5vZGVzOiAoc3RyaW5nIHwgTm9kZSlbXSk6IHZvaWRcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0ga2V5ZnJhbWVzXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAgICovXHJcbiAgICBhbmltYXRlKGtleWZyYW1lczogS2V5ZnJhbWVbXSB8IFByb3BlcnR5SW5kZXhlZEtleWZyYW1lcywgb3B0aW9ucz86IG51bWJlciB8IEtleWZyYW1lQW5pbWF0aW9uT3B0aW9ucyk6IEFuaW1hdGlvblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBub2Rlc1xyXG4gICAgICovXHJcbiAgICBhcHBlbmQoLi4ubm9kZXM6IChzdHJpbmcgfCBOb2RlKVtdKTogdm9pZFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBuZXdDaGlsZFxyXG4gICAgICovXHJcbiAgICBhcHBlbmRDaGlsZDxUPihuZXdDaGlsZDogVCk6IFRcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gaW5pdFxyXG4gICAgICovXHJcbiAgICBhdHRhY2hTaGFkb3coaW5pdDogU2hhZG93Um9vdEluaXQpOiBTaGFkb3dSb290XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIG5vZGVzXHJcbiAgICAgKi9cclxuICAgIGJlZm9yZSguLi5ub2RlczogKHN0cmluZyB8IE5vZGUpW10pOiB2b2lkXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBibHVyKCk6IHZvaWRcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIGNsaWNrKCk6IHZvaWRcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gZGVlcFxyXG4gICAgICovXHJcbiAgICBjbG9uZU5vZGUoZGVlcD86IGJvb2xlYW4pOiBOb2RlXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIHNlbGVjdG9yXHJcbiAgICAgKi9cclxuICAgIGNsb3Nlc3Q8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4oc2VsZWN0b3I6IEspOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbS10gfCBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBzZWxlY3RvclxyXG4gICAgICovXHJcbiAgICBjbG9zZXN0PEsgZXh0ZW5kcyBrZXlvZiBTVkdFbGVtZW50VGFnTmFtZU1hcD4oc2VsZWN0b3I6IEspOiBTVkdFbGVtZW50VGFnTmFtZU1hcFtLXSB8IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIHNlbGVjdG9yXHJcbiAgICAgKi9cclxuICAgIGNsb3Nlc3Q8RSBleHRlbmRzIEVsZW1lbnQgPSBFbGVtZW50PihzZWxlY3Rvcjogc3RyaW5nKTogRSB8IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIG90aGVyXHJcbiAgICAgKi9cclxuICAgIGNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG90aGVyOiBOb2RlKTogbnVtYmVyXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIG90aGVyXHJcbiAgICAgKi9cclxuICAgIGNvbnRhaW5zKG90aGVyOiBOb2RlKTogYm9vbGVhblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICovXHJcbiAgICBkaXNwYXRjaEV2ZW50KGV2ZW50OiBFdmVudCk6IGJvb2xlYW5cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAgICovXHJcbiAgICBmb2N1cyhvcHRpb25zPzogRm9jdXNPcHRpb25zKTogdm9pZFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgZ2V0QW5pbWF0aW9ucygpOiBBbmltYXRpb25bXVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBxdWFsaWZpZWROYW1lXHJcbiAgICAgKi9cclxuICAgIGdldEF0dHJpYnV0ZShxdWFsaWZpZWROYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gbmFtZXNwYWNlXHJcbiAgICAgKiBAcGFyYW0gbG9jYWxOYW1lXHJcbiAgICAgKi9cclxuICAgIGdldEF0dHJpYnV0ZU5TKG5hbWVzcGFjZTogc3RyaW5nLCBsb2NhbE5hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgZ2V0QXR0cmlidXRlTmFtZXMoKTogc3RyaW5nW11cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gcXVhbGlmaWVkTmFtZVxyXG4gICAgICovXHJcbiAgICBnZXRBdHRyaWJ1dGVOb2RlKHF1YWxpZmllZE5hbWU6IHN0cmluZyk6IEF0dHJcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gbmFtZXNwYWNlXHJcbiAgICAgKiBAcGFyYW0gbG9jYWxOYW1lXHJcbiAgICAgKi9cclxuICAgIGdldEF0dHJpYnV0ZU5vZGVOUyhuYW1lc3BhY2U6IHN0cmluZywgbG9jYWxOYW1lOiBzdHJpbmcpOiBBdHRyXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKTogRE9NUmVjdFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgZ2V0Q2xpZW50UmVjdHMoKTogRE9NUmVjdExpc3RcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gY2xhc3NOYW1lc1xyXG4gICAgICovXHJcbiAgICBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZXM6IHN0cmluZyk6IEhUTUxDb2xsZWN0aW9uT2Y8RWxlbWVudD5cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gY2xhc3NOYW1lc1xyXG4gICAgICovXHJcbiAgICBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZXM6IHN0cmluZyk6IEhUTUxDb2xsZWN0aW9uT2Y8RWxlbWVudD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIHF1YWxpZmllZE5hbWVcclxuICAgICAqL1xyXG4gICAgZ2V0RWxlbWVudHNCeVRhZ05hbWU8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4ocXVhbGlmaWVkTmFtZTogSyk6IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gcXVhbGlmaWVkTmFtZVxyXG4gICAgICovXHJcbiAgICBnZXRFbGVtZW50c0J5VGFnTmFtZTxLIGV4dGVuZHMga2V5b2YgU1ZHRWxlbWVudFRhZ05hbWVNYXA+KHF1YWxpZmllZE5hbWU6IEspOiBIVE1MQ29sbGVjdGlvbk9mPFNWR0VsZW1lbnRUYWdOYW1lTWFwW0tdPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gcXVhbGlmaWVkTmFtZVxyXG4gICAgICovXHJcbiAgICBnZXRFbGVtZW50c0J5VGFnTmFtZShxdWFsaWZpZWROYW1lOiBzdHJpbmcpOiBIVE1MQ29sbGVjdGlvbk9mPEVsZW1lbnQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBuYW1lc3BhY2VVUklcclxuICAgICAqIEBwYXJhbSBsb2NhbE5hbWVcclxuICAgICAqL1xyXG4gICAgZ2V0RWxlbWVudHNCeVRhZ05hbWVOUyhuYW1lc3BhY2VVUkk6IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiLCBsb2NhbE5hbWU6IHN0cmluZyk6IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEVsZW1lbnQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBuYW1lc3BhY2VVUklcclxuICAgICAqIEBwYXJhbSBsb2NhbE5hbWVcclxuICAgICAqL1xyXG4gICAgZ2V0RWxlbWVudHNCeVRhZ05hbWVOUyhuYW1lc3BhY2VVUkk6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgbG9jYWxOYW1lOiBzdHJpbmcpOiBIVE1MQ29sbGVjdGlvbk9mPFNWR0VsZW1lbnQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBuYW1lc3BhY2VVUklcclxuICAgICAqIEBwYXJhbSBsb2NhbE5hbWVcclxuICAgICAqL1xyXG4gICAgZ2V0RWxlbWVudHNCeVRhZ05hbWVOUyhuYW1lc3BhY2VVUkk6IHN0cmluZywgbG9jYWxOYW1lOiBzdHJpbmcpOiBIVE1MQ29sbGVjdGlvbk9mPEVsZW1lbnQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICAgKi9cclxuICAgIGdldFJvb3ROb2RlKG9wdGlvbnM/OiBHZXRSb290Tm9kZU9wdGlvbnMpOiBOb2RlXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIHF1YWxpZmllZE5hbWVcclxuICAgICAqL1xyXG4gICAgaGFzQXR0cmlidXRlKHF1YWxpZmllZE5hbWU6IHN0cmluZyk6IGJvb2xlYW5cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gbmFtZXNwYWNlXHJcbiAgICAgKiBAcGFyYW0gbG9jYWxOYW1lXHJcbiAgICAgKi9cclxuICAgIGhhc0F0dHJpYnV0ZU5TKG5hbWVzcGFjZTogc3RyaW5nLCBsb2NhbE5hbWU6IHN0cmluZyk6IGJvb2xlYW5cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIGhhc0F0dHJpYnV0ZXMoKTogYm9vbGVhblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgaGFzQ2hpbGROb2RlcygpOiBib29sZWFuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIHBvaW50ZXJJZFxyXG4gICAgICovXHJcbiAgICBoYXNQb2ludGVyQ2FwdHVyZShwb2ludGVySWQ6IG51bWJlcik6IGJvb2xlYW5cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBpbnNlcnRlZEVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgaW5zZXJ0QWRqYWNlbnRFbGVtZW50KHBvc2l0aW9uOiBJbnNlcnRQb3NpdGlvbiwgaW5zZXJ0ZWRFbGVtZW50OiBFbGVtZW50KTogRWxlbWVudFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSB3aGVyZVxyXG4gICAgICogQHBhcmFtIGh0bWxcclxuICAgICAqL1xyXG4gICAgaW5zZXJ0QWRqYWNlbnRIVE1MKHdoZXJlOiBJbnNlcnRQb3NpdGlvbiwgaHRtbDogc3RyaW5nKTogdm9pZFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSB3aGVyZVxyXG4gICAgICogQHBhcmFtIHRleHRcclxuICAgICAqL1xyXG4gICAgaW5zZXJ0QWRqYWNlbnRUZXh0KHdoZXJlOiBJbnNlcnRQb3NpdGlvbiwgdGV4dDogc3RyaW5nKTogdm9pZFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBuZXdDaGlsZFxyXG4gICAgICogQHBhcmFtIHJlZkNoaWxkXHJcbiAgICAgKi9cclxuICAgIGluc2VydEJlZm9yZTxUPihuZXdDaGlsZDogVCwgcmVmQ2hpbGQ6IE5vZGUpOiBUXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIG5hbWVzcGFjZVxyXG4gICAgICovXHJcbiAgICBpc0RlZmF1bHROYW1lc3BhY2UobmFtZXNwYWNlOiBzdHJpbmcpOiBib29sZWFuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIG90aGVyTm9kZVxyXG4gICAgICovXHJcbiAgICBpc0VxdWFsTm9kZShvdGhlck5vZGU6IE5vZGUpOiBib29sZWFuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIG90aGVyTm9kZVxyXG4gICAgICovXHJcbiAgICBpc1NhbWVOb2RlKG90aGVyTm9kZTogTm9kZSk6IGJvb2xlYW5cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gcHJlZml4XHJcbiAgICAgKi9cclxuICAgIGxvb2t1cE5hbWVzcGFjZVVSSShwcmVmaXg6IHN0cmluZyk6IHN0cmluZ1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBuYW1lc3BhY2VcclxuICAgICAqL1xyXG4gICAgbG9va3VwUHJlZml4KG5hbWVzcGFjZTogc3RyaW5nKTogc3RyaW5nXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIHNlbGVjdG9yc1xyXG4gICAgICovXHJcbiAgICBtYXRjaGVzKHNlbGVjdG9yczogc3RyaW5nKTogYm9vbGVhblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgbXNHZXRSZWdpb25Db250ZW50KCk6IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgbm9ybWFsaXplKCk6IHZvaWRcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gbm9kZXNcclxuICAgICAqL1xyXG4gICAgcHJlcGVuZCguLi5ub2RlczogKHN0cmluZyB8IE5vZGUpW10pOiB2b2lkXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIHNlbGVjdG9yc1xyXG4gICAgICovXHJcbiAgICBxdWVyeVNlbGVjdG9yPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KHNlbGVjdG9yczogSyk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXSB8IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIHNlbGVjdG9yc1xyXG4gICAgICovXHJcbiAgICBxdWVyeVNlbGVjdG9yPEsgZXh0ZW5kcyBrZXlvZiBTVkdFbGVtZW50VGFnTmFtZU1hcD4oc2VsZWN0b3JzOiBLKTogU1ZHRWxlbWVudFRhZ05hbWVNYXBbS10gfCBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBzZWxlY3RvcnNcclxuICAgICAqL1xyXG4gICAgcXVlcnlTZWxlY3RvcjxFIGV4dGVuZHMgRWxlbWVudCA9IEVsZW1lbnQ+KHNlbGVjdG9yczogc3RyaW5nKTogRSB8IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIHNlbGVjdG9yc1xyXG4gICAgICovXHJcbiAgICBxdWVyeVNlbGVjdG9yQWxsPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KHNlbGVjdG9yczogSyk6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3JzXHJcbiAgICAgKi9cclxuICAgIHF1ZXJ5U2VsZWN0b3JBbGw8SyBleHRlbmRzIGtleW9mIFNWR0VsZW1lbnRUYWdOYW1lTWFwPihzZWxlY3RvcnM6IEspOiBOb2RlTGlzdE9mPFNWR0VsZW1lbnRUYWdOYW1lTWFwW0tdPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3JzXHJcbiAgICAgKi9cclxuICAgIHF1ZXJ5U2VsZWN0b3JBbGw8RSBleHRlbmRzIEVsZW1lbnQgPSBFbGVtZW50PihzZWxlY3RvcnM6IHN0cmluZyk6IE5vZGVMaXN0T2Y8RT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIHBvaW50ZXJJZFxyXG4gICAgICovXHJcbiAgICByZWxlYXNlUG9pbnRlckNhcHR1cmUocG9pbnRlcklkOiBudW1iZXIpOiB2b2lkXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZW1vdmUoKTogdm9pZFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBxdWFsaWZpZWROYW1lXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZUF0dHJpYnV0ZShxdWFsaWZpZWROYW1lOiBzdHJpbmcpOiB2b2lkXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIG5hbWVzcGFjZVxyXG4gICAgICogQHBhcmFtIGxvY2FsTmFtZVxyXG4gICAgICovXHJcbiAgICByZW1vdmVBdHRyaWJ1dGVOUyhuYW1lc3BhY2U6IHN0cmluZywgbG9jYWxOYW1lOiBzdHJpbmcpOiB2b2lkXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIGF0dHJcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlQXR0cmlidXRlTm9kZShhdHRyOiBBdHRyKTogQXR0clxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBvbGRDaGlsZFxyXG4gICAgICovXHJcbiAgICByZW1vdmVDaGlsZDxUPihvbGRDaGlsZDogVCk6IFRcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAgICovXHJcbiAgICByZW1vdmVFdmVudExpc3RlbmVyPEsgZXh0ZW5kcyBrZXlvZiBQYXltZW50UmVxdWVzdEV2ZW50TWFwPih0eXBlOiBLLCBsaXN0ZW5lcjogKHRoaXM6IFBheW1lbnRSZXF1ZXN0LCBldjogUGF5bWVudFJlcXVlc3RFdmVudE1hcFtLXSkgPT4gYW55LCBvcHRpb25zPzogYm9vbGVhbiB8IEV2ZW50TGlzdGVuZXJPcHRpb25zKTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAgICovXHJcbiAgICByZW1vdmVFdmVudExpc3RlbmVyKHR5cGU6IHN0cmluZywgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsIG9wdGlvbnM/OiBib29sZWFuIHwgRXZlbnRMaXN0ZW5lck9wdGlvbnMpOiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBuZXdDaGlsZFxyXG4gICAgICogQHBhcmFtIG9sZENoaWxkXHJcbiAgICAgKi9cclxuICAgIHJlcGxhY2VDaGlsZDxUPihuZXdDaGlsZDogTm9kZSwgb2xkQ2hpbGQ6IFQpOiBUXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIG5vZGVzXHJcbiAgICAgKi9cclxuICAgIHJlcGxhY2VXaXRoKC4uLm5vZGVzOiAoc3RyaW5nIHwgTm9kZSlbXSk6IHZvaWRcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAgICovXHJcbiAgICByZXF1ZXN0RnVsbHNjcmVlbihvcHRpb25zPzogRnVsbHNjcmVlbk9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICByZXF1ZXN0UG9pbnRlckxvY2soKTogdm9pZFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICAgKi9cclxuICAgIHNjcm9sbChvcHRpb25zPzogU2Nyb2xsVG9PcHRpb25zKTogdm9pZFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSB4XHJcbiAgICAgKiBAcGFyYW0geVxyXG4gICAgICovXHJcbiAgICBzY3JvbGwoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgICAqL1xyXG4gICAgc2Nyb2xsQnkob3B0aW9ucz86IFNjcm9sbFRvT3B0aW9ucyk6IHZvaWRcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0geFxyXG4gICAgICogQHBhcmFtIHlcclxuICAgICAqL1xyXG4gICAgc2Nyb2xsQnkoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIGFyZ1xyXG4gICAgICovXHJcbiAgICBzY3JvbGxJbnRvVmlldyhhcmc/OiBib29sZWFuIHwgU2Nyb2xsSW50b1ZpZXdPcHRpb25zKTogdm9pZFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICAgKi9cclxuICAgIHNjcm9sbFRvKG9wdGlvbnM/OiBTY3JvbGxUb09wdGlvbnMpOiB2b2lkXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIHhcclxuICAgICAqIEBwYXJhbSB5XHJcbiAgICAgKi9cclxuICAgIHNjcm9sbFRvKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBxdWFsaWZpZWROYW1lXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqL1xyXG4gICAgc2V0QXR0cmlidXRlKHF1YWxpZmllZE5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWRcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gYXR0clxyXG4gICAgICovXHJcbiAgICBzZXRBdHRyaWJ1dGVOb2RlKGF0dHI6IEF0dHIpOiBBdHRyXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gYXR0clxyXG4gICAgICovXHJcbiAgICBzZXRBdHRyaWJ1dGVOb2RlTlMoYXR0cjogQXR0cik6IEF0dHJcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIG5hbWVzcGFjZVxyXG4gICAgICogQHBhcmFtIHF1YWxpZmllZE5hbWVcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBzZXRBdHRyaWJ1dGVOUyhuYW1lc3BhY2U6IHN0cmluZywgcXVhbGlmaWVkTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBwb2ludGVySWRcclxuICAgICAqL1xyXG4gICAgc2V0UG9pbnRlckNhcHR1cmUocG9pbnRlcklkOiBudW1iZXIpOiB2b2lkXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIHF1YWxpZmllZE5hbWVcclxuICAgICAqIEBwYXJhbSBmb3JjZVxyXG4gICAgICovXHJcbiAgICB0b2dnbGVBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZTogc3RyaW5nLCBmb3JjZT86IGJvb2xlYW4pOiBib29sZWFuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQHBhcmFtIHNlbGVjdG9yc1xyXG4gICAgICovXHJcbiAgICB3ZWJraXRNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3JzOiBzdHJpbmcpOiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCB7T2tXaWRnZXQsIEV2ZW50c30iLCJpbXBvcnQge09rSW1hZ2UsIE9wdGlvbnMgYXMgT2tJbWFnZU9wdGlvbnN9IGZyb20gJy4vT2tJbWFnZSdcclxuaW1wb3J0IHtFdmVudHMgYXMgT2tUcmFuc2xhdG9yRXZlbnRzLCBPa1RyYW5zbGF0b3J9IGZyb20gXCIuL09rVHJhbnNsYXRvclwiO1xyXG5pbXBvcnQge09rTGFuZ3VhZ2UsIE9wdGlvbnMgYXMgT2tMYW5ndWFnZU9wdGlvbnN9IGZyb20gXCIuL09rTGFuZ3VhZ2VcIjtcclxuaW1wb3J0IHtzZXRBcHAsIGN1cnJBcHB9IGZyb20gXCIuL3ByaXZhdGUvZ2xvYmFsXCI7XHJcbmltcG9ydCB7T2tVcmx9IGZyb20gXCIuL09rVXJsXCI7XHJcbmltcG9ydCB7T2tFdmVudHNFbWl0dGVyfSBmcm9tIFwiLi9Pa0V2ZW50c0VtaXR0ZXJcIjtcclxuaW1wb3J0IHtPa1dhaXR9IGZyb20gXCIuLi9mcmFtZXdvcmsvT2tXYWl0XCJcclxuaW1wb3J0IHtPa1VuaXR9IGZyb20gXCIuL09rVW5pdFwiO1xyXG5pbXBvcnQge09rU2l6ZSwgT3B0aW9ucyBhcyBPa1NpemVPcHRpb25zfSBmcm9tIFwiLi9Pa1NpemVcIjtcclxuaW1wb3J0IHtPa0FycmF5fSBmcm9tIFwiLi4vZnJhbWV3b3JrL09rQXJyYXlcIjtcclxuaW1wb3J0IHtPa1dpZGdldH0gZnJvbSBcIi4vQ29tcG9uZW50cy9vay13aWRnZXRcIjtcclxuaW1wb3J0IHtPa1RyfSBmcm9tIFwiLi9Db21wb25lbnRzL29rLXRyXCI7XHJcbmltcG9ydCB7T2tEaWFsb2d9IGZyb20gXCIuL0NvbXBvbmVudHMvb2stZGlhbG9nXCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzaGVldC5zY3NzXCJcclxuXHJcbndpbmRvdy5BcnJheS5wcm90b3R5cGUudG9Pa0FycmF5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gbmV3IE9rQXJyYXkoLi4udGhpcylcclxufVxyXG5cclxuaW50ZXJmYWNlIE9wdGlvbnMge1xyXG4gICAgdXJsVHJhbnNsYXRvcj86IE9rVXJsXHJcbn1cclxuXHJcbmVudW0gRXZlbnRzIHtcclxuICAgIHJlYWR5PSBcInJlYWR5XCJcclxufVxyXG5cclxuY2xhc3MgT2sgZXh0ZW5kcyBPa0V2ZW50c0VtaXR0ZXIge1xyXG4gICAgcHJpdmF0ZSBtX3RyYW5zbGF0b3I6IE9rVHJhbnNsYXRvciA9IG5ldyBPa1RyYW5zbGF0b3IoKTtcclxuICAgIHByaXZhdGUgbV9sYW5ndWFnZTogT2tMYW5ndWFnZSA9IG5ldyBPa0xhbmd1YWdlKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucz86IE9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgc2V0QXBwKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0Q29uZmlndXJhdGlvbihvcHRpb25zKS50aGVuKCgpID0+IHt9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0KClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdCgpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoRXZlbnRzLnJlYWR5LCB7fSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzZXRDb25maWd1cmF0aW9uKG9wdGlvbnM6IE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZihvcHRpb25zLnVybFRyYW5zbGF0b3IpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5tX3RyYW5zbGF0b3Iuc2V0VXJsKG9wdGlvbnMudXJsVHJhbnNsYXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cmFuc2xhdG9yKCk6IE9rVHJhbnNsYXRvciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV90cmFuc2xhdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsYW5ndWFnZSgpOiBPa0xhbmd1YWdlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2xhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJld3JpdGVcclxuXHJcbiAgICBwdWJsaWMgb24oZXZlbnQ6IEV2ZW50cyB8IHN0cmluZywgbGlzdGVuZXI6IChhdHRyPzphbnkpID0+IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmKGV2ZW50IGluIEV2ZW50cykge1xyXG4gICAgICAgICAgICBzdXBlci5vbihldmVudCwgbGlzdGVuZXIpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZXZlbnQgc2VuZCBkb2Vzbid0IGV4aXN0IG9uIHRoaXMgb2JqZWN0IVwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyRXZlbnRzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub24oRXZlbnRzLnJlYWR5LCAoKSA9PiB7fSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtPaywgT3B0aW9ucyBhcyBPa09wdGlvbnMsIE9rSW1hZ2UsIE9rSW1hZ2VPcHRpb25zLCBPa1VybCwgY3VyckFwcCwgT2tFdmVudHNFbWl0dGVyLCBPa1dhaXQsIE9rVW5pdCwgT2tTaXplLCBPa1NpemVPcHRpb25zLCBPa0FycmF5LCBPa1RyYW5zbGF0b3JFdmVudHMsIEV2ZW50cyBhcyBPa0V2ZW50c307IiwiaW1wb3J0IHtPa30gZnJvbSBcIi4vT2tcIjtcclxuXHJcbmNsYXNzIE9rQXJyYXkgZXh0ZW5kcyBBcnJheTxhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgc3VwZXIoYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluQXJyYXkoaXRlbTogYW55KTpib29sZWFuIHtcclxuICAgICAgICBpZih0aGlzLmluZGV4T2YoaXRlbSkgPiAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbkFycmF5LnByb3RvdHlwZS50b09rQXJyYXkgPSBmdW5jdGlvbigpOiBPa0FycmF5IHtcclxuICAgIHJldHVybiBuZXcgT2tBcnJheSguLi50aGlzKTtcclxufVxyXG5cclxuZXhwb3J0IHtPa0FycmF5fSIsImNsYXNzIE9rQ29sb3JzIHtcclxuICAgICNjdXJyZW50Q29sb3I6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyYW5zZm9ybUNvbG9ycyhjb2xvcjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYoY29sb3Iuc3RhcnRzV2l0aChcIiNcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9rQ29sb3JzLnRyYW5zZm9ybUZyb21IZXhUb1JnYmEoY29sb3IpO1xyXG4gICAgICAgIH1lbHNlIGlmKGNvbG9yLnN0YXJ0c1dpdGgoXCJyZ2JcIikpIHtcclxuXHJcbiAgICAgICAgfWVsc2UgaWYoY29sb3Iuc3RhcnRzV2l0aChcInJnYmFcIikpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdHJhbnNmb3JtRnJvbUhleFRvUmdiYShoZXhDb2xvcjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmdiYUNvbG9yO1xyXG4gICAgICAgIGlmKC9eIyhbQS1GYS1mMC05XXszfSl7MSwyfSQvLnRlc3QoaGV4Q29sb3IpKXtcclxuICAgICAgICAgICAgcmdiYUNvbG9yPSBoZXhDb2xvci5zdWJzdHJpbmcoMSkuc3BsaXQoJycpO1xyXG4gICAgICAgICAgICBpZihyZ2JhQ29sb3IubGVuZ3RoPT0gMyl7XHJcbiAgICAgICAgICAgICAgICByZ2JhQ29sb3I9IFtyZ2JhQ29sb3JbMF0sIHJnYmFDb2xvclswXSwgcmdiYUNvbG9yWzFdLCByZ2JhQ29sb3JbMV0sIHJnYmFDb2xvclsyXSwgcmdiYUNvbG9yWzJdXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZ2JhQ29sb3IgPSAnMHgnK3JnYmFDb2xvci5qb2luKCcnKTtcclxuICAgICAgICAgICAgcmdiYUNvbG9yID0gTnVtYmVyLnBhcnNlSW50KHJnYmFDb2xvcilcclxuICAgICAgICAgICAgcmV0dXJuICdyZ2JhKCcrWyhyZ2JhQ29sb3I+PjE2KSYyNTUsIChyZ2JhQ29sb3I+PjgpJjI1NSwgcmdiYUNvbG9yJjI1NV0uam9pbignLCcpKycsMSknO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JhZCBIZXgnKTtcclxuICAgIH1cclxuXHJcbiAgICB0b0hleCgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7T2tDb2xvcnN9IiwiLypcclxuKiBBdXRob3IgOiBLSUxMSUFOIEtFUkxBVVxyXG4qIFRpdGxlIDogT2tSZXF1ZXN0XHJcbiogRGVzY3JpcHRpb24gOiBPa1JlcXVlc3QgaXMgYSBmdW5jdGlvbiB0byBtYWtlIGh0dHAgcmVxdWVzdFxyXG4qL1xyXG5cclxuXHJcbmNsYXNzIE9rRXZlbnRzRW1pdHRlciB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1fZXZlbnRzOiB7W2luZGV4OiBzdHJpbmddOmFueX0gPSB7fTsgLy8gY29udGFpbnMgYWxsIGV2ZW50c1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGNsYXNzIGNvbnRhaW5zIGFsbCB5b3UgbmVlZCB0byBtYWRlIGV2ZW50IGVtaXR0ZXJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB0aGlzIG1ldGhvZCByZWdpc3RlciBhbiBldmVudFxyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uKGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyOiAoYXJnPzphbnkpID0+IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5tX2V2ZW50c1tldmVudF0pIHtcclxuICAgICAgICAgICAgdGhpcy5tX2V2ZW50c1tldmVudF0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tX2V2ZW50c1tldmVudF0ucHVzaChsaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB0aGlzIG1ldGhvZCByZW1vdmUgYW4gZXZlbnQgcmVnaXN0ZXJlZCBpZiB0aGlzIGV2ZW50IGRvZXNuJ3QgZXhpc3QgdGhhdCB0aHJvdyBhbiBlcnJvclxyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJUb1JlbW92ZVxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlTGlzdGVuZXIoZXZlbnQ6IHN0cmluZywgbGlzdGVuZXJUb1JlbW92ZTogKGFyZz86YW55KSA9PiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMubV9ldmVudHNbZXZlbnRdKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgcmVtb3ZlIGEgbGlzdGVuZXIuIEV2ZW50IFwiJHtldmVudH1cIiBkb2Vzbid0IGV4aXRzLmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZmlsdGVyTGlzdGVuZXJzID0gKGxpc3RlbmVyOiAoYXJnPzphbnkpID0+IGFueSkgPT4gbGlzdGVuZXIgIT09IGxpc3RlbmVyVG9SZW1vdmU7XHJcblxyXG4gICAgICAgIHRoaXMubV9ldmVudHNbZXZlbnRdID0gdGhpcy5tX2V2ZW50c1tldmVudF0uZmlsdGVyKGZpbHRlckxpc3RlbmVycyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGVtaXQgYW4gZXZlbnQgaWYgdGhpcyBldmVudCBkb2Vzbid0IGV4aXN0IHRoYXQgdGhyb3cgYW4gZXJyb3JcclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICogQHBhcmFtIGRhdGFcclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGVtaXQoZXZlbnQ6IHN0cmluZywgZGF0YTogYW55KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1fZXZlbnRzW2V2ZW50XSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IGVtaXQgYW4gZXZlbnQuIEV2ZW50IFwiJHtldmVudH1cIiBkb2Vzbid0IGV4aXRzLmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZmlyZUNhbGxiYWNrcyA9IChjYWxsYmFjazogKGFyZz86YW55KSA9PiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5tX2V2ZW50c1tldmVudF0uZm9yRWFjaChmaXJlQ2FsbGJhY2tzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtPa0V2ZW50c0VtaXR0ZXJ9IiwiaW1wb3J0IHtPa1VybH0gZnJvbSBcIi4vT2tVcmxcIjtcclxuXHJcbmludGVyZmFjZSBPcHRpb25zIHtcclxuICAgIHVybDogT2tVcmxcclxufVxyXG5cclxuY2xhc3MgT2tJbWFnZSB7XHJcbiAgICBwcml2YXRlIG1fdXJsOiBPa1VybDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5zZXRVcmwob3B0aW9ucy51cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cmwoKTogT2tVcmwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fdXJsXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFVybCh1cmw6IE9rVXJsKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tX3VybCA9IHVybDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW1hZ2UoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIGZ1bmN0aW9uIChyZXNvbHZlOiAoYXJnMDogc3RyaW5nKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCAoYXdhaXQgdGhpcy5tX3VybC5yZXF1ZXN0KCkpLmJsb2IoKTtcclxuICAgICAgICAgICAgY29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGZpbGVMb2FkZWRFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNyY0RhdGEgPSBmaWxlTG9hZGVkRXZlbnQudGFyZ2V0LnJlc3VsdC50b1N0cmluZygpOyAvLyA8LS0tIGRhdGE6IGJhc2U2NFxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShzcmNEYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoZGF0YSk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtPa0ltYWdlLCBPcHRpb25zfSIsImludGVyZmFjZSBPcHRpb25zIHtcclxuICAgIGxhbmd1YWdlPzogc3RyaW5nO1xyXG59XHJcblxyXG5jbGFzcyBPa0xhbmd1YWdlIHtcclxuICAgIHByaXZhdGUgbV9sYW5ndWFnZTogc3RyaW5nID0gbmF2aWdhdG9yLmxhbmd1YWdlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBPcHRpb25zKSB7XHJcbiAgICAgICAgaWYob3B0aW9ucz8ubGFuZ3VhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5tX2xhbmd1YWdlID0gb3B0aW9ucy5sYW5ndWFnZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldExhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1fbGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TGFuZ3VhZ2UocHJlZmVyZW5jZXM/OiBBcnJheTxzdHJpbmc+fHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYodHlwZW9mIHByZWZlcmVuY2VzICE9IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgcHJlZmVyZW5jZXMgPSBbcHJlZmVyZW5jZXNdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcHJlZmVyZW5jZSA9IHRoaXMuZ2V0TGFuZ3VhZ2VQcmVmKHByZWZlcmVuY2VzKTtcclxuICAgICAgICByZXR1cm4gcHJlZmVyZW5jZS5zbGljZSgwLCAyKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TGFuZ3VhZ2VQcmVmKHByZWZlcmVuY2VzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHByZWZlcmVuY2Ugb2YgcHJlZmVyZW5jZXMpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChwcmVmZXJlbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibmF2aWdhdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiaW50ZXJuZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMubV9sYW5ndWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX2xhbmd1YWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJodG1sXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIikuZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIikuZ2V0QXR0cmlidXRlKFwibGFuZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge09rTGFuZ3VhZ2UsIE9wdGlvbnN9IiwiLyoqXHJcbiAqIFRoaXMgaXMgYSBjb21wbGV4IGZ1bmN0aW9uIHdoaWNoIHNob3VsZCBvbmx5IHVzZSB0byBoYXMgbXVsdGlwbGUgZXh0ZW5kcyBhbmQgbm93IHRoZSBzdXBlciBwYXJhbWV0ZXJzIG9ubHkgYWNjZXB0IE1hcC5cclxuICpcclxuICogYGBgdHNcclxuICogY2xhc3MgT2JqIHtcclxuICogICAgIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcpIHtcclxuICogICAgICAgICBjb25zb2xlLmxvZyh0aXRsZSlcclxuICogICAgIH1cclxuICogfVxyXG4gKiBjbGFzcyBPYmoyIHtcclxuICogICAgIGNvbnN0cnVjdG9yKG9iajoge3RpdGxlOiBzdHJpbmd9KSB7XHJcbiAqICAgICAgICAgY29uc29sZS5sb2cob2JqLnRpdGxlKVxyXG4gKiAgICAgfVxyXG4gKiB9XHJcbiAqIGNsYXNzIE9iajMge1xyXG4gKiAgICAgY29uc3RydWN0b3IodGl0bGU6IHN0cmluZywgYWdlOiBudW1iZXIpIHtcclxuICogICAgICAgICBjb25zb2xlLmxvZyh0aXRsZSlcclxuICogICAgICAgICBjb25zb2xlLmxvZyhhZ2UpXHJcbiAqICAgICB9XHJcbiAqIH1cclxuICogY2xhc3MgT2JqNCBleHRlbmRzIE9rTXVsdGlwbGVFeHRlbmRzKE9iaiwgT2JqMiwgT2JqMykge1xyXG4gKlxyXG4gKiAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gKiAgICAgICAgICBzdXBlcihuZXcgTWFwKFtcclxuICogICAgICAgICAgICAgIFtcIk9ialwiLCBbXCJTYWx1dFwiXV0sXHJcbiAqICAgICAgICAgICAgICBbXCJPYmoyXCIsIFt7dGl0bGU6IFwiSGV5IE1hbWFcIn1dXSxcclxuICogICAgICAgICAgICAgIFtcIk9iajNcIiwgW1wiTWhoaGhcIiwgMTZdXVxyXG4gKiAgICAgICAgICBdKSk7XHJcbiAqICAgICB9XHJcbiAqIH1cclxuICogbGV0IG9iaiA9IG5ldyBPYmo0KCk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcGFyYW0gYmFzZUNsYXNzXHJcbiAqIEBwYXJhbSBtaXhpbnNcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gT2tNdWx0aXBsZUV4dGVuZHMoYmFzZUNsYXNzOiBhbnksIC4uLm1peGluczogYW55W10pOiBhbnkge1xyXG4gICAgY2xhc3MgYmFzZSBleHRlbmRzIGJhc2VDbGFzcyB7XHJcbiAgICAgICAgY29uc3RydWN0b3IgKGFyZ3M6IE1hcDxzdHJpbmcsIGFueVtdPikge1xyXG4gICAgICAgICAgICBsZXQgcHJveHlIYW5kbGVyOiBQcm94eUhhbmRsZXI8TWFwPHN0cmluZywgYW55W10+PiA9IHtcclxuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24ob2JqLCBwcm9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT24gb2J0aWVudCBsZSBub21icmUgZGUgcHJvZHVpdHNcclxuICAgICAgICAgICAgICAgICAgICAvLyB1biBhbGlhcyBwb3VyIHByb2R1Y3RzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByw6lzdWx0YXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvZHVpdCBvZiBvYmopIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2R1aXRbMF0gPT09IHByb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHLDqXN1bHRhdCA9IHByb2R1aXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyw6lzdWx0YXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHLDqXN1bHRhdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbGV0IGFyZ3NUOiB7W2luZGV4OnN0cmluZ10gOiBhbnl9ID0gbmV3IFByb3h5KGFyZ3MsIHByb3h5SGFuZGxlcik7XHJcbiAgICAgICAgICAgIGlmKGFyZ3NUW2Jhc2VDbGFzcy5uYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgc3VwZXIoLi4uYXJnc1RbYmFzZUNsYXNzLm5hbWVdWzFdKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yKGNvbnN0IG1peGluIG9mIG1peGlucykge1xyXG4gICAgICAgICAgICAgICAgaWYobWl4aW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihhcmdzVFttaXhpbi5uYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3B5UHJvcHModGhpcywgKG5ldyBtaXhpbiguLi5hcmdzVFttaXhpbi5uYW1lXVsxXSkpKVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3B5UHJvcHModGhpcywgKG5ldyBtaXhpbikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgY29weVByb3BzID0gKHRhcmdldDogYW55LCBzb3VyY2U6IGFueSkgPT4geyAgLy8gdGhpcyBmdW5jdGlvbiBjb3BpZXMgYWxsIHByb3BlcnRpZXMgYW5kIHN5bWJvbHMsIGZpbHRlcmluZyBvdXQgc29tZSBzcGVjaWFsIG9uZXNcclxuICAgICAgICBsZXQgcHJvcHM6IHN0cmluZ1tdID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKTtcclxuICAgICAgICBmb3IoY29uc3QgcHJvcCBvZiBwcm9wcykge1xyXG4gICAgICAgICAgICBpZiAoIXByb3AubWF0Y2goL14oPzpjb25zdHJ1Y3Rvcnxwcm90b3R5cGV8YXJndW1lbnRzfGNhbGxlcnxuYW1lfGJpbmR8Y2FsbHxhcHBseXx0b1N0cmluZ3xsZW5ndGgpJC8pKVxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHByb3ApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHN5bWJvbHM6IHN5bWJvbFtdID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xyXG4gICAgICAgIGZvcihjb25zdCBzeW1ib2wgb2Ygc3ltYm9scykge1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBzeW1ib2wsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW1ib2wpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtaXhpbnMuZm9yRWFjaCgobWl4aW4pID0+IHsgLy8gb3V0c2lkZSBjb250cnVjdG9yKCkgdG8gYWxsb3cgYWdncmVnYXRpb24oQSxCLEMpLnN0YXRpY0Z1bmN0aW9uKCkgdG8gYmUgY2FsbGVkIGV0Yy5cclxuICAgICAgICBjb3B5UHJvcHMoYmFzZS5wcm90b3R5cGUsIG1peGluLnByb3RvdHlwZSk7XHJcbiAgICAgICAgY29weVByb3BzKGJhc2UsIG1peGluKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGJhc2U7XHJcbn1cclxuXHJcbmV4cG9ydCB7T2tNdWx0aXBsZUV4dGVuZHN9IiwiaW50ZXJmYWNlIE9wdGlvbnMge1xyXG4gICAgLyoqXHJcbiAgICAgKiB3aWR0aCwgd2hpY2ggd2lsbCBiZSBjb250YWlucyBpbiBPa1NpemVcclxuICAgICAqL1xyXG4gICAgd2lkdGg/OiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIGhlaWdodCwgd2hpY2ggd2lsbCBiZSBjb250YWlucyBpbiBPa1NpemVcclxuICAgICAqL1xyXG4gICAgaGVpZ2h0PzogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBkZXB0aCwgd2hpY2ggd2lsbCBiZSBjb250YWlucyBpbiBPa1NpemVcclxuICAgICAqL1xyXG4gICAgZGVwdGg/OiBudW1iZXI7XHJcbn1cclxuXHJcbmNsYXNzIE9rU2l6ZSB7XHJcbiAgICAvKipcclxuICAgICAqIGN1cnJlbnQgd2lkdGhcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbV93aWR0aDogbnVtYmVyID0gMDtcclxuICAgIC8qKlxyXG4gICAgICogY3VycmVudCBoZWlnaHRcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbV9oZWlnaHQ6IG51bWJlciA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIGN1cnJlbnQgZGVwdGhcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbV9kZXB0aDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9rU2l6ZSBjb250YWlucyAzIHZhcmlhYmxlcyB3aGljaCBjb3VsZCBiZSBlZGl0XHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBPcHRpb25zKSB7XHJcbiAgICAgICAgaWYob3B0aW9ucz8ud2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRXaWR0aChvcHRpb25zLndpZHRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYob3B0aW9ucz8uaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SGVpZ2h0KG9wdGlvbnMuaGVpZ2h0KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihvcHRpb25zPy5kZXB0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERlcHRoKG9wdGlvbnMuZGVwdGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybiB0aGUgY3VycmVudCB3aWR0aFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3dpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZW5hYmxlIHRvIHNldCB3aWR0aFxyXG4gICAgICogQHBhcmFtIHdpZHRoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRXaWR0aCh3aWR0aDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tX3dpZHRoID0gd2lkdGhcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybiB0aGUgY3VycmVudCBoZWlnaHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1faGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBoZWlnaHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldEhlaWdodChoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubV9oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlcHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9kZXB0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0RGVwdGgoZGVwdGg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubV9kZXB0aCA9IGRlcHRoO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge09rU2l6ZSwgT3B0aW9uc307IiwiaW1wb3J0IHtPa1VybH0gZnJvbSBcIi4vT2tVcmxcIjtcclxuaW1wb3J0IHtPa0xhbmd1YWdlfSBmcm9tIFwiLi9Pa0xhbmd1YWdlXCI7XHJcbmltcG9ydCB7T2tFdmVudHNFbWl0dGVyfSBmcm9tIFwiLi9Pa0V2ZW50c0VtaXR0ZXJcIjtcclxuXHJcbmludGVyZmFjZSBPcHRpb25zIHtcclxuICAgIHVybD86IE9rVXJsXHJcbn1cclxuXHJcbmVudW0gRXZlbnRzIHtcclxuICAgIC8qKlxyXG4gICAgICogV2hlbiBUcmFuc2xhdGVkIGZpbGUgaXMgbG9hZGVkXHJcbiAgICAgKi9cclxuICAgIHRyYW5zbGF0ZWQ9IFwidHJhbnNsYXRlZFwiLFxyXG59XHJcblxyXG5jbGFzcyBPa1RyYW5zbGF0b3IgZXh0ZW5kcyBPa0V2ZW50c0VtaXR0ZXIge1xyXG4gICAgcHJpdmF0ZSBtX3VybDogT2tVcmwgPSBuZXcgT2tVcmwoXCJcIik7XHJcbiAgICBwcml2YXRlIG1fY29udGVudDoge1tpbmRleDogc3RyaW5nXTphbnl9ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucz86IE9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcclxuXHJcbiAgICAgICAgaWYob3B0aW9ucz8udXJsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VXJsKG9wdGlvbnMudXJsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyYW5zbGF0ZShrZXl3b3JkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmKHRoaXMubV9jb250ZW50W2tleXdvcmRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1fY29udGVudFtrZXl3b3JkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGtleXdvcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVybCgpOiBPa1VybCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV91cmxcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgc2V0VXJsKHVybDogT2tVcmwpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZihhd2FpdCB1cmwuZXhpc3QoKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1fdXJsID0gdXJsO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgKGF3YWl0IHRoaXMubV91cmwucmVxdWVzdCgpKS5qc29uKClcclxuICAgICAgICAgICAgdGhpcy5tX2NvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoRXZlbnRzLnRyYW5zbGF0ZWQsIHt9KTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiVXJsIG5vdCBmb3VuZFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyByZXdyaXRlXHJcbiAgICBwdWJsaWMgb24oZXZlbnQ6IEV2ZW50cyB8IHN0cmluZywgbGlzdGVuZXI6IChhdHRyPzphbnkpID0+IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmKGV2ZW50IGluIEV2ZW50cykge1xyXG4gICAgICAgICAgICBzdXBlci5vbihldmVudCwgbGlzdGVuZXIpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZXZlbnQgc2VuZCBkb2Vzbid0IGV4aXN0IG9uIHRoaXMgb2JqZWN0IVwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyRXZlbnRzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub24oRXZlbnRzLnRyYW5zbGF0ZWQsICgpID0+IHt9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge09rVHJhbnNsYXRvciwgT3B0aW9ucywgRXZlbnRzfTsiLCJmdW5jdGlvbiBPa1VuaXQodmFsdWU6IG51bWJlciwgdW5pdDogc3RyaW5nID0gXCJweFwiKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpICsgdW5pdDtcclxufVxyXG5cclxuZXhwb3J0IHtPa1VuaXR9IiwiY2xhc3MgT2tVcmwge1xyXG4gICAgcHJpdmF0ZSBtX3VybDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBtX3JlcXVlc3Q6IFJlc3BvbnNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zZXRVcmwodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3VybDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VXJsKHVybDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tX3VybCA9IHVybDtcclxuICAgICAgICB0aGlzLm1fcmVxdWVzdCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZXhpc3QoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgaWYoIXRoaXMubV9yZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCh0aGlzLm1fdXJsKTtcclxuICAgICAgICAgICAgdGhpcy5tX3JlcXVlc3QgPSByZXF1ZXN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gdGhpcy5tX3JlcXVlc3Qub2s7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0Q29udGVudCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIGlmKCF0aGlzLm1fcmVxdWVzdCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2godGhpcy5tX3VybCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9yZXF1ZXN0ID0gcmVxdWVzdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMubV9yZXF1ZXN0LnRleHQoKTtcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyByZXF1ZXN0KCk6IFByb21pc2U8UmVzcG9uc2U+IHtcclxuICAgICAgICBpZighdGhpcy5tX3JlcXVlc3QpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKHRoaXMubV91cmwpO1xyXG4gICAgICAgICAgICB0aGlzLm1fcmVxdWVzdCA9IHJlcXVlc3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5tX3JlcXVlc3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7T2tVcmx9IiwiLyoqXHJcbiAqIHBhdXNlIGR1cmluZyBhIHRpbWVcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiAgYXdhaXQgT2tXYWl0KDUwMCk7IC8vIHdhaXQgNTAwbXNcclxuICogYGBgXHJcbiAqIEBwYXJhbSB0aW1lXHJcbiAqIHRpbWUgaW4gbXNcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIE9rV2FpdCh0aW1lOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoc3VjY2Vzcykge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzKCk7XHJcbiAgICAgICAgfSwgdGltZSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHtPa1dhaXR9OyIsIm5hbWVzcGFjZSBjc3Mge1xyXG4gICAgZXhwb3J0IGVudW0gcHJvcGVydHkge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgQ1NTIGFsaWduLWNvbnRlbnQgcHJvcGVydHkgc2V0cyB0aGUgZGlzdHJpYnV0aW9uIG9mIHNwYWNlIGJldHdlZW4gYW5kIGFyb3VuZCBjb250ZW50IGl0ZW1zIGFsb25nIGEgZmxleGJveCdzIGNyb3NzLWF4aXMgb3IgYSBncmlkJ3MgYmxvY2sgYXhpcy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2FsaWduLWNvbnRlbnQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1hbGlnbi1jb250ZW50XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImFsaWduLWNvbnRlbnRcIj0gXCJhbGlnbi1jb250ZW50XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBDU1MgYWxpZ24taXRlbXMgcHJvcGVydHkgc2V0cyB0aGUgYWxpZ24tc2VsZiB2YWx1ZSBvbiBhbGwgZGlyZWN0IGNoaWxkcmVuIGFzIGEgZ3JvdXAuIEluIEZsZXhib3gsIGl0IGNvbnRyb2xzIHRoZSBhbGlnbm1lbnQgb2YgaXRlbXMgb24gdGhlIENyb3NzIEF4aXMuIEluIEdyaWQgTGF5b3V0LCBpdCBjb250cm9scyB0aGUgYWxpZ25tZW50IG9mIGl0ZW1zIG9uIHRoZSBCbG9jayBBeGlzIHdpdGhpbiB0aGVpciBncmlkIGFyZWEuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9hbGlnbi1pdGVtcyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWFsaWduLWl0ZW1zXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImFsaWduLWl0ZW1zXCI9IFwiYWxpZ24taXRlbXNcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGFsaWduLXNlbGYgQ1NTIHByb3BlcnR5IG92ZXJyaWRlcyBhIGdyaWQgb3IgZmxleCBpdGVtJ3MgYWxpZ24taXRlbXMgdmFsdWUuIEluIEdyaWQsIGl0IGFsaWducyB0aGUgaXRlbSBpbnNpZGUgdGhlJm5ic3A7Z3JpZCBhcmVhLiBJbiBGbGV4Ym94LCBpdCBhbGlnbnMgdGhlIGl0ZW0gb24gdGhlIGNyb3NzIGF4aXMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9hbGlnbi1zZWxmIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YWxpZ24tc2VsZlxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJhbGlnbi1zZWxmXCI9IFwiYWxpZ24tc2VsZlwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYWxpZ25tZW50LWJhc2VsaW5lIGF0dHJpYnV0ZSBzcGVjaWZpZXMgaG93IGFuIG9iamVjdCBpcyBhbGlnbmVkIHdpdGggcmVzcGVjdCB0byBpdHMgcGFyZW50LiBUaGlzIHByb3BlcnR5IHNwZWNpZmllcyB3aGljaCBiYXNlbGluZSBvZiB0aGlzIGVsZW1lbnQgaXMgdG8gYmUgYWxpZ25lZCB3aXRoIHRoZSBjb3JyZXNwb25kaW5nIGJhc2VsaW5lIG9mIHRoZSBwYXJlbnQuIEZvciBleGFtcGxlLCB0aGlzIGFsbG93cyBhbHBoYWJldGljIGJhc2VsaW5lcyBpbiBSb21hbiB0ZXh0IHRvIHN0YXkgYWxpZ25lZCBhY3Jvc3MgZm9udCBzaXplIGNoYW5nZXMuIEl0IGRlZmF1bHRzIHRvIHRoZSBiYXNlbGluZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgdGhlIGNvbXB1dGVkIHZhbHVlIG9mIHRoZSBhbGlnbm1lbnQtYmFzZWxpbmUgcHJvcGVydHkuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NWRy9BdHRyaWJ1dGUvYWxpZ25tZW50LWJhc2VsaW5lIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YWxpZ25tZW50LWJhc2VsaW5lXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImFsaWdubWVudC1iYXNlbGluZVwiPSBcImFsaWdubWVudC1iYXNlbGluZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYWxsIHNob3J0aGFuZCBDU1MgcHJvcGVydHkgcmVzZXRzIGFsbCBvZiBhbiBlbGVtZW50J3MgcHJvcGVydGllcyBleGNlcHQgdW5pY29kZS1iaWRpLCBkaXJlY3Rpb24sIGFuZCBDU1MgQ3VzdG9tIFByb3BlcnRpZXMuIEl0IGNhbiBzZXQgcHJvcGVydGllcyB0byB0aGVpciBpbml0aWFsIG9yIGluaGVyaXRlZCB2YWx1ZXMsIG9yIHRvIHRoZSB2YWx1ZXMgc3BlY2lmaWVkIGluIGFub3RoZXIgc3R5bGVzaGVldCBvcmlnaW4uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9hbGwgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1hbGxcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYWxsPSBcImFsbFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYW5pbWF0aW9uIHNob3J0aGFuZCBDU1MgcHJvcGVydHkgYXBwbGllcyBhbiBhbmltYXRpb24gYmV0d2VlbiBzdHlsZXMuIEl0IGlzIGEgc2hvcnRoYW5kIGZvciBhbmltYXRpb24tbmFtZSwgYW5pbWF0aW9uLWR1cmF0aW9uLCBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uLCBhbmltYXRpb24tZGVsYXksIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsIGFuaW1hdGlvbi1kaXJlY3Rpb24sIGFuaW1hdGlvbi1maWxsLW1vZGUsIGFuZCBhbmltYXRpb24tcGxheS1zdGF0ZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2FuaW1hdGlvbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWFuaW1hdGlvblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBhbmltYXRpb249IFwiYW5pbWF0aW9uXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBhbmltYXRpb24tZGVsYXkgQ1NTIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgYW1vdW50IG9mIHRpbWUgdG8gd2FpdCBmcm9tIGFwcGx5aW5nIHRoZSBhbmltYXRpb24gdG8gYW4gZWxlbWVudCBiZWZvcmUgYmVnaW5uaW5nIHRvIHBlcmZvcm0gdGhlIGFuaW1hdGlvbi4gVGhlIGFuaW1hdGlvbiBjYW4gc3RhcnQgbGF0ZXIsIGltbWVkaWF0ZWx5IGZyb20gaXRzIGJlZ2lubmluZywgb3IgaW1tZWRpYXRlbHkgYW5kIHBhcnR3YXkgdGhyb3VnaCB0aGUgYW5pbWF0aW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYW5pbWF0aW9uLWRlbGF5IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YW5pbWF0aW9uLWRlbGF5XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImFuaW1hdGlvbi1kZWxheVwiPSBcImFuaW1hdGlvbi1kZWxheVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYW5pbWF0aW9uLWRpcmVjdGlvbiBDU1MgcHJvcGVydHkgc2V0cyB3aGV0aGVyIGFuIGFuaW1hdGlvbiBzaG91bGQgcGxheSBmb3J3YXJkLCBiYWNrd2FyZCwgb3IgYWx0ZXJuYXRlIGJhY2sgYW5kIGZvcnRoIGJldHdlZW4gcGxheWluZyB0aGUgc2VxdWVuY2UgZm9yd2FyZCBhbmQgYmFja3dhcmQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9hbmltYXRpb24tZGlyZWN0aW9uIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YW5pbWF0aW9uLWRpcmVjdGlvblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJhbmltYXRpb24tZGlyZWN0aW9uXCI9IFwiYW5pbWF0aW9uLWRpcmVjdGlvblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYW5pbWF0aW9uLWR1cmF0aW9uIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBsZW5ndGggb2YgdGltZSB0aGF0IGFuIGFuaW1hdGlvbiB0YWtlcyB0byBjb21wbGV0ZSBvbmUgY3ljbGUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9hbmltYXRpb24tZHVyYXRpb24gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1hbmltYXRpb24tZHVyYXRpb25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYW5pbWF0aW9uLWR1cmF0aW9uXCI9IFwiYW5pbWF0aW9uLWR1cmF0aW9uXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBhbmltYXRpb24tZmlsbC1tb2RlIENTUyBwcm9wZXJ0eSBzZXRzIGhvdyBhIENTUyBhbmltYXRpb24gYXBwbGllcyBzdHlsZXMgdG8gaXRzIHRhcmdldCBiZWZvcmUgYW5kIGFmdGVyIGl0cyBleGVjdXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9hbmltYXRpb24tZmlsbC1tb2RlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YW5pbWF0aW9uLWZpbGwtbW9kZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJhbmltYXRpb24tZmlsbC1tb2RlXCI9IFwiYW5pbWF0aW9uLWZpbGwtbW9kZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgbnVtYmVyIG9mIHRpbWVzIGFuIGFuaW1hdGlvbiBzZXF1ZW5jZSBzaG91bGQgYmUgcGxheWVkIGJlZm9yZSBzdG9wcGluZy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImFuaW1hdGlvbi1pdGVyYXRpb24tY291bnRcIj0gXCJhbmltYXRpb24taXRlcmF0aW9uLWNvdW50XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBhbmltYXRpb24tbmFtZSBDU1MgcHJvcGVydHkgc3BlY2lmaWVzIHRoZSBuYW1lcyBvZiBvbmUgb3IgbW9yZSBAa2V5ZnJhbWVzIGF0LXJ1bGVzIGRlc2NyaWJpbmcgdGhlIGFuaW1hdGlvbiBvciBhbmltYXRpb25zIHRvIGFwcGx5IHRvIHRoZSBlbGVtZW50LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYW5pbWF0aW9uLW5hbWUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1hbmltYXRpb24tbmFtZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJhbmltYXRpb24tbmFtZVwiPSBcImFuaW1hdGlvbi1uYW1lXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBhbmltYXRpb24tcGxheS1zdGF0ZSBDU1MgcHJvcGVydHkgc2V0cyB3aGV0aGVyIGFuIGFuaW1hdGlvbiBpcyBydW5uaW5nIG9yIHBhdXNlZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2FuaW1hdGlvbi1wbGF5LXN0YXRlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YW5pbWF0aW9uLXBsYXktc3RhdGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYW5pbWF0aW9uLXBsYXktc3RhdGVcIj0gXCJhbmltYXRpb24tcGxheS1zdGF0ZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbiBDU1MgcHJvcGVydHkgc2V0cyBob3cgYW4gYW5pbWF0aW9uIHByb2dyZXNzZXMgdGhyb3VnaCB0aGUgZHVyYXRpb24gb2YgZWFjaCBjeWNsZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb24gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb25cIj0gXCJhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBhcHBlYXJhbmNlIENTUyBwcm9wZXJ0eSBpcyB1c2VkIHRvIGRpc3BsYXkgYW4gZWxlbWVudCB1c2luZyBwbGF0Zm9ybS1uYXRpdmUgc3R5bGluZywgYmFzZWQgb24gdGhlIG9wZXJhdGluZyBzeXN0ZW0ncyB0aGVtZS4gVGhlIC1tb3otYXBwZWFyYW5jZSBhbmQgLXdlYmtpdC1hcHBlYXJhbmNlIHByb3BlcnRpZXMgYXJlIG5vbi1zdGFuZGFyZCB2ZXJzaW9ucyBvZiB0aGlzIHByb3BlcnR5LCB1c2VkIChyZXNwZWN0aXZlbHkpIGJ5IEdlY2tvIChGaXJlZm94KSBhbmQgYnkgV2ViS2l0LWJhc2VkIChlLmcuLCBTYWZhcmkpIGFuZCBCbGluay1iYXNlZCAoZS5nLiwgQ2hyb21lLCBPcGVyYSkgYnJvd3NlcnMgdG8gYWNoaWV2ZSB0aGUgc2FtZSB0aGluZy4gTm90ZSB0aGF0IEZpcmVmb3ggYW5kIEVkZ2UgYWxzbyBzdXBwb3J0IC13ZWJraXQtYXBwZWFyYW5jZSwgZm9yIGNvbXBhdGliaWxpdHkgcmVhc29ucy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2FwcGVhcmFuY2UgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1hcHBlYXJhbmNlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGFwcGVhcmFuY2U9IFwiYXBwZWFyYW5jZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImFzY2VudC1vdmVycmlkZVwiPSBcImFzY2VudC1vdmVycmlkZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYXNwZWN0LXJhdGlvJm5ic3A7Jm5ic3A7Q1NTIHByb3BlcnR5IHNldHMgYSBwcmVmZXJyZWQgYXNwZWN0IHJhdGlvIGZvciB0aGUgYm94LCB3aGljaCB3aWxsIGJlIHVzZWQgaW4gdGhlIGNhbGN1bGF0aW9uIG9mIGF1dG8gc2l6ZXMgYW5kIHNvbWUgb3RoZXIgbGF5b3V0IGZ1bmN0aW9ucy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2FzcGVjdC1yYXRpbyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWFzcGVjdC1yYXRpb1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJhc3BlY3QtcmF0aW9cIj0gXCJhc3BlY3QtcmF0aW9cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJhY2tkcm9wLWZpbHRlciBDU1MgcHJvcGVydHkgbGV0cyB5b3UgYXBwbHkgZ3JhcGhpY2FsIGVmZmVjdHMgc3VjaCBhcyBibHVycmluZyBvciBjb2xvciBzaGlmdGluZyB0byB0aGUgYXJlYSBiZWhpbmQgYW4gZWxlbWVudC4gQmVjYXVzZSBpdCBhcHBsaWVzIHRvIGV2ZXJ5dGhpbmcgYmVoaW5kIHRoZSBlbGVtZW50LCB0byBzZWUgdGhlIGVmZmVjdCB5b3UgbXVzdCBtYWtlIHRoZSBlbGVtZW50IG9yIGl0cyBiYWNrZ3JvdW5kIGF0IGxlYXN0IHBhcnRpYWxseSB0cmFuc3BhcmVudC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tkcm9wLWZpbHRlciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJhY2tkcm9wLWZpbHRlclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJiYWNrZHJvcC1maWx0ZXJcIj0gXCJiYWNrZHJvcC1maWx0ZXJcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJhY2tmYWNlLXZpc2liaWxpdHkgQ1NTIHByb3BlcnR5IHNldHMgd2hldGhlciB0aGUgYmFjayBmYWNlIG9mIGFuIGVsZW1lbnQgaXMgdmlzaWJsZSB3aGVuIHR1cm5lZCB0b3dhcmRzIHRoZSB1c2VyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYmFja2ZhY2UtdmlzaWJpbGl0eSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJhY2tmYWNlLXZpc2liaWxpdHlcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYmFja2ZhY2UtdmlzaWJpbGl0eVwiPSBcImJhY2tmYWNlLXZpc2liaWxpdHlcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJhY2tncm91bmQgc2hvcnRoYW5kIENTUyBwcm9wZXJ0eSBzZXRzIGFsbCBiYWNrZ3JvdW5kIHN0eWxlIHByb3BlcnRpZXMgYXQgb25jZSwgc3VjaCBhcyBjb2xvciwgaW1hZ2UsIG9yaWdpbiBhbmQgc2l6ZSwgb3IgcmVwZWF0IG1ldGhvZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tncm91bmQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1iYWNrZ3JvdW5kXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGJhY2tncm91bmQ9IFwiYmFja2dyb3VuZFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYmFja2dyb3VuZC1hdHRhY2htZW50IENTUyBwcm9wZXJ0eSBzZXRzIHdoZXRoZXIgYSBiYWNrZ3JvdW5kIGltYWdlJ3MgcG9zaXRpb24gaXMgZml4ZWQgd2l0aGluIHRoZSB2aWV3cG9ydCwgb3Igc2Nyb2xscyB3aXRoIGl0cyBjb250YWluaW5nIGJsb2NrLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYmFja2dyb3VuZC1hdHRhY2htZW50IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YmFja2dyb3VuZC1hdHRhY2htZW50XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJhY2tncm91bmQtYXR0YWNobWVudFwiPSBcImJhY2tncm91bmQtYXR0YWNobWVudFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYmFja2dyb3VuZC1ibGVuZC1tb2RlIENTUyBwcm9wZXJ0eSBzZXRzIGhvdyBhbiBlbGVtZW50J3MgYmFja2dyb3VuZCBpbWFnZXMgc2hvdWxkIGJsZW5kIHdpdGggZWFjaCBvdGhlciBhbmQgd2l0aCB0aGUgZWxlbWVudCdzIGJhY2tncm91bmQgY29sb3IuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZ3JvdW5kLWJsZW5kLW1vZGUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1iYWNrZ3JvdW5kLWJsZW5kLW1vZGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1ibGVuZC1tb2RlXCI9IFwiYmFja2dyb3VuZC1ibGVuZC1tb2RlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBiYWNrZ3JvdW5kLWNsaXAgQ1NTIHByb3BlcnR5IHNldHMgd2hldGhlciBhbiBlbGVtZW50J3MgYmFja2dyb3VuZCBleHRlbmRzIHVuZGVybmVhdGggaXRzIGJvcmRlciBib3gsIHBhZGRpbmcgYm94LCBvciBjb250ZW50IGJveC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tncm91bmQtY2xpcCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJhY2tncm91bmQtY2xpcFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNsaXBcIj0gXCJiYWNrZ3JvdW5kLWNsaXBcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJhY2tncm91bmQtY29sb3IgQ1NTIHByb3BlcnR5IHNldHMgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgYW4gZWxlbWVudC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tncm91bmQtY29sb3IgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1iYWNrZ3JvdW5kLWNvbG9yXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIj0gXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBiYWNrZ3JvdW5kLWltYWdlIENTUyBwcm9wZXJ0eSBzZXRzIG9uZSBvciBtb3JlIGJhY2tncm91bmQgaW1hZ2VzIG9uIGFuIGVsZW1lbnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZ3JvdW5kLWltYWdlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YmFja2dyb3VuZC1pbWFnZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWltYWdlXCI9IFwiYmFja2dyb3VuZC1pbWFnZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYmFja2dyb3VuZC1vcmlnaW4gQ1NTIHByb3BlcnR5IHNldHMgdGhlIGJhY2tncm91bmQncyBvcmlnaW46IGZyb20gdGhlIGJvcmRlciBzdGFydCwgaW5zaWRlIHRoZSBib3JkZXIsIG9yIGluc2lkZSB0aGUgcGFkZGluZy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tncm91bmQtb3JpZ2luIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YmFja2dyb3VuZC1vcmlnaW5cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1vcmlnaW5cIj0gXCJiYWNrZ3JvdW5kLW9yaWdpblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYmFja2dyb3VuZC1wb3NpdGlvbiBDU1MgcHJvcGVydHkgc2V0cyB0aGUgaW5pdGlhbCBwb3NpdGlvbiBmb3IgZWFjaCBiYWNrZ3JvdW5kIGltYWdlLiBUaGUgcG9zaXRpb24gaXMgcmVsYXRpdmUgdG8gdGhlIHBvc2l0aW9uIGxheWVyIHNldCBieSBiYWNrZ3JvdW5kLW9yaWdpbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tncm91bmQtcG9zaXRpb24gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1iYWNrZ3JvdW5kLXBvc2l0aW9uXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJhY2tncm91bmQtcG9zaXRpb25cIj0gXCJiYWNrZ3JvdW5kLXBvc2l0aW9uXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBiYWNrZ3JvdW5kLXBvc2l0aW9uLXggQ1NTIHByb3BlcnR5IHNldHMgdGhlIGluaXRpYWwgaG9yaXpvbnRhbCBwb3NpdGlvbiBmb3IgZWFjaCBiYWNrZ3JvdW5kIGltYWdlLiBUaGUgcG9zaXRpb24gaXMgcmVsYXRpdmUgdG8gdGhlIHBvc2l0aW9uIGxheWVyIHNldCBieSBiYWNrZ3JvdW5kLW9yaWdpbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tncm91bmQtcG9zaXRpb24teCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJhY2tncm91bmQtcG9zaXRpb24teFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLXBvc2l0aW9uLXhcIj0gXCJiYWNrZ3JvdW5kLXBvc2l0aW9uLXhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJhY2tncm91bmQtcG9zaXRpb24teSBDU1MgcHJvcGVydHkgc2V0cyB0aGUgaW5pdGlhbCB2ZXJ0aWNhbCBwb3NpdGlvbiBmb3IgZWFjaCBiYWNrZ3JvdW5kIGltYWdlLiBUaGUgcG9zaXRpb24gaXMgcmVsYXRpdmUgdG8gdGhlIHBvc2l0aW9uIGxheWVyIHNldCBieSBiYWNrZ3JvdW5kLW9yaWdpbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tncm91bmQtcG9zaXRpb24teSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJhY2tncm91bmQtcG9zaXRpb24teVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLXBvc2l0aW9uLXlcIj0gXCJiYWNrZ3JvdW5kLXBvc2l0aW9uLXlcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJhY2tncm91bmQtcmVwZWF0IENTUyBwcm9wZXJ0eSBzZXRzIGhvdyBiYWNrZ3JvdW5kIGltYWdlcyBhcmUgcmVwZWF0ZWQuIEEgYmFja2dyb3VuZCBpbWFnZSBjYW4gYmUgcmVwZWF0ZWQgYWxvbmcgdGhlIGhvcml6b250YWwgYW5kIHZlcnRpY2FsIGF4ZXMsIG9yIG5vdCByZXBlYXRlZCBhdCBhbGwuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZ3JvdW5kLXJlcGVhdCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJhY2tncm91bmQtcmVwZWF0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJhY2tncm91bmQtcmVwZWF0XCI9IFwiYmFja2dyb3VuZC1yZXBlYXRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLXJlcGVhdC14XCI9IFwiYmFja2dyb3VuZC1yZXBlYXQteFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJhY2tncm91bmQtcmVwZWF0LXlcIj0gXCJiYWNrZ3JvdW5kLXJlcGVhdC15XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBiYWNrZ3JvdW5kLXNpemUgQ1NTIHByb3BlcnR5IHNldHMgdGhlIHNpemUgb2YgdGhlIGVsZW1lbnQncyBiYWNrZ3JvdW5kIGltYWdlLiBUaGUgaW1hZ2UgY2FuIGJlIGxlZnQgdG8gaXRzIG5hdHVyYWwgc2l6ZSwgc3RyZXRjaGVkLCBvciBjb25zdHJhaW5lZCB0byBmaXQgdGhlIGF2YWlsYWJsZSBzcGFjZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tncm91bmQtc2l6ZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJhY2tncm91bmQtc2l6ZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLXNpemVcIj0gXCJiYWNrZ3JvdW5kLXNpemVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJhc2VsaW5lLXNoaWZ0IGF0dHJpYnV0ZSBhbGxvd3MgcmVwb3NpdGlvbmluZyBvZiB0aGUgZG9taW5hbnQtYmFzZWxpbmUgcmVsYXRpdmUgdG8gdGhlIGRvbWluYW50LWJhc2VsaW5lIG9mIHRoZSBwYXJlbnQgdGV4dCBjb250ZW50IGVsZW1lbnQuIFRoZSBzaGlmdGVkIG9iamVjdCBtaWdodCBiZSBhIHN1Yi0gb3Igc3VwZXJzY3JpcHQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NWRy9BdHRyaWJ1dGUvYmFzZWxpbmUtc2hpZnQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1iYXNlbGluZS1zaGlmdFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJiYXNlbGluZS1zaGlmdFwiPSBcImJhc2VsaW5lLXNoaWZ0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBibG9jay1zaXplIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBob3Jpem9udGFsIG9yIHZlcnRpY2FsIHNpemUgb2YgYW4gZWxlbWVudCdzIGJsb2NrLCBkZXBlbmRpbmcgb24gaXRzIHdyaXRpbmcgbW9kZS4gSXQgY29ycmVzcG9uZHMgdG8gZWl0aGVyIHRoZSB3aWR0aCBvciB0aGUgaGVpZ2h0IHByb3BlcnR5LCBkZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIHdyaXRpbmctbW9kZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2Jsb2NrLXNpemUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ibG9jay1zaXplXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJsb2NrLXNpemVcIj0gXCJibG9jay1zaXplXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXIgc2hvcnRoYW5kIENTUyBwcm9wZXJ0eSBzZXRzIGFuIGVsZW1lbnQncyBib3JkZXIuIEl0IHNldHMgdGhlIHZhbHVlcyBvZiBib3JkZXItd2lkdGgsIGJvcmRlci1zdHlsZSwgYW5kIGJvcmRlci1jb2xvci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBib3JkZXI9IFwiYm9yZGVyXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItYmxvY2sgQ1NTIHByb3BlcnR5IGlzIGEgc2hvcnRoYW5kIHByb3BlcnR5IGZvciBzZXR0aW5nIHRoZSBpbmRpdmlkdWFsIGxvZ2ljYWwgYmxvY2sgYm9yZGVyIHByb3BlcnR5IHZhbHVlcyBpbiBhIHNpbmdsZSBwbGFjZSBpbiB0aGUgc3R5bGUgc2hlZXQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItYmxvY2sgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItYmxvY2tcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWJsb2NrXCI9IFwiYm9yZGVyLWJsb2NrXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItYmxvY2stY29sb3IgQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIGNvbG9yIG9mIHRoZSBsb2dpY2FsIGJsb2NrIGJvcmRlcnMgb2YgYW4gZWxlbWVudCwgd2hpY2ggbWFwcyB0byBhIHBoeXNpY2FsIGJvcmRlciBjb2xvciBkZXBlbmRpbmcgb24gdGhlIGVsZW1lbnQncyB3cml0aW5nIG1vZGUsIGRpcmVjdGlvbmFsaXR5LCBhbmQgdGV4dCBvcmllbnRhdGlvbi4gSXQgY29ycmVzcG9uZHMgdG8gdGhlIGJvcmRlci10b3AtY29sb3IgYW5kIGJvcmRlci1ib3R0b20tY29sb3IsIG9yIGJvcmRlci1yaWdodC1jb2xvciBhbmQgYm9yZGVyLWxlZnQtY29sb3IgcHJvcGVydHkgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZXMgZGVmaW5lZCBmb3Igd3JpdGluZy1tb2RlLCBkaXJlY3Rpb24sIGFuZCB0ZXh0LW9yaWVudGF0aW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWJsb2NrLWNvbG9yIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWJsb2NrLWNvbG9yXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1ibG9jay1jb2xvclwiPSBcImJvcmRlci1ibG9jay1jb2xvclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWJsb2NrLWVuZCBDU1MgcHJvcGVydHkgaXMgYSBzaG9ydGhhbmQgcHJvcGVydHkgZm9yIHNldHRpbmcgdGhlIGluZGl2aWR1YWwgbG9naWNhbCBibG9jay1lbmQgYm9yZGVyIHByb3BlcnR5IHZhbHVlcyBpbiBhIHNpbmdsZSBwbGFjZSBpbiB0aGUgc3R5bGUgc2hlZXQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItYmxvY2stZW5kIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWJsb2NrLWVuZFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItYmxvY2stZW5kXCI9IFwiYm9yZGVyLWJsb2NrLWVuZFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWJsb2NrLWVuZC1jb2xvciBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgY29sb3Igb2YgdGhlIGxvZ2ljYWwgYmxvY2stZW5kIGJvcmRlciBvZiBhbiBlbGVtZW50LCB3aGljaCBtYXBzIHRvIGEgcGh5c2ljYWwgYm9yZGVyIGNvbG9yIGRlcGVuZGluZyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmcgbW9kZSwgZGlyZWN0aW9uYWxpdHksIGFuZCB0ZXh0IG9yaWVudGF0aW9uLiBJdCBjb3JyZXNwb25kcyB0byB0aGUgYm9yZGVyLXRvcC1jb2xvciwmbmJzcDtib3JkZXItcmlnaHQtY29sb3IsJm5ic3A7Ym9yZGVyLWJvdHRvbS1jb2xvciwgb3IgYm9yZGVyLWxlZnQtY29sb3IgcHJvcGVydHkgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZXMgZGVmaW5lZCBmb3Igd3JpdGluZy1tb2RlLCBkaXJlY3Rpb24sIGFuZCB0ZXh0LW9yaWVudGF0aW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWJsb2NrLWVuZC1jb2xvciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1ibG9jay1lbmQtY29sb3JcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWJsb2NrLWVuZC1jb2xvclwiPSBcImJvcmRlci1ibG9jay1lbmQtY29sb3JcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1ibG9jay1lbmQtc3R5bGUgQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIHN0eWxlIG9mIHRoZSBsb2dpY2FsIGJsb2NrLWVuZCBib3JkZXIgb2YgYW4gZWxlbWVudCwgd2hpY2ggbWFwcyB0byBhIHBoeXNpY2FsIGJvcmRlciBzdHlsZSBkZXBlbmRpbmcgb24gdGhlIGVsZW1lbnQncyB3cml0aW5nIG1vZGUsIGRpcmVjdGlvbmFsaXR5LCBhbmQgdGV4dCBvcmllbnRhdGlvbi4gSXQgY29ycmVzcG9uZHMgdG8gdGhlIGJvcmRlci10b3Atc3R5bGUsIGJvcmRlci1yaWdodC1zdHlsZSwgYm9yZGVyLWJvdHRvbS1zdHlsZSwgb3IgYm9yZGVyLWxlZnQtc3R5bGUgcHJvcGVydHkgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZXMgZGVmaW5lZCBmb3Igd3JpdGluZy1tb2RlLCBkaXJlY3Rpb24sIGFuZCB0ZXh0LW9yaWVudGF0aW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWJsb2NrLWVuZC1zdHlsZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1ibG9jay1lbmQtc3R5bGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWJsb2NrLWVuZC1zdHlsZVwiPSBcImJvcmRlci1ibG9jay1lbmQtc3R5bGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1ibG9jay1lbmQtd2lkdGggQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIHdpZHRoIG9mIHRoZSBsb2dpY2FsIGJsb2NrLWVuZCBib3JkZXIgb2YgYW4gZWxlbWVudCwgd2hpY2ggbWFwcyB0byBhIHBoeXNpY2FsIGJvcmRlciB3aWR0aCBkZXBlbmRpbmcgb24gdGhlIGVsZW1lbnQncyB3cml0aW5nIG1vZGUsIGRpcmVjdGlvbmFsaXR5LCBhbmQgdGV4dCBvcmllbnRhdGlvbi4gSXQgY29ycmVzcG9uZHMgdG8gdGhlIGJvcmRlci10b3Atd2lkdGgsJm5ic3A7Ym9yZGVyLXJpZ2h0LXdpZHRoLCZuYnNwO2JvcmRlci1ib3R0b20td2lkdGgsIG9yIGJvcmRlci1sZWZ0LXdpZHRoIHByb3BlcnR5IGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIGRlZmluZWQgZm9yIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1ibG9jay1lbmQtd2lkdGggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItYmxvY2stZW5kLXdpZHRoXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1ibG9jay1lbmQtd2lkdGhcIj0gXCJib3JkZXItYmxvY2stZW5kLXdpZHRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItYmxvY2stc3RhcnQgQ1NTIHByb3BlcnR5IGlzIGEgc2hvcnRoYW5kIHByb3BlcnR5IGZvciBzZXR0aW5nIHRoZSBpbmRpdmlkdWFsIGxvZ2ljYWwgYmxvY2stc3RhcnQgYm9yZGVyIHByb3BlcnR5IHZhbHVlcyBpbiBhIHNpbmdsZSBwbGFjZSBpbiB0aGUgc3R5bGUgc2hlZXQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItYmxvY2stc3RhcnQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItYmxvY2stc3RhcnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWJsb2NrLXN0YXJ0XCI9IFwiYm9yZGVyLWJsb2NrLXN0YXJ0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItYmxvY2stc3RhcnQtY29sb3IgQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIGNvbG9yIG9mIHRoZSBsb2dpY2FsIGJsb2NrLXN0YXJ0IGJvcmRlciBvZiBhbiBlbGVtZW50LCB3aGljaCBtYXBzIHRvIGEgcGh5c2ljYWwgYm9yZGVyIGNvbG9yIGRlcGVuZGluZyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmcgbW9kZSwgZGlyZWN0aW9uYWxpdHksIGFuZCB0ZXh0IG9yaWVudGF0aW9uLiBJdCBjb3JyZXNwb25kcyB0byB0aGUgYm9yZGVyLXRvcC1jb2xvciwmbmJzcDtib3JkZXItcmlnaHQtY29sb3IsJm5ic3A7Ym9yZGVyLWJvdHRvbS1jb2xvciwgb3IgYm9yZGVyLWxlZnQtY29sb3IgcHJvcGVydHkgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZXMgZGVmaW5lZCBmb3Igd3JpdGluZy1tb2RlLCBkaXJlY3Rpb24sIGFuZCB0ZXh0LW9yaWVudGF0aW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWJsb2NrLXN0YXJ0LWNvbG9yIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWJsb2NrLXN0YXJ0LWNvbG9yXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1ibG9jay1zdGFydC1jb2xvclwiPSBcImJvcmRlci1ibG9jay1zdGFydC1jb2xvclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWJsb2NrLXN0YXJ0LXN0eWxlIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBzdHlsZSBvZiB0aGUgbG9naWNhbCBibG9jayBzdGFydCBib3JkZXIgb2YgYW4gZWxlbWVudCwgd2hpY2ggbWFwcyB0byBhIHBoeXNpY2FsIGJvcmRlciBzdHlsZSBkZXBlbmRpbmcgb24gdGhlIGVsZW1lbnQncyB3cml0aW5nIG1vZGUsIGRpcmVjdGlvbmFsaXR5LCBhbmQgdGV4dCBvcmllbnRhdGlvbi4gSXQgY29ycmVzcG9uZHMgdG8gdGhlIGJvcmRlci10b3Atc3R5bGUsJm5ic3A7Ym9yZGVyLXJpZ2h0LXN0eWxlLCZuYnNwO2JvcmRlci1ib3R0b20tc3R5bGUsIG9yIGJvcmRlci1sZWZ0LXN0eWxlIHByb3BlcnR5IGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIGRlZmluZWQgZm9yIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1ibG9jay1zdGFydC1zdHlsZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1ibG9jay1zdGFydC1zdHlsZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItYmxvY2stc3RhcnQtc3R5bGVcIj0gXCJib3JkZXItYmxvY2stc3RhcnQtc3R5bGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1ibG9jay1zdGFydC13aWR0aCBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgd2lkdGggb2YgdGhlIGxvZ2ljYWwgYmxvY2stc3RhcnQgYm9yZGVyIG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gYSBwaHlzaWNhbCBib3JkZXIgd2lkdGggZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uIEl0IGNvcnJlc3BvbmRzIHRvIHRoZSBib3JkZXItdG9wLXdpZHRoLCZuYnNwO2JvcmRlci1yaWdodC13aWR0aCwmbmJzcDtib3JkZXItYm90dG9tLXdpZHRoLCBvciBib3JkZXItbGVmdC13aWR0aCBwcm9wZXJ0eSBkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBkZWZpbmVkIGZvciB3cml0aW5nLW1vZGUsIGRpcmVjdGlvbiwgYW5kIHRleHQtb3JpZW50YXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItYmxvY2stc3RhcnQtd2lkdGggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItYmxvY2stc3RhcnQtd2lkdGhcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoXCI9IFwiYm9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItYmxvY2stc3R5bGUgQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIHN0eWxlIG9mIHRoZSBsb2dpY2FsIGJsb2NrIGJvcmRlcnMgb2YgYW4gZWxlbWVudCwgd2hpY2ggbWFwcyB0byBhIHBoeXNpY2FsIGJvcmRlciBzdHlsZSBkZXBlbmRpbmcgb24gdGhlIGVsZW1lbnQncyB3cml0aW5nIG1vZGUsIGRpcmVjdGlvbmFsaXR5LCBhbmQgdGV4dCBvcmllbnRhdGlvbi4gSXQgY29ycmVzcG9uZHMgdG8gdGhlIGJvcmRlci10b3Atc3R5bGUgYW5kIGJvcmRlci1ib3R0b20tc3R5bGUsIG9yIGJvcmRlci1sZWZ0LXN0eWxlIGFuZCBib3JkZXItcmlnaHQtc3R5bGUgcHJvcGVydGllcyBkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBkZWZpbmVkIGZvciB3cml0aW5nLW1vZGUsIGRpcmVjdGlvbiwgYW5kIHRleHQtb3JpZW50YXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItYmxvY2stc3R5bGUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItYmxvY2stc3R5bGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWJsb2NrLXN0eWxlXCI9IFwiYm9yZGVyLWJsb2NrLXN0eWxlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItYmxvY2std2lkdGggQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIHdpZHRoIG9mIHRoZSBsb2dpY2FsIGJsb2NrJm5ic3A7Ym9yZGVycyBvZiBhbiBlbGVtZW50LCB3aGljaCBtYXBzIHRvIGEgcGh5c2ljYWwgYm9yZGVyIHdpZHRoIGRlcGVuZGluZyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmcgbW9kZSwgZGlyZWN0aW9uYWxpdHksIGFuZCB0ZXh0IG9yaWVudGF0aW9uLiBJdCBjb3JyZXNwb25kcyB0byB0aGUgYm9yZGVyLXRvcC13aWR0aCBhbmQmbmJzcDtib3JkZXItYm90dG9tLXdpZHRoLCBvciBib3JkZXItbGVmdC13aWR0aCwgYW5kJm5ic3A7Ym9yZGVyLXJpZ2h0LXdpZHRoIHByb3BlcnR5IGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIGRlZmluZWQgZm9yIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1ibG9jay13aWR0aCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1ibG9jay13aWR0aFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItYmxvY2std2lkdGhcIj0gXCJib3JkZXItYmxvY2std2lkdGhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1ib3R0b20gc2hvcnRoYW5kIENTUyBwcm9wZXJ0eSBzZXRzIGFuIGVsZW1lbnQncyBib3R0b20gYm9yZGVyLiBJdCBzZXRzIHRoZSB2YWx1ZXMgb2YgYm9yZGVyLWJvdHRvbS13aWR0aCwgYm9yZGVyLWJvdHRvbS1zdHlsZSBhbmQgYm9yZGVyLWJvdHRvbS1jb2xvci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1ib3R0b20gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItYm90dG9tXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1ib3R0b21cIj0gXCJib3JkZXItYm90dG9tXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItYm90dG9tLWNvbG9yIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBjb2xvciBvZiBhbiBlbGVtZW50J3MgYm90dG9tIGJvcmRlci4gSXQgY2FuIGFsc28gYmUgc2V0IHdpdGggdGhlIHNob3J0aGFuZCBDU1MgcHJvcGVydGllcyBib3JkZXItY29sb3Igb3IgYm9yZGVyLWJvdHRvbS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1ib3R0b20tY29sb3IgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItYm90dG9tLWNvbG9yXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1ib3R0b20tY29sb3JcIj0gXCJib3JkZXItYm90dG9tLWNvbG9yXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzIENTUyBwcm9wZXJ0eSByb3VuZHMgdGhlIGJvdHRvbS1sZWZ0IGNvcm5lciBvZiBhbiBlbGVtZW50IGJ5IHNwZWNpZnlpbmcgdGhlIHJhZGl1cyAob3IgdGhlIHJhZGl1cyBvZiB0aGUgc2VtaS1tYWpvciBhbmQgc2VtaS1taW5vciBheGVzKSBvZiB0aGUgZWxsaXBzZSBkZWZpbmluZyB0aGUgY3VydmF0dXJlIG9mIHRoZSBjb3JuZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzXCI9IFwiYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMgQ1NTIHByb3BlcnR5IHJvdW5kcyB0aGUgYm90dG9tLXJpZ2h0IGNvcm5lciBvZiBhbiBlbGVtZW50IGJ5IHNwZWNpZnlpbmcgdGhlIHJhZGl1cyAob3IgdGhlIHJhZGl1cyBvZiB0aGUgc2VtaS1tYWpvciBhbmQgc2VtaS1taW5vciBheGVzKSBvZiB0aGUgZWxsaXBzZSBkZWZpbmluZyB0aGUgY3VydmF0dXJlIG9mIHRoZSBjb3JuZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzXCI9IFwiYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1ib3R0b20tc3R5bGUgQ1NTIHByb3BlcnR5IHNldHMgdGhlIGxpbmUgc3R5bGUgb2YgYW4gZWxlbWVudCdzIGJvdHRvbSBib3JkZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItYm90dG9tLXN0eWxlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWJvdHRvbS1zdHlsZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItYm90dG9tLXN0eWxlXCI9IFwiYm9yZGVyLWJvdHRvbS1zdHlsZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWJvdHRvbS13aWR0aCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgd2lkdGggb2YgdGhlIGJvdHRvbSBib3JkZXIgb2YgYW4gZWxlbWVudC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1ib3R0b20td2lkdGggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItYm90dG9tLXdpZHRoXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1ib3R0b20td2lkdGhcIj0gXCJib3JkZXItYm90dG9tLXdpZHRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItY29sbGFwc2UgQ1NTIHByb3BlcnR5IHNldHMgd2hldGhlciBjZWxscyBpbnNpZGUgYSAmbHQ7dGFibGUmZ3Q7IGhhdmUgc2hhcmVkIG9yIHNlcGFyYXRlIGJvcmRlcnMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItY29sbGFwc2UgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItY29sbGFwc2VcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWNvbGxhcHNlXCI9IFwiYm9yZGVyLWNvbGxhcHNlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItY29sb3Igc2hvcnRoYW5kIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBjb2xvciBvZiBhbiBlbGVtZW50J3MgYm9yZGVyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWNvbG9yIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWNvbG9yXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1jb2xvclwiPSBcImJvcmRlci1jb2xvclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWVuZC1lbmQtcmFkaXVzIENTUyBwcm9wZXJ0eSBkZWZpbmVzIGEgbG9naWNhbCBib3JkZXIgcmFkaXVzIG9uIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gYSBwaHlzaWNhbCBib3JkZXIgcmFkaXVzIHRoYXQgZGVwZW5kcyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi4gVGhpcyBpcyB1c2VmdWwgd2hlbiBidWlsZGluZyBzdHlsZXMgdG8gd29yayByZWdhcmRsZXNzIG9mIHRoZSB0ZXh0IG9yaWVudGF0aW9uIGFuZCZuYnNwO3dyaXRpbmcgbW9kZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1lbmQtZW5kLXJhZGl1cyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1lbmQtZW5kLXJhZGl1c1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItZW5kLWVuZC1yYWRpdXNcIj0gXCJib3JkZXItZW5kLWVuZC1yYWRpdXNcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1lbmQtc3RhcnQtcmFkaXVzIENTUyBwcm9wZXJ0eSBkZWZpbmVzIGEgbG9naWNhbCBib3JkZXIgcmFkaXVzIG9uIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gYSBwaHlzaWNhbCBib3JkZXIgcmFkaXVzJm5ic3A7ZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZy1tb2RlLCBkaXJlY3Rpb24sIGFuZCB0ZXh0LW9yaWVudGF0aW9uLiZuYnNwO1RoaXMgaXMgdXNlZnVsIHdoZW4gYnVpbGRpbmcgc3R5bGVzIHRvIHdvcmsgcmVnYXJkbGVzcyBvZiB0aGUgdGV4dCBvcmllbnRhdGlvbiBhbmQmbmJzcDt3cml0aW5nIG1vZGUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItZW5kLXN0YXJ0LXJhZGl1cyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1lbmQtc3RhcnQtcmFkaXVzXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1lbmQtc3RhcnQtcmFkaXVzXCI9IFwiYm9yZGVyLWVuZC1zdGFydC1yYWRpdXNcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1pbWFnZSBDU1MgcHJvcGVydHkgZHJhd3MgYW4gaW1hZ2UgYXJvdW5kIGEgZ2l2ZW4gZWxlbWVudC4gSXQgcmVwbGFjZXMgdGhlIGVsZW1lbnQncyByZWd1bGFyIGJvcmRlci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1pbWFnZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1pbWFnZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItaW1hZ2VcIj0gXCJib3JkZXItaW1hZ2VcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1pbWFnZS1vdXRzZXQgQ1NTIHByb3BlcnR5IHNldHMgdGhlIGRpc3RhbmNlIGJ5IHdoaWNoIGFuIGVsZW1lbnQncyBib3JkZXIgaW1hZ2UgaXMgc2V0IG91dCBmcm9tIGl0cyBib3JkZXIgYm94LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWltYWdlLW91dHNldCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1pbWFnZS1vdXRzZXRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWltYWdlLW91dHNldFwiPSBcImJvcmRlci1pbWFnZS1vdXRzZXRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1pbWFnZS1yZXBlYXQgQ1NTIHByb3BlcnR5IGRlZmluZXMgaG93IHRoZSBlZGdlIHJlZ2lvbnMgb2YgYSBzb3VyY2UgaW1hZ2UgYXJlIGFkanVzdGVkIHRvIGZpdCB0aGUgZGltZW5zaW9ucyBvZiBhbiBlbGVtZW50J3MgYm9yZGVyIGltYWdlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWltYWdlLXJlcGVhdCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1pbWFnZS1yZXBlYXRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWltYWdlLXJlcGVhdFwiPSBcImJvcmRlci1pbWFnZS1yZXBlYXRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1pbWFnZS1zbGljZSBDU1MgcHJvcGVydHkgZGl2aWRlcyB0aGUgaW1hZ2Ugc3BlY2lmaWVkIGJ5IGJvcmRlci1pbWFnZS1zb3VyY2UgaW50byByZWdpb25zLiBUaGVzZSByZWdpb25zIGZvcm0gdGhlIGNvbXBvbmVudHMgb2YgYW4gZWxlbWVudCdzIGJvcmRlciBpbWFnZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1pbWFnZS1zbGljZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1pbWFnZS1zbGljZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItaW1hZ2Utc2xpY2VcIj0gXCJib3JkZXItaW1hZ2Utc2xpY2VcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1pbWFnZS1zb3VyY2UgQ1NTIHByb3BlcnR5IHNldHMgdGhlIHNvdXJjZSBpbWFnZSB1c2VkIHRvIGNyZWF0ZSBhbiBlbGVtZW50J3MgYm9yZGVyIGltYWdlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWltYWdlLXNvdXJjZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1pbWFnZS1zb3VyY2VcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWltYWdlLXNvdXJjZVwiPSBcImJvcmRlci1pbWFnZS1zb3VyY2VcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1pbWFnZS13aWR0aCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgd2lkdGggb2YgYW4gZWxlbWVudCdzIGJvcmRlciBpbWFnZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1pbWFnZS13aWR0aCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1pbWFnZS13aWR0aFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItaW1hZ2Utd2lkdGhcIj0gXCJib3JkZXItaW1hZ2Utd2lkdGhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1pbmxpbmUgQ1NTIHByb3BlcnR5IGlzIGEgc2hvcnRoYW5kIHByb3BlcnR5IGZvciBzZXR0aW5nIHRoZSBpbmRpdmlkdWFsIGxvZ2ljYWwgaW5saW5lIGJvcmRlciBwcm9wZXJ0eSB2YWx1ZXMgaW4gYSBzaW5nbGUgcGxhY2UgaW4gdGhlIHN0eWxlIHNoZWV0LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWlubGluZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1pbmxpbmVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWlubGluZVwiPSBcImJvcmRlci1pbmxpbmVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1pbmxpbmUtY29sb3IgQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIGNvbG9yIG9mIHRoZSBsb2dpY2FsIGlubGluZSBib3JkZXJzIG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gYSBwaHlzaWNhbCBib3JkZXIgY29sb3IgZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uIEl0IGNvcnJlc3BvbmRzIHRvIHRoZSBib3JkZXItdG9wLWNvbG9yIGFuZCBib3JkZXItYm90dG9tLWNvbG9yLCBvciBib3JkZXItcmlnaHQtY29sb3IgYW5kIGJvcmRlci1sZWZ0LWNvbG9yIHByb3BlcnR5IGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIGRlZmluZWQgZm9yIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1pbmxpbmUtY29sb3IgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItaW5saW5lLWNvbG9yXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1pbmxpbmUtY29sb3JcIj0gXCJib3JkZXItaW5saW5lLWNvbG9yXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItaW5saW5lLWVuZCBDU1MgcHJvcGVydHkgaXMgYSBzaG9ydGhhbmQgcHJvcGVydHkgZm9yIHNldHRpbmcgdGhlIGluZGl2aWR1YWwgbG9naWNhbCBpbmxpbmUtZW5kIGJvcmRlciBwcm9wZXJ0eSB2YWx1ZXMgaW4gYSBzaW5nbGUgcGxhY2UgaW4gdGhlIHN0eWxlIHNoZWV0LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWlubGluZS1lbmQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItaW5saW5lLWVuZFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItaW5saW5lLWVuZFwiPSBcImJvcmRlci1pbmxpbmUtZW5kXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItaW5saW5lLWVuZC1jb2xvciBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgY29sb3Igb2YgdGhlIGxvZ2ljYWwgaW5saW5lLWVuZCBib3JkZXIgb2YgYW4gZWxlbWVudCwgd2hpY2ggbWFwcyB0byBhIHBoeXNpY2FsIGJvcmRlciBjb2xvciBkZXBlbmRpbmcgb24gdGhlIGVsZW1lbnQncyB3cml0aW5nIG1vZGUsIGRpcmVjdGlvbmFsaXR5LCBhbmQgdGV4dCBvcmllbnRhdGlvbi4gSXQgY29ycmVzcG9uZHMgdG8gdGhlIGJvcmRlci10b3AtY29sb3IsIGJvcmRlci1yaWdodC1jb2xvciwgYm9yZGVyLWJvdHRvbS1jb2xvciwgb3IgYm9yZGVyLWxlZnQtY29sb3IgcHJvcGVydHkgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZXMgZGVmaW5lZCBmb3Igd3JpdGluZy1tb2RlLCBkaXJlY3Rpb24sIGFuZCB0ZXh0LW9yaWVudGF0aW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWlubGluZS1lbmQtY29sb3IgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItaW5saW5lLWVuZC1jb2xvclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItaW5saW5lLWVuZC1jb2xvclwiPSBcImJvcmRlci1pbmxpbmUtZW5kLWNvbG9yXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItaW5saW5lLWVuZC1zdHlsZSBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgc3R5bGUgb2YgdGhlIGxvZ2ljYWwgaW5saW5lIGVuZCBib3JkZXIgb2YgYW4gZWxlbWVudCwgd2hpY2ggbWFwcyB0byBhIHBoeXNpY2FsIGJvcmRlciBzdHlsZSBkZXBlbmRpbmcgb24gdGhlIGVsZW1lbnQncyB3cml0aW5nIG1vZGUsIGRpcmVjdGlvbmFsaXR5LCBhbmQgdGV4dCBvcmllbnRhdGlvbi4gSXQgY29ycmVzcG9uZHMgdG8gdGhlIGJvcmRlci10b3Atc3R5bGUsIGJvcmRlci1yaWdodC1zdHlsZSwgYm9yZGVyLWJvdHRvbS1zdHlsZSwgb3IgYm9yZGVyLWxlZnQtc3R5bGUgcHJvcGVydHkgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZXMgZGVmaW5lZCBmb3Igd3JpdGluZy1tb2RlLCBkaXJlY3Rpb24sIGFuZCB0ZXh0LW9yaWVudGF0aW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWlubGluZS1lbmQtc3R5bGUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItaW5saW5lLWVuZC1zdHlsZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItaW5saW5lLWVuZC1zdHlsZVwiPSBcImJvcmRlci1pbmxpbmUtZW5kLXN0eWxlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItaW5saW5lLWVuZC13aWR0aCBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgd2lkdGggb2YgdGhlIGxvZ2ljYWwgaW5saW5lLWVuZCBib3JkZXIgb2YgYW4gZWxlbWVudCwgd2hpY2ggbWFwcyB0byBhIHBoeXNpY2FsIGJvcmRlciB3aWR0aCBkZXBlbmRpbmcgb24gdGhlIGVsZW1lbnQncyB3cml0aW5nIG1vZGUsIGRpcmVjdGlvbmFsaXR5LCBhbmQgdGV4dCBvcmllbnRhdGlvbi4gSXQgY29ycmVzcG9uZHMgdG8gdGhlIGJvcmRlci10b3Atd2lkdGgsIGJvcmRlci1yaWdodC13aWR0aCwgYm9yZGVyLWJvdHRvbS13aWR0aCwgb3IgYm9yZGVyLWxlZnQtd2lkdGggcHJvcGVydHkgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZXMgZGVmaW5lZCBmb3Igd3JpdGluZy1tb2RlLCBkaXJlY3Rpb24sIGFuZCB0ZXh0LW9yaWVudGF0aW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWlubGluZS1lbmQtd2lkdGggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItaW5saW5lLWVuZC13aWR0aFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItaW5saW5lLWVuZC13aWR0aFwiPSBcImJvcmRlci1pbmxpbmUtZW5kLXdpZHRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItaW5saW5lLXN0YXJ0IENTUyBwcm9wZXJ0eSBpcyBhIHNob3J0aGFuZCBwcm9wZXJ0eSBmb3Igc2V0dGluZyB0aGUgaW5kaXZpZHVhbCBsb2dpY2FsIGlubGluZS1zdGFydCBib3JkZXIgcHJvcGVydHkgdmFsdWVzIGluIGEgc2luZ2xlIHBsYWNlIGluIHRoZSBzdHlsZSBzaGVldC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1pbmxpbmUtc3RhcnQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItaW5saW5lLXN0YXJ0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1pbmxpbmUtc3RhcnRcIj0gXCJib3JkZXItaW5saW5lLXN0YXJ0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItaW5saW5lLXN0YXJ0LWNvbG9yIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBjb2xvciBvZiB0aGUgbG9naWNhbCBpbmxpbmUgc3RhcnQgYm9yZGVyIG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gYSBwaHlzaWNhbCBib3JkZXIgY29sb3IgZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uIEl0IGNvcnJlc3BvbmRzIHRvIHRoZSBib3JkZXItdG9wLWNvbG9yLCBib3JkZXItcmlnaHQtY29sb3IsIGJvcmRlci1ib3R0b20tY29sb3IsIG9yIGJvcmRlci1sZWZ0LWNvbG9yIHByb3BlcnR5IGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIGRlZmluZWQgZm9yIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1pbmxpbmUtc3RhcnQtY29sb3IgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItaW5saW5lLXN0YXJ0LWNvbG9yXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1pbmxpbmUtc3RhcnQtY29sb3JcIj0gXCJib3JkZXItaW5saW5lLXN0YXJ0LWNvbG9yXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBzdHlsZSBvZiB0aGUgbG9naWNhbCBpbmxpbmUgc3RhcnQgYm9yZGVyIG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gYSBwaHlzaWNhbCBib3JkZXIgc3R5bGUgZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uIEl0IGNvcnJlc3BvbmRzIHRvIHRoZSBib3JkZXItdG9wLXN0eWxlLCBib3JkZXItcmlnaHQtc3R5bGUsIGJvcmRlci1ib3R0b20tc3R5bGUsIG9yIGJvcmRlci1sZWZ0LXN0eWxlIHByb3BlcnR5IGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIGRlZmluZWQgZm9yIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1pbmxpbmUtc3RhcnQtc3R5bGUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1pbmxpbmUtc3RhcnQtc3R5bGVcIj0gXCJib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSB3aWR0aCBvZiB0aGUgbG9naWNhbCBpbmxpbmUtc3RhcnQgYm9yZGVyIG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gYSBwaHlzaWNhbCBib3JkZXIgd2lkdGggZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uIEl0IGNvcnJlc3BvbmRzIHRvIHRoZSBib3JkZXItdG9wLXdpZHRoLCBib3JkZXItcmlnaHQtd2lkdGgsIGJvcmRlci1ib3R0b20td2lkdGgsIG9yIGJvcmRlci1sZWZ0LXdpZHRoIHByb3BlcnR5IGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIGRlZmluZWQgZm9yIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGhcIj0gXCJib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItaW5saW5lLXN0eWxlIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBzdHlsZSBvZiB0aGUgbG9naWNhbCBpbmxpbmUmbmJzcDtib3JkZXJzIG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gYSBwaHlzaWNhbCBib3JkZXIgc3R5bGUgZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uIEl0IGNvcnJlc3BvbmRzIHRvIHRoZSBib3JkZXItdG9wLXN0eWxlIGFuZCZuYnNwO2JvcmRlci1ib3R0b20tc3R5bGUsIG9yJm5ic3A7Ym9yZGVyLWxlZnQtc3R5bGUgYW5kJm5ic3A7Ym9yZGVyLXJpZ2h0LXN0eWxlIHByb3BlcnRpZXMmbmJzcDtkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBkZWZpbmVkIGZvciB3cml0aW5nLW1vZGUsIGRpcmVjdGlvbiwgYW5kIHRleHQtb3JpZW50YXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItaW5saW5lLXN0eWxlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWlubGluZS1zdHlsZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItaW5saW5lLXN0eWxlXCI9IFwiYm9yZGVyLWlubGluZS1zdHlsZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWlubGluZS13aWR0aCBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgd2lkdGggb2YgdGhlIGxvZ2ljYWwgaW5saW5lJm5ic3A7Ym9yZGVycyBvZiBhbiBlbGVtZW50LCB3aGljaCBtYXBzIHRvIGEgcGh5c2ljYWwgYm9yZGVyIHdpZHRoIGRlcGVuZGluZyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmcgbW9kZSwgZGlyZWN0aW9uYWxpdHksIGFuZCB0ZXh0IG9yaWVudGF0aW9uLiBJdCBjb3JyZXNwb25kcyB0byB0aGUgYm9yZGVyLXRvcC13aWR0aCBhbmQmbmJzcDtib3JkZXItYm90dG9tLXdpZHRoLCBvciBib3JkZXItbGVmdC13aWR0aCwgYW5kJm5ic3A7Ym9yZGVyLXJpZ2h0LXdpZHRoIHByb3BlcnR5IGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIGRlZmluZWQgZm9yIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1pbmxpbmUtd2lkdGggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItaW5saW5lLXdpZHRoXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1pbmxpbmUtd2lkdGhcIj0gXCJib3JkZXItaW5saW5lLXdpZHRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItbGVmdCBzaG9ydGhhbmQgQ1NTIHByb3BlcnR5IHNldHMgYWxsIHRoZSBwcm9wZXJ0aWVzIG9mIGFuIGVsZW1lbnQncyBsZWZ0IGJvcmRlci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1sZWZ0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWxlZnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWxlZnRcIj0gXCJib3JkZXItbGVmdFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWxlZnQtY29sb3IgQ1NTIHByb3BlcnR5IHNldHMgdGhlIGNvbG9yIG9mIGFuIGVsZW1lbnQncyBsZWZ0IGJvcmRlci4gSXQgY2FuIGFsc28gYmUgc2V0IHdpdGggdGhlIHNob3J0aGFuZCBDU1MgcHJvcGVydGllcyBib3JkZXItY29sb3Igb3IgYm9yZGVyLWxlZnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItbGVmdC1jb2xvciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1sZWZ0LWNvbG9yXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1sZWZ0LWNvbG9yXCI9IFwiYm9yZGVyLWxlZnQtY29sb3JcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1sZWZ0LXN0eWxlIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBsaW5lIHN0eWxlIG9mIGFuIGVsZW1lbnQncyBsZWZ0IGJvcmRlci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1sZWZ0LXN0eWxlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWxlZnQtc3R5bGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLWxlZnQtc3R5bGVcIj0gXCJib3JkZXItbGVmdC1zdHlsZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLWxlZnQtd2lkdGggQ1NTIHByb3BlcnR5IHNldHMgdGhlIHdpZHRoIG9mIHRoZSBsZWZ0IGJvcmRlciBvZiBhbiBlbGVtZW50LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLWxlZnQtd2lkdGggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItbGVmdC13aWR0aFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItbGVmdC13aWR0aFwiPSBcImJvcmRlci1sZWZ0LXdpZHRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItcmFkaXVzIENTUyBwcm9wZXJ0eSByb3VuZHMgdGhlIGNvcm5lcnMgb2YgYW4gZWxlbWVudCdzIG91dGVyIGJvcmRlciBlZGdlLiBZb3UgY2FuIHNldCBhIHNpbmdsZSByYWRpdXMgdG8gbWFrZSBjaXJjdWxhciBjb3JuZXJzLCBvciB0d28gcmFkaWkgdG8gbWFrZSBlbGxpcHRpY2FsIGNvcm5lcnMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItcmFkaXVzIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLXJhZGl1c1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItcmFkaXVzXCI9IFwiYm9yZGVyLXJhZGl1c1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLXJpZ2h0IHNob3J0aGFuZCBDU1MgcHJvcGVydHkgc2V0cyBhbGwgdGhlIHByb3BlcnRpZXMgb2YgYW4gZWxlbWVudCdzIHJpZ2h0IGJvcmRlci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1yaWdodCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1yaWdodFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItcmlnaHRcIj0gXCJib3JkZXItcmlnaHRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1yaWdodC1jb2xvciBDU1MgcHJvcGVydHkgc2V0cyB0aGUgY29sb3Igb2YgYW4gZWxlbWVudCdzIHJpZ2h0IGJvcmRlci4gSXQgY2FuIGFsc28gYmUgc2V0IHdpdGggdGhlIHNob3J0aGFuZCBDU1MgcHJvcGVydGllcyBib3JkZXItY29sb3Igb3IgYm9yZGVyLXJpZ2h0LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLXJpZ2h0LWNvbG9yIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLXJpZ2h0LWNvbG9yXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1yaWdodC1jb2xvclwiPSBcImJvcmRlci1yaWdodC1jb2xvclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLXJpZ2h0LXN0eWxlIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBsaW5lIHN0eWxlIG9mIGFuIGVsZW1lbnQncyByaWdodCBib3JkZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItcmlnaHQtc3R5bGUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItcmlnaHQtc3R5bGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLXJpZ2h0LXN0eWxlXCI9IFwiYm9yZGVyLXJpZ2h0LXN0eWxlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItcmlnaHQtd2lkdGggQ1NTIHByb3BlcnR5IHNldHMgdGhlIHdpZHRoIG9mIHRoZSByaWdodCBib3JkZXIgb2YgYW4gZWxlbWVudC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1yaWdodC13aWR0aCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1yaWdodC13aWR0aFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItcmlnaHQtd2lkdGhcIj0gXCJib3JkZXItcmlnaHQtd2lkdGhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1zcGFjaW5nIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBib3JkZXJzIG9mIGFkamFjZW50ICZsdDt0YWJsZSZndDsgY2VsbHMuIFRoaXMgcHJvcGVydHkgYXBwbGllcyBvbmx5IHdoZW4gYm9yZGVyLWNvbGxhcHNlIGlzIHNlcGFyYXRlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLXNwYWNpbmcgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItc3BhY2luZ1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItc3BhY2luZ1wiPSBcImJvcmRlci1zcGFjaW5nXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItc3RhcnQtZW5kLXJhZGl1cyBDU1MgcHJvcGVydHkgZGVmaW5lcyBhIGxvZ2ljYWwgYm9yZGVyIHJhZGl1cyBvbiBhbiBlbGVtZW50LCB3aGljaCBtYXBzIHRvIGEgcGh5c2ljYWwgYm9yZGVyIHJhZGl1cyZuYnNwO2RlcGVuZGluZyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi4mbmJzcDtUaGlzIGlzIHVzZWZ1bCB3aGVuIGJ1aWxkaW5nIHN0eWxlcyB0byB3b3JrIHJlZ2FyZGxlc3Mgb2YgdGhlIHRleHQgb3JpZW50YXRpb24gYW5kJm5ic3A7d3JpdGluZyBtb2RlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLXN0YXJ0LWVuZC1yYWRpdXMgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItc3RhcnQtZW5kLXJhZGl1c1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3JkZXItc3RhcnQtZW5kLXJhZGl1c1wiPSBcImJvcmRlci1zdGFydC1lbmQtcmFkaXVzXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItc3RhcnQtc3RhcnQtcmFkaXVzIENTUyBwcm9wZXJ0eSBkZWZpbmVzIGEgbG9naWNhbCBib3JkZXIgcmFkaXVzIG9uIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gYSBwaHlzaWNhbCBib3JkZXIgcmFkaXVzIHRoYXQgZGVwZW5kcyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi4gVGhpcyBpcyB1c2VmdWwgd2hlbiBidWlsZGluZyBzdHlsZXMgdG8gd29yayByZWdhcmRsZXNzIG9mIHRoZSB0ZXh0IG9yaWVudGF0aW9uIGFuZCZuYnNwO3dyaXRpbmcgbW9kZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1zdGFydC1zdGFydC1yYWRpdXMgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItc3RhcnQtc3RhcnQtcmFkaXVzXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1zdGFydC1zdGFydC1yYWRpdXNcIj0gXCJib3JkZXItc3RhcnQtc3RhcnQtcmFkaXVzXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItc3R5bGUgc2hvcnRoYW5kIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBsaW5lIHN0eWxlIGZvciBhbGwgZm91ciBzaWRlcyBvZiBhbiBlbGVtZW50J3MgYm9yZGVyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLXN0eWxlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLXN0eWxlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci1zdHlsZVwiPSBcImJvcmRlci1zdHlsZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLXRvcCBzaG9ydGhhbmQgQ1NTIHByb3BlcnR5IHNldHMgYWxsIHRoZSBwcm9wZXJ0aWVzIG9mIGFuIGVsZW1lbnQncyB0b3AgYm9yZGVyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLXRvcCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci10b3BcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLXRvcFwiPSBcImJvcmRlci10b3BcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci10b3AtY29sb3IgQ1NTIHByb3BlcnR5IHNldHMgdGhlIGNvbG9yIG9mIGFuIGVsZW1lbnQncyB0b3AgYm9yZGVyLiBJdCBjYW4gYWxzbyBiZSBzZXQgd2l0aCB0aGUgc2hvcnRoYW5kIENTUyBwcm9wZXJ0aWVzIGJvcmRlci1jb2xvciBvciBib3JkZXItdG9wLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLXRvcC1jb2xvciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci10b3AtY29sb3JcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLXRvcC1jb2xvclwiPSBcImJvcmRlci10b3AtY29sb3JcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci10b3AtbGVmdC1yYWRpdXMgQ1NTIHByb3BlcnR5IHJvdW5kcyB0aGUgdG9wLWxlZnQgY29ybmVyIG9mIGFuIGVsZW1lbnQgYnkgc3BlY2lmeWluZyB0aGUgcmFkaXVzIChvciB0aGUgcmFkaXVzIG9mIHRoZSBzZW1pLW1ham9yIGFuZCBzZW1pLW1pbm9yIGF4ZXMpIG9mIHRoZSBlbGxpcHNlIGRlZmluaW5nIHRoZSBjdXJ2YXR1cmUgb2YgdGhlIGNvcm5lci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci10b3AtbGVmdC1yYWRpdXMgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItdG9wLWxlZnQtcmFkaXVzXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci10b3AtbGVmdC1yYWRpdXNcIj0gXCJib3JkZXItdG9wLWxlZnQtcmFkaXVzXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyBDU1MgcHJvcGVydHkgcm91bmRzIHRoZSB0b3AtcmlnaHQgY29ybmVyIG9mIGFuIGVsZW1lbnQgYnkgc3BlY2lmeWluZyB0aGUgcmFkaXVzIChvciB0aGUgcmFkaXVzIG9mIHRoZSBzZW1pLW1ham9yIGFuZCBzZW1pLW1pbm9yIGF4ZXMpIG9mIHRoZSBlbGxpcHNlIGRlZmluaW5nIHRoZSBjdXJ2YXR1cmUgb2YgdGhlIGNvcm5lci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci10b3AtcmlnaHQtcmFkaXVzIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXNcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLXRvcC1yaWdodC1yYWRpdXNcIj0gXCJib3JkZXItdG9wLXJpZ2h0LXJhZGl1c1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLXRvcC1zdHlsZSBDU1MgcHJvcGVydHkgc2V0cyB0aGUgbGluZSBzdHlsZSBvZiBhbiBlbGVtZW50J3MgdG9wIGJvcmRlci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci10b3Atc3R5bGUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItdG9wLXN0eWxlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJvcmRlci10b3Atc3R5bGVcIj0gXCJib3JkZXItdG9wLXN0eWxlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItdG9wLXdpZHRoIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSB3aWR0aCBvZiB0aGUgdG9wIGJvcmRlciBvZiBhbiBlbGVtZW50LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLXRvcC13aWR0aCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci10b3Atd2lkdGhcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLXRvcC13aWR0aFwiPSBcImJvcmRlci10b3Atd2lkdGhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci13aWR0aCBzaG9ydGhhbmQgQ1NTIHByb3BlcnR5IHNldHMgdGhlIHdpZHRoIG9mIGFuIGVsZW1lbnQncyBib3JkZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItd2lkdGggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3JkZXItd2lkdGhcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLXdpZHRoXCI9IFwiYm9yZGVyLXdpZHRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3R0b20gQ1NTIHByb3BlcnR5IHBhcnRpY2lwYXRlcyBpbiBzZXR0aW5nIHRoZSB2ZXJ0aWNhbCBwb3NpdGlvbiBvZiBhIHBvc2l0aW9uZWQgZWxlbWVudC4gSXQgaGFzIG5vIGVmZmVjdCBvbiBub24tcG9zaXRpb25lZCBlbGVtZW50cy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvdHRvbSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvdHRvbVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBib3R0b209IFwiYm90dG9tXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3gtc2hhZG93IENTUyBwcm9wZXJ0eSBhZGRzIHNoYWRvdyBlZmZlY3RzIGFyb3VuZCBhbiBlbGVtZW50J3MgZnJhbWUuIFlvdSBjYW4gc2V0IG11bHRpcGxlIGVmZmVjdHMgc2VwYXJhdGVkIGJ5IGNvbW1hcy4gQSBib3ggc2hhZG93IGlzIGRlc2NyaWJlZCBieSBYIGFuZCBZIG9mZnNldHMgcmVsYXRpdmUgdG8gdGhlIGVsZW1lbnQsIGJsdXIgYW5kIHNwcmVhZCByYWRpdXMsIGFuZCBjb2xvci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JveC1zaGFkb3cgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3gtc2hhZG93XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJveC1zaGFkb3dcIj0gXCJib3gtc2hhZG93XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3gtc2l6aW5nIENTUyBwcm9wZXJ0eSBzZXRzIGhvdyB0aGUgdG90YWwgd2lkdGggYW5kIGhlaWdodCBvZiBhbiBlbGVtZW50IGlzIGNhbGN1bGF0ZWQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3gtc2l6aW5nIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym94LXNpemluZ1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJib3gtc2l6aW5nXCI9IFwiYm94LXNpemluZ1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYnJlYWstYWZ0ZXIgQ1NTIHByb3BlcnR5IHNldHMgaG93IHBhZ2UsIGNvbHVtbiwgb3IgcmVnaW9uIGJyZWFrcyBzaG91bGQgYmVoYXZlIGFmdGVyIGEgZ2VuZXJhdGVkIGJveC4gSWYgdGhlcmUgaXMgbm8gZ2VuZXJhdGVkIGJveCwgdGhlIHByb3BlcnR5IGlzIGlnbm9yZWQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9icmVhay1hZnRlciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJyZWFrLWFmdGVyXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJyZWFrLWFmdGVyXCI9IFwiYnJlYWstYWZ0ZXJcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJyZWFrLWJlZm9yZSBDU1MgcHJvcGVydHkgc2V0cyBob3cgcGFnZSwgY29sdW1uLCBvciByZWdpb24gYnJlYWtzIHNob3VsZCBiZWhhdmUgYmVmb3JlIGEgZ2VuZXJhdGVkIGJveC4gSWYgdGhlcmUgaXMgbm8gZ2VuZXJhdGVkIGJveCwgdGhlIHByb3BlcnR5IGlzIGlnbm9yZWQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9icmVhay1iZWZvcmUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1icmVhay1iZWZvcmVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiYnJlYWstYmVmb3JlXCI9IFwiYnJlYWstYmVmb3JlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBicmVhay1pbnNpZGUgQ1NTIHByb3BlcnR5IHNldHMgaG93IHBhZ2UsIGNvbHVtbiwgb3IgcmVnaW9uIGJyZWFrcyBzaG91bGQgYmVoYXZlIGluc2lkZSBhIGdlbmVyYXRlZCBib3guIElmIHRoZXJlIGlzIG5vIGdlbmVyYXRlZCBib3gsIHRoZSBwcm9wZXJ0eSBpcyBpZ25vcmVkLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYnJlYWstaW5zaWRlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YnJlYWstaW5zaWRlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJyZWFrLWluc2lkZVwiPSBcImJyZWFrLWluc2lkZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImJ1ZmZlcmVkLXJlbmRlcmluZ1wiPSBcImJ1ZmZlcmVkLXJlbmRlcmluZ1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY2FwdGlvbi1zaWRlIENTUyBwcm9wZXJ0eSBwdXRzIHRoZSBjb250ZW50IG9mIGEgdGFibGUncyAmbHQ7Y2FwdGlvbiZndDsgb24gdGhlIHNwZWNpZmllZCBzaWRlLiBUaGUgdmFsdWVzIGFyZSByZWxhdGl2ZSB0byB0aGUgd3JpdGluZy1tb2RlIG9mIHRoZSB0YWJsZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NhcHRpb24tc2lkZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNhcHRpb24tc2lkZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJjYXB0aW9uLXNpZGVcIj0gXCJjYXB0aW9uLXNpZGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNhcmV0LWNvbG9yIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBjb2xvciBvZiB0aGUgaW5zZXJ0aW9uIGNhcmV0LCB0aGUgdmlzaWJsZSBtYXJrZXIgd2hlcmUgdGhlIG5leHQgY2hhcmFjdGVyIHR5cGVkIHdpbGwgYmUgaW5zZXJ0ZWQuIFRoaXMgaXMgc29tZXRpbWVzIHJlZmVycmVkIHRvIGFzIHRoZSB0ZXh0IGlucHV0IGN1cnNvci4gVGhlIGNhcmV0IGFwcGVhcnMgaW4gZWxlbWVudHMgc3VjaCBhcyAmbHQ7aW5wdXQmZ3Q7IG9yIHRob3NlIHdpdGggdGhlIGNvbnRlbnRlZGl0YWJsZSBhdHRyaWJ1dGUuIFRoZSBjYXJldCBpcyB0eXBpY2FsbHkgYSB0aGluIHZlcnRpY2FsIGxpbmUgdGhhdCBmbGFzaGVzIHRvIGhlbHAgbWFrZSBpdCBtb3JlIG5vdGljZWFibGUuIEJ5IGRlZmF1bHQsIGl0IGlzIGJsYWNrLCBidXQgaXRzIGNvbG9yIGNhbiBiZSBhbHRlcmVkIHdpdGggdGhpcyBwcm9wZXJ0eS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NhcmV0LWNvbG9yIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y2FyZXQtY29sb3JcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiY2FyZXQtY29sb3JcIj0gXCJjYXJldC1jb2xvclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY2xlYXIgQ1NTIHByb3BlcnR5IHNldHMgd2hldGhlciBhbiBlbGVtZW50IG11c3QgYmUgbW92ZWQgYmVsb3cgKGNsZWFyZWQpIGZsb2F0aW5nIGVsZW1lbnRzIHRoYXQgcHJlY2VkZSBpdC4gVGhlIGNsZWFyIHByb3BlcnR5IGFwcGxpZXMgdG8gZmxvYXRpbmcgYW5kIG5vbi1mbG9hdGluZyBlbGVtZW50cy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NsZWFyIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y2xlYXJcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xlYXI9IFwiY2xlYXJcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNsaXAgQ1NTIHByb3BlcnR5IGRlZmluZXMgYSB2aXNpYmxlIHBvcnRpb24gb2YgYW4gZWxlbWVudC4gVGhlIGNsaXAgcHJvcGVydHkgYXBwbGllcyBvbmx5IHRvIGFic29sdXRlbHkgcG9zaXRpb25lZCBlbGVtZW50cyDigJQgdGhhdCBpcywgZWxlbWVudHMgd2l0aCBwb3NpdGlvbjphYnNvbHV0ZSBvciBwb3NpdGlvbjpmaXhlZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NsaXAgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1jbGlwXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsaXA9IFwiY2xpcFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY2xpcC1wYXRoIENTUyBwcm9wZXJ0eSBjcmVhdGVzIGEgY2xpcHBpbmcgcmVnaW9uIHRoYXQgc2V0cyB3aGF0IHBhcnQgb2YgYW4gZWxlbWVudCBzaG91bGQgYmUgc2hvd24uIFBhcnRzIHRoYXQgYXJlIGluc2lkZSB0aGUgcmVnaW9uIGFyZSBzaG93biwgd2hpbGUgdGhvc2Ugb3V0c2lkZSBhcmUgaGlkZGVuLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvY2xpcC1wYXRoIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y2xpcC1wYXRoXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImNsaXAtcGF0aFwiPSBcImNsaXAtcGF0aFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY2xpcC1ydWxlIGF0dHJpYnV0ZSBvbmx5IGFwcGxpZXMgdG8gZ3JhcGhpY3MgZWxlbWVudHMgdGhhdCBhcmUgY29udGFpbmVkIHdpdGhpbiBhICZsdDtjbGlwUGF0aCZndDsgZWxlbWVudC4gVGhlIGNsaXAtcnVsZSBhdHRyaWJ1dGUgYmFzaWNhbGx5IHdvcmtzIGFzIHRoZSBmaWxsLXJ1bGUgYXR0cmlidXRlLCBleGNlcHQgdGhhdCBpdCBhcHBsaWVzIHRvICZsdDtjbGlwUGF0aCZndDsgZGVmaW5pdGlvbnMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NWRy9BdHRyaWJ1dGUvY2xpcC1ydWxlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y2xpcC1ydWxlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImNsaXAtcnVsZVwiPSBcImNsaXAtcnVsZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY29sb3IgQ1NTIHByb3BlcnR5IHNldHMgdGhlIGZvcmVncm91bmQgY29sb3IgdmFsdWUgb2YgYW4gZWxlbWVudCdzIHRleHQgYW5kIHRleHQgZGVjb3JhdGlvbnMsIGFuZCBzZXRzIHRoZSAmbHQ7Y3VycmVudGNvbG9yJmd0OyB2YWx1ZS4gY3VycmVudGNvbG9yIG1heSBiZSB1c2VkIGFzIGFuIGluZGlyZWN0IHZhbHVlIG9uIG90aGVyIHByb3BlcnRpZXMgYW5kIGlzIHRoZSBkZWZhdWx0IGZvciBvdGhlciBjb2xvciBwcm9wZXJ0aWVzLCBzdWNoIGFzIGJvcmRlci1jb2xvci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NvbG9yIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y29sb3JcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29sb3I9IFwiY29sb3JcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNvbG9yLWludGVycG9sYXRpb24gYXR0cmlidXRlIHNwZWNpZmllcyB0aGUgY29sb3Igc3BhY2UgZm9yIGdyYWRpZW50IGludGVycG9sYXRpb25zLCBjb2xvciBhbmltYXRpb25zLCBhbmQgYWxwaGEgY29tcG9zaXRpbmcuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NWRy9BdHRyaWJ1dGUvY29sb3ItaW50ZXJwb2xhdGlvbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNvbG9yLWludGVycG9sYXRpb25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiY29sb3ItaW50ZXJwb2xhdGlvblwiPSBcImNvbG9yLWludGVycG9sYXRpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycyBhdHRyaWJ1dGUgc3BlY2lmaWVzIHRoZSBjb2xvciBzcGFjZSBmb3IgaW1hZ2luZyBvcGVyYXRpb25zIHBlcmZvcm1lZCB2aWEgZmlsdGVyIGVmZmVjdHMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NWRy9BdHRyaWJ1dGUvY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImNvbG9yLWludGVycG9sYXRpb24tZmlsdGVyc1wiPSBcImNvbG9yLWludGVycG9sYXRpb24tZmlsdGVyc1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY29sb3ItcmVuZGVyaW5nIGF0dHJpYnV0ZSBwcm92aWRlcyBhIGhpbnQgdG8gdGhlIFNWRyB1c2VyIGFnZW50IGFib3V0IGhvdyB0byBvcHRpbWl6ZSBpdHMgY29sb3IgaW50ZXJwb2xhdGlvbiBhbmQgY29tcG9zaXRpbmcgb3BlcmF0aW9ucy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9jb2xvci1yZW5kZXJpbmcgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1jb2xvci1yZW5kZXJpbmdcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiY29sb3ItcmVuZGVyaW5nXCI9IFwiY29sb3ItcmVuZGVyaW5nXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBjb2xvci1zY2hlbWUgQ1NTIHByb3BlcnR5IGFsbG93cyBhbiBlbGVtZW50IHRvIGluZGljYXRlIHdoaWNoIGNvbG9yIHNjaGVtZXMgaXQgY2FuIGNvbWZvcnRhYmx5IGJlIHJlbmRlcmVkIGluLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvY29sb3Itc2NoZW1lIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y29sb3Itc2NoZW1lXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImNvbG9yLXNjaGVtZVwiPSBcImNvbG9yLXNjaGVtZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY29sdW1uLWNvdW50IENTUyBwcm9wZXJ0eSBicmVha3MgYW4gZWxlbWVudCdzIGNvbnRlbnQgaW50byB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBjb2x1bW5zLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvY29sdW1uLWNvdW50IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y29sdW1uLWNvdW50XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImNvbHVtbi1jb3VudFwiPSBcImNvbHVtbi1jb3VudFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY29sdW1uLWZpbGwgQ1NTIHByb3BlcnR5IGNvbnRyb2xzIGhvdyBhbiBlbGVtZW50J3MgY29udGVudHMgYXJlIGJhbGFuY2VkIHdoZW4gYnJva2VuIGludG8gY29sdW1ucy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NvbHVtbi1maWxsIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y29sdW1uLWZpbGxcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiY29sdW1uLWZpbGxcIj0gXCJjb2x1bW4tZmlsbFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY29sdW1uLWdhcCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgc2l6ZSBvZiB0aGUgZ2FwIChndXR0ZXIpIGJldHdlZW4gYW4gZWxlbWVudCdzIGNvbHVtbnMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jb2x1bW4tZ2FwIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y29sdW1uLWdhcFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJjb2x1bW4tZ2FwXCI9IFwiY29sdW1uLWdhcFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY29sdW1uLXJ1bGUmbmJzcDtzaG9ydGhhbmQgQ1NTIHByb3BlcnR5IHNldHMgdGhlIHdpZHRoLCBzdHlsZSwgYW5kIGNvbG9yIG9mIHRoZSBsaW5lIGRyYXduIGJldHdlZW4gY29sdW1ucyBpbiBhIG11bHRpLWNvbHVtbiBsYXlvdXQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jb2x1bW4tcnVsZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNvbHVtbi1ydWxlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImNvbHVtbi1ydWxlXCI9IFwiY29sdW1uLXJ1bGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNvbHVtbi1ydWxlLWNvbG9yIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBjb2xvciBvZiB0aGUgbGluZSBkcmF3biBiZXR3ZWVuIGNvbHVtbnMgaW4gYSBtdWx0aS1jb2x1bW4gbGF5b3V0LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvY29sdW1uLXJ1bGUtY29sb3IgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1jb2x1bW4tcnVsZS1jb2xvclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJjb2x1bW4tcnVsZS1jb2xvclwiPSBcImNvbHVtbi1ydWxlLWNvbG9yXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBjb2x1bW4tcnVsZS1zdHlsZSBDU1MgcHJvcGVydHkgc2V0cyB0aGUgc3R5bGUgb2YgdGhlIGxpbmUgZHJhd24gYmV0d2VlbiBjb2x1bW5zIGluIGEgbXVsdGktY29sdW1uIGxheW91dC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NvbHVtbi1ydWxlLXN0eWxlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y29sdW1uLXJ1bGUtc3R5bGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiY29sdW1uLXJ1bGUtc3R5bGVcIj0gXCJjb2x1bW4tcnVsZS1zdHlsZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY29sdW1uLXJ1bGUtd2lkdGggQ1NTIHByb3BlcnR5IHNldHMgdGhlIHdpZHRoIG9mIHRoZSBsaW5lIGRyYXduIGJldHdlZW4gY29sdW1ucyBpbiBhIG11bHRpLWNvbHVtbiBsYXlvdXQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jb2x1bW4tcnVsZS13aWR0aCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNvbHVtbi1ydWxlLXdpZHRoXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImNvbHVtbi1ydWxlLXdpZHRoXCI9IFwiY29sdW1uLXJ1bGUtd2lkdGhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNvbHVtbi1zcGFuIENTUyBwcm9wZXJ0eSBtYWtlcyBpdCBwb3NzaWJsZSBmb3IgYW4gZWxlbWVudCB0byBzcGFuIGFjcm9zcyBhbGwgY29sdW1ucyB3aGVuIGl0cyB2YWx1ZSBpcyBzZXQgdG8gYWxsLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvY29sdW1uLXNwYW4gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1jb2x1bW4tc3BhblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJjb2x1bW4tc3BhblwiPSBcImNvbHVtbi1zcGFuXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBjb2x1bW4td2lkdGggQ1NTIHByb3BlcnR5IHNldHMgdGhlIGlkZWFsIGNvbHVtbiB3aWR0aCBpbiBhIG11bHRpLWNvbHVtbiBsYXlvdXQuIFRoZSBjb250YWluZXIgd2lsbCBoYXZlIGFzIG1hbnkgY29sdW1ucyBhcyBjYW4gZml0IHdpdGhvdXQgYW55IG9mIHRoZW0gaGF2aW5nIGEgd2lkdGggbGVzcyB0aGFuIHRoZSBjb2x1bW4td2lkdGggdmFsdWUuIElmIHRoZSB3aWR0aCBvZiB0aGUgY29udGFpbmVyIGlzIG5hcnJvd2VyIHRoYW4gdGhlIHNwZWNpZmllZCB2YWx1ZSwgdGhlIHNpbmdsZSBjb2x1bW4ncyB3aWR0aCB3aWxsIGJlIHNtYWxsZXIgdGhhbiB0aGUgZGVjbGFyZWQgY29sdW1uIHdpZHRoLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvY29sdW1uLXdpZHRoIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y29sdW1uLXdpZHRoXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImNvbHVtbi13aWR0aFwiPSBcImNvbHVtbi13aWR0aFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY29sdW1ucyBDU1Mgc2hvcnRoYW5kIHByb3BlcnR5IHNldHMgdGhlIG51bWJlciBvZiBjb2x1bW5zIHRvIHVzZSB3aGVuIGRyYXdpbmcgYW4gZWxlbWVudCdzIGNvbnRlbnRzLCBhcyB3ZWxsIGFzIHRob3NlIGNvbHVtbnMnIHdpZHRocy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NvbHVtbnMgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1jb2x1bW5zXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbHVtbnM9IFwiY29sdW1uc1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY29udGFpbiBDU1MgcHJvcGVydHkgYWxsb3dzIGFuIGF1dGhvciB0byBpbmRpY2F0ZSB0aGF0IGFuIGVsZW1lbnQgYW5kIGl0cyBjb250ZW50cyBhcmUsIGFzIG11Y2ggYXMgcG9zc2libGUsIGluZGVwZW5kZW50IG9mIHRoZSByZXN0IG9mIHRoZSBkb2N1bWVudCB0cmVlLiBUaGlzIGFsbG93cyB0aGUgYnJvd3NlciB0byByZWNhbGN1bGF0ZSBsYXlvdXQsIHN0eWxlLCBwYWludCwgc2l6ZSwgb3IgYW55IGNvbWJpbmF0aW9uIG9mIHRoZW0gZm9yIGEgbGltaXRlZCBhcmVhIG9mIHRoZSBET00gYW5kIG5vdCB0aGUgZW50aXJlIHBhZ2UsIGxlYWRpbmcgdG8gb2J2aW91cyBwZXJmb3JtYW5jZSBiZW5lZml0cy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NvbnRhaW4gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1jb250YWluXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnRhaW49IFwiY29udGFpblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY29udGFpbi1pbnRyaW5zaWMtc2l6ZSBDU1MgcHJvcGVydHkgY29udHJvbHMgdGhlIG5hdHVyYWwgc2l6ZSBvZiBhbiBlbGVtZW50IHNwZWNpZmllZCBieSBjb250ZW50LXZpc2liaWxpdHkuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jb250YWluLWludHJpbnNpYy1zaXplIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y29udGFpbi1pbnRyaW5zaWMtc2l6ZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJjb250YWluLWludHJpbnNpYy1zaXplXCI9IFwiY29udGFpbi1pbnRyaW5zaWMtc2l6ZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY29udGVudCBDU1MgcHJvcGVydHkgcmVwbGFjZXMgYW4gZWxlbWVudCB3aXRoIGEgZ2VuZXJhdGVkIHZhbHVlLiBPYmplY3RzIGluc2VydGVkIHVzaW5nIHRoZSBjb250ZW50IHByb3BlcnR5IGFyZSBhbm9ueW1vdXMgcmVwbGFjZWQgZWxlbWVudHMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jb250ZW50IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y29udGVudFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb250ZW50PSBcImNvbnRlbnRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNvbnRlbnQtdmlzaWJpbGl0eSBDU1MgcHJvcGVydHkgY29udHJvbHMgd2hldGhlciBvciBub3QgYW4gZWxlbWVudCByZW5kZXJzIGl0cyBjb250ZW50cyBhdCBhbGwsIGFsb25nIHdpdGggZm9yY2luZyBhIHN0cm9uZyBzZXQgb2YgY29udGFpbm1lbnRzLCBhbGxvd2luZyB1c2VyIGFnZW50cyB0byBwb3RlbnRpYWxseSBvbWl0IGxhcmdlIHN3YXRoZXMgb2YgbGF5b3V0IGFuZCByZW5kZXJpbmcgd29yayB1bnRpbCBpdCBiZWNvbWVzIG5lZWRlZC4gQmFzaWNhbGx5IGl0IGVuYWJsZXMgdGhlIHVzZXIgYWdlbnQgdG8gc2tpcCBhbiBlbGVtZW50J3MgcmVuZGVyaW5nIHdvcmsgKGluY2x1ZGluZyBsYXlvdXQgYW5kIHBhaW50aW5nKSB1bnRpbCBpdCBpcyBuZWVkZWQg4oCUJm5ic3A7d2hpY2ggbWFrZXMgdGhlIGluaXRpYWwgcGFnZSBsb2FkIG11Y2ggZmFzdGVyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvY29udGVudC12aXNpYmlsaXR5IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y29udGVudC12aXNpYmlsaXR5XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImNvbnRlbnQtdmlzaWJpbGl0eVwiPSBcImNvbnRlbnQtdmlzaWJpbGl0eVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY291bnRlci1pbmNyZW1lbnQgQ1NTIHByb3BlcnR5IGluY3JlYXNlcyBvciBkZWNyZWFzZXMgdGhlIHZhbHVlIG9mIGEgQ1NTIGNvdW50ZXIgYnkgYSBnaXZlbiB2YWx1ZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NvdW50ZXItaW5jcmVtZW50IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y291bnRlci1pbmNyZW1lbnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiY291bnRlci1pbmNyZW1lbnRcIj0gXCJjb3VudGVyLWluY3JlbWVudFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY291bnRlci1yZXNldCBDU1MgcHJvcGVydHkgcmVzZXRzIGEgQ1NTIGNvdW50ZXIgdG8gYSBnaXZlbiB2YWx1ZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NvdW50ZXItcmVzZXQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1jb3VudGVyLXJlc2V0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImNvdW50ZXItcmVzZXRcIj0gXCJjb3VudGVyLXJlc2V0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBjb3VudGVyLXNldCBDU1MgcHJvcGVydHkgc2V0cyBhIENTUyBjb3VudGVyIHRvIGEgZ2l2ZW4gdmFsdWUuIEl0IG1hbmlwdWxhdGVzIHRoZSB2YWx1ZSBvZiBleGlzdGluZyBjb3VudGVycywgYW5kIHdpbGwmbmJzcDtvbmx5IGNyZWF0ZSBuZXcgY291bnRlcnMgaWYgdGhlcmUgaXNuJ3QgYWxyZWFkeSBhIGNvdW50ZXIgb2YgdGhlIGdpdmVuIG5hbWUgb24gdGhlIGVsZW1lbnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jb3VudGVyLXNldCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNvdW50ZXItc2V0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImNvdW50ZXItc2V0XCI9IFwiY291bnRlci1zZXRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGN1cnNvciBDU1MgcHJvcGVydHkgc2V0cyB0aGUgdHlwZSBvZiBtb3VzZSBjdXJzb3IsIGlmIGFueSwgdG8gc2hvdyB3aGVuIHRoZSBtb3VzZSBwb2ludGVyIGlzIG92ZXIgYW4gZWxlbWVudC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2N1cnNvciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWN1cnNvclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBjdXJzb3I9IFwiY3Vyc29yXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBjeCBhdHRyaWJ1dGUgZGVmaW5lIHRoZSB4LWF4aXMgY29vcmRpbmF0ZSBvZiBhIGNlbnRlciBwb2ludC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9jeCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWN4XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGN4PSBcImN4XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBjeSBhdHRyaWJ1dGUgZGVmaW5lIHRoZSB5LWF4aXMgY29vcmRpbmF0ZSBvZiBhIGNlbnRlciBwb2ludC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9jeSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWN5XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGN5PSBcImN5XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBkIGF0dHJpYnV0ZSBkZWZpbmVzIGEgcGF0aCB0byBiZSBkcmF3bi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9kIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9ZFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBkPSBcImRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJkZXNjZW50LW92ZXJyaWRlXCI9IFwiZGVzY2VudC1vdmVycmlkZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZGlyZWN0aW9uIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBkaXJlY3Rpb24gb2YgdGV4dCwgdGFibGUgY29sdW1ucywgYW5kIGhvcml6b250YWwgb3ZlcmZsb3cuIFVzZSBydGwgZm9yIGxhbmd1YWdlcyB3cml0dGVuIGZyb20gcmlnaHQgdG8gbGVmdCAobGlrZSBIZWJyZXcgb3IgQXJhYmljKSwgYW5kIGx0ciBmb3IgdGhvc2Ugd3JpdHRlbiBmcm9tIGxlZnQgdG8gcmlnaHQgKGxpa2UgRW5nbGlzaCBhbmQgbW9zdCBvdGhlciBsYW5ndWFnZXMpLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZGlyZWN0aW9uIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9ZGlyZWN0aW9uXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRpcmVjdGlvbj0gXCJkaXJlY3Rpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGRpc3BsYXkgQ1NTIHByb3BlcnR5IHNldHMgd2hldGhlciBhbiBlbGVtZW50IGlzIHRyZWF0ZWQgYXMgYSBibG9jayBvciBpbmxpbmUgZWxlbWVudCBhbmQgdGhlIGxheW91dCB1c2VkIGZvciBpdHMgY2hpbGRyZW4sIHN1Y2ggYXMgZmxvdyBsYXlvdXQsIGdyaWQgb3IgZmxleC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2Rpc3BsYXkgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1kaXNwbGF5XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRpc3BsYXk9IFwiZGlzcGxheVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZG9taW5hbnQtYmFzZWxpbmUgYXR0cmlidXRlIHNwZWNpZmllcyB0aGUgZG9taW5hbnQgYmFzZWxpbmUsIHdoaWNoIGlzIHRoZSBiYXNlbGluZSB1c2VkIHRvIGFsaWduIHRoZSBib3jigJlzIHRleHQgYW5kIGlubGluZS1sZXZlbCBjb250ZW50cy4gSXQmbmJzcDthbHNvIGluZGljYXRlcyB0aGUgZGVmYXVsdCBhbGlnbm1lbnQgYmFzZWxpbmUgb2YgYW55IGJveGVzIHBhcnRpY2lwYXRpbmcgaW4gYmFzZWxpbmUgYWxpZ25tZW50IGluIHRoZSBib3jigJlzIGFsaWdubWVudCBjb250ZXh0LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL2RvbWluYW50LWJhc2VsaW5lIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9ZG9taW5hbnQtYmFzZWxpbmVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZG9taW5hbnQtYmFzZWxpbmVcIj0gXCJkb21pbmFudC1iYXNlbGluZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZW1wdHktY2VsbHMgQ1NTIHByb3BlcnR5IHNldHMgd2hldGhlciBib3JkZXJzIGFuZCBiYWNrZ3JvdW5kcyBhcHBlYXIgYXJvdW5kICZsdDt0YWJsZSZndDsgY2VsbHMgdGhhdCBoYXZlIG5vIHZpc2libGUgY29udGVudC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2VtcHR5LWNlbGxzIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9ZW1wdHktY2VsbHNcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZW1wdHktY2VsbHNcIj0gXCJlbXB0eS1jZWxsc1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZmlsbCBhdHRyaWJ1dGUgaGFzIHR3byBkaWZmZXJlbnQgbWVhbmluZ3MuJm5ic3A7Rm9yIHNoYXBlcyBhbmQgdGV4dCBpdCdzIGEgcHJlc2VudGF0aW9uIGF0dHJpYnV0ZSB0aGF0IGRlZmluZXMgdGhlIGNvbG9yIChvciBhbnkgU1ZHIHBhaW50IHNlcnZlcnMgbGlrZSBncmFkaWVudHMgb3IgcGF0dGVybnMpIHVzZWQgdG8gcGFpbnQgdGhlIGVsZW1lbnQ7IGZvciBhbmltYXRpb24gaXQgZGVmaW5lcyB0aGUgZmluYWwgc3RhdGUgb2YgdGhlIGFuaW1hdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9maWxsIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9ZmlsbFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBmaWxsPSBcImZpbGxcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZpbGwtb3BhY2l0eSBhdHRyaWJ1dGUgaXMgYSBwcmVzZW50YXRpb24gYXR0cmlidXRlIGRlZmluaW5nIHRoZSBvcGFjaXR5IG9mIHRoZSBwYWludCBzZXJ2ZXIgKGNvbG9yLCBncmFkaWVudCwgcGF0dGVybiwgZXRjKSBhcHBsaWVkIHRvIGEgc2hhcGUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NWRy9BdHRyaWJ1dGUvZmlsbC1vcGFjaXR5IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9ZmlsbC1vcGFjaXR5XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImZpbGwtb3BhY2l0eVwiPSBcImZpbGwtb3BhY2l0eVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZmlsbC1ydWxlIGF0dHJpYnV0ZSBpcyBhIHByZXNlbnRhdGlvbiBhdHRyaWJ1dGUgZGVmaW5pbmcgdGhlIGFsZ29yaXRobSB0byB1c2UgdG8gZGV0ZXJtaW5lIHRoZSBpbnNpZGUgcGFydCBvZiBhIHNoYXBlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL2ZpbGwtcnVsZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZpbGwtcnVsZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJmaWxsLXJ1bGVcIj0gXCJmaWxsLXJ1bGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZpbHRlciBDU1MgcHJvcGVydHkgYXBwbGllcyBncmFwaGljYWwgZWZmZWN0cyBsaWtlIGJsdXIgb3IgY29sb3Igc2hpZnQgdG8gYW4gZWxlbWVudC4gRmlsdGVycyBhcmUgY29tbW9ubHkgdXNlZCB0byBhZGp1c3QgdGhlIHJlbmRlcmluZyBvZiBpbWFnZXMsIGJhY2tncm91bmRzLCBhbmQgYm9yZGVycy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2ZpbHRlciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZpbHRlclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBmaWx0ZXI9IFwiZmlsdGVyXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBmbGV4IENTUyBzaG9ydGhhbmQgcHJvcGVydHkgc2V0cyBob3cgYSBmbGV4IGl0ZW0gd2lsbCBncm93IG9yIHNocmluayB0byBmaXQgdGhlIHNwYWNlIGF2YWlsYWJsZSBpbiBpdHMgZmxleCBjb250YWluZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mbGV4IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9ZmxleFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBmbGV4PSBcImZsZXhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZsZXgtYmFzaXMgQ1NTIHByb3BlcnR5IHNldHMgdGhlIGluaXRpYWwgbWFpbiBzaXplIG9mIGEgZmxleCBpdGVtLiBJdCBzZXRzIHRoZSBzaXplIG9mIHRoZSBjb250ZW50IGJveCB1bmxlc3Mgb3RoZXJ3aXNlIHNldCB3aXRoIGJveC1zaXppbmcuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mbGV4LWJhc2lzIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9ZmxleC1iYXNpc1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJmbGV4LWJhc2lzXCI9IFwiZmxleC1iYXNpc1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZmxleC1kaXJlY3Rpb24gQ1NTIHByb3BlcnR5IHNldHMgaG93IGZsZXggaXRlbXMgYXJlIHBsYWNlZCBpbiB0aGUgZmxleCBjb250YWluZXIgZGVmaW5pbmcgdGhlIG1haW4gYXhpcyBhbmQgdGhlIGRpcmVjdGlvbiAobm9ybWFsIG9yIHJldmVyc2VkKS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2ZsZXgtZGlyZWN0aW9uIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9ZmxleC1kaXJlY3Rpb25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZmxleC1kaXJlY3Rpb25cIj0gXCJmbGV4LWRpcmVjdGlvblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZmxleC1mbG93IENTUyBzaG9ydGhhbmQgcHJvcGVydHkgc3BlY2lmaWVzIHRoZSBkaXJlY3Rpb24gb2YgYSBmbGV4IGNvbnRhaW5lciwgYXMgd2VsbCBhcyBpdHMgd3JhcHBpbmcgYmVoYXZpb3IuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mbGV4LWZsb3cgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1mbGV4LWZsb3dcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZmxleC1mbG93XCI9IFwiZmxleC1mbG93XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBmbGV4LWdyb3cgQ1NTJm5ic3A7cHJvcGVydHkgc2V0cyB0aGUgZmxleCBncm93IGZhY3RvciBvZiBhIGZsZXggaXRlbSdzIG1haW4gc2l6ZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2ZsZXgtZ3JvdyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZsZXgtZ3Jvd1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJmbGV4LWdyb3dcIj0gXCJmbGV4LWdyb3dcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZsZXgtc2hyaW5rIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBmbGV4IHNocmluayBmYWN0b3Igb2YgYSBmbGV4IGl0ZW0uIElmIHRoZSBzaXplIG9mIGFsbCBmbGV4IGl0ZW1zIGlzIGxhcmdlciB0aGFuIHRoZSBmbGV4IGNvbnRhaW5lciwgaXRlbXMgc2hyaW5rIHRvIGZpdCBhY2NvcmRpbmcgdG8gZmxleC1zaHJpbmsuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mbGV4LXNocmluayBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZsZXgtc2hyaW5rXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImZsZXgtc2hyaW5rXCI9IFwiZmxleC1zaHJpbmtcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZsZXgtd3JhcCBDU1MgcHJvcGVydHkgc2V0cyB3aGV0aGVyIGZsZXggaXRlbXMgYXJlIGZvcmNlZCBvbnRvIG9uZSBsaW5lIG9yIGNhbiB3cmFwIG9udG8gbXVsdGlwbGUgbGluZXMuIElmIHdyYXBwaW5nIGlzIGFsbG93ZWQsIGl0IHNldHMgdGhlIGRpcmVjdGlvbiB0aGF0IGxpbmVzIGFyZSBzdGFja2VkLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZmxleC13cmFwIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9ZmxleC13cmFwXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImZsZXgtd3JhcFwiPSBcImZsZXgtd3JhcFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZmxvYXQgQ1NTIHByb3BlcnR5IHBsYWNlcyBhbiBlbGVtZW50IG9uIHRoZSBsZWZ0IG9yIHJpZ2h0IHNpZGUgb2YgaXRzIGNvbnRhaW5lciwgYWxsb3dpbmcgdGV4dCBhbmQgaW5saW5lIGVsZW1lbnRzIHRvIHdyYXAgYXJvdW5kIGl0LiBUaGUgZWxlbWVudCBpcyByZW1vdmVkIGZyb20gdGhlIG5vcm1hbCBmbG93IG9mIHRoZSBwYWdlLCB0aG91Z2ggc3RpbGwgcmVtYWluaW5nIGEgcGFydCBvZiB0aGUgZmxvdyAoaW4gY29udHJhc3QgdG8gYWJzb2x1dGUgcG9zaXRpb25pbmcpLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZmxvYXQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1mbG9hdFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBmbG9hdD0gXCJmbG9hdFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZmxvb2QtY29sb3IgYXR0cmlidXRlIGluZGljYXRlcyB3aGF0IGNvbG9yIHRvIHVzZSB0byBmbG9vZCB0aGUgY3VycmVudCBmaWx0ZXIgcHJpbWl0aXZlIHN1YnJlZ2lvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9mbG9vZC1jb2xvciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZsb29kLWNvbG9yXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImZsb29kLWNvbG9yXCI9IFwiZmxvb2QtY29sb3JcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZsb29kLW9wYWNpdHkgYXR0cmlidXRlIGluZGljYXRlcyB0aGUgb3BhY2l0eSB2YWx1ZSB0byB1c2UgYWNyb3NzIHRoZSBjdXJyZW50IGZpbHRlciBwcmltaXRpdmUgc3VicmVnaW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL2Zsb29kLW9wYWNpdHkgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1mbG9vZC1vcGFjaXR5XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImZsb29kLW9wYWNpdHlcIj0gXCJmbG9vZC1vcGFjaXR5XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBmb250IENTUyBzaG9ydGhhbmQgcHJvcGVydHkgc2V0cyBhbGwgdGhlIGRpZmZlcmVudCBwcm9wZXJ0aWVzIG9mIGFuIGVsZW1lbnQncyBmb250LiBBbHRlcm5hdGl2ZWx5LCBpdCBzZXRzIGFuIGVsZW1lbnQncyBmb250IHRvIGEgc3lzdGVtIGZvbnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mb250IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Zm9udFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBmb250PSBcImZvbnRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJmb250LWRpc3BsYXlcIj0gXCJmb250LWRpc3BsYXlcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZvbnQtZmFtaWx5IENTUyBwcm9wZXJ0eSBzcGVjaWZpZXMgYSBwcmlvcml0aXplZCBsaXN0IG9mIG9uZSBvciBtb3JlIGZvbnQgZmFtaWx5IG5hbWVzIGFuZC9vciBnZW5lcmljIGZhbWlseSBuYW1lcyBmb3IgdGhlIHNlbGVjdGVkIGVsZW1lbnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mb250LWZhbWlseSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZvbnQtZmFtaWx5XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImZvbnQtZmFtaWx5XCI9IFwiZm9udC1mYW1pbHlcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBDU1MgcHJvcGVydHkgY29udHJvbHMgYWR2YW5jZWQgdHlwb2dyYXBoaWMgZmVhdHVyZXMgaW4gT3BlblR5cGUgZm9udHMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mb250LWZlYXR1cmUtc2V0dGluZ3MgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1mb250LWZlYXR1cmUtc2V0dGluZ3NcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZm9udC1mZWF0dXJlLXNldHRpbmdzXCI9IFwiZm9udC1mZWF0dXJlLXNldHRpbmdzXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBmb250LWtlcm5pbmcgQ1NTIHByb3BlcnR5IHNldHMgdGhlIHVzZSBvZiB0aGUga2VybmluZyBpbmZvcm1hdGlvbiBzdG9yZWQgaW4gYSBmb250LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZm9udC1rZXJuaW5nIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Zm9udC1rZXJuaW5nXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImZvbnQta2VybmluZ1wiPSBcImZvbnQta2VybmluZ1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZm9udC1vcHRpY2FsLXNpemluZyBDU1MgcHJvcGVydHkgc2V0cyB3aGV0aGVyIHRleHQgcmVuZGVyaW5nIGlzIG9wdGltaXplZCBmb3Igdmlld2luZyBhdCBkaWZmZXJlbnQgc2l6ZXMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mb250LW9wdGljYWwtc2l6aW5nIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Zm9udC1vcHRpY2FsLXNpemluZ1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJmb250LW9wdGljYWwtc2l6aW5nXCI9IFwiZm9udC1vcHRpY2FsLXNpemluZ1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZm9udC1zaXplIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBzaXplIG9mIHRoZSBmb250LiBDaGFuZ2luZyB0aGUgZm9udCBzaXplIGFsc28gdXBkYXRlcyB0aGUgc2l6ZXMgb2YgdGhlIGZvbnQgc2l6ZS1yZWxhdGl2ZSAmbHQ7bGVuZ3RoJmd0OyB1bml0cywgc3VjaCBhcyZuYnNwO2VtLCBleCwgYW5kIHNvIGZvcnRoLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZm9udC1zaXplIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Zm9udC1zaXplXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImZvbnQtc2l6ZVwiPSBcImZvbnQtc2l6ZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZm9udC1zdHJldGNoIENTUyBwcm9wZXJ0eSBzZWxlY3RzIGEgbm9ybWFsLCBjb25kZW5zZWQsIG9yIGV4cGFuZGVkIGZhY2UgZnJvbSBhIGZvbnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mb250LXN0cmV0Y2ggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1mb250LXN0cmV0Y2hcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZm9udC1zdHJldGNoXCI9IFwiZm9udC1zdHJldGNoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBmb250LXN0eWxlIENTUyBwcm9wZXJ0eSBzZXRzIHdoZXRoZXIgYSBmb250IHNob3VsZCBiZSBzdHlsZWQgd2l0aCBhIG5vcm1hbCwgaXRhbGljLCBvciBvYmxpcXVlIGZhY2UgZnJvbSBpdHMgZm9udC1mYW1pbHkuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mb250LXN0eWxlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Zm9udC1zdHlsZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJmb250LXN0eWxlXCI9IFwiZm9udC1zdHlsZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZm9udC12YXJpYW50IENTUyBzaG9ydGhhbmQgcHJvcGVydHkgYWxsb3dzIHlvdSB0byBzZXQgYWxsIHRoZSBmb250IHZhcmlhbnRzIGZvciBhIGZvbnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mb250LXZhcmlhbnQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1mb250LXZhcmlhbnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZm9udC12YXJpYW50XCI9IFwiZm9udC12YXJpYW50XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBmb250LXZhcmlhbnQtY2FwcyBDU1MgcHJvcGVydHkgY29udHJvbHMgdGhlIHVzZSBvZiBhbHRlcm5hdGUgZ2x5cGhzIGZvciBjYXBpdGFsIGxldHRlcnMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mb250LXZhcmlhbnQtY2FwcyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZvbnQtdmFyaWFudC1jYXBzXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImZvbnQtdmFyaWFudC1jYXBzXCI9IFwiZm9udC12YXJpYW50LWNhcHNcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZvbnQtdmFyaWFudC1lYXN0LWFzaWFuIENTUyBwcm9wZXJ0eSBjb250cm9scyB0aGUgdXNlIG9mIGFsdGVybmF0ZSBnbHlwaHMgZm9yIEVhc3QgQXNpYW4gc2NyaXB0cywgbGlrZSBKYXBhbmVzZSBhbmQgQ2hpbmVzZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2ZvbnQtdmFyaWFudC1lYXN0LWFzaWFuIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Zm9udC12YXJpYW50LWVhc3QtYXNpYW5cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZm9udC12YXJpYW50LWVhc3QtYXNpYW5cIj0gXCJmb250LXZhcmlhbnQtZWFzdC1hc2lhblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZm9udC12YXJpYW50LWxpZ2F0dXJlcyBDU1MgcHJvcGVydHkgY29udHJvbHMgd2hpY2ggbGlnYXR1cmVzIGFuZCBjb250ZXh0dWFsIGZvcm1zIGFyZSB1c2VkIGluIHRleHR1YWwgY29udGVudCBvZiB0aGUgZWxlbWVudHMgaXQgYXBwbGllcyB0by4gVGhpcyBsZWFkcyB0byBtb3JlIGhhcm1vbml6ZWQgZm9ybXMgaW4gdGhlIHJlc3VsdGluZyB0ZXh0LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZm9udC12YXJpYW50LWxpZ2F0dXJlcyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZvbnQtdmFyaWFudC1saWdhdHVyZXNcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZm9udC12YXJpYW50LWxpZ2F0dXJlc1wiPSBcImZvbnQtdmFyaWFudC1saWdhdHVyZXNcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZvbnQtdmFyaWFudC1udW1lcmljIENTUyBwcm9wZXJ0eSBjb250cm9scyB0aGUgdXNhZ2Ugb2YgYWx0ZXJuYXRlIGdseXBocyBmb3IgbnVtYmVycywgZnJhY3Rpb25zLCBhbmQgb3JkaW5hbCBtYXJrZXJzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZm9udC12YXJpYW50LW51bWVyaWMgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1mb250LXZhcmlhbnQtbnVtZXJpY1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJmb250LXZhcmlhbnQtbnVtZXJpY1wiPSBcImZvbnQtdmFyaWFudC1udW1lcmljXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBmb250LXZhcmlhdGlvbi1zZXR0aW5ncyBDU1MgcHJvcGVydHkgcHJvdmlkZXMgbG93LWxldmVsIGNvbnRyb2wgb3ZlciB2YXJpYWJsZSBmb250IGNoYXJhY3RlcmlzdGljcywgYnkgc3BlY2lmeWluZyB0aGUgZm91ciBsZXR0ZXIgYXhpcyBuYW1lcyBvZiB0aGUgY2hhcmFjdGVyaXN0aWNzIHlvdSB3YW50IHRvIHZhcnksIGFsb25nIHdpdGggdGhlaXIgdmFsdWVzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZm9udC12YXJpYXRpb24tc2V0dGluZ3MgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1mb250LXZhcmlhdGlvbi1zZXR0aW5nc1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJmb250LXZhcmlhdGlvbi1zZXR0aW5nc1wiPSBcImZvbnQtdmFyaWF0aW9uLXNldHRpbmdzXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBmb250LXdlaWdodCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgd2VpZ2h0IChvciBib2xkbmVzcykgb2YgdGhlIGZvbnQuIFRoZSB3ZWlnaHRzIGF2YWlsYWJsZSBkZXBlbmQgb24gdGhlIGZvbnQtZmFtaWx5IHRoYXQgaXMgY3VycmVudGx5IHNldC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2ZvbnQtd2VpZ2h0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Zm9udC13ZWlnaHRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZm9udC13ZWlnaHRcIj0gXCJmb250LXdlaWdodFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZm9yY2VkLWNvbG9yLWFkanVzdCBDU1MgcHJvcGVydHkgYWxsb3dzIGF1dGhvcnMgdG8gb3B0IGNlcnRhaW4gZWxlbWVudHMgb3V0IG9mIGZvcmNlZCBjb2xvcnMgbW9kZS4gVGhpcyB0aGVuIHJlc3RvcmVzIHRoZSBjb250cm9sIG9mIHRob3NlIHZhbHVlcyB0byBDU1MuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mb3JjZWQtY29sb3ItYWRqdXN0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Zm9yY2VkLWNvbG9yLWFkanVzdFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJmb3JjZWQtY29sb3ItYWRqdXN0XCI9IFwiZm9yY2VkLWNvbG9yLWFkanVzdFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZ2FwIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBnYXBzIChndXR0ZXJzKSBiZXR3ZWVuIHJvd3MgYW5kIGNvbHVtbnMuIEl0IGlzIGEgc2hvcnRoYW5kIGZvciByb3ctZ2FwIGFuZCBjb2x1bW4tZ2FwLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZ2FwIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Z2FwXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdhcD0gXCJnYXBcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGdyaWQgQ1NTIHByb3BlcnR5IGlzIGEgc2hvcnRoYW5kIHByb3BlcnR5IHRoYXQgc2V0cyBhbGwgb2YgdGhlIGV4cGxpY2l0IGFuZCBpbXBsaWNpdCBncmlkIHByb3BlcnRpZXMgaW4gYSBzaW5nbGUgZGVjbGFyYXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ncmlkIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Z3JpZFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBncmlkPSBcImdyaWRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGdyaWQtYXJlYSBDU1Mgc2hvcnRoYW5kIHByb3BlcnR5IHNwZWNpZmllcyBhIGdyaWQgaXRlbeKAmXMgc2l6ZSBhbmQgbG9jYXRpb24gd2l0aGluIGEgZ3JpZCBieSBjb250cmlidXRpbmcgYSBsaW5lLCBhIHNwYW4sIG9yIG5vdGhpbmcgKGF1dG9tYXRpYykgdG8gaXRzIGdyaWQgcGxhY2VtZW50LCB0aGVyZWJ5IHNwZWNpZnlpbmcgdGhlIGVkZ2VzIG9mIGl0cyBncmlkIGFyZWEuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ncmlkLWFyZWEgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ncmlkLWFyZWFcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZ3JpZC1hcmVhXCI9IFwiZ3JpZC1hcmVhXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBncmlkLWF1dG8tY29sdW1ucyBDU1MgcHJvcGVydHkgc3BlY2lmaWVzIHRoZSBzaXplIG9mIGFuIGltcGxpY2l0bHktY3JlYXRlZCBncmlkIGNvbHVtbiB0cmFjayBvciBwYXR0ZXJuIG9mIHRyYWNrcy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2dyaWQtYXV0by1jb2x1bW5zIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Z3JpZC1hdXRvLWNvbHVtbnNcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZ3JpZC1hdXRvLWNvbHVtbnNcIj0gXCJncmlkLWF1dG8tY29sdW1uc1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZ3JpZC1hdXRvLWZsb3cgQ1NTIHByb3BlcnR5IGNvbnRyb2xzIGhvdyB0aGUgYXV0by1wbGFjZW1lbnQgYWxnb3JpdGhtIHdvcmtzLCBzcGVjaWZ5aW5nIGV4YWN0bHkgaG93IGF1dG8tcGxhY2VkIGl0ZW1zIGdldCBmbG93ZWQgaW50byB0aGUgZ3JpZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2dyaWQtYXV0by1mbG93IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Z3JpZC1hdXRvLWZsb3dcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZ3JpZC1hdXRvLWZsb3dcIj0gXCJncmlkLWF1dG8tZmxvd1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZ3JpZC1hdXRvLXJvd3MgQ1NTIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgc2l6ZSBvZiBhbiBpbXBsaWNpdGx5LWNyZWF0ZWQgZ3JpZCByb3cgdHJhY2smbmJzcDtvciBwYXR0ZXJuIG9mIHRyYWNrcy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2dyaWQtYXV0by1yb3dzIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Z3JpZC1hdXRvLXJvd3NcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZ3JpZC1hdXRvLXJvd3NcIj0gXCJncmlkLWF1dG8tcm93c1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZ3JpZC1jb2x1bW4gQ1NTIHNob3J0aGFuZCBwcm9wZXJ0eSBzcGVjaWZpZXMgYSBncmlkIGl0ZW0ncyBzaXplIGFuZCBsb2NhdGlvbiB3aXRoaW4gYSBncmlkIGNvbHVtbiBieSBjb250cmlidXRpbmcgYSBsaW5lLCBhIHNwYW4sIG9yIG5vdGhpbmcgKGF1dG9tYXRpYykgdG8gaXRzIGdyaWQgcGxhY2VtZW50LCB0aGVyZWJ5IHNwZWNpZnlpbmcgdGhlIGlubGluZS1zdGFydCBhbmQgaW5saW5lLWVuZCBlZGdlIG9mIGl0cyBncmlkIGFyZWEuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ncmlkLWNvbHVtbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWdyaWQtY29sdW1uXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImdyaWQtY29sdW1uXCI9IFwiZ3JpZC1jb2x1bW5cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGdyaWQtY29sdW1uLWVuZCBDU1MgcHJvcGVydHkgc3BlY2lmaWVzIGEgZ3JpZCBpdGVt4oCZcyBlbmQgcG9zaXRpb24gd2l0aGluIHRoZSBncmlkIGNvbHVtbiBieSBjb250cmlidXRpbmcgYSBsaW5lLCBhIHNwYW4sIG9yIG5vdGhpbmcgKGF1dG9tYXRpYykgdG8gaXRzIGdyaWQgcGxhY2VtZW50LCB0aGVyZWJ5IHNwZWNpZnlpbmcgdGhlIGJsb2NrLWVuZCBlZGdlIG9mIGl0cyBncmlkIGFyZWEuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ncmlkLWNvbHVtbi1lbmQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ncmlkLWNvbHVtbi1lbmRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZ3JpZC1jb2x1bW4tZW5kXCI9IFwiZ3JpZC1jb2x1bW4tZW5kXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBjb2x1bW4tZ2FwIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBzaXplIG9mIHRoZSBnYXAgKGd1dHRlcikgYmV0d2VlbiBhbiBlbGVtZW50J3MgY29sdW1ucy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NvbHVtbi1nYXAgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1jb2x1bW4tZ2FwXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImdyaWQtY29sdW1uLWdhcFwiPSBcImdyaWQtY29sdW1uLWdhcFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZ3JpZC1jb2x1bW4tc3RhcnQgQ1NTIHByb3BlcnR5IHNwZWNpZmllcyBhIGdyaWQgaXRlbeKAmXMgc3RhcnQgcG9zaXRpb24gd2l0aGluIHRoZSBncmlkIGNvbHVtbiBieSBjb250cmlidXRpbmcgYSBsaW5lLCBhIHNwYW4sIG9yIG5vdGhpbmcgKGF1dG9tYXRpYykgdG8gaXRzIGdyaWQgcGxhY2VtZW50LiBUaGlzIHN0YXJ0IHBvc2l0aW9uIGRlZmluZXMgdGhlIGJsb2NrLXN0YXJ0IGVkZ2Ugb2YgdGhlIGdyaWQgYXJlYS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2dyaWQtY29sdW1uLXN0YXJ0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Z3JpZC1jb2x1bW4tc3RhcnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZ3JpZC1jb2x1bW4tc3RhcnRcIj0gXCJncmlkLWNvbHVtbi1zdGFydFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZ2FwIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBnYXBzIChndXR0ZXJzKSBiZXR3ZWVuIHJvd3MgYW5kIGNvbHVtbnMuIEl0IGlzIGEgc2hvcnRoYW5kIGZvciByb3ctZ2FwIGFuZCBjb2x1bW4tZ2FwLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZ2FwIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Z2FwXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImdyaWQtZ2FwXCI9IFwiZ3JpZC1nYXBcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGdyaWQtcm93IENTUyBzaG9ydGhhbmQgcHJvcGVydHkgc3BlY2lmaWVzIGEgZ3JpZCBpdGVt4oCZcyBzaXplIGFuZCBsb2NhdGlvbiB3aXRoaW4gdGhlIGdyaWQgcm93IGJ5IGNvbnRyaWJ1dGluZyBhIGxpbmUsIGEgc3Bhbiwgb3Igbm90aGluZyAoYXV0b21hdGljKSB0byBpdHMgZ3JpZCBwbGFjZW1lbnQsIHRoZXJlYnkgc3BlY2lmeWluZyB0aGUgaW5saW5lLXN0YXJ0IGFuZCBpbmxpbmUtZW5kIGVkZ2Ugb2YgaXRzIGdyaWQgYXJlYS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2dyaWQtcm93IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Z3JpZC1yb3dcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZ3JpZC1yb3dcIj0gXCJncmlkLXJvd1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZ3JpZC1yb3ctZW5kIENTUyBwcm9wZXJ0eSBzcGVjaWZpZXMgYSBncmlkIGl0ZW3igJlzIGVuZCBwb3NpdGlvbiB3aXRoaW4gdGhlIGdyaWQgcm93IGJ5IGNvbnRyaWJ1dGluZyBhIGxpbmUsIGEgc3Bhbiwgb3Igbm90aGluZyAoYXV0b21hdGljKSB0byBpdHMgZ3JpZCBwbGFjZW1lbnQsIHRoZXJlYnkgc3BlY2lmeWluZyB0aGUgaW5saW5lLWVuZCBlZGdlIG9mIGl0cyBncmlkIGFyZWEuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ncmlkLXJvdy1lbmQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ncmlkLXJvdy1lbmRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZ3JpZC1yb3ctZW5kXCI9IFwiZ3JpZC1yb3ctZW5kXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSByb3ctZ2FwIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBzaXplIG9mIHRoZSBnYXAgKGd1dHRlcikgYmV0d2VlbiBhbiBlbGVtZW50J3MgZ3JpZCByb3dzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvcm93LWdhcCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXJvdy1nYXBcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZ3JpZC1yb3ctZ2FwXCI9IFwiZ3JpZC1yb3ctZ2FwXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBncmlkLXJvdy1zdGFydCBDU1MgcHJvcGVydHkgc3BlY2lmaWVzIGEgZ3JpZCBpdGVt4oCZcyBzdGFydCBwb3NpdGlvbiB3aXRoaW4gdGhlIGdyaWQgcm93IGJ5IGNvbnRyaWJ1dGluZyBhIGxpbmUsIGEgc3Bhbiwgb3Igbm90aGluZyAoYXV0b21hdGljKSB0byBpdHMgZ3JpZCBwbGFjZW1lbnQsIHRoZXJlYnkgc3BlY2lmeWluZyB0aGUgaW5saW5lLXN0YXJ0IGVkZ2Ugb2YgaXRzIGdyaWQgYXJlYS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2dyaWQtcm93LXN0YXJ0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Z3JpZC1yb3ctc3RhcnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZ3JpZC1yb3ctc3RhcnRcIj0gXCJncmlkLXJvdy1zdGFydFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZ3JpZC10ZW1wbGF0ZSBDU1MgcHJvcGVydHkgaXMgYSBzaG9ydGhhbmQgcHJvcGVydHkgZm9yIGRlZmluaW5nIGdyaWQgY29sdW1ucywgcm93cywgYW5kIGFyZWFzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZ3JpZC10ZW1wbGF0ZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWdyaWQtdGVtcGxhdGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiZ3JpZC10ZW1wbGF0ZVwiPSBcImdyaWQtdGVtcGxhdGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGdyaWQtdGVtcGxhdGUtYXJlYXMgQ1NTIHByb3BlcnR5IHNwZWNpZmllcyBuYW1lZCBncmlkIGFyZWFzLCBlc3RhYmxpc2hpbmcgdGhlIGNlbGxzIGluIHRoZSBncmlkIGFuZCBhc3NpZ25pbmcgdGhlbSBuYW1lcy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2dyaWQtdGVtcGxhdGUtYXJlYXMgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ncmlkLXRlbXBsYXRlLWFyZWFzXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImdyaWQtdGVtcGxhdGUtYXJlYXNcIj0gXCJncmlkLXRlbXBsYXRlLWFyZWFzXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBncmlkLXRlbXBsYXRlLWNvbHVtbnMgQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIGxpbmUgbmFtZXMgYW5kIHRyYWNrIHNpemluZyBmdW5jdGlvbnMgb2YgdGhlIGdyaWQgY29sdW1ucy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2dyaWQtdGVtcGxhdGUtY29sdW1ucyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWdyaWQtdGVtcGxhdGUtY29sdW1uc1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJncmlkLXRlbXBsYXRlLWNvbHVtbnNcIj0gXCJncmlkLXRlbXBsYXRlLWNvbHVtbnNcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGdyaWQtdGVtcGxhdGUtcm93cyBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgbGluZSBuYW1lcyBhbmQgdHJhY2sgc2l6aW5nIGZ1bmN0aW9ucyBvZiB0aGUgZ3JpZCByb3dzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZ3JpZC10ZW1wbGF0ZS1yb3dzIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Z3JpZC10ZW1wbGF0ZS1yb3dzXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImdyaWQtdGVtcGxhdGUtcm93c1wiPSBcImdyaWQtdGVtcGxhdGUtcm93c1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgaGVpZ2h0IENTUyBwcm9wZXJ0eSBzcGVjaWZpZXMgdGhlIGhlaWdodCBvZiBhbiBlbGVtZW50LiBCeSBkZWZhdWx0LCB0aGUgcHJvcGVydHkgZGVmaW5lcyB0aGUgaGVpZ2h0IG9mIHRoZSBjb250ZW50IGFyZWEuIElmIGJveC1zaXppbmcgaXMgc2V0IHRvIGJvcmRlci1ib3gsIGhvd2V2ZXIsIGl0IGluc3RlYWQgZGV0ZXJtaW5lcyB0aGUgaGVpZ2h0IG9mIHRoZSBib3JkZXIgYXJlYS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2hlaWdodCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWhlaWdodFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBoZWlnaHQ9IFwiaGVpZ2h0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBoeXBoZW5zIENTUyBwcm9wZXJ0eSBzcGVjaWZpZXMgaG93IHdvcmRzIHNob3VsZCBiZSBoeXBoZW5hdGVkIHdoZW4gdGV4dCB3cmFwcyBhY3Jvc3MgbXVsdGlwbGUgbGluZXMuIEl0IGNhbiBwcmV2ZW50IGh5cGhlbmF0aW9uIGVudGlyZWx5LCBoeXBoZW5hdGUgYXQgbWFudWFsbHktc3BlY2lmaWVkIHBvaW50cyB3aXRoaW4gdGhlIHRleHQsIG9yIGxldCB0aGUgYnJvd3NlciBhdXRvbWF0aWNhbGx5IGluc2VydCBoeXBoZW5zIHdoZXJlIGFwcHJvcHJpYXRlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvaHlwaGVucyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWh5cGhlbnNcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaHlwaGVucz0gXCJoeXBoZW5zXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBpbWFnZS1vcmllbnRhdGlvbiBDU1MgcHJvcGVydHkgc3BlY2lmaWVzIGEgbGF5b3V0LWluZGVwZW5kZW50IGNvcnJlY3Rpb24gdG8gdGhlIG9yaWVudGF0aW9uIG9mIGFuIGltYWdlLiBJdCBzaG91bGQgbm90IGJlIHVzZWQgZm9yIGFueSBvdGhlciBvcmllbnRhdGlvbiBhZGp1c3RtZW50czsgaW5zdGVhZCwgdGhlIHRyYW5zZm9ybSBwcm9wZXJ0eSBzaG91bGQgYmUgdXNlZCB3aXRoIHRoZSByb3RhdGUgJmx0O3RyYW5zZm9ybS1mdW5jdGlvbiZndDsuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9pbWFnZS1vcmllbnRhdGlvbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWltYWdlLW9yaWVudGF0aW9uXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImltYWdlLW9yaWVudGF0aW9uXCI9IFwiaW1hZ2Utb3JpZW50YXRpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGltYWdlLXJlbmRlcmluZyBDU1MgcHJvcGVydHkgc2V0cyBhbiBpbWFnZSBzY2FsaW5nIGFsZ29yaXRobS4gVGhlIHByb3BlcnR5IGFwcGxpZXMgdG8gYW4gZWxlbWVudCBpdHNlbGYsIHRvIGFueSBpbWFnZXMgc2V0IGluIGl0cyBvdGhlciBwcm9wZXJ0aWVzLCBhbmQgdG8gaXRzIGRlc2NlbmRhbnRzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvaW1hZ2UtcmVuZGVyaW5nIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9aW1hZ2UtcmVuZGVyaW5nXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImltYWdlLXJlbmRlcmluZ1wiPSBcImltYWdlLXJlbmRlcmluZ1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGluaGVyaXRzPSBcImluaGVyaXRzXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiaW5pdGlhbC12YWx1ZVwiPSBcImluaXRpYWwtdmFsdWVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGlubGluZS1zaXplIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBob3Jpem9udGFsIG9yIHZlcnRpY2FsIHNpemUgb2YgYW4gZWxlbWVudCdzIGJsb2NrLCBkZXBlbmRpbmcgb24gaXRzIHdyaXRpbmcgbW9kZS4gSXQgY29ycmVzcG9uZHMgdG8gZWl0aGVyIHRoZSB3aWR0aCBvciB0aGUgaGVpZ2h0IHByb3BlcnR5LCBkZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIHdyaXRpbmctbW9kZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2lubGluZS1zaXplIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9aW5saW5lLXNpemVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiaW5saW5lLXNpemVcIj0gXCJpbmxpbmUtc2l6ZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgaW5zZXQmbmJzcDtDU1MgcHJvcGVydHkgaXMgYSBzaG9ydGhhbmQgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgdG9wLCByaWdodCwgYm90dG9tLCBhbmQvb3IgbGVmdCBwcm9wZXJ0aWVzLiBJdCBoYXMgdGhlIHNhbWUgbXVsdGktdmFsdWUgc3ludGF4IG9mIHRoZSBtYXJnaW4gc2hvcnRoYW5kLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvaW5zZXQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1pbnNldFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBpbnNldD0gXCJpbnNldFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgaW5zZXQtYmxvY2sgQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIGxvZ2ljYWwgYmxvY2sgc3RhcnQgYW5kIGVuZCBvZmZzZXRzIG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gcGh5c2ljYWwgb2Zmc2V0cyBkZXBlbmRpbmcgb24gdGhlIGVsZW1lbnQncyB3cml0aW5nIG1vZGUsIGRpcmVjdGlvbmFsaXR5LCBhbmQgdGV4dCBvcmllbnRhdGlvbi4gSXQgY29ycmVzcG9uZHMgdG8gdGhlIHRvcCBhbmQgYm90dG9tLCBvciByaWdodCBhbmQgbGVmdCBwcm9wZXJ0aWVzIGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIGRlZmluZWQgZm9yIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2luc2V0LWJsb2NrIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9aW5zZXQtYmxvY2tcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwiaW5zZXQtYmxvY2tcIj0gXCJpbnNldC1ibG9ja1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgaW5zZXQtYmxvY2stZW5kIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBsb2dpY2FsIGJsb2NrIGVuZCBvZmZzZXQgb2YgYW4gZWxlbWVudCwgd2hpY2ggbWFwcyB0byBhIHBoeXNpY2FsIGluc2V0IGRlcGVuZGluZyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmcgbW9kZSwgZGlyZWN0aW9uYWxpdHksIGFuZCB0ZXh0IG9yaWVudGF0aW9uLiBJdCBjb3JyZXNwb25kcyB0byB0aGUgdG9wLCByaWdodCwgYm90dG9tLCBvciBsZWZ0IHByb3BlcnR5IGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIGRlZmluZWQgZm9yIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2luc2V0LWJsb2NrLWVuZCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWluc2V0LWJsb2NrLWVuZFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJpbnNldC1ibG9jay1lbmRcIj0gXCJpbnNldC1ibG9jay1lbmRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGluc2V0LWJsb2NrLXN0YXJ0IENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBsb2dpY2FsIGJsb2NrIHN0YXJ0IG9mZnNldCBvZiBhbiBlbGVtZW50LCB3aGljaCBtYXBzIHRvIGEgcGh5c2ljYWwgaW5zZXQgZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uIEl0IGNvcnJlc3BvbmRzIHRvIHRoZSB0b3AsIHJpZ2h0LCBib3R0b20sIG9yIGxlZnQgcHJvcGVydHkgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZXMgZGVmaW5lZCBmb3Igd3JpdGluZy1tb2RlLCBkaXJlY3Rpb24sIGFuZCB0ZXh0LW9yaWVudGF0aW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvaW5zZXQtYmxvY2stc3RhcnQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1pbnNldC1ibG9jay1zdGFydFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJpbnNldC1ibG9jay1zdGFydFwiPSBcImluc2V0LWJsb2NrLXN0YXJ0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBpbnNldC1pbmxpbmUgQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIGxvZ2ljYWwgc3RhcnQgYW5kIGVuZCBvZmZzZXRzIG9mIGFuIGVsZW1lbnQgaW4gdGhlIGlubGluZSBkaXJlY3Rpb24sIHdoaWNoIG1hcHMgdG8gcGh5c2ljYWwgb2Zmc2V0cyBkZXBlbmRpbmcgb24gdGhlIGVsZW1lbnQncyB3cml0aW5nIG1vZGUsIGRpcmVjdGlvbmFsaXR5LCBhbmQgdGV4dCBvcmllbnRhdGlvbi4gSXQgY29ycmVzcG9uZHMgdG8gdGhlIHRvcCBhbmQgYm90dG9tLCBvciByaWdodCBhbmQgbGVmdCBwcm9wZXJ0aWVzIGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIGRlZmluZWQgZm9yIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2luc2V0LWlubGluZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWluc2V0LWlubGluZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJpbnNldC1pbmxpbmVcIj0gXCJpbnNldC1pbmxpbmVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGluc2V0LWlubGluZS1lbmQgQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIGxvZ2ljYWwgaW5saW5lIGVuZCBpbnNldCBvZiBhbiBlbGVtZW50LCB3aGljaCBtYXBzIHRvIGEgcGh5c2ljYWwgb2Zmc2V0IGRlcGVuZGluZyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmcgbW9kZSwgZGlyZWN0aW9uYWxpdHksIGFuZCB0ZXh0IG9yaWVudGF0aW9uLiBJdCBjb3JyZXNwb25kcyB0byB0aGUgdG9wLCByaWdodCwgYm90dG9tLCBvciBsZWZ0IHByb3BlcnR5IGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIGRlZmluZWQgZm9yIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2luc2V0LWlubGluZS1lbmQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1pbnNldC1pbmxpbmUtZW5kXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImluc2V0LWlubGluZS1lbmRcIj0gXCJpbnNldC1pbmxpbmUtZW5kXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBpbnNldC1pbmxpbmUtc3RhcnQgQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIGxvZ2ljYWwgaW5saW5lIHN0YXJ0IGluc2V0IG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gYSBwaHlzaWNhbCBvZmZzZXQgZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uIEl0IGNvcnJlc3BvbmRzIHRvIHRoZSB0b3AsIHJpZ2h0LCBib3R0b20sIG9yIGxlZnQgcHJvcGVydHkgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZXMgZGVmaW5lZCBmb3Igd3JpdGluZy1tb2RlLCBkaXJlY3Rpb24sIGFuZCB0ZXh0LW9yaWVudGF0aW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvaW5zZXQtaW5saW5lLXN0YXJ0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9aW5zZXQtaW5saW5lLXN0YXJ0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImluc2V0LWlubGluZS1zdGFydFwiPSBcImluc2V0LWlubGluZS1zdGFydFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgaXNvbGF0aW9uIENTUyBwcm9wZXJ0eSBkZXRlcm1pbmVzIHdoZXRoZXIgYW4gZWxlbWVudCBtdXN0IGNyZWF0ZSBhIG5ldyBzdGFja2luZyBjb250ZXh0LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvaXNvbGF0aW9uIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9aXNvbGF0aW9uXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlzb2xhdGlvbj0gXCJpc29sYXRpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIENTUyBqdXN0aWZ5LWNvbnRlbnQgcHJvcGVydHkgZGVmaW5lcyBob3cgdGhlIGJyb3dzZXIgZGlzdHJpYnV0ZXMgc3BhY2UgYmV0d2VlbiBhbmQgYXJvdW5kIGNvbnRlbnQgaXRlbXMgYWxvbmcgdGhlIG1haW4tYXhpcyBvZiBhIGZsZXggY29udGFpbmVyLCBhbmQgdGhlIGlubGluZSBheGlzIG9mIGEgZ3JpZCBjb250YWluZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9qdXN0aWZ5LWNvbnRlbnQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1qdXN0aWZ5LWNvbnRlbnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwianVzdGlmeS1jb250ZW50XCI9IFwianVzdGlmeS1jb250ZW50XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBDU1MganVzdGlmeS1pdGVtcyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBkZWZhdWx0IGp1c3RpZnktc2VsZiBmb3IgYWxsIGl0ZW1zIG9mIHRoZSBib3gsIGdpdmluZyB0aGVtIGFsbCBhIGRlZmF1bHQgd2F5IG9mIGp1c3RpZnlpbmcgZWFjaCBib3ggYWxvbmcgdGhlIGFwcHJvcHJpYXRlIGF4aXMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9qdXN0aWZ5LWl0ZW1zIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9anVzdGlmeS1pdGVtc1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJqdXN0aWZ5LWl0ZW1zXCI9IFwianVzdGlmeS1pdGVtc1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgQ1NTIGp1c3RpZnktc2VsZiBwcm9wZXJ0eSBzZXRzIHRoZSB3YXkgYSBib3ggaXMganVzdGlmaWVkIGluc2lkZSBpdHMgYWxpZ25tZW50IGNvbnRhaW5lciBhbG9uZyB0aGUgYXBwcm9wcmlhdGUgYXhpcy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2p1c3RpZnktc2VsZiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWp1c3RpZnktc2VsZlxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJqdXN0aWZ5LXNlbGZcIj0gXCJqdXN0aWZ5LXNlbGZcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGxlZnQgQ1NTIHByb3BlcnR5IHBhcnRpY2lwYXRlcyBpbiBzcGVjaWZ5aW5nIHRoZSBob3Jpem9udGFsIHBvc2l0aW9uIG9mIGEgcG9zaXRpb25lZCBlbGVtZW50LiBJdCBoYXMgbm8gZWZmZWN0IG9uIG5vbi1wb3NpdGlvbmVkIGVsZW1lbnRzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvbGVmdCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWxlZnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGVmdD0gXCJsZWZ0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBsZXR0ZXItc3BhY2luZyBDU1MgcHJvcGVydHkgc2V0cyB0aGUgaG9yaXpvbnRhbCBzcGFjaW5nIGJlaGF2aW9yIGJldHdlZW4gdGV4dCBjaGFyYWN0ZXJzLiBUaGlzIHZhbHVlIGlzIGFkZGVkIHRvIHRoZSBuYXR1cmFsIHNwYWNpbmcgYmV0d2VlbiBjaGFyYWN0ZXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgdGV4dC4gUG9zaXRpdmUgdmFsdWVzIG9mIGxldHRlci1zcGFjaW5nIGNhdXNlcyBjaGFyYWN0ZXJzIHRvIHNwcmVhZCBmYXJ0aGVyIGFwYXJ0LCB3aGlsZSBuZWdhdGl2ZSB2YWx1ZXMgb2YgbGV0dGVyLXNwYWNpbmcgYnJpbmcgY2hhcmFjdGVycyBjbG9zZXIgdG9nZXRoZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9sZXR0ZXItc3BhY2luZyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWxldHRlci1zcGFjaW5nXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImxldHRlci1zcGFjaW5nXCI9IFwibGV0dGVyLXNwYWNpbmdcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGxpZ2h0aW5nLWNvbG9yIGF0dHJpYnV0ZSBkZWZpbmVzIHRoZSBjb2xvciBvZiB0aGUgbGlnaHQgc291cmNlIGZvciBsaWdodGluZyBmaWx0ZXIgcHJpbWl0aXZlcy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9saWdodGluZy1jb2xvciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWxpZ2h0aW5nLWNvbG9yXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImxpZ2h0aW5nLWNvbG9yXCI9IFwibGlnaHRpbmctY29sb3JcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGxpbmUtYnJlYWsgQ1NTIHByb3BlcnR5IHNldHMgaG93IHRvIGJyZWFrIGxpbmVzIG9mIENoaW5lc2UsIEphcGFuZXNlLCBvciBLb3JlYW4gKENKSykgdGV4dCB3aGVuIHdvcmtpbmcgd2l0aCBwdW5jdHVhdGlvbiBhbmQgc3ltYm9scy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2xpbmUtYnJlYWsgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1saW5lLWJyZWFrXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImxpbmUtYnJlYWtcIj0gXCJsaW5lLWJyZWFrXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwibGluZS1nYXAtb3ZlcnJpZGVcIj0gXCJsaW5lLWdhcC1vdmVycmlkZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbGluZS1oZWlnaHQgQ1NTIHByb3BlcnR5IHNldHMgdGhlIGhlaWdodCBvZiBhIGxpbmUgYm94LiBJdCdzIGNvbW1vbmx5IHVzZWQgdG8gc2V0IHRoZSBkaXN0YW5jZSBiZXR3ZWVuIGxpbmVzIG9mIHRleHQuIE9uIGJsb2NrLWxldmVsIGVsZW1lbnRzLCBpdCBzcGVjaWZpZXMgdGhlIG1pbmltdW0gaGVpZ2h0IG9mIGxpbmUgYm94ZXMgd2l0aGluIHRoZSBlbGVtZW50LiBPbiBub24tcmVwbGFjZWQgaW5saW5lIGVsZW1lbnRzLCBpdCBzcGVjaWZpZXMgdGhlIGhlaWdodCB0aGF0IGlzIHVzZWQgdG8gY2FsY3VsYXRlIGxpbmUgYm94IGhlaWdodC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2xpbmUtaGVpZ2h0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bGluZS1oZWlnaHRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwibGluZS1oZWlnaHRcIj0gXCJsaW5lLWhlaWdodFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbGlzdC1zdHlsZSBDU1Mgc2hvcnRoYW5kIHByb3BlcnR5IGFsbG93cyB5b3UgdG8gc2V0IGFsbCB0aGUgbGlzdCBzdHlsZSBwcm9wZXJ0aWVzIGF0IG9uY2UuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9saXN0LXN0eWxlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bGlzdC1zdHlsZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJsaXN0LXN0eWxlXCI9IFwibGlzdC1zdHlsZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbGlzdC1zdHlsZS1pbWFnZSBDU1MgcHJvcGVydHkgc2V0cyBhbiBpbWFnZSB0byBiZSB1c2VkIGFzIHRoZSBsaXN0IGl0ZW0gbWFya2VyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvbGlzdC1zdHlsZS1pbWFnZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWxpc3Qtc3R5bGUtaW1hZ2VcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwibGlzdC1zdHlsZS1pbWFnZVwiPSBcImxpc3Qtc3R5bGUtaW1hZ2VcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGxpc3Qtc3R5bGUtcG9zaXRpb24gQ1NTIHByb3BlcnR5IHNldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSA6Om1hcmtlciByZWxhdGl2ZSB0byBhIGxpc3QgaXRlbS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2xpc3Qtc3R5bGUtcG9zaXRpb24gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1saXN0LXN0eWxlLXBvc2l0aW9uXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcImxpc3Qtc3R5bGUtcG9zaXRpb25cIj0gXCJsaXN0LXN0eWxlLXBvc2l0aW9uXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBsaXN0LXN0eWxlLXR5cGUgQ1NTIHByb3BlcnR5IHNldHMgdGhlIG1hcmtlciAoc3VjaCBhcyBhIGRpc2MsIGNoYXJhY3Rlciwgb3IgY3VzdG9tIGNvdW50ZXIgc3R5bGUpIG9mIGEgbGlzdCBpdGVtIGVsZW1lbnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9saXN0LXN0eWxlLXR5cGUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1saXN0LXN0eWxlLXR5cGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwibGlzdC1zdHlsZS10eXBlXCI9IFwibGlzdC1zdHlsZS10eXBlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBtYXJnaW4gQ1NTIHByb3BlcnR5IHNldHMgdGhlIG1hcmdpbiBhcmVhIG9uIGFsbCBmb3VyIHNpZGVzIG9mIGFuIGVsZW1lbnQuIEl0IGlzIGEgc2hvcnRoYW5kIGZvciBtYXJnaW4tdG9wLCBtYXJnaW4tcmlnaHQsIG1hcmdpbi1ib3R0b20sIGFuZCBtYXJnaW4tbGVmdC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL21hcmdpbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW1hcmdpblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBtYXJnaW49IFwibWFyZ2luXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBtYXJnaW4tYmxvY2sgQ1NTIHNob3J0aGFuZCBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBsb2dpY2FsIGJsb2NrIHN0YXJ0IGFuZCBlbmQgbWFyZ2lucyBvZiBhbiBlbGVtZW50LCB3aGljaCBtYXBzIHRvIHBoeXNpY2FsIG1hcmdpbnMgZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9tYXJnaW4tYmxvY2sgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1tYXJnaW4tYmxvY2tcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwibWFyZ2luLWJsb2NrXCI9IFwibWFyZ2luLWJsb2NrXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBtYXJnaW4tYmxvY2stZW5kIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBsb2dpY2FsIGJsb2NrIGVuZCBtYXJnaW4gb2YgYW4gZWxlbWVudCwgd2hpY2ggbWFwcyB0byBhIHBoeXNpY2FsIG1hcmdpbiBkZXBlbmRpbmcgb24gdGhlIGVsZW1lbnQncyB3cml0aW5nIG1vZGUsIGRpcmVjdGlvbmFsaXR5LCBhbmQgdGV4dCBvcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL21hcmdpbi1ibG9jay1lbmQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1tYXJnaW4tYmxvY2stZW5kXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIm1hcmdpbi1ibG9jay1lbmRcIj0gXCJtYXJnaW4tYmxvY2stZW5kXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBtYXJnaW4tYmxvY2stc3RhcnQgQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIGxvZ2ljYWwgYmxvY2sgc3RhcnQgbWFyZ2luIG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gYSBwaHlzaWNhbCBtYXJnaW4gZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9tYXJnaW4tYmxvY2stc3RhcnQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1tYXJnaW4tYmxvY2stc3RhcnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwibWFyZ2luLWJsb2NrLXN0YXJ0XCI9IFwibWFyZ2luLWJsb2NrLXN0YXJ0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBtYXJnaW4tYm90dG9tIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBtYXJnaW4gYXJlYSBvbiB0aGUgYm90dG9tIG9mIGFuIGVsZW1lbnQuIEEgcG9zaXRpdmUgdmFsdWUgcGxhY2VzIGl0IGZhcnRoZXIgZnJvbSBpdHMgbmVpZ2hib3JzLCB3aGlsZSBhIG5lZ2F0aXZlIHZhbHVlIHBsYWNlcyBpdCBjbG9zZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9tYXJnaW4tYm90dG9tIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bWFyZ2luLWJvdHRvbVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJtYXJnaW4tYm90dG9tXCI9IFwibWFyZ2luLWJvdHRvbVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbWFyZ2luLWlubGluZSBDU1Mgc2hvcnRoYW5kIHByb3BlcnR5IGlzIGEgc2hvcnRoYW5kIHByb3BlcnR5IHRoYXQgZGVmaW5lcyBib3RoIHRoZSBsb2dpY2FsIGlubGluZSBzdGFydCBhbmQgZW5kIG1hcmdpbnMgb2YgYW4gZWxlbWVudCwgd2hpY2ggbWFwcyB0byBwaHlzaWNhbCBtYXJnaW5zIGRlcGVuZGluZyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmcgbW9kZSwgZGlyZWN0aW9uYWxpdHksIGFuZCB0ZXh0IG9yaWVudGF0aW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvbWFyZ2luLWlubGluZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW1hcmdpbi1pbmxpbmVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwibWFyZ2luLWlubGluZVwiPSBcIm1hcmdpbi1pbmxpbmVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG1hcmdpbi1pbmxpbmUtZW5kIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBsb2dpY2FsIGlubGluZSBlbmQgbWFyZ2luIG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gYSBwaHlzaWNhbCBtYXJnaW4gZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uIEluIG90aGVyIHdvcmRzLCBpdCBjb3JyZXNwb25kcyB0byB0aGUgbWFyZ2luLXRvcCwgbWFyZ2luLXJpZ2h0LCBtYXJnaW4tYm90dG9tIG9yIG1hcmdpbi1sZWZ0IHByb3BlcnR5IGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIGRlZmluZWQgZm9yIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL21hcmdpbi1pbmxpbmUtZW5kIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bWFyZ2luLWlubGluZS1lbmRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwibWFyZ2luLWlubGluZS1lbmRcIj0gXCJtYXJnaW4taW5saW5lLWVuZFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbWFyZ2luLWlubGluZS1zdGFydCBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgbG9naWNhbCBpbmxpbmUgc3RhcnQgbWFyZ2luIG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gYSBwaHlzaWNhbCBtYXJnaW4gZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uIEl0IGNvcnJlc3BvbmRzIHRvIHRoZSBtYXJnaW4tdG9wLCBtYXJnaW4tcmlnaHQsIG1hcmdpbi1ib3R0b20sIG9yIG1hcmdpbi1sZWZ0IHByb3BlcnR5IGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIGRlZmluZWQgZm9yIHdyaXRpbmctbW9kZSwgZGlyZWN0aW9uLCBhbmQgdGV4dC1vcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL21hcmdpbi1pbmxpbmUtc3RhcnQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1tYXJnaW4taW5saW5lLXN0YXJ0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIm1hcmdpbi1pbmxpbmUtc3RhcnRcIj0gXCJtYXJnaW4taW5saW5lLXN0YXJ0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBtYXJnaW4tbGVmdCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgbWFyZ2luIGFyZWEgb24gdGhlIGxlZnQgc2lkZSBvZiBhbiBlbGVtZW50LiBBIHBvc2l0aXZlIHZhbHVlIHBsYWNlcyBpdCBmYXJ0aGVyIGZyb20gaXRzIG5laWdoYm9ycywgd2hpbGUgYSBuZWdhdGl2ZSB2YWx1ZSBwbGFjZXMgaXQgY2xvc2VyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvbWFyZ2luLWxlZnQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1tYXJnaW4tbGVmdFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJtYXJnaW4tbGVmdFwiPSBcIm1hcmdpbi1sZWZ0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBtYXJnaW4tcmlnaHQgQ1NTIHByb3BlcnR5IHNldHMgdGhlIG1hcmdpbiBhcmVhIG9uIHRoZSByaWdodCBzaWRlIG9mIGFuIGVsZW1lbnQuIEEgcG9zaXRpdmUgdmFsdWUgcGxhY2VzIGl0IGZhcnRoZXIgZnJvbSBpdHMgbmVpZ2hib3JzLCB3aGlsZSBhIG5lZ2F0aXZlIHZhbHVlIHBsYWNlcyBpdCBjbG9zZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9tYXJnaW4tcmlnaHQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1tYXJnaW4tcmlnaHRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwibWFyZ2luLXJpZ2h0XCI9IFwibWFyZ2luLXJpZ2h0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBtYXJnaW4tdG9wIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBtYXJnaW4gYXJlYSBvbiB0aGUgdG9wIG9mIGFuIGVsZW1lbnQuIEEgcG9zaXRpdmUgdmFsdWUgcGxhY2VzIGl0IGZhcnRoZXIgZnJvbSBpdHMgbmVpZ2hib3JzLCB3aGlsZSBhIG5lZ2F0aXZlIHZhbHVlIHBsYWNlcyBpdCBjbG9zZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9tYXJnaW4tdG9wIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bWFyZ2luLXRvcFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJtYXJnaW4tdG9wXCI9IFwibWFyZ2luLXRvcFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG1hcmtlcj0gXCJtYXJrZXJcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG1hcmtlci1lbmQgYXR0cmlidXRlIGRlZmluZXMgdGhlIGFycm93aGVhZCBvciBwb2x5bWFya2VyIHRoYXQgd2lsbCBiZSBkcmF3biBhdCB0aGUgZmluYWwgdmVydGV4IG9mIHRoZSBnaXZlbiBzaGFwZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9tYXJrZXItZW5kIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bWFya2VyLWVuZFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJtYXJrZXItZW5kXCI9IFwibWFya2VyLWVuZFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbWFya2VyLW1pZCBhdHRyaWJ1dGUgZGVmaW5lcyB0aGUgYXJyb3doZWFkIG9yIHBvbHltYXJrZXIgdGhhdCB3aWxsIGJlIGRyYXduIGF0IGFsbCBpbnRlcmlvciB2ZXJ0aWNlcyBvZiB0aGUgZ2l2ZW4gc2hhcGUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NWRy9BdHRyaWJ1dGUvbWFya2VyLW1pZCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW1hcmtlci1taWRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwibWFya2VyLW1pZFwiPSBcIm1hcmtlci1taWRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG1hcmtlci1zdGFydCBhdHRyaWJ1dGUgZGVmaW5lcyB0aGUgYXJyb3doZWFkIG9yIHBvbHltYXJrZXIgdGhhdCB3aWxsIGJlIGRyYXduIGF0IHRoZSBmaXJzdCB2ZXJ0ZXggb2YgdGhlIGdpdmVuIHNoYXBlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL21hcmtlci1zdGFydCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW1hcmtlci1zdGFydFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJtYXJrZXItc3RhcnRcIj0gXCJtYXJrZXItc3RhcnRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG1hc2sgQ1NTIHNob3J0aGFuZCBwcm9wZXJ0eSBoaWRlcyBhbiBlbGVtZW50IChwYXJ0aWFsbHkgb3IgZnVsbHkpIGJ5IG1hc2tpbmcgb3IgY2xpcHBpbmcgdGhlIGltYWdlIGF0IHNwZWNpZmljIHBvaW50cy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL21hc2sgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1tYXNrXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG1hc2s9IFwibWFza1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbWFzay10eXBlIENTUyBwcm9wZXJ0eSBzZXRzIHdoZXRoZXIgYW4gU1ZHICZsdDttYXNrJmd0OyBlbGVtZW50IGlzIHVzZWQgYXMgYSBsdW1pbmFuY2Ugb3IgYW4gYWxwaGEgbWFzay4gSXQgYXBwbGllcyB0byB0aGUgJmx0O21hc2smZ3Q7IGVsZW1lbnQgaXRzZWxmLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvbWFzay10eXBlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bWFzay10eXBlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIm1hc2stdHlwZVwiPSBcIm1hc2stdHlwZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbWF4LWJsb2NrLXNpemUgQ1NTIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgbWF4aW11bSBzaXplIG9mIGFuIGVsZW1lbnQgaW4gdGhlIGRpcmVjdGlvbiBvcHBvc2l0ZSB0aGF0IG9mIHRoZSB3cml0aW5nIGRpcmVjdGlvbiBhcyBzcGVjaWZpZWQgYnkgd3JpdGluZy1tb2RlLiBUaGF0IGlzLCBpZiB0aGUgd3JpdGluZyBkaXJlY3Rpb24gaXMgaG9yaXpvbnRhbCwgdGhlbiBtYXgtYmxvY2stc2l6ZSBpcyBlcXVpdmFsZW50IHRvIG1heC1oZWlnaHQ7IGlmIHRoZSB3cml0aW5nIGRpcmVjdGlvbiBpcyB2ZXJ0aWNhbCwgbWF4LWJsb2NrLXNpemUgaXMgdGhlIHNhbWUgYXMgbWF4LXdpZHRoLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvbWF4LWJsb2NrLXNpemUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1tYXgtYmxvY2stc2l6ZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJtYXgtYmxvY2stc2l6ZVwiPSBcIm1heC1ibG9jay1zaXplXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBtYXgtaGVpZ2h0IENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBtYXhpbXVtIGhlaWdodCBvZiBhbiBlbGVtZW50LiBJdCBwcmV2ZW50cyB0aGUgdXNlZCB2YWx1ZSBvZiB0aGUgaGVpZ2h0IHByb3BlcnR5IGZyb20gYmVjb21pbmcgbGFyZ2VyIHRoYW4gdGhlIHZhbHVlIHNwZWNpZmllZCBmb3IgbWF4LWhlaWdodC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL21heC1oZWlnaHQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1tYXgtaGVpZ2h0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIm1heC1oZWlnaHRcIj0gXCJtYXgtaGVpZ2h0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBtYXgtaW5saW5lLXNpemUgQ1NTIHByb3BlcnR5IGRlZmluZXMgdGhlIGhvcml6b250YWwgb3IgdmVydGljYWwgbWF4aW11bSBzaXplIG9mIGFuIGVsZW1lbnQncyBibG9jaywgZGVwZW5kaW5nIG9uIGl0cyB3cml0aW5nIG1vZGUuIEl0IGNvcnJlc3BvbmRzIHRvIGVpdGhlciB0aGUgbWF4LXdpZHRoIG9yIHRoZSBtYXgtaGVpZ2h0IHByb3BlcnR5LCBkZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIHdyaXRpbmctbW9kZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL21heC1pbmxpbmUtc2l6ZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW1heC1pbmxpbmUtc2l6ZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJtYXgtaW5saW5lLXNpemVcIj0gXCJtYXgtaW5saW5lLXNpemVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG1heC13aWR0aCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgbWF4aW11bSB3aWR0aCBvZiBhbiBlbGVtZW50LiBJdCBwcmV2ZW50cyB0aGUgdXNlZCB2YWx1ZSBvZiB0aGUgd2lkdGggcHJvcGVydHkgZnJvbSBiZWNvbWluZyBsYXJnZXIgdGhhbiB0aGUgdmFsdWUgc3BlY2lmaWVkIGJ5IG1heC13aWR0aC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL21heC13aWR0aCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW1heC13aWR0aFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJtYXgtd2lkdGhcIj0gXCJtYXgtd2lkdGhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJtYXgtem9vbVwiPSBcIm1heC16b29tXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBtaW4tYmxvY2stc2l6ZSBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgbWluaW11bSBob3Jpem9udGFsIG9yIHZlcnRpY2FsIHNpemUgb2YgYW4gZWxlbWVudCdzIGJsb2NrLCBkZXBlbmRpbmcgb24gaXRzIHdyaXRpbmcgbW9kZS4gSXQgY29ycmVzcG9uZHMgdG8gZWl0aGVyIHRoZSBtaW4td2lkdGggb3IgdGhlIG1pbi1oZWlnaHQgcHJvcGVydHksIGRlcGVuZGluZyBvbiB0aGUgdmFsdWUgb2Ygd3JpdGluZy1tb2RlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvbWluLWJsb2NrLXNpemUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1taW4tYmxvY2stc2l6ZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJtaW4tYmxvY2stc2l6ZVwiPSBcIm1pbi1ibG9jay1zaXplXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBtaW4taGVpZ2h0IENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBtaW5pbXVtIGhlaWdodCBvZiBhbiBlbGVtZW50LiBJdCBwcmV2ZW50cyB0aGUgdXNlZCB2YWx1ZSBvZiB0aGUgaGVpZ2h0IHByb3BlcnR5IGZyb20gYmVjb21pbmcgc21hbGxlciB0aGFuIHRoZSB2YWx1ZSBzcGVjaWZpZWQgZm9yIG1pbi1oZWlnaHQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9taW4taGVpZ2h0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bWluLWhlaWdodFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJtaW4taGVpZ2h0XCI9IFwibWluLWhlaWdodFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbWluLWlubGluZS1zaXplIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBob3Jpem9udGFsIG9yIHZlcnRpY2FsIG1pbmltYWwgc2l6ZSBvZiBhbiBlbGVtZW50J3MgYmxvY2ssIGRlcGVuZGluZyBvbiBpdHMgd3JpdGluZyBtb2RlLiBJdCBjb3JyZXNwb25kcyB0byBlaXRoZXIgdGhlIG1pbi13aWR0aCBvciB0aGUgbWluLWhlaWdodCBwcm9wZXJ0eSwgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiB3cml0aW5nLW1vZGUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9taW4taW5saW5lLXNpemUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1taW4taW5saW5lLXNpemVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwibWluLWlubGluZS1zaXplXCI9IFwibWluLWlubGluZS1zaXplXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBtaW4td2lkdGggQ1NTIHByb3BlcnR5IHNldHMgdGhlIG1pbmltdW0gd2lkdGggb2YgYW4gZWxlbWVudC4gSXQgcHJldmVudHMgdGhlIHVzZWQgdmFsdWUgb2YgdGhlIHdpZHRoIHByb3BlcnR5IGZyb20gYmVjb21pbmcgc21hbGxlciB0aGFuIHRoZSB2YWx1ZSBzcGVjaWZpZWQgZm9yIG1pbi13aWR0aC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL21pbi13aWR0aCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW1pbi13aWR0aFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJtaW4td2lkdGhcIj0gXCJtaW4td2lkdGhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJtaW4tem9vbVwiPSBcIm1pbi16b29tXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBtaXgtYmxlbmQtbW9kZSBDU1MgcHJvcGVydHkgc2V0cyBob3cgYW4gZWxlbWVudCdzIGNvbnRlbnQgc2hvdWxkIGJsZW5kIHdpdGggdGhlIGNvbnRlbnQgb2YgdGhlIGVsZW1lbnQncyBwYXJlbnQgYW5kIHRoZSBlbGVtZW50J3MgYmFja2dyb3VuZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL21peC1ibGVuZC1tb2RlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bWl4LWJsZW5kLW1vZGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwibWl4LWJsZW5kLW1vZGVcIj0gXCJtaXgtYmxlbmQtbW9kZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgb2JqZWN0LWZpdCBDU1MgcHJvcGVydHkgc2V0cyBob3cgdGhlIGNvbnRlbnQgb2YgYSByZXBsYWNlZCBlbGVtZW50LCBzdWNoIGFzIGFuICZsdDtpbWcmZ3Q7IG9yICZsdDt2aWRlbyZndDssIHNob3VsZCBiZSByZXNpemVkIHRvIGZpdCBpdHMgY29udGFpbmVyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvb2JqZWN0LWZpdCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW9iamVjdC1maXRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwib2JqZWN0LWZpdFwiPSBcIm9iamVjdC1maXRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG9iamVjdC1wb3NpdGlvbiBDU1MgcHJvcGVydHkgc3BlY2lmaWVzIHRoZSBhbGlnbm1lbnQgb2YgdGhlIHNlbGVjdGVkIHJlcGxhY2VkIGVsZW1lbnQncyBjb250ZW50cyB3aXRoaW4gdGhlIGVsZW1lbnQncyBib3guIEFyZWFzIG9mIHRoZSBib3ggd2hpY2ggYXJlbid0IGNvdmVyZWQgYnkgdGhlIHJlcGxhY2VkIGVsZW1lbnQncyBvYmplY3Qgd2lsbCBzaG93IHRoZSBlbGVtZW50J3MgYmFja2dyb3VuZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL29iamVjdC1wb3NpdGlvbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW9iamVjdC1wb3NpdGlvblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJvYmplY3QtcG9zaXRpb25cIj0gXCJvYmplY3QtcG9zaXRpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG9mZnNldCBDU1Mgc2hvcnRoYW5kIHByb3BlcnR5IHNldHMgYWxsIHRoZSBwcm9wZXJ0aWVzIHJlcXVpcmVkIGZvciBhbmltYXRpbmcgYW4gZWxlbWVudCBhbG9uZyBhIGRlZmluZWQgcGF0aC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL29mZnNldCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW9mZnNldFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBvZmZzZXQ9IFwib2Zmc2V0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBvZmZzZXQtZGlzdGFuY2UgQ1NTIHByb3BlcnR5IHNwZWNpZmllcyBhIHBvc2l0aW9uIGFsb25nIGFuIG9mZnNldC1wYXRoIGZvciBhbiBlbGVtZW50IHRvIGJlIHBsYWNlZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL29mZnNldC1kaXN0YW5jZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW9mZnNldC1kaXN0YW5jZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJvZmZzZXQtZGlzdGFuY2VcIj0gXCJvZmZzZXQtZGlzdGFuY2VcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG9mZnNldC1wYXRoIENTUyBwcm9wZXJ0eSBzcGVjaWZpZXMgYSBtb3Rpb24gcGF0aCBmb3IgYW4gZWxlbWVudCB0byBmb2xsb3cgYW5kIGRlZmluZXMgdGhlIGVsZW1lbnQncyBwb3NpdGlvbmluZyB3aXRoaW4gdGhlIHBhcmVudCBjb250YWluZXIgb3IgU1ZHIGNvb3JkaW5hdGUgc3lzdGVtLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvb2Zmc2V0LXBhdGggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1vZmZzZXQtcGF0aFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJvZmZzZXQtcGF0aFwiPSBcIm9mZnNldC1wYXRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBvZmZzZXQtcm90YXRlIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBvcmllbnRhdGlvbi9kaXJlY3Rpb24gb2YgdGhlIGVsZW1lbnQgYXMgaXQgaXMgcG9zaXRpb25lZCBhbG9uZyB0aGUgb2Zmc2V0LXBhdGguXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9vZmZzZXQtcm90YXRlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9b2Zmc2V0LXJvdGF0ZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJvZmZzZXQtcm90YXRlXCI9IFwib2Zmc2V0LXJvdGF0ZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgb3BhY2l0eSBDU1MgcHJvcGVydHkgc2V0cyB0aGUgb3BhY2l0eSBvZiBhbiBlbGVtZW50LiBPcGFjaXR5IGlzIHRoZSBkZWdyZWUgdG8gd2hpY2ggY29udGVudCBiZWhpbmQgYW4gZWxlbWVudCBpcyBoaWRkZW4sIGFuZCBpcyB0aGUgb3Bwb3NpdGUgb2YgdHJhbnNwYXJlbmN5LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvb3BhY2l0eSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW9wYWNpdHlcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgb3BhY2l0eT0gXCJvcGFjaXR5XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBvcmRlciBDU1MgcHJvcGVydHkgc2V0cyB0aGUgb3JkZXIgdG8gbGF5IG91dCBhbiBpdGVtIGluIGEgZmxleCBvciBncmlkIGNvbnRhaW5lci4gSXRlbXMgaW4gYSBjb250YWluZXIgYXJlIHNvcnRlZCBieSBhc2NlbmRpbmcgb3JkZXIgdmFsdWUgYW5kIHRoZW4gYnkgdGhlaXIgc291cmNlIGNvZGUgb3JkZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9vcmRlciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW9yZGVyXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG9yZGVyPSBcIm9yZGVyXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBvcmllbnRhdGlvbiBhdHRyaWJ1dGUgaW5kaWNhdGVzIHRoYXQgdGhlIGdpdmVuIGdseXBoIGlzIG9ubHkgdG8gYmUgdXNlZCBmb3IgYSBwYXJ0aWN1bGFyIHRleHQgZGlyZWN0aW9uLCBpLmUuIGhvcml6b250YWwgb3IgdmVydGljYWwuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NWRy9BdHRyaWJ1dGUvb3JpZW50YXRpb24gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1vcmllbnRhdGlvblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBvcmllbnRhdGlvbj0gXCJvcmllbnRhdGlvblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgb3JwaGFucyBDU1MgcHJvcGVydHkgc2V0cyB0aGUgbWluaW11bSBudW1iZXIgb2YgbGluZXMgaW4gYSBibG9jayBjb250YWluZXIgdGhhdCBtdXN0IGJlIHNob3duIGF0IHRoZSBib3R0b20gb2YgYSBwYWdlLCByZWdpb24sIG9yIGNvbHVtbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL29ycGhhbnMgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1vcnBoYW5zXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG9ycGhhbnM9IFwib3JwaGFuc1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgb3V0bGluZSBDU1Mgc2hvcnRoYW5kIHByb3BlcnR5IHNldCBhbGwgdGhlIG91dGxpbmUgcHJvcGVydGllcyBpbiBhIHNpbmdsZSBkZWNsYXJhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL291dGxpbmUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1vdXRsaW5lXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG91dGxpbmU9IFwib3V0bGluZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgb3V0bGluZS1jb2xvciBDU1MgcHJvcGVydHkgc2V0cyB0aGUgY29sb3Igb2YgYW4gZWxlbWVudCdzIG91dGxpbmUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9vdXRsaW5lLWNvbG9yIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9b3V0bGluZS1jb2xvclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJvdXRsaW5lLWNvbG9yXCI9IFwib3V0bGluZS1jb2xvclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgb3V0bGluZS1vZmZzZXQgQ1NTIHByb3BlcnR5IHNldHMgdGhlIGFtb3VudCBvZiBzcGFjZSBiZXR3ZWVuIGFuIG91dGxpbmUgYW5kIHRoZSBlZGdlIG9yIGJvcmRlciBvZiBhbiBlbGVtZW50LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvb3V0bGluZS1vZmZzZXQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1vdXRsaW5lLW9mZnNldFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJvdXRsaW5lLW9mZnNldFwiPSBcIm91dGxpbmUtb2Zmc2V0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBvdXRsaW5lLXN0eWxlIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBzdHlsZSBvZiBhbiBlbGVtZW50J3Mgb3V0bGluZS4gQW4gb3V0bGluZSBpcyBhIGxpbmUgdGhhdCBpcyBkcmF3biBhcm91bmQgYW4gZWxlbWVudCwgb3V0c2lkZSB0aGUgYm9yZGVyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvb3V0bGluZS1zdHlsZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW91dGxpbmUtc3R5bGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwib3V0bGluZS1zdHlsZVwiPSBcIm91dGxpbmUtc3R5bGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIENTUyBvdXRsaW5lLXdpZHRoIHByb3BlcnR5IHNldHMgdGhlIHRoaWNrbmVzcyBvZiBhbiBlbGVtZW50J3Mgb3V0bGluZS4gQW4gb3V0bGluZSBpcyBhIGxpbmUgdGhhdCBpcyBkcmF3biBhcm91bmQgYW4gZWxlbWVudCwgb3V0c2lkZSB0aGUgYm9yZGVyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvb3V0bGluZS13aWR0aCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW91dGxpbmUtd2lkdGhcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwib3V0bGluZS13aWR0aFwiPSBcIm91dGxpbmUtd2lkdGhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG92ZXJmbG93IENTUyBzaG9ydGhhbmQgcHJvcGVydHkgc2V0cyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3IgYW4gZWxlbWVudCdzIG92ZXJmbG93IOKAlCBpLmUuIHdoZW4gYW4gZWxlbWVudCdzIGNvbnRlbnQgaXMgdG9vIGJpZyB0byBmaXQgaW4gaXRzIGJsb2NrIGZvcm1hdHRpbmcgY29udGV4dCDigJQgaW4gYm90aCBkaXJlY3Rpb25zLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvb3ZlcmZsb3cgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1vdmVyZmxvd1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBvdmVyZmxvdz0gXCJvdmVyZmxvd1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgb3ZlcmZsb3ctYW5jaG9yIENTUyBwcm9wZXJ0eSBwcm92aWRlcyBhIHdheSB0byBvcHQgb3V0IG9mIHRoZSBicm93c2VyJ3Mgc2Nyb2xsIGFuY2hvcmluZyBiZWhhdmlvciwgd2hpY2ggYWRqdXN0cyBzY3JvbGwgcG9zaXRpb24gdG8gbWluaW1pemUgY29udGVudCBzaGlmdHMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9vdmVyZmxvdy1hbmNob3IgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1vdmVyZmxvdy1hbmNob3JcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwib3ZlcmZsb3ctYW5jaG9yXCI9IFwib3ZlcmZsb3ctYW5jaG9yXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBvdmVyZmxvdy13cmFwIENTUyBwcm9wZXJ0eSBhcHBsaWVzIHRvIGlubGluZSBlbGVtZW50cywgc2V0dGluZyB3aGV0aGVyIHRoZSBicm93c2VyIHNob3VsZCBpbnNlcnQgbGluZSBicmVha3Mgd2l0aGluIGFuIG90aGVyd2lzZSB1bmJyZWFrYWJsZSBzdHJpbmcgdG8gcHJldmVudCB0ZXh0IGZyb20gb3ZlcmZsb3dpbmcgaXRzIGxpbmUgYm94LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvb3ZlcmZsb3ctd3JhcCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW92ZXJmbG93LXdyYXBcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwib3ZlcmZsb3ctd3JhcFwiPSBcIm92ZXJmbG93LXdyYXBcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG92ZXJmbG93LXggQ1NTIHByb3BlcnR5IHNldHMgd2hhdCBzaG93cyB3aGVuIGNvbnRlbnQgb3ZlcmZsb3dzIGEgYmxvY2stbGV2ZWwgZWxlbWVudCdzIGxlZnQgYW5kIHJpZ2h0IGVkZ2VzLiBUaGlzIG1heSBiZSBub3RoaW5nLCBhIHNjcm9sbCBiYXIsIG9yIHRoZSBvdmVyZmxvdyBjb250ZW50LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvb3ZlcmZsb3cteCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW92ZXJmbG93LXhcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwib3ZlcmZsb3cteFwiPSBcIm92ZXJmbG93LXhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG92ZXJmbG93LXkgQ1NTIHByb3BlcnR5IHNldHMgd2hhdCBzaG93cyB3aGVuIGNvbnRlbnQgb3ZlcmZsb3dzIGEgYmxvY2stbGV2ZWwgZWxlbWVudCdzIHRvcCBhbmQgYm90dG9tIGVkZ2VzLiBUaGlzIG1heSBiZSBub3RoaW5nLCBhIHNjcm9sbCBiYXIsIG9yIHRoZSBvdmVyZmxvdyBjb250ZW50LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvb3ZlcmZsb3cteSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW92ZXJmbG93LXlcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwib3ZlcmZsb3cteVwiPSBcIm92ZXJmbG93LXlcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG92ZXJzY3JvbGwtYmVoYXZpb3IgQ1NTIHByb3BlcnR5IHNldHMgd2hhdCBhIGJyb3dzZXIgZG9lcyB3aGVuIHJlYWNoaW5nIHRoZSBib3VuZGFyeSBvZiBhIHNjcm9sbGluZyBhcmVhLiBJdCdzIGEgc2hvcnRoYW5kIGZvciBvdmVyc2Nyb2xsLWJlaGF2aW9yLXggYW5kIG92ZXJzY3JvbGwtYmVoYXZpb3IteS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL292ZXJzY3JvbGwtYmVoYXZpb3IgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1vdmVyc2Nyb2xsLWJlaGF2aW9yXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIm92ZXJzY3JvbGwtYmVoYXZpb3JcIj0gXCJvdmVyc2Nyb2xsLWJlaGF2aW9yXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBvdmVyc2Nyb2xsLWJlaGF2aW9yLWJsb2NrJm5ic3A7Q1NTIHByb3BlcnR5IHNldHMgdGhlIGJyb3dzZXIncyBiZWhhdmlvciB3aGVuIHRoZSBibG9jayBkaXJlY3Rpb24mbmJzcDtib3VuZGFyeSBvZiBhIHNjcm9sbGluZyBhcmVhIGlzIHJlYWNoZWQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9vdmVyc2Nyb2xsLWJlaGF2aW9yLWJsb2NrIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9b3ZlcnNjcm9sbC1iZWhhdmlvci1ibG9ja1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJvdmVyc2Nyb2xsLWJlaGF2aW9yLWJsb2NrXCI9IFwib3ZlcnNjcm9sbC1iZWhhdmlvci1ibG9ja1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgb3ZlcnNjcm9sbC1iZWhhdmlvci1pbmxpbmUmbmJzcDtDU1MgcHJvcGVydHkgc2V0cyB0aGUgYnJvd3NlcidzIGJlaGF2aW9yIHdoZW4gdGhlIGlubGluZSZuYnNwO2RpcmVjdGlvbiZuYnNwO2JvdW5kYXJ5IG9mIGEgc2Nyb2xsaW5nIGFyZWEgaXMgcmVhY2hlZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL292ZXJzY3JvbGwtYmVoYXZpb3ItaW5saW5lIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9b3ZlcnNjcm9sbC1iZWhhdmlvci1pbmxpbmVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwib3ZlcnNjcm9sbC1iZWhhdmlvci1pbmxpbmVcIj0gXCJvdmVyc2Nyb2xsLWJlaGF2aW9yLWlubGluZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgb3ZlcnNjcm9sbC1iZWhhdmlvci14IENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBicm93c2VyJ3MgYmVoYXZpb3Igd2hlbiB0aGUgaG9yaXpvbnRhbCBib3VuZGFyeSBvZiBhIHNjcm9sbGluZyBhcmVhIGlzIHJlYWNoZWQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9vdmVyc2Nyb2xsLWJlaGF2aW9yLXggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1vdmVyc2Nyb2xsLWJlaGF2aW9yLXhcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwib3ZlcnNjcm9sbC1iZWhhdmlvci14XCI9IFwib3ZlcnNjcm9sbC1iZWhhdmlvci14XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBvdmVyc2Nyb2xsLWJlaGF2aW9yLXkgQ1NTIHByb3BlcnR5IHNldHMgdGhlIGJyb3dzZXIncyBiZWhhdmlvciB3aGVuIHRoZSB2ZXJ0aWNhbCBib3VuZGFyeSBvZiBhIHNjcm9sbGluZyBhcmVhIGlzIHJlYWNoZWQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9vdmVyc2Nyb2xsLWJlaGF2aW9yLXkgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1vdmVyc2Nyb2xsLWJlaGF2aW9yLXlcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwib3ZlcnNjcm9sbC1iZWhhdmlvci15XCI9IFwib3ZlcnNjcm9sbC1iZWhhdmlvci15XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBwYWRkaW5nIENTUyBzaG9ydGhhbmQgcHJvcGVydHkgc2V0cyB0aGUgcGFkZGluZyBhcmVhIG9uIGFsbCBmb3VyIHNpZGVzIG9mIGFuIGVsZW1lbnQgYXQgb25jZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3BhZGRpbmcgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1wYWRkaW5nXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHBhZGRpbmc9IFwicGFkZGluZ1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgcGFkZGluZy1ibG9jayBDU1Mgc2hvcnRoYW5kIHByb3BlcnR5IGRlZmluZXMgdGhlIGxvZ2ljYWwgYmxvY2sgc3RhcnQgYW5kIGVuZCBwYWRkaW5nIG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gcGh5c2ljYWwgcGFkZGluZyBwcm9wZXJ0aWVzIGRlcGVuZGluZyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmcgbW9kZSwgZGlyZWN0aW9uYWxpdHksIGFuZCB0ZXh0IG9yaWVudGF0aW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvcGFkZGluZy1ibG9jayBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXBhZGRpbmctYmxvY2tcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwicGFkZGluZy1ibG9ja1wiPSBcInBhZGRpbmctYmxvY2tcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHBhZGRpbmctYmxvY2stZW5kIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBsb2dpY2FsIGJsb2NrIGVuZCBwYWRkaW5nIG9mIGFuIGVsZW1lbnQsIHdoaWNoIG1hcHMgdG8gYSBwaHlzaWNhbCBwYWRkaW5nIGRlcGVuZGluZyBvbiB0aGUgZWxlbWVudCdzIHdyaXRpbmcgbW9kZSwgZGlyZWN0aW9uYWxpdHksIGFuZCB0ZXh0IG9yaWVudGF0aW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvcGFkZGluZy1ibG9jay1lbmQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1wYWRkaW5nLWJsb2NrLWVuZFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJwYWRkaW5nLWJsb2NrLWVuZFwiPSBcInBhZGRpbmctYmxvY2stZW5kXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBwYWRkaW5nLWJsb2NrLXN0YXJ0IENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBsb2dpY2FsIGJsb2NrIHN0YXJ0IHBhZGRpbmcgb2YgYW4gZWxlbWVudCwgd2hpY2ggbWFwcyB0byBhIHBoeXNpY2FsIHBhZGRpbmcgZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9wYWRkaW5nLWJsb2NrLXN0YXJ0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9cGFkZGluZy1ibG9jay1zdGFydFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJwYWRkaW5nLWJsb2NrLXN0YXJ0XCI9IFwicGFkZGluZy1ibG9jay1zdGFydFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgcGFkZGluZy1ib3R0b20gQ1NTIHByb3BlcnR5IHNldHMgdGhlIGhlaWdodCBvZiB0aGUgcGFkZGluZyBhcmVhIG9uIHRoZSBib3R0b20gb2YgYW4gZWxlbWVudC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3BhZGRpbmctYm90dG9tIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9cGFkZGluZy1ib3R0b21cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwicGFkZGluZy1ib3R0b21cIj0gXCJwYWRkaW5nLWJvdHRvbVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgcGFkZGluZy1pbmxpbmUgQ1NTIHNob3J0aGFuZCBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBsb2dpY2FsIGlubGluZSBzdGFydCBhbmQgZW5kIHBhZGRpbmcgb2YgYW4gZWxlbWVudCwgd2hpY2ggbWFwcyB0byBwaHlzaWNhbCBwYWRkaW5nIHByb3BlcnRpZXMgZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9wYWRkaW5nLWlubGluZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXBhZGRpbmctaW5saW5lXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInBhZGRpbmctaW5saW5lXCI9IFwicGFkZGluZy1pbmxpbmVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHBhZGRpbmctaW5saW5lLWVuZCBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgbG9naWNhbCBpbmxpbmUgZW5kIHBhZGRpbmcgb2YgYW4gZWxlbWVudCwgd2hpY2ggbWFwcyB0byBhIHBoeXNpY2FsIHBhZGRpbmcgZGVwZW5kaW5nIG9uIHRoZSBlbGVtZW50J3Mgd3JpdGluZyBtb2RlLCBkaXJlY3Rpb25hbGl0eSwgYW5kIHRleHQgb3JpZW50YXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9wYWRkaW5nLWlubGluZS1lbmQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1wYWRkaW5nLWlubGluZS1lbmRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwicGFkZGluZy1pbmxpbmUtZW5kXCI9IFwicGFkZGluZy1pbmxpbmUtZW5kXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBwYWRkaW5nLWlubGluZS1zdGFydCBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgbG9naWNhbCBpbmxpbmUgc3RhcnQgcGFkZGluZyBvZiBhbiBlbGVtZW50LCB3aGljaCBtYXBzIHRvIGEgcGh5c2ljYWwgcGFkZGluZyBkZXBlbmRpbmcgb24gdGhlIGVsZW1lbnQncyB3cml0aW5nIG1vZGUsIGRpcmVjdGlvbmFsaXR5LCBhbmQgdGV4dCBvcmllbnRhdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3BhZGRpbmctaW5saW5lLXN0YXJ0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9cGFkZGluZy1pbmxpbmUtc3RhcnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwicGFkZGluZy1pbmxpbmUtc3RhcnRcIj0gXCJwYWRkaW5nLWlubGluZS1zdGFydFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgcGFkZGluZy1sZWZ0IENTUyBwcm9wZXJ0eSBzZXRzIHRoZSB3aWR0aCBvZiB0aGUgcGFkZGluZyBhcmVhIHRvIHRoZSBsZWZ0IG9mIGFuIGVsZW1lbnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9wYWRkaW5nLWxlZnQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1wYWRkaW5nLWxlZnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwicGFkZGluZy1sZWZ0XCI9IFwicGFkZGluZy1sZWZ0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBwYWRkaW5nLXJpZ2h0IENTUyBwcm9wZXJ0eSBzZXRzIHRoZSB3aWR0aCBvZiB0aGUgcGFkZGluZyBhcmVhIG9uIHRoZSByaWdodCBvZiBhbiBlbGVtZW50LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvcGFkZGluZy1yaWdodCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXBhZGRpbmctcmlnaHRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwicGFkZGluZy1yaWdodFwiPSBcInBhZGRpbmctcmlnaHRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHBhZGRpbmctdG9wIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBoZWlnaHQgb2YgdGhlIHBhZGRpbmcgYXJlYSBvbiB0aGUgdG9wIG9mIGFuIGVsZW1lbnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9wYWRkaW5nLXRvcCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXBhZGRpbmctdG9wXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInBhZGRpbmctdG9wXCI9IFwicGFkZGluZy10b3BcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICBwYWdlPSBcInBhZ2VcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHBhZ2UtYnJlYWstYWZ0ZXIgQ1NTIHByb3BlcnR5IGFkanVzdHMgcGFnZSBicmVha3MgYWZ0ZXIgdGhlIGN1cnJlbnQgZWxlbWVudC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3BhZ2UtYnJlYWstYWZ0ZXIgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1wYWdlLWJyZWFrLWFmdGVyXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInBhZ2UtYnJlYWstYWZ0ZXJcIj0gXCJwYWdlLWJyZWFrLWFmdGVyXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBwYWdlLWJyZWFrLWJlZm9yZSBDU1MgcHJvcGVydHkgYWRqdXN0cyBwYWdlIGJyZWFrcyBiZWZvcmUgdGhlIGN1cnJlbnQgZWxlbWVudC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3BhZ2UtYnJlYWstYmVmb3JlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9cGFnZS1icmVhay1iZWZvcmVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwicGFnZS1icmVhay1iZWZvcmVcIj0gXCJwYWdlLWJyZWFrLWJlZm9yZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgcGFnZS1icmVhay1pbnNpZGUgQ1NTIHByb3BlcnR5IGFkanVzdHMgcGFnZSBicmVha3MgaW5zaWRlIHRoZSBjdXJyZW50IGVsZW1lbnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9wYWdlLWJyZWFrLWluc2lkZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXBhZ2UtYnJlYWstaW5zaWRlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInBhZ2UtYnJlYWstaW5zaWRlXCI9IFwicGFnZS1icmVhay1pbnNpZGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJwYWdlLW9yaWVudGF0aW9uXCI9IFwicGFnZS1vcmllbnRhdGlvblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgcGFpbnQtb3JkZXIgQ1NTIHByb3BlcnR5IGxldHMgeW91IGNvbnRyb2wgdGhlIG9yZGVyIGluIHdoaWNoIHRoZSBmaWxsIGFuZCBzdHJva2UgKGFuZCBwYWludGluZyBtYXJrZXJzKSBvZiB0ZXh0IGNvbnRlbnQgYW5kIHNoYXBlcyBhcmUgZHJhd24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9wYWludC1vcmRlciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXBhaW50LW9yZGVyXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInBhaW50LW9yZGVyXCI9IFwicGFpbnQtb3JkZXJcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHBlcnNwZWN0aXZlIENTUyBwcm9wZXJ0eSBkZXRlcm1pbmVzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB6PTAgcGxhbmUgYW5kIHRoZSB1c2VyIGluIG9yZGVyIHRvIGdpdmUgYSAzRC1wb3NpdGlvbmVkIGVsZW1lbnQgc29tZSBwZXJzcGVjdGl2ZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3BlcnNwZWN0aXZlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9cGVyc3BlY3RpdmVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcGVyc3BlY3RpdmU9IFwicGVyc3BlY3RpdmVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHBlcnNwZWN0aXZlLW9yaWdpbiBDU1MgcHJvcGVydHkgZGV0ZXJtaW5lcyB0aGUgcG9zaXRpb24gYXQgd2hpY2ggdGhlIHZpZXdlciBpcyBsb29raW5nLiBJdCBpcyB1c2VkIGFzIHRoZSB2YW5pc2hpbmcgcG9pbnQgYnkgdGhlIHBlcnNwZWN0aXZlIHByb3BlcnR5LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvcGVyc3BlY3RpdmUtb3JpZ2luIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9cGVyc3BlY3RpdmUtb3JpZ2luXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInBlcnNwZWN0aXZlLW9yaWdpblwiPSBcInBlcnNwZWN0aXZlLW9yaWdpblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgcGxhY2UtY29udGVudCBDU1Mgc2hvcnRoYW5kIHByb3BlcnR5IGFsbG93cyB5b3UgdG8gYWxpZ24gY29udGVudCBhbG9uZyBib3RoIHRoZSBibG9jayBhbmQgaW5saW5lIGRpcmVjdGlvbnMgYXQgb25jZSAoaS5lLiB0aGUgYWxpZ24tY29udGVudCBhbmQganVzdGlmeS1jb250ZW50IHByb3BlcnRpZXMpIGluIGEgcmVsZXZhbnQgbGF5b3V0IHN5c3RlbSBzdWNoIGFzIEdyaWQgb3IgRmxleGJveC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3BsYWNlLWNvbnRlbnQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1wbGFjZS1jb250ZW50XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInBsYWNlLWNvbnRlbnRcIj0gXCJwbGFjZS1jb250ZW50XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBDU1MgcGxhY2UtaXRlbXMgc2hvcnRoYW5kIHByb3BlcnR5IGFsbG93cyB5b3UgdG8gYWxpZ24gaXRlbXMgYWxvbmcgYm90aCB0aGUgYmxvY2sgYW5kIGlubGluZSBkaXJlY3Rpb25zIGF0IG9uY2UgKGkuZS4gdGhlIGFsaWduLWl0ZW1zIGFuZCBqdXN0aWZ5LWl0ZW1zIHByb3BlcnRpZXMpIGluIGEgcmVsZXZhbnQgbGF5b3V0IHN5c3RlbSBzdWNoIGFzIEdyaWQgb3IgRmxleGJveC4gSWYgdGhlIHNlY29uZCB2YWx1ZSBpcyBub3Qgc2V0LCB0aGUgZmlyc3QgdmFsdWUgaXMgYWxzbyB1c2VkIGZvciBpdC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3BsYWNlLWl0ZW1zIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9cGxhY2UtaXRlbXNcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwicGxhY2UtaXRlbXNcIj0gXCJwbGFjZS1pdGVtc1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgcGxhY2Utc2VsZiBDU1Mgc2hvcnRoYW5kIHByb3BlcnR5IGFsbG93cyB5b3UgdG8gYWxpZ24gYW4gaW5kaXZpZHVhbCBpdGVtIGluIGJvdGggdGhlIGJsb2NrIGFuZCBpbmxpbmUgZGlyZWN0aW9ucyBhdCBvbmNlIChpLmUuIHRoZSBhbGlnbi1zZWxmIGFuZCBqdXN0aWZ5LXNlbGYgcHJvcGVydGllcykgaW4gYSByZWxldmFudCBsYXlvdXQgc3lzdGVtIHN1Y2ggYXMgR3JpZCBvciBGbGV4Ym94LiBJZiB0aGUgc2Vjb25kIHZhbHVlIGlzIG5vdCBwcmVzZW50LCB0aGUgZmlyc3QgdmFsdWUgaXMgYWxzbyB1c2VkIGZvciBpdC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3BsYWNlLXNlbGYgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1wbGFjZS1zZWxmXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInBsYWNlLXNlbGZcIj0gXCJwbGFjZS1zZWxmXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBwb2ludGVyLWV2ZW50cyBDU1MgcHJvcGVydHkgc2V0cyB1bmRlciB3aGF0IGNpcmN1bXN0YW5jZXMgKGlmIGFueSkgYSBwYXJ0aWN1bGFyIGdyYXBoaWMgZWxlbWVudCBjYW4gYmVjb21lIHRoZSB0YXJnZXQgb2YgcG9pbnRlciBldmVudHMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9wb2ludGVyLWV2ZW50cyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXBvaW50ZXItZXZlbnRzXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInBvaW50ZXItZXZlbnRzXCI9IFwicG9pbnRlci1ldmVudHNcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHBvc2l0aW9uIENTUyBwcm9wZXJ0eSBzZXRzIGhvdyBhbiBlbGVtZW50IGlzIHBvc2l0aW9uZWQgaW4gYSBkb2N1bWVudC4gVGhlIHRvcCwgcmlnaHQsIGJvdHRvbSwgYW5kIGxlZnQgcHJvcGVydGllcyBkZXRlcm1pbmUgdGhlIGZpbmFsIGxvY2F0aW9uIG9mIHBvc2l0aW9uZWQgZWxlbWVudHMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9wb3NpdGlvbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXBvc2l0aW9uXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHBvc2l0aW9uPSBcInBvc2l0aW9uXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBxdW90ZXMgQ1NTIHByb3BlcnR5IHNldHMgaG93IHRoZSBicm93c2VyIHNob3VsZCByZW5kZXIgcXVvdGF0aW9uIG1hcmtzIHRoYXQgYXJlIGFkZGVkIHVzaW5nIHRoZSBvcGVuLXF1b3RlcyBvciBjbG9zZS1xdW90ZXMgdmFsdWVzIG9mIHRoZSBDU1MgY29udGVudCBwcm9wZXJ0eS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3F1b3RlcyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXF1b3Rlc1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBxdW90ZXM9IFwicXVvdGVzXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSByIGF0dHJpYnV0ZSBkZWZpbmVzIHRoZSByYWRpdXMgb2YgYSBjaXJjbGUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NWRy9BdHRyaWJ1dGUvciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXJcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcj0gXCJyXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSByZXNpemUgQ1NTIHByb3BlcnR5IHNldHMgd2hldGhlciBhbiBlbGVtZW50IGlzIHJlc2l6YWJsZSwgYW5kIGlmIHNvLCBpbiB3aGljaCBkaXJlY3Rpb25zLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvcmVzaXplIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9cmVzaXplXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlc2l6ZT0gXCJyZXNpemVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHJpZ2h0IENTUyBwcm9wZXJ0eSBwYXJ0aWNpcGF0ZXMgaW4gc3BlY2lmeWluZyB0aGUgaG9yaXpvbnRhbCBwb3NpdGlvbiBvZiBhIHBvc2l0aW9uZWQgZWxlbWVudC4gSXQgaGFzIG5vIGVmZmVjdCBvbiBub24tcG9zaXRpb25lZCBlbGVtZW50cy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3JpZ2h0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9cmlnaHRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmlnaHQ9IFwicmlnaHRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHJvdy1nYXAgQ1NTIHByb3BlcnR5IHNldHMgdGhlIHNpemUgb2YgdGhlIGdhcCAoZ3V0dGVyKSBiZXR3ZWVuIGFuIGVsZW1lbnQncyBncmlkIHJvd3MuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9yb3ctZ2FwIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9cm93LWdhcFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJyb3ctZ2FwXCI9IFwicm93LWdhcFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgcnVieS1wb3NpdGlvbiBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgcG9zaXRpb24gb2YgYSBydWJ5IGVsZW1lbnQgcmVsYXRpdmVzIHRvIGl0cyBiYXNlIGVsZW1lbnQuIEl0IGNhbiBiZSBwb3NpdGlvbmVkIG92ZXIgdGhlIGVsZW1lbnQgKG92ZXIpLCB1bmRlciBpdCAodW5kZXIpLCBvciBiZXR3ZWVuIHRoZSBjaGFyYWN0ZXJzIG9uIHRoZWlyIHJpZ2h0IHNpZGUgKGludGVyLWNoYXJhY3RlcikuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ydWJ5LXBvc2l0aW9uIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9cnVieS1wb3NpdGlvblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJydWJ5LXBvc2l0aW9uXCI9IFwicnVieS1wb3NpdGlvblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgcnggYXR0cmlidXRlIGRlZmluZXMgYSByYWRpdXMgb24gdGhlIHgtYXhpcy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9yeCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXJ4XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJ4PSBcInJ4XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSByeSBhdHRyaWJ1dGUgZGVmaW5lcyBhIHJhZGl1cyBvbiB0aGUgeS1heGlzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL3J5IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9cnlcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcnk9IFwicnlcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHNjcm9sbC1iZWhhdmlvciBDU1MgcHJvcGVydHkgc2V0cyB0aGUgYmVoYXZpb3IgZm9yIGEgc2Nyb2xsaW5nIGJveCB3aGVuIHNjcm9sbGluZyBpcyB0cmlnZ2VyZWQgYnkgdGhlIG5hdmlnYXRpb24gb3IgQ1NTT00gc2Nyb2xsaW5nIEFQSXMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9zY3JvbGwtYmVoYXZpb3IgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zY3JvbGwtYmVoYXZpb3JcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic2Nyb2xsLWJlaGF2aW9yXCI9IFwic2Nyb2xsLWJlaGF2aW9yXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzY3JvbGwtbWFyZ2luIHNob3J0aGFuZCBwcm9wZXJ0eSBzZXRzIGFsbCBvZiB0aGUgc2Nyb2xsIG1hcmdpbnMgb2YgYW4gZWxlbWVudCBhdCBvbmNlLCBhc3NpZ25pbmcgdmFsdWVzIG11Y2ggbGlrZSB0aGUgbWFyZ2luIHByb3BlcnR5IGRvZXMgZm9yIG1hcmdpbnMgb2YgYW4gZWxlbWVudC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3Njcm9sbC1tYXJnaW4gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zY3JvbGwtbWFyZ2luXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInNjcm9sbC1tYXJnaW5cIj0gXCJzY3JvbGwtbWFyZ2luXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzY3JvbGwtbWFyZ2luLWJsb2NrIHNob3J0aGFuZCBwcm9wZXJ0eSBzZXRzIHRoZSBzY3JvbGwgbWFyZ2lucyBvZiBhbiBlbGVtZW50IGluIHRoZSBibG9jayBkaW1lbnNpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9zY3JvbGwtbWFyZ2luLWJsb2NrIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c2Nyb2xsLW1hcmdpbi1ibG9ja1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzY3JvbGwtbWFyZ2luLWJsb2NrXCI9IFwic2Nyb2xsLW1hcmdpbi1ibG9ja1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc2Nyb2xsLW1hcmdpbi1ibG9jay1lbmQmbmJzcDtwcm9wZXJ0eSBkZWZpbmVzIHRoZSZuYnNwO21hcmdpbiBvZiZuYnNwO3RoZSBzY3JvbGwgc25hcCBhcmVhIGF0IHRoZSBlbmQmbmJzcDtvZiB0aGUgYmxvY2sgZGltZW5zaW9uJm5ic3A7dGhhdCBpcyB1c2VkIGZvciBzbmFwcGluZyB0aGlzIGJveCB0byB0aGUgc25hcHBvcnQuIFRoZSBzY3JvbGwgc25hcCBhcmVhIGlzIGRldGVybWluZWQgYnkgdGFraW5nIHRoZSB0cmFuc2Zvcm1lZCBib3JkZXIgYm94LCBmaW5kaW5nIGl0cyByZWN0YW5ndWxhciBib3VuZGluZyBib3ggKGF4aXMtYWxpZ25lZCBpbiB0aGUgc2Nyb2xsIGNvbnRhaW5lcuKAmXMgY29vcmRpbmF0ZSBzcGFjZSksIHRoZW4gYWRkaW5nIHRoZSBzcGVjaWZpZWQgb3V0c2V0cy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3Njcm9sbC1tYXJnaW4tYmxvY2stZW5kIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c2Nyb2xsLW1hcmdpbi1ibG9jay1lbmRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic2Nyb2xsLW1hcmdpbi1ibG9jay1lbmRcIj0gXCJzY3JvbGwtbWFyZ2luLWJsb2NrLWVuZFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc2Nyb2xsLW1hcmdpbi1ibG9jay1zdGFydCZuYnNwO3Byb3BlcnR5IGRlZmluZXMgdGhlJm5ic3A7bWFyZ2luIG9mJm5ic3A7dGhlIHNjcm9sbCBzbmFwIGFyZWEgYXQgdGhlIHN0YXJ0IG9mIHRoZSBibG9jayBkaW1lbnNpb24mbmJzcDt0aGF0IGlzIHVzZWQgZm9yIHNuYXBwaW5nIHRoaXMgYm94IHRvIHRoZSBzbmFwcG9ydC4gVGhlIHNjcm9sbCBzbmFwIGFyZWEgaXMgZGV0ZXJtaW5lZCBieSB0YWtpbmcgdGhlIHRyYW5zZm9ybWVkIGJvcmRlciBib3gsIGZpbmRpbmcgaXRzIHJlY3Rhbmd1bGFyIGJvdW5kaW5nIGJveCAoYXhpcy1hbGlnbmVkIGluIHRoZSBzY3JvbGwgY29udGFpbmVy4oCZcyBjb29yZGluYXRlIHNwYWNlKSwgdGhlbiBhZGRpbmcgdGhlIHNwZWNpZmllZCBvdXRzZXRzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvc2Nyb2xsLW1hcmdpbi1ibG9jay1zdGFydCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXNjcm9sbC1tYXJnaW4tYmxvY2stc3RhcnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic2Nyb2xsLW1hcmdpbi1ibG9jay1zdGFydFwiPSBcInNjcm9sbC1tYXJnaW4tYmxvY2stc3RhcnRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHNjcm9sbC1tYXJnaW4tYm90dG9tIHByb3BlcnR5IGRlZmluZXMgdGhlIGJvdHRvbSBtYXJnaW4gb2YgdGhlIHNjcm9sbCBzbmFwIGFyZWEgdGhhdCBpcyB1c2VkIGZvciBzbmFwcGluZyB0aGlzIGJveCB0byB0aGUgc25hcHBvcnQuIFRoZSBzY3JvbGwgc25hcCBhcmVhIGlzIGRldGVybWluZWQgYnkgdGFraW5nIHRoZSB0cmFuc2Zvcm1lZCBib3JkZXIgYm94LCBmaW5kaW5nIGl0cyByZWN0YW5ndWxhciBib3VuZGluZyBib3ggKGF4aXMtYWxpZ25lZCBpbiB0aGUgc2Nyb2xsIGNvbnRhaW5lcuKAmXMgY29vcmRpbmF0ZSBzcGFjZSksIHRoZW4gYWRkaW5nIHRoZSBzcGVjaWZpZWQgb3V0c2V0cy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3Njcm9sbC1tYXJnaW4tYm90dG9tIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c2Nyb2xsLW1hcmdpbi1ib3R0b21cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic2Nyb2xsLW1hcmdpbi1ib3R0b21cIj0gXCJzY3JvbGwtbWFyZ2luLWJvdHRvbVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc2Nyb2xsLW1hcmdpbi1pbmxpbmUgc2hvcnRoYW5kIHByb3BlcnR5IHNldHMgdGhlIHNjcm9sbCBtYXJnaW5zIG9mIGFuIGVsZW1lbnQgaW4gdGhlIGlubGluZSBkaW1lbnNpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9zY3JvbGwtbWFyZ2luLWlubGluZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXNjcm9sbC1tYXJnaW4taW5saW5lXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInNjcm9sbC1tYXJnaW4taW5saW5lXCI9IFwic2Nyb2xsLW1hcmdpbi1pbmxpbmVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHNjcm9sbC1tYXJnaW4taW5saW5lLWVuZCZuYnNwO3Byb3BlcnR5IGRlZmluZXMgdGhlJm5ic3A7bWFyZ2luIG9mJm5ic3A7dGhlIHNjcm9sbCBzbmFwIGFyZWEgYXQgdGhlIGVuZCZuYnNwO29mIHRoZSBpbmxpbmUmbmJzcDtkaW1lbnNpb24mbmJzcDt0aGF0IGlzIHVzZWQgZm9yIHNuYXBwaW5nIHRoaXMgYm94IHRvIHRoZSBzbmFwcG9ydC4gVGhlIHNjcm9sbCBzbmFwIGFyZWEgaXMgZGV0ZXJtaW5lZCBieSB0YWtpbmcgdGhlIHRyYW5zZm9ybWVkIGJvcmRlciBib3gsIGZpbmRpbmcgaXRzIHJlY3Rhbmd1bGFyIGJvdW5kaW5nIGJveCAoYXhpcy1hbGlnbmVkIGluIHRoZSBzY3JvbGwgY29udGFpbmVy4oCZcyBjb29yZGluYXRlIHNwYWNlKSwgdGhlbiBhZGRpbmcgdGhlIHNwZWNpZmllZCBvdXRzZXRzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvc2Nyb2xsLW1hcmdpbi1pbmxpbmUtZW5kIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c2Nyb2xsLW1hcmdpbi1pbmxpbmUtZW5kXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInNjcm9sbC1tYXJnaW4taW5saW5lLWVuZFwiPSBcInNjcm9sbC1tYXJnaW4taW5saW5lLWVuZFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc2Nyb2xsLW1hcmdpbi1pbmxpbmUtc3RhcnQgcHJvcGVydHkgZGVmaW5lcyB0aGUgbWFyZ2luIG9mIHRoZSBzY3JvbGwgc25hcCBhcmVhIGF0IHRoZSBzdGFydCBvZiB0aGUgaW5saW5lIGRpbWVuc2lvbiB0aGF0IGlzIHVzZWQgZm9yIHNuYXBwaW5nIHRoaXMgYm94IHRvIHRoZSBzbmFwcG9ydC4gVGhlIHNjcm9sbCBzbmFwIGFyZWEgaXMgZGV0ZXJtaW5lZCBieSB0YWtpbmcgdGhlIHRyYW5zZm9ybWVkIGJvcmRlciBib3gsIGZpbmRpbmcgaXRzIHJlY3Rhbmd1bGFyIGJvdW5kaW5nIGJveCAoYXhpcy1hbGlnbmVkIGluIHRoZSBzY3JvbGwgY29udGFpbmVy4oCZcyBjb29yZGluYXRlIHNwYWNlKSwgdGhlbiBhZGRpbmcgdGhlIHNwZWNpZmllZCBvdXRzZXRzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvc2Nyb2xsLW1hcmdpbi1pbmxpbmUtc3RhcnQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zY3JvbGwtbWFyZ2luLWlubGluZS1zdGFydFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzY3JvbGwtbWFyZ2luLWlubGluZS1zdGFydFwiPSBcInNjcm9sbC1tYXJnaW4taW5saW5lLXN0YXJ0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzY3JvbGwtbWFyZ2luLWxlZnQgcHJvcGVydHkgZGVmaW5lcyB0aGUgbGVmdCBtYXJnaW4gb2YgdGhlIHNjcm9sbCBzbmFwIGFyZWEgdGhhdCBpcyB1c2VkIGZvciBzbmFwcGluZyB0aGlzIGJveCB0byB0aGUgc25hcHBvcnQuIFRoZSBzY3JvbGwgc25hcCBhcmVhIGlzIGRldGVybWluZWQgYnkgdGFraW5nIHRoZSB0cmFuc2Zvcm1lZCBib3JkZXIgYm94LCBmaW5kaW5nIGl0cyByZWN0YW5ndWxhciBib3VuZGluZyBib3ggKGF4aXMtYWxpZ25lZCBpbiB0aGUgc2Nyb2xsIGNvbnRhaW5lcuKAmXMgY29vcmRpbmF0ZSBzcGFjZSksIHRoZW4gYWRkaW5nIHRoZSBzcGVjaWZpZWQgb3V0c2V0cy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3Njcm9sbC1tYXJnaW4tbGVmdCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXNjcm9sbC1tYXJnaW4tbGVmdFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzY3JvbGwtbWFyZ2luLWxlZnRcIj0gXCJzY3JvbGwtbWFyZ2luLWxlZnRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHNjcm9sbC1tYXJnaW4tcmlnaHQgcHJvcGVydHkgZGVmaW5lcyB0aGUgcmlnaHQgbWFyZ2luIG9mIHRoZSBzY3JvbGwgc25hcCBhcmVhIHRoYXQgaXMgdXNlZCBmb3Igc25hcHBpbmcgdGhpcyBib3ggdG8gdGhlIHNuYXBwb3J0LiBUaGUgc2Nyb2xsIHNuYXAgYXJlYSBpcyBkZXRlcm1pbmVkIGJ5IHRha2luZyB0aGUgdHJhbnNmb3JtZWQgYm9yZGVyIGJveCwgZmluZGluZyBpdHMgcmVjdGFuZ3VsYXIgYm91bmRpbmcgYm94IChheGlzLWFsaWduZWQgaW4gdGhlIHNjcm9sbCBjb250YWluZXLigJlzIGNvb3JkaW5hdGUgc3BhY2UpLCB0aGVuIGFkZGluZyB0aGUgc3BlY2lmaWVkIG91dHNldHMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9zY3JvbGwtbWFyZ2luLXJpZ2h0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c2Nyb2xsLW1hcmdpbi1yaWdodFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzY3JvbGwtbWFyZ2luLXJpZ2h0XCI9IFwic2Nyb2xsLW1hcmdpbi1yaWdodFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc2Nyb2xsLW1hcmdpbi10b3AgcHJvcGVydHkgZGVmaW5lcyB0aGUgdG9wIG1hcmdpbiBvZiB0aGUgc2Nyb2xsIHNuYXAgYXJlYSB0aGF0IGlzIHVzZWQgZm9yIHNuYXBwaW5nIHRoaXMgYm94IHRvIHRoZSBzbmFwcG9ydC4gVGhlIHNjcm9sbCBzbmFwIGFyZWEgaXMgZGV0ZXJtaW5lZCBieSB0YWtpbmcgdGhlIHRyYW5zZm9ybWVkIGJvcmRlciBib3gsIGZpbmRpbmcgaXRzIHJlY3Rhbmd1bGFyIGJvdW5kaW5nIGJveCAoYXhpcy1hbGlnbmVkIGluIHRoZSBzY3JvbGwgY29udGFpbmVy4oCZcyBjb29yZGluYXRlIHNwYWNlKSwgdGhlbiBhZGRpbmcgdGhlIHNwZWNpZmllZCBvdXRzZXRzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvc2Nyb2xsLW1hcmdpbi10b3AgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zY3JvbGwtbWFyZ2luLXRvcFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzY3JvbGwtbWFyZ2luLXRvcFwiPSBcInNjcm9sbC1tYXJnaW4tdG9wXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzY3JvbGwtcGFkZGluZyBzaG9ydGhhbmQgcHJvcGVydHkgc2V0cyBzY3JvbGwgcGFkZGluZyBvbiBhbGwgc2lkZXMgb2YgYW4gZWxlbWVudCBhdCBvbmNlLCBtdWNoIGxpa2UgdGhlIHBhZGRpbmcgcHJvcGVydHkgZG9lcyBmb3IgcGFkZGluZyBvbiBhbiBlbGVtZW50LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvc2Nyb2xsLXBhZGRpbmcgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zY3JvbGwtcGFkZGluZ1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzY3JvbGwtcGFkZGluZ1wiPSBcInNjcm9sbC1wYWRkaW5nXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzY3JvbGwtcGFkZGluZy1ibG9jayBzaG9ydGhhbmQgcHJvcGVydHkgc2V0cyB0aGUgc2Nyb2xsIHBhZGRpbmcgb2YgYW4gZWxlbWVudCBpbiB0aGUgYmxvY2sgZGltZW5zaW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvc2Nyb2xsLXBhZGRpbmctYmxvY2sgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zY3JvbGwtcGFkZGluZy1ibG9ja1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzY3JvbGwtcGFkZGluZy1ibG9ja1wiPSBcInNjcm9sbC1wYWRkaW5nLWJsb2NrXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzY3JvbGwtcGFkZGluZy1ibG9jay1lbmQgcHJvcGVydHkgZGVmaW5lcyBvZmZzZXRzIGZvciB0aGUgZW5kIGVkZ2UgaW4gdGhlIGJsb2NrIGRpbWVuc2lvbiBvZiB0aGUgb3B0aW1hbCB2aWV3aW5nIHJlZ2lvbiBvZiB0aGUgc2Nyb2xscG9ydDogdGhlIHJlZ2lvbiB1c2VkIGFzIHRoZSB0YXJnZXQgcmVnaW9uIGZvciBwbGFjaW5nIHRoaW5ncyBpbiB2aWV3IG9mIHRoZSB1c2VyLiBUaGlzIGFsbG93cyB0aGUgYXV0aG9yIHRvIGV4Y2x1ZGUgcmVnaW9ucyBvZiB0aGUgc2Nyb2xscG9ydCB0aGF0IGFyZSBvYnNjdXJlZCBieSBvdGhlciBjb250ZW50IChzdWNoIGFzIGZpeGVkLXBvc2l0aW9uZWQgdG9vbGJhcnMgb3Igc2lkZWJhcnMpIG9yIHRvIHB1dCBtb3JlIGJyZWF0aGluZyByb29tIGJldHdlZW4gYSB0YXJnZXRlZCBlbGVtZW50IGFuZCB0aGUgZWRnZXMgb2YgdGhlIHNjcm9sbHBvcnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9zY3JvbGwtcGFkZGluZy1ibG9jay1lbmQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zY3JvbGwtcGFkZGluZy1ibG9jay1lbmRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic2Nyb2xsLXBhZGRpbmctYmxvY2stZW5kXCI9IFwic2Nyb2xsLXBhZGRpbmctYmxvY2stZW5kXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzY3JvbGwtcGFkZGluZy1ibG9jay1zdGFydCBwcm9wZXJ0eSBkZWZpbmVzIG9mZnNldHMgZm9yIHRoZSBzdGFydCBlZGdlIGluIHRoZSBibG9jayBkaW1lbnNpb24gb2YgdGhlIG9wdGltYWwgdmlld2luZyByZWdpb24gb2YgdGhlIHNjcm9sbHBvcnQ6IHRoZSByZWdpb24gdXNlZCBhcyB0aGUgdGFyZ2V0IHJlZ2lvbiBmb3IgcGxhY2luZyB0aGluZ3MgaW4gdmlldyBvZiB0aGUgdXNlci4gVGhpcyBhbGxvd3MgdGhlIGF1dGhvciB0byBleGNsdWRlIHJlZ2lvbnMgb2YgdGhlIHNjcm9sbHBvcnQgdGhhdCBhcmUgb2JzY3VyZWQgYnkgb3RoZXIgY29udGVudCAoc3VjaCBhcyBmaXhlZC1wb3NpdGlvbmVkIHRvb2xiYXJzIG9yIHNpZGViYXJzKSBvciB0byBwdXQgbW9yZSBicmVhdGhpbmcgcm9vbSBiZXR3ZWVuIGEgdGFyZ2V0ZWQgZWxlbWVudCBhbmQgdGhlIGVkZ2VzIG9mIHRoZSBzY3JvbGxwb3J0LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvc2Nyb2xsLXBhZGRpbmctYmxvY2stc3RhcnQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zY3JvbGwtcGFkZGluZy1ibG9jay1zdGFydFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzY3JvbGwtcGFkZGluZy1ibG9jay1zdGFydFwiPSBcInNjcm9sbC1wYWRkaW5nLWJsb2NrLXN0YXJ0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzY3JvbGwtcGFkZGluZy1ib3R0b20gcHJvcGVydHkgZGVmaW5lcyBvZmZzZXRzIGZvciB0aGUgYm90dG9tIG9mIHRoZSBvcHRpbWFsIHZpZXdpbmcgcmVnaW9uIG9mIHRoZSBzY3JvbGxwb3J0OiB0aGUgcmVnaW9uIHVzZWQgYXMgdGhlIHRhcmdldCByZWdpb24gZm9yIHBsYWNpbmcgdGhpbmdzIGluIHZpZXcgb2YgdGhlIHVzZXIuIFRoaXMgYWxsb3dzIHRoZSBhdXRob3IgdG8gZXhjbHVkZSByZWdpb25zIG9mIHRoZSBzY3JvbGxwb3J0IHRoYXQgYXJlIG9ic2N1cmVkIGJ5IG90aGVyIGNvbnRlbnQgKHN1Y2ggYXMgZml4ZWQtcG9zaXRpb25lZCB0b29sYmFycyBvciBzaWRlYmFycykgb3IgdG8gcHV0IG1vcmUgYnJlYXRoaW5nIHJvb20gYmV0d2VlbiBhIHRhcmdldGVkIGVsZW1lbnQgYW5kIHRoZSBlZGdlcyBvZiB0aGUgc2Nyb2xscG9ydC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3Njcm9sbC1wYWRkaW5nLWJvdHRvbSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXNjcm9sbC1wYWRkaW5nLWJvdHRvbVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzY3JvbGwtcGFkZGluZy1ib3R0b21cIj0gXCJzY3JvbGwtcGFkZGluZy1ib3R0b21cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHNjcm9sbC1wYWRkaW5nLWlubGluZSBzaG9ydGhhbmQgcHJvcGVydHkgc2V0cyB0aGUgc2Nyb2xsIHBhZGRpbmcgb2YgYW4gZWxlbWVudCBpbiB0aGUgaW5saW5lIGRpbWVuc2lvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3Njcm9sbC1wYWRkaW5nLWlubGluZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXNjcm9sbC1wYWRkaW5nLWlubGluZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzY3JvbGwtcGFkZGluZy1pbmxpbmVcIj0gXCJzY3JvbGwtcGFkZGluZy1pbmxpbmVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHNjcm9sbC1wYWRkaW5nLWlubGluZS1lbmQmbmJzcDtwcm9wZXJ0eSZuYnNwO2RlZmluZXMgb2Zmc2V0cyBmb3IgdGhlIGVuZCZuYnNwO2VkZ2UgaW4gdGhlIGlubGluZSZuYnNwO2RpbWVuc2lvbiZuYnNwO29mIHRoZSZuYnNwO29wdGltYWwgdmlld2luZyByZWdpb24mbmJzcDtvZiB0aGUgc2Nyb2xscG9ydDogdGhlIHJlZ2lvbiB1c2VkIGFzIHRoZSB0YXJnZXQgcmVnaW9uIGZvciBwbGFjaW5nIHRoaW5ncyBpbiB2aWV3IG9mIHRoZSB1c2VyLiBUaGlzIGFsbG93cyB0aGUgYXV0aG9yIHRvIGV4Y2x1ZGUgcmVnaW9ucyBvZiB0aGUgc2Nyb2xscG9ydCB0aGF0IGFyZSBvYnNjdXJlZCBieSBvdGhlciBjb250ZW50IChzdWNoIGFzIGZpeGVkLXBvc2l0aW9uZWQgdG9vbGJhcnMgb3Igc2lkZWJhcnMpIG9yIHRvIHB1dCBtb3JlIGJyZWF0aGluZyByb29tIGJldHdlZW4gYSB0YXJnZXRlZCBlbGVtZW50IGFuZCB0aGUgZWRnZXMgb2YgdGhlIHNjcm9sbHBvcnQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9zY3JvbGwtcGFkZGluZy1pbmxpbmUtZW5kIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c2Nyb2xsLXBhZGRpbmctaW5saW5lLWVuZFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzY3JvbGwtcGFkZGluZy1pbmxpbmUtZW5kXCI9IFwic2Nyb2xsLXBhZGRpbmctaW5saW5lLWVuZFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc2Nyb2xsLXBhZGRpbmctaW5saW5lLXN0YXJ0IHByb3BlcnR5IGRlZmluZXMgb2Zmc2V0cyBmb3IgdGhlIHN0YXJ0IGVkZ2UgaW4gdGhlIGlubGluZSBkaW1lbnNpb24gb2YgdGhlIG9wdGltYWwgdmlld2luZyByZWdpb24gb2YgdGhlIHNjcm9sbHBvcnQ6IHRoZSByZWdpb24gdXNlZCBhcyB0aGUgdGFyZ2V0IHJlZ2lvbiBmb3IgcGxhY2luZyB0aGluZ3MgaW4gdmlldyBvZiB0aGUgdXNlci4gVGhpcyBhbGxvd3MgdGhlIGF1dGhvciB0byBleGNsdWRlIHJlZ2lvbnMgb2YgdGhlIHNjcm9sbHBvcnQgdGhhdCBhcmUgb2JzY3VyZWQgYnkgb3RoZXIgY29udGVudCAoc3VjaCBhcyBmaXhlZC1wb3NpdGlvbmVkIHRvb2xiYXJzIG9yIHNpZGViYXJzKSBvciB0byBwdXQgbW9yZSBicmVhdGhpbmcgcm9vbSBiZXR3ZWVuIGEgdGFyZ2V0ZWQgZWxlbWVudCBhbmQgdGhlIGVkZ2VzIG9mIHRoZSBzY3JvbGxwb3J0LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvc2Nyb2xsLXBhZGRpbmctaW5saW5lLXN0YXJ0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c2Nyb2xsLXBhZGRpbmctaW5saW5lLXN0YXJ0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInNjcm9sbC1wYWRkaW5nLWlubGluZS1zdGFydFwiPSBcInNjcm9sbC1wYWRkaW5nLWlubGluZS1zdGFydFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc2Nyb2xsLXBhZGRpbmctbGVmdCBwcm9wZXJ0eSBkZWZpbmVzIG9mZnNldHMgZm9yIHRoZSBsZWZ0IG9mIHRoZSBvcHRpbWFsIHZpZXdpbmcgcmVnaW9uIG9mIHRoZSBzY3JvbGxwb3J0OiB0aGUgcmVnaW9uIHVzZWQgYXMgdGhlIHRhcmdldCByZWdpb24gZm9yIHBsYWNpbmcgdGhpbmdzIGluIHZpZXcgb2YgdGhlIHVzZXIuIFRoaXMgYWxsb3dzIHRoZSBhdXRob3IgdG8gZXhjbHVkZSByZWdpb25zIG9mIHRoZSBzY3JvbGxwb3J0IHRoYXQgYXJlIG9ic2N1cmVkIGJ5IG90aGVyIGNvbnRlbnQgKHN1Y2ggYXMgZml4ZWQtcG9zaXRpb25lZCB0b29sYmFycyBvciBzaWRlYmFycykgb3IgdG8gcHV0IG1vcmUgYnJlYXRoaW5nIHJvb20gYmV0d2VlbiBhIHRhcmdldGVkIGVsZW1lbnQgYW5kIHRoZSBlZGdlcyBvZiB0aGUgc2Nyb2xscG9ydC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3Njcm9sbC1wYWRkaW5nLWxlZnQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zY3JvbGwtcGFkZGluZy1sZWZ0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInNjcm9sbC1wYWRkaW5nLWxlZnRcIj0gXCJzY3JvbGwtcGFkZGluZy1sZWZ0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzY3JvbGwtcGFkZGluZy1yaWdodCZuYnNwO3Byb3BlcnR5Jm5ic3A7ZGVmaW5lcyBvZmZzZXRzIGZvciB0aGUgcmlnaHQmbmJzcDtvZiB0aGUmbmJzcDtvcHRpbWFsIHZpZXdpbmcgcmVnaW9uJm5ic3A7b2YgdGhlIHNjcm9sbHBvcnQ6IHRoZSByZWdpb24gdXNlZCBhcyB0aGUgdGFyZ2V0IHJlZ2lvbiBmb3IgcGxhY2luZyB0aGluZ3MgaW4gdmlldyBvZiB0aGUgdXNlci4gVGhpcyBhbGxvd3MgdGhlIGF1dGhvciB0byBleGNsdWRlIHJlZ2lvbnMgb2YgdGhlIHNjcm9sbHBvcnQgdGhhdCBhcmUgb2JzY3VyZWQgYnkgb3RoZXIgY29udGVudCAoc3VjaCBhcyBmaXhlZC1wb3NpdGlvbmVkIHRvb2xiYXJzIG9yIHNpZGViYXJzKSBvciB0byBwdXQgbW9yZSBicmVhdGhpbmcgcm9vbSBiZXR3ZWVuIGEgdGFyZ2V0ZWQgZWxlbWVudCBhbmQgdGhlIGVkZ2VzIG9mIHRoZSBzY3JvbGxwb3J0LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvc2Nyb2xsLXBhZGRpbmctcmlnaHQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zY3JvbGwtcGFkZGluZy1yaWdodFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzY3JvbGwtcGFkZGluZy1yaWdodFwiPSBcInNjcm9sbC1wYWRkaW5nLXJpZ2h0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzY3JvbGwtcGFkZGluZy10b3AgcHJvcGVydHkmbmJzcDtkZWZpbmVzIG9mZnNldHMgZm9yIHRoZSB0b3Agb2YgdGhlJm5ic3A7b3B0aW1hbCB2aWV3aW5nIHJlZ2lvbiZuYnNwO29mIHRoZSBzY3JvbGxwb3J0OiB0aGUgcmVnaW9uIHVzZWQgYXMgdGhlIHRhcmdldCByZWdpb24gZm9yIHBsYWNpbmcgdGhpbmdzIGluIHZpZXcgb2YgdGhlIHVzZXIuIFRoaXMgYWxsb3dzIHRoZSBhdXRob3IgdG8gZXhjbHVkZSByZWdpb25zIG9mIHRoZSBzY3JvbGxwb3J0IHRoYXQgYXJlIG9ic2N1cmVkIGJ5IG90aGVyIGNvbnRlbnQgKHN1Y2ggYXMgZml4ZWQtcG9zaXRpb25lZCB0b29sYmFycyBvciBzaWRlYmFycykgb3IgdG8gcHV0IG1vcmUgYnJlYXRoaW5nIHJvb20gYmV0d2VlbiBhIHRhcmdldGVkIGVsZW1lbnQgYW5kIHRoZSBlZGdlcyBvZiB0aGUgc2Nyb2xscG9ydC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3Njcm9sbC1wYWRkaW5nLXRvcCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXNjcm9sbC1wYWRkaW5nLXRvcFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzY3JvbGwtcGFkZGluZy10b3BcIj0gXCJzY3JvbGwtcGFkZGluZy10b3BcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHNjcm9sbC1zbmFwLWFsaWduIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgYm944oCZcyBzbmFwIHBvc2l0aW9uIGFzIGFuIGFsaWdubWVudCBvZiBpdHMgc25hcCBhcmVhIChhcyB0aGUgYWxpZ25tZW50IHN1YmplY3QpIHdpdGhpbiBpdHMgc25hcCBjb250YWluZXLigJlzIHNuYXBwb3J0IChhcyB0aGUgYWxpZ25tZW50IGNvbnRhaW5lcikuIFRoZSB0d28gdmFsdWVzIHNwZWNpZnkgdGhlIHNuYXBwaW5nIGFsaWdubWVudCBpbiB0aGUgYmxvY2sgYXhpcyBhbmQgaW5saW5lIGF4aXMsIHJlc3BlY3RpdmVseS4gSWYgb25seSBvbmUgdmFsdWUgaXMgc3BlY2lmaWVkLCB0aGUgc2Vjb25kIHZhbHVlIGRlZmF1bHRzIHRvIHRoZSBzYW1lIHZhbHVlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvc2Nyb2xsLXNuYXAtYWxpZ24gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zY3JvbGwtc25hcC1hbGlnblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzY3JvbGwtc25hcC1hbGlnblwiPSBcInNjcm9sbC1zbmFwLWFsaWduXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzY3JvbGwtc25hcC1zdG9wIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHdoZXRoZXIgdGhlIHNjcm9sbCBjb250YWluZXIgaXMgYWxsb3dlZCB0byBcInBhc3Mgb3ZlclwiIHBvc3NpYmxlIHNuYXAgcG9zaXRpb25zLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvc2Nyb2xsLXNuYXAtc3RvcCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXNjcm9sbC1zbmFwLXN0b3BcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic2Nyb2xsLXNuYXAtc3RvcFwiPSBcInNjcm9sbC1zbmFwLXN0b3BcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHNjcm9sbC1zbmFwLXR5cGUgQ1NTIHByb3BlcnR5IHNldHMgaG93IHN0cmljdGx5IHNuYXAgcG9pbnRzIGFyZSBlbmZvcmNlZCBvbiB0aGUgc2Nyb2xsIGNvbnRhaW5lciBpbiBjYXNlIHRoZXJlIGlzIG9uZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3Njcm9sbC1zbmFwLXR5cGUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zY3JvbGwtc25hcC10eXBlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInNjcm9sbC1zbmFwLXR5cGVcIj0gXCJzY3JvbGwtc25hcC10eXBlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzaGFwZS1pbWFnZS10aHJlc2hvbGQgQ1NTIHByb3BlcnR5IHNldHMgdGhlIGFscGhhIGNoYW5uZWwgdGhyZXNob2xkIHVzZWQgdG8gZXh0cmFjdCB0aGUgc2hhcGUgdXNpbmcgYW4gaW1hZ2UgYXMgdGhlIHZhbHVlIGZvciBzaGFwZS1vdXRzaWRlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvc2hhcGUtaW1hZ2UtdGhyZXNob2xkIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c2hhcGUtaW1hZ2UtdGhyZXNob2xkXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInNoYXBlLWltYWdlLXRocmVzaG9sZFwiPSBcInNoYXBlLWltYWdlLXRocmVzaG9sZFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc2hhcGUtbWFyZ2luIENTUyBwcm9wZXJ0eSBzZXRzIGEgbWFyZ2luIGZvciBhIENTUyBzaGFwZSBjcmVhdGVkIHVzaW5nIHNoYXBlLW91dHNpZGUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9zaGFwZS1tYXJnaW4gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zaGFwZS1tYXJnaW5cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic2hhcGUtbWFyZ2luXCI9IFwic2hhcGUtbWFyZ2luXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzaGFwZS1vdXRzaWRlIENTUyBwcm9wZXJ0eSBkZWZpbmVzIGEgc2hhcGXigJR3aGljaCBtYXkgYmUgbm9uLXJlY3Rhbmd1bGFy4oCUYXJvdW5kIHdoaWNoIGFkamFjZW50IGlubGluZSBjb250ZW50IHNob3VsZCB3cmFwLiBCeSBkZWZhdWx0LCBpbmxpbmUgY29udGVudCB3cmFwcyBhcm91bmQgaXRzIG1hcmdpbiBib3g7IHNoYXBlLW91dHNpZGUgcHJvdmlkZXMgYSB3YXkgdG8gY3VzdG9taXplIHRoaXMgd3JhcHBpbmcsIG1ha2luZyBpdCBwb3NzaWJsZSB0byB3cmFwIHRleHQgYXJvdW5kIGNvbXBsZXggb2JqZWN0cyByYXRoZXIgdGhhbiBzaW1wbGUgYm94ZXMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9zaGFwZS1vdXRzaWRlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c2hhcGUtb3V0c2lkZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzaGFwZS1vdXRzaWRlXCI9IFwic2hhcGUtb3V0c2lkZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc2hhcGUtcmVuZGVyaW5nIGF0dHJpYnV0ZSBwcm92aWRlcyBoaW50cyB0byB0aGUgcmVuZGVyZXIgYWJvdXQgd2hhdCB0cmFkZW9mZnMgdG8gbWFrZSB3aGVuIHJlbmRlcmluZyBzaGFwZXMgbGlrZSBwYXRocywgY2lyY2xlcywgb3IgcmVjdGFuZ2xlcy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9zaGFwZS1yZW5kZXJpbmcgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zaGFwZS1yZW5kZXJpbmdcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic2hhcGUtcmVuZGVyaW5nXCI9IFwic2hhcGUtcmVuZGVyaW5nXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2l6ZT0gXCJzaXplXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3BlYWs9IFwic3BlYWtcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICBzcmM9IFwic3JjXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzdG9wLWNvbG9yIGF0dHJpYnV0ZSBpbmRpY2F0ZXMgd2hhdCBjb2xvciB0byB1c2UgYXQgYSBncmFkaWVudCBzdG9wLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL3N0b3AtY29sb3IgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zdG9wLWNvbG9yXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInN0b3AtY29sb3JcIj0gXCJzdG9wLWNvbG9yXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzdG9wLW9wYWNpdHkgYXR0cmlidXRlIGRlZmluZXMgdGhlIG9wYWNpdHkgb2YgYSBnaXZlbiBjb2xvciBncmFkaWVudCBzdG9wLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL3N0b3Atb3BhY2l0eSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXN0b3Atb3BhY2l0eVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzdG9wLW9wYWNpdHlcIj0gXCJzdG9wLW9wYWNpdHlcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHN0cm9rZSBhdHRyaWJ1dGUgaXMgYSBwcmVzZW50YXRpb24gYXR0cmlidXRlIGRlZmluaW5nIHRoZSBjb2xvciAob3IgYW55IFNWRyBwYWludCBzZXJ2ZXJzIGxpa2UgZ3JhZGllbnRzIG9yIHBhdHRlcm5zKSB1c2VkIHRvIHBhaW50IHRoZSBvdXRsaW5lIG9mIHRoZSBzaGFwZTtcclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9zdHJva2UgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zdHJva2VcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3Ryb2tlPSBcInN0cm9rZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc3Ryb2tlLWRhc2hhcnJheSBhdHRyaWJ1dGUgaXMgYSBwcmVzZW50YXRpb24gYXR0cmlidXRlIGRlZmluaW5nIHRoZSBwYXR0ZXJuIG9mIGRhc2hlcyBhbmQgZ2FwcyB1c2VkIHRvIHBhaW50IHRoZSBvdXRsaW5lIG9mIHRoZSBzaGFwZTtcclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9zdHJva2UtZGFzaGFycmF5IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c3Ryb2tlLWRhc2hhcnJheVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzdHJva2UtZGFzaGFycmF5XCI9IFwic3Ryb2tlLWRhc2hhcnJheVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc3Ryb2tlLWRhc2hvZmZzZXQgYXR0cmlidXRlIGlzIGEgcHJlc2VudGF0aW9uIGF0dHJpYnV0ZSBkZWZpbmluZyBhbiBvZmZzZXQgb24gdGhlIHJlbmRlcmluZyBvZiB0aGUgYXNzb2NpYXRlZCBkYXNoIGFycmF5LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL3N0cm9rZS1kYXNob2Zmc2V0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c3Ryb2tlLWRhc2hvZmZzZXRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic3Ryb2tlLWRhc2hvZmZzZXRcIj0gXCJzdHJva2UtZGFzaG9mZnNldFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc3Ryb2tlLWxpbmVjYXAgYXR0cmlidXRlIGlzIGEgcHJlc2VudGF0aW9uIGF0dHJpYnV0ZSBkZWZpbmluZyB0aGUgc2hhcGUgdG8gYmUgdXNlZCBhdCB0aGUgZW5kIG9mIG9wZW4gc3VicGF0aHMgd2hlbiB0aGV5IGFyZSBzdHJva2VkLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL3N0cm9rZS1saW5lY2FwIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c3Ryb2tlLWxpbmVjYXBcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwic3Ryb2tlLWxpbmVjYXBcIj0gXCJzdHJva2UtbGluZWNhcFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgc3Ryb2tlLWxpbmVqb2luIGF0dHJpYnV0ZSBpcyBhIHByZXNlbnRhdGlvbiBhdHRyaWJ1dGUgZGVmaW5pbmcgdGhlIHNoYXBlIHRvIGJlIHVzZWQgYXQgdGhlIGNvcm5lcnMgb2YgcGF0aHMgd2hlbiB0aGV5IGFyZSBzdHJva2VkLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL3N0cm9rZS1saW5lam9pbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXN0cm9rZS1saW5lam9pblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzdHJva2UtbGluZWpvaW5cIj0gXCJzdHJva2UtbGluZWpvaW5cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHN0cm9rZS1taXRlcmxpbWl0IGF0dHJpYnV0ZSBpcyBhIHByZXNlbnRhdGlvbiBhdHRyaWJ1dGUgZGVmaW5pbmcgYSBsaW1pdCBvbiB0aGUgcmF0aW8gb2YgdGhlIG1pdGVyIGxlbmd0aCB0byB0aGUgc3Ryb2tlLXdpZHRoIHVzZWQgdG8gZHJhdyBhIG1pdGVyIGpvaW4uIFdoZW4gdGhlIGxpbWl0IGlzIGV4Y2VlZGVkLCB0aGUgam9pbiBpcyBjb252ZXJ0ZWQgZnJvbSBhIG1pdGVyIHRvIGEgYmV2ZWwuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NWRy9BdHRyaWJ1dGUvc3Ryb2tlLW1pdGVybGltaXQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zdHJva2UtbWl0ZXJsaW1pdFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzdHJva2UtbWl0ZXJsaW1pdFwiPSBcInN0cm9rZS1taXRlcmxpbWl0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzdHJva2Utb3BhY2l0eSBhdHRyaWJ1dGUgaXMgYSBwcmVzZW50YXRpb24gYXR0cmlidXRlIGRlZmluaW5nIHRoZSBvcGFjaXR5IG9mIHRoZSBwYWludCBzZXJ2ZXIgKGNvbG9yLCBncmFkaWVudCwgcGF0dGVybiwgZXRjKSBhcHBsaWVkIHRvIHRoZSBzdHJva2Ugb2YgYSBzaGFwZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9zdHJva2Utb3BhY2l0eSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXN0cm9rZS1vcGFjaXR5XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInN0cm9rZS1vcGFjaXR5XCI9IFwic3Ryb2tlLW9wYWNpdHlcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHN0cm9rZS13aWR0aCBhdHRyaWJ1dGUgaXMgYSBwcmVzZW50YXRpb24gYXR0cmlidXRlIGRlZmluaW5nIHRoZSB3aWR0aCBvZiB0aGUgc3Ryb2tlIHRvIGJlIGFwcGxpZWQgdG8gdGhlIHNoYXBlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL3N0cm9rZS13aWR0aCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXN0cm9rZS13aWR0aFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJzdHJva2Utd2lkdGhcIj0gXCJzdHJva2Utd2lkdGhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJhc2ljIGdvYWwgb2YgdGhlIENhc2NhZGluZyBTdHlsZXNoZWV0IChDU1MpIGxhbmd1YWdlIGlzIHRvIGFsbG93IGEgYnJvd3NlciBlbmdpbmUgdG8gcGFpbnQgZWxlbWVudHMgb2YgdGhlIHBhZ2Ugd2l0aCBzcGVjaWZpYyBmZWF0dXJlcywgbGlrZSBjb2xvcnMsIHBvc2l0aW9uaW5nLCBvciBkZWNvcmF0aW9ucy4gVGhlIENTUyBzeW50YXggcmVmbGVjdHMgdGhpcyBnb2FsIGFuZCBpdHMgYmFzaWMgYnVpbGRpbmcgYmxvY2tzIGFyZTpcclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3N5bnRheCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXN5bnRheFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICBzeW50YXg9IFwic3ludGF4XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0YWItc2l6ZSBDU1MgcHJvcGVydHkgaXMgdXNlZCB0byBjdXN0b21pemUgdGhlIHdpZHRoIG9mIHRhYiBjaGFyYWN0ZXJzIChVKzAwMDkpLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdGFiLXNpemUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10YWItc2l6ZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ0YWItc2l6ZVwiPSBcInRhYi1zaXplXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0YWJsZS1sYXlvdXQgQ1NTIHByb3BlcnR5IHNldHMgdGhlIGFsZ29yaXRobSB1c2VkIHRvIGxheSBvdXQgJmx0O3RhYmxlJmd0OyBjZWxscywgcm93cywgYW5kIGNvbHVtbnMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90YWJsZS1sYXlvdXQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10YWJsZS1sYXlvdXRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwidGFibGUtbGF5b3V0XCI9IFwidGFibGUtbGF5b3V0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0ZXh0LWFsaWduIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBob3Jpem9udGFsIGFsaWdubWVudCBvZiBhJm5ic3A7YmxvY2sgZWxlbWVudCBvciB0YWJsZS1jZWxsIGJveC4gVGhpcyBtZWFucyBpdCB3b3JrcyBsaWtlIHZlcnRpY2FsLWFsaWduIGJ1dCBpbiB0aGUgaG9yaXpvbnRhbCBkaXJlY3Rpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90ZXh0LWFsaWduIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dGV4dC1hbGlnblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ0ZXh0LWFsaWduXCI9IFwidGV4dC1hbGlnblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdGV4dC1hbGlnbi1sYXN0IENTUyBwcm9wZXJ0eSBzZXRzIGhvdyB0aGUgbGFzdCBsaW5lIG9mIGEgYmxvY2sgb3IgYSBsaW5lLCByaWdodCBiZWZvcmUgYSBmb3JjZWQgbGluZSBicmVhaywgaXMgYWxpZ25lZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RleHQtYWxpZ24tbGFzdCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRleHQtYWxpZ24tbGFzdFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ0ZXh0LWFsaWduLWxhc3RcIj0gXCJ0ZXh0LWFsaWduLWxhc3RcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRleHQtYW5jaG9yIGF0dHJpYnV0ZSBpcyB1c2VkIHRvIGFsaWduIChzdGFydC0sIG1pZGRsZS0gb3IgZW5kLWFsaWdubWVudCkgYSBzdHJpbmcgb2YgcHJlLWZvcm1hdHRlZCB0ZXh0IG9yIGF1dG8td3JhcHBlZCB0ZXh0IHdoZXJlIHRoZSB3cmFwcGluZyBhcmVhIGlzIGRldGVybWluZWQgZnJvbSB0aGUgaW5saW5lLXNpemUgcHJvcGVydHkgcmVsYXRpdmUgdG8gYSBnaXZlbiBwb2ludC4gSXQgaXMgbm90IGFwcGxpY2FibGUgdG8gb3RoZXIgdHlwZXMgb2YgYXV0by13cmFwcGVkIHRleHQuIEZvciB0aG9zZSBjYXNlcyB5b3Ugc2hvdWxkIHVzZSB0ZXh0LWFsaWduLiBGb3IgbXVsdGktbGluZSB0ZXh0LCB0aGUgYWxpZ25tZW50IHRha2VzIHBsYWNlIGZvciBlYWNoIGxpbmUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NWRy9BdHRyaWJ1dGUvdGV4dC1hbmNob3IgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10ZXh0LWFuY2hvclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ0ZXh0LWFuY2hvclwiPSBcInRleHQtYW5jaG9yXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0ZXh0LWNvbWJpbmUtdXByaWdodCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgY29tYmluYXRpb24gb2YgY2hhcmFjdGVycyBpbnRvIHRoZSBzcGFjZSBvZiBhIHNpbmdsZSBjaGFyYWN0ZXIuIElmIHRoZSBjb21iaW5lZCB0ZXh0IGlzIHdpZGVyIHRoYW4gMWVtLCB0aGUgdXNlciBhZ2VudCBtdXN0IGZpdCB0aGUgY29udGVudHMgd2l0aGluIDFlbS4gVGhlIHJlc3VsdGluZyBjb21wb3NpdGlvbiBpcyB0cmVhdGVkIGFzIGEgc2luZ2xlIHVwcmlnaHQgZ2x5cGggZm9yIGxheW91dCBhbmQgZGVjb3JhdGlvbi4gVGhpcyBwcm9wZXJ0eSBvbmx5IGhhcyBhbiBlZmZlY3QgaW4gdmVydGljYWwgd3JpdGluZyBtb2Rlcy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RleHQtY29tYmluZS11cHJpZ2h0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dGV4dC1jb21iaW5lLXVwcmlnaHRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwidGV4dC1jb21iaW5lLXVwcmlnaHRcIj0gXCJ0ZXh0LWNvbWJpbmUtdXByaWdodFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdGV4dC1kZWNvcmF0aW9uIHNob3J0aGFuZCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgYXBwZWFyYW5jZSBvZiBkZWNvcmF0aXZlIGxpbmVzIG9uIHRleHQuIEl0IGlzIGEgc2hvcnRoYW5kIGZvciB0ZXh0LWRlY29yYXRpb24tbGluZSwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCB0ZXh0LWRlY29yYXRpb24tc3R5bGUsIGFuZCB0aGUgbmV3ZXIgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzcyBwcm9wZXJ0eS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RleHQtZGVjb3JhdGlvbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRleHQtZGVjb3JhdGlvblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ0ZXh0LWRlY29yYXRpb25cIj0gXCJ0ZXh0LWRlY29yYXRpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRleHQtZGVjb3JhdGlvbi1jb2xvciBDU1MgcHJvcGVydHkgc2V0cyB0aGUgY29sb3Igb2YgZGVjb3JhdGlvbnMgYWRkZWQgdG8gdGV4dCBieSB0ZXh0LWRlY29yYXRpb24tbGluZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RleHQtZGVjb3JhdGlvbi1jb2xvciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRleHQtZGVjb3JhdGlvbi1jb2xvclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ0ZXh0LWRlY29yYXRpb24tY29sb3JcIj0gXCJ0ZXh0LWRlY29yYXRpb24tY29sb3JcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRleHQtZGVjb3JhdGlvbi1saW5lIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBraW5kIG9mIGRlY29yYXRpb24gdGhhdCBpcyB1c2VkIG9uIHRleHQgaW4gYW4gZWxlbWVudCwgc3VjaCBhcyBhbiB1bmRlcmxpbmUgb3Igb3ZlcmxpbmUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90ZXh0LWRlY29yYXRpb24tbGluZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRleHQtZGVjb3JhdGlvbi1saW5lXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInRleHQtZGVjb3JhdGlvbi1saW5lXCI9IFwidGV4dC1kZWNvcmF0aW9uLWxpbmVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRleHQtZGVjb3JhdGlvbi1za2lwLWluayBDU1MgcHJvcGVydHkgc3BlY2lmaWVzIGhvdyBvdmVybGluZXMgYW5kIHVuZGVybGluZXMgYXJlIGRyYXduIHdoZW4gdGhleSBwYXNzIG92ZXIgZ2x5cGggYXNjZW5kZXJzIGFuZCBkZXNjZW5kZXJzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInRleHQtZGVjb3JhdGlvbi1za2lwLWlua1wiPSBcInRleHQtZGVjb3JhdGlvbi1za2lwLWlua1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdGV4dC1kZWNvcmF0aW9uLXN0eWxlIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBzdHlsZSBvZiB0aGUgbGluZXMgc3BlY2lmaWVkIGJ5IHRleHQtZGVjb3JhdGlvbi1saW5lLiBUaGUgc3R5bGUgYXBwbGllcyB0byBhbGwgbGluZXMgdGhhdCBhcmUgc2V0IHdpdGggdGV4dC1kZWNvcmF0aW9uLWxpbmUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90ZXh0LWRlY29yYXRpb24tc3R5bGUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10ZXh0LWRlY29yYXRpb24tc3R5bGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwidGV4dC1kZWNvcmF0aW9uLXN0eWxlXCI9IFwidGV4dC1kZWNvcmF0aW9uLXN0eWxlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBzdHJva2UgdGhpY2tuZXNzIG9mIHRoZSBkZWNvcmF0aW9uIGxpbmUgdGhhdCBpcyB1c2VkIG9uIHRleHQgaW4gYW4gZWxlbWVudCwgc3VjaCBhcyBhIGxpbmUtdGhyb3VnaCwgdW5kZXJsaW5lLCBvciBvdmVybGluZS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RleHQtZGVjb3JhdGlvbi10aGlja25lc3MgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInRleHQtZGVjb3JhdGlvbi10aGlja25lc3NcIj0gXCJ0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0ZXh0LWluZGVudCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgbGVuZ3RoIG9mIGVtcHR5IHNwYWNlIChpbmRlbnRhdGlvbikgdGhhdCBpcyBwdXQgYmVmb3JlIGxpbmVzIG9mIHRleHQgaW4gYSBibG9jay5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RleHQtaW5kZW50IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dGV4dC1pbmRlbnRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwidGV4dC1pbmRlbnRcIj0gXCJ0ZXh0LWluZGVudFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdGV4dC1vcmllbnRhdGlvbiBDU1MgcHJvcGVydHkgc2V0cyB0aGUgb3JpZW50YXRpb24gb2YgdGhlIHRleHQgY2hhcmFjdGVycyBpbiBhIGxpbmUuIEl0IG9ubHkgYWZmZWN0cyB0ZXh0IGluIHZlcnRpY2FsIG1vZGUgKHdoZW4gd3JpdGluZy1tb2RlIGlzIG5vdCBob3Jpem9udGFsLXRiKS4gSXQgaXMgdXNlZnVsIGZvciBjb250cm9sbGluZyB0aGUgZGlzcGxheSBvZiBsYW5ndWFnZXMgdGhhdCB1c2UgdmVydGljYWwgc2NyaXB0LCBhbmQgYWxzbyBmb3IgbWFraW5nIHZlcnRpY2FsIHRhYmxlIGhlYWRlcnMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90ZXh0LW9yaWVudGF0aW9uIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dGV4dC1vcmllbnRhdGlvblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ0ZXh0LW9yaWVudGF0aW9uXCI9IFwidGV4dC1vcmllbnRhdGlvblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdGV4dC1vdmVyZmxvdyBDU1MgcHJvcGVydHkgc2V0cyBob3cgaGlkZGVuIG92ZXJmbG93IGNvbnRlbnQgaXMgc2lnbmFsZWQgdG8gdXNlcnMuIEl0IGNhbiBiZSBjbGlwcGVkLCBkaXNwbGF5IGFuIGVsbGlwc2lzICgn4oCmJyksIG9yIGRpc3BsYXkgYSBjdXN0b20gc3RyaW5nLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdGV4dC1vdmVyZmxvdyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRleHQtb3ZlcmZsb3dcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwidGV4dC1vdmVyZmxvd1wiPSBcInRleHQtb3ZlcmZsb3dcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRleHQtcmVuZGVyaW5nIENTUyBwcm9wZXJ0eSBwcm92aWRlcyBpbmZvcm1hdGlvbiB0byB0aGUgcmVuZGVyaW5nIGVuZ2luZSBhYm91dCB3aGF0IHRvIG9wdGltaXplIGZvciB3aGVuIHJlbmRlcmluZyB0ZXh0LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdGV4dC1yZW5kZXJpbmcgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10ZXh0LXJlbmRlcmluZ1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ0ZXh0LXJlbmRlcmluZ1wiPSBcInRleHQtcmVuZGVyaW5nXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0ZXh0LXNoYWRvdyBDU1MgcHJvcGVydHkgYWRkcyBzaGFkb3dzIHRvIHRleHQuIEl0IGFjY2VwdHMgYSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBzaGFkb3dzIHRvIGJlIGFwcGxpZWQgdG8gdGhlIHRleHQgYW5kIGFueSBvZiBpdHMgZGVjb3JhdGlvbnMuIEVhY2ggc2hhZG93IGlzIGRlc2NyaWJlZCBieSBzb21lIGNvbWJpbmF0aW9uIG9mIFggYW5kIFkgb2Zmc2V0cyBmcm9tIHRoZSBlbGVtZW50LCBibHVyIHJhZGl1cywgYW5kIGNvbG9yLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdGV4dC1zaGFkb3cgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10ZXh0LXNoYWRvd1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ0ZXh0LXNoYWRvd1wiPSBcInRleHQtc2hhZG93XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0ZXh0LXNpemUtYWRqdXN0IENTUyBwcm9wZXJ0eSBjb250cm9scyB0aGUgdGV4dCBpbmZsYXRpb24gYWxnb3JpdGhtIHVzZWQgb24gc29tZSBzbWFydHBob25lcyBhbmQgdGFibGV0cy4gT3RoZXIgYnJvd3NlcnMgd2lsbCBpZ25vcmUgdGhpcyBwcm9wZXJ0eS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RleHQtc2l6ZS1hZGp1c3QgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10ZXh0LXNpemUtYWRqdXN0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInRleHQtc2l6ZS1hZGp1c3RcIj0gXCJ0ZXh0LXNpemUtYWRqdXN0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0ZXh0LXRyYW5zZm9ybSBDU1MgcHJvcGVydHkgc3BlY2lmaWVzIGhvdyB0byBjYXBpdGFsaXplIGFuIGVsZW1lbnQncyB0ZXh0LiBJdCBjYW4gYmUgdXNlZCB0byBtYWtlIHRleHQgYXBwZWFyIGluIGFsbC11cHBlcmNhc2Ugb3IgYWxsLWxvd2VyY2FzZSwgb3Igd2l0aCBlYWNoIHdvcmQgY2FwaXRhbGl6ZWQuIEl0IGFsc28gY2FuIGhlbHAgaW1wcm92ZSBsZWdpYmlsaXR5IGZvciBydWJ5LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdGV4dC10cmFuc2Zvcm0gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10ZXh0LXRyYW5zZm9ybVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ0ZXh0LXRyYW5zZm9ybVwiPSBcInRleHQtdHJhbnNmb3JtXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0ZXh0LXVuZGVybGluZS1vZmZzZXQgQ1NTIHByb3BlcnR5IHNldHMgdGhlIG9mZnNldCBkaXN0YW5jZSBvZiBhbiB1bmRlcmxpbmUgdGV4dCBkZWNvcmF0aW9uIGxpbmUgKGFwcGxpZWQgdXNpbmcgdGV4dC1kZWNvcmF0aW9uKSBmcm9tIGl0cyBvcmlnaW5hbCBwb3NpdGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RleHQtdW5kZXJsaW5lLW9mZnNldCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRleHQtdW5kZXJsaW5lLW9mZnNldFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ0ZXh0LXVuZGVybGluZS1vZmZzZXRcIj0gXCJ0ZXh0LXVuZGVybGluZS1vZmZzZXRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRleHQtdW5kZXJsaW5lLXBvc2l0aW9uIENTUyBwcm9wZXJ0eSBzcGVjaWZpZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSB1bmRlcmxpbmUgd2hpY2ggaXMgc2V0IHVzaW5nIHRoZSB0ZXh0LWRlY29yYXRpb24gcHJvcGVydHkncyB1bmRlcmxpbmUgdmFsdWUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90ZXh0LXVuZGVybGluZS1wb3NpdGlvbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRleHQtdW5kZXJsaW5lLXBvc2l0aW9uXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInRleHQtdW5kZXJsaW5lLXBvc2l0aW9uXCI9IFwidGV4dC11bmRlcmxpbmUtcG9zaXRpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRvcCBDU1MgcHJvcGVydHkgcGFydGljaXBhdGVzIGluIHNwZWNpZnlpbmcgdGhlIHZlcnRpY2FsIHBvc2l0aW9uIG9mIGEgcG9zaXRpb25lZCBlbGVtZW50LiBJdCBoYXMgbm8gZWZmZWN0IG9uIG5vbi1wb3NpdGlvbmVkIGVsZW1lbnRzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdG9wIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dG9wXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRvcD0gXCJ0b3BcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRvdWNoLWFjdGlvbiBDU1MgcHJvcGVydHkgc2V0cyBob3cgYW4gZWxlbWVudCdzIHJlZ2lvbiBjYW4gYmUgbWFuaXB1bGF0ZWQgYnkgYSB0b3VjaHNjcmVlbiB1c2VyIChmb3IgZXhhbXBsZSwgYnkgem9vbWluZyBmZWF0dXJlcyBidWlsdCBpbnRvIHRoZSBicm93c2VyKS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RvdWNoLWFjdGlvbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRvdWNoLWFjdGlvblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ0b3VjaC1hY3Rpb25cIj0gXCJ0b3VjaC1hY3Rpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRyYW5zZm9ybSBDU1MgcHJvcGVydHkgbGV0cyB5b3Ugcm90YXRlLCBzY2FsZSwgc2tldywgb3IgdHJhbnNsYXRlIGFuIGVsZW1lbnQuIEl0IG1vZGlmaWVzIHRoZSBjb29yZGluYXRlIHNwYWNlIG9mIHRoZSBDU1MgdmlzdWFsIGZvcm1hdHRpbmcgbW9kZWwuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90cmFuc2Zvcm0gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10cmFuc2Zvcm1cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdHJhbnNmb3JtPSBcInRyYW5zZm9ybVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdHJhbnNmb3JtLWJveCBDU1MgcHJvcGVydHkgZGVmaW5lcyB0aGUgbGF5b3V0IGJveCB0byB3aGljaCB0aGUgdHJhbnNmb3JtIGFuZCB0cmFuc2Zvcm0tb3JpZ2luIHByb3BlcnRpZXMgcmVsYXRlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdHJhbnNmb3JtLWJveCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRyYW5zZm9ybS1ib3hcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwidHJhbnNmb3JtLWJveFwiPSBcInRyYW5zZm9ybS1ib3hcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRyYW5zZm9ybS1vcmlnaW4gQ1NTIHByb3BlcnR5IHNldHMgdGhlIG9yaWdpbiBmb3IgYW4gZWxlbWVudCdzIHRyYW5zZm9ybWF0aW9ucy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RyYW5zZm9ybS1vcmlnaW4gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10cmFuc2Zvcm0tb3JpZ2luXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInRyYW5zZm9ybS1vcmlnaW5cIj0gXCJ0cmFuc2Zvcm0tb3JpZ2luXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0cmFuc2Zvcm0tc3R5bGUgQ1NTIHByb3BlcnR5IHNldHMgd2hldGhlciBjaGlsZHJlbiBvZiBhbiBlbGVtZW50IGFyZSBwb3NpdGlvbmVkIGluIHRoZSAzRCBzcGFjZSBvciBhcmUgZmxhdHRlbmVkIGluIHRoZSBwbGFuZSBvZiB0aGUgZWxlbWVudC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RyYW5zZm9ybS1zdHlsZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRyYW5zZm9ybS1zdHlsZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ0cmFuc2Zvcm0tc3R5bGVcIj0gXCJ0cmFuc2Zvcm0tc3R5bGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRyYW5zaXRpb24gQ1NTIHByb3BlcnR5IGlzIGEgc2hvcnRoYW5kIHByb3BlcnR5IGZvciB0cmFuc2l0aW9uLXByb3BlcnR5LCB0cmFuc2l0aW9uLWR1cmF0aW9uLCB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiwgYW5kIHRyYW5zaXRpb24tZGVsYXkuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90cmFuc2l0aW9uIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dHJhbnNpdGlvblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0cmFuc2l0aW9uPSBcInRyYW5zaXRpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRyYW5zaXRpb24tZGVsYXkgQ1NTIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgZHVyYXRpb24gdG8gd2FpdCBiZWZvcmUgc3RhcnRpbmcgYSBwcm9wZXJ0eSdzIHRyYW5zaXRpb24gZWZmZWN0IHdoZW4gaXRzIHZhbHVlIGNoYW5nZXMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90cmFuc2l0aW9uLWRlbGF5IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dHJhbnNpdGlvbi1kZWxheVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ0cmFuc2l0aW9uLWRlbGF5XCI9IFwidHJhbnNpdGlvbi1kZWxheVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdHJhbnNpdGlvbi1kdXJhdGlvbiBDU1MgcHJvcGVydHkgc2V0cyB0aGUgbGVuZ3RoIG9mIHRpbWUgYSB0cmFuc2l0aW9uIGFuaW1hdGlvbiBzaG91bGQgdGFrZSB0byBjb21wbGV0ZS4gQnkgZGVmYXVsdCwgdGhlIHZhbHVlIGlzIDBzLCBtZWFuaW5nIHRoYXQgbm8gYW5pbWF0aW9uIHdpbGwgb2NjdXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90cmFuc2l0aW9uLWR1cmF0aW9uIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dHJhbnNpdGlvbi1kdXJhdGlvblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCI9IFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdHJhbnNpdGlvbi1wcm9wZXJ0eSBDU1MgcHJvcGVydHkgc2V0cyB0aGUgQ1NTIHByb3BlcnRpZXMgdG8gd2hpY2ggYSB0cmFuc2l0aW9uIGVmZmVjdCBzaG91bGQgYmUgYXBwbGllZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RyYW5zaXRpb24tcHJvcGVydHkgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10cmFuc2l0aW9uLXByb3BlcnR5XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInRyYW5zaXRpb24tcHJvcGVydHlcIj0gXCJ0cmFuc2l0aW9uLXByb3BlcnR5XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiBDU1MgcHJvcGVydHkgc2V0cyBob3cgaW50ZXJtZWRpYXRlIHZhbHVlcyBhcmUgY2FsY3VsYXRlZCBmb3IgQ1NTIHByb3BlcnRpZXMgYmVpbmcgYWZmZWN0ZWQgYnkgYSB0cmFuc2l0aW9uIGVmZmVjdC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwidHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cIj0gXCJ0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdW5pY29kZS1iaWRpIENTUyBwcm9wZXJ0eSwgdG9nZXRoZXIgd2l0aCB0aGUgZGlyZWN0aW9uIHByb3BlcnR5LCBkZXRlcm1pbmVzIGhvdyBiaWRpcmVjdGlvbmFsIHRleHQgaW4gYSBkb2N1bWVudCBpcyBoYW5kbGVkLiBGb3IgZXhhbXBsZSwgaWYgYSBibG9jayBvZiBjb250ZW50IGNvbnRhaW5zIGJvdGggbGVmdC10by1yaWdodCBhbmQgcmlnaHQtdG8tbGVmdCB0ZXh0LCB0aGUgdXNlci1hZ2VudCB1c2VzIGEgY29tcGxleCBVbmljb2RlIGFsZ29yaXRobSB0byBkZWNpZGUgaG93IHRvIGRpc3BsYXkgdGhlIHRleHQuIFRoZSB1bmljb2RlLWJpZGkgcHJvcGVydHkgb3ZlcnJpZGVzIHRoaXMgYWxnb3JpdGhtIGFuZCBhbGxvd3MgdGhlIGRldmVsb3BlciB0byBjb250cm9sIHRoZSB0ZXh0IGVtYmVkZGluZy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3VuaWNvZGUtYmlkaSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXVuaWNvZGUtYmlkaVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ1bmljb2RlLWJpZGlcIj0gXCJ1bmljb2RlLWJpZGlcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHVuaWNvZGUtcmFuZ2UgQ1NTIGRlc2NyaXB0b3Igc2V0cyB0aGUgc3BlY2lmaWMgcmFuZ2Ugb2YgY2hhcmFjdGVycyB0byBiZSB1c2VkIGZyb20gYSBmb250IGRlZmluZWQgYnkgQGZvbnQtZmFjZSBhbmQgbWFkZSBhdmFpbGFibGUgZm9yIHVzZSBvbiB0aGUgY3VycmVudCBwYWdlLiBJZiB0aGUgcGFnZSBkb2Vzbid0IHVzZSBhbnkgY2hhcmFjdGVyIGluIHRoaXMgcmFuZ2UsIHRoZSBmb250IGlzIG5vdCBkb3dubG9hZGVkOyBpZiBpdCB1c2VzIGF0IGxlYXN0IG9uZSwgdGhlIHdob2xlIGZvbnQgaXMgZG93bmxvYWRlZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0Bmb250LWZhY2UvdW5pY29kZS1yYW5nZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXVuaWNvZGUtcmFuZ2VcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwidW5pY29kZS1yYW5nZVwiPSBcInVuaWNvZGUtcmFuZ2VcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHVzZXItc2VsZWN0IENTUyBwcm9wZXJ0eSBjb250cm9scyB3aGV0aGVyIHRoZSB1c2VyIGNhbiBzZWxlY3QgdGV4dC4gVGhpcyBkb2Vzbid0IGhhdmUgYW55IGVmZmVjdCBvbiBjb250ZW50IGxvYWRlZCBhcyBwYXJ0IG9mIGEgYnJvd3NlcidzIHVzZXIgaW50ZXJmYWNlIChpdHMgY2hyb21lKSwgZXhjZXB0IGluIHRleHRib3hlcy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3VzZXItc2VsZWN0IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dXNlci1zZWxlY3RcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwidXNlci1zZWxlY3RcIj0gXCJ1c2VyLXNlbGVjdFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInVzZXItem9vbVwiPSBcInVzZXItem9vbVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdmVjdG9yLWVmZmVjdCBwcm9wZXJ0eSBzcGVjaWZpZXMgdGhlIHZlY3RvciBlZmZlY3QgdG8gdXNlIHdoZW4gZHJhd2luZyBhbiBvYmplY3QuIFZlY3RvciBlZmZlY3RzIGFyZSBhcHBsaWVkIGJlZm9yZSBhbnkgb2YgdGhlIG90aGVyIGNvbXBvc2l0aW5nIG9wZXJhdGlvbnMsIGkuZS4gZmlsdGVycywgbWFza3MgYW5kIGNsaXBzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL3ZlY3Rvci1lZmZlY3QgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz12ZWN0b3ItZWZmZWN0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInZlY3Rvci1lZmZlY3RcIj0gXCJ2ZWN0b3ItZWZmZWN0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB2ZXJ0aWNhbC1hbGlnbiBDU1MgcHJvcGVydHkgc2V0cyB2ZXJ0aWNhbCBhbGlnbm1lbnQgb2YgYW4gaW5saW5lLCBpbmxpbmUtYmxvY2sgb3IgdGFibGUtY2VsbCBib3guXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy92ZXJ0aWNhbC1hbGlnbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXZlcnRpY2FsLWFsaWduXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcInZlcnRpY2FsLWFsaWduXCI9IFwidmVydGljYWwtYWxpZ25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHZpc2liaWxpdHkgQ1NTIHByb3BlcnR5IHNob3dzIG9yIGhpZGVzIGFuIGVsZW1lbnQgd2l0aG91dCBjaGFuZ2luZyB0aGUgbGF5b3V0IG9mIGEgZG9jdW1lbnQuIFRoZSBwcm9wZXJ0eSBjYW4gYWxzbyBoaWRlIHJvd3Mgb3IgY29sdW1ucyBpbiBhICZsdDt0YWJsZSZndDsuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy92aXNpYmlsaXR5IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dmlzaWJpbGl0eVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICB2aXNpYmlsaXR5PSBcInZpc2liaWxpdHlcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIENTUyBhbGlnbi1jb250ZW50IHByb3BlcnR5IHNldHMgdGhlIGRpc3RyaWJ1dGlvbiBvZiBzcGFjZSBiZXR3ZWVuIGFuZCBhcm91bmQgY29udGVudCBpdGVtcyBhbG9uZyBhIGZsZXhib3gncyBjcm9zcy1heGlzIG9yIGEgZ3JpZCdzIGJsb2NrIGF4aXMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9hbGlnbi1jb250ZW50IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YWxpZ24tY29udGVudFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYWxpZ24tY29udGVudFwiPSBcIndlYmtpdC1hbGlnbi1jb250ZW50XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBDU1MgYWxpZ24taXRlbXMgcHJvcGVydHkgc2V0cyB0aGUgYWxpZ24tc2VsZiB2YWx1ZSBvbiBhbGwgZGlyZWN0IGNoaWxkcmVuIGFzIGEgZ3JvdXAuIEluIEZsZXhib3gsIGl0IGNvbnRyb2xzIHRoZSBhbGlnbm1lbnQgb2YgaXRlbXMgb24gdGhlIENyb3NzIEF4aXMuIEluIEdyaWQgTGF5b3V0LCBpdCBjb250cm9scyB0aGUgYWxpZ25tZW50IG9mIGl0ZW1zIG9uIHRoZSBCbG9jayBBeGlzIHdpdGhpbiB0aGVpciBncmlkIGFyZWEuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9hbGlnbi1pdGVtcyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWFsaWduLWl0ZW1zXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1hbGlnbi1pdGVtc1wiPSBcIndlYmtpdC1hbGlnbi1pdGVtc1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYWxpZ24tc2VsZiBDU1MgcHJvcGVydHkgb3ZlcnJpZGVzIGEgZ3JpZCBvciBmbGV4IGl0ZW0ncyBhbGlnbi1pdGVtcyB2YWx1ZS4gSW4gR3JpZCwgaXQgYWxpZ25zIHRoZSBpdGVtIGluc2lkZSB0aGUmbmJzcDtncmlkIGFyZWEuIEluIEZsZXhib3gsIGl0IGFsaWducyB0aGUgaXRlbSBvbiB0aGUgY3Jvc3MgYXhpcy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2FsaWduLXNlbGYgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1hbGlnbi1zZWxmXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1hbGlnbi1zZWxmXCI9IFwid2Via2l0LWFsaWduLXNlbGZcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGFuaW1hdGlvbiBzaG9ydGhhbmQgQ1NTIHByb3BlcnR5IGFwcGxpZXMgYW4gYW5pbWF0aW9uIGJldHdlZW4gc3R5bGVzLiBJdCBpcyBhIHNob3J0aGFuZCBmb3IgYW5pbWF0aW9uLW5hbWUsIGFuaW1hdGlvbi1kdXJhdGlvbiwgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbiwgYW5pbWF0aW9uLWRlbGF5LCBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50LCBhbmltYXRpb24tZGlyZWN0aW9uLCBhbmltYXRpb24tZmlsbC1tb2RlLCBhbmQgYW5pbWF0aW9uLXBsYXktc3RhdGUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9hbmltYXRpb24gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1hbmltYXRpb25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWFuaW1hdGlvblwiPSBcIndlYmtpdC1hbmltYXRpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGFuaW1hdGlvbi1kZWxheSBDU1MgcHJvcGVydHkgc3BlY2lmaWVzIHRoZSBhbW91bnQgb2YgdGltZSB0byB3YWl0IGZyb20gYXBwbHlpbmcgdGhlIGFuaW1hdGlvbiB0byBhbiBlbGVtZW50IGJlZm9yZSBiZWdpbm5pbmcgdG8gcGVyZm9ybSB0aGUgYW5pbWF0aW9uLiBUaGUgYW5pbWF0aW9uIGNhbiBzdGFydCBsYXRlciwgaW1tZWRpYXRlbHkgZnJvbSBpdHMgYmVnaW5uaW5nLCBvciBpbW1lZGlhdGVseSBhbmQgcGFydHdheSB0aHJvdWdoIHRoZSBhbmltYXRpb24uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9hbmltYXRpb24tZGVsYXkgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1hbmltYXRpb24tZGVsYXlcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWFuaW1hdGlvbi1kZWxheVwiPSBcIndlYmtpdC1hbmltYXRpb24tZGVsYXlcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGFuaW1hdGlvbi1kaXJlY3Rpb24gQ1NTIHByb3BlcnR5IHNldHMgd2hldGhlciBhbiBhbmltYXRpb24gc2hvdWxkIHBsYXkgZm9yd2FyZCwgYmFja3dhcmQsIG9yIGFsdGVybmF0ZSBiYWNrIGFuZCBmb3J0aCBiZXR3ZWVuIHBsYXlpbmcgdGhlIHNlcXVlbmNlIGZvcndhcmQgYW5kIGJhY2t3YXJkLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYW5pbWF0aW9uLWRpcmVjdGlvbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWFuaW1hdGlvbi1kaXJlY3Rpb25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb25cIj0gXCJ3ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYW5pbWF0aW9uLWR1cmF0aW9uIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBsZW5ndGggb2YgdGltZSB0aGF0IGFuIGFuaW1hdGlvbiB0YWtlcyB0byBjb21wbGV0ZSBvbmUgY3ljbGUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9hbmltYXRpb24tZHVyYXRpb24gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1hbmltYXRpb24tZHVyYXRpb25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvblwiPSBcIndlYmtpdC1hbmltYXRpb24tZHVyYXRpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGFuaW1hdGlvbi1maWxsLW1vZGUgQ1NTIHByb3BlcnR5IHNldHMgaG93IGEgQ1NTIGFuaW1hdGlvbiBhcHBsaWVzIHN0eWxlcyB0byBpdHMgdGFyZ2V0IGJlZm9yZSBhbmQgYWZ0ZXIgaXRzIGV4ZWN1dGlvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2FuaW1hdGlvbi1maWxsLW1vZGUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1hbmltYXRpb24tZmlsbC1tb2RlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlXCI9IFwid2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQgQ1NTIHByb3BlcnR5IHNldHMgdGhlIG51bWJlciBvZiB0aW1lcyBhbiBhbmltYXRpb24gc2VxdWVuY2Ugc2hvdWxkIGJlIHBsYXllZCBiZWZvcmUgc3RvcHBpbmcuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9hbmltYXRpb24taXRlcmF0aW9uLWNvdW50IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudFwiPSBcIndlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBhbmltYXRpb24tbmFtZSBDU1MgcHJvcGVydHkgc3BlY2lmaWVzIHRoZSBuYW1lcyBvZiBvbmUgb3IgbW9yZSBAa2V5ZnJhbWVzIGF0LXJ1bGVzIGRlc2NyaWJpbmcgdGhlIGFuaW1hdGlvbiBvciBhbmltYXRpb25zIHRvIGFwcGx5IHRvIHRoZSBlbGVtZW50LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYW5pbWF0aW9uLW5hbWUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1hbmltYXRpb24tbmFtZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYW5pbWF0aW9uLW5hbWVcIj0gXCJ3ZWJraXQtYW5pbWF0aW9uLW5hbWVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGFuaW1hdGlvbi1wbGF5LXN0YXRlIENTUyBwcm9wZXJ0eSBzZXRzIHdoZXRoZXIgYW4gYW5pbWF0aW9uIGlzIHJ1bm5pbmcgb3IgcGF1c2VkLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYW5pbWF0aW9uLXBsYXktc3RhdGUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1hbmltYXRpb24tcGxheS1zdGF0ZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYW5pbWF0aW9uLXBsYXktc3RhdGVcIj0gXCJ3ZWJraXQtYW5pbWF0aW9uLXBsYXktc3RhdGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb24gQ1NTIHByb3BlcnR5IHNldHMgaG93IGFuIGFuaW1hdGlvbiBwcm9ncmVzc2VzIHRocm91Z2ggdGhlIGR1cmF0aW9uIG9mIGVhY2ggY3ljbGUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvblwiPSBcIndlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWFwcC1yZWdpb25cIj0gXCJ3ZWJraXQtYXBwLXJlZ2lvblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYXBwZWFyYW5jZSBDU1MgcHJvcGVydHkgaXMgdXNlZCB0byBkaXNwbGF5IGFuIGVsZW1lbnQgdXNpbmcgcGxhdGZvcm0tbmF0aXZlIHN0eWxpbmcsIGJhc2VkIG9uIHRoZSBvcGVyYXRpbmcgc3lzdGVtJ3MgdGhlbWUuIFRoZSAtbW96LWFwcGVhcmFuY2UgYW5kIC13ZWJraXQtYXBwZWFyYW5jZSBwcm9wZXJ0aWVzIGFyZSBub24tc3RhbmRhcmQgdmVyc2lvbnMgb2YgdGhpcyBwcm9wZXJ0eSwgdXNlZCAocmVzcGVjdGl2ZWx5KSBieSBHZWNrbyAoRmlyZWZveCkgYW5kIGJ5IFdlYktpdC1iYXNlZCAoZS5nLiwgU2FmYXJpKSBhbmQgQmxpbmstYmFzZWQgKGUuZy4sIENocm9tZSwgT3BlcmEpIGJyb3dzZXJzIHRvIGFjaGlldmUgdGhlIHNhbWUgdGhpbmcuIE5vdGUgdGhhdCBGaXJlZm94IGFuZCBFZGdlIGFsc28gc3VwcG9ydCAtd2Via2l0LWFwcGVhcmFuY2UsIGZvciBjb21wYXRpYmlsaXR5IHJlYXNvbnMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9hcHBlYXJhbmNlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YXBwZWFyYW5jZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYXBwZWFyYW5jZVwiPSBcIndlYmtpdC1hcHBlYXJhbmNlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBiYWNrZmFjZS12aXNpYmlsaXR5IENTUyBwcm9wZXJ0eSBzZXRzIHdoZXRoZXIgdGhlIGJhY2sgZmFjZSBvZiBhbiBlbGVtZW50IGlzIHZpc2libGUgd2hlbiB0dXJuZWQgdG93YXJkcyB0aGUgdXNlci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tmYWNlLXZpc2liaWxpdHkgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1iYWNrZmFjZS12aXNpYmlsaXR5XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5XCI9IFwid2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHlcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJhY2tncm91bmQtY2xpcCBDU1MgcHJvcGVydHkgc2V0cyB3aGV0aGVyIGFuIGVsZW1lbnQncyBiYWNrZ3JvdW5kIGV4dGVuZHMgdW5kZXJuZWF0aCBpdHMgYm9yZGVyIGJveCwgcGFkZGluZyBib3gsIG9yIGNvbnRlbnQgYm94LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYmFja2dyb3VuZC1jbGlwIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YmFja2dyb3VuZC1jbGlwXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1iYWNrZ3JvdW5kLWNsaXBcIj0gXCJ3ZWJraXQtYmFja2dyb3VuZC1jbGlwXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBiYWNrZ3JvdW5kLW9yaWdpbiBDU1MgcHJvcGVydHkgc2V0cyB0aGUgYmFja2dyb3VuZCdzIG9yaWdpbjogZnJvbSB0aGUgYm9yZGVyIHN0YXJ0LCBpbnNpZGUgdGhlIGJvcmRlciwgb3IgaW5zaWRlIHRoZSBwYWRkaW5nLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYmFja2dyb3VuZC1vcmlnaW4gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1iYWNrZ3JvdW5kLW9yaWdpblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYmFja2dyb3VuZC1vcmlnaW5cIj0gXCJ3ZWJraXQtYmFja2dyb3VuZC1vcmlnaW5cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJhY2tncm91bmQtc2l6ZSBDU1MgcHJvcGVydHkgc2V0cyB0aGUgc2l6ZSBvZiB0aGUgZWxlbWVudCdzIGJhY2tncm91bmQgaW1hZ2UuIFRoZSBpbWFnZSBjYW4gYmUgbGVmdCB0byBpdHMgbmF0dXJhbCBzaXplLCBzdHJldGNoZWQsIG9yIGNvbnN0cmFpbmVkIHRvIGZpdCB0aGUgYXZhaWxhYmxlIHNwYWNlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYmFja2dyb3VuZC1zaXplIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9YmFja2dyb3VuZC1zaXplXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1iYWNrZ3JvdW5kLXNpemVcIj0gXCJ3ZWJraXQtYmFja2dyb3VuZC1zaXplXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWJvcmRlci1hZnRlclwiPSBcIndlYmtpdC1ib3JkZXItYWZ0ZXJcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYm9yZGVyLWFmdGVyLWNvbG9yXCI9IFwid2Via2l0LWJvcmRlci1hZnRlci1jb2xvclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1ib3JkZXItYWZ0ZXItc3R5bGVcIj0gXCJ3ZWJraXQtYm9yZGVyLWFmdGVyLXN0eWxlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWJvcmRlci1hZnRlci13aWR0aFwiPSBcIndlYmtpdC1ib3JkZXItYWZ0ZXItd2lkdGhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIC13ZWJraXQtYm9yZGVyLWJlZm9yZSBDU1MgcHJvcGVydHkgaXMgYSBzaG9ydGhhbmQgcHJvcGVydHkgZm9yIHNldHRpbmcgdGhlIGluZGl2aWR1YWwgbG9naWNhbCBibG9jayBzdGFydCBib3JkZXIgcHJvcGVydHkgdmFsdWVzIGluIGEgc2luZ2xlIHBsYWNlIGluIHRoZSBzdHlsZSBzaGVldC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTLy13ZWJraXQtYm9yZGVyLWJlZm9yZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PS13ZWJraXQtYm9yZGVyLWJlZm9yZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYm9yZGVyLWJlZm9yZVwiPSBcIndlYmtpdC1ib3JkZXItYmVmb3JlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWJvcmRlci1iZWZvcmUtY29sb3JcIj0gXCJ3ZWJraXQtYm9yZGVyLWJlZm9yZS1jb2xvclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1ib3JkZXItYmVmb3JlLXN0eWxlXCI9IFwid2Via2l0LWJvcmRlci1iZWZvcmUtc3R5bGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYm9yZGVyLWJlZm9yZS13aWR0aFwiPSBcIndlYmtpdC1ib3JkZXItYmVmb3JlLXdpZHRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzIENTUyBwcm9wZXJ0eSByb3VuZHMgdGhlIGJvdHRvbS1sZWZ0IGNvcm5lciBvZiBhbiBlbGVtZW50IGJ5IHNwZWNpZnlpbmcgdGhlIHJhZGl1cyAob3IgdGhlIHJhZGl1cyBvZiB0aGUgc2VtaS1tYWpvciBhbmQgc2VtaS1taW5vciBheGVzKSBvZiB0aGUgZWxsaXBzZSBkZWZpbmluZyB0aGUgY3VydmF0dXJlIG9mIHRoZSBjb3JuZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c1wiPSBcIndlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cyBDU1MgcHJvcGVydHkgcm91bmRzIHRoZSBib3R0b20tcmlnaHQgY29ybmVyIG9mIGFuIGVsZW1lbnQgYnkgc3BlY2lmeWluZyB0aGUgcmFkaXVzIChvciB0aGUgcmFkaXVzIG9mIHRoZSBzZW1pLW1ham9yIGFuZCBzZW1pLW1pbm9yIGF4ZXMpIG9mIHRoZSBlbGxpcHNlIGRlZmluaW5nIHRoZSBjdXJ2YXR1cmUgb2YgdGhlIGNvcm5lci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzXCI9IFwid2Via2l0LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWJvcmRlci1lbmRcIj0gXCJ3ZWJraXQtYm9yZGVyLWVuZFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1ib3JkZXItZW5kLWNvbG9yXCI9IFwid2Via2l0LWJvcmRlci1lbmQtY29sb3JcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYm9yZGVyLWVuZC1zdHlsZVwiPSBcIndlYmtpdC1ib3JkZXItZW5kLXN0eWxlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWJvcmRlci1lbmQtd2lkdGhcIj0gXCJ3ZWJraXQtYm9yZGVyLWVuZC13aWR0aFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1ib3JkZXItaG9yaXpvbnRhbC1zcGFjaW5nXCI9IFwid2Via2l0LWJvcmRlci1ob3Jpem9udGFsLXNwYWNpbmdcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJvcmRlci1pbWFnZSBDU1MgcHJvcGVydHkgZHJhd3MgYW4gaW1hZ2UgYXJvdW5kIGEgZ2l2ZW4gZWxlbWVudC4gSXQgcmVwbGFjZXMgdGhlIGVsZW1lbnQncyByZWd1bGFyIGJvcmRlci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci1pbWFnZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1pbWFnZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYm9yZGVyLWltYWdlXCI9IFwid2Via2l0LWJvcmRlci1pbWFnZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm9yZGVyLXJhZGl1cyBDU1MgcHJvcGVydHkgcm91bmRzIHRoZSBjb3JuZXJzIG9mIGFuIGVsZW1lbnQncyBvdXRlciBib3JkZXIgZWRnZS4gWW91IGNhbiBzZXQgYSBzaW5nbGUgcmFkaXVzIHRvIG1ha2UgY2lyY3VsYXIgY29ybmVycywgb3IgdHdvIHJhZGlpIHRvIG1ha2UgZWxsaXB0aWNhbCBjb3JuZXJzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm9yZGVyLXJhZGl1cyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJvcmRlci1yYWRpdXNcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWJvcmRlci1yYWRpdXNcIj0gXCJ3ZWJraXQtYm9yZGVyLXJhZGl1c1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1ib3JkZXItc3RhcnRcIj0gXCJ3ZWJraXQtYm9yZGVyLXN0YXJ0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWJvcmRlci1zdGFydC1jb2xvclwiPSBcIndlYmtpdC1ib3JkZXItc3RhcnQtY29sb3JcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYm9yZGVyLXN0YXJ0LXN0eWxlXCI9IFwid2Via2l0LWJvcmRlci1zdGFydC1zdHlsZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1ib3JkZXItc3RhcnQtd2lkdGhcIj0gXCJ3ZWJraXQtYm9yZGVyLXN0YXJ0LXdpZHRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItdG9wLWxlZnQtcmFkaXVzIENTUyBwcm9wZXJ0eSByb3VuZHMgdGhlIHRvcC1sZWZ0IGNvcm5lciBvZiBhbiBlbGVtZW50IGJ5IHNwZWNpZnlpbmcgdGhlIHJhZGl1cyAob3IgdGhlIHJhZGl1cyBvZiB0aGUgc2VtaS1tYWpvciBhbmQgc2VtaS1taW5vciBheGVzKSBvZiB0aGUgZWxsaXBzZSBkZWZpbmluZyB0aGUgY3VydmF0dXJlIG9mIHRoZSBjb3JuZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3JkZXItdG9wLWxlZnQtcmFkaXVzIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1c1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c1wiPSBcIndlYmtpdC1ib3JkZXItdG9wLWxlZnQtcmFkaXVzXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyBDU1MgcHJvcGVydHkgcm91bmRzIHRoZSB0b3AtcmlnaHQgY29ybmVyIG9mIGFuIGVsZW1lbnQgYnkgc3BlY2lmeWluZyB0aGUgcmFkaXVzIChvciB0aGUgcmFkaXVzIG9mIHRoZSBzZW1pLW1ham9yIGFuZCBzZW1pLW1pbm9yIGF4ZXMpIG9mIHRoZSBlbGxpcHNlIGRlZmluaW5nIHRoZSBjdXJ2YXR1cmUgb2YgdGhlIGNvcm5lci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JvcmRlci10b3AtcmlnaHQtcmFkaXVzIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXNcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWJvcmRlci10b3AtcmlnaHQtcmFkaXVzXCI9IFwid2Via2l0LWJvcmRlci10b3AtcmlnaHQtcmFkaXVzXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWJvcmRlci12ZXJ0aWNhbC1zcGFjaW5nXCI9IFwid2Via2l0LWJvcmRlci12ZXJ0aWNhbC1zcGFjaW5nXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3gtYWxpZ24gQ1NTIHByb3BlcnR5IHNwZWNpZmllcyBob3cgYW4gZWxlbWVudCBhbGlnbnMgaXRzIGNvbnRlbnRzIGFjcm9zcyBpdHMgbGF5b3V0IGluIGEgcGVycGVuZGljdWxhciBkaXJlY3Rpb24uIFRoZSBlZmZlY3Qgb2YgdGhlIHByb3BlcnR5IGlzIG9ubHkgdmlzaWJsZSBpZiB0aGVyZSBpcyBleHRyYSBzcGFjZSBpbiB0aGUgYm94LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm94LWFsaWduIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym94LWFsaWduXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1ib3gtYWxpZ25cIj0gXCJ3ZWJraXQtYm94LWFsaWduXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3gtZGVjb3JhdGlvbi1icmVhayBDU1MgcHJvcGVydHkgc3BlY2lmaWVzIGhvdyBhbiBlbGVtZW50J3MgZnJhZ21lbnRzIHNob3VsZCBiZSByZW5kZXJlZCB3aGVuIGJyb2tlbiBhY3Jvc3MgbXVsdGlwbGUgbGluZXMsIGNvbHVtbnMsIG9yIHBhZ2VzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm94LWRlY29yYXRpb24tYnJlYWsgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3gtZGVjb3JhdGlvbi1icmVha1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYm94LWRlY29yYXRpb24tYnJlYWtcIj0gXCJ3ZWJraXQtYm94LWRlY29yYXRpb24tYnJlYWtcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJveC1kaXJlY3Rpb24gQ1NTIHByb3BlcnR5IHNwZWNpZmllcyB3aGV0aGVyIGEgYm94IGxheXMgb3V0IGl0cyBjb250ZW50cyBub3JtYWxseSAoZnJvbSB0aGUgdG9wIG9yIGxlZnQgZWRnZSksIG9yIGluIHJldmVyc2UgKGZyb20gdGhlIGJvdHRvbSBvciByaWdodCBlZGdlKS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JveC1kaXJlY3Rpb24gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3gtZGlyZWN0aW9uXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1ib3gtZGlyZWN0aW9uXCI9IFwid2Via2l0LWJveC1kaXJlY3Rpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIC1tb3otYm94LWZsZXggYW5kIC13ZWJraXQtYm94LWZsZXggQ1NTIHByb3BlcnRpZXMgc3BlY2lmeSBob3cgYSAtbW96LWJveCBvciAtd2Via2l0LWJveCBncm93cyB0byBmaWxsIHRoZSBib3ggdGhhdCBjb250YWlucyBpdCwgaW4gdGhlIGRpcmVjdGlvbiBvZiB0aGUgY29udGFpbmluZyBib3gncyBsYXlvdXQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3gtZmxleCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWJveC1mbGV4XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1ib3gtZmxleFwiPSBcIndlYmtpdC1ib3gtZmxleFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgYm94LW9yZGluYWwtZ3JvdXAgQ1NTIHByb3BlcnR5IGFzc2lnbnMgdGhlIGZsZXhib3gncyBjaGlsZCBlbGVtZW50cyB0byBhbiBvcmRpbmFsIGdyb3VwLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm94LW9yZGluYWwtZ3JvdXAgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3gtb3JkaW5hbC1ncm91cFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYm94LW9yZGluYWwtZ3JvdXBcIj0gXCJ3ZWJraXQtYm94LW9yZGluYWwtZ3JvdXBcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhpcyBpcyBhIHByb3BlcnR5IG9mIHRoZSBvcmlnaW5hbCBDU1MgRmxleGlibGUgQm94IExheW91dCBNb2R1bGUgZHJhZnQsIGFuZCBoYXMgYmVlbiByZXBsYWNlZCBieSBhIG5ld2VyIHN0YW5kYXJkLiBTZWUgZmxleGJveCBmb3IgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgc3RhbmRhcmQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9ib3gtb3JpZW50IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Ym94LW9yaWVudFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYm94LW9yaWVudFwiPSBcIndlYmtpdC1ib3gtb3JpZW50XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSAtbW96LWJveC1wYWNrIGFuZCAtd2Via2l0LWJveC1wYWNrIENTUyBwcm9wZXJ0aWVzIHNwZWNpZnkgaG93IGEgLW1vei1ib3ggb3IgLXdlYmtpdC1ib3ggcGFja3MgaXRzIGNvbnRlbnRzIGluIHRoZSBkaXJlY3Rpb24gb2YgaXRzIGxheW91dC4gVGhlIGVmZmVjdCBvZiB0aGlzIGlzIG9ubHkgdmlzaWJsZSBpZiB0aGVyZSBpcyBleHRyYSBzcGFjZSBpbiB0aGUgYm94LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYm94LXBhY2sgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3gtcGFja1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtYm94LXBhY2tcIj0gXCJ3ZWJraXQtYm94LXBhY2tcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIC13ZWJraXQtYm94LXJlZmxlY3QgQ1NTIHByb3BlcnR5IGxldHMgeW91IHJlZmxlY3QgdGhlIGNvbnRlbnQgb2YgYW4gZWxlbWVudCBpbiBvbmUgc3BlY2lmaWMgZGlyZWN0aW9uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvLXdlYmtpdC1ib3gtcmVmbGVjdCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PS13ZWJraXQtYm94LXJlZmxlY3RcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWJveC1yZWZsZWN0XCI9IFwid2Via2l0LWJveC1yZWZsZWN0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBib3gtc2hhZG93IENTUyBwcm9wZXJ0eSBhZGRzIHNoYWRvdyBlZmZlY3RzIGFyb3VuZCBhbiBlbGVtZW50J3MgZnJhbWUuIFlvdSBjYW4gc2V0IG11bHRpcGxlIGVmZmVjdHMgc2VwYXJhdGVkIGJ5IGNvbW1hcy4gQSBib3ggc2hhZG93IGlzIGRlc2NyaWJlZCBieSBYIGFuZCBZIG9mZnNldHMgcmVsYXRpdmUgdG8gdGhlIGVsZW1lbnQsIGJsdXIgYW5kIHNwcmVhZCByYWRpdXMsIGFuZCBjb2xvci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JveC1zaGFkb3cgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3gtc2hhZG93XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1ib3gtc2hhZG93XCI9IFwid2Via2l0LWJveC1zaGFkb3dcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGJveC1zaXppbmcgQ1NTIHByb3BlcnR5IHNldHMgaG93IHRoZSB0b3RhbCB3aWR0aCBhbmQgaGVpZ2h0IG9mIGFuIGVsZW1lbnQgaXMgY2FsY3VsYXRlZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JveC1zaXppbmcgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ib3gtc2l6aW5nXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1ib3gtc2l6aW5nXCI9IFwid2Via2l0LWJveC1zaXppbmdcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNsaXAtcGF0aCBDU1MgcHJvcGVydHkgY3JlYXRlcyBhIGNsaXBwaW5nIHJlZ2lvbiB0aGF0IHNldHMgd2hhdCBwYXJ0IG9mIGFuIGVsZW1lbnQgc2hvdWxkIGJlIHNob3duLiBQYXJ0cyB0aGF0IGFyZSBpbnNpZGUgdGhlIHJlZ2lvbiBhcmUgc2hvd24sIHdoaWxlIHRob3NlIG91dHNpZGUgYXJlIGhpZGRlbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NsaXAtcGF0aCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNsaXAtcGF0aFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtY2xpcC1wYXRoXCI9IFwid2Via2l0LWNsaXAtcGF0aFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1jb2x1bW4tYnJlYWstYWZ0ZXJcIj0gXCJ3ZWJraXQtY29sdW1uLWJyZWFrLWFmdGVyXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWNvbHVtbi1icmVhay1iZWZvcmVcIj0gXCJ3ZWJraXQtY29sdW1uLWJyZWFrLWJlZm9yZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1jb2x1bW4tYnJlYWstaW5zaWRlXCI9IFwid2Via2l0LWNvbHVtbi1icmVhay1pbnNpZGVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGNvbHVtbi1jb3VudCBDU1MgcHJvcGVydHkgYnJlYWtzIGFuIGVsZW1lbnQncyBjb250ZW50IGludG8gdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgY29sdW1ucy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NvbHVtbi1jb3VudCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNvbHVtbi1jb3VudFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtY29sdW1uLWNvdW50XCI9IFwid2Via2l0LWNvbHVtbi1jb3VudFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgY29sdW1uLWdhcCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgc2l6ZSBvZiB0aGUgZ2FwIChndXR0ZXIpIGJldHdlZW4gYW4gZWxlbWVudCdzIGNvbHVtbnMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jb2x1bW4tZ2FwIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y29sdW1uLWdhcFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtY29sdW1uLWdhcFwiPSBcIndlYmtpdC1jb2x1bW4tZ2FwXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBjb2x1bW4tcnVsZSZuYnNwO3Nob3J0aGFuZCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgd2lkdGgsIHN0eWxlLCBhbmQgY29sb3Igb2YgdGhlIGxpbmUgZHJhd24gYmV0d2VlbiBjb2x1bW5zIGluIGEgbXVsdGktY29sdW1uIGxheW91dC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NvbHVtbi1ydWxlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y29sdW1uLXJ1bGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWNvbHVtbi1ydWxlXCI9IFwid2Via2l0LWNvbHVtbi1ydWxlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBjb2x1bW4tcnVsZS1jb2xvciBDU1MgcHJvcGVydHkgc2V0cyB0aGUgY29sb3Igb2YgdGhlIGxpbmUgZHJhd24gYmV0d2VlbiBjb2x1bW5zIGluIGEgbXVsdGktY29sdW1uIGxheW91dC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NvbHVtbi1ydWxlLWNvbG9yIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y29sdW1uLXJ1bGUtY29sb3JcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWNvbHVtbi1ydWxlLWNvbG9yXCI9IFwid2Via2l0LWNvbHVtbi1ydWxlLWNvbG9yXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBjb2x1bW4tcnVsZS1zdHlsZSBDU1MgcHJvcGVydHkgc2V0cyB0aGUgc3R5bGUgb2YgdGhlIGxpbmUgZHJhd24gYmV0d2VlbiBjb2x1bW5zIGluIGEgbXVsdGktY29sdW1uIGxheW91dC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NvbHVtbi1ydWxlLXN0eWxlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y29sdW1uLXJ1bGUtc3R5bGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWNvbHVtbi1ydWxlLXN0eWxlXCI9IFwid2Via2l0LWNvbHVtbi1ydWxlLXN0eWxlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBjb2x1bW4tcnVsZS13aWR0aCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgd2lkdGggb2YgdGhlIGxpbmUgZHJhd24gYmV0d2VlbiBjb2x1bW5zIGluIGEgbXVsdGktY29sdW1uIGxheW91dC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NvbHVtbi1ydWxlLXdpZHRoIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y29sdW1uLXJ1bGUtd2lkdGhcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWNvbHVtbi1ydWxlLXdpZHRoXCI9IFwid2Via2l0LWNvbHVtbi1ydWxlLXdpZHRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBjb2x1bW4tc3BhbiBDU1MgcHJvcGVydHkgbWFrZXMgaXQgcG9zc2libGUgZm9yIGFuIGVsZW1lbnQgdG8gc3BhbiBhY3Jvc3MgYWxsIGNvbHVtbnMgd2hlbiBpdHMgdmFsdWUgaXMgc2V0IHRvIGFsbC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NvbHVtbi1zcGFuIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y29sdW1uLXNwYW5cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWNvbHVtbi1zcGFuXCI9IFwid2Via2l0LWNvbHVtbi1zcGFuXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBjb2x1bW4td2lkdGggQ1NTIHByb3BlcnR5IHNldHMgdGhlIGlkZWFsIGNvbHVtbiB3aWR0aCBpbiBhIG11bHRpLWNvbHVtbiBsYXlvdXQuIFRoZSBjb250YWluZXIgd2lsbCBoYXZlIGFzIG1hbnkgY29sdW1ucyBhcyBjYW4gZml0IHdpdGhvdXQgYW55IG9mIHRoZW0gaGF2aW5nIGEgd2lkdGggbGVzcyB0aGFuIHRoZSBjb2x1bW4td2lkdGggdmFsdWUuIElmIHRoZSB3aWR0aCBvZiB0aGUgY29udGFpbmVyIGlzIG5hcnJvd2VyIHRoYW4gdGhlIHNwZWNpZmllZCB2YWx1ZSwgdGhlIHNpbmdsZSBjb2x1bW4ncyB3aWR0aCB3aWxsIGJlIHNtYWxsZXIgdGhhbiB0aGUgZGVjbGFyZWQgY29sdW1uIHdpZHRoLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvY29sdW1uLXdpZHRoIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Y29sdW1uLXdpZHRoXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1jb2x1bW4td2lkdGhcIj0gXCJ3ZWJraXQtY29sdW1uLXdpZHRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBjb2x1bW5zIENTUyBzaG9ydGhhbmQgcHJvcGVydHkgc2V0cyB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgdG8gdXNlIHdoZW4gZHJhd2luZyBhbiBlbGVtZW50J3MgY29udGVudHMsIGFzIHdlbGwgYXMgdGhvc2UgY29sdW1ucycgd2lkdGhzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvY29sdW1ucyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWNvbHVtbnNcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWNvbHVtbnNcIj0gXCJ3ZWJraXQtY29sdW1uc1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZmlsdGVyIENTUyBwcm9wZXJ0eSBhcHBsaWVzIGdyYXBoaWNhbCBlZmZlY3RzIGxpa2UgYmx1ciBvciBjb2xvciBzaGlmdCB0byBhbiBlbGVtZW50LiBGaWx0ZXJzIGFyZSBjb21tb25seSB1c2VkIHRvIGFkanVzdCB0aGUgcmVuZGVyaW5nIG9mIGltYWdlcywgYmFja2dyb3VuZHMsIGFuZCBib3JkZXJzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZmlsdGVyIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9ZmlsdGVyXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1maWx0ZXJcIj0gXCJ3ZWJraXQtZmlsdGVyXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBmbGV4IENTUyBzaG9ydGhhbmQgcHJvcGVydHkgc2V0cyBob3cgYSBmbGV4IGl0ZW0gd2lsbCBncm93IG9yIHNocmluayB0byBmaXQgdGhlIHNwYWNlIGF2YWlsYWJsZSBpbiBpdHMgZmxleCBjb250YWluZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mbGV4IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9ZmxleFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtZmxleFwiPSBcIndlYmtpdC1mbGV4XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBmbGV4LWJhc2lzIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBpbml0aWFsIG1haW4gc2l6ZSBvZiBhIGZsZXggaXRlbS4gSXQgc2V0cyB0aGUgc2l6ZSBvZiB0aGUgY29udGVudCBib3ggdW5sZXNzIG90aGVyd2lzZSBzZXQgd2l0aCBib3gtc2l6aW5nLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZmxleC1iYXNpcyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZsZXgtYmFzaXNcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWZsZXgtYmFzaXNcIj0gXCJ3ZWJraXQtZmxleC1iYXNpc1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZmxleC1kaXJlY3Rpb24gQ1NTIHByb3BlcnR5IHNldHMgaG93IGZsZXggaXRlbXMgYXJlIHBsYWNlZCBpbiB0aGUgZmxleCBjb250YWluZXIgZGVmaW5pbmcgdGhlIG1haW4gYXhpcyBhbmQgdGhlIGRpcmVjdGlvbiAobm9ybWFsIG9yIHJldmVyc2VkKS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2ZsZXgtZGlyZWN0aW9uIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9ZmxleC1kaXJlY3Rpb25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWZsZXgtZGlyZWN0aW9uXCI9IFwid2Via2l0LWZsZXgtZGlyZWN0aW9uXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBmbGV4LWZsb3cgQ1NTIHNob3J0aGFuZCBwcm9wZXJ0eSBzcGVjaWZpZXMgdGhlIGRpcmVjdGlvbiBvZiBhIGZsZXggY29udGFpbmVyLCBhcyB3ZWxsIGFzIGl0cyB3cmFwcGluZyBiZWhhdmlvci5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2ZsZXgtZmxvdyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZsZXgtZmxvd1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtZmxleC1mbG93XCI9IFwid2Via2l0LWZsZXgtZmxvd1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZmxleC1ncm93IENTUyZuYnNwO3Byb3BlcnR5IHNldHMgdGhlIGZsZXggZ3JvdyBmYWN0b3Igb2YgYSBmbGV4IGl0ZW0ncyBtYWluIHNpemUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mbGV4LWdyb3cgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1mbGV4LWdyb3dcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWZsZXgtZ3Jvd1wiPSBcIndlYmtpdC1mbGV4LWdyb3dcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZsZXgtc2hyaW5rIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBmbGV4IHNocmluayBmYWN0b3Igb2YgYSBmbGV4IGl0ZW0uIElmIHRoZSBzaXplIG9mIGFsbCBmbGV4IGl0ZW1zIGlzIGxhcmdlciB0aGFuIHRoZSBmbGV4IGNvbnRhaW5lciwgaXRlbXMgc2hyaW5rIHRvIGZpdCBhY2NvcmRpbmcgdG8gZmxleC1zaHJpbmsuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mbGV4LXNocmluayBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PWZsZXgtc2hyaW5rXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1mbGV4LXNocmlua1wiPSBcIndlYmtpdC1mbGV4LXNocmlua1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgZmxleC13cmFwIENTUyBwcm9wZXJ0eSBzZXRzIHdoZXRoZXIgZmxleCBpdGVtcyBhcmUgZm9yY2VkIG9udG8gb25lIGxpbmUgb3IgY2FuIHdyYXAgb250byBtdWx0aXBsZSBsaW5lcy4gSWYgd3JhcHBpbmcgaXMgYWxsb3dlZCwgaXQgc2V0cyB0aGUgZGlyZWN0aW9uIHRoYXQgbGluZXMgYXJlIHN0YWNrZWQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mbGV4LXdyYXAgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1mbGV4LXdyYXBcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWZsZXgtd3JhcFwiPSBcIndlYmtpdC1mbGV4LXdyYXBcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBDU1MgcHJvcGVydHkgY29udHJvbHMgYWR2YW5jZWQgdHlwb2dyYXBoaWMgZmVhdHVyZXMgaW4gT3BlblR5cGUgZm9udHMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mb250LWZlYXR1cmUtc2V0dGluZ3MgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1mb250LWZlYXR1cmUtc2V0dGluZ3NcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWZvbnQtZmVhdHVyZS1zZXR0aW5nc1wiPSBcIndlYmtpdC1mb250LWZlYXR1cmUtc2V0dGluZ3NcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIGZvbnQtc21vb3RoIENTUyBwcm9wZXJ0eSBjb250cm9scyB0aGUgYXBwbGljYXRpb24gb2YgYW50aS1hbGlhc2luZyB3aGVuIGZvbnRzIGFyZSByZW5kZXJlZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2ZvbnQtc21vb3RoIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9Zm9udC1zbW9vdGhcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWZvbnQtc21vb3RoaW5nXCI9IFwid2Via2l0LWZvbnQtc21vb3RoaW5nXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWhpZ2hsaWdodFwiPSBcIndlYmtpdC1oaWdobGlnaHRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtaHlwaGVuYXRlLWNoYXJhY3RlclwiPSBcIndlYmtpdC1oeXBoZW5hdGUtY2hhcmFjdGVyXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBDU1MganVzdGlmeS1jb250ZW50IHByb3BlcnR5IGRlZmluZXMgaG93IHRoZSBicm93c2VyIGRpc3RyaWJ1dGVzIHNwYWNlIGJldHdlZW4gYW5kIGFyb3VuZCBjb250ZW50IGl0ZW1zIGFsb25nIHRoZSBtYWluLWF4aXMgb2YgYSBmbGV4IGNvbnRhaW5lciwgYW5kIHRoZSBpbmxpbmUgYXhpcyBvZiBhIGdyaWQgY29udGFpbmVyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvanVzdGlmeS1jb250ZW50IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9anVzdGlmeS1jb250ZW50XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1qdXN0aWZ5LWNvbnRlbnRcIj0gXCJ3ZWJraXQtanVzdGlmeS1jb250ZW50XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBsaW5lLWJyZWFrIENTUyBwcm9wZXJ0eSBzZXRzIGhvdyB0byBicmVhayBsaW5lcyBvZiBDaGluZXNlLCBKYXBhbmVzZSwgb3IgS29yZWFuIChDSkspIHRleHQgd2hlbiB3b3JraW5nIHdpdGggcHVuY3R1YXRpb24gYW5kIHN5bWJvbHMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9saW5lLWJyZWFrIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9bGluZS1icmVha1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtbGluZS1icmVha1wiPSBcIndlYmtpdC1saW5lLWJyZWFrXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSAtd2Via2l0LWxpbmUtY2xhbXAgQ1NTIHByb3BlcnR5IGFsbG93cyBsaW1pdGluZyBvZiB0aGUgY29udGVudHMgb2YgYSBibG9jayBjb250YWluZXIgdG8gdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbGluZXMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy8td2Via2l0LWxpbmUtY2xhbXAgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz0td2Via2l0LWxpbmUtY2xhbXBcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWxpbmUtY2xhbXBcIj0gXCJ3ZWJraXQtbGluZS1jbGFtcFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1sb2NhbGVcIj0gXCJ3ZWJraXQtbG9jYWxlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWxvZ2ljYWwtaGVpZ2h0XCI9IFwid2Via2l0LWxvZ2ljYWwtaGVpZ2h0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LWxvZ2ljYWwtd2lkdGhcIj0gXCJ3ZWJraXQtbG9naWNhbC13aWR0aFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1tYXJnaW4tYWZ0ZXJcIj0gXCJ3ZWJraXQtbWFyZ2luLWFmdGVyXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LW1hcmdpbi1iZWZvcmVcIj0gXCJ3ZWJraXQtbWFyZ2luLWJlZm9yZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1tYXJnaW4tZW5kXCI9IFwid2Via2l0LW1hcmdpbi1lbmRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtbWFyZ2luLXN0YXJ0XCI9IFwid2Via2l0LW1hcmdpbi1zdGFydFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbWFzayBDU1Mgc2hvcnRoYW5kIHByb3BlcnR5IGhpZGVzIGFuIGVsZW1lbnQgKHBhcnRpYWxseSBvciBmdWxseSkgYnkgbWFza2luZyBvciBjbGlwcGluZyB0aGUgaW1hZ2UgYXQgc3BlY2lmaWMgcG9pbnRzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvbWFzayBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW1hc2tcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LW1hc2tcIj0gXCJ3ZWJraXQtbWFza1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAtd2Via2l0LW1hc2stYm94LWltYWdlIHNldHMgdGhlIG1hc2sgaW1hZ2UgZm9yIGFuIGVsZW1lbnQncyBib3JkZXIgYm94LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvLXdlYmtpdC1tYXNrLWJveC1pbWFnZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PS13ZWJraXQtbWFzay1ib3gtaW1hZ2VcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LW1hc2stYm94LWltYWdlXCI9IFwid2Via2l0LW1hc2stYm94LWltYWdlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LW1hc2stYm94LWltYWdlLW91dHNldFwiPSBcIndlYmtpdC1tYXNrLWJveC1pbWFnZS1vdXRzZXRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtbWFzay1ib3gtaW1hZ2UtcmVwZWF0XCI9IFwid2Via2l0LW1hc2stYm94LWltYWdlLXJlcGVhdFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1tYXNrLWJveC1pbWFnZS1zbGljZVwiPSBcIndlYmtpdC1tYXNrLWJveC1pbWFnZS1zbGljZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1tYXNrLWJveC1pbWFnZS1zb3VyY2VcIj0gXCJ3ZWJraXQtbWFzay1ib3gtaW1hZ2Utc291cmNlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LW1hc2stYm94LWltYWdlLXdpZHRoXCI9IFwid2Via2l0LW1hc2stYm94LWltYWdlLXdpZHRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBtYXNrLWNsaXAgQ1NTIHByb3BlcnR5IGRldGVybWluZXMgdGhlIGFyZWEgd2hpY2ggaXMgYWZmZWN0ZWQgYnkgYSBtYXNrLiBUaGUgcGFpbnRlZCBjb250ZW50IG9mIGFuIGVsZW1lbnQgbXVzdCBiZSByZXN0cmljdGVkIHRvIHRoaXMgYXJlYS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL21hc2stY2xpcCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW1hc2stY2xpcFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtbWFzay1jbGlwXCI9IFwid2Via2l0LW1hc2stY2xpcFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgLXdlYmtpdC1tYXNrLWNvbXBvc2l0ZSBwcm9wZXJ0eSBzcGVjaWZpZXMgdGhlIG1hbm5lciBpbiB3aGljaCBtdWx0aXBsZSBtYXNrIGltYWdlcyBhcHBsaWVkIHRvIHRoZSBzYW1lIGVsZW1lbnQgYXJlIGNvbXBvc2l0ZWQgd2l0aCBvbmUgYW5vdGhlci4gTWFzayBpbWFnZXMgYXJlIGNvbXBvc2l0ZWQgaW4gdGhlIG9wcG9zaXRlIG9yZGVyIHRoYXQgdGhleSBhcmUgZGVjbGFyZWQgd2l0aCB0aGUgLXdlYmtpdC1tYXNrLWltYWdlIHByb3BlcnR5LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvLXdlYmtpdC1tYXNrLWNvbXBvc2l0ZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PS13ZWJraXQtbWFzay1jb21wb3NpdGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LW1hc2stY29tcG9zaXRlXCI9IFwid2Via2l0LW1hc2stY29tcG9zaXRlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBtYXNrLWltYWdlIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBpbWFnZSB0aGF0IGlzIHVzZWQgYXMgbWFzayBsYXllciBmb3IgYW4gZWxlbWVudC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL21hc2staW1hZ2UgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1tYXNrLWltYWdlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1tYXNrLWltYWdlXCI9IFwid2Via2l0LW1hc2staW1hZ2VcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG1hc2stb3JpZ2luIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBvcmlnaW4gb2YgYSBtYXNrLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvbWFzay1vcmlnaW4gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1tYXNrLW9yaWdpblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtbWFzay1vcmlnaW5cIj0gXCJ3ZWJraXQtbWFzay1vcmlnaW5cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG1hc2stcG9zaXRpb24gQ1NTIHByb3BlcnR5IHNldHMgdGhlIGluaXRpYWwgcG9zaXRpb24sIHJlbGF0aXZlIHRvIHRoZSBtYXNrIHBvc2l0aW9uIGxheWVyIHNldCBieSBtYXNrLW9yaWdpbiwgZm9yIGVhY2ggZGVmaW5lZCBtYXNrIGltYWdlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvbWFzay1wb3NpdGlvbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW1hc2stcG9zaXRpb25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LW1hc2stcG9zaXRpb25cIj0gXCJ3ZWJraXQtbWFzay1wb3NpdGlvblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgLXdlYmtpdC1tYXNrLXBvc2l0aW9uLXggQ1NTIHByb3BlcnR5IHNldHMgdGhlIGluaXRpYWwgaG9yaXpvbnRhbCBwb3NpdGlvbiBvZiBhIG1hc2sgaW1hZ2UuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy8td2Via2l0LW1hc2stcG9zaXRpb24teCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PS13ZWJraXQtbWFzay1wb3NpdGlvbi14XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1tYXNrLXBvc2l0aW9uLXhcIj0gXCJ3ZWJraXQtbWFzay1wb3NpdGlvbi14XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSAtd2Via2l0LW1hc2stcG9zaXRpb24teSBDU1MgcHJvcGVydHkgc2V0cyB0aGUgaW5pdGlhbCB2ZXJ0aWNhbCBwb3NpdGlvbiBvZiBhIG1hc2sgaW1hZ2UuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy8td2Via2l0LW1hc2stcG9zaXRpb24teSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PS13ZWJraXQtbWFzay1wb3NpdGlvbi15XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1tYXNrLXBvc2l0aW9uLXlcIj0gXCJ3ZWJraXQtbWFzay1wb3NpdGlvbi15XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBtYXNrLXJlcGVhdCBDU1MgcHJvcGVydHkgc2V0cyBob3cgbWFzayBpbWFnZXMgYXJlIHJlcGVhdGVkLiBBIG1hc2sgaW1hZ2UgY2FuIGJlIHJlcGVhdGVkIGFsb25nIHRoZSBob3Jpem9udGFsIGF4aXMsIHRoZSB2ZXJ0aWNhbCBheGlzLCBib3RoIGF4ZXMsIG9yIG5vdCByZXBlYXRlZCBhdCBhbGwuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9tYXNrLXJlcGVhdCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW1hc2stcmVwZWF0XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1tYXNrLXJlcGVhdFwiPSBcIndlYmtpdC1tYXNrLXJlcGVhdFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgLXdlYmtpdC1tYXNrLXJlcGVhdC14IHByb3BlcnR5IHNwZWNpZmllcyB3aGV0aGVyIGFuZCBob3cgYSBtYXNrIGltYWdlIGlzIHJlcGVhdGVkICh0aWxlZCkgaG9yaXpvbnRhbGx5LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvLXdlYmtpdC1tYXNrLXJlcGVhdC14IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9LXdlYmtpdC1tYXNrLXJlcGVhdC14XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1tYXNrLXJlcGVhdC14XCI9IFwid2Via2l0LW1hc2stcmVwZWF0LXhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIC13ZWJraXQtbWFzay1yZXBlYXQteSBwcm9wZXJ0eSBzZXRzIHdoZXRoZXIgYW5kIGhvdyBhIG1hc2sgaW1hZ2UgaXMgcmVwZWF0ZWQgKHRpbGVkKSB2ZXJ0aWNhbGx5LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvLXdlYmtpdC1tYXNrLXJlcGVhdC15IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9LXdlYmtpdC1tYXNrLXJlcGVhdC15XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1tYXNrLXJlcGVhdC15XCI9IFwid2Via2l0LW1hc2stcmVwZWF0LXlcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG1hc2stc2l6ZSBDU1MgcHJvcGVydHkgc3BlY2lmaWVzIHRoZSBzaXplcyBvZiB0aGUgbWFzayBpbWFnZXMuIFRoZSBzaXplIG9mIHRoZSBpbWFnZSBjYW4gYmUgZnVsbHkgb3IgcGFydGlhbGx5IGNvbnN0cmFpbmVkIGluIG9yZGVyIHRvIHByZXNlcnZlIGl0cyBpbnRyaW5zaWMgcmF0aW8uXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9tYXNrLXNpemUgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1tYXNrLXNpemVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LW1hc2stc2l6ZVwiPSBcIndlYmtpdC1tYXNrLXNpemVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtbWF4LWxvZ2ljYWwtaGVpZ2h0XCI9IFwid2Via2l0LW1heC1sb2dpY2FsLWhlaWdodFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1tYXgtbG9naWNhbC13aWR0aFwiPSBcIndlYmtpdC1tYXgtbG9naWNhbC13aWR0aFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1taW4tbG9naWNhbC1oZWlnaHRcIj0gXCJ3ZWJraXQtbWluLWxvZ2ljYWwtaGVpZ2h0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LW1pbi1sb2dpY2FsLXdpZHRoXCI9IFwid2Via2l0LW1pbi1sb2dpY2FsLXdpZHRoXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBvcGFjaXR5IENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBvcGFjaXR5IG9mIGFuIGVsZW1lbnQuIE9wYWNpdHkgaXMgdGhlIGRlZ3JlZSB0byB3aGljaCBjb250ZW50IGJlaGluZCBhbiBlbGVtZW50IGlzIGhpZGRlbiwgYW5kIGlzIHRoZSBvcHBvc2l0ZSBvZiB0cmFuc3BhcmVuY3kuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9vcGFjaXR5IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9b3BhY2l0eVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtb3BhY2l0eVwiPSBcIndlYmtpdC1vcGFjaXR5XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBvcmRlciBDU1MgcHJvcGVydHkgc2V0cyB0aGUgb3JkZXIgdG8gbGF5IG91dCBhbiBpdGVtIGluIGEgZmxleCBvciBncmlkIGNvbnRhaW5lci4gSXRlbXMgaW4gYSBjb250YWluZXIgYXJlIHNvcnRlZCBieSBhc2NlbmRpbmcgb3JkZXIgdmFsdWUgYW5kIHRoZW4gYnkgdGhlaXIgc291cmNlIGNvZGUgb3JkZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9vcmRlciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PW9yZGVyXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1vcmRlclwiPSBcIndlYmtpdC1vcmRlclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1wYWRkaW5nLWFmdGVyXCI9IFwid2Via2l0LXBhZGRpbmctYWZ0ZXJcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtcGFkZGluZy1iZWZvcmVcIj0gXCJ3ZWJraXQtcGFkZGluZy1iZWZvcmVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtcGFkZGluZy1lbmRcIj0gXCJ3ZWJraXQtcGFkZGluZy1lbmRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtcGFkZGluZy1zdGFydFwiPSBcIndlYmtpdC1wYWRkaW5nLXN0YXJ0XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBwZXJzcGVjdGl2ZSBDU1MgcHJvcGVydHkgZGV0ZXJtaW5lcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgej0wIHBsYW5lIGFuZCB0aGUgdXNlciBpbiBvcmRlciB0byBnaXZlIGEgM0QtcG9zaXRpb25lZCBlbGVtZW50IHNvbWUgcGVyc3BlY3RpdmUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9wZXJzcGVjdGl2ZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXBlcnNwZWN0aXZlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1wZXJzcGVjdGl2ZVwiPSBcIndlYmtpdC1wZXJzcGVjdGl2ZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgcGVyc3BlY3RpdmUtb3JpZ2luIENTUyBwcm9wZXJ0eSBkZXRlcm1pbmVzIHRoZSBwb3NpdGlvbiBhdCB3aGljaCB0aGUgdmlld2VyIGlzIGxvb2tpbmcuIEl0IGlzIHVzZWQgYXMgdGhlIHZhbmlzaGluZyBwb2ludCBieSB0aGUgcGVyc3BlY3RpdmUgcHJvcGVydHkuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9wZXJzcGVjdGl2ZS1vcmlnaW4gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1wZXJzcGVjdGl2ZS1vcmlnaW5cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXBlcnNwZWN0aXZlLW9yaWdpblwiPSBcIndlYmtpdC1wZXJzcGVjdGl2ZS1vcmlnaW5cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtcGVyc3BlY3RpdmUtb3JpZ2luLXhcIj0gXCJ3ZWJraXQtcGVyc3BlY3RpdmUtb3JpZ2luLXhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtcGVyc3BlY3RpdmUtb3JpZ2luLXlcIj0gXCJ3ZWJraXQtcGVyc3BlY3RpdmUtb3JpZ2luLXlcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0IHByb3BlcnR5IGlzIGEgbm9uLXN0YW5kYXJkIENTUyBleHRlbnNpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBmb3JjZSBwcmludGluZyBvZiBiYWNrZ3JvdW5kIGNvbG9ycyBhbmQgaW1hZ2VzIGluIGJyb3dzZXJzIGJhc2VkIG9uIHRoZSBXZWJLaXQgZW5naW5lLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3QgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz0td2Via2l0LXByaW50LWNvbG9yLWFkanVzdFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0XCI9IFwid2Via2l0LXByaW50LWNvbG9yLWFkanVzdFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1ydGwtb3JkZXJpbmdcIj0gXCJ3ZWJraXQtcnRsLW9yZGVyaW5nXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBydWJ5LXBvc2l0aW9uIENTUyBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBwb3NpdGlvbiBvZiBhIHJ1YnkgZWxlbWVudCByZWxhdGl2ZXMgdG8gaXRzIGJhc2UgZWxlbWVudC4gSXQgY2FuIGJlIHBvc2l0aW9uZWQgb3ZlciB0aGUgZWxlbWVudCAob3ZlciksIHVuZGVyIGl0ICh1bmRlciksIG9yIGJldHdlZW4gdGhlIGNoYXJhY3RlcnMgb24gdGhlaXIgcmlnaHQgc2lkZSAoaW50ZXItY2hhcmFjdGVyKS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3J1YnktcG9zaXRpb24gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1ydWJ5LXBvc2l0aW9uXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1ydWJ5LXBvc2l0aW9uXCI9IFwid2Via2l0LXJ1YnktcG9zaXRpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHNoYXBlLWltYWdlLXRocmVzaG9sZCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgYWxwaGEgY2hhbm5lbCB0aHJlc2hvbGQgdXNlZCB0byBleHRyYWN0IHRoZSBzaGFwZSB1c2luZyBhbiBpbWFnZSBhcyB0aGUgdmFsdWUgZm9yIHNoYXBlLW91dHNpZGUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9zaGFwZS1pbWFnZS10aHJlc2hvbGQgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz1zaGFwZS1pbWFnZS10aHJlc2hvbGRcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXNoYXBlLWltYWdlLXRocmVzaG9sZFwiPSBcIndlYmtpdC1zaGFwZS1pbWFnZS10aHJlc2hvbGRcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHNoYXBlLW1hcmdpbiBDU1MgcHJvcGVydHkgc2V0cyBhIG1hcmdpbiBmb3IgYSBDU1Mgc2hhcGUgY3JlYXRlZCB1c2luZyBzaGFwZS1vdXRzaWRlLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvc2hhcGUtbWFyZ2luIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c2hhcGUtbWFyZ2luXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC1zaGFwZS1tYXJnaW5cIj0gXCJ3ZWJraXQtc2hhcGUtbWFyZ2luXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSBzaGFwZS1vdXRzaWRlIENTUyBwcm9wZXJ0eSBkZWZpbmVzIGEgc2hhcGXigJR3aGljaCBtYXkgYmUgbm9uLXJlY3Rhbmd1bGFy4oCUYXJvdW5kIHdoaWNoIGFkamFjZW50IGlubGluZSBjb250ZW50IHNob3VsZCB3cmFwLiBCeSBkZWZhdWx0LCBpbmxpbmUgY29udGVudCB3cmFwcyBhcm91bmQgaXRzIG1hcmdpbiBib3g7IHNoYXBlLW91dHNpZGUgcHJvdmlkZXMgYSB3YXkgdG8gY3VzdG9taXplIHRoaXMgd3JhcHBpbmcsIG1ha2luZyBpdCBwb3NzaWJsZSB0byB3cmFwIHRleHQgYXJvdW5kIGNvbXBsZXggb2JqZWN0cyByYXRoZXIgdGhhbiBzaW1wbGUgYm94ZXMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9zaGFwZS1vdXRzaWRlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9c2hhcGUtb3V0c2lkZVxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtc2hhcGUtb3V0c2lkZVwiPSBcIndlYmtpdC1zaGFwZS1vdXRzaWRlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvciBpcyBhIG5vbi1zdGFuZGFyZCBDU1MgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSBjb2xvciBvZiB0aGUgaGlnaGxpZ2h0IHRoYXQgYXBwZWFycyBvdmVyIGEgbGluayB3aGlsZSBpdCdzIGJlaW5nIHRhcHBlZC4gVGhlIGhpZ2hsaWdodGluZyBpbmRpY2F0ZXMgdG8gdGhlIHVzZXImbmJzcDt0aGF0IHRoZWlyIHRhcCBpcyBiZWluZyBzdWNjZXNzZnVsbHkgcmVjb2duaXplZCwgYW5kIGluZGljYXRlcyB3aGljaCBlbGVtZW50IHRoZXkncmUgdGFwcGluZyBvbi5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTLy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PS13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvclwiPSBcIndlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXRleHQtY29tYmluZVwiPSBcIndlYmtpdC10ZXh0LWNvbWJpbmVcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtdGV4dC1kZWNvcmF0aW9ucy1pbi1lZmZlY3RcIj0gXCJ3ZWJraXQtdGV4dC1kZWNvcmF0aW9ucy1pbi1lZmZlY3RcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRleHQtZW1waGFzaXMgQ1NTIHByb3BlcnR5IGFwcGxpZXMgZW1waGFzaXMgbWFya3MgdG8gdGV4dCAoZXhjZXB0IHNwYWNlcyBhbmQgY29udHJvbCBjaGFyYWN0ZXJzKS4gSXQgaXMgYSBzaG9ydGhhbmQgZm9yIHRleHQtZW1waGFzaXMtc3R5bGUgYW5kIHRleHQtZW1waGFzaXMtY29sb3IuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90ZXh0LWVtcGhhc2lzIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dGV4dC1lbXBoYXNpc1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtdGV4dC1lbXBoYXNpc1wiPSBcIndlYmtpdC10ZXh0LWVtcGhhc2lzXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0ZXh0LWVtcGhhc2lzLWNvbG9yIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBjb2xvciBvZiBlbXBoYXNpcyBtYXJrcy4gVGhpcyB2YWx1ZSBjYW4gYWxzbyBiZSBzZXQgdXNpbmcgdGhlIHRleHQtZW1waGFzaXMgc2hvcnRoYW5kLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdGV4dC1lbXBoYXNpcy1jb2xvciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRleHQtZW1waGFzaXMtY29sb3JcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXRleHQtZW1waGFzaXMtY29sb3JcIj0gXCJ3ZWJraXQtdGV4dC1lbXBoYXNpcy1jb2xvclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdGV4dC1lbXBoYXNpcy1wb3NpdGlvbiBDU1MgcHJvcGVydHkgc2V0cyB3aGVyZSBlbXBoYXNpcyBtYXJrcyBhcmUgZHJhd24uIExpa2UgcnVieSB0ZXh0LCBpZiB0aGVyZSBpc24ndCBlbm91Z2ggcm9vbSBmb3IgZW1waGFzaXMgbWFya3MsIHRoZSBsaW5lIGhlaWdodCBpcyBpbmNyZWFzZWQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90ZXh0LWVtcGhhc2lzLXBvc2l0aW9uIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dGV4dC1lbXBoYXNpcy1wb3NpdGlvblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtdGV4dC1lbXBoYXNpcy1wb3NpdGlvblwiPSBcIndlYmtpdC10ZXh0LWVtcGhhc2lzLXBvc2l0aW9uXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0ZXh0LWVtcGhhc2lzLXN0eWxlIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBhcHBlYXJhbmNlIG9mIGVtcGhhc2lzIG1hcmtzLiBJdCBjYW4gYWxzbyBiZSBzZXQsIGFuZCByZXNldCwgdXNpbmcgdGhlIHRleHQtZW1waGFzaXMgc2hvcnRoYW5kLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdGV4dC1lbXBoYXNpcy1zdHlsZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRleHQtZW1waGFzaXMtc3R5bGVcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXRleHQtZW1waGFzaXMtc3R5bGVcIj0gXCJ3ZWJraXQtdGV4dC1lbXBoYXNpcy1zdHlsZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3IgQ1NTIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgZmlsbCBjb2xvciBvZiBjaGFyYWN0ZXJzIG9mIHRleHQuIElmIHRoaXMgcHJvcGVydHkgaXMgbm90IHNldCwgdGhlIHZhbHVlIG9mIHRoZSBjb2xvciBwcm9wZXJ0eSBpcyB1c2VkLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvLXdlYmtpdC10ZXh0LWZpbGwtY29sb3IgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz0td2Via2l0LXRleHQtZmlsbC1jb2xvclxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtdGV4dC1maWxsLWNvbG9yXCI9IFwid2Via2l0LXRleHQtZmlsbC1jb2xvclwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdGV4dC1vcmllbnRhdGlvbiBDU1MgcHJvcGVydHkgc2V0cyB0aGUgb3JpZW50YXRpb24gb2YgdGhlIHRleHQgY2hhcmFjdGVycyBpbiBhIGxpbmUuIEl0IG9ubHkgYWZmZWN0cyB0ZXh0IGluIHZlcnRpY2FsIG1vZGUgKHdoZW4gd3JpdGluZy1tb2RlIGlzIG5vdCBob3Jpem9udGFsLXRiKS4gSXQgaXMgdXNlZnVsIGZvciBjb250cm9sbGluZyB0aGUgZGlzcGxheSBvZiBsYW5ndWFnZXMgdGhhdCB1c2UgdmVydGljYWwgc2NyaXB0LCBhbmQgYWxzbyBmb3IgbWFraW5nIHZlcnRpY2FsIHRhYmxlIGhlYWRlcnMuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90ZXh0LW9yaWVudGF0aW9uIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dGV4dC1vcmllbnRhdGlvblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtdGV4dC1vcmllbnRhdGlvblwiPSBcIndlYmtpdC10ZXh0LW9yaWVudGF0aW9uXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIC13ZWJraXQtdGV4dC1zZWN1cml0eSBpcyBhIG5vbi1zdGFuZGFyZCBDU1MgcHJvcGVydHkgdGhhdCBvYmZ1c2NhdGVzIGNoYXJhY3RlcnMgaW4gYSAmbHQ7Zm9ybSZndDsgZmllbGQgKHN1Y2ggYXMmbmJzcDsmbHQ7aW5wdXQmZ3Q7IG9yJm5ic3A7Jmx0O3RleHRhcmVhJmd0OykgYnkgcmVwbGFjaW5nIHRoZW0gd2l0aCBhIHNoYXBlLiBJdCBvbmx5IGFmZmVjdHMgZmllbGRzIHRoYXQgYXJlIG5vdCBvZiB0eXBlPXBhc3N3b3JkLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvLXdlYmtpdC10ZXh0LXNlY3VyaXR5IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9LXdlYmtpdC10ZXh0LXNlY3VyaXR5XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC10ZXh0LXNlY3VyaXR5XCI9IFwid2Via2l0LXRleHQtc2VjdXJpdHlcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRleHQtc2l6ZS1hZGp1c3QgQ1NTIHByb3BlcnR5IGNvbnRyb2xzIHRoZSB0ZXh0IGluZmxhdGlvbiBhbGdvcml0aG0gdXNlZCBvbiBzb21lIHNtYXJ0cGhvbmVzIGFuZCB0YWJsZXRzLiBPdGhlciBicm93c2VycyB3aWxsIGlnbm9yZSB0aGlzIHByb3BlcnR5LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdGV4dC1zaXplLWFkanVzdCBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRleHQtc2l6ZS1hZGp1c3RcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXRleHQtc2l6ZS1hZGp1c3RcIj0gXCJ3ZWJraXQtdGV4dC1zaXplLWFkanVzdFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgLXdlYmtpdC10ZXh0LXN0cm9rZSBDU1MgcHJvcGVydHkgc3BlY2lmaWVzIHRoZSB3aWR0aCBhbmQgY29sb3Igb2Ygc3Ryb2tlcyBmb3IgdGV4dCBjaGFyYWN0ZXJzLiBUaGlzIGlzIGEgc2hvcnRoYW5kIHByb3BlcnR5IGZvciB0aGUgbG9uZ2hhbmQgcHJvcGVydGllcyAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoIGFuZCAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvLXdlYmtpdC10ZXh0LXN0cm9rZSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PS13ZWJraXQtdGV4dC1zdHJva2VcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXRleHQtc3Ryb2tlXCI9IFwid2Via2l0LXRleHQtc3Ryb2tlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yIENTUyBwcm9wZXJ0eSBzcGVjaWZpZXMgdGhlIHN0cm9rZSBjb2xvciBvZiBjaGFyYWN0ZXJzIG9mIHRleHQuIElmIHRoaXMgcHJvcGVydHkgaXMgbm90IHNldCwgdGhlIHZhbHVlIG9mIHRoZSBjb2xvciBwcm9wZXJ0eSBpcyB1c2VkLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvciBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PS13ZWJraXQtdGV4dC1zdHJva2UtY29sb3JcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yXCI9IFwid2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoIENTUyBwcm9wZXJ0eSBzcGVjaWZpZXMgdGhlIHdpZHRoIG9mIHRoZSBzdHJva2UgZm9yIHRleHQuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy8td2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9LXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtdGV4dC1zdHJva2Utd2lkdGhcIj0gXCJ3ZWJraXQtdGV4dC1zdHJva2Utd2lkdGhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRyYW5zZm9ybSBDU1MgcHJvcGVydHkgbGV0cyB5b3Ugcm90YXRlLCBzY2FsZSwgc2tldywgb3IgdHJhbnNsYXRlIGFuIGVsZW1lbnQuIEl0IG1vZGlmaWVzIHRoZSBjb29yZGluYXRlIHNwYWNlIG9mIHRoZSBDU1MgdmlzdWFsIGZvcm1hdHRpbmcgbW9kZWwuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90cmFuc2Zvcm0gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10cmFuc2Zvcm1cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXRyYW5zZm9ybVwiPSBcIndlYmtpdC10cmFuc2Zvcm1cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRyYW5zZm9ybS1vcmlnaW4gQ1NTIHByb3BlcnR5IHNldHMgdGhlIG9yaWdpbiBmb3IgYW4gZWxlbWVudCdzIHRyYW5zZm9ybWF0aW9ucy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RyYW5zZm9ybS1vcmlnaW4gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10cmFuc2Zvcm0tb3JpZ2luXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC10cmFuc2Zvcm0tb3JpZ2luXCI9IFwid2Via2l0LXRyYW5zZm9ybS1vcmlnaW5cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtdHJhbnNmb3JtLW9yaWdpbi14XCI9IFwid2Via2l0LXRyYW5zZm9ybS1vcmlnaW4teFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC10cmFuc2Zvcm0tb3JpZ2luLXlcIj0gXCJ3ZWJraXQtdHJhbnNmb3JtLW9yaWdpbi15XCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXRyYW5zZm9ybS1vcmlnaW4telwiPSBcIndlYmtpdC10cmFuc2Zvcm0tb3JpZ2luLXpcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRyYW5zZm9ybS1zdHlsZSBDU1MgcHJvcGVydHkgc2V0cyB3aGV0aGVyIGNoaWxkcmVuIG9mIGFuIGVsZW1lbnQgYXJlIHBvc2l0aW9uZWQgaW4gdGhlIDNEIHNwYWNlIG9yIGFyZSBmbGF0dGVuZWQgaW4gdGhlIHBsYW5lIG9mIHRoZSBlbGVtZW50LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdHJhbnNmb3JtLXN0eWxlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9dHJhbnNmb3JtLXN0eWxlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC10cmFuc2Zvcm0tc3R5bGVcIj0gXCJ3ZWJraXQtdHJhbnNmb3JtLXN0eWxlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB0cmFuc2l0aW9uIENTUyBwcm9wZXJ0eSBpcyBhIHNob3J0aGFuZCBwcm9wZXJ0eSBmb3IgdHJhbnNpdGlvbi1wcm9wZXJ0eSwgdHJhbnNpdGlvbi1kdXJhdGlvbiwgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24sIGFuZCB0cmFuc2l0aW9uLWRlbGF5LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdHJhbnNpdGlvbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRyYW5zaXRpb25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXRyYW5zaXRpb25cIj0gXCJ3ZWJraXQtdHJhbnNpdGlvblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdHJhbnNpdGlvbi1kZWxheSBDU1MgcHJvcGVydHkgc3BlY2lmaWVzIHRoZSBkdXJhdGlvbiB0byB3YWl0IGJlZm9yZSBzdGFydGluZyBhIHByb3BlcnR5J3MgdHJhbnNpdGlvbiBlZmZlY3Qgd2hlbiBpdHMgdmFsdWUgY2hhbmdlcy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RyYW5zaXRpb24tZGVsYXkgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10cmFuc2l0aW9uLWRlbGF5XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC10cmFuc2l0aW9uLWRlbGF5XCI9IFwid2Via2l0LXRyYW5zaXRpb24tZGVsYXlcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRyYW5zaXRpb24tZHVyYXRpb24gQ1NTIHByb3BlcnR5IHNldHMgdGhlIGxlbmd0aCBvZiB0aW1lIGEgdHJhbnNpdGlvbiBhbmltYXRpb24gc2hvdWxkIHRha2UgdG8gY29tcGxldGUuIEJ5IGRlZmF1bHQsIHRoZSB2YWx1ZSBpcyAwcywgbWVhbmluZyB0aGF0IG5vIGFuaW1hdGlvbiB3aWxsIG9jY3VyLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdHJhbnNpdGlvbi1kdXJhdGlvbiBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXRyYW5zaXRpb24tZHVyYXRpb25cclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb25cIj0gXCJ3ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvblwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdHJhbnNpdGlvbi1wcm9wZXJ0eSBDU1MgcHJvcGVydHkgc2V0cyB0aGUgQ1NTIHByb3BlcnRpZXMgdG8gd2hpY2ggYSB0cmFuc2l0aW9uIGVmZmVjdCBzaG91bGQgYmUgYXBwbGllZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RyYW5zaXRpb24tcHJvcGVydHkgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10cmFuc2l0aW9uLXByb3BlcnR5XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5XCI9IFwid2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHlcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uIENTUyBwcm9wZXJ0eSBzZXRzIGhvdyBpbnRlcm1lZGlhdGUgdmFsdWVzIGFyZSBjYWxjdWxhdGVkIGZvciBDU1MgcHJvcGVydGllcyBiZWluZyBhZmZlY3RlZCBieSBhIHRyYW5zaXRpb24gZWZmZWN0LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cIj0gXCJ3ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtdXNlci1kcmFnXCI9IFwid2Via2l0LXVzZXItZHJhZ1wiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdXNlci1tb2RpZnkgcHJvcGVydHkgaGFzIG5vIGVmZmVjdCBpbiBGaXJlZm94LiBJdCB3YXMgb3JpZ2luYWxseSBwbGFubmVkIHRvJm5ic3A7ZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHRoZSBjb250ZW50IG9mIGFuIGVsZW1lbnQgY2FuIGJlIGVkaXRlZCBieSBhIHVzZXIuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy91c2VyLW1vZGlmeSBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXVzZXItbW9kaWZ5XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC11c2VyLW1vZGlmeVwiPSBcIndlYmtpdC11c2VyLW1vZGlmeVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgdXNlci1zZWxlY3QgQ1NTIHByb3BlcnR5IGNvbnRyb2xzIHdoZXRoZXIgdGhlIHVzZXIgY2FuIHNlbGVjdCB0ZXh0LiBUaGlzIGRvZXNuJ3QgaGF2ZSBhbnkgZWZmZWN0IG9uIGNvbnRlbnQgbG9hZGVkIGFzIHBhcnQgb2YgYSBicm93c2VyJ3MgdXNlciBpbnRlcmZhY2UgKGl0cyBjaHJvbWUpLCBleGNlcHQgaW4gdGV4dGJveGVzLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdXNlci1zZWxlY3QgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz11c2VyLXNlbGVjdFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3ZWJraXQtdXNlci1zZWxlY3RcIj0gXCJ3ZWJraXQtdXNlci1zZWxlY3RcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHdyaXRpbmctbW9kZSBDU1MgcHJvcGVydHkgc2V0cyB3aGV0aGVyIGxpbmVzIG9mIHRleHQgYXJlIGxhaWQgb3V0IGhvcml6b250YWxseSBvciB2ZXJ0aWNhbGx5LCBhcyB3ZWxsIGFzIHRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggYmxvY2tzIHByb2dyZXNzLiBXaGVuIHNldCBmb3IgYW4gZW50aXJlIGRvY3VtZW50LCBpdCBzaG91bGQgYmUgc2V0IG9uIHRoZSByb290IGVsZW1lbnQgKGh0bWwgZWxlbWVudCBmb3IgSFRNTCBkb2N1bWVudHMpLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvd3JpdGluZy1tb2RlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9d3JpdGluZy1tb2RlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndlYmtpdC13cml0aW5nLW1vZGVcIj0gXCJ3ZWJraXQtd3JpdGluZy1tb2RlXCIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgIFRoZSB3aGl0ZS1zcGFjZSBDU1MgcHJvcGVydHkgc2V0cyBob3cgd2hpdGUgc3BhY2UgaW5zaWRlIGFuIGVsZW1lbnQgaXMgaGFuZGxlZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3doaXRlLXNwYWNlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9d2hpdGUtc3BhY2VcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2hpdGUtc3BhY2VcIj0gXCJ3aGl0ZS1zcGFjZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgd2lkb3dzIENTUyBwcm9wZXJ0eSBzZXRzIHRoZSBtaW5pbXVtIG51bWJlciBvZiBsaW5lcyBpbiBhIGJsb2NrIGNvbnRhaW5lciB0aGF0IG11c3QgYmUgc2hvd24gYXQgdGhlIHRvcCBvZiBhIHBhZ2UsIHJlZ2lvbiwgb3IgY29sdW1uLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvd2lkb3dzIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9d2lkb3dzXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHdpZG93cz0gXCJ3aWRvd3NcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHdpZHRoIENTUyBwcm9wZXJ0eSBzZXRzIGFuIGVsZW1lbnQncyB3aWR0aC4gQnkgZGVmYXVsdCwgaXQgc2V0cyB0aGUgd2lkdGggb2YgdGhlIGNvbnRlbnQgYXJlYSwgYnV0IGlmIGJveC1zaXppbmcgaXMgc2V0IHRvIGJvcmRlci1ib3gsIGl0IHNldHMgdGhlIHdpZHRoIG9mIHRoZSBib3JkZXIgYXJlYS5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3dpZHRoIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9d2lkdGhcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgd2lkdGg9IFwid2lkdGhcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHdpbGwtY2hhbmdlIENTUyBwcm9wZXJ0eSBoaW50cyB0byBicm93c2VycyBob3cgYW4gZWxlbWVudCBpcyBleHBlY3RlZCB0byBjaGFuZ2UuIEJyb3dzZXJzIG1heSBzZXQgdXAgb3B0aW1pemF0aW9ucyBiZWZvcmUgYW4gZWxlbWVudCBpcyBhY3R1YWxseSBjaGFuZ2VkLiBUaGVzZSBraW5kcyBvZiBvcHRpbWl6YXRpb25zIGNhbiBpbmNyZWFzZSB0aGUgcmVzcG9uc2l2ZW5lc3Mgb2YgYSBwYWdlIGJ5IGRvaW5nIHBvdGVudGlhbGx5IGV4cGVuc2l2ZSB3b3JrIGJlZm9yZSB0aGV5IGFyZSBhY3R1YWxseSByZXF1aXJlZC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3dpbGwtY2hhbmdlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9d2lsbC1jaGFuZ2VcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid2lsbC1jaGFuZ2VcIj0gXCJ3aWxsLWNoYW5nZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgd29yZC1icmVhayBDU1MgcHJvcGVydHkgc2V0cyB3aGV0aGVyIGxpbmUgYnJlYWtzIGFwcGVhciB3aGVyZXZlciB0aGUgdGV4dCB3b3VsZCBvdGhlcndpc2Ugb3ZlcmZsb3cgaXRzIGNvbnRlbnQgYm94LlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvd29yZC1icmVhayBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXdvcmQtYnJlYWtcclxuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgICAgIFwid29yZC1icmVha1wiPSBcIndvcmQtYnJlYWtcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHdvcmQtc3BhY2luZyBDU1MgcHJvcGVydHkgc2V0cyB0aGUgbGVuZ3RoIG9mIHNwYWNlIGJldHdlZW4gd29yZHMgYW5kIGJldHdlZW4gdGFncy5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3dvcmQtc3BhY2luZyBcXFxyXG4gICAgICAgICBhdmFpbGFibGUgdmFsdWVzIDogaHR0cHM6Ly9jc3N2YWx1ZXMuY29tLz92aWV3PXdvcmQtc3BhY2luZ1xyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3b3JkLXNwYWNpbmdcIj0gXCJ3b3JkLXNwYWNpbmdcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIG92ZXJmbG93LXdyYXAgQ1NTIHByb3BlcnR5IGFwcGxpZXMgdG8gaW5saW5lIGVsZW1lbnRzLCBzZXR0aW5nIHdoZXRoZXIgdGhlIGJyb3dzZXIgc2hvdWxkIGluc2VydCBsaW5lIGJyZWFrcyB3aXRoaW4gYW4gb3RoZXJ3aXNlIHVuYnJlYWthYmxlIHN0cmluZyB0byBwcmV2ZW50IHRleHQgZnJvbSBvdmVyZmxvd2luZyBpdHMgbGluZSBib3guXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9vdmVyZmxvdy13cmFwIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9b3ZlcmZsb3ctd3JhcFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ3b3JkLXdyYXBcIj0gXCJ3b3JkLXdyYXBcIixcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgVGhlIHdyaXRpbmctbW9kZSBDU1MgcHJvcGVydHkgc2V0cyB3aGV0aGVyIGxpbmVzIG9mIHRleHQgYXJlIGxhaWQgb3V0IGhvcml6b250YWxseSBvciB2ZXJ0aWNhbGx5LCBhcyB3ZWxsIGFzIHRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggYmxvY2tzIHByb2dyZXNzLiBXaGVuIHNldCBmb3IgYW4gZW50aXJlIGRvY3VtZW50LCBpdCBzaG91bGQgYmUgc2V0IG9uIHRoZSByb290IGVsZW1lbnQgKGh0bWwgZWxlbWVudCBmb3IgSFRNTCBkb2N1bWVudHMpLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvd3JpdGluZy1tb2RlIFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9d3JpdGluZy1tb2RlXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgICBcIndyaXRpbmctbW9kZVwiPSBcIndyaXRpbmctbW9kZVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgeCBhdHRyaWJ1dGUgZGVmaW5lcyBhIHgtYXhpcyBjb29yZGluYXRlIGluIHRoZSB1c2VyIGNvb3JkaW5hdGUgc3lzdGVtLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL3ggXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz14XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHg9IFwieFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgeSBhdHRyaWJ1dGUgZGVmaW5lcyBhIHktYXhpcyBjb29yZGluYXRlIGluIHRoZSB1c2VyIGNvb3JkaW5hdGUgc3lzdGVtLlxyXG5cclxuICAgICAgICAgcmVmZXIgdG8gOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL3kgXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz15XHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHk9IFwieVwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgei1pbmRleCBDU1MgcHJvcGVydHkgc2V0cyB0aGUgei1vcmRlciBvZiBhIHBvc2l0aW9uZWQgZWxlbWVudCBhbmQgaXRzIGRlc2NlbmRhbnRzIG9yIGZsZXggaXRlbXMuIE92ZXJsYXBwaW5nIGVsZW1lbnRzIHdpdGggYSBsYXJnZXIgei1pbmRleCBjb3ZlciB0aG9zZSB3aXRoIGEgc21hbGxlciBvbmUuXHJcblxyXG4gICAgICAgICByZWZlciB0byA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy96LWluZGV4IFxcXHJcbiAgICAgICAgIGF2YWlsYWJsZSB2YWx1ZXMgOiBodHRwczovL2Nzc3ZhbHVlcy5jb20vP3ZpZXc9ei1pbmRleFxyXG5cclxuICAgICAgICAgKi9cclxuICAgICAgICAgICAgXCJ6LWluZGV4XCI9IFwiei1pbmRleFwiLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKlxyXG4gICAgICAgICBUaGUgbm9uLXN0YW5kYXJkIHpvb20gQ1NTIHByb3BlcnR5IGNhbiBiZSB1c2VkIHRvIGNvbnRyb2wgdGhlIG1hZ25pZmljYXRpb24gbGV2ZWwgb2YgYW4gZWxlbWVudC4gdHJhbnNmb3JtOiBzY2FsZSgpIHNob3VsZCBiZSB1c2VkIGluc3RlYWQgb2YgdGhpcyBwcm9wZXJ0eSwgaWYgcG9zc2libGUuIEhvd2V2ZXIsIHVubGlrZSBDU1MgVHJhbnNmb3Jtcywgem9vbSBhZmZlY3RzIHRoZSBsYXlvdXQgc2l6ZSBvZiB0aGUgZWxlbWVudC5cclxuXHJcbiAgICAgICAgIHJlZmVyIHRvIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3pvb20gXFxcclxuICAgICAgICAgYXZhaWxhYmxlIHZhbHVlcyA6IGh0dHBzOi8vY3NzdmFsdWVzLmNvbS8/dmlldz16b29tXHJcblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHpvb209IFwiem9vbVwiLFxyXG5cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB7Y3NzfSIsImltcG9ydCB7IE9rIH0gZnJvbSAnLi4vT2snO1xyXG5sZXQgbV9hcHA6IE9rO1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0QXBwKGFwcDogT2spOiB2b2lkIHtcclxuICAgIG1fYXBwID0gYXBwO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjdXJyQXBwKCk6IE9rIHtcclxuICAgIHJldHVybiBtX2FwcDtcclxufSIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlc2hlZXQuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VmFyZWxhK1JvdW5kJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHkge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJWYXJlbGEgUm91bmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgei1pbmRleDogMDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG5vay13aWRnZXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbm9rLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm94LXNoYWRvdzogd2hpdGUgMHB4IDBweCAwcHggMnB4LCB3aGl0ZSAwcHggMHB4IDBweCA0cHgsIHdoaXRlIDBweCAwcHggMHB4IDBweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxub2stYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuXFxub2stYnV0dG9uOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiB3aGl0ZSAwcHggMHB4IDBweCAycHgsICMxMTE4MjcgMHB4IDBweCAwcHggNHB4LCByZ2JhKDAsIDAsIDAsIDApIDBweCAwcHggMHB4IDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxub2staW5wdXQge1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICAtd2Via2l0LXdyaXRpbmctbW9kZTogaG9yaXpvbnRhbC10YiAhaW1wb3J0YW50O1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICBjb2xvcjogYmxhY2s7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIHRleHQtaW5kZW50OiAwcHg7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgYXBwZWFyYW5jZTogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLXdlYmtpdC1ydGwtb3JkZXJpbmc6IGxvZ2ljYWw7XFxuICBjdXJzb3I6IHRleHQ7XFxuICBtYXJnaW46IDBlbTtcXG4gIGZvbnQ6IDQwMCAxMy4zMzMzcHggQXJpYWw7XFxuICBwYWRkaW5nOiAxcHggMnB4O1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBib3JkZXItc3R5bGU6IGluc2V0O1xcbiAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG5vay1kaWFsb2cge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwcHg7XFxuICBsZWZ0OiAwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgei1pbmRleDogMTtcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxub2stZGlhbG9nIG9rLXdpZGdldCB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgcGFkZGluZzogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9mcmFtZXdvcmsvc3R5bGVzaGVldC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0Usc0JBQUE7RUFDQSx1Q0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLCtFQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7QUFBRjs7QUFHQTtFQUNFLDhCQUFBO0FBQUY7O0FBR0E7RUFDRSw0RkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtBQUFGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1WYXJlbGErUm91bmQmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCcsIHNhbnMtc2VyaWY7XFxyXFxuICB6LWluZGV4OiAwO1xcclxcbiAgbWFyZ2luOiAwcHg7XFxyXFxuICBwYWRkaW5nOiAwcHg7XFxyXFxufVxcclxcblxcclxcbm9rLXdpZGdldCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxub2stYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBhZGRpbmc6IC43NXJlbSAxLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjkwKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogLjc1cmVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3gtc2hhZG93OiByZ2IoMjU1LCAyNTUsIDI1NSkgMHB4IDBweCAwcHggMnB4LCByZ2IoMjU1LCAyNTUsIDI1NSkgMHB4IDBweCAwcHggNHB4LCByZ2IoMjU1LCAyNTUsIDI1NSkgMHB4IDBweCAwcHggMHB4O1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5vay1idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxub2stYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICBib3gtc2hhZG93OiByZ2IoMjU1LCAyNTUsIDI1NSkgMHB4IDBweCAwcHggMnB4LCByZ2IoMTcsIDI0LCAzOSkgMHB4IDBweCAwcHggNHB4LCByZ2JhKDAsIDAsIDAsIDApIDBweCAwcHggMHB4IDBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxub2staW5wdXQge1xcclxcbiAgbWluLXdpZHRoOiAyMDBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XFxyXFxuICAtd2Via2l0LXdyaXRpbmctbW9kZTogaG9yaXpvbnRhbC10YiAhaW1wb3J0YW50O1xcclxcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcclxcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gIHRleHQtaW5kZW50OiAwcHg7XFxyXFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgYXBwZWFyYW5jZTogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgLXdlYmtpdC1ydGwtb3JkZXJpbmc6IGxvZ2ljYWw7XFxyXFxuICBjdXJzb3I6IHRleHQ7XFxyXFxuICBtYXJnaW46IDBlbTtcXHJcXG4gIGZvbnQ6IDQwMCAxMy4zMzMzcHggQXJpYWw7XFxyXFxuICBwYWRkaW5nOiAxcHggMnB4O1xcclxcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICBib3JkZXItc3R5bGU6IGluc2V0O1xcclxcbiAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5vay1kaWFsb2cge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwcHg7XFxyXFxuICBsZWZ0OiAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxub2stZGlhbG9nIG9rLXdpZGdldCB7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xcclxcbiAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvKipcclxuICogQXV0aGV1ciA6IEtpbGxpYW4gS2VybGF1XHJcbiAqIENvbnRleHRlIDogb2sgZXN0IHVuIGZyYW1ld29yaywgYWluc2kgbGEgY2xhc3NlIE9rIGNvbnRyb2xlIHRvdXRlIGwnYXBwIGV0IGxlcyBzb3VzLXBhcnRpZXNcclxuICogT2srSW1nIHNvbnQgZGVzIHNvdXMgY2xhc3NlcyBxdWkgcGVybWV0dGVudCBkZSBtYW5pcHVsZXIgbCdhcHBsaWNhdGlvbiBmYWNpbGVtZW50XHJcbiAqIERlc2NyaXB0aW9uIDogSWNpIG5vdXMgYWxsb25zIGNyw6llciB1bmUgaW1hZ2UgZXQgbCdhZmZpY2hlciBhdSBib3V0IGRlIDUwMG1zLlxyXG4gKiBNYWlzIGVuY29yZSBub3VzIGFsbG9ucyBhdXNzaSB0cmFkdWlyZSBsYSBwYWdlLCBtYWlzIGF1c3NpIGF1IGJvdXQgZGUgNTAwbXNcclxuICovXHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgT2ssIE9rVXJsLCBPa1RyYW5zbGF0b3JFdmVudHMsIE9rRXZlbnRzIH0gZnJvbSAnLi4vZnJhbWV3b3JrL09rJztcclxuaW1wb3J0IHsgT2tEaWFsb2csIE9rVHIsIE9rV2lkZ2V0LCBPa0J1dHRvbiwgT2tJbnB1dCB9IGZyb20gXCIuLi9mcmFtZXdvcmsvQ29tcG9uZW50cy9vay1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IE9rQ29sb3JzIH0gZnJvbSBcIi4uL2ZyYW1ld29yay9Pa0NvbG9yc1wiO1xyXG5jb25zb2xlLmxvZyhPa0NvbG9ycy50cmFuc2Zvcm1Gcm9tSGV4VG9SZ2JhKFwiIzNCODJGNlwiKSk7XHJcbmNvbnN0IEFwcCA9IG5ldyBPayh7fSk7XHJcbkFwcC5vbihPa0V2ZW50cy5yZWFkeSwgKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvay13aWRnZXRcIiwgT2tXaWRnZXQpO1xyXG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib2stdHJcIiwgT2tUcik7IC8vIGTDqWNsYXJhdGlvbiBkdSBjb21wb3NhbnRzIHBlcnNvbm5hbGlzw6kgT2tcclxuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9rLWRpYWxvZ1wiLCBPa0RpYWxvZyk7XHJcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvay1idXR0b25cIiwgT2tCdXR0b24pO1xyXG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib2staW5wdXRcIiwgT2tJbnB1dCk7XHJcbiAgICBBcHAudHJhbnNsYXRvcigpLnNldFVybChuZXcgT2tVcmwoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbGF1a2Vya2lsbGlhbi9Pay1GcmFtZXdvcmsvbWFpbi90ZXN0L0xhbmd1YWdlcy9UUl9GUi5qc29uXCIpKTtcclxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvblwiKTtcclxuICAgIGJ1dHRvbi5vbihcImNsaWNrXCIsIGUgPT4ge1xyXG4gICAgICAgIGxldCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwib2stZGlhbG9nXCIpO1xyXG4gICAgICAgIGRpYWxvZy5zaG93KCk7XHJcbiAgICB9KTtcclxufSkpO1xyXG5BcHAudHJhbnNsYXRvcigpLm9uKE9rVHJhbnNsYXRvckV2ZW50cy50cmFuc2xhdGVkLCAoKSA9PiB7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwidHJhbnNsYXRlZFwiKVxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
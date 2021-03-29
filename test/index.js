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
        this.App = Object(_private_global__WEBPACK_IMPORTED_MODULE_0__["currApp"])();
    }
    connectedCallback() {
        let el = this;
        this.m_text = this.innerText;
        this.App.translator().on("translated", () => {
            el.innerText = this.App.translator().translate(this.m_text);
        });
    }
}



/***/ }),

/***/ "./framework/Ok.ts":
/*!*************************!*\
  !*** ./framework/Ok.ts ***!
  \*************************/
/*! exports provided: Ok, OkImage, OkUrl, currApp, OkEventsEmitter */
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
/**
 * pause during a time
 * @param time
 * time in ms
 */
function OkWait(time) {
    return new Promise(function (success) {
        setTimeout(() => {
            success();
        }, time);
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
/* harmony import */ var _framework_Components_ok_tr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../framework/Components/ok-tr */ "./framework/Components/ok-tr.ts");
/* harmony import */ var _framework_OkWait__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../framework/OkWait */ "./framework/OkWait.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const App = new _framework_Ok__WEBPACK_IMPORTED_MODULE_0__["Ok"]({});
customElements.define("ok-tr", _framework_Components_ok_tr__WEBPACK_IMPORTED_MODULE_1__["OkTr"]);
function createImg() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Object(_framework_OkWait__WEBPACK_IMPORTED_MODULE_2__["OkWait"])(500);
        const content = yield (new _framework_Ok__WEBPACK_IMPORTED_MODULE_0__["OkImage"]({ url: new _framework_Ok__WEBPACK_IMPORTED_MODULE_0__["OkUrl"]("https://raw.githubusercontent.com/laukerkillian/Ok-Framework/main/framework/assets/icon.png") })).getImage();
        let img = document.createElement("img");
        img.setAttribute("src", content);
        document.body.append(img);
    });
}
function translate() {
    return __awaiter(this, void 0, void 0, function* () {
        const lang = App.language().getLanguage();
        yield Object(_framework_OkWait__WEBPACK_IMPORTED_MODULE_2__["OkWait"])(500);
        yield App.translator().setUrl(new _framework_Ok__WEBPACK_IMPORTED_MODULE_0__["OkUrl"](`https://raw.githubusercontent.com/laukerkillian/Ok-Framework/main/test/Languages/TR_${lang}.json`));
    });
}
function main() {
    createImg();
    translate();
}
App.translator().on("translated", () => {
});
let isPressed = false;
document.getElementById("coucou").addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    if (!isPressed) {
        isPressed = true;
        yield Object(_framework_OkWait__WEBPACK_IMPORTED_MODULE_2__["OkWait"])(1000);
        alert("Salut les copains");
        isPressed = false;
    }
}));
main();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL0NvbXBvbmVudHMvb2stdHIudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL09rLnRzIiwid2VicGFjazovLy8uL2ZyYW1ld29yay9Pa0V2ZW50c0VtaXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL09rSW1hZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL09rTGFuZ3VhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL09rVHJhbnNsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvT2tVcmwudHMiLCJ3ZWJwYWNrOi8vLy4vZnJhbWV3b3JrL09rV2FpdC50cyIsIndlYnBhY2s6Ly8vLi9mcmFtZXdvcmsvcHJpdmF0ZS9nbG9iYWwudHMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDakZBO0FBQUE7QUFBQTtBQUEwQztBQUUxQyxNQUFNLElBQUssU0FBUSxXQUFXO0lBRzFCO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsR0FBRyxHQUFHLCtEQUFPLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsaUJBQWlCO1FBQ2IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7WUFDeEMsRUFBRSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDO0lBQ04sQ0FBQztDQUNKO0FBRVk7Ozs7Ozs7Ozs7Ozs7QUNwQmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUM7QUFDVztBQUMwQjtBQUNyQjtBQUNuQjtBQUNvQjtBQVFsRCxNQUFNLEVBQUU7SUFNSixZQUFZLE9BQWlCO1FBTHJCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsV0FBTSxHQUFZLElBQUksZ0RBQU8sQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLDRDQUFLLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ3BELGlCQUFZLEdBQWlCLElBQUksMERBQVksRUFBRSxDQUFDO1FBQ2hELGVBQVUsR0FBZSxJQUFJLHNEQUFVLEVBQUUsQ0FBQztRQUc5Qyw4REFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxnQkFBZ0IsQ0FBQyxPQUFnQjtRQUNwQyxJQUFHLE9BQU8sQ0FBQyxhQUFhLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ25EO0lBQ0wsQ0FBQztJQUVNLEtBQUs7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVNLFFBQVEsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFTSxJQUFJO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxPQUFPLENBQUMsSUFBYTtRQUN4QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVNLFVBQVU7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztDQUNKO0FBRTJFOzs7Ozs7Ozs7Ozs7O0FDekQ1RTtBQUFBO0FBQUE7Ozs7RUFJRTtBQUdGLE1BQU0sZUFBZTtJQU9qQjs7T0FFRztJQUNIO1FBUkE7OztXQUdHO1FBQ0ssYUFBUSxHQUEwQixFQUFFLENBQUMsQ0FBQyxzQkFBc0I7SUFNcEUsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksRUFBRSxDQUFDLEtBQWEsRUFBRSxRQUEyQjtRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLGNBQWMsQ0FBQyxLQUFhLEVBQUUsZ0JBQW1DO1FBQ3BFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMsbUNBQW1DLEtBQUssa0JBQWtCLENBQUMsQ0FBQztTQUMvRTtRQUVELE1BQU0sZUFBZSxHQUFHLENBQUMsUUFBMkIsRUFBRSxFQUFFLENBQUMsUUFBUSxLQUFLLGdCQUFnQixDQUFDO1FBRXZGLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ08sSUFBSSxDQUFDLEtBQWEsRUFBRSxJQUFTO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLEtBQUssa0JBQWtCLENBQUMsQ0FBQztTQUMzRTtRQUVELE1BQU0sYUFBYSxHQUFHLENBQUMsUUFBMkIsRUFBRSxFQUFFO1lBQ2xELFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQ0o7QUFFdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EeEIsTUFBTSxPQUFPO0lBR1QsWUFBWSxPQUFnQjtRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU0sR0FBRztRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUs7SUFDckIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxHQUFVO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ3JCLENBQUM7SUFFTSxRQUFRO1FBRVgsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFnQixPQUErQjs7Z0JBQzlELE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdkQsTUFBTSxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztnQkFFcEMsVUFBVSxDQUFDLE1BQU0sR0FBRyxVQUFTLGVBQWU7b0JBQ3hDLElBQUksT0FBTyxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsb0JBQW9CO29CQUM1RSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JCLENBQUM7Z0JBQ0QsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxDQUFDO1NBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDO0NBQ0o7QUFFd0I7Ozs7Ozs7Ozs7Ozs7QUNoQ3pCO0FBQUE7QUFBQSxNQUFNLFVBQVU7SUFHWixZQUFZLE9BQWlCO1FBRnJCLGVBQVUsR0FBVyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBRzVDLElBQUcsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7U0FDdEM7SUFDTCxDQUFDO0lBRU0sV0FBVyxDQUFDLFFBQWdCO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO0lBQy9CLENBQUM7SUFFTSxXQUFXLENBQUMsV0FBa0M7UUFDakQsSUFBRyxPQUFPLFdBQVcsSUFBSSxRQUFRLEVBQUU7WUFDL0IsV0FBVyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDL0I7UUFDRCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVPLGVBQWUsQ0FBQyxXQUEwQjtRQUM5QyxLQUFLLE1BQU0sVUFBVSxJQUFJLFdBQVcsRUFBRTtZQUNsQyxRQUFRLFVBQVUsRUFBRTtnQkFDaEIsS0FBSyxXQUFXO29CQUNaLElBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7d0JBQzFCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7cUJBQ3BDO29CQUNELE1BQU07Z0JBQ1YsS0FBSyxTQUFTO29CQUNWLElBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTt3QkFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO3FCQUMxQjtvQkFDRCxNQUFNO2dCQUNWLEtBQUssTUFBTTtvQkFDUCxJQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFO3dCQUNwRCxPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUM5RDtvQkFDRCxNQUFNO2dCQUNWO29CQUNJLElBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7d0JBQzFCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7cUJBQ3BDO29CQUNELE1BQU07YUFDYjtTQUNKO0lBQ0wsQ0FBQztDQUNKO0FBRTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREU7QUFFb0I7QUFNbEQsSUFBSyxNQUtKO0FBTEQsV0FBSyxNQUFNO0lBQ1A7O09BRUc7SUFDSCxtQ0FBd0I7QUFDNUIsQ0FBQyxFQUxJLE1BQU0sS0FBTixNQUFNLFFBS1Y7QUFFRCxNQUFNLFlBQWEsU0FBUSxnRUFBZTtJQUl0QyxZQUFZLE9BQWlCO1FBQ3pCLEtBQUssRUFBRSxDQUFDO1FBSkosVUFBSyxHQUFVLElBQUksNENBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixjQUFTLEdBQTBCLEVBQUUsQ0FBQztRQUkxQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdEIsSUFBRyxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsR0FBRyxFQUFFO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBRU0sU0FBUyxDQUFDLE9BQWU7UUFDNUIsSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsQztRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFTSxHQUFHO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSztJQUNyQixDQUFDO0lBRVksTUFBTSxDQUFDLEdBQVU7O1lBQzFCLElBQUcsTUFBTSxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNqQixNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFO2dCQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztnQkFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ3BDO2lCQUFLO2dCQUNGLE1BQU0sZUFBZSxDQUFDO2FBQ3pCO1FBQ0wsQ0FBQztLQUFBO0lBRU8sY0FBYztRQUNsQixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FDSjtBQUVzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkR2QyxNQUFNLEtBQUs7SUFJUCxZQUFZLEdBQVc7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRU0sTUFBTSxDQUFDLEdBQVc7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVZLEtBQUs7O1lBQ2QsSUFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2hCLE1BQU0sT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7YUFDNUI7WUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUM5QixPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUM7S0FBQTtJQUVZLFVBQVU7O1lBQ25CLElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNoQixNQUFNLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO2FBQzVCO1lBRUQsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3hDLE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQztLQUFBO0lBRVksT0FBTzs7WUFDaEIsSUFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2hCLE1BQU0sT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7YUFDNUI7WUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQztLQUFBO0NBQ0o7QUFFYTs7Ozs7Ozs7Ozs7OztBQy9DZDtBQUFBO0FBQUE7Ozs7R0FJRztBQUNILFNBQVMsTUFBTSxDQUFDLElBQVk7SUFDeEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU87UUFDaEMsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNaLE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRWU7Ozs7Ozs7Ozs7Ozs7QUNaaEI7QUFBQTtBQUFBO0FBQUEsSUFBSSxLQUFTLENBQUM7QUFDUCxTQUFTLE1BQU0sQ0FBQyxHQUFPO0lBQzFCLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDaEIsQ0FBQztBQUNNLFNBQVMsT0FBTztJQUNuQixPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDOzs7Ozs7Ozs7Ozs7O0FDUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNxRDtBQUNBO0FBQ1I7QUFDN0MsZ0JBQWdCLGdEQUFFLEdBQUc7QUFDckIsK0JBQStCLGdFQUFJO0FBQ25DO0FBQ0E7QUFDQSxjQUFjLGdFQUFNO0FBQ3BCLG1DQUFtQyxxREFBTyxFQUFFLFVBQVUsbURBQUssaUdBQWlHO0FBQzVKO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0VBQU07QUFDcEIsMENBQTBDLG1EQUFLLHdGQUF3RixLQUFLO0FBQzVJLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdFQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdGVzdC9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7T2t9IGZyb20gJy4uL09rJztcclxuaW1wb3J0IHtjdXJyQXBwfSBmcm9tICcuLi9wcml2YXRlL2dsb2JhbCc7XHJcblxyXG5jbGFzcyBPa1RyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgcHJpdmF0ZSBBcHA6IE9rO1xyXG4gICAgcHJpdmF0ZSBtX3RleHQ6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5BcHAgPSBjdXJyQXBwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgbGV0IGVsID0gdGhpcztcclxuICAgICAgICB0aGlzLm1fdGV4dCA9IHRoaXMuaW5uZXJUZXh0O1xyXG4gICAgICAgIHRoaXMuQXBwLnRyYW5zbGF0b3IoKS5vbihcInRyYW5zbGF0ZWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBlbC5pbm5lclRleHQgPSB0aGlzLkFwcC50cmFuc2xhdG9yKCkudHJhbnNsYXRlKHRoaXMubV90ZXh0KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge09rVHJ9IiwiaW1wb3J0IHtPa0ltYWdlfSBmcm9tICcuL09rSW1hZ2UnXHJcbmltcG9ydCB7T2tUcmFuc2xhdG9yfSBmcm9tIFwiLi9Pa1RyYW5zbGF0b3JcIjtcclxuaW1wb3J0IHtPa0xhbmd1YWdlLCBPcHRpb25zIGFzIE9rTGFuZ3VhZ2VPcHRpb25zfSBmcm9tIFwiLi9Pa0xhbmd1YWdlXCI7XHJcbmltcG9ydCB7c2V0QXBwLCBjdXJyQXBwfSBmcm9tIFwiLi9wcml2YXRlL2dsb2JhbFwiO1xyXG5pbXBvcnQge09rVXJsfSBmcm9tIFwiLi9Pa1VybFwiO1xyXG5pbXBvcnQge09rRXZlbnRzRW1pdHRlcn0gZnJvbSBcIi4vT2tFdmVudHNFbWl0dGVyXCI7XHJcblxyXG5pbnRlcmZhY2UgT3B0aW9ucyB7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIGljb24/OiBPa0ltYWdlO1xyXG4gICAgdXJsVHJhbnNsYXRvcj86IE9rVXJsXHJcbn1cclxuXHJcbmNsYXNzIE9rIHtcclxuICAgIHByaXZhdGUgbV90aXRsZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgbV9pY29uOiBPa0ltYWdlID0gbmV3IE9rSW1hZ2Uoe3VybDogbmV3IE9rVXJsKFwiXCIpfSk7XHJcbiAgICBwcml2YXRlIG1fdHJhbnNsYXRvcjogT2tUcmFuc2xhdG9yID0gbmV3IE9rVHJhbnNsYXRvcigpO1xyXG4gICAgcHJpdmF0ZSBtX2xhbmd1YWdlOiBPa0xhbmd1YWdlID0gbmV3IE9rTGFuZ3VhZ2UoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zPzogT3B0aW9ucykge1xyXG4gICAgICAgIHNldEFwcCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNldENvbmZpZ3VyYXRpb24ob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldENvbmZpZ3VyYXRpb24ob3B0aW9uczogT3B0aW9ucyk6IHZvaWQge1xyXG4gICAgICAgIGlmKG9wdGlvbnMudXJsVHJhbnNsYXRvcikge1xyXG4gICAgICAgICAgICB0aGlzLm1fdHJhbnNsYXRvci5zZXRVcmwob3B0aW9ucy51cmxUcmFuc2xhdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRpdGxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV90aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VGl0bGUodGl0bGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubV90aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpY29uKCk6IE9rSW1hZ2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1faWNvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SWNvbihpY29uOiBPa0ltYWdlKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGljb24uZ2V0SW1hZ2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tX2ljb24gPSBpY29uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cmFuc2xhdG9yKCk6IE9rVHJhbnNsYXRvciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV90cmFuc2xhdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsYW5ndWFnZSgpOiBPa0xhbmd1YWdlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2xhbmd1YWdlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge09rLCBPcHRpb25zIGFzIE9rT3B0aW9ucywgT2tJbWFnZSwgT2tVcmwsIGN1cnJBcHAsIE9rRXZlbnRzRW1pdHRlcn07IiwiLypcclxuKiBBdXRob3IgOiBLSUxMSUFOIEtFUkxBVVxyXG4qIFRpdGxlIDogT2tSZXF1ZXN0XHJcbiogRGVzY3JpcHRpb24gOiBPa1JlcXVlc3QgaXMgYSBmdW5jdGlvbiB0byBtYWtlIGh0dHAgcmVxdWVzdFxyXG4qL1xyXG5cclxuXHJcbmNsYXNzIE9rRXZlbnRzRW1pdHRlciB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1fZXZlbnRzOiB7W2luZGV4OiBzdHJpbmddOmFueX0gPSB7fTsgLy8gY29udGFpbnMgYWxsIGV2ZW50c1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGNsYXNzIGNvbnRhaW5zIGFsbCB5b3UgbmVlZCB0byBtYWRlIGV2ZW50IGVtaXR0ZXJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdGhpcyBtZXRob2QgcmVnaXN0ZXIgYW4gZXZlbnRcclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbihldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogKGFyZz86YW55KSA9PiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMubV9ldmVudHNbZXZlbnRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9ldmVudHNbZXZlbnRdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubV9ldmVudHNbZXZlbnRdLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdGhpcyBtZXRob2QgcmVtb3ZlIGFuIGV2ZW50IHJlZ2lzdGVyZWQgaWYgdGhpcyBldmVudCBkb2Vzbid0IGV4aXN0IHRoYXQgdGhyb3cgYW4gZXJyb3JcclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICogQHBhcmFtIGxpc3RlbmVyVG9SZW1vdmVcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZUxpc3RlbmVyKGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyVG9SZW1vdmU6IChhcmc/OmFueSkgPT4gYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1fZXZlbnRzW2V2ZW50XSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IHJlbW92ZSBhIGxpc3RlbmVyLiBFdmVudCBcIiR7ZXZlbnR9XCIgZG9lc24ndCBleGl0cy5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZpbHRlckxpc3RlbmVycyA9IChsaXN0ZW5lcjogKGFyZz86YW55KSA9PiBhbnkpID0+IGxpc3RlbmVyICE9PSBsaXN0ZW5lclRvUmVtb3ZlO1xyXG5cclxuICAgICAgICB0aGlzLm1fZXZlbnRzW2V2ZW50XSA9IHRoaXMubV9ldmVudHNbZXZlbnRdLmZpbHRlcihmaWx0ZXJMaXN0ZW5lcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBlbWl0IGFuIGV2ZW50IGlmIHRoaXMgZXZlbnQgZG9lc24ndCBleGlzdCB0aGF0IHRocm93IGFuIGVycm9yXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqIEBwYXJhbSBkYXRhXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBlbWl0KGV2ZW50OiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgICAgIGlmICghdGhpcy5tX2V2ZW50c1tldmVudF0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBlbWl0IGFuIGV2ZW50LiBFdmVudCBcIiR7ZXZlbnR9XCIgZG9lc24ndCBleGl0cy5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZpcmVDYWxsYmFja3MgPSAoY2FsbGJhY2s6IChhcmc/OmFueSkgPT4gYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubV9ldmVudHNbZXZlbnRdLmZvckVhY2goZmlyZUNhbGxiYWNrcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7T2tFdmVudHNFbWl0dGVyfSIsImltcG9ydCB7T2tVcmx9IGZyb20gXCIuL09rVXJsXCI7XHJcblxyXG5pbnRlcmZhY2UgT3B0aW9ucyB7XHJcbiAgICB1cmw6IE9rVXJsXHJcbn1cclxuXHJcbmNsYXNzIE9rSW1hZ2Uge1xyXG4gICAgcHJpdmF0ZSBtX3VybDogT2tVcmw7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuc2V0VXJsKG9wdGlvbnMudXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXJsKCk6IE9rVXJsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3VybFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRVcmwodXJsOiBPa1VybCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubV91cmwgPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEltYWdlKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyBmdW5jdGlvbiAocmVzb2x2ZTogKGFyZzA6IHN0cmluZykgPT4gdm9pZCkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgKGF3YWl0IHRoaXMubV91cmwucmVxdWVzdCgpKS5ibG9iKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihmaWxlTG9hZGVkRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzcmNEYXRhID0gZmlsZUxvYWRlZEV2ZW50LnRhcmdldC5yZXN1bHQudG9TdHJpbmcoKTsgLy8gPC0tLSBkYXRhOiBiYXNlNjRcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoc3JjRGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGRhdGEpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7T2tJbWFnZSwgT3B0aW9uc30iLCJpbnRlcmZhY2UgT3B0aW9ucyB7XHJcbiAgICBsYW5ndWFnZT86IHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgT2tMYW5ndWFnZSB7XHJcbiAgICBwcml2YXRlIG1fbGFuZ3VhZ2U6IHN0cmluZyA9IG5hdmlnYXRvci5sYW5ndWFnZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zPzogT3B0aW9ucykge1xyXG4gICAgICAgIGlmKG9wdGlvbnM/Lmxhbmd1YWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9sYW5ndWFnZSA9IG9wdGlvbnMubGFuZ3VhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tX2xhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExhbmd1YWdlKHByZWZlcmVuY2VzPzogQXJyYXk8c3RyaW5nPnxzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmKHR5cGVvZiBwcmVmZXJlbmNlcyAhPSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIHByZWZlcmVuY2VzID0gW3ByZWZlcmVuY2VzXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHByZWZlcmVuY2UgPSB0aGlzLmdldExhbmd1YWdlUHJlZihwcmVmZXJlbmNlcyk7XHJcbiAgICAgICAgcmV0dXJuIHByZWZlcmVuY2Uuc2xpY2UoMCwgMikudG9VcHBlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldExhbmd1YWdlUHJlZihwcmVmZXJlbmNlczogQXJyYXk8c3RyaW5nPik6IHN0cmluZyB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcmVmZXJlbmNlIG9mIHByZWZlcmVuY2VzKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocHJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm5hdmlnYXRvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImludGVybmVcIjpcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLm1fbGFuZ3VhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9sYW5ndWFnZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiaHRtbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLmdldEF0dHJpYnV0ZShcImxhbmdcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLmdldEF0dHJpYnV0ZShcImxhbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtPa0xhbmd1YWdlLCBPcHRpb25zfSIsImltcG9ydCB7T2tVcmx9IGZyb20gXCIuL09rVXJsXCI7XHJcbmltcG9ydCB7T2tMYW5ndWFnZX0gZnJvbSBcIi4vT2tMYW5ndWFnZVwiO1xyXG5pbXBvcnQge09rRXZlbnRzRW1pdHRlcn0gZnJvbSBcIi4vT2tFdmVudHNFbWl0dGVyXCI7XHJcblxyXG5pbnRlcmZhY2UgT3B0aW9ucyB7XHJcbiAgICB1cmw/OiBPa1VybFxyXG59XHJcblxyXG5lbnVtIEV2ZW50cyB7XHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gVHJhbnNsYXRlZCBmaWxlIGlzIGxvYWRlZFxyXG4gICAgICovXHJcbiAgICB0cmFuc2xhdGVkPSBcInRyYW5zbGF0ZWRcIixcclxufVxyXG5cclxuY2xhc3MgT2tUcmFuc2xhdG9yIGV4dGVuZHMgT2tFdmVudHNFbWl0dGVyIHtcclxuICAgIHByaXZhdGUgbV91cmw6IE9rVXJsID0gbmV3IE9rVXJsKFwiXCIpO1xyXG4gICAgcHJpdmF0ZSBtX2NvbnRlbnQ6IHtbaW5kZXg6IHN0cmluZ106YW55fSA9IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBPcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIGlmKG9wdGlvbnM/LnVybCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFVybChvcHRpb25zLnVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cmFuc2xhdGUoa2V5d29yZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZih0aGlzLm1fY29udGVudFtrZXl3b3JkXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tX2NvbnRlbnRba2V5d29yZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBrZXl3b3JkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cmwoKTogT2tVcmwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fdXJsXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHNldFVybCh1cmw6IE9rVXJsKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYoYXdhaXQgdXJsLmV4aXN0KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5tX3VybCA9IHVybDtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IChhd2FpdCB0aGlzLm1fdXJsLnJlcXVlc3QoKSkuanNvbigpXHJcbiAgICAgICAgICAgIHRoaXMubV9jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KEV2ZW50cy50cmFuc2xhdGVkLCB7fSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBcIlVybCBub3QgZm91bmRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlckV2ZW50cygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uKEV2ZW50cy50cmFuc2xhdGVkLCAoKSA9PiB7fSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtPa1RyYW5zbGF0b3IsIE9wdGlvbnMsIEV2ZW50c307IiwiY2xhc3MgT2tVcmwge1xyXG4gICAgcHJpdmF0ZSBtX3VybDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBtX3JlcXVlc3Q6IFJlc3BvbnNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zZXRVcmwodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tX3VybDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VXJsKHVybDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tX3VybCA9IHVybDtcclxuICAgICAgICB0aGlzLm1fcmVxdWVzdCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZXhpc3QoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgaWYoIXRoaXMubV9yZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCh0aGlzLm1fdXJsKTtcclxuICAgICAgICAgICAgdGhpcy5tX3JlcXVlc3QgPSByZXF1ZXN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gdGhpcy5tX3JlcXVlc3Qub2s7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0Q29udGVudCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIGlmKCF0aGlzLm1fcmVxdWVzdCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2godGhpcy5tX3VybCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9yZXF1ZXN0ID0gcmVxdWVzdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMubV9yZXF1ZXN0LnRleHQoKTtcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyByZXF1ZXN0KCk6IFByb21pc2U8UmVzcG9uc2U+IHtcclxuICAgICAgICBpZighdGhpcy5tX3JlcXVlc3QpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKHRoaXMubV91cmwpO1xyXG4gICAgICAgICAgICB0aGlzLm1fcmVxdWVzdCA9IHJlcXVlc3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5tX3JlcXVlc3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7T2tVcmx9IiwiLyoqXHJcbiAqIHBhdXNlIGR1cmluZyBhIHRpbWVcclxuICogQHBhcmFtIHRpbWVcclxuICogdGltZSBpbiBtc1xyXG4gKi9cclxuZnVuY3Rpb24gT2tXYWl0KHRpbWU6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChzdWNjZXNzKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3MoKTtcclxuICAgICAgICB9LCB0aW1lKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQge09rV2FpdH07IiwiaW1wb3J0IHsgT2sgfSBmcm9tICcuLi9Payc7XHJcbmxldCBtX2FwcDogT2s7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBcHAoYXBwOiBPayk6IHZvaWQge1xyXG4gICAgbV9hcHAgPSBhcHA7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGN1cnJBcHAoKTogT2sge1xyXG4gICAgcmV0dXJuIG1fYXBwO1xyXG59IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBPaywgT2tJbWFnZSwgT2tVcmwgfSBmcm9tICcuLi9mcmFtZXdvcmsvT2snO1xyXG5pbXBvcnQgeyBPa1RyIH0gZnJvbSBcIi4uL2ZyYW1ld29yay9Db21wb25lbnRzL29rLXRyXCI7XHJcbmltcG9ydCB7IE9rV2FpdCB9IGZyb20gXCIuLi9mcmFtZXdvcmsvT2tXYWl0XCI7XHJcbmNvbnN0IEFwcCA9IG5ldyBPayh7fSk7XHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9rLXRyXCIsIE9rVHIpO1xyXG5mdW5jdGlvbiBjcmVhdGVJbWcoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIHlpZWxkIE9rV2FpdCg1MDApO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB5aWVsZCAobmV3IE9rSW1hZ2UoeyB1cmw6IG5ldyBPa1VybChcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sYXVrZXJraWxsaWFuL09rLUZyYW1ld29yay9tYWluL2ZyYW1ld29yay9hc3NldHMvaWNvbi5wbmdcIikgfSkpLmdldEltYWdlKCk7XHJcbiAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBjb250ZW50KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChpbWcpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCBsYW5nID0gQXBwLmxhbmd1YWdlKCkuZ2V0TGFuZ3VhZ2UoKTtcclxuICAgICAgICB5aWVsZCBPa1dhaXQoNTAwKTtcclxuICAgICAgICB5aWVsZCBBcHAudHJhbnNsYXRvcigpLnNldFVybChuZXcgT2tVcmwoYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sYXVrZXJraWxsaWFuL09rLUZyYW1ld29yay9tYWluL3Rlc3QvTGFuZ3VhZ2VzL1RSXyR7bGFuZ30uanNvbmApKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgICBjcmVhdGVJbWcoKTtcclxuICAgIHRyYW5zbGF0ZSgpO1xyXG59XHJcbkFwcC50cmFuc2xhdG9yKCkub24oXCJ0cmFuc2xhdGVkXCIsICgpID0+IHtcclxufSk7XHJcbmxldCBpc1ByZXNzZWQgPSBmYWxzZTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vjb3VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgaWYgKCFpc1ByZXNzZWQpIHtcclxuICAgICAgICBpc1ByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgIHlpZWxkIE9rV2FpdCgxMDAwKTtcclxuICAgICAgICBhbGVydChcIlNhbHV0IGxlcyBjb3BhaW5zXCIpO1xyXG4gICAgICAgIGlzUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG59KSk7XHJcbm1haW4oKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
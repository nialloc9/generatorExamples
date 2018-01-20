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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__multiplierGenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fetchGenerator__ = __webpack_require__(2);



const multiplier = Object(__WEBPACK_IMPORTED_MODULE_0__multiplierGenerator__["a" /* default */])(10);

multiplier.next();
multiplier.next();
multiplier.next();

// fetch generator
Object(__WEBPACK_IMPORTED_MODULE_1__fetchGenerator__["a" /* default */])();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const multiplierGenerator = function* (number) {

    let multiplier = 10;

    console.log(number * multiplier);
    multiplier = multiplier * 10;
    yield;

    console.log(number * multiplier);
    multiplier = multiplier * 10;
    yield;

    console.log(number * multiplier);
    multiplier = multiplier * 10;
};

/* harmony default export */ __webpack_exports__["a"] = (multiplierGenerator);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_request__ = __webpack_require__(3);


/**
 * makes an ajax request
 * @param url
 * @param params
 */
const ajaxCall = (url, params) => {
    Object(__WEBPACK_IMPORTED_MODULE_0__common_request__["a" /* default */])({url, params, callback: (jsonResponse) => {
        if(jsonResponse){
            generator.next(jsonResponse);
        }
    }})
};

/**
 * a generator that makes ajax requests.
 */
function *fetchGenerator (){

    // get data from github
    const response1 = yield ajaxCall("https://api.github.com/users/nialloc9", { method: "GET" });

    // below code will only be called if the above ajax request returns data. This check is handled in ajaxCall
    const { public_repos }  = response1;

    const response2 = yield ajaxCall( "https://api.npmjs.org/downloads/point/last-year/redux-push", { method: "GET" });

    const { downloads } = response2;

    console.log(`Niall has ${public_repos} repos on github and his package redux-push has ${downloads} in the last year.`);
}

const generator = fetchGenerator();

/* harmony default export */ __webpack_exports__["a"] = (() => {
    generator.next();
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const request = ({url, params, callback}) => {
    fetch(url, params).then(response => {
        if(!response.ok){
            return new Error("ERROR: in request")
        }
        return response.json();
    }).then(json => callback(json));
};

/* harmony default export */ __webpack_exports__["a"] = (request);

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map
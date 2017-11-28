/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "num", function() { return num; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "num2", function() { return num2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "num3", function() { return num3; });
// module.exports = '我是计算器';

//ES6导出
/* harmony default export */ __webpack_exports__["default"] = '我是计算器';

//声明式导出(声明并导出)
var num = 1;
var num2 = 2;

//声明再导出
var num3 = 3;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cal_js__ = __webpack_require__(0);
// var cal = require('./cal.js');
// ES6模块导入

//默认导出导出
 //export default '我是计算器';
console.log(__WEBPACK_IMPORTED_MODULE_0__cal_js__["default"]);

//声明式导出（声明并导出）
// export var num = 1;
// export var num2 = 2;
// (声明再导出)
// var num3 = 3;
// export {num3};
//声明式导入
 
console.log(__WEBPACK_IMPORTED_MODULE_0__cal_js__["num"]);
console.log(__WEBPACK_IMPORTED_MODULE_0__cal_js__["num2"]);
console.log(__WEBPACK_IMPORTED_MODULE_0__cal_js__["num3"]);

//全部导入

console.log('全部导入的数据');
console.log(__WEBPACK_IMPORTED_MODULE_0__cal_js__);

//'import' and 'export' may only appear at the top level
// import和export只能在顶级
// if(true){
//     import {num} from './cal.js'; 
// }

//ES6中部分简写
var name ='abc';
var obj = {
    // name:name 以下是简写
    name,
    //ES6函数简写,给对象的属性声明函数时使用
    show(){  //:function
        alert('show')
    },
    // show1:function(){

    // }
}

obj.show();

/***/ })
/******/ ]);
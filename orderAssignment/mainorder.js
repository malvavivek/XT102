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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _orderview = __webpack_require__(1);

	var _orderview2 = _interopRequireDefault(_orderview);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function () {
	    var view = new _orderview2.default({
	        Meal: document.querySelector('#meal'),
	        Calories: document.querySelector('#calorie'),
	        addButton: document.getElementsByClassName('addBtn')[0],
	        editButton: document.getElementsByClassName('editBtn')[0],
	        deleteButton: document.getElementsByClassName('deleteBtn')[0],
	        backButton: document.getElementsByClassName('backBtn')[0],
	        clearButton: document.getElementsByClassName('clrBtn')[0],
	        updateButton: document.getElementsByClassName('updateBtn')[0],
	        orderTable: document.querySelector('table')
	    });
	    view.initialize();
	    console.log("finished");
	})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _ordercontroller = __webpack_require__(2);

	var _ordercontroller2 = _interopRequireDefault(_ordercontroller);

	var _order = __webpack_require__(3);

	var _order2 = _interopRequireDefault(_order);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var View = function () {
	    function View(elements) {
	        _classCallCheck(this, View);

	        this.elements = elements;
	        this.model = _order2.default;
	        this.controller = new _ordercontroller2.default();
	    }

	    _createClass(View, [{
	        key: "initialize",
	        value: function initialize() {
	            var _this = this;

	            this.model.orderCopy.attach(function (meal, calories, total) {
	                debugger;
	                _this.renderOrderList(meal, calories, total);
	            });
	            this.elements.addButton.addEventListener('click', function (e) {
	                if (_this.elements.Meal.value != "" && _this.elements.Calories.value != "") {
	                    _this.controller.copy(_this.elements.Meal.value, _this.elements.Calories.value);
	                }
	            });
	        }
	    }, {
	        key: "renderOrderList",
	        value: function renderOrderList(newMeal, newCalories, newTotal) {
	            debugger;
	            // let orderTable =document.getElementsByClassName('table')[0];
	            var cap = document.getElementById('totalCap');
	            var trow = document.createElement('tr');
	            var data1 = document.createElement('td');
	            var data2 = document.createElement('td');
	            var data3 = document.createElement('td');
	            var editbutton = document.createElement('button');

	            editbutton.innerHTML = 'edit';
	            data3.appendChild(editbutton);
	            data1.innerHTML = newMeal;
	            data2.innerHTML = newCalories;
	            trow.appendChild(data1);
	            trow.appendChild(data2);
	            trow.appendChild(data3);

	            this.elements.orderTable.appendChild(trow);

	            cap.innerHTML = newTotal;
	            // data3.innerHTML = editbutton;
	        }
	    }]);

	    return View;
	}();

	exports.default = View;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _order = __webpack_require__(3);

	var _order2 = _interopRequireDefault(_order);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	    function Controller() {
	        _classCallCheck(this, Controller);

	        this.model = _order2.default;
	    }

	    _createClass(Controller, [{
	        key: "copy",
	        value: function copy(meal, calories) {
	            this.model.copy(meal, calories);
	        }
	    }]);

	    return Controller;
	}();

	exports.default = Controller;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _listenerorder = __webpack_require__(4);

	var _listenerorder2 = _interopRequireDefault(_listenerorder);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Model = function () {
	    function Model(meal, calories, total) {
	        _classCallCheck(this, Model);

	        this.meal = meal;
	        this.calories = calories;
	        this.total = 0;

	        this.orderCopy = new _listenerorder2.default();
	    }

	    _createClass(Model, [{
	        key: "copy",
	        value: function copy(meal, calories) {
	            this.meal = meal;
	            this.calories = calories;
	            this.total += this.calories;
	            this.orderCopy.notify(meal, calories, this.total);
	        }
	    }]);

	    return Model;
	}();

	exports.default = new Model();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Observer = function () {
	    function Observer(observers) {
	        _classCallCheck(this, Observer);

	        this.observers = []; //for multiple views
	    }

	    _createClass(Observer, [{
	        key: "attach",
	        value: function attach(cb) {
	            //getting attached
	            this.observers.push(cb);
	        }
	    }, {
	        key: "notify",
	        value: function notify(meal, calories, total) {
	            this.observers.forEach(function (cb) {
	                cb(meal, calories, total);
	            });
	        }
	    }]);

	    return Observer;
	}();

	exports.default = Observer;

/***/ })
/******/ ]);
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

	var _view = __webpack_require__(1);

	var _view2 = _interopRequireDefault(_view);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function () {
	    var view = new _view2.default({
	        Meal: document.querySelector('#meal'),
	        Calories: document.querySelector('#calorie'),
	        addButton: document.getElementsByClassName('addBtn')[0],
	        deleteButton: document.getElementsByClassName('deleteBtn')[0],
	        backButton: document.getElementsByClassName('backBtn')[0],
	        clearButton: document.getElementsByClassName('clrBtn')[0],
	        updateButton: document.getElementsByClassName('updateBtn')[0],
	        orderTable: document.querySelector('table'),
	        tableRow: document.getElementById('tableBody')
	    });
	    view.initialize();
	})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mealCtrl = __webpack_require__(2);

	var _mealCtrl2 = _interopRequireDefault(_mealCtrl);

	var _mealOrder = __webpack_require__(4);

	var _mealOrder2 = _interopRequireDefault(_mealOrder);

	var _mealstorage = __webpack_require__(3);

	var _mealstorage2 = _interopRequireDefault(_mealstorage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var View = function () {
	    function View(elements) {
	        _classCallCheck(this, View);

	        this.elements = elements;
	        this.model = new _mealOrder2.default();
	        this.controller = _mealCtrl2.default;
	        this.items = _mealstorage2.default.getMeals();
	    }

	    _createClass(View, [{
	        key: "initialize",
	        value: function initialize() {
	            var _this = this;

	            this.renderOrderList(this.items);
	            // this.model.orderCopy.attach((meal,calories,total)=>{

	            //     this.renderOrderList(meal,calories,total);
	            // });
	            // this.model.orderUpdate.attach((meal,calories,total)=>{

	            //     this.renderOrderList(meal,calories,total);
	            // });
	            // this.model.orderDelete.attach((meal,calories,total)=>{

	            //     this.renderOrderList(meal,calories,total);
	            // });
	            this.elements.addButton.addEventListener('click', function (e) {
	                if (_this.elements.Meal.value != '' && _this.elements.Calories.value >= 0) {
	                    _this.controller.addMeal(_this.elements.Meal.value, _this.elements.Calories.value);
	                    _this.elements.Meal.value = '';
	                    _this.elements.Calories.value = '';
	                    console.log("addbutton");
	                }
	            });
	            //     this.elements.updateButton.addEventListener('click',(e)=>{
	            //         this.controller.update(this.elements.Meal.value,this.elements.Calories.value);
	            //         this.elements.Meal.value='';
	            //         this.elements.Calories.value='';

	            // });
	            //    this.elements.deleteButton.addEventListener('click',(e)=>{
	            //     this.controller.delete(this.elements.Meal.value,this.elements.Calories.value);
	            //     this.elements.Meal.value='';
	            //     this.elements.Calories.value='';

	            //    });
	            //     this.elements.clearButton.addEventListener('click',(e)=>{
	            //     this.elements.tableRow.innerHTML="";
	            //     this.elements.Meal.value="";
	            //     this.elements.Calories.value="";
	            //      });
	        }
	    }, {
	        key: "renderOrderList",
	        value: function renderOrderList(items) {
	            for (var i = 0; i <= items.length; i++) {
	                var cap = document.getElementById('totalCap');
	                var trow = document.createElement('tr');
	                var data1 = document.createElement('td');
	                var data2 = document.createElement('td');

	                var data3 = document.createElement('td');
	                var editButton = document.createElement('button');

	                editButton.innerHTML = 'edit';
	                editButton.type = 'Button';

	                data3.appendChild(editButton);
	                data1.innerHTML = items.meal;
	                data2.innerHTML = items.calorie;
	                trow.appendChild(data1);
	                trow.appendChild(data2);
	                trow.appendChild(data3);

	                this.elements.tableRow.appendChild(trow);

	                //  cap.innerHTML=newTotal;
	            }
	            // editButton.addEventListener('click',(e)=>{  
	            //     this.elements.addButton.className+='displayNone';
	            //     this.elements.updateButton.classList.remove('displayNone');
	            //     this.elements.deleteButton.classList.remove('displayNone');
	            //     this.elements.backButton.classList.remove('displayNone');
	            //     editButton.disabled="true";
	            //     this.elements.Meal.value=e.currentTarget.parentNode.parentNode.childNodes[0].innerHTML;
	            //     this.elements.Calories.value=e.currentTarget.parentNode.parentNode.childNodes[1].innerHTML;
	            //     this.elements.deleteButton.addEventListener('click',(d)=>{  
	            //         cap.innerHTML-=this.elements.Calories.value;
	            //         this.elements.Meal.value='';
	            //         this.elements.Calories.value='';
	            //         e.target.parentNode.parentNode.remove();
	            //         this.elements.addButton.classList.add('displayBlock');
	            //         this.elements.updateButton.classList.add('displayNone');
	            //         this.elements.deleteButton.classList.add('displayNone');
	            //         this.elements.backButton.classList.add('displayNone');


	            //     });
	            //     this.elements.updateButton.addEventListener('click',(f)=>{
	            //        let cap1=cap.innerHTML-parseInt(e.target.parentNode.parentNode.childNodes[1].innerHTML);

	            //          e.target.parentNode.parentNode.childNodes[0].innerHTML=this.elements.Meal.value;
	            //          e.target.parentNode.parentNode.childNodes[1].innerHTML=this.elements.Calories.value;
	            //          cap.innerHTML=cap1+parseInt(e.target.parentNode.parentNode.childNodes[1].innerHTML);
	            //     });
	            // });
	            // this.elements.backButton.addEventListener('click',(e)=>{  
	            //     this.elements.addButton.classList.add('displayBlock');
	            //     this.elements.updateButton.classList.add('displayNone');
	            //     this.elements.deleteButton.classList.add('displayNone');
	            //     this.elements.backButton.classList.add('displayNone');


	            // });

	        }
	    }]);

	    return View;
	}();

	exports.default = View;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mealstorage = __webpack_require__(3);

	var _mealstorage2 = _interopRequireDefault(_mealstorage);

	var _mealOrder = __webpack_require__(4);

	var _mealOrder2 = _interopRequireDefault(_mealOrder);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MealController = function () {
	    function MealController() {
	        _classCallCheck(this, MealController);

	        this.items = _mealstorage2.default.getMeals();
	        this.currentMeal = null;
	        this.totalCalories = 0;
	    }

	    _createClass(MealController, [{
	        key: 'addMeal',
	        value: function addMeal(name, calorie) {
	            var ID = void 0;
	            if (this.items.length > 0) {
	                ID = this.items[this.items.length - 1].id + 1;
	            } else {
	                ID = 0;
	            }
	            var newMeal = new _mealOrder2.default(ID, name, calorie);
	            this.items.push(newMeal);
	            _mealstorage2.default.storeMeal(newMeal);
	            return newMeal;
	        }
	    }, {
	        key: 'getMealById',
	        value: function getMealById(id) {
	            var found = null;
	            this.items.forEach(function (item) {
	                if (item.id === id) {
	                    found = item;
	                }
	            });
	            return found;
	        }
	    }, {
	        key: 'updateMeal',
	        value: function updateMeal(id, name, calorie) {

	            this.items.forEach(function (item) {
	                if (item.id === id) {
	                    item.meal = name;
	                    item.calorie = calorie;
	                    _mealstorage2.default.updateMeal(item);
	                }
	            });

	            //return newMeal;
	        }
	    }, {
	        key: 'removeMeal',
	        value: function removeMeal(id) {
	            this.items.forEach(function (item) {
	                if (item.id === id) {
	                    _mealstorage2.default.removeMeal(item);
	                }
	            });
	        }
	    }]);

	    return MealController;
	}();

	exports.default = new MealController();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DataStorage = function () {
	    function DataStorage() {
	        _classCallCheck(this, DataStorage);
	    }

	    _createClass(DataStorage, [{
	        key: 'storeMeal',
	        value: function storeMeal(meal) {
	            var items = void 0;
	            if (localStorage.getItem('meals') === null) {
	                items = [];
	                items.push(meal);
	                localStorage.setItem('meals', JSON.stringify(items));
	            } else {
	                items = JSON.parse(localStorage.getItem('meals'));
	                items.push(meal);
	                localStorage.setItem('meals', JSON.stringify(items));
	            }
	        }
	    }, {
	        key: 'updateMeal',
	        value: function updateMeal(meal) {
	            var meals = JSON.parse(localStorage.getItem('meals'));
	            meals.forEach(function (existingmeal) {
	                if (existingmeal.id === meal.id) {
	                    Object.assign(existingmeal, meal);
	                    localStorage.setItem('meals', JSON.stringify(meals));
	                }
	            });
	        }
	    }, {
	        key: 'removeMeal',
	        value: function removeMeal(meal) {
	            var meals = JSON.parse(localStorage.getItem('meals'));
	            var ids = meals.map(function (item) {
	                return item.id;
	            });
	            meals.forEach(function (existingmeal) {

	                if (existingmeal.id === meal.id) {

	                    meals.splice(ids.indexOf(meal.id), 1);
	                }
	                localStorage.setItem('meals', JSON.stringify(meals));
	            });
	        }
	    }, {
	        key: 'getMeals',
	        value: function getMeals() {
	            var items = void 0;
	            if (localStorage.getItem('meals') === null) {
	                items = [];
	            } else {
	                items = JSON.parse(localStorage.getItem('meals'));
	            }
	            return items;
	        }
	    }]);

	    return DataStorage;
	}();

	exports.default = new DataStorage();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _listenerorder = __webpack_require__(5);

	var _listenerorder2 = _interopRequireDefault(_listenerorder);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Model = function () {
	    function Model(id, meal, calories) {
	        _classCallCheck(this, Model);

	        // this.static.total =0;
	        this.id = id;
	        this.meal = meal;
	        this.calories = calories;
	        this.orderAdd = new _listenerorder2.default();
	    }

	    _createClass(Model, [{
	        key: "addMeal",
	        value: function addMeal(meal, calories) {
	            total += calories;
	            this.orderAdd.notify(meal, calories, total);
	        }
	    }]);

	    return Model;
	}();

	exports.default = Model;

/***/ }),
/* 5 */
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
	        value: function notify(id, meal, calories, total) {
	            this.observers.forEach(function (cb) {
	                cb(id, meal, calories, total);
	            });
	        }
	    }]);

	    return Observer;
	}();

	exports.default = Observer;

/***/ })
/******/ ]);
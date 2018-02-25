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
	        tableRow: document.getElementById('tableBody'),
	        totalCal: document.getElementById('totalCap')
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

	var _mealOrder = __webpack_require__(5);

	var _mealOrder2 = _interopRequireDefault(_mealOrder);

	var _mealstorage = __webpack_require__(3);

	var _mealstorage2 = _interopRequireDefault(_mealstorage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var View = function () {
	    function View(elements) {
	        _classCallCheck(this, View);

	        this.elements = elements;
	        //this.model =  new Model();
	        this.total = 0;
	        this.controller = _mealCtrl2.default;
	        this.mealDetails = _mealstorage2.default;
	        this.targetId;
	    }

	    _createClass(View, [{
	        key: "initialize",
	        value: function initialize() {
	            var _this = this;

	            this.mealDetails.orderAdd.attach(function (newMeal) {

	                _this.renderOrderList(newMeal);
	            });
	            this.mealDetails.orderUpdate.attach(function (newMeal) {

	                _this.renderOrderList(newMeal);
	            });
	            this.mealDetails.orderDelete.attach(function (newMeal) {

	                _this.renderOrderList(newMeal);
	            });
	            this.elements.addButton.addEventListener('click', function (e) {
	                if (_this.elements.Meal.value != '' && _this.elements.Calories.value >= 0) {
	                    debugger;
	                    _this.controller.addMeal(_this.elements.Meal.value, _this.elements.Calories.value);
	                    _this.elements.Meal.value = '';
	                    _this.elements.Calories.value = '';
	                    //  this.renderOrderList(this.mealDetails.getMeals());
	                }
	            });
	            this.elements.updateButton.addEventListener('click', function () {
	                debugger;
	                _this.controller.updateMeal(parseInt(_this.targetId), _this.elements.Meal.value, _this.elements.Calories.value);
	                // this.elements.Meal.value='';
	                // this.elements.Calories.value='';

	            });
	            this.elements.deleteButton.addEventListener('click', function (e) {
	                _this.controller.removeMeal(parseInt(_this.targetId));
	                _this.elements.Meal.value = '';
	                _this.elements.Calories.value = '';
	                //this.renderOrderList(this.mealDetails.getMeals());
	                _this.elements.addButton.classList.add('displayBlock');
	                _this.elements.updateButton.classList.add('displayNone');
	                _this.elements.deleteButton.classList.add('displayNone');
	                _this.elements.backButton.classList.add('displayNone');
	            });
	            this.elements.clearButton.addEventListener('click', function (e) {
	                _this.elements.tableRow.innerHTML = "";
	                // this.elements.totalCal='';
	                _this.elements.Meal.value = "";
	                _this.elements.Calories.value = "";
	                _this.elements.addButton.classList.add('displayBlock');
	                _this.elements.updateButton.classList.add('displayNone');
	                _this.elements.deleteButton.classList.add('displayNone');
	                _this.elements.backButton.classList.add('displayNone');
	                _this.controller.clearAll();
	            });
	        }
	    }, {
	        key: "renderOrderList",
	        value: function renderOrderList(newmealDetails) {
	            var _this2 = this;

	            this.total = 0;
	            this.elements.tableRow.innerHTML = "";
	            if (newmealDetails.length == 0) {
	                this.elements.Meal.value = "";
	                this.elements.Calories.value = "";
	                this.elements.orderTable.innerHTML = "";
	                this.total = 0;
	                this.elements.totalCal.innerHTML = this.total;
	            }
	            newmealDetails.forEach(function (item) {
	                // let mealOrder=JSON.parse(localStorage.getItem('meals'));  
	                //  let cap=document.getElementById('totalCap');
	                var trow = document.createElement('tr');
	                var data1 = document.createElement('td');
	                var data2 = document.createElement('td');

	                var data3 = document.createElement('td');
	                var editButton = document.createElement('button');

	                editButton.innerHTML = 'edit';
	                editButton.type = 'Button';
	                editButton.setAttribute('id', item.id);
	                data1.innerHTML = item.meal;
	                data2.innerHTML = item.calorie;
	                data3.appendChild(editButton);
	                trow.appendChild(data1);
	                trow.appendChild(data2);
	                trow.appendChild(data3);
	                _this2.total = _this2.total + parseInt(item.calorie);
	                _this2.elements.totalCal.innerHTML = _this2.total;
	                _this2.elements.tableRow.appendChild(trow);
	                // console.log(this.elements.orderTable.rows.length);

	                //     let trIndex=this.elements.orderTable.rows.length;
	                //     for( let trIndex  in mealOrder){
	                //     // data1.innerHTML=mealOrder[trIndex].meal;
	                //     // data2.innerHTML=mealOrder[trIndex].calorie;

	                //   // cap.innerHTML=newTotal;
	                //     }
	                // this.elements.deleteButton.addEventListener('click',(d)=>{  
	                //     // cap.innerHTML-=this.elements.calorie.value;
	                //     // this.elements.Meal.value='';
	                //     // this.elements.Calories.value='';
	                //     // e.target.parentNode.parentNode.remove();
	                //     this.controller.removeMeal(this.targetId);
	                //     this.elements.addButton.classList.add('displayBlock');
	                //     this.elements.updateButton.classList.add('displayNone');
	                //     this.elements.deleteButton.classList.add('displayNone');
	                //     this.elements.backButton.classList.add('displayNone');


	                // });
	                editButton.addEventListener('click', function (e) {
	                    debugger;
	                    _this2.targetId = e.currentTarget.id;

	                    _this2.elements.addButton.classList.remove('displayBlock');
	                    _this2.elements.addButton.className += 'displayNone';
	                    _this2.elements.updateButton.classList.remove('displayNone');
	                    _this2.elements.deleteButton.classList.remove('displayNone');
	                    _this2.elements.backButton.classList.remove('displayNone');
	                    editButton.disabled = "true";
	                    //  this.elements.Meal.value=e.currentTarget.parentNode.parentNode.childNodes[0].innerHTML;
	                    //  this.elements.Calories.value=e.currentTarget.parentNode.parentNode.childNodes[1].innerHTML;
	                    _this2.elements.Meal.value = item.meal;
	                    _this2.elements.Calories.value = item.calorie;

	                    // this.elements.Meal.value=mealOrder.meal;
	                    // this.elements.Calories.value=mealOrder.calorie;

	                    //         this.elements.updateButton.addEventListener('click',(f)=>{
	                    //             debugger;
	                    //            let cap1=cap.innerHTML-parseInt(e.target.parentNode.parentNode.childNodes[1].innerHTML);
	                    //          //  let mealOrder=JSON.parse(localStorage.getItem('meals'));
	                    // //     let trIndex=this.elements.orderTable.rows.length;
	                    // //     for( let trIndex  in mealOrder){
	                    // //     mealOrder[trIndex].meal;
	                    // //     data2.innerHTML=mealOrder[trIndex].calorie;
	                    // //   // cap.innerHTML=newTotal;
	                    // //     }
	                    //              e.target.parentNode.parentNode.childNodes[0].innerHTML=item.meal;
	                    //              e.target.parentNode.parentNode.childNodes[1].innerHTML=item.calorie;
	                    //              cap.innerHTML=cap1+parseInt(e.target.parentNode.parentNode.childNodes[1].innerHTML);
	                    //              this.controller.updateMeal(this.targetId,this.elements.Meal.value,this.elements.Calories.value);
	                    //         });
	                });
	            });
	            this.elements.backButton.addEventListener('click', function (e) {
	                _this2.elements.addButton.classList.add('displayBlock');
	                _this2.elements.updateButton.classList.add('displayNone');
	                _this2.elements.deleteButton.classList.add('displayNone');
	                _this2.elements.backButton.classList.add('displayNone');
	            });
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

	var _mealOrder = __webpack_require__(5);

	var _mealOrder2 = _interopRequireDefault(_mealOrder);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MealController = function () {
	    function MealController() {
	        _classCallCheck(this, MealController);

	        this.DataStorage = _mealstorage2.default;
	        this.items = this.DataStorage.getMeals();
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
	    }, {
	        key: 'clearAll',
	        value: function clearAll() {
	            this.items.forEach(function (item) {

	                _mealstorage2.default.removeMeal(item);
	            });
	        }
	    }]);

	    return MealController;
	}();

	exports.default = new MealController();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _listenerorder = __webpack_require__(4);

	var _listenerorder2 = _interopRequireDefault(_listenerorder);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DataStorage = function () {
	    function DataStorage() {
	        _classCallCheck(this, DataStorage);

	        //  this.controller = new Observer();
	        this.orderAdd = new _listenerorder2.default();
	        this.orderUpdate = new _listenerorder2.default();
	        this.orderDelete = new _listenerorder2.default();
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
	            this.orderAdd.notify(items);
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
	            this.orderUpdate.notify(meals);
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
	            this.orderDelete.notify(meals);
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
	        value: function notify(meals) {
	            this.observers.forEach(function (cb) {
	                cb(meals);
	            });
	        }
	    }]);

	    return Observer;
	}();

	exports.default = Observer;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _listenerorder = __webpack_require__(4);

	var _listenerorder2 = _interopRequireDefault(_listenerorder);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Model = function Model(id, meal, calorie) {
	    _classCallCheck(this, Model);

	    this.id = id;
	    this.meal = meal;
	    this.calorie = calorie;
	};

	exports.default = Model;

/***/ })
/******/ ]);
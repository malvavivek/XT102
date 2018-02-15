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

	"use strict";

	var _cityPresenter = __webpack_require__(1);

	var _cityPresenter2 = _interopRequireDefault(_cityPresenter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function () {
	    var presenter = new _cityPresenter2.default();
	    presenter.initialize();
	})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _city = __webpack_require__(2);

	var _city2 = _interopRequireDefault(_city);

	var _cityView = __webpack_require__(4);

	var _cityView2 = _interopRequireDefault(_cityView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Presenter = function () {
	    function Presenter() {
	        _classCallCheck(this, Presenter);

	        this.model = _city2.default;
	        this.view = _cityView2.default;
	    }

	    _createClass(Presenter, [{
	        key: 'initialize',
	        value: function initialize() {
	            var _this = this;

	            this.model.cityAdded.attach(function (cityList) {
	                _this.render(cityList);
	            });
	            this.model.cityRemoved.attach(function (cityList) {
	                _this.render(cityList);
	            });

	            this.view.elements.addBtn.addEventListener('click', function () {
	                var newCity = prompt('Enter a New City');
	                if (newCity) {
	                    _this.model.add(newCity);
	                }
	            });
	            this.view.elements.removeBtn.addEventListener('click', function () {
	                var index = _this.view.elements.cityList.options.selectedIndex;
	                if (index != -1) {
	                    _this.model.remove(index);
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render(newCityList) {
	            this.view.elements.cityList.innerHTML = '';
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = newCityList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var city = _step.value;

	                    this.view.elements.cityList.appendChild(new Option(city, city));
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }]);

	    return Presenter;
	}();

	exports.default = Presenter;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _listenernotify = __webpack_require__(3);

	var _listenernotify2 = _interopRequireDefault(_listenernotify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Model = function () {
	    function Model(cities) {
	        _classCallCheck(this, Model);

	        this.cities = [];
	        this.cityAdded = new _listenernotify2.default();
	        this.cityRemoved = new _listenernotify2.default();
	    }

	    _createClass(Model, [{
	        key: "add",
	        value: function add(name) {
	            this.cities.push(name);
	            this.cityAdded.notify(this.cities);
	        }
	    }, {
	        key: "remove",
	        value: function remove(index) {
	            this.cities.splice(index, 1);
	            this.cityRemoved.notify(this.cities);
	        }
	    }]);

	    return Model;
	}();

	exports.default = new Model();

/***/ }),
/* 3 */
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

	        //array for multiple views
	        this.observers = [];
	    }

	    _createClass(Observer, [{
	        key: "attach",
	        value: function attach(cb) {
	            this.observers.push(cb);
	        }
	    }, {
	        key: "notify",
	        value: function notify(newCity) {
	            this.observers.forEach(function (cb) {
	                cb(newCity);
	            });
	        }
	    }]);

	    return Observer;
	}();

	exports.default = Observer;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _city = __webpack_require__(2);

	var _city2 = _interopRequireDefault(_city);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var View = function View(elements) {
	    _classCallCheck(this, View);

	    this.elements = elements;
	};

	exports.default = new View({ addBtn: document.querySelector('#addBtn'),
	    removeBtn: document.querySelector('#removeBtn'),
	    cityList: document.querySelector('#cityList')
	});

/***/ })
/******/ ]);
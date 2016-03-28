(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("d3", [], factory);
	else if(typeof exports === 'object')
		exports["d3"] = factory();
	else
		root["d3"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/// <reference path="typings/main.d.ts" />
	exports.version = ("3523");
	__export(__webpack_require__(1));
	__export(__webpack_require__(3));
	__export(__webpack_require__(6));
	__export(__webpack_require__(7));
	__export(__webpack_require__(8));
	__export(__webpack_require__(9));
	__export(__webpack_require__(10));
	__export(__webpack_require__(11));
	__export(__webpack_require__(13));
	__export(__webpack_require__(14));
	__export(__webpack_require__(15));
	__export(__webpack_require__(16));
	__export(__webpack_require__(12));
	__export(__webpack_require__(17));
	__export(__webpack_require__(19));
	__export(__webpack_require__(20));
	__export(__webpack_require__(21));
	__export(__webpack_require__(22));
	__export(__webpack_require__(23));
	__export(__webpack_require__(4));
	__export(__webpack_require__(24));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ascending_1 = __webpack_require__(2);
	var d3_bisector = (function () {
	    function d3_bisector(compare) {
	        this.compare = compare;
	    }
	    d3_bisector.prototype.left = function (a, x, lo, hi) {
	        if (arguments.length < 3)
	            lo = 0;
	        if (arguments.length < 4)
	            hi = a.length;
	        while (lo < hi) {
	            var mid = lo + hi >>> 1;
	            if (this.compare(a[mid], x) < 0)
	                lo = mid + 1;
	            else
	                hi = mid;
	        }
	        return lo;
	    };
	    d3_bisector.prototype.right = function (a, x, lo, hi) {
	        if (arguments.length < 3)
	            lo = 0;
	        if (arguments.length < 4)
	            hi = a.length;
	        while (lo < hi) {
	            var mid = lo + hi >>> 1;
	            if (this.compare(a[mid], x) > 0)
	                hi = mid;
	            else
	                lo = mid + 1;
	        }
	        return lo;
	    };
	    return d3_bisector;
	}());
	var d3_bisect = new d3_bisector(ascending_1.d3_ascending);
	var bisectLeft = d3_bisect.left;
	exports.bisectLeft = bisectLeft;
	var bisectRight = d3_bisect.right;
	exports.bisectRight = bisectRight;
	var bisect = bisectRight;
	exports.bisect = bisect;
	function bisector(f) {
	    return new d3_bisector(f.length === 1
	        ? function (d, x) { return ascending_1.d3_ascending(f(d), x); }
	        : f);
	}
	exports.bisector = bisector;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	function ascending(a, b) {
	    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	}
	exports.ascending = ascending;
	exports.d3_ascending = ascending;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var variance_1 = __webpack_require__(4);
	function deviation() {
	    var v = variance_1.default.apply(this, arguments);
	    return v ? Math.sqrt(v) : v;
	}
	exports.deviation = deviation;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var number_1 = __webpack_require__(5);
	function variance(array, f) {
	    var n = array.length, m = 0, a, d, s = 0, i = -1, j = 0;
	    if (arguments.length === 1) {
	        while (++i < n) {
	            if (number_1.d3_numeric(a = number_1.d3_number(array[i]))) {
	                d = a - m;
	                m += d / ++j;
	                s += d * (a - m);
	            }
	        }
	    }
	    else {
	        while (++i < n) {
	            if (number_1.d3_numeric(a = number_1.d3_number(f.call(array, array[i], i)))) {
	                d = a - m;
	                m += d / ++j;
	                s += d * (a - m);
	            }
	        }
	    }
	    if (j > 1)
	        return s / (j - 1);
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = variance;


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	function d3_number(x) {
	    return x === null ? NaN : +x;
	}
	exports.d3_number = d3_number;
	function d3_numeric(x) {
	    return !isNaN(x);
	}
	exports.d3_numeric = d3_numeric;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	function entries(map) {
	    var entries = [];
	    for (var key in map)
	        entries.push({ key: key, value: map[key] });
	    return entries;
	}
	exports.entries = entries;


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Returns the enumerable property names of the specified object.
	 * @param object a JavaScript object
	 */
	function keys(map) {
	    var keys = [];
	    for (var key in map)
	        keys.push(key);
	    return keys;
	}
	exports.keys = keys;


/***/ },
/* 8 */
/***/ function(module, exports) {

	/// <reference path="../typings/main/ambient/es6-shim/index.d.ts" />
	"use strict";
	/**
	 * Construct a new map by copying enumerable properties and values from the given object.
	 */
	function map(object, f) {
	    var map = new Map();
	    if (object instanceof Map) {
	        object.forEach(function (key, value) { map.set(key, value); });
	    }
	    else if (Array.isArray(object)) {
	        var i = -1, n = object.length, o = void 0;
	        if (arguments.length === 1)
	            while (++i < n)
	                map.set(i, object[i]);
	        else
	            while (++i < n)
	                map.set(f.call(object, o = object[i], i), o);
	    }
	    else {
	        for (var key in object)
	            map.set(key, object[key]);
	    }
	    return map;
	}
	exports.map = map;


/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	function max(array, f) {
	    var i = -1, n = array.length, a, b;
	    if (arguments.length === 1) {
	        while (++i < n)
	            if ((b = array[i]) != null && b >= b) {
	                a = b;
	                break;
	            }
	        while (++i < n)
	            if ((b = array[i]) != null && b > a)
	                a = b;
	    }
	    else {
	        while (++i < n)
	            if ((b = f.call(array, array[i], i)) != null && b >= b) {
	                a = b;
	                break;
	            }
	        while (++i < n)
	            if ((b = f.call(array, array[i], i)) != null && b > a)
	                a = b;
	    }
	    return a;
	}
	exports.max = max;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var number_1 = __webpack_require__(5);
	function mean(array, f) {
	    var s = 0, n = array.length, a, i = -1, j = n;
	    if (arguments.length === 1) {
	        while (++i < n)
	            if (number_1.d3_numeric(a = number_1.d3_number(array[i])))
	                s += a;
	            else
	                --j;
	    }
	    else {
	        while (++i < n)
	            if (number_1.d3_numeric(a = number_1.d3_number(f.call(array, array[i], i))))
	                s += a;
	            else
	                --j;
	    }
	    if (j)
	        return s / j;
	}
	exports.mean = mean;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var number_1 = __webpack_require__(5);
	var ascending_1 = __webpack_require__(2);
	var quantile_1 = __webpack_require__(12);
	function median(array, f) {
	    var numbers = [], n = array.length, a, i = -1;
	    if (arguments.length === 1) {
	        while (++i < n)
	            if (number_1.d3_numeric(a = number_1.d3_number(array[i])))
	                numbers.push(a);
	    }
	    else {
	        while (++i < n)
	            if (number_1.d3_numeric(a = number_1.d3_number(f.call(array, array[i], i))))
	                numbers.push(a);
	    }
	    if (numbers.length)
	        return quantile_1.default(numbers.sort(ascending_1.d3_ascending), 0.5);
	}
	exports.median = median;
	;


/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	// R-7 per <http://en.wikipedia.org/wiki/Quantile>
	function quantile(values, p) {
	    var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;
	    return e ? v + e * (values[h] - v) : v;
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = quantile;


/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Merges the specified arrays into a single array.
	 */
	"use strict";
	function merge(arrays) {
	    var n = arrays.length, m, i = -1, j = 0, merged, array;
	    while (++i < n)
	        j += arrays[i].length;
	    merged = new Array(j);
	    while (--n >= 0) {
	        array = arrays[n];
	        m = array.length;
	        while (--m >= 0) {
	            merged[--j] = array[m];
	        }
	    }
	    return merged;
	}
	exports.merge = merge;


/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	function min(array, f) {
	    var i = -1, n = array.length, a, b;
	    if (arguments.length === 1) {
	        while (++i < n)
	            if ((b = array[i]) != null && b >= b) {
	                a = b;
	                break;
	            }
	        while (++i < n)
	            if ((b = array[i]) != null && a > b)
	                a = b;
	    }
	    else {
	        while (++i < n)
	            if ((b = f.call(array, array[i], i)) != null && b >= b) {
	                a = b;
	                break;
	            }
	        while (++i < n)
	            if ((b = f.call(array, array[i], i)) != null && a > b)
	                a = b;
	    }
	    return a;
	}
	exports.min = min;


/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	// Possible use of native Map here
	function nest() {
	    var nest = {}, keys = [], sortKeys = [], sortValues = [], rollup;
	    function map(mapType, array, depth) {
	        if (depth >= keys.length)
	            return rollup
	                ? rollup.call(nest, array) : (sortValues
	                ? array.sort(sortValues)
	                : array);
	        var i = -1, n = array.length, key = keys[depth++], keyValue, object, setter, valuesByKey = new Map(), values;
	        while (++i < n) {
	            if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
	                values.push(object);
	            }
	            else {
	                valuesByKey.set(keyValue, [object]);
	            }
	        }
	        if (mapType) {
	            object = mapType();
	            setter = function (keyValue, values) {
	                object.set(keyValue, map(mapType, values, depth));
	            };
	        }
	        else {
	            object = {};
	            setter = function (keyValue, values) {
	                object[keyValue] = map(mapType, values, depth);
	            };
	        }
	        valuesByKey.forEach(setter);
	        return object;
	    }
	    function entries(map, depth) {
	        if (depth >= keys.length)
	            return map;
	        var array = [], sortKey = sortKeys[depth++];
	        map.forEach(function (key, keyMap) {
	            array.push({ key: key, values: entries(keyMap, depth) });
	        });
	        return sortKey
	            ? array.sort(function (a, b) { return sortKey(a.key, b.key); })
	            : array;
	    }
	    nest.map = function (array, mapType) {
	        return map(mapType, array, 0);
	    };
	    nest.entries = function (array) {
	        return entries(map(map, array, 0), 0);
	    };
	    nest.key = function (d) {
	        keys.push(d);
	        return nest;
	    };
	    // Specifies the order for the most-recently specified key.
	    // Note: only applies to entries. Map keys are unordered!
	    nest.sortKeys = function (order) {
	        sortKeys[keys.length - 1] = order;
	        return nest;
	    };
	    // Specifies the order for leaf values.
	    // Applies to both maps and entries array.
	    nest.sortValues = function (order) {
	        sortValues = order;
	        return nest;
	    };
	    nest.rollup = function (f) {
	        rollup = f;
	        return nest;
	    };
	    return nest;
	}
	exports.nest = nest;


/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	function pairs(array) {
	    var i = 0, n = array.length - 1, p0, p1 = array[0], pairs = new Array(n < 0 ? 0 : n);
	    while (i < n)
	        pairs[i] = [p0 = p1, p1 = array[++i]];
	    return pairs;
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = pairs;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var abs_1 = __webpack_require__(18);
	function range(start, stop, step) {
	    if (arguments.length < 3) {
	        step = 1;
	        if (arguments.length < 2) {
	            stop = start;
	            start = 0;
	        }
	    }
	    if ((stop - start) / step === Infinity)
	        throw new Error("infinite range");
	    var range = [], k = d3_range_integerScale(abs_1.default(step)), i = -1, j;
	    start *= k, stop *= k, step *= k;
	    if (step < 0)
	        while ((j = start + step * ++i) > stop)
	            range.push(j / k);
	    else
	        while ((j = start + step * ++i) < stop)
	            range.push(j / k);
	    return range;
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = range;
	;
	function d3_range_integerScale(x) {
	    var k = 1;
	    while (x * k % 1)
	        k *= 10;
	    return k;
	}


/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	var abs = Math.abs;


/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	function set(array) {
	    return new Set(array);
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = set;


/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	function shuffle(array, i0, i1) {
	    if ((m = arguments.length) < 3) {
	        i1 = array.length;
	        if (m < 2)
	            i0 = 0;
	    }
	    var m = i1 - i0, t, i;
	    while (m) {
	        i = Math.random() * m-- | 0;
	        t = array[m + i0], array[m + i0] = array[i + i0], array[i + i0] = t;
	    }
	    return array;
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = shuffle;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var number_1 = __webpack_require__(5);
	function sum(array, f) {
	    var s = 0, n = array.length, a, i = -1;
	    if (arguments.length === 1) {
	        while (++i < n)
	            if (number_1.d3_numeric(a = +array[i]))
	                s += a; // zero and null are equivalent
	    }
	    else {
	        while (++i < n)
	            if (number_1.d3_numeric(a = +f.call(array, array[i], i)))
	                s += a;
	    }
	    return s;
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = sum;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var min_1 = __webpack_require__(14);
	function transpose(matrix) {
	    var n;
	    if (!(n = matrix.length))
	        return [];
	    for (var i = -1, m = min_1.min(matrix, d3_transposeLength), transpose_1 = new Array(m); ++i < m;) {
	        for (var j = -1, n_1, row = transpose_1[i] = new Array(n_1); ++j < n_1;) {
	            row[j] = matrix[j][i];
	        }
	    }
	    return transpose;
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = transpose;
	;
	function d3_transposeLength(d) {
	    return d.length;
	}


/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	function values(map) {
	    return map.values();
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = values;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var transpose_1 = __webpack_require__(22);
	function zip() {
	    var arrays = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        arrays[_i - 0] = arguments[_i];
	    }
	    return transpose_1.default(arguments);
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = zip;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=d3.js.map
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function __walk(dir, done) {}

var Utils = (function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    _createClass(Utils, null, [{
        key: 'walk',
        value: (function (_walk) {
            function walk(_x, _x2) {
                return _walk.apply(this, arguments);
            }

            walk.toString = function () {
                return _walk.toString();
            };

            return walk;
        })(function (dir, done) {
            var results = [];
            _fs2['default'].readdir(dir, function (err, list) {
                if (err) {
                    return done(err);
                }
                var i = 0;
                (function next() {
                    var file = list[i++];
                    if (!file) {
                        return done(null, results);
                    }
                    file = dir + '/' + file;
                    _fs2['default'].stat(file, function (err, stat) {
                        if (stat && stat.isDirectory()) {
                            walk(file, function (err, res) {
                                results = results.concat(res);
                                next();
                            });
                        } else {
                            results.push(file);
                            next();
                        }
                    });
                })();
            });
        })
    }, {
        key: 'traverse',
        value: (function (_traverse) {
            function traverse(_x3, _x4) {
                return _traverse.apply(this, arguments);
            }

            traverse.toString = function () {
                return _traverse.toString();
            };

            return traverse;
        })(function (object, visitor) {
            var key = undefined,
                child = undefined;

            if (visitor.call(null, object) === false) {
                return;
            }
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = object[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    key = _step.value;

                    child = object[key];
                    if (typeof child === 'object' && child !== null) {
                        traverse(child, visitor);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        })
    }, {
        key: 'checkAbstractClass',
        value: function checkAbstractClass(instance, constructor) {
            // let constructorName = constructor.name;
            if (instance.constructor.name === constructor.name) {
                throw new TypeError('Cannot construct ' + constructor.name + ' instances directly');
            }
        }
    }, {
        key: 'checkMethodImplementation',
        value: function checkMethodImplementation(method) {
            if (method === undefined) {
                // or maybe test typeof this.method === 'function'
                throw new TypeError('Must override the method');
            }
        }
    }]);

    return Utils;
})();

exports['default'] = Utils;
module.exports = exports['default'];
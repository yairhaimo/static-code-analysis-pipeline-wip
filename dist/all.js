'use strict';

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _enums = require('./enums');

var _baseLoader = require('./baseLoader');

var _baseLoader2 = _interopRequireDefault(_baseLoader);

var _angular1xParser = require('./angular1xParser');

var _angular1xParser2 = _interopRequireDefault(_angular1xParser);

_baseLoader2['default'].load('../testData').then(_angular1xParser2['default'].parse);
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function __walk(dir, done) {}

var Utils = (function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    _createClass(Utils, [{
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
    }], [{
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
    }]);

    return Utils;
})();

exports['default'] = Utils;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var RESERVED_WORDS = ['last'];
exports.RESERVED_WORDS = RESERVED_WORDS;
var TYPES = ['factory'];
exports.TYPES = TYPES;
var SUB_TYPES = ['sub factory'];
exports.SUB_TYPES = SUB_TYPES;
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var _esprima = require('esprima');

var _esprima2 = _interopRequireDefault(_esprima);

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _baseTree = require('./baseTree');

var _baseTree2 = _interopRequireDefault(_baseTree);

var BaseLoader = (function () {
  function BaseLoader() {
    _classCallCheck(this, BaseLoader);
  }

  _createClass(BaseLoader, null, [{
    key: 'load',
    value: function load(wildCard) {
      var baseTree = new _baseTree2['default']();
      var deferred = _q2['default'].defer();

      _utils2['default'].walk(wildCard, function (err, results) {
        var content = undefined,
            structure = undefined;

        results.forEach(function (fileName) {
          try {
            _logger2['default'].info('reading ' + fileName);
            content = _fs2['default'].readFileSync(fileName, 'utf-8');
            baseTree.add(_esprima2['default'].parse(content, { tolerant: true }));
          } catch (e) {
            _logger2['default'].warn('failed to read file', fileName, e);
          }
        });

        _logger2['default'].info('returning basetree');
        deferred.resolve(baseTree);
      });

      return deferred.promise;
    }
  }]);

  return BaseLoader;
})();

exports['default'] = BaseLoader;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var BaseTree = (function () {
  function BaseTree() {
    _classCallCheck(this, BaseTree);

    console.log('basetree ctor');
    this.__data = [];
  }

  _createClass(BaseTree, [{
    key: 'add',
    value: function add(subTree) {
      this.__data.push(subTree);
    }
  }, {
    key: 'data',
    get: function get() {
      return this.__data;
    }
  }]);

  return BaseTree;
})();

exports['default'] = BaseTree;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var SEVERITIES = {
  INFO: 'info',
  WARNING: 'warn',
  ERROR: 'error'
};

var Logger = (function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, null, [{
    key: 'log',
    value: function log(msg) {
      var severity = arguments[1] === undefined ? SEVERITIES.INFO : arguments[1];

      console[severity](msg);
    }
  }, {
    key: 'info',
    value: function info(msg) {
      Logger.log(msg, SEVERITIES.INFO);
    }
  }, {
    key: 'warn',
    value: function warn(msg) {
      Logger.log(msg, SEVERITIES.WARNING);
    }
  }, {
    key: 'error',
    value: function error(msg) {
      Logger.log(msg, SEVERITIES.ERROR);
    }
  }]);

  return Logger;
})();

exports['default'] = Logger;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

var _get = function get(_x, _x2, _x3) {
  var _again = true;_function: while (_again) {
    var object = _x,
        property = _x2,
        receiver = _x3;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);if (parent === null) {
        return undefined;
      } else {
        _x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
      }
    } else if ('value' in desc) {
      return desc.value;
    } else {
      var getter = desc.get;if (getter === undefined) {
        return undefined;
      }return getter.call(receiver);
    }
  }
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
}

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _baseParser = require('./baseParser');

var _baseParser2 = _interopRequireDefault(_baseParser);

var Angular1xParser = (function (_BaseParser) {
  function Angular1xParser() {
    _classCallCheck(this, Angular1xParser);

    _get(Object.getPrototypeOf(Angular1xParser.prototype), 'constructor', this).call(this);
  }

  _inherits(Angular1xParser, _BaseParser);

  _createClass(Angular1xParser, null, [{
    key: 'parse',
    value: function parse(tree) {
      _get(Object.getPrototypeOf(Angular1xParser), 'parse', this).call(this, tree);
    }
  }]);

  return Angular1xParser;
})(_baseParser2['default']);

exports['default'] = Angular1xParser;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var BaseParser = (function () {
  function BaseParser() {
    _classCallCheck(this, BaseParser);
  }

  _createClass(BaseParser, null, [{
    key: 'parse',
    value: function parse(tree) {
      _logger2['default'].info('got tree');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = tree.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          _logger2['default'].info(JSON.stringify(item));
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
    }
  }]);

  return BaseParser;
})();

exports['default'] = BaseParser;
module.exports = exports['default'];
//# sourceMappingURL=all.js.map
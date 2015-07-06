'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

var _utilsLogger = require('../utils/logger');

var _utilsLogger2 = _interopRequireDefault(_utilsLogger);

var _baseBaseParser = require('../base/baseParser');

var _baseBaseParser2 = _interopRequireDefault(_baseBaseParser);

var _baseBaseTree = require('../base/baseTree');

var _baseBaseTree2 = _interopRequireDefault(_baseBaseTree);

var _angular1xTree = require('./angular1xTree');

var _angular1xTree2 = _interopRequireDefault(_angular1xTree);

var Angular1xParser = (function (_BaseParser) {
  function Angular1xParser() {
    _classCallCheck(this, Angular1xParser);

    _get(Object.getPrototypeOf(Angular1xParser.prototype), 'constructor', this).call(this);
  }

  _inherits(Angular1xParser, _BaseParser);

  _createClass(Angular1xParser, [{
    key: 'parseItem',
    value: function parseItem() {
      _utilsLogger2['default'].info('parseitem!!!');
    }
  }, {
    key: 'parse',
    value: function parse(tree) {
      var _this = this;

      return _q2['default'].fcall(function () {
        _utilsLogger2['default'].info('got tree');
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = tree.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            _utilsLogger2['default'].error('parse item!', JSON.stringify(item));
            _this.parseItem();
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

        return new _angular1xTree2['default']();
      });
    }
  }], [{
    key: 'schema',
    get: function get() {
      return {
        definition: {
          id: 'arguments[#last#].name',
          type: Utils.TYPES.FACTORY,
          subType: Utils.SUBTYPES.EXTERNAL,
          conditions: [{
            path: 'type',
            value: 'CallExpression'
          }, {
            path: 'callee.property.name',
            value: 'factory'
          }, {
            path: 'arguments[#last#].type',
            value: 'Identifier'
          }],
          properties: {
            name: {
              path: 'arguments[#last#].name'
            }
          }
        },
        references: []
      };
    }
  }]);

  return Angular1xParser;
})(_baseBaseParser2['default']);

exports['default'] = Angular1xParser;
module.exports = exports['default'];

// {
//   conditions: [],
//   properties: {
//     bodyType: {
//       path: 'declarations[0].init.body.body[0].type'
//     }
//   }
// }
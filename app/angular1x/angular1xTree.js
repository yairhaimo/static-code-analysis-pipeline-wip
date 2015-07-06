'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _utilsLogger = require('../utils/logger');

var _utilsLogger2 = _interopRequireDefault(_utilsLogger);

var _baseBaseTree = require('../base/baseTree');

var _baseBaseTree2 = _interopRequireDefault(_baseBaseTree);

var Angular1xTree = (function (_BaseTree) {
  function Angular1xTree() {
    _classCallCheck(this, Angular1xTree);

    _get(Object.getPrototypeOf(Angular1xTree.prototype), 'constructor', this).call(this);
    _utilsLogger2['default'].info('Angular1xTree ctor');
  }

  _inherits(Angular1xTree, _BaseTree);

  return Angular1xTree;
})(_baseBaseTree2['default']);

exports['default'] = Angular1xTree;
module.exports = exports['default'];
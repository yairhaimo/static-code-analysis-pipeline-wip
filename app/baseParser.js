'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _baseTree = require('./baseTree');

var _baseTree2 = _interopRequireDefault(_baseTree);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var BaseParser = function BaseParser() {
  _classCallCheck(this, BaseParser);

  //ctor never runs since we only use the static functions
  _utils2['default'].checkAbstractClass(this, BaseParser);
  _utils2['default'].checkMethodImplementation(this.parse);
}

// parse(tree : BaseTree) {
// }
;

exports['default'] = BaseParser;
module.exports = exports['default'];
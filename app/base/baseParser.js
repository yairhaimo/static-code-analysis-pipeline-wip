'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utilsLogger = require('../utils/logger');

var _utilsLogger2 = _interopRequireDefault(_utilsLogger);

var _baseTree = require('./baseTree');

var _baseTree2 = _interopRequireDefault(_baseTree);

var _utilsUtils = require('../utils/utils');

var _utilsUtils2 = _interopRequireDefault(_utilsUtils);

var BaseParser = function BaseParser() {
  _classCallCheck(this, BaseParser);

  //ctor never runs since we only use the static functions
  _utilsUtils2['default'].checkAbstractClass(this, BaseParser);
  _utilsUtils2['default'].checkMethodImplementation(this.parse);
}

// parse(tree : BaseTree) {
// }
;

exports['default'] = BaseParser;
module.exports = exports['default'];
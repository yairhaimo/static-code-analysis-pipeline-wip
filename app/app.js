// import {RESERVED_WORDS, TYPES, SUB_TYPES} from './enums';
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _baseBaseLoader = require('./base/baseLoader');

var _baseBaseLoader2 = _interopRequireDefault(_baseBaseLoader);

var _angular1xAngular1xParser = require('./angular1x/angular1xParser');

var _angular1xAngular1xParser2 = _interopRequireDefault(_angular1xAngular1xParser);

var _a2a2A2A2Dumper = require('./a2a2/A2A2Dumper');

var _a2a2A2A2Dumper2 = _interopRequireDefault(_a2a2A2A2Dumper);

var _baseBaseParser = require('./base/baseParser');

var _baseBaseParser2 = _interopRequireDefault(_baseBaseParser);

var angular1xParser = new _angular1xAngular1xParser2['default']();
var a2a2Dumper = new _a2a2A2A2Dumper2['default']();

_baseBaseLoader2['default'].load('../testData').then(function (tree) {
  return angular1xParser.parse(tree);
}).then(function (tree) {
  return a2a2Dumper.dump(tree);
});
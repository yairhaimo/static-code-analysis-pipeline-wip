// import {RESERVED_WORDS, TYPES, SUB_TYPES} from './enums';
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _baseLoader = require('./baseLoader');

var _baseLoader2 = _interopRequireDefault(_baseLoader);

var _angular1xParser = require('./angular1xParser');

var _angular1xParser2 = _interopRequireDefault(_angular1xParser);

var _A2A2Dumper = require('./A2A2Dumper');

var _A2A2Dumper2 = _interopRequireDefault(_A2A2Dumper);

var _baseParser = require('./baseParser');

var _baseParser2 = _interopRequireDefault(_baseParser);

var angular1xParser = new _angular1xParser2['default']();
var a2a2Dumper = new _A2A2Dumper2['default']();

_baseLoader2['default'].load('../testData').then(function (tree) {
  return angular1xParser.parse(tree);
}).then(function (tree) {
  return a2a2Dumper.dump(tree);
});
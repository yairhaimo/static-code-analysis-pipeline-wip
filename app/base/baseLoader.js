'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _esprima = require('esprima');

var _esprima2 = _interopRequireDefault(_esprima);

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _utilsUtils = require('../utils/utils');

var _utilsUtils2 = _interopRequireDefault(_utilsUtils);

var _utilsLogger = require('../utils/logger');

var _utilsLogger2 = _interopRequireDefault(_utilsLogger);

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

      _utilsUtils2['default'].walk(wildCard, function (err, results) {
        var content = undefined,
            structure = undefined;

        results.forEach(function (fileName) {
          try {
            _utilsLogger2['default'].info('reading ' + fileName);
            content = _fs2['default'].readFileSync(fileName, 'utf-8');
            baseTree.add(_esprima2['default'].parse(content, { tolerant: true }));
          } catch (e) {
            _utilsLogger2['default'].warn('failed to read file', fileName, e);
          }
        });

        _utilsLogger2['default'].info('returning basetree');
        deferred.resolve(baseTree);
      });

      return deferred.promise;
    }
  }]);

  return BaseLoader;
})();

exports['default'] = BaseLoader;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var SEVERITIES = {
  INFO: 'info',
  WARNING: 'warn',
  ERROR: 'error'
};

function __log(args) {
  var severity = arguments[1] === undefined ? SEVERITIES.INFO : arguments[1];

  console[severity](severity + ' - ', args.join(' '));
}

var Logger = (function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, null, [{
    key: 'info',
    value: function info() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      __log(args, SEVERITIES.INFO);
    }
  }, {
    key: 'warn',
    value: function warn() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      __log(args, SEVERITIES.WARNING);
    }
  }, {
    key: 'error',
    value: function error() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      __log(args, SEVERITIES.ERROR);
    }
  }]);

  return Logger;
})();

exports['default'] = Logger;
module.exports = exports['default'];
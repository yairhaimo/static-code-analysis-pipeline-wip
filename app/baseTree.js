'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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
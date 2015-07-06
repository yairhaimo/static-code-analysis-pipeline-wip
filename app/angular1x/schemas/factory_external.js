'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _enums = require('../enums');

var FactoryExternal = (function () {
  function FactoryExternal() {
    _classCallCheck(this, FactoryExternal);
  }

  _createClass(FactoryExternal, [{
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

  return FactoryExternal;
})();
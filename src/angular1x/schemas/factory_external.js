import {TYPES, SUB_TYPES} from '../enums';

class FactoryExternal {
  constructor() {

  }

  get schema() {
    return {
      definition: {
        id: 'arguments[#last#].name',
        type: Utils.TYPES.FACTORY,
        subType: Utils.SUBTYPES.EXTERNAL,
        conditions: [
          {
            path: 'type',
            value: 'CallExpression'
          },
          {
            path: 'callee.property.name',
            value: 'factory'
          },
          {
            path: 'arguments[#last#].type',
            value: 'Identifier'
          }
        ],
        properties: {
          name: {
            path: 'arguments[#last#].name'
          }
        }
      },
      references: []
    };
  }
}

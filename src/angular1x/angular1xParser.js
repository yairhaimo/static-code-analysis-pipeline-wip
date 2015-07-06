import Q from 'q';
import $log from '../utils/logger';
import BaseParser from '../base/baseParser';
import BaseTree from '../base/baseTree';
import Angular1xTree from './angular1xTree';


class Angular1xParser extends BaseParser {
  constructor() {
    super();
  }

  parseItem() {
    $log.info('parseitem!!!');
  }

  parse(tree : BaseTree) : Angular1xTree {
    return Q.fcall(() => {
      $log.info('got tree');
      for (let item of tree.data) {
        $log.info('parse item!', JSON.stringify(item));
        this.parseItem();
      }

      return new Angular1xTree();
    });
  }

  static get schema() {
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
      references: [
        // {
        //   conditions: [],
        //   properties: {
        //     bodyType: {
        //       path: 'declarations[0].init.body.body[0].type'
        //     }
        //   }
        // }
      ]
    };
  }

}

export default Angular1xParser;

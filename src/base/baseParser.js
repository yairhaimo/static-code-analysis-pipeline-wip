import $log from '../utils/logger';
import BaseTree from './baseTree';
import Utils from '../utils/utils';

class BaseParser {
  constructor() {
    //ctor never runs since we only use the static functions
    Utils.checkAbstractClass(this, BaseParser);
    Utils.checkMethodImplementation(this.parse);
  }

  // parse(tree : BaseTree) {
  // }
}

export default BaseParser;

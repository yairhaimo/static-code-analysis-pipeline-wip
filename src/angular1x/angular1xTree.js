import $log from '../utils/logger';
import BaseTree from '../base/baseTree';

class Angular1xTree extends BaseTree {
  constructor() {
    super();
    $log.info('Angular1xTree ctor');
  }
}

export default Angular1xTree;

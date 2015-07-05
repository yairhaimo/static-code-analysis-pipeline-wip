import $log from './logger';
import BaseTree from './baseTree';

class Angular1xTree extends BaseTree {
  constructor() {
    super();
    $log.info('Angular1xTree ctor');
  }
}

export default Angular1xTree;

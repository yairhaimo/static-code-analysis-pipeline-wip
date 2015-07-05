import $log from './logger';
import BaseTree from './baseTree';

class Angular2xTree extends BaseTree {
  constructor() {
    super();
    $log.info('Angular2xTree ctor');
  }
}

export default Angular2xTree;

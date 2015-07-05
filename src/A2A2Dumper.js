import BaseDumper from './baseDumper';
import Angular1xTree from './angular1xTree';
import Angular2xTree from './angular2xTree';
import $log from './logger';

class A2A2Dumper extends BaseDumper {
  constructor() {
    super();
  }

  dump(tree : Angular1xTree) : Angular2xTree {
    $log.info('dumping tree');
  }
}

export default A2A2Dumper;

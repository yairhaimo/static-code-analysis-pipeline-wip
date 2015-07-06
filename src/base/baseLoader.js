import esprima from 'esprima';
import Q from 'q';
import fs from 'fs';
import Utils from '../utils/utils';
import $log from '../utils/logger';
import BaseTree from './baseTree';

class BaseLoader {
  constructor() {

  }

  static load(wildCard : string) : BaseTree {
    let baseTree = new BaseTree();
    let deferred = Q.defer();

    Utils.walk(wildCard, (err, results) => {
      let content, structure;

      results.forEach((fileName) => {
        try {
          $log.info(`reading ${fileName}`);
          content = fs.readFileSync(fileName, 'utf-8');
          baseTree.add(esprima.parse(content, { tolerant: true }));
        }
        catch(e) {
          $log.warn('failed to read file', fileName, e);
        }
      });

      $log.info('returning basetree');
      deferred.resolve(baseTree);
    });

    return deferred.promise;
  }
}


export default BaseLoader;

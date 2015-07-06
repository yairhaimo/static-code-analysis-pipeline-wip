import fs from 'fs';
import _ from 'lodash';


function __walk(dir, done) {

}

class Utils {
  constructor() {
  }



  static walk(dir, done) {
    let results = [];
    fs.readdir(dir, function (err, list) {
        if (err) {
            return done(err);
        }
        let i = 0;
        (function next() {
            let file = list[i++];
            if (!file) {
                return done(null, results);
            }
            file = dir + '/' + file;
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function (err, res) {
                        results = results.concat(res);
                        next();
                    });
                } else {
                    results.push(file);
                    next();
                }
            });
        }());
    });
  }

  static traverse(object, visitor) {
    let key, child;

    if (visitor.call(null, object) === false) {
      return;
    }
    for (key of object) {
      child = object[key];
      if (typeof child === 'object' && child !== null) {
          traverse(child, visitor);
      }
    }
  }

  static checkAbstractClass(instance, constructor) {
    // let constructorName = constructor.name;
    if (instance.constructor.name === constructor.name) {
      throw new TypeError(`Cannot construct ${constructor.name} instances directly`);
    }
  }

  static checkMethodImplementation(method) {
    if (method === undefined) {
     // or maybe test typeof this.method === 'function'
     throw new TypeError('Must override the method');
   }
  }

}

export default Utils;

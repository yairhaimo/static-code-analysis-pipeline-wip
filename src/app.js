// import {RESERVED_WORDS, TYPES, SUB_TYPES} from './enums';
import BaseLoader from './baseLoader';
import Angular1xParser from './angular1xParser';
import A2A2Dumper from './A2A2Dumper';
import BaseParser from './baseParser';

let angular1xParser = new Angular1xParser();
let a2a2Dumper = new A2A2Dumper();

BaseLoader.load('../testData').then((tree)=> angular1xParser.parse(tree)).then((tree)=> a2a2Dumper.dump(tree));

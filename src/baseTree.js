class BaseTree {
  constructor() {
    console.log('basetree ctor');
    this.__data = [];
  }

  add(subTree) {
    this.__data.push(subTree);
  }

  get data() {
    return this.__data;
  }

}

export default BaseTree;

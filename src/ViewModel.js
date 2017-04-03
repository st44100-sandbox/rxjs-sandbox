import Variable from './Variable.js';

export default class ViewModel {
  constructor(props) {
    this.keys = Object.keys(props);
    this.keys.forEach((key) => {
      this[key] = new Variable(props[key]);
    });
  }
}


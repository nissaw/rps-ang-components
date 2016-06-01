import _ from 'lodash';

class BuzzersController {
  constructor(Engine){
    this.Engine = Engine;
  }
  play(option) {
    this.Engine.play(option);
  };
};

BuzzersController.$inject = ['Engine']

export {BuzzersController};

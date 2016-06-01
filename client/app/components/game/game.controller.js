import _ from 'lodash';

class GameController {
  constructor(Engine){
    this.title = 'Time to Play';
    this.Engine = Engine;
    this.record = Engine.record;
  };
}

GameController.$inject = ['Engine'];
export {GameController}

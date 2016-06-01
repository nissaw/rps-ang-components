import _ from 'lodash';

class GameController {
  constructor(Engine){
    this.title = 'Time to Play';
    this.Engine = Engine;
    this.record = Engine.getRecord();
  };
}

GameController.$inject = ['Engine'];
export {GameController}

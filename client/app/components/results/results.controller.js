import _ from 'lodash';

class ResultsController {
  constructor(Engine){
    this.Engine = Engine;
    this.gamesPlayed = Engine.gamesPlayed;
  }
};

ResultsController.$inject = ['Engine'];
export {ResultsController};

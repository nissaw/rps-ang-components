import _ from 'lodash';

class OutcomeController {
  constructor(Engine){
    this.Engine = Engine;
    // assigning local variables to nested properties
    // <ala the commented out line> did not work
    // this.alertStatus = Engine.lastGame.alertStatus;
    this.record = Engine.getRecord();
    this.lastGame = Engine.getLastGame();
  }
};

OutcomeController.$inject = ['Engine'];
export {OutcomeController};

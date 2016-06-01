import _ from 'lodash';

class OutcomeController {
  constructor(Engine){
    this.Engine = Engine;
    // assigning local variables to nested properties
    // <ala the commented out line> did not work
    // this.alertStatus = Engine.lastGame.alertStatus;
    this.record = Engine.record;
    this.lastGame = Engine.lastGame;
  }
};

OutcomeController.$inject = ['Engine'];
export {OutcomeController};

import './game.styl';
import {GameController as controller} from './game.controller';
import template from './game.html';

export const gameDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};

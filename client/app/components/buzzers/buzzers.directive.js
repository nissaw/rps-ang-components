import './buzzers.styl';
import {BuzzersController as controller} from './buzzers.controller';
import template from './buzzers.html';

export const buzzersDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};

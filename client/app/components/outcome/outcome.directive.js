import './outcome.styl';
import {OutcomeController as controller} from './outcome.controller';
import template from './outcome.html';

export const outcomeDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};

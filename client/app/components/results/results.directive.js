import './results.styl';
import {ResultsController as controller} from './results.controller';
import template from './results.html';

export const resultsDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
